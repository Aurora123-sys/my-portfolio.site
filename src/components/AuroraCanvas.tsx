"use client";
import { useEffect, useRef } from "react";

type Blob = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  color: [number, number, number, number];
  phase: number;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
};

const PALETTE: [number, number, number, number][] = [
  [244, 184, 198, 0.55],
  [201, 182, 232, 0.45],
  [168, 210, 224, 0.45],
  [245, 201, 146, 0.35],
  [185, 227, 199, 0.4],
];

export default function AuroraCanvas({ density = 7 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let mx = 0.5;
    let my = 0.5;
    let rafId = 0;
    let t = 0;
    const blobs: Blob[] = [];
    const particles: Particle[] = [];

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    for (let i = 0; i < density; i++) {
      blobs.push({
        x: Math.random(),
        y: Math.random(),
        r: 220 + Math.random() * 280,
        vx: (Math.random() - 0.5) * 0.0006,
        vy: (Math.random() - 0.5) * 0.0006,
        color: PALETTE[i % PALETTE.length],
        phase: Math.random() * Math.PI * 2,
      });
    }
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0008,
        vy: (Math.random() - 0.5) * 0.0008,
        r: 0.6 + Math.random() * 1.8,
        a: 0.15 + Math.random() * 0.35,
      });
    }

    const onMouse = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth;
      my = e.clientY / window.innerHeight;
    };
    document.addEventListener("mousemove", onMouse);
    window.addEventListener("resize", resize);

    const loop = () => {
      t += 0.008;
      ctx.clearRect(0, 0, w, h);

      blobs.forEach((b, i) => {
        b.x += b.vx + Math.sin(t + b.phase) * 0.0008;
        b.y += b.vy + Math.cos(t + b.phase) * 0.0008;
        if (b.x < -0.2 || b.x > 1.2) b.vx *= -1;
        if (b.y < -0.2 || b.y > 1.2) b.vy *= -1;

        const px = b.x * w + (mx - 0.5) * 32 * (i % 2 ? 1 : -1);
        const py = b.y * h + (my - 0.5) * 32 * (i % 2 ? -1 : 1);
        const grad = ctx.createRadialGradient(px, py, 0, px, py, b.r);
        const [r, g, bl, a] = b.color;
        grad.addColorStop(0, `rgba(${r},${g},${bl},${a})`);
        grad.addColorStop(1, `rgba(${r},${g},${bl},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, b.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = "rgba(20,20,28,0.4)";
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1;
        if (p.y > 1) p.y = 0;
        ctx.globalAlpha = p.a;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      rafId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}
