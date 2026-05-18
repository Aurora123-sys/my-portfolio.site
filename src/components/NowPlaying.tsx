"use client";
import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";

const ITEMS = ["home.now.item1", "home.now.item2", "home.now.item3"] as const;

export default function NowPlaying() {
  const { t } = useLang();
  return (
    <div className="card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet2/8 via-transparent to-cyan2/8" />
      <div className="relative px-6 py-7 md:px-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="badge-live">{t("home.now.title")}</div>
            <h3 className="mt-3 font-display text-2xl tracking-tight">{t("home.now.subtitle")}</h3>
          </div>
          <Equalizer />
        </div>
        <ul className="mt-6 space-y-3">
          {ITEMS.map((k, i) => (
            <motion.li
              key={k}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-3 rounded-2xl border border-line bg-white/[0.02] px-4 py-3"
            >
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-lime shadow-[0_0_8px_#c8ff00]" />
              <span className="text-[0.94rem] text-ink/90">{t(k)}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Equalizer() {
  return (
    <div className="flex items-end gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          className="w-1 rounded-sm bg-lime"
          animate={{ height: [4, 18, 8, 22, 6, 14, 4] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.12,
          }}
        />
      ))}
    </div>
  );
}
