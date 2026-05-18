"use client";
import { motion } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import ShaderField from "@/components/ShaderField";
import { SKILL_GROUPS } from "@/lib/data";

const RING_TO_CONIC: Record<string, string> = {
  lime: "conic-gradient(from 0deg, #c8ff00, #06d6c8, #c8ff00)",
  coral: "conic-gradient(from 0deg, #ff5d5f, #ffb547, #ff5d5f)",
  cyber: "conic-gradient(from 0deg, #7c3aed, #06d6c8, #7c3aed)",
  fire: "conic-gradient(from 0deg, #ffb547, #ff5d5f, #ffb547)",
  aurora: "conic-gradient(from 0deg, #c8ff00, #06d6c8, #2347ff, #7c3aed, #ff5d5f, #c8ff00)",
  cyan: "conic-gradient(from 0deg, #06d6c8, #c8ff00, #06d6c8)",
  violet: "conic-gradient(from 0deg, #7c3aed, #ff5d5f, #7c3aed)",
};

export default function SkillsPage() {
  const { t } = useLang();

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-12 md:pt-48">
        <div className="pointer-events-none absolute inset-0">
          <ShaderField className="absolute inset-0 h-full w-full opacity-25 mix-blend-multiply" variant="cyber" />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/60 via-paper/40 to-paper" />
        </div>

        <div className="container relative">
          <div className="text-eyebrow mb-5">{t("skills.eyebrow")}</div>
          <h1 className="text-balance text-5xl text-ink-900 md:text-6xl lg:text-[5.4rem]">
            {t("skills.title.1")}
            <br />
            <span className="italic-display text-cobalt">{t("skills.title.2")}</span>
          </h1>
          <p className="mt-8 max-w-[64ch] text-lg leading-relaxed text-ink-600">{t("skills.body")}</p>
        </div>
      </section>

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
                className="skill-card group relative overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-bento transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/30"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-25 blur-2xl transition-opacity duration-500 group-hover:opacity-55"
                  style={{ background: RING_TO_CONIC[g.ring] }}
                />
                <header className="mb-5 flex items-center gap-4">
                  <div className="rounded-2xl p-[2px]" style={{ background: RING_TO_CONIC[g.ring] }}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white font-mono text-sm font-semibold text-ink-900">{g.code}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-500">{g.sub}</div>
                    <div className="font-display text-2xl tracking-tight text-ink-900">{g.title}</div>
                  </div>
                </header>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="chip transition-all duration-200 hover:scale-[1.04] hover:border-cobalt/40 hover:bg-cobalt/8 hover:text-ink-900"
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

      <section className="relative overflow-hidden bg-ink-900 py-24 text-paper md:py-28">
        <div className="container-narrow">
          <div className="mb-12 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <div className="text-eyebrow mb-4 text-paper/60">{t("skills.principles.eyebrow")}</div>
              <h2 className="text-4xl md:text-5xl">
                {t("skills.principles.heading.1")}{" "}
                <span className="italic-display text-lime">{t("skills.principles.heading.2")}</span>{" "}
                {t("skills.principles.heading.3")}
              </h2>
            </div>
            <p className="max-w-[56ch] text-lg leading-relaxed text-paper/70">{t("skills.principles.body")}</p>
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
                <p className="text-paper/70">{t(`home.principles.${i}.body`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
