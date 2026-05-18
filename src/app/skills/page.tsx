"use client";
import { motion } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import ShaderField from "@/components/ShaderField";
import { SKILL_GROUPS } from "@/lib/data";
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

export default function SkillsPage() {
  const { t } = useLang();

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <ShaderField className="h-full w-full opacity-50" variant="cyber" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/40 to-bg" />

        <div className="container relative">
          <div className="text-eyebrow mb-5">{t("skills.eyebrow")}</div>
          <h1 className="text-balance text-5xl md:text-6xl lg:text-[5.4rem]">
            {t("skills.title.1")}
            <br />
            <span className="italic text-lime">{t("skills.title.2")}</span>
          </h1>
          <p className="mt-8 max-w-[64ch] text-lg leading-relaxed text-ink-muted">{t("skills.body")}</p>
        </div>
      </section>

      {/* SKILL HIGHLIGHTS / STORY GRID */}
      <section className="pb-24 pt-8">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SKILL_GROUPS.map((g, i) => (
              <motion.article
                key={g.code}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
                className="skill-card group relative overflow-hidden rounded-3xl border border-line bg-bg-surface p-7 transition-all duration-400 hover:-translate-y-1 hover:border-lime/25"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
                  style={{ background: RING_TO_CONIC[g.ring] }}
                />
                <header className="mb-5 flex items-center gap-4">
                  <div className="rounded-2xl p-[2px]" style={{ background: RING_TO_CONIC[g.ring] }}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-bg-card font-mono text-sm font-semibold">
                      {g.code}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-faint">{g.sub}</div>
                    <div className="font-display text-2xl tracking-tight">{g.title}</div>
                  </div>
                </header>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className={clsx(
                        "chip transition-all duration-200",
                        "hover:scale-[1.04] hover:border-lime/30 hover:bg-lime/8 hover:text-ink"
                      )}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="relative overflow-hidden bg-bg-surface py-24 md:py-28">
        <div className="container-narrow">
          <div className="mb-12 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <div className="text-eyebrow mb-4">{t("skills.principles.eyebrow")}</div>
              <h2 className="text-4xl md:text-5xl">
                {t("skills.principles.heading.1")}{" "}
                <span className="italic text-lime">{t("skills.principles.heading.2")}</span>{" "}
                {t("skills.principles.heading.3")}
              </h2>
            </div>
            <p className="max-w-[56ch] text-lg leading-relaxed text-ink-muted">{t("skills.principles.body")}</p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i - 1) * 0.06 }}
              >
                <h3 className="mb-2.5 flex items-baseline gap-3 text-2xl">
                  <span className="num text-base text-lime">0{i}.</span>
                  {t(`home.principles.${i}.title`)}
                </h3>
                <p className="text-ink-muted">{t(`home.principles.${i}.body`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
