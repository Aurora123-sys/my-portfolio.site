"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function LangBar({
  name,
  level,
  pct,
}: {
  name: string;
  level: string;
  pct: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-display text-xl">{name}</span>
        <span className="font-mono text-xs text-ink-400">{level}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-ink/10">
        <motion.div
          initial={reduce ? { width: `${pct}%` } : { width: 0 }}
          animate={start ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-grad-aurora"
        />
      </div>
    </div>
  );
}
