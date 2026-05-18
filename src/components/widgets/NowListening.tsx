"use client";
import { motion } from "framer-motion";

export default function NowListening() {
  return (
    <div className="flex h-full flex-col gap-5">
      <header className="flex items-center justify-between">
        <div className="badge-live">on repeat</div>
        <Equalizer />
      </header>

      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-grad-warm shadow-rim">
          <span className="absolute inset-0 animate-spin-slower bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.6),transparent_50%)]" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate font-display text-lg">Sky High — Tycho</div>
          <div className="truncate text-sm text-ink-500">Awake · 2014</div>
        </div>
      </div>

      <div>
        <div className="relative h-1 overflow-hidden rounded-full bg-paper-200">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-grad-cobalt"
            initial={{ width: 0 }}
            whileInView={{ width: "62%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="mt-1.5 flex justify-between font-mono text-[0.7rem] text-ink-500">
          <span>2:48</span>
          <span>4:31</span>
        </div>
      </div>
    </div>
  );
}

function Equalizer() {
  const bars = [0, 1, 2, 3, 4];
  return (
    <div className="flex items-end gap-[3px]">
      {bars.map((i) => (
        <motion.span
          key={i}
          className="w-1 rounded-sm bg-cobalt"
          animate={{ height: [4, 18, 8, 22, 6, 14, 4] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
        />
      ))}
    </div>
  );
}
