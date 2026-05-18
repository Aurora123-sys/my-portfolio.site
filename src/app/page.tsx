"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ShaderField from "@/components/ShaderField";
import ProfileCard from "@/components/ProfileCard";
import StoryStrip from "@/components/StoryStrip";
import FeedCard from "@/components/FeedCard";
import NowPlaying from "@/components/NowPlaying";
import Marquee from "@/components/Marquee";
import { PROJECTS, MARQUEE } from "@/lib/data";
import { useLang } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLang();

  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <ShaderField className="h-full w-full opacity-80" variant="lime" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/50 via-bg/30 to-bg" />

        <div className="container relative">
          <ProfileCard />
        </div>
      </section>

      {/* ============== STORY HIGHLIGHTS ============== */}
      <section className="relative py-12 md:py-16">
        <div className="container">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <div className="text-eyebrow">{t("home.stories.title")}</div>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
                {t("home.stories.subtitle")}
              </h2>
            </div>
            <span className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-faint">
              7 / 7
            </span>
          </div>
          <StoryStrip />
        </div>
      </section>

      {/* ============== PINNED FEED ============== */}
      <section className="relative pb-24 pt-12">
        <div className="container">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-eyebrow">
                <PinIcon /> {t("home.feed.title")}
              </div>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
                {t("home.feed.subtitle")}
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden text-sm text-ink-muted underline-offset-4 hover:text-ink hover:underline sm:inline-flex"
            >
              {t("home.feed.viewAll")} →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <FeedCard project={p} />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center sm:hidden">
            <Link href="/work" className="btn btn-ghost">
              {t("home.feed.viewAll")}
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============== NOW + PRINCIPLES ============== */}
      <section className="relative pb-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:gap-8">
            <NowPlaying />

            <div className="card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-lime/8 via-transparent to-coral/8" />
              <div className="relative px-6 py-7 md:px-8">
                <div className="text-eyebrow">{t("home.principles.title")}</div>
                <h3 className="mt-3 max-w-md font-display text-2xl tracking-tight">
                  {t("home.principles.body")}
                </h3>

                <ul className="mt-7 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                    >
                      <div className="mb-1.5 flex items-center gap-2.5">
                        <span className="num text-[0.92rem] text-lime">0{i}.</span>
                        <span className="font-display text-[1.05rem] tracking-tight">
                          {t(`home.principles.${i}.title`)}
                        </span>
                      </div>
                      <p className="text-[0.88rem] leading-relaxed text-ink-muted">
                        {t(`home.principles.${i}.body`)}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== MARQUEE ============== */}
      <Marquee items={MARQUEE} />
    </>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
      <path
        d="M6 1.5l4 4-1.5 1.5L11 9.5l-1 1L7 7.5 4 10.5l-1-1L5.5 7 4 5.5l1.5-1.5L4 2.5l2-1z"
        fill="currentColor"
      />
    </svg>
  );
}
