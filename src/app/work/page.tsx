import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import ProjectArt from "@/components/ProjectArt";
import { PROJECTS, ROLES } from "@/lib/data";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected freelance engagements: FlowClinic, Ceras Health AI triage, Timeleft, Her lip to, Printful programmatic SEO, and more.",
};

export default function WorkPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48">
        <div className="container">
          <Reveal>
            <div className="eyebrow mb-6">Selected work</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-balance text-5xl md:text-6xl lg:text-[5.4rem]">
              Things that <span className="italic-display">shipped</span>,<br />
              and the numbers behind them.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-[64ch] text-lg leading-relaxed text-ink-500">
              Below is a curated subset of recent client engagements — full case studies and references available on request.
              Most engagements are under NDA; details published here are publicly approved.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="pt-10 pb-20">
        <div className="container">
          {PROJECTS.map((p, i) => (
            <div
              key={p.slug}
              className={clsx(
                "mb-24 grid items-center gap-12 md:mb-32 md:grid-cols-2 md:gap-16",
                i % 2 === 1 && "md:[&>div:first-child]:order-2"
              )}
            >
              <Reveal>
                <div className="overflow-hidden rounded-4xl shadow-glow">
                  <div className="aspect-[4/3]">
                    <ProjectArt slug={p.slug} className="h-full w-full" />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <div className="eyebrow mb-3">{p.era} · {p.category}</div>
                  <h2 className="mb-4 text-balance text-3xl md:text-4xl lg:text-[2.8rem]">{p.title}</h2>
                  <p className="mb-6 text-lg leading-relaxed text-ink-500">{p.blurbLong}</p>

                  <div className="mb-7 flex flex-wrap gap-6">
                    {p.stats.map((s) => (
                      <div key={s.label} className="flex flex-col">
                        <strong className="font-display text-2xl font-normal">{s.value}</strong>
                        <span className="font-mono text-[0.74rem] uppercase tracking-[0.08em] text-ink-400">{s.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ROLES ARCHIVE */}
      <section className="bg-cream-200 py-24 md:py-32">
        <div className="container">
          <div className="mb-14 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <Reveal>
              <div className="eyebrow mb-4">Engagement archive</div>
              <h2 className="text-4xl md:text-5xl">
                Four <span className="italic-display">disciplines</span> running in parallel.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[56ch] text-lg leading-relaxed text-ink-500">
                The freelance practice is organized around four ongoing role-types, each with its own rhythm and client mix.
              </p>
            </Reveal>
          </div>

          <div className="space-y-4">
            {ROLES.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06}>
                <article className="role-card rounded-4xl border border-ink/10 bg-cream-100 p-10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow">
                  <header className="mb-5 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl">{r.title}</h3>
                      <div className="mt-1 text-ink-500">{r.org}</div>
                    </div>
                    <span className="rounded-full border border-ink/10 px-3 py-1.5 font-mono text-xs text-ink-400 whitespace-nowrap">
                      {r.when}
                    </span>
                  </header>
                  <ul className="mb-5 grid gap-3 md:grid-cols-2 md:gap-x-10">
                    {r.bullets.map((b) => (
                      <li key={b} className="relative pl-4 text-sm leading-relaxed text-ink-500 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-rose-600">
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {r.tags.map((t) => (
                      <span key={t} className="rounded-full bg-cream-200 px-2.5 py-1 font-mono text-[0.72rem] text-ink-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="References"
        title={<>Want to <span className="italic-display">talk to</span> a former client?</>}
        body="References from FlowClinic, Ceras Health, Timeleft, and several others are available — usually within 48 hours of an introduction."
        href="/contact"
        cta="Request references"
      />
    </>
  );
}
