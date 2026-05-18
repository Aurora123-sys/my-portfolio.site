import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import LangBar from "@/components/LangBar";
import { TIMELINE, CERTIFICATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "A decade of freelance engineering across Tokyo and the world. Education at Kōsen and Tokyo Tech. Bilingual EN/JP.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Reveal>
              <div className="eyebrow mb-5">About</div>
              <h1 className="text-balance text-5xl md:text-6xl lg:text-[5.4rem]">
                A studio of <span className="italic-display">one</span>, shipping things <span className="italic-display">that last</span>.
              </h1>
              <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-ink-500">
                I&apos;m Ravi — a freelance engineer who has spent the last decade building production software from the Tokyo end of the time zone. SaaS platforms, AI agents, mobile apps, integration plumbing. I do the boring parts well so the interesting parts can exist.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-4xl bg-grad-aurora">
                  <Image
                    src="/avatar.png"
                    alt="Portrait of Ravi"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover mix-blend-multiply"
                    style={{ filter: "contrast(1.04) saturate(1.08)" }}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(at_top_right,transparent,rgba(124,92,255,0.18))]" />
                </div>
                <div className="absolute -right-6 top-6 flex flex-col gap-3">
                  <ChipStat label="Based in" value="Tokyo, 🇯🇵" />
                  <ChipStat label="Languages" value="JP · EN · हिन्दी" />
                  <ChipStat label="Rating" value="4.97 ★ · 200+" />
                </div>
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
              <div className="eyebrow mb-4">Story</div>
              <h2 className="text-4xl md:text-5xl">How I work.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-lg leading-relaxed text-ink-500">
                <p>
                  I started writing software seriously at fifteen, in the Kōsen technical college system — five years of low-level systems, electronics, and the kind of patient debugging that you only learn under fluorescent lights at midnight. By the time I finished my BEng at Tokyo Tech in 2020, the freelance practice that started as a side project had already shipped to clients in five countries.
                </p>
                <p>
                  The work has always been end-to-end. I prefer it that way. Database schema, REST/GraphQL boundary, design tokens, animations, the deploy script, the Stripe webhook that has to be idempotent — all of it. I&apos;m comfortable as the sole developer on a brand-new product, and I&apos;m comfortable embedded in a fifty-person engineering org as the senior who happens to also speak Japanese.
                </p>
                <p>
                  Recently most of my work involves AI systems: RAG over messy private corpora, multi-agent orchestration with sensible cost ceilings, WhatsApp and voice bots that actually hand off to a human when they should. The fundamentals haven&apos;t changed — pick the right primitives, write boring code, instrument it like you&apos;ll be paged at 3 a.m., because you will.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24">
        <div className="container-narrow">
          <div className="mb-14 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <Reveal>
              <div className="eyebrow mb-4">Journey</div>
              <h2 className="text-4xl md:text-5xl">A non-linear <span className="italic-display">timeline</span>.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[56ch] text-lg leading-relaxed text-ink-500">
                Education and the freelance practice overlap heavily — the way they usually do for engineers who started early.
              </p>
            </Reveal>
          </div>

          <div className="relative border-l border-dashed border-ink/20 pl-8">
            {TIMELINE.map((node, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="relative pb-14 last:pb-0">
                  <span
                    className={`absolute -left-[39px] top-2 block h-3.5 w-3.5 rounded-full ${node.color}`}
                  />
                  <div className="mb-1.5 font-mono text-[0.78rem] uppercase tracking-[0.1em] text-ink-400">
                    {node.when}
                  </div>
                  <h3 className="mb-2 text-2xl">{node.title}</h3>
                  <p className="max-w-[60ch] text-ink-500">{node.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="py-24">
        <div className="container-narrow">
          <div className="mb-14 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <Reveal>
              <div className="eyebrow mb-4">Languages</div>
              <h2 className="text-4xl md:text-5xl">Trilingual on a <span className="italic-display">good day</span>.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[56ch] text-lg leading-relaxed text-ink-500">
                Daily working language is English. Native Japanese for local clients and on-site work. Conversational Hindi from family heritage.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="space-y-7">
              <LangBar name="日本語 — Japanese" level="Native (first language)" pct={100} />
              <LangBar name="English" level="Fluent · TOEIC 990 / 990" pct={98} />
              <LangBar name="हिन्दी — Hindi" level="Conversational · family heritage" pct={55} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-24">
        <div className="container">
          <div className="mb-14 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <Reveal>
              <div className="eyebrow mb-4">Certifications</div>
              <h2 className="text-4xl md:text-5xl">Formal <span className="italic-display">credentials</span>.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[56ch] text-lg leading-relaxed text-ink-500">
                Where credential IDs exist they&apos;re listed on the full resume.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.08}>
                <div className="cert-card group rounded-3xl border border-ink/10 bg-cream-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-glow">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-grad-aurora font-mono text-[0.78rem] font-bold text-ink">
                    {c.mark}
                  </div>
                  <h4 className="mb-2 font-display text-base font-medium leading-snug">{c.title}</h4>
                  <div className="flex justify-between font-mono text-xs text-ink-400">
                    <span>{c.org}</span>
                    <span>{c.year}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Next step"
        title={<>Want the <span className="italic-display">long version</span>?</>}
        body="Send a note and I'll share case studies, references, and the full PDF resume tailored to your project."
        href="/contact"
        cta="Get in touch"
      />
    </>
  );
}

function ChipStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-cream-100 px-4 py-3 font-mono text-xs shadow-soft">
      <span className="text-ink-400">{label}</span>
      <strong className="mt-0.5 block font-display text-xl font-normal tracking-tight text-ink">
        {value}
      </strong>
    </div>
  );
}
