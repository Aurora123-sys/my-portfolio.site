"use client";
import { motion } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import FeedCard from "@/components/FeedCard";
import ShaderField from "@/components/ShaderField";
import { PROJECTS, ROLES } from "@/lib/data";

export default function WorkPage() {
  const { t } = useLang();

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <ShaderField className="h-full w-full opacity-50" variant="coral" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/40 to-bg" />

        <div className="container relative">
          <div className="text-eyebrow mb-5">{t("work.eyebrow")}</div>
          <h1 className="text-balance text-5xl md:text-6xl lg:text-[5.4rem]">
            {t("work.title.1")}
            <br />
            <span className="italic text-lime">{t("work.title.2")}</span>{" "}
            <span className="text-ink-muted">{t("work.title.3")}</span>
          </h1>
          <p className="mt-8 max-w-[64ch] text-lg leading-relaxed text-ink-muted">{t("work.body")}</p>
        </div>
      </section>

      {/* FEED */}
      <section className="pt-12 pb-24">
        <div className="container">
          <div className="grid gap-7 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <FeedCard project={p} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES — archive */}
      <section className="bg-bg-surface py-24">
        <div className="container">
          <div className="mb-12 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <div className="text-eyebrow mb-4">{t("work.roles.eyebrow")}</div>
              <h2 className="text-4xl md:text-5xl">
                {t("work.roles.heading.1")}{" "}
                <span className="italic text-lime">{t("work.roles.heading.2")}</span> {t("work.roles.heading.3")}
              </h2>
            </div>
            <p className="max-w-[56ch] text-lg leading-relaxed text-ink-muted">{t("work.roles.body")}</p>
          </div>

          <div className="space-y-4">
            {ROLES.map((r, i) => (
              <motion.article
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="role-card group rounded-3xl border border-line bg-bg p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime/25 hover:shadow-glow"
              >
                <header className="mb-5 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl">{r.title}</h3>
                    <div className="mt-1 text-ink-muted">{r.org}</div>
                  </div>
                  <span className="rounded-full border border-line px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">
                    {r.when}
                  </span>
                </header>
                <ul className="mb-5 grid gap-3 md:grid-cols-2 md:gap-x-10">
                  {r.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-4 text-sm leading-relaxed text-ink-muted before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-lime"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {r.tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
