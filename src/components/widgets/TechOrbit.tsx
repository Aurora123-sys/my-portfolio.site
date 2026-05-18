"use client";
import { motion } from "framer-motion";

const INNER = [
  { label: "Next.js", color: "#0a0a10" },
  { label: "Nest", color: "#ff5d5f" },
  { label: "TS", color: "#2347ff" },
  { label: "PG", color: "#06d6c8" },
  { label: "Redis", color: "#ff5d5f" },
];
const OUTER = [
  { label: "GPT-4o", color: "#7c3aed" },
  { label: "Stripe", color: "#2347ff" },
  { label: "Twilio", color: "#ff5d5f" },
  { label: "Flutter", color: "#06d6c8" },
  { label: "Swift", color: "#0a0a10" },
  { label: "RN", color: "#2347ff" },
  { label: "AWS", color: "#ffb547" },
];

export default function TechOrbit() {
  return (
    <div className="relative flex h-full min-h-[320px] items-center justify-center">
      {/* concentric guide rings */}
      <RingDots radius={70} dotColor="#0a0a1020" count={36} />
      <RingDots radius={130} dotColor="#0a0a1018" count={56} />

      {/* center logo */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-ink text-paper shadow-bento">
        <span className="font-display text-2xl">R</span>
      </div>

      {/* inner orbit */}
      <motion.div
        className="absolute"
        animate={{ rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        {INNER.map((t, i) => {
          const a = (i / INNER.length) * Math.PI * 2;
          const r = 70;
          return (
            <motion.div
              key={t.label}
              animate={{ rotate: -360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-2.5 py-1 text-[0.7rem] font-medium shadow-rim ring-1 ring-line"
              style={{ left: Math.cos(a) * r, top: Math.sin(a) * r, color: t.color }}
            >
              {t.label}
            </motion.div>
          );
        })}
      </motion.div>

      {/* outer orbit */}
      <motion.div
        className="absolute"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {OUTER.map((t, i) => {
          const a = (i / OUTER.length) * Math.PI * 2;
          const r = 130;
          return (
            <motion.div
              key={t.label}
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-2.5 py-1 text-[0.7rem] font-medium shadow-rim ring-1 ring-line"
              style={{ left: Math.cos(a) * r, top: Math.sin(a) * r, color: t.color }}
            >
              {t.label}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

function RingDots({ radius, dotColor, count }: { radius: number; dotColor: string; count: number }) {
  return (
    <svg viewBox="-200 -200 400 400" className="absolute inset-0">
      {Array.from({ length: count }).map((_, i) => {
        const a = (i / count) * Math.PI * 2;
        return <circle key={i} cx={Math.cos(a) * radius} cy={Math.sin(a) * radius} r="1.5" fill={dotColor} />;
      })}
    </svg>
  );
}
