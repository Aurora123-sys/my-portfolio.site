"use client";
import { useEffect, useRef } from "react";

/**
 * A 3D rotating icosahedron wireframe drawn from scratch with WebGL.
 * No three.js — vertex transforms in a vertex shader, lines via gl.LINES.
 */
export default function Scene3D({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const gl = canvas.getContext("webgl", { antialias: true, alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Icosahedron vertices (golden ratio)
    const t = (1 + Math.sqrt(5)) / 2;
    const verts: [number, number, number][] = [
      [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
      [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
      [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
    ];
    const norm = (v: [number, number, number]): [number, number, number] => {
      const r = Math.sqrt(v[0] ** 2 + v[1] ** 2 + v[2] ** 2);
      return [v[0] / r, v[1] / r, v[2] / r];
    };
    const N = verts.map(norm);
    // edges (30 of an icosahedron)
    const edges: [number, number][] = [
      [0,1],[0,5],[0,7],[0,10],[0,11],
      [1,5],[1,7],[1,8],[1,9],
      [2,3],[2,4],[2,6],[2,10],[2,11],
      [3,4],[3,6],[3,8],[3,9],
      [4,5],[4,9],[4,11],
      [5,9],[5,11],
      [6,7],[6,8],[6,10],
      [7,8],[7,10],
      [8,9],
      [10,11],
    ];

    // line buffer
    const lineData: number[] = [];
    edges.forEach(([a, b]) => {
      lineData.push(...N[a], ...N[b]);
    });

    // point buffer
    const pointData: number[] = [];
    N.forEach((v) => pointData.push(...v));

    const vsSrc = `
      attribute vec3 a_pos;
      uniform mat4 u_proj;
      uniform mat4 u_view;
      uniform mat4 u_model;
      varying float v_depth;
      void main() {
        vec4 worldPos = u_model * vec4(a_pos, 1.0);
        gl_Position = u_proj * u_view * worldPos;
        v_depth = worldPos.z;
        gl_PointSize = 5.5;
      }
    `;
    const fsSrc = `
      precision mediump float;
      uniform vec3 u_color;
      uniform float u_alpha;
      varying float v_depth;
      void main() {
        // fade by depth
        float depth = clamp((v_depth + 1.6) / 3.2, 0.0, 1.0);
        float alpha = u_alpha * mix(0.25, 1.0, depth);
        gl_FragColor = vec4(u_color, alpha);
      }
    `;

    function compile(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        console.error("3D shader compile error:", gl!.getShaderInfoLog(s));
        return null;
      }
      return s;
    }
    const vs = compile(gl.VERTEX_SHADER, vsSrc);
    const fs = compile(gl.FRAGMENT_SHADER, fsSrc);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("3D prog link error:", gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const aLoc = gl.getAttribLocation(prog, "a_pos");
    const uProj = gl.getUniformLocation(prog, "u_proj");
    const uView = gl.getUniformLocation(prog, "u_view");
    const uModel = gl.getUniformLocation(prog, "u_model");
    const uColor = gl.getUniformLocation(prog, "u_color");
    const uAlpha = gl.getUniformLocation(prog, "u_alpha");

    const lineBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, lineBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lineData), gl.STATIC_DRAW);
    const pointBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, pointBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pointData), gl.STATIC_DRAW);

    // perspective matrix util
    const perspective = (fov: number, aspect: number, near: number, far: number) => {
      const f = 1 / Math.tan(fov / 2);
      return new Float32Array([
        f / aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (far + near) / (near - far), -1,
        0, 0, (2 * far * near) / (near - far), 0,
      ]);
    };
    const ident = () =>
      new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    const translate = (m: Float32Array, x: number, y: number, z: number) => {
      m[12] = x;
      m[13] = y;
      m[14] = z;
      return m;
    };
    const multiply = (a: Float32Array, b: Float32Array) => {
      const r = new Float32Array(16);
      for (let i = 0; i < 4; i++)
        for (let j = 0; j < 4; j++) {
          let s = 0;
          for (let k = 0; k < 4; k++) s += a[i * 4 + k] * b[k * 4 + j];
          r[i * 4 + j] = s;
        }
      return r;
    };
    const rotateX = (theta: number) => {
      const c = Math.cos(theta), s = Math.sin(theta);
      return new Float32Array([1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1]);
    };
    const rotateY = (theta: number) => {
      const c = Math.cos(theta), s = Math.sin(theta);
      return new Float32Array([c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1]);
    };

    let rafId = 0;
    let mx = 0;
    let my = 0;
    let tmx = 0;
    let tmy = 0;
    const start = performance.now();

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      gl.viewport(0, 0, canvas.width, canvas.height);
      const proj = perspective(Math.PI / 4, rect.width / rect.height, 0.1, 100);
      gl.uniformMatrix4fv(uProj, false, proj);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
    };
    canvas.parentElement!.addEventListener("mousemove", onMove);

    const view = translate(ident(), 0, 0, -3.6);
    gl.uniformMatrix4fv(uView, false, view);

    const loop = () => {
      const tt = (performance.now() - start) / 1000;
      tmx += (mx - tmx) * 0.08;
      tmy += (my - tmy) * 0.08;
      const rotY = rotateY(tt * 0.35 + tmx * 1.5);
      const rotX = rotateX(tt * 0.22 + tmy * 1.5);
      const model = multiply(rotY, rotX);
      gl.uniformMatrix4fv(uModel, false, model);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // edges
      gl.bindBuffer(gl.ARRAY_BUFFER, lineBuf);
      gl.enableVertexAttribArray(aLoc);
      gl.vertexAttribPointer(aLoc, 3, gl.FLOAT, false, 0, 0);
      gl.uniform3f(uColor, 0.04, 0.04, 0.06);
      gl.uniform1f(uAlpha, 0.8);
      gl.drawArrays(gl.LINES, 0, lineData.length / 3);

      // points (vertices)
      gl.bindBuffer(gl.ARRAY_BUFFER, pointBuf);
      gl.vertexAttribPointer(aLoc, 3, gl.FLOAT, false, 0, 0);
      gl.uniform3f(uColor, 0.78, 1.0, 0.0); // chartreuse
      gl.uniform1f(uAlpha, 0.9);
      gl.drawArrays(gl.POINTS, 0, pointData.length / 3);

      rafId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      canvas.parentElement!.removeEventListener("mousemove", onMove);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(lineBuf);
      gl.deleteBuffer(pointBuf);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}
