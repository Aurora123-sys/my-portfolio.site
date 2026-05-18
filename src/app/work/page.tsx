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
      <section className="relative overflow-hidden pt-40 pb-12 md:pt-48">
        <div className="pointer-events-none absolute inset-0">
          <ShaderField className="absolute inset-0 h-full w-full opacity-25 mix-blend-multiply" variant="coral" />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/60 via-paper/40 to-paper" />
        </div>

        <div className="container relative">
          <div className="text-eyebrow mb-5">{t("work.eyebrow")}</div>
          <h1 className="text-balance text-5xl text-ink-900 md:text-6xl lg:text-[5.4rem]">
            {t("work.title.1")}
            <br />
            <span className="italic-display text-cobalt">{t("work.title.2")}</span>{" "}
            <span className="text-ink-500">{t("work.title.3")}</span>
          </h1>
          <p className="mt-8 max-w-[64ch] text-lg leading-relaxed text-ink-600">{t("work.body")}</p>
        </div>
      </section>

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

      <section className="bg-paper-100 py-24">
        <div className="container">
          <div className="mb-12 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <div className="text-eyebrow mb-4">{t("work.roles.eyebrow")}</div>
              <h2 className="text-4xl text-ink-900 md:text-5xl">
                {t("work.roles.heading.1")}{" "}
                <span className="italic-display text-cobalt">{t("work.roles.heading.2")}</span> {t("work.roles.heading.3")}
              </h2>
            </div>
            <p className="max-w-[56ch] text-lg leading-relaxed text-ink-600">{t("work.roles.body")}</p>
          </div>

          <div className="space-y-4">
            {ROLES.map((r, i) => (
              <motion.article
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="role-card group rounded-3xl border border-line bg-white p-8 shadow-bento transition-all duration-300 hover:-translate-y-0.5 hover:border-cobalt/30"
              >
                <header className="mb-5 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl text-ink-900">{r.title}</h3>
                    <div className="mt-1 text-ink-500">{r.org}</div>
                  </div>
                  <span className="rounded-full border border-line px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-500">
                    {r.when}
                  </span>
                </header>
                <ul className="mb-5 grid gap-3 md:grid-cols-2 md:gap-x-10">
                  {r.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-4 text-sm leading-relaxed text-ink-600 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-cobalt"
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
