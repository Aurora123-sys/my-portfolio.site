"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LanguageProvider";
import { ROLES } from "@/lib/data";

type Case = {
  slug: string;
  title: string;
  era: string;
  category: string;
  lead: string;
  body: string;
  image: string;
  stats: { value: string; label: string }[];
  tags: string[];
};

const CASES: Case[] = [
  {
    slug: "flowclinic",
    title: "FlowClinic — multi-tenant clinic platform",
    era: "2023 — Present",
    category: "SaaS · Health",
    lead: "12K+ MAU across three countries. Scheduling, billing, RBAC, and patient comms in one shipping product.",
    body: "Designed the data model, built the backend on NestJS, shipped the Next.js front-end, and own the deploy pipeline. Postgres + Redis with idempotent webhooks, Stripe billing with usage-based plans, RBAC keyed to clinic + role.",
    image: "/images/workshop.jpg",
    stats: [
      { value: "12K+", label: "MAU · 3 countries" },
      { value: "99.94%", label: "uptime · 30d rolling" },
      { value: "3 yrs", label: "continuous engagement" },
    ],
    tags: ["Next.js 14", "NestJS", "PostgreSQL", "Redis", "Stripe", "Vercel"],
  },
  {
    slug: "ceras-health",
    title: "Ceras Health — WhatsApp AI triage",
    era: "2024 — Present",
    category: "AI · Health",
    lead: "GPT-4o + Twilio with human handoff. Cut support volume 38% in the first quarter post-launch.",
    body: "A WhatsApp-first triage assistant. GPT-4o behind a strict tool-use boundary, with deterministic handoff to human staff on red-flag symptoms, escalations, and explicit user request. Safe before clever.",
    image: "/images/code-screen.jpg",
    stats: [
      { value: "−38%", label: "Q1 support volume" },
      { value: "<4s", label: "median P50 reply" },
      { value: "EN / JP", label: "bilingual at launch" },
    ],
    tags: ["OpenAI GPT-4o", "LangChain", "Twilio", "Pinecone", "NestJS"],
  },
  {
    slug: "timeleft",
    title: "Timeleft — real-time social discovery",
    era: "2023 — 2024",
    category: "Mobile · Social",
    lead: "React Native + Expo. Real-time matching, offline-first cache, push pipelines via FCM and APNs.",
    body: "I led the deep-link architecture and redesigned the onboarding flow — Day-7 retention improved 21% on the cohort analytics. Realtime DB with optimistic UI and an offline cache that survives flaky JR connections.",
    image: "/images/pastel-silk.jpg",
    stats: [
      { value: "+21%", label: "D7 retention" },
      { value: "iOS + Android", label: "RN + Expo" },
      { value: "Offline-first", label: "realtime sync" },
    ],
    tags: ["React Native", "Expo", "FCM", "APNs", "Realtime DB"],
  },
  {
    slug: "her-lip-to",
    title: "Her lip to — luxury fashion iOS",
    era: "2022 — 2023",
    category: "iOS · E-commerce",
    lead: "SwiftUI carousels with synchronized wishlists, restock alerts, Apple Pay checkout.",
    body: "Native iOS features for a fast-growing luxury label. SwiftUI product carousels with synchronized wishlists, restock alerts, and Apple Pay checkout. Tight design system collaboration with the in-house team.",
    image: "/images/frames.jpg",
    stats: [
      { value: "SwiftUI", label: "+ UIKit interop" },
      { value: "Apple Pay", label: "PCI-light checkout" },
      { value: "Restock", label: "push alerts" },
    ],
    tags: ["SwiftUI", "UIKit", "Apple Pay", "Push", "StoreKit"],
  },
];

export default function WorkPage() {
  const { t } = useLang();

  return (
    <>
      <section className="pt-40 pb-20 md:pt-48">
        <div className="container">
          <Reveal>
            <p className="text-eyebrow mb-5">{t("work.eyebrow")}</p>
            <h1 className="display-hero text-balance text-ink-900">
              {t("work.title.1")}<br />
              <span className="italic-display text-coral">{t("work.title.2")}</span>{" "}
              <span className="text-ink-500">{t("work.title.3")}</span>
            </h1>
            <p className="mt-8 max-w-[64ch] text-[1.15rem] leading-relaxed text-ink-600">{t("work.body")}</p>
          </Reveal>
        </div>
      </section>

      {/* CASE STUDIES — alternating image / text */}
      <section className="pb-24">
        <div className="container">
          {CASES.map((c, i) => (
            <article key={c.slug} className="grid items-center gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-24">
              <Reveal className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] ring-1 ring-line shadow-bento">
                  <Image src={c.image} alt={c.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-paper/85 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-700 backdrop-blur-md">
                    {c.category}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-ink/80 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-paper backdrop-blur-md">
                    {c.era}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <p className="text-eyebrow">{c.category}</p>
                  <h2 className="mt-4 display-xl text-balance text-ink-900">{c.title}</h2>
                  <p className="mt-5 max-w-[58ch] text-[1.08rem] leading-relaxed text-ink-700">{c.lead}</p>
                  <p className="mt-4 max-w-[58ch] text-ink-500">{c.body}</p>

                  <div className="mt-7 flex flex-wrap gap-6">
                    {c.stats.map((s) => (
                      <div key={s.label}>
                        <div className="num text-[1.8rem] text-ink-900">{s.value}</div>
                        <div className="mt-0.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-500">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-1.5">
                    {c.tags.map((tag) => (
                      <span key={tag} className="chip">{tag}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* ROLES ARCHIVE */}
      <section className="bg-paper-50 py-24 md:py-32">
        <div className="container">
          <Reveal>
            <div className="mb-12 grid items-end gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <div>
                <p className="text-eyebrow">{t("work.roles.eyebrow")}</p>
                <h2 className="mt-4 display-2xl text-ink-900">
                  {t("work.roles.heading.1")} <span className="italic-display text-coral">{t("work.roles.heading.2")}</span> {t("work.roles.heading.3")}
                </h2>
              </div>
              <p className="max-w-[56ch] text-ink-600">{t("work.roles.body")}</p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {ROLES.map((r, i) => (
              <motion.article
                key={r.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="rounded-3xl border border-line bg-paper p-8 shadow-bento transition-all duration-300 hover:-translate-y-0.5"
              >
                <header className="mb-5 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl text-ink-900">{r.title}</h3>
                    <div className="mt-1 text-ink-500">{r.org}</div>
                  </div>
                  <span className="rounded-full border border-line px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-500">
                    {r.when}
                  </span>
                </header>
                <ul className="mb-5 grid gap-3 md:grid-cols-2 md:gap-x-10">
                  {r.bullets.map((b) => (
                    <li key={b} className="relative pl-4 text-sm leading-relaxed text-ink-600 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-coral">
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {r.tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-24 text-paper md:py-28">
        <div className="container text-center">
          <Reveal>
            <p className="text-eyebrow text-paper/55 mx-auto justify-center">References</p>
            <h2 className="mx-auto mt-4 max-w-[22ch] display-2xl text-paper">
              Want to <span className="italic-display text-coral-soft">talk to</span> a former client?
            </h2>
            <p className="mx-auto mt-6 max-w-[48ch] text-paper/75">
              References from FlowClinic, Ceras Health, Timeleft and several others — usually within 48 hours of an introduction.
            </p>
            <div className="mt-8">
              <Link href="/about" className="btn btn-cta">
                Read the story
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
