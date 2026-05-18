"use client";
import { motion } from "framer-motion";

const ITEMS = [
  { tag: "deploy", body: "flowclinic@v3.18 → prod", time: "2h", color: "bg-cobalt" },
  { tag: "ship", body: "Usage-based Stripe billing live", time: "1d", color: "bg-lime" },
  { tag: "merge", body: "feat: multi-agent cost ceilings", time: "1d", color: "bg-violet2" },
  { tag: "fix", body: "iOS push token refresh race", time: "2d", color: "bg-coral" },
  { tag: "rfc", body: "ADR-014 agent retry strategy", time: "3d", color: "bg-amber2" },
  { tag: "test", body: "+38 unit · +12 e2e", time: "4d", color: "bg-cyan2" },
];

export default function ActivityFeed() {
  return (
    <div className="flex h-full flex-col">
      <header className="mb-5 flex items-end justify-between">
        <div>
          <div className="text-eyebrow">Activity</div>
          <h3 className="mt-2 font-display text-2xl tracking-tight">Recent shipping events.</h3>
        </div>
        <span className="badge-live">live</span>
      </header>
      <ul className="space-y-2.5">
        {ITEMS.map((it, i) => (
          <motion.li
            key={it.body}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="flex items-center gap-3 rounded-2xl border border-line bg-white/70 px-3.5 py-2.5"
          >
            <span className={`h-2 w-2 rounded-full ${it.color} shadow-rim`} />
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-ink-500">{it.tag}</span>
            <span className="flex-1 truncate text-[0.92rem] text-ink-900">{it.body}</span>
            <span className="font-mono text-[0.7rem] text-ink-400">{it.time}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
