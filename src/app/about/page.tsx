"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import { TIMELINE, CERTIFICATIONS } from "@/lib/data";
import ShaderField from "@/components/ShaderField";
import LangBar from "@/components/LangBar";

export default function AboutPage() {
  const { t } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <ShaderField className="h-full w-full opacity-50" variant="cyber" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/40 to-bg" />

        <div className="container relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-eyebrow mb-5">{t("about.eyebrow")}</div>
              <h1 className="text-balance text-5xl md:text-6xl lg:text-[5.4rem]">
                {t("about.title.1")}
                <br />
                <span className="text-ink">{t("about.title.2")} </span>
                <span className="italic text-lime">{t("about.title.3")}</span>
              </h1>
              <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-ink-muted">
                {t("about.lead")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-bg-card">
                <Image
                  src="/avatar.png"
                  alt="Portrait"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
              </div>
              <div className="absolute -right-3 top-6 flex flex-col gap-2.5 md:-right-6">
                <Fact label={t("about.facts.based")} value={t("about.facts.based.value")} />
                <Fact label={t("about.facts.lang")} value={t("about.facts.lang.value")} />
                <Fact label={t("about.facts.rating")} value={t("about.facts.rating.value")} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-eyebrow mb-4">{t("about.story.eyebrow")}</div>
              <h2 className="text-4xl md:text-5xl">{t("about.story.heading")}</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5 text-lg leading-relaxed text-ink-muted"
            >
              <p>{t("about.story.p1")}</p>
              <p>{t("about.story.p2")}</p>
              <p>{t("about.story.p3")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24">
        <div className="container-narrow">
          <div className="mb-12 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <div className="text-eyebrow mb-4">{t("about.journey.eyebrow")}</div>
              <h2 className="text-4xl md:text-5xl">
                {t("about.journey.heading.1")} <span className="italic text-lime">{t("about.journey.heading.2")}</span>
              </h2>
            </div>
            <p className="max-w-[56ch] text-lg leading-relaxed text-ink-muted">{t("about.journey.body")}</p>
          </div>

          <ol className="relative border-l border-dashed border-line-strong pl-8">
            {TIMELINE.map((node, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative pb-12 last:pb-0"
              >
                <span className={`absolute -left-[39px] top-2 block h-3.5 w-3.5 rounded-full ${node.color}`} />
                <div className="mb-1.5 font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-faint">
                  {node.when}
                </div>
                <h3 className="mb-2 text-2xl">{node.title}</h3>
                <p className="max-w-[60ch] text-ink-muted">{node.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="py-24">
        <div className="container-narrow">
          <div className="mb-12 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <div className="text-eyebrow mb-4">{t("about.lang.eyebrow")}</div>
              <h2 className="text-4xl md:text-5xl">
                {t("about.lang.heading.1")} <span className="italic text-lime">{t("about.lang.heading.2")}</span>
              </h2>
            </div>
            <p className="max-w-[56ch] text-lg leading-relaxed text-ink-muted">{t("about.lang.body")}</p>
          </div>

          <div className="space-y-7">
            <LangBar name="日本語 — Japanese" level={t("about.lang.jp.level")} pct={100} />
            <LangBar name="English" level={t("about.lang.en.level")} pct={97} />
            <LangBar name="Español" level={t("about.lang.es.level")} pct={78} />
            <LangBar name="Português" level={t("about.lang.pt.level")} pct={72} />
          </div>
        </div>
      </section>

      {/* CERTS */}
      <section className="py-24">
        <div className="container">
          <div className="mb-12 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <div className="text-eyebrow mb-4">{t("about.certs.eyebrow")}</div>
              <h2 className="text-4xl md:text-5xl">{t("about.certs.heading")}</h2>
            </div>
            <p className="max-w-[56ch] text-lg leading-relaxed text-ink-muted">{t("about.certs.body")}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                className="cert-card group rounded-3xl border border-line bg-bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime/30 hover:shadow-glow"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-grad-lime font-mono text-xs font-bold text-bg">
                  {c.mark}
                </div>
                <h4 className="mb-3 font-display text-[1.05rem] leading-snug">{c.title}</h4>
                <div className="flex justify-between font-mono text-xs text-ink-faint">
                  <span>{c.org}</span>
                  <span>{c.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-line bg-bg-surface/90 px-4 py-3 font-mono text-xs shadow-card backdrop-blur-md">
      <span className="text-ink-faint">{label}</span>
      <strong className="mt-0.5 block font-display text-base font-normal tracking-tight text-ink">
        {value}
      </strong>
    </div>
  );
}
