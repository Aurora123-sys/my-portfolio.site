"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ShaderField from "@/components/ShaderField";
import Scene3D from "@/components/Scene3D";
import AmbientVideo from "@/components/AmbientVideo";
import MouseSpotlight from "@/components/MouseSpotlight";
import MagneticButton from "@/components/MagneticButton";
import TextScramble from "@/components/TextScramble";
import NumberRoller from "@/components/NumberRoller";
import FeedCard from "@/components/FeedCard";
import StoryStrip from "@/components/StoryStrip";
import Marquee from "@/components/Marquee";
import NowListening from "@/components/widgets/NowListening";
import ActivityFeed from "@/components/widgets/ActivityFeed";
import CommitHeatmap from "@/components/widgets/CommitHeatmap";
import WorldClock from "@/components/widgets/WorldClock";
import TechOrbit from "@/components/widgets/TechOrbit";
import CodePreview from "@/components/widgets/CodePreview";
import Testimonial from "@/components/widgets/Testimonial";
import StatusCard from "@/components/widgets/StatusCard";
import { PROJECTS, MARQUEE, HOME_STATS } from "@/lib/data";
import { useLang } from "@/components/LanguageProvider";

const TOKYO_PHOTO =
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80";
const WORKSPACE_PHOTO =
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80";
const AMBIENT_VIDEO = [
  // Ambient cloud loop — Coverr free CDN
  "https://cdn.coverr.co/videos/coverr-clouds-rolling-over-mountains-0001/1080p.mp4",
];

export default function Home() {
  const { t } = useLang();

  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-44 md:pb-20">
        {/* ambient layers behind hero */}
        <div className="pointer-events-none absolute inset-0">
          <AmbientVideo
            sources={AMBIENT_VIDEO}
            className="absolute inset-0 h-full w-full"
            opacity={0.22}
          />
          <ShaderField className="absolute inset-0 h-full w-full opacity-30 mix-blend-multiply" variant="lime" />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/60 via-paper/40 to-paper" />
        </div>

        <div className="container relative">
          <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="badge-live">{t("common.openToWork")}</span>
                <span className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-500">
                  v 2026 · Spring drop
                </span>
              </div>
              <h1 className="text-balance font-display text-[clamp(2.8rem,9vw,7.5rem)] leading-[0.92] tracking-[-0.045em] text-ink-900">
                <span className="block">Senior engineer.</span>
                <span className="block">
                  <TextScramble text="Builder of soft-edge software." className="italic-display text-cobalt" />
                </span>
              </h1>
              <p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-ink-600">
                {t("home.bio")}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton href="/work" className="btn btn-primary">
                  {t("home.action.viewWork")}
                  <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </MagneticButton>
                <MagneticButton href="/about" className="btn btn-ghost">
                  {t("home.action.about")}
                </MagneticButton>
                <span className="ml-2 hidden font-mono text-[0.78rem] text-ink-500 sm:inline">
                  ↘ Scroll · widgets below
                </span>
              </div>

              {/* counters */}
              <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-4">
                {HOME_STATS.map((s) => (
                  <div key={s.key}>
                    <div className="num text-3xl md:text-[2rem]">
                      <NumberRoller value={s.value} decimals={"decimals" in s ? s.decimals : 0} />
                      <span className="ml-1 text-base text-ink-500">{s.suffix}</span>
                    </div>
                    <div className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-500">
                      {t(s.key)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3D scene + portrait stack */}
            <div className="relative">
              <div className="border-glow relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                {/* portrait */}
                <Image
                  src="/avatar.png"
                  alt="Ravi"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-paper/30 via-transparent to-transparent" />
                {/* 3D overlay */}
                <div className="absolute inset-0">
                  <Scene3D className="h-full w-full opacity-90 mix-blend-multiply" />
                </div>
                {/* corner chips */}
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-[0.72rem] font-mono uppercase tracking-[0.1em] text-ink-700 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-blink rounded-full bg-coral" />
                  LIVE · WebGL
                </div>
                <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-ink/85 px-3 py-1.5 text-[0.72rem] font-mono uppercase tracking-[0.1em] text-paper backdrop-blur-md">
                  ◆ ico-12 · 30e
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== BENTO ROW 1: bio / now / status ============== */}
      <section className="relative pb-10">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:gap-6">
            {/* Profile bio bento */}
            <MouseSpotlight className="md:col-span-3">
              <div className="bento h-full p-7 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-paper-200 shadow-rim">
                    <Image src="/avatar.png" alt="" fill sizes="56px" className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-display text-xl tracking-tight">Ravi Tsunenori</span>
                      <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 text-cobalt" fill="none">
                        <path d="M2 7.5l3.2 3.2L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="handle">{t("home.handle")}</div>
                  </div>
                  <span className="ml-auto chip">{t("home.verified")}</span>
                </div>
                <p className="mt-6 text-[0.96rem] leading-relaxed text-ink-700">{t("home.bio")}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {["Full-stack", "AI · LLM", "iOS · Android", "DevOps", "Realtime"].map((x) => (
                    <span key={x} className="chip">{x}</span>
                  ))}
                </div>
              </div>
            </MouseSpotlight>

            {/* Now listening — accent */}
            <MouseSpotlight className="md:col-span-2">
              <div className="bento h-full p-7 md:p-8">
                <NowListening />
              </div>
            </MouseSpotlight>

            {/* Status / availability */}
            <MouseSpotlight className="md:col-span-1">
              <div className="bento bento-pop h-full p-7 text-ink-900 md:p-8">
                <span className="badge-live mb-4 self-start" style={{ background: "rgba(10,10,16,0.08)", borderColor: "rgba(10,10,16,0.2)", color: "#0a0a10" }}>
                  Q3 2026
                </span>
                <h3 className="font-display text-2xl leading-tight tracking-tight">
                  Booking 2 senior <span className="italic-display">contract</span> roles.
                </h3>
                <div className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-700">
                  Reply &lt; 12h JST
                </div>
              </div>
            </MouseSpotlight>
          </div>
        </div>
      </section>

      {/* ============== BENTO ROW 2: clock / heatmap / orbit ============== */}
      <section className="relative pb-10">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:gap-6">
            <MouseSpotlight className="md:col-span-2">
              <div className="bento h-full p-7 md:p-8">
                <WorldClock />
              </div>
            </MouseSpotlight>
            <MouseSpotlight className="md:col-span-4">
              <div className="bento h-full p-7 md:p-8">
                <CommitHeatmap />
              </div>
            </MouseSpotlight>
          </div>
        </div>
      </section>

      {/* ============== BENTO ROW 3: orbit / activity / code ============== */}
      <section className="relative pb-10">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:gap-6">
            <MouseSpotlight className="md:col-span-2">
              <div className="bento h-full overflow-hidden p-7">
                <div className="text-eyebrow">Stack</div>
                <h3 className="mt-2 font-display text-2xl tracking-tight">Live tooling.</h3>
                <div className="mt-3">
                  <TechOrbit />
                </div>
              </div>
            </MouseSpotlight>
            <MouseSpotlight className="md:col-span-2">
              <div className="bento h-full p-7 md:p-8">
                <ActivityFeed />
              </div>
            </MouseSpotlight>
            <MouseSpotlight className="md:col-span-2">
              <div className="bento h-full overflow-hidden">
                <div className="px-7 pt-7 md:px-8 md:pt-8">
                  <div className="text-eyebrow">From production</div>
                  <h3 className="mt-2 font-display text-2xl tracking-tight">Agent w/ retries &amp; handoff.</h3>
                </div>
                <div className="px-7 pb-7 md:px-8 md:pb-8 mt-5">
                  <CodePreview />
                </div>
              </div>
            </MouseSpotlight>
          </div>
        </div>
      </section>

      {/* ============== BENTO ROW 4: tokyo photo + status + testimonial ============== */}
      <section className="relative pb-10">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:gap-6">
            {/* Tokyo image bento */}
            <div className="relative overflow-hidden rounded-[1.8rem] border border-line shadow-bento md:col-span-3">
              <Image
                src={TOKYO_PHOTO}
                alt="Tokyo skyline"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-paper md:p-8">
                <div className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-paper/75">35.6762° N · 139.6503° E</div>
                <h3 className="mt-2 font-display text-[1.6rem] leading-tight tracking-tight md:text-[1.85rem]">
                  Based in <span className="italic-display">Tokyo</span>, working in client zones.
                </h3>
              </div>
            </div>

            {/* Status */}
            <MouseSpotlight className="md:col-span-1">
              <div className="bento h-full p-6">
                <StatusCard />
              </div>
            </MouseSpotlight>

            {/* Testimonial */}
            <MouseSpotlight className="md:col-span-2">
              <div className="bento h-full p-7 md:p-8">
                <Testimonial />
              </div>
            </MouseSpotlight>
          </div>
        </div>
      </section>

      {/* ============== STORY STRIP ============== */}
      <section className="relative pb-14 pt-6">
        <div className="container">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <div className="text-eyebrow">{t("home.stories.title")}</div>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink-900 md:text-4xl">{t("home.stories.subtitle")}</h2>
            </div>
            <span className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-500">7 / 7</span>
          </div>
          <StoryStrip />
        </div>
      </section>

      {/* ============== PINNED FEED ============== */}
      <section className="relative pb-14">
        <div className="container">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-eyebrow"><PinIcon /> {t("home.feed.title")}</div>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink-900 md:text-4xl">{t("home.feed.subtitle")}</h2>
            </div>
            <Link href="/work" className="hidden text-sm text-ink-700 underline-offset-4 hover:text-ink-900 hover:underline sm:inline-flex">
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
        </div>
      </section>

      {/* ============== PRINCIPLES DARK INVERSION ============== */}
      <section className="relative my-16 overflow-hidden bg-ink-900 py-20 text-paper md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <Image src={WORKSPACE_PHOTO} alt="" fill className="object-cover opacity-30 mix-blend-screen" sizes="100vw" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/70 to-ink-900" />
        <div className="container relative">
          <div className="mb-12 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <div className="text-eyebrow text-paper/60">{t("home.principles.title")}</div>
              <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
                Four rules that <span className="italic-display text-lime">hold up</span>.
              </h2>
            </div>
            <p className="max-w-[56ch] text-lg leading-relaxed text-paper/70">{t("home.principles.body")}</p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-3xl border border-paper/10 bg-paper/[0.03] p-7"
              >
                <div className="num mb-3 text-lime">0{i}.</div>
                <h3 className="mb-2 font-display text-xl tracking-tight text-paper">{t(`home.principles.${i}.title`)}</h3>
                <p className="text-[0.92rem] leading-relaxed text-paper/65">{t(`home.principles.${i}.body`)}</p>
              </motion.div>
            ))}
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
      <path d="M6 1.5l4 4-1.5 1.5L11 9.5l-1 1L7 7.5 4 10.5l-1-1L5.5 7 4 5.5l1.5-1.5L4 2.5l2-1z" fill="currentColor" />
    </svg>
  );
}
