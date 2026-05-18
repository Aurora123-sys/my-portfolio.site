import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { SKILL_GROUPS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills across front-end, back-end, mobile, AI/ML, data & cloud, integrations, and methods.",
};

const PRINCIPLES = [
  { n: "01.", title: "Boring is shippable.", body: "Postgres, Redis, a queue, a cache, a CDN. The hardest part of any project is finishing it — exotic infrastructure rarely helps." },
  { n: "02.", title: "Observability before features.", body: "Structured logs, traces, error tracking, and SLO dashboards land in the first week. You can't fix what you can't see." },
  { n: "03.", title: "AI is software.", body: "Evaluate it, version it, gate it, monitor it. Treat agents like microservices: well-bounded, retried, with deterministic fallbacks." },
  { n: "04.", title: "Write the boring docs.", body: "Runbooks, onboarding READMEs, post-mortems. They pay dividends six months after I'm off the project." },
];

export default function SkillsPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48">
        <div className="container">
          <Reveal>
            <div className="eyebrow mb-6">Stack</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-balance text-5xl md:text-6xl lg:text-[5.4rem]">
              Tools I reach for,<br /><span className="italic-display">most weeks</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-[64ch] text-lg leading-relaxed text-ink-500">
              I prefer a small set of well-understood tools, used carefully, over a long inventory of dabbling. The list below is grouped by where I spend most of my time — and where I&apos;d be comfortable being the senior engineer on a team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2">
            {SKILL_GROUPS.map((g, i) => (
              <Reveal key={g.code} delay={(i % 2) * 0.08}>
                <article className="skill-card group relative overflow-hidden rounded-4xl border border-ink/10 bg-cream-100 p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-glow">
                  <header className="mb-6 flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl font-mono font-semibold text-ink ${g.gradient}`}>
                      {g.code}
                    </div>
                    <div>
                      <div className="font-mono text-[0.74rem] uppercase tracking-[0.1em] text-ink-400">{g.sub}</div>
                      <div className="font-display text-2xl tracking-tight">{g.title}</div>
                    </div>
                  </header>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full bg-cream-200 px-3.5 py-1.5 text-sm transition-all duration-200 hover:scale-105 hover:bg-ink hover:text-cream-100"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-grad-dark py-24 text-cream-100 md:py-32">
        <div className="container-narrow">
          <div className="mb-14 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <Reveal>
              <div className="eyebrow mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>Principles</div>
              <h2 className="text-4xl text-cream-100 md:text-5xl">How I <span className="italic-display">decide</span> things.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[56ch] text-lg leading-relaxed text-cream-100/75">
                A short, opinionated list. Refined over a decade of client work — open to being wrong about any of them.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div>
                  <h3 className="mb-2.5 flex items-baseline gap-3 text-2xl text-cream-100">
                    <span className="font-mono text-base text-cream-100/50">{p.n}</span>
                    {p.title}
                  </h3>
                  <p className="text-cream-100/75">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Match check"
        title={<>Stack <span className="italic-display">looks right</span>?</>}
        body="Most engagements start with a 30-minute scoping call to see whether the fit is real. No deck required."
        href="/contact"
        cta="Book a scoping call"
      />
    </>
  );
}
