"use client";
import { motion } from "framer-motion";

export default function GlassDonut({
  value = 12,
  label = "live engagements",
  trend = "+24%",
  pct = 76,
}: {
  value?: number;
  label?: string;
  trend?: string;
  pct?: number;
}) {
  const r = 56;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct / 100);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-36 w-36">
        <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
          <defs>
            <linearGradient id="gd" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#e85a4f" />
              <stop offset="1" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <circle cx="70" cy="70" r={r} stroke="rgba(10,10,16,0.10)" strokeWidth="10" fill="none" />
          <motion.circle
            cx="70"
            cy="70"
            r={r}
            stroke="url(#gd)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="num text-5xl text-ink-900">{value}</span>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-500">
        <span>{label}</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-coral/12 px-2 py-0.5 text-[0.66rem] text-coral">
          {trend}
          <svg viewBox="0 0 10 10" className="h-2.5 w-2.5"><path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" /></svg>
        </span>
      </div>
    </div>
  );
}
