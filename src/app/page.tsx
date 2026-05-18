"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import TextScramble from "@/components/TextScramble";
import NumberRoller from "@/components/NumberRoller";
import GlassWidget from "@/components/GlassWidget";
import GlassBars from "@/components/GlassBars";
import GlassDonut from "@/components/GlassDonut";
import EditorialCard from "@/components/EditorialCard";
import Scene3D from "@/components/Scene3D";
import Marquee from "@/components/Marquee";
import { PROJECTS, HOME_STATS, MARQUEE } from "@/lib/data";
import { useLang } from "@/components/LanguageProvider";

// Real Unsplash photography (CDN-stable photo IDs)
const HERO_BG =
  "https://images.unsplash.com/photo-1492136344046-866c85e0bf04?auto=format&fit=crop&w=2000&q=80"; // soft pastel cloth/silk
const WORKBENCH =
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2200&q=85"; // dark workspace
const HANDS_KEYBOARD =
  "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=2200&q=85"; // hands on keyboard, low light
const WORLD_MAP_BG =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=85"; // city lights from space

export default function Home() {
  const { t } = useLang();

  return (
    <>
      {/* ============================================================ */}
      {/* 1 · HERO — minimal, big headline + portrait + ONE glass card  */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-48 md:pb-32">
        {/* warm pastel atmosphere */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-warm-blur" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 mix-blend-overlay">
          <Image src={HERO_BG} alt="" fill priority sizes="100vw" className="object-cover" />
        </div>

        <div className="container relative">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="badge-live">{t("common.openToWork")}</span>
            <span className="font-mono text-[0.74rem] uppercase tracking-[0.14em] text-ink-500">
              Tokyo · senior · contract
            </span>
          </div>

          <h1 className="display-hero text-balance font-display text-ink-900">
            <span className="block">Senior engineer.</span>
            <span className="block">
              <TextScramble text="Builder of soft-edge software." className="italic-display text-coral" />
            </span>
          </h1>

          <div className="mt-12 grid items-end gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <p className="max-w-[58ch] text-[1.15rem] leading-[1.55] text-ink-600 md:text-[1.22rem]">
                {t("home.bio")}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton href="/work" className="btn btn-cta">
                  {t("home.action.viewWork")}
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </MagneticButton>
                <MagneticButton href="/about" className="btn btn-ghost">
                  {t("home.action.about")}
                </MagneticButton>
              </div>
            </div>

            {/* portrait + floating glass widget */}
            <div className="relative mx-auto w-full max-w-[460px] lg:ml-auto">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-glow shadow-bento">
                <Image
                  src="/avatar.png"
                  alt="Ravi"
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0">
                  <Scene3D className="h-full w-full opacity-85 mix-blend-multiply" />
                </div>
              </div>

              {/* the prominent floating glass widget */}
              <GlassWidget
                className="absolute -left-6 -bottom-10 w-[78%] p-5 md:-left-16 md:p-6"
                variant="rose"
                delay={0.25}
                rotate={-2}
              >
                <GlassBars />
              </GlassWidget>

              {/* small donut chip */}
              <GlassWidget
                className="absolute -right-4 top-10 p-5 md:-right-10"
                variant="blue"
                delay={0.4}
                rotate={3}
              >
                <GlassDonut />
              </GlassWidget>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2 · STATS — inline editorial counters                          */}
      {/* ============================================================ */}
      <section className="border-y border-line bg-paper-50 py-14 md:py-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {HOME_STATS.map((s) => (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="num text-[clamp(2.6rem,4.6vw,4rem)] text-ink-900">
                  <NumberRoller value={s.value} decimals={"decimals" in s ? s.decimals : 0} />
                  <span className="ml-1 text-[0.45em] text-ink-500">{s.suffix}</span>
                </div>
                <div className="mt-2 max-w-[20ch] font-mono text-[0.74rem] uppercase tracking-[0.14em] text-ink-500">
                  {t(s.key)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3 · STATEMENT — full-bleed photo + centered glass quote        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden py-32 md:py-44">
        <div className="absolute inset-0 -z-10">
          <Image src={WORKBENCH} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/55 via-ink-900/40 to-ink-900/65" />
        </div>

        <div className="container">
          <GlassWidget className="mx-auto max-w-2xl px-8 py-10 md:px-12 md:py-14" delay={0.05}>
            <span className="text-eyebrow">A working philosophy</span>
            <h2 className="mt-5 text-balance font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.05] tracking-[-0.04em] text-ink-900">
              I write the boring code,<br />
              <span className="italic-display text-coral">so the interesting parts can exist.</span>
            </h2>
            <p className="mt-6 max-w-[58ch] leading-relaxed text-ink-600">
              A decade of freelance practice taught me that the hardest part of every project is <em className="italic-display">finishing</em>. The work I take on now is whatever helps a team get there — be it schema, agents, native app, or the deploy script no one wants to write.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-grad-warm ring-2 ring-white/80">
                <Image src="/avatar.png" alt="" width={40} height={40} className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="font-display text-base text-ink-900">Ravi Tsunenori</div>
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-500">{t("home.role")}</div>
              </div>
            </div>
          </GlassWidget>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4 · FEATURED WORK — clean 2x2 grid                             */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32">
        <div className="container">
          <header className="mb-14 max-w-3xl">
            <div className="text-eyebrow mb-5">{t("home.feed.title")}</div>
            <h2 className="display-2xl text-balance text-ink-900">
              Recent work that <span className="italic-display text-coral">shipped</span>.
            </h2>
          </header>

          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <EditorialCard key={p.slug} project={p} />
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <MagneticButton href="/work" className="btn btn-primary">
              {t("home.feed.viewAll")}
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5 · DARK BAND — services on deep forest, Printful-style        */}
      {/* ============================================================ */}
      <section className="relative bg-forest py-24 text-paper md:py-32">
        <div className="container">
          <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
            <div>
              <span className="text-eyebrow text-paper/50">What I do</span>
              <h2 className="mt-5 display-2xl text-paper">
                Four <span className="italic-display text-coral-soft">disciplines</span>, one studio of one.
              </h2>
              <p className="mt-7 max-w-[44ch] text-paper/70">
                Over a decade of freelance work taught me to be the whole engineering team when needed —
                schema to deployment, design system to App Store.
              </p>
            </div>

            <ul className="grid gap-y-8 sm:grid-cols-2">
              {[
                { n: "01", title: "SaaS product engineering", tags: "Next.js · NestJS · PostgreSQL · Stripe" },
                { n: "02", title: "AI agents & RAG systems", tags: "GPT-4o · LangChain · Pinecone · pgvector" },
                { n: "03", title: "Mobile · iOS & Android", tags: "SwiftUI · Flutter · React Native · Kotlin" },
                { n: "04", title: "Integrations & automation", tags: "Twilio · Shopify · Webhooks · n8n" },
              ].map((s) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="font-mono text-[0.78rem] tracking-[0.18em] text-coral-soft">{s.n}</div>
                  <h3 className="mt-2 font-display text-[1.55rem] leading-[1.05] tracking-[-0.03em] text-paper md:text-[1.75rem]">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[36ch] font-mono text-[0.82rem] text-paper/55">{s.tags}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6 · GLASS MOSAIC — 3 floating widgets over warm imagery       */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0 -z-10 bg-cool-blur" />
        <div className="absolute inset-0 -z-10 opacity-25 mix-blend-overlay">
          <Image src={HANDS_KEYBOARD} alt="" fill sizes="100vw" className="object-cover" />
        </div>

        <div className="container">
          <header className="mb-16 max-w-2xl">
            <div className="text-eyebrow mb-5">Always on</div>
            <h2 className="display-2xl text-balance text-ink-900">
              The work behind the <span className="italic-display text-coral">work</span>.
            </h2>
          </header>

          <div className="grid items-start gap-6 md:grid-cols-12 md:gap-8">
            <GlassWidget className="md:col-span-4 p-7 md:p-8" rotate={-2} delay={0.05}>
              <span className="text-eyebrow">In motion</span>
              <h3 className="mt-3 font-display text-[1.6rem] leading-[1.05] text-ink-900">
                3 agent retries.<br /><span className="italic-display text-coral">1 graceful handoff.</span>
              </h3>
              <pre className="mt-5 overflow-hidden rounded-2xl bg-ink-900/95 px-4 py-3 font-mono text-[0.74rem] leading-relaxed text-paper">
{`agent({
  retries: 3,
  onRedFlag: handoff,
})`}
              </pre>
            </GlassWidget>

            <GlassWidget className="md:col-span-4 md:translate-y-8 p-7 md:p-8" variant="rose" rotate={1} delay={0.15}>
              <div className="flex items-center gap-3 mb-5">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/80">
                  <Image src="/avatar.png" alt="" fill sizes="48px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1 font-display text-lg tracking-tight text-ink-900">
                    Ravi
                    <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 text-coral" fill="none">
                      <path d="M2 7.5l3.2 3.2L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="handle">{t("home.handle")}</div>
                </div>
              </div>
              <p className="text-[0.96rem] leading-relaxed text-ink-700">
                Shipping a multi-agent triage rewrite this week. RAG hits replaced with a cost-bounded planner; Δ cost <span className="num text-coral">−42%</span>, Δ accuracy <span className="num text-coral">+11%</span>.
              </p>
              <div className="mt-5 flex gap-2">
                <span className="chip">GPT-4o</span>
                <span className="chip">NestJS</span>
                <span className="chip">Pinecone</span>
              </div>
            </GlassWidget>

            <GlassWidget className="md:col-span-4 p-7 md:p-8" variant="blue" rotate={-1} delay={0.25}>
              <span className="text-eyebrow">Latest reply</span>
              <p className="mt-4 font-display text-[1.45rem] leading-[1.15] tracking-tight text-ink-900">
                “Shipped a multi-agent pipeline in two weeks that we&apos;d sized at two months.”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-grad-cobalt" />
                <div>
                  <div className="font-display text-sm text-ink-900">Sora Imai</div>
                  <div className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-ink-500">
                    Head of Product · Ceras Health
                  </div>
                </div>
              </div>
            </GlassWidget>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7 · WORLD STATS — dark band with city-lights backdrop          */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-ink-900 py-24 text-paper md:py-32">
        <div className="absolute inset-0 -z-0 opacity-25">
          <Image src={WORLD_MAP_BG} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/60 to-ink-900" />
        </div>

        <div className="container relative">
          <div className="grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
            <div>
              <span className="text-eyebrow text-paper/50">Across the world</span>
              <h2 className="mt-5 display-2xl text-paper">
                Shipping in <span className="italic-display text-coral-soft">nine countries</span>, three languages.
              </h2>
            </div>
            <p className="max-w-[44ch] text-paper/70">
              {t("footer.timezone")}. Clients in Tokyo, Singapore, Australia, Brazil, Spain, the UK, the Netherlands, the US, and Mexico. Day-to-day in JST, but the calendar belongs to the client.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {[
              { value: 30, suffix: "+", label: t("home.stat.projects") },
              { value: 9, suffix: "", label: "countries" },
              { value: 4.97, decimals: 2, suffix: " ★", label: t("home.stat.rating") },
              { value: 10, suffix: " yrs", label: t("home.stat.years") },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="num text-[clamp(2.6rem,5vw,4.4rem)] text-paper">
                  <NumberRoller value={s.value} decimals={s.decimals ?? 0} />
                  <span className="ml-1 text-[0.4em] text-paper/60">{s.suffix}</span>
                </div>
                <div className="mt-2 font-mono text-[0.74rem] uppercase tracking-[0.14em] text-paper/55">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8 · CLOSING CTA — clean, coral                                 */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden py-32 md:py-40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-warm-blur opacity-70" />

        <div className="container text-center">
          <span className="text-eyebrow mx-auto justify-center">Up next</span>
          <h2 className="mx-auto mt-6 max-w-[18ch] display-hero text-balance text-ink-900">
            <span className="block">Something good</span>
            <span className="block italic-display text-coral">to ship?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-[48ch] text-lg leading-relaxed text-ink-600">
            Two senior contract slots open for Q3 — greenfield AI and SaaS work preferred.
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticButton href="/work" className="btn btn-cta">
              See the case studies
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticButton>
          </div>
        </div>
      </section>

      <Marquee items={MARQUEE} />
    </>
  );
}
