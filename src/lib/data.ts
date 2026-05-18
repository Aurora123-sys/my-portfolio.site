import type { Locale } from "./i18n";

export const NAV_LINKS = [
  { href: "/", labelKey: "nav.home" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/work", labelKey: "nav.work" },
  { href: "/skills", labelKey: "nav.skills" },
] as const;

export const HOME_STATS = [
  { value: 30, suffix: "+", key: "home.stat.projects" },
  { value: 12, suffix: "K+", key: "home.stat.clients" },
  { value: 10, suffix: " yrs", key: "home.stat.years" },
  { value: 4.97, decimals: 2, suffix: " ★", key: "home.stat.rating" },
] as const;

/**
 * Story bubbles. `colors` drive the conic-gradient ring.
 */
export type Story = {
  id: string;
  labelKey: string;
  ring: "lime" | "coral" | "cyber" | "fire" | "aurora" | "cyan" | "violet";
  emoji: string;
};

export const STORIES: Story[] = [
  { id: "fullstack", labelKey: "home.stories.fullstack", ring: "lime", emoji: "⚡" },
  { id: "ai", labelKey: "home.stories.ai", ring: "violet", emoji: "✦" },
  { id: "mobile", labelKey: "home.stories.mobile", ring: "coral", emoji: "◐" },
  { id: "realtime", labelKey: "home.stories.realtime", ring: "cyan", emoji: "◉" },
  { id: "payments", labelKey: "home.stories.payments", ring: "fire", emoji: "$" },
  { id: "devops", labelKey: "home.stories.devops", ring: "cyber", emoji: "▲" },
  { id: "design", labelKey: "home.stories.design", ring: "aurora", emoji: "◆" },
];

export type Project = {
  slug: string;
  badge: string;
  title: string;
  blurb: string;
  blurbLong: string;
  stats: { value: string; label: string }[];
  tags: string[];
  era: string;
  category: string;
  postedAgo: string;
  reactions: { likes: string; saves: string };
  accent: "lime" | "coral" | "violet" | "cyan" | "amber";
};

export const PROJECTS: Project[] = [
  {
    slug: "flowclinic",
    badge: "SaaS · Health",
    category: "SaaS",
    era: "2023 — Present",
    postedAgo: "ongoing",
    reactions: { likes: "1.2k", saves: "318" },
    title: "FlowClinic — multi-tenant clinic platform",
    blurb: "12K+ MAU across three countries. Scheduling, billing, RBAC, and patient comms in one shipping product.",
    blurbLong:
      "A scheduling, billing, and patient-comms platform serving twelve thousand active users across clinics in Japan, Singapore, and Australia. I designed the data model, built the backend on NestJS, shipped the Next.js front-end, and own the deploy pipeline.",
    stats: [
      { value: "12K+", label: "MAU · 3 countries" },
      { value: "99.94%", label: "uptime · 30d" },
      { value: "3 yrs", label: "engagement" },
    ],
    tags: ["Next.js 14", "NestJS", "PostgreSQL", "Redis", "Stripe", "Vercel"],
    accent: "lime",
  },
  {
    slug: "ceras-health",
    badge: "AI · Health",
    category: "AI",
    era: "2024 — Present",
    postedAgo: "3 mo ago",
    reactions: { likes: "2.4k", saves: "612" },
    title: "Ceras Health — WhatsApp AI triage",
    blurb: "GPT-4o + Twilio with human handoff. Cut support volume 38% in the first quarter post-launch.",
    blurbLong:
      "A WhatsApp-first triage assistant. GPT-4o behind a strict tool-use boundary, with deterministic handoff to human staff on red-flag symptoms, escalations, and explicit user request. Safe before clever.",
    stats: [
      { value: "−38%", label: "support volume Q1" },
      { value: "<4s", label: "median P50" },
      { value: "EN / JP", label: "bilingual" },
    ],
    tags: ["OpenAI GPT-4o", "LangChain", "Twilio", "Pinecone", "NestJS"],
    accent: "violet",
  },
  {
    slug: "timeleft",
    badge: "Mobile · Social",
    category: "Mobile",
    era: "2023 — 2024",
    postedAgo: "8 mo ago",
    reactions: { likes: "964", saves: "204" },
    title: "Timeleft — real-time social discovery",
    blurb: "React Native + Expo. Real-time matching, offline-first cache, push pipelines via FCM and APNs.",
    blurbLong:
      "Consumer social app with real-time matching, offline-first cache, and push pipelines via FCM and APNs. I led the deep-link architecture and redesigned the onboarding flow — Day-7 retention improved 21% on the cohort analytics.",
    stats: [
      { value: "+21%", label: "D7 retention" },
      { value: "RN + Expo", label: "iOS & Android" },
      { value: "Offline-first", label: "realtime" },
    ],
    tags: ["React Native", "Expo", "FCM", "APNs", "Realtime DB"],
    accent: "coral",
  },
  {
    slug: "her-lip-to",
    badge: "E-commerce · iOS",
    category: "Mobile",
    era: "2022 — 2023",
    postedAgo: "1 yr ago",
    reactions: { likes: "732", saves: "118" },
    title: "Her lip to — luxury fashion iOS",
    blurb: "SwiftUI carousels with synchronized wishlists, restock alerts, Apple Pay checkout.",
    blurbLong:
      "Native iOS features for a fast-growing luxury label. SwiftUI product carousels with synchronized wishlists, restock alerts, and Apple Pay checkout. Tight design system collaboration with the in-house team.",
    stats: [
      { value: "SwiftUI", label: "+ UIKit" },
      { value: "Apple Pay", label: "checkout" },
      { value: "Restock", label: "push alerts" },
    ],
    tags: ["SwiftUI", "UIKit", "Apple Pay", "Push", "StoreKit"],
    accent: "cyan",
  },
];

export const ROLES = [
  {
    title: "Freelance Full-Stack",
    org: "Self-Employed · Remote",
    when: "April 2014 — Present",
    bullets: [
      "Designed and shipped end-to-end SaaS — FlowClinic at 12K+ MAU on Next.js 14 + NestJS + PostgreSQL.",
      "Developed the Ceras Health WhatsApp triage chatbot (Twilio + GPT-4o + LangChain). Cut support volume 38% in Q1.",
      "Architected multi-stage automation workflows on Bull/Redis + NestJS microservices processing 200K events/day.",
      "Integrated RAG pipelines on Pinecone and pgvector across 50GB+ of proprietary product documentation.",
      "Implemented Stripe billing — subscriptions, usage-based, free-trial — across eight SaaS products.",
      "4.97 / 5.0 across 200+ contracts; sustained Top-Rated Plus.",
    ],
    tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Twilio", "OpenAI", "LangChain", "Pinecone", "Stripe", "Vercel"],
  },
  {
    title: "Freelance Mobile — Multiplatform & Native",
    org: "Self-Employed · Remote",
    when: "June 2015 — Present",
    bullets: [
      "Cross-platform apps in Flutter and React Native / Expo. Timeleft — real-time matching, offline cache, FCM/APNs push.",
      "Native iOS in SwiftUI + UIKit for the Her lip to luxury fashion app — product carousels, restock alerts, Apple Pay.",
      "Kotlin / Android SDK for a wearable health-monitoring app — BLE pairing, background sync, encrypted local storage.",
      "Deep-link architecture and onboarding redesign for an RN/Expo app — 21% improvement in D7 retention.",
    ],
    tags: ["React Native", "Expo", "Flutter", "Dart", "Swift", "SwiftUI", "UIKit", "Kotlin", "Java", "Android SDK"],
  },
  {
    title: "Freelance Front-End",
    org: "Self-Employed · Remote",
    when: "April 2014 — Present",
    bullets: [
      "High-converting landing pages and programmatic SEO at scale for Printful's partner ecosystem. LCP < 1.8s.",
      "Worked within large React and Vue codebases with strict design systems; i18n / hreflang for 14-locale campaigns.",
      "Built A/B-testable page variants for paid acquisition.",
      "Delivered iMean AI's public-facing marketing site with animated scroll sequences and an embedded live product demo.",
    ],
    tags: ["Next.js", "React", "Vue", "Nuxt", "TypeScript", "Tailwind", "ISR", "Headless CMS"],
  },
  {
    title: "Freelance Integration & Automation",
    org: "Self-Employed · Remote",
    when: "March 2015 — Present",
    bullets: [
      "Order-webhook normalization for Shopify, Etsy, WooCommerce — HMAC validation, idempotency keys, DLQs.",
      "Lead-to-CRM pipelines with Clearbit + multi-channel nurture (Resend, Twilio WhatsApp), timezone-aware scheduling.",
      "Automation workflows in n8n, Make, Zapier with the same reliability SLAs as custom code.",
    ],
    tags: ["Node.js", "Express", "NestJS", "PHP", "Laravel", "Python", "Django", "FastAPI", "n8n", "Make", "Zapier"],
  },
];

export const SKILL_GROUPS = [
  {
    code: "FE",
    sub: "01 · Daily driver",
    title: "Front-End",
    ring: "lime" as const,
    items: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
  },
  {
    code: "BE",
    sub: "02 · Production scale",
    title: "Back-End",
    ring: "coral" as const,
    items: ["Node.js", "NestJS", "Express", "Python", "FastAPI", "Django", "Laravel", "GraphQL", "REST", "tRPC"],
  },
  {
    code: "MO",
    sub: "03 · Cross-platform & native",
    title: "Mobile",
    ring: "fire" as const,
    items: ["React Native", "Expo", "Flutter", "Dart", "Swift", "SwiftUI", "UIKit", "Kotlin", "Android SDK"],
  },
  {
    code: "AI",
    sub: "04 · Most recent focus",
    title: "AI & ML",
    ring: "violet" as const,
    items: ["OpenAI", "Anthropic Claude", "LangChain", "LlamaIndex", "RAG", "Pinecone", "pgvector", "TensorFlow", "PyTorch"],
  },
  {
    code: "DB",
    sub: "05 · Data & cloud",
    title: "Data & Cloud",
    ring: "cyan" as const,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase", "AWS", "GCP", "Vercel", "Docker", "K8s"],
  },
  {
    code: "IO",
    sub: "06 · Plumbing & payments",
    title: "Integrations",
    ring: "aurora" as const,
    items: ["Stripe", "Twilio", "Shopify API", "Slack API", "Webhooks", "HMAC", "n8n", "Make", "Zapier", "Dialogflow"],
  },
  {
    code: "OPS",
    sub: "07 · How I run engagements",
    title: "Methods",
    ring: "cyber" as const,
    items: ["Agile / Scrum", "Git / GitHub", "DevOps", "Performance Monitoring", "A/B Testing", "i18n", "Lighthouse"],
  },
];

export const CERTIFICATIONS = [
  { mark: "AWS", title: "AWS Solutions Architect — Associate", org: "Amazon Web Services", year: "Nov 2022" },
  { mark: "GCP", title: "GCP Professional Data Engineer", org: "Google Cloud", year: "Jan 2024" },
  { mark: "TF", title: "TensorFlow Developer Certificate", org: "Google / TensorFlow", year: "Jul 2023" },
  { mark: "K8s", title: "Certified Kubernetes Application Developer", org: "CNCF", year: "Sep 2023" },
  { mark: "SCM", title: "Professional Scrum Master I", org: "Scrum.org", year: "Mar 2021" },
  { mark: "JLPT", title: "JLPT N1 — Native equivalent", org: "Japan Foundation", year: "Dec 2010" },
];

export const TIMELINE = [
  {
    when: "2014 — Present",
    title: "Freelance practice, full-stack",
    desc: "Started taking client work in technical college. Thirty-plus engagements later — SaaS, AI systems, mobile, and integrations — at 4.97 / 5.0 over 200+ contracts.",
    color: "bg-coral",
  },
  {
    when: "March 2018",
    title: "Associate Degree — Kōsen Tokyo College",
    desc: "Five-year accelerated technical program in software engineering and electronics. Best Graduation Project award for an autonomous task scheduler with priority-inversion prevention.",
    color: "bg-violet2",
  },
  {
    when: "2018 — 2020",
    title: "BEng Information Engineering — Tokyo Tech",
    desc: "Graduated with honors, GPA 3.82 / 4.00. Thesis: \"Latency-Optimized Multi-Agent Task Decomposition for Real-Time Language Model Systems\".",
    color: "bg-cyan2",
  },
  {
    when: "2022 — 2024",
    title: "Cloud, ML, and Kubernetes certifications",
    desc: "AWS Solutions Architect Associate, GCP Professional Data Engineer, CKAD, and TensorFlow Developer — formalizing what client projects had already taught.",
    color: "bg-lime",
  },
];

export const MARQUEE = [
  "Next.js",
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "GPT-4o",
  "LangChain",
  "Pinecone",
  "Flutter",
  "SwiftUI",
  "Kotlin",
  "Stripe",
  "Twilio",
  "AWS",
  "Docker",
];

/** Resolve a project's accent color to ring style, for the feed cards. */
export function accentToRing(accent: Project["accent"]): "lime" | "coral" | "cyber" | "fire" | "aurora" | "cyan" | "violet" {
  switch (accent) {
    case "lime": return "lime";
    case "coral": return "coral";
    case "violet": return "violet";
    case "cyan": return "cyan";
    case "amber": return "fire";
  }
}

// Locale param accepted so callers don't have to add a separate prop just to fetch from data
// (kept simple — currently project content stays English; only labels translate)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function projectByLocale(p: Project, _locale: Locale): Project {
  return p;
}
