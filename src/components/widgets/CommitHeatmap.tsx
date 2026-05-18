"use client";
import { motion } from "framer-motion";

const WEEKS = 26;
const DAYS = 7;

function pseudoRandom(seed: number) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

export default function CommitHeatmap({ title = "Shipping cadence", subtitle = "Last 26 weeks" }: { title?: string; subtitle?: string }) {
  const rng = pseudoRandom(424242);
  const cells: number[][] = Array.from({ length: WEEKS }, () =>
    Array.from({ length: DAYS }, () => {
      const r = rng();
      if (r < 0.18) return 0;
      if (r < 0.45) return 1;
      if (r < 0.72) return 2;
      if (r < 0.92) return 3;
      return 4;
    })
  );

  const colors = ["bg-paper-200", "bg-cobalt/15", "bg-cobalt/35", "bg-cobalt/60", "bg-cobalt"];
  const total = cells.flat().reduce((a, b) => a + (b > 0 ? 1 : 0), 0);

  return (
    <div className="flex h-full flex-col">
      <header className="mb-5 flex items-end justify-between">
        <div>
          <div className="text-eyebrow">{subtitle}</div>
          <h3 className="mt-2 font-display text-2xl tracking-tight">{title}</h3>
        </div>
        <span className="font-mono text-[0.74rem] uppercase tracking-[0.1em] text-ink-500">
          <span className="text-ink-900">{total}</span> shipped days
        </span>
      </header>
      <div className="flex gap-[3px]">
        {cells.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((c, di) => (
              <motion.span
                key={di}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (wi * 7 + di) * 0.004, duration: 0.4 }}
                className={`h-2.5 w-2.5 rounded-[3px] ${colors[c]} md:h-3 md:w-3`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between font-mono text-[0.7rem] text-ink-500">
        <span>less</span>
        <div className="flex items-center gap-1">
          {colors.map((c, i) => (
            <span key={i} className={`h-2.5 w-2.5 rounded-[3px] ${c}`} />
          ))}
        </div>
        <span>more</span>
      </div>
    </div>
  );
}
