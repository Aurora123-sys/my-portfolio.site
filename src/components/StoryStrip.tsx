"use client";
import { motion } from "framer-motion";
import { STORIES } from "@/lib/data";
import { useLang } from "./LanguageProvider";
import clsx from "clsx";

const RING_TO_CONIC: Record<string, string> = {
  lime: "conic-gradient(from 0deg, #c8ff00, #3df0d1, #c8ff00)",
  coral: "conic-gradient(from 0deg, #ff5d7c, #ffb547, #ff5d7c)",
  cyber: "conic-gradient(from 0deg, #9d6cff, #3df0d1, #9d6cff)",
  fire: "conic-gradient(from 0deg, #ffb547, #ff5d7c, #ffb547)",
  aurora: "conic-gradient(from 0deg, #c8ff00, #3df0d1, #9d6cff, #ff5d7c, #c8ff00)",
  cyan: "conic-gradient(from 0deg, #3df0d1, #c8ff00, #3df0d1)",
  violet: "conic-gradient(from 0deg, #9d6cff, #ff5d7c, #9d6cff)",
};

export default function StoryStrip() {
  const { t } = useLang();

  return (
    <div className="relative">
      <div className="scrollbar-hidden flex gap-5 overflow-x-auto pb-3 md:gap-7">
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
                className={clsx(
                  "rounded-full p-[3px]",
                  "transition-transform duration-300 hover:scale-105"
                )}
                style={{ background: RING_TO_CONIC[s.ring] }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-bg text-xl md:h-20 md:w-20 md:text-2xl">
                  <span className="select-none">{s.emoji}</span>
                </div>
              </div>
              <span
                className="absolute -inset-1 -z-10 rounded-full opacity-40 blur-md transition-opacity duration-300 group-hover:opacity-80"
                style={{ background: RING_TO_CONIC[s.ring] }}
              />
            </div>
            <span className="text-[0.78rem] font-medium text-ink-muted">
              {t(s.labelKey)}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
