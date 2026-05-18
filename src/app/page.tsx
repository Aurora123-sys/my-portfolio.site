"use client";
import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import LogoStrip from "@/components/LogoStrip";
import ProjectTile, { type ProjectTileData } from "@/components/ProjectTile";
import { useLang } from "@/components/LanguageProvider";

const PROJECTS: ProjectTileData[] = [
  {
    slug: "flowclinic",
    title: "FlowClinic — multi-tenant clinic platform",
    category: "SaaS · Health",
    era: "2023 →",
    blurb: "12K MAU across three countries. Scheduling, billing, RBAC, patient comms.",
    image: "/images/workshop.jpg",
    tone: "dark",
    span: "wide",
  },
  {
    slug: "ceras",
    title: "Ceras Health WhatsApp AI triage",
    category: "AI · LLM",
    era: "2024 →",
    blurb: "GPT-4o + Twilio with human handoff. Cut support volume −38% in Q1.",
    image: "/images/code-screen.jpg",
    tone: "dark",
  },
  {
    slug: "timeleft",
    title: "Timeleft — real-time social discovery",
    category: "Mobile · Social",
    era: "2023 — 24",
    blurb: "React Native + Expo. Onboarding redesign → +21% D7 retention.",
    image: "/images/pastel-silk.jpg",
    tone: "light",
  },
  {
    slug: "herlipto",
    title: "Her lip to — luxury fashion iOS",
    category: "iOS · Commerce",
    era: "2022 — 23",
    blurb: "SwiftUI carousels with synchronized wishlists, restock alerts, Apple Pay.",
    image: "/images/frames.jpg",
    tone: "light",
    span: "wide",
  },
];

const STATS = [
  { value: 30, suffix: "+", label: "projects shipped" },
  { value: 12, suffix: "K", label: "monthly active users" },
  { value: 9, suffix: "", label: "client countries" },
  { value: 4.97, decimals: 2, suffix: " ★", label: "Top-Rated · 200+" },
];

const STACK = ["Next.js", "NestJS", "TypeScript", "GPT-4o", "Flutter", "SwiftUI", "Stripe", "AWS"];

export default function Home() {
  const { t } = useLang();

  return (
    <>
      {/* ============================================================ */}
      {/* 1 · HERO — Printful anatomy: huge headline LEFT, photo RIGHT */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <Reveal>
              <div>
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="badge">{t("common.openToWork")}</span>
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-500">
                    Tokyo · senior contract
                  </span>
                </div>
                <h1 className="display-hero text-balance text-ink-900">
                  <span className="block">Bring your idea</span>
                  <span className="block italic-display text-coral">to production.</span>
                </h1>
                <p className="mt-9 max-w-[58ch] text-[1.18rem] leading-[1.55] text-ink-600 md:text-[1.25rem]">
                  Senior engineer with a decade of freelance practice. I build the database,
                  the API, the app, the deploy script, and the LLM agent that ties them
                  together — whatever it takes to ship.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Link href="/work" className="btn btn-cta">
                    See selected work
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <Link href="/about" className="btn btn-ghost">Read the story</Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[2rem] ring-1 ring-line shadow-bento lg:ml-auto">
                <Image
                  src="/avatar.png"
                  alt="Portrait of Ravi Tsunenori"
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  priority
                  className="object-cover"
                />
                {/* small floating stat label, glass */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/80 px-4 py-3 backdrop-blur-md shadow-bento">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-ink-500">10 yrs · 200+ contracts</div>
                      <div className="font-display text-lg text-ink-900">Ravi Yoshitomo Tsunenori</div>
                    </div>
                    <span className="num text-[1.6rem] text-coral">4.97<span className="text-base text-ink-400">/5</span></span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2 · LOGO STRIP — tech stack as wordmarks                       */}
      {/* ============================================================ */}
      <LogoStrip items={STACK} title="Tools I reach for, most weeks" />

      {/* ============================================================ */}
      {/* 3 · USPs — 3 column, small icons + headlines + body            */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32">
        <div className="container">
          <Reveal>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="text-eyebrow justify-center">Why teams ship faster with me</p>
              <h2 className="mt-4 display-2xl text-balance text-ink-900">
                People love building <span className="italic-display text-coral">with me</span>.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {[
              {
                icon: "📦",
                title: "Everything in one box",
                body: "Database to deploy, design to App Store. You hire one person; you get the whole engineering team for the duration.",
              },
              {
                icon: "🛠",
                title: "Boring is shippable",
                body: "Postgres, Redis, a queue, a CDN. Exotic infrastructure rarely helps you finish. I pick primitives that survive the night.",
              },
              {
                icon: "🌐",
                title: "Your timezone, your language",
                body: "Bilingual JP/EN, plus Spanish and Portuguese for LATAM teams. I work in client hours, not mine.",
              },
            ].map((u, i) => (
              <Reveal key={u.title} delay={i * 0.08}>
                <div>
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-paper-200 text-2xl">
                    {u.icon}
                  </div>
                  <h3 className="display-xl mb-3 text-ink-900">{u.title}</h3>
                  <p className="max-w-[36ch] text-[1.02rem] leading-relaxed text-ink-600">{u.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4 · DARK BAND — full-bleed photo on forest + CTA               */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-forest text-paper">
        <div className="container">
          <div className="grid items-center gap-12 py-24 md:grid-cols-[1.1fr_1fr] md:gap-16 md:py-32">
            <Reveal>
              <div>
                <p className="text-eyebrow text-paper/55">Take the leap</p>
                <h2 className="mt-4 display-2xl text-paper">
                  Take the leap and start <br /><span className="italic-display">shipping things</span> that last.
                </h2>
                <p className="mt-7 max-w-[44ch] text-[1.05rem] leading-relaxed text-paper/75">
                  Two senior contract slots open for Q3. Greenfield AI and SaaS work preferred —
                  I&apos;ll send a fixed-scope proposal within 48 hours of our first call.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/work" className="btn btn-cta">
                    View case studies
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <Link href="/skills" className="btn btn-light">Explore the stack</Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-bento">
                <Image src="/images/frames.jpg" alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-forest-900/70 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5 · 3-USP ROW — concrete deliverables                          */}
      {/* ============================================================ */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { num: "100K+", label: "events / day", body: "Idempotent webhook pipelines with HMAC validation + DLQs." },
              { num: "&lt; 4s", label: "median P50 reply", body: "GPT-4o triage with deterministic human handoff." },
              { num: "99.94%", label: "uptime · 30d", body: "SLO dashboards in production before the second feature ships." },
            ].map((u, i) => (
              <Reveal key={u.label} delay={i * 0.07}>
                <div className="rounded-3xl border border-line bg-paper-50 p-8">
                  <div className="num text-[2.6rem] text-coral md:text-[3.2rem]" dangerouslySetInnerHTML={{ __html: u.num }} />
                  <div className="mt-1 font-mono text-[0.74rem] uppercase tracking-[0.14em] text-ink-500">{u.label}</div>
                  <p className="mt-5 text-ink-600">{u.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6 · PROJECT MOSAIC — like Printful product grid                */}
      {/* ============================================================ */}
      <section className="py-12 md:py-20">
        <div className="container">
          <Reveal>
            <div className="mb-14 max-w-3xl">
              <p className="text-eyebrow">Selected work</p>
              <h2 className="mt-4 display-2xl text-balance text-ink-900">
                Choose from <span className="italic-display text-coral">four case studies</span> across SaaS, AI, and mobile.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
            {PROJECTS.map((p) => (
              <ProjectTile key={p.slug} p={p} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/work" className="btn btn-dark">
              Browse all work
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7 · IMAGE + FORM-LOOK — "Your passion really can pay"          */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-line shadow-bento">
                <Image src="/images/hands-keyboard.jpg" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="text-eyebrow">Your idea, shipped</p>
                <h2 className="mt-4 display-2xl text-balance text-ink-900">
                  Your idea really <br /><span className="italic-display text-coral">can pay</span>.
                </h2>
                <p className="mt-7 max-w-[44ch] text-[1.05rem] leading-relaxed text-ink-600">
                  A quick 30-minute scoping call is enough to know whether the fit is real.
                  I send a fixed-scope proposal within 48 hours, and we agree on milestones,
                  not hours.
                </p>
                <ul className="mt-7 space-y-3 text-ink-700">
                  {[
                    "Fixed-scope, milestone-based proposals",
                    "Weekly demos on Loom — no surprise demos",
                    "NDA-friendly · references within 48 hours",
                    "Day-to-day in JST · working in your timezone",
                  ].map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-coral" />
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <Link href="/work" className="btn btn-cta">
                    Start the conversation
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8 · PHOTO WITH OVERLAY — "Unlimited quality the world over"   */}
      {/* ============================================================ */}
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[60vh] min-h-[420px]">
          <Image src="/images/tokyo-night.jpg" alt="" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/65 via-ink-900/30 to-ink-900/65" />
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <Reveal>
                <p className="text-eyebrow text-paper/55">Across the world</p>
                <h2 className="mt-5 max-w-[20ch] display-2xl text-balance text-paper">
                  I give every client <span className="italic-display text-coral-soft">the same</span> unlimited care.
                </h2>
                <p className="mt-6 max-w-[48ch] text-paper/80">
                  Whether you&apos;re a two-person studio or a fifty-person engineering org,
                  the engagement looks the same: aligned on outcomes, measured on shipped work.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9 · TEAM/SUPPORT-LOOK — image + content                       */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <Reveal>
              <div>
                <p className="text-eyebrow">Always reachable</p>
                <h2 className="mt-4 display-2xl text-balance text-ink-900">
                  I&apos;m here for you <br /><span className="italic-display text-coral">day and night</span>.
                </h2>
                <p className="mt-7 max-w-[44ch] text-[1.05rem] leading-relaxed text-ink-600">
                  Most replies in under twelve business hours JST. Weekly Loom demos,
                  Slack or your channel of choice. No agency layers between us.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <Stat title="< 12h" body="reply SLA in JST" />
                  <Stat title="200+" body="contracts, 4.97 ★" />
                  <Stat title="3 yrs" body="longest engagement" />
                  <Stat title="9" body="client countries" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-line shadow-bento">
                <Image src="/images/studio.jpg" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10 · DARK STATS — Printful world map band                      */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-forest text-paper">
        <div className="absolute inset-0 -z-0 opacity-25">
          <Image src="/images/earth-night.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/70 to-forest" />
        </div>
        <div className="container relative py-24 md:py-32">
          <Reveal>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="text-eyebrow text-paper/55 justify-center">By the numbers</p>
              <h2 className="mt-4 display-2xl text-paper">
                No inventory, no upfront investment, no hassles…
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="text-center">
                  <div className="num text-[clamp(2.8rem,5.2vw,4.6rem)] text-paper">
                    <Counter value={s.value} decimals={s.decimals ?? 0} />
                    <span className="ml-1 text-[0.42em] text-paper/65">{s.suffix}</span>
                  </div>
                  <div className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-paper/60">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-14 max-w-2xl text-center text-paper/70">
              Tokyo to São Paulo, Madrid to New York — clients ship in their own time zones.
              I show up in theirs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11 · CLOSING CTA                                              */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden py-32 md:py-44">
        <div className="absolute inset-0 -z-10 opacity-90">
          <Image src="/images/pastel-silk.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-paper/60" />
        </div>
        <div className="container relative text-center">
          <Reveal>
            <p className="text-eyebrow mx-auto justify-center">Up next</p>
            <h2 className="mx-auto mt-5 max-w-[20ch] display-hero text-balance text-ink-900">
              Let&apos;s build your <span className="italic-display text-coral">next thing</span>.
            </h2>
            <p className="mx-auto mt-8 max-w-[48ch] text-lg leading-relaxed text-ink-700">
              I&apos;ll read what you send and reply within twelve business hours. If we&apos;re a fit, you&apos;ll have a proposal in two days.
            </p>
            <div className="mt-10">
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

function Stat({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-line bg-paper p-4">
      <div className="num text-[2rem] text-ink-900">{title}</div>
      <div className="mt-0.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-500">{body}</div>
    </div>
  );
}
