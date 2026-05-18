import Link from "next/link";
import AuroraCanvas from "@/components/AuroraCanvas";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import CtaBand from "@/components/CtaBand";
import ProjectArt from "@/components/ProjectArt";
import { STATS, SERVICES, PROJECTS, MARQUEE } from "@/lib/data";
import HeroVisual from "@/components/HeroVisual";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 md:pt-40">
        <AuroraCanvas density={7} />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <div className="eyebrow">Tokyo · Freelance · Available</div>
              </Reveal>
              <h1 className="mt-6 text-[clamp(3rem,8.5vw,7.6rem)] font-display leading-[0.96] tracking-tighter text-balance">
                <Reveal delay={0.05}>
                  <span className="display-soft">I build </span>
                  <span className="accent-underline display-soft">production</span>
                </Reveal>
                <Reveal delay={0.15}>
                  <span className="italic-display">software</span>
                </Reveal>
                <Reveal delay={0.22}>
                  <span className="display-soft">with </span>
                  <span className="italic-display">soul</span>
                  <span className="display-soft">.</span>
                </Reveal>
              </h1>

              <Reveal delay={0.32}>
                <div className="mt-9 flex flex-wrap items-center gap-7 text-ink-500">
                  <span className="flex items-center gap-2 before:block before:h-1.5 before:w-1.5 before:rounded-full before:bg-rose-600">
                    Full-Stack
                  </span>
                  <span className="flex items-center gap-2 before:block before:h-1.5 before:w-1.5 before:rounded-full before:bg-electric-500">
                    AI Systems
                  </span>
                  <span className="flex items-center gap-2 before:block before:h-1.5 before:w-1.5 before:rounded-full before:bg-sky2-600">
                    Mobile · iOS / Android
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="mt-9 flex flex-wrap gap-3.5">
                  <Link href="/work" className="btn btn-primary">
                    View selected work
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <Link href="/contact" className="btn btn-ghost">
                    Start a project
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            </div>

            <HeroVisual />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-7 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-ink-400">
          Scroll
          <span className="relative block h-9 w-px overflow-hidden bg-ink-400">
            <span className="absolute -top-1/2 left-0 block h-1/2 w-full animate-trickle bg-ink" />
          </span>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="border-y border-ink/10 py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-x-0 gap-y-8 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="px-0 lg:border-l lg:border-ink/10 lg:px-7 lg:first:border-l-0 lg:first:pl-0">
                  <div className="flex items-baseline gap-1 font-display text-5xl leading-none tracking-tight md:text-6xl lg:text-[3.6rem]">
                    <Counter value={s.value} decimals={"decimals" in s ? s.decimals : 0} />
                    <span className="ml-1 text-[0.5em] font-normal text-ink-500">{s.suffix}</span>
                  </div>
                  <p className="mt-2 text-sm text-ink-500">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mb-16 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <Reveal>
              <div className="eyebrow mb-4">What I do</div>
              <h2 className="text-balance text-4xl md:text-5xl lg:text-[3.6rem]">
                Four <span className="italic-display">disciplines</span>,<br />one studio of one.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[56ch] text-lg leading-relaxed text-ink-500">
                Over a decade of freelance work taught me to be the whole engineering team when needed: database to deployment,
                design system to App Store, prompt to production agent.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <article className="service-card group relative flex h-full min-h-[280px] flex-col gap-5 overflow-hidden rounded-4xl border border-ink/10 bg-white/55 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-glow">
                  <div
                    className={`absolute right-0 top-0 h-56 w-56 translate-x-[40%] -translate-y-[40%] rounded-full ${s.gradient} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-40`}
                  />
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl font-mono text-base font-semibold text-ink ${s.gradient}`}>
                    {s.n}
                  </div>
                  <h3 className="text-2xl">{s.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                  <p className="mt-auto text-sm leading-relaxed text-ink-500">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED WORK ============ */}
      <section className="bg-cream-200 py-24 md:py-32">
        <div className="container">
          <div className="mb-16 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <Reveal>
              <div className="eyebrow mb-4">Selected work</div>
              <h2 className="text-balance text-4xl md:text-5xl lg:text-[3.6rem]">
                Recent <span className="italic-display">things</span> that shipped.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[56ch] text-lg leading-relaxed text-ink-500">
                A glance at four representative engagements. The full case studies live on the work page —
                including the one that cut a support team&apos;s ticket volume by 38%.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <Reveal className="col-span-12 lg:col-span-7">
              <FeaturedCard slug="flowclinic" />
            </Reveal>
            <Reveal delay={0.08} className="col-span-12 lg:col-span-5">
              <FeaturedCard slug="ceras-health" />
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-8">
              <FeaturedCard slug="timeleft" />
            </Reveal>
            <Reveal delay={0.08} className="col-span-12 lg:col-span-4">
              <FeaturedCard slug="her-lip-to" />
            </Reveal>
          </div>

          <div className="mt-12 text-center">
            <Link href="/work" className="btn btn-ghost">
              See all case studies
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <Marquee items={MARQUEE} />

      {/* ============ CTA ============ */}
      <CtaBand
        eyebrow="Let's build something"
        title={
          <>
            Need a senior pair of hands<br /><span className="italic-display">that ships</span>?
          </>
        }
        body="I take on a small number of engagements each quarter — from one-week AI prototypes to multi-month SaaS builds. Tell me what you're working on."
        href="/contact"
        cta="Start a conversation"
      />
    </>
  );
}

function FeaturedCard({ slug }: { slug: string }) {
  const p = PROJECTS.find((x) => x.slug === slug)!;
  return (
    <Link
      href="/work"
      className="work-card group block h-full min-h-[380px] overflow-hidden rounded-4xl border border-ink/10 bg-cream-100 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow"
    >
      <div className="relative">
        <span className="absolute left-4 top-4 z-10 inline-block rounded-full border border-ink/10 bg-cream-100/85 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] backdrop-blur-md">
          {p.badge}
        </span>
        <div className="relative aspect-[4/3] overflow-hidden">
          <ProjectArt slug={p.slug} className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]" />
        </div>
      </div>
      <div className="border-t border-ink/10 p-7">
        <h3 className="mb-1.5 font-display text-2xl tracking-tight">{p.title}</h3>
        <p className="mb-3.5 text-sm text-ink-500">{p.blurb}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.slice(0, 4).map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
