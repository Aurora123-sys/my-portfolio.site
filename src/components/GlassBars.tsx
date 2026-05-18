"use client";
import { motion } from "framer-motion";

/**
 * 3D-feel bar chart with gradient cylindrical bars + soft floor reflection,
 * inspired by the glass-vial dashboard reference.
 */
export default function GlassBars({
  title = "Shipping rhythm",
  caption = "Last 6 weeks",
  values = [38, 52, 49, 68, 84, 96],
  labels = ["W1", "W2", "W3", "W4", "W5", "W6"],
}: {
  title?: string;
  caption?: string;
  values?: number[];
  labels?: string[];
}) {
  const max = Math.max(...values, 100);
  return (
    <div>
      <header className="mb-4 flex items-end justify-between">
        <h4 className="font-display text-lg tracking-tight text-ink-900">{title}</h4>
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-500">{caption}</span>
      </header>

      <div className="flex h-32 items-end gap-3">
        {values.map((v, i) => {
          const h = (v / max) * 100;
          return (
            <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full overflow-hidden rounded-t-lg"
                style={{
                  background:
                    "linear-gradient(180deg, #a78bfa 0%, #f5b7c5 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.5), 0 8px 18px -4px rgba(167,139,250,0.45)",
                }}
              >
                {/* highlight strip */}
                <span className="pointer-events-none absolute inset-y-0 left-1 w-1 rounded-full bg-white/60" />
              </motion.div>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.08em] text-ink-400">{labels[i]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
