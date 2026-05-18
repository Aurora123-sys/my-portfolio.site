"use client";
import { useEffect, useRef } from "react";

/**
 * Fragment-shader-driven flow-field background.
 * Two-pass blended FBM noise + chroma-shifted color cycling — no library.
 */
export default function ShaderField({
  className,
  variant = "lime",
}: {
  className?: string;
  variant?: "lime" | "coral" | "cyber";
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const gl = canvas.getContext("webgl", { antialias: true, alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const fsSrc = `
      precision highp float;
      uniform vec2 u_res;
      uniform float u_t;
      uniform vec2 u_mouse;
      uniform vec3 u_c1;
      uniform vec3 u_c2;
      uniform vec3 u_c3;

      // hash + fbm
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }
      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p *= 2.0;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);

        // mouse-attracted flow
        vec2 m = (u_mouse - 0.5) * 1.4;
        vec2 q = uv * 1.2 + vec2(u_t * 0.04, u_t * 0.025);
        q += 0.18 * vec2(fbm(q + u_t * 0.05), fbm(q - u_t * 0.04));
        q += 0.12 * m;

        float n1 = fbm(q);
        float n2 = fbm(q * 1.7 + 5.0);
        float n3 = fbm(q * 2.5 + 9.0);

        // weights
        float w1 = smoothstep(0.2, 0.85, n1);
        float w2 = smoothstep(0.3, 0.9, n2);
        float w3 = smoothstep(0.25, 0.8, n3 * 0.9 + 0.1);

        vec3 col = mix(u_c1, u_c2, w1);
        col = mix(col, u_c3, w2 * 0.7);
        col += u_c2 * w3 * 0.15;

        // chroma shift / vignette
        float v = 1.0 - smoothstep(0.6, 1.3, length(uv));
        col *= 0.10 + v * 0.95;

        // film grain
        float g = (hash(gl_FragCoord.xy + u_t) - 0.5) * 0.045;
        col += g;

        // alpha-mask the deep darks so background bleeds through
        float alpha = smoothstep(0.0, 0.6, length(col));
        gl_FragColor = vec4(col, alpha);
      }
    `;
    const vsSrc = `
      attribute vec2 a_pos;
      void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
    `;

    function compile(type: number, src: string) {
      const sh = gl!.createShader(type)!;
      gl!.shaderSource(sh, src);
      gl!.compileShader(sh);
      if (!gl!.getShaderParameter(sh, gl!.COMPILE_STATUS)) {
        console.error("shader compile error:", gl!.getShaderInfoLog(sh));
        return null;
      }
      return sh;
    }
    const vs = compile(gl.VERTEX_SHADER, vsSrc);
    const fs = compile(gl.FRAGMENT_SHADER, fsSrc);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("program link error:", gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1]),
      gl.STATIC_DRAW
    );
    const posLoc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uT = gl.getUniformLocation(prog, "u_t");
    const uM = gl.getUniformLocation(prog, "u_mouse");
    const uC1 = gl.getUniformLocation(prog, "u_c1");
    const uC2 = gl.getUniformLocation(prog, "u_c2");
    const uC3 = gl.getUniformLocation(prog, "u_c3");

    const palettes: Record<string, [number, number, number][]> = {
      lime: [
        [0.78, 1.0, 0.0],
        [0.24, 0.94, 0.82],
        [0.62, 0.42, 1.0],
      ],
      coral: [
        [1.0, 0.36, 0.48],
        [1.0, 0.71, 0.28],
        [0.62, 0.42, 1.0],
      ],
      cyber: [
        [0.62, 0.42, 1.0],
        [0.24, 0.94, 0.82],
        [1.0, 0.36, 0.48],
      ],
    };
    const p = palettes[variant];
    gl.uniform3f(uC1, p[0][0], p[0][1], p[0][2]);
    gl.uniform3f(uC2, p[1][0], p[1][1], p[1][2]);
    gl.uniform3f(uC3, p[2][0], p[2][1], p[2][2]);

    let mx = 0.5;
    let my = 0.5;
    let tmx = 0.5;
    let tmy = 0.5;
    let rafId = 0;
    const start = performance.now();

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth;
      my = 1 - e.clientY / window.innerHeight;
    };
    document.addEventListener("mousemove", onMove);

    const loop = () => {
      const t = (performance.now() - start) / 1000;
      tmx += (mx - tmx) * 0.06;
      tmy += (my - tmy) * 0.06;
      gl.uniform1f(uT, t);
      gl.uniform2f(uM, tmx, tmy);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMove);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(posBuf);
    };
  }, [variant]);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
