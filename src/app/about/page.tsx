"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LanguageProvider";
import { TIMELINE, CERTIFICATIONS } from "@/lib/data";

const LANGS = [
  { name: "日本語", level: "Native (first language)" },
  { name: "English", level: "Fluent · TOEIC 990 / 990" },
  { name: "Español", level: "Professional · client meetings" },
  { name: "Português (BR)", level: "Professional · BR clients" },
];

export default function AboutPage() {
  const { t } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48">
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <Reveal>
              <div>
                <p className="text-eyebrow">{t("about.eyebrow")}</p>
                <h1 className="mt-5 display-hero text-balance text-ink-900">
                  <span className="block">A studio of one,</span>
                  <span className="block italic-display text-coral">shipping things that last.</span>
                </h1>
                <p className="mt-8 max-w-[58ch] text-[1.15rem] leading-relaxed text-ink-600">
                  {t("about.lead")}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-line shadow-bento">
                <Image
                  src="/avatar.png"
                  alt="Portrait of Ravi"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  priority
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal>
              <div>
                <p className="text-eyebrow">{t("about.story.eyebrow")}</p>
                <h2 className="mt-4 display-2xl text-ink-900">{t("about.story.heading")}</h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-[1.1rem] leading-[1.7] text-ink-600">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
                <p>{t("about.story.p3")}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PHOTO BAND */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] md:h-[520px]">
          <Image src="/images/notebook.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/30 to-transparent" />
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24">
        <div className="container-narrow">
          <Reveal>
            <div className="mb-14">
              <p className="text-eyebrow">{t("about.journey.eyebrow")}</p>
              <h2 className="mt-4 display-2xl text-ink-900">
                {t("about.journey.heading.1")} <span className="italic-display text-coral">{t("about.journey.heading.2")}</span>
              </h2>
              <p className="mt-6 max-w-[56ch] text-ink-600">{t("about.journey.body")}</p>
            </div>
          </Reveal>

          <ol className="relative border-l border-dashed border-line-strong pl-8">
            {TIMELINE.map((node, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <li className="relative pb-12 last:pb-0">
                  <span className={`absolute -left-[39px] top-2 block h-3.5 w-3.5 rounded-full ${node.color}`} />
                  <div className="mb-1.5 font-mono text-[0.74rem] uppercase tracking-[0.14em] text-ink-500">{node.when}</div>
                  <h3 className="mb-2 text-2xl text-ink-900">{node.title}</h3>
                  <p className="max-w-[60ch] text-ink-600">{node.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* LANGUAGES (chips, simple) */}
      <section className="py-20">
        <div className="container-narrow">
          <Reveal>
            <div className="mb-10">
              <p className="text-eyebrow">{t("about.lang.eyebrow")}</p>
              <h2 className="mt-4 display-2xl text-ink-900">
                {t("about.lang.heading.1")} <span className="italic-display text-coral">{t("about.lang.heading.2")}</span>
              </h2>
              <p className="mt-6 max-w-[56ch] text-ink-600">{t("about.lang.body")}</p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {LANGS.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.05}>
                <div className="flex items-baseline justify-between rounded-2xl border border-line bg-paper-50 px-5 py-4">
                  <span className="font-display text-xl">{l.name}</span>
                  <span className="font-mono text-[0.74rem] uppercase tracking-[0.1em] text-ink-500">{l.level}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-24">
        <div className="container">
          <Reveal>
            <div className="mb-12">
              <p className="text-eyebrow">{t("about.certs.eyebrow")}</p>
              <h2 className="mt-4 display-2xl text-ink-900">{t("about.certs.heading")}</h2>
              <p className="mt-6 max-w-[56ch] text-ink-600">{t("about.certs.body")}</p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.06}>
                <div className="rounded-3xl border border-line bg-paper-50 p-6">
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-paper font-mono text-xs font-bold">{c.mark}</div>
                  <h4 className="mb-2 font-display text-[1.05rem] leading-snug text-ink-900">{c.title}</h4>
                  <div className="flex justify-between font-mono text-xs text-ink-500">
                    <span>{c.org}</span>
                    <span>{c.year}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-24 text-paper md:py-28">
        <div className="container text-center">
          <Reveal>
            <p className="text-eyebrow text-paper/55 mx-auto justify-center">Next step</p>
            <h2 className="mx-auto mt-4 max-w-[22ch] display-2xl text-paper">
              Want the <span className="italic-display text-coral-soft">long version</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-[48ch] text-paper/75">
              See selected work, then send a note about your project. I&apos;ll share case studies, references, and the full PDF resume tailored to the engagement.
            </p>
            <div className="mt-8">
              <Link href="/work" className="btn btn-cta">
                Open the work
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
