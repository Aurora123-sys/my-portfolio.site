"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LanguageProvider";
import { SKILL_GROUPS } from "@/lib/data";

export default function SkillsPage() {
  const { t } = useLang();

  return (
    <>
      <section className="pt-40 pb-12 md:pt-48">
        <div className="container">
          <Reveal>
            <p className="text-eyebrow mb-5">{t("skills.eyebrow")}</p>
            <h1 className="display-hero text-balance text-ink-900">
              {t("skills.title.1")}<br />
              <span className="italic-display text-coral">{t("skills.title.2")}</span>
            </h1>
            <p className="mt-8 max-w-[64ch] text-[1.15rem] leading-relaxed text-ink-600">{t("skills.body")}</p>
          </Reveal>
        </div>
      </section>

      {/* PHOTO BAND */}
      <section className="relative overflow-hidden">
        <div className="relative h-[380px] md:h-[480px]">
          <Image src="/images/code-screen.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/30 via-transparent to-paper" />
        </div>
      </section>

      {/* STACK GROUPS */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SKILL_GROUPS.map((g, i) => (
              <Reveal key={g.code} delay={(i % 3) * 0.06}>
                <article className="rounded-3xl border border-line bg-paper-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-coral/30 hover:bg-paper">
                  <header className="mb-5 flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink font-mono text-xs font-semibold text-paper">
                      {g.code}
                    </div>
                    <div>
                      <div className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-500">{g.sub}</div>
                      <div className="font-display text-2xl tracking-tight text-ink-900">{g.title}</div>
                    </div>
                  </header>
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((it) => (
                      <span key={it} className="chip">{it}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES — dark band */}
      <section className="relative overflow-hidden bg-forest py-24 text-paper md:py-32">
        <div className="container-narrow">
          <Reveal>
            <div className="mb-14 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <div>
                <p className="text-eyebrow text-paper/55">{t("skills.principles.eyebrow")}</p>
                <h2 className="mt-4 display-2xl text-paper">
                  {t("skills.principles.heading.1")}{" "}
                  <span className="italic-display text-coral-soft">{t("skills.principles.heading.2")}</span>{" "}
                  {t("skills.principles.heading.3")}
                </h2>
              </div>
              <p className="max-w-[56ch] text-paper/75">{t("skills.principles.body")}</p>
            </div>
          </Reveal>

          <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <Reveal key={i} delay={(i - 1) * 0.06}>
                <div>
                  <div className="mb-3 inline-flex items-center gap-3">
                    <span className="num text-coral-soft">0{i}.</span>
                  </div>
                  <h3 className="mb-3 display-xl text-paper">{t(`home.principles.${i}.title`)}</h3>
                  <p className="max-w-[56ch] text-paper/75">{t(`home.principles.${i}.body`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container text-center">
          <Reveal>
            <p className="text-eyebrow mx-auto justify-center">Match check</p>
            <h2 className="mx-auto mt-4 max-w-[22ch] display-2xl text-balance text-ink-900">
              Stack <span className="italic-display text-coral">looks right</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-[48ch] text-ink-600">
              Most engagements start with a 30-minute scoping call. No deck required.
            </p>
            <div className="mt-8">
              <Link href="/work" className="btn btn-cta">
                See selected work
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
