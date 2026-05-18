"use client";
import { motion } from "framer-motion";
import { STORIES } from "@/lib/data";
import { useLang } from "./LanguageProvider";

const RING_TO_CONIC: Record<string, string> = {
  lime: "conic-gradient(from 0deg, #c8ff00, #06d6c8, #c8ff00)",
  coral: "conic-gradient(from 0deg, #ff5d5f, #ffb547, #ff5d5f)",
  cyber: "conic-gradient(from 0deg, #7c3aed, #06d6c8, #7c3aed)",
  fire: "conic-gradient(from 0deg, #ffb547, #ff5d5f, #ffb547)",
  aurora: "conic-gradient(from 0deg, #c8ff00, #06d6c8, #2347ff, #7c3aed, #ff5d5f, #c8ff00)",
  cyan: "conic-gradient(from 0deg, #06d6c8, #c8ff00, #06d6c8)",
  violet: "conic-gradient(from 0deg, #7c3aed, #ff5d5f, #7c3aed)",
};

export default function StoryStrip() {
  const { t } = useLang();

  return (
    <div className="scrollbar-hidden flex gap-5 overflow-x-auto pb-2 md:gap-7">
      {STORIES.map((s, i) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04, duration: 0.5 }}
          className="story-bubble flex shrink-0 flex-col items-center gap-2"
          data-cursor="hover"
        >
          <div className="relative">
            <div
              className="rounded-full p-[3px] transition-transform duration-300 hover:scale-105"
              style={{ background: RING_TO_CONIC[s.ring] }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl md:h-20 md:w-20 md:text-2xl">
                <span className="select-none">{s.emoji}</span>
              </div>
            </div>
            <span
              className="absolute -inset-1 -z-10 rounded-full opacity-30 blur-md"
              style={{ background: RING_TO_CONIC[s.ring] }}
            />
          </div>
          <span className="text-[0.78rem] font-medium text-ink-700">{t(s.labelKey)}</span>
        </motion.div>
      ))}
    </div>
  );
}
