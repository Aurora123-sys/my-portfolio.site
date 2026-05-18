export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
] as const;

export const STATS = [
  { value: 12, suffix: "K+ MAU", label: "Active users served across FlowClinic deployments" },
  { value: 200, suffix: "K / day", label: "Webhook events processed through automation engines" },
  { value: 30, suffix: "+ engagements", label: "Delivered to clients across 9 countries on Upwork" },
  { value: 4.97, decimals: 2, suffix: "/ 5.0 ★", label: "200+ contracts · sustained Top-Rated Plus rating" },
] as const;

export const SERVICES = [
  {
    n: "01",
    title: "SaaS Product Engineering",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Stripe"],
    body: "Multi-tenant platforms with payments, RBAC, and 99.9% uptime SLOs. Architected for ten users or ten thousand.",
    gradient: "bg-grad-aurora",
  },
  {
    n: "02",
    title: "AI Agents & RAG Systems",
    tags: ["GPT-4o", "LangChain", "Pinecone", "pgvector"],
    body: "WhatsApp triage bots, multi-agent orchestration, and semantic search over 50GB+ knowledge bases. Production scale only.",
    gradient: "bg-grad-warm",
  },
  {
    n: "03",
    title: "Mobile · iOS · Android",
    tags: ["Flutter", "React Native", "SwiftUI", "Kotlin"],
    body: "Cross-platform and native — from real-time matching with offline cache to BLE wearable sync and Apple Pay flows.",
    gradient: "bg-grad-cool",
  },
  {
    n: "04",
    title: "Integrations & Automation",
    tags: ["Twilio", "Shopify", "n8n", "Webhooks"],
    body: "HMAC-verified webhook pipelines, idempotent queues, and timezone-aware CRM nurture flows that don't drop on the third retry.",
    gradient: "bg-grad-mint",
  },
] as const;

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
  accent: "rose" | "lav" | "sky" | "mint" | "amber";
};

export const PROJECTS: Project[] = [
  {
    slug: "flowclinic",
    badge: "SaaS · Health",
    category: "SaaS",
    era: "2023 — Present",
    title: "FlowClinic — multi-tenant clinic platform",
    blurb:
      "12K+ MAU across three countries. Scheduling, billing, RBAC, and patient comms in one shipping product.",
    blurbLong:
      "A scheduling, billing, and patient-comms platform serving twelve thousand active users across clinics in Japan, Singapore, and Australia. I designed the data model, built the backend on NestJS, shipped the Next.js front-end, and own the deploy pipeline.",
    stats: [
      { value: "12K+", label: "MAU · 3 countries" },
      { value: "99.94%", label: "uptime · rolling 30d" },
      { value: "3 yrs", label: "continuous engagement" },
    ],
    tags: ["Next.js 14", "NestJS", "PostgreSQL", "Redis", "Stripe", "Vercel"],
    accent: "rose",
  },
  {
    slug: "ceras-health",
    badge: "AI · Health",
    category: "AI",
    era: "2024 — Present",
    title: "Ceras Health — WhatsApp AI triage",
    blurb: "GPT-4o + Twilio with human handoff. Cut support volume 38% in the first quarter post-launch.",
    blurbLong:
      "A WhatsApp-first triage assistant for patients. GPT-4o behind a strict tool-use boundary, with deterministic handoff to human staff on red-flag symptoms, escalations, and explicit user request. Designed to be safe before clever.",
    stats: [
      { value: "−38%", label: "support volume Q1" },
      { value: "<4s", label: "median P50 reply" },
      { value: "EN / JP", label: "bilingual launch" },
    ],
    tags: ["OpenAI GPT-4o", "LangChain", "Twilio", "Pinecone", "NestJS"],
    accent: "lav",
  },
  {
    slug: "timeleft",
    badge: "Mobile · Social",
    category: "Mobile",
    era: "2023 — 2024",
    title: "Timeleft — real-time social discovery",
    blurb:
      "React Native + Expo. Real-time matching, offline-first cache, push pipelines via FCM and APNs.",
    blurbLong:
      "A consumer social app with real-time matching, offline-first cache, and push pipelines via FCM and APNs. I led the deep-link architecture and redesigned the onboarding flow — Day-7 retention improved 21% on the cohort analytics.",
    stats: [
      { value: "+21%", label: "D7 retention" },
      { value: "RN + Expo", label: "iOS & Android" },
      { value: "Offline-first", label: "realtime sync" },
    ],
    tags: ["React Native", "Expo", "FCM", "APNs", "Realtime DB"],
    accent: "amber",
  },
  {
    slug: "her-lip-to",
    badge: "E-commerce · iOS",
    category: "Mobile",
    era: "2022 — 2023",
    title: "Her lip to — luxury fashion iOS",
    blurb:
      "SwiftUI carousels with synchronized wishlists, restock alerts, Apple Pay checkout.",
    blurbLong:
      "Native iOS features for a fast-growing luxury label. SwiftUI product carousels with synchronized wishlists, restock alerts, and Apple Pay checkout. Tight design system collaboration with the in-house team.",
    stats: [
      { value: "SwiftUI", label: "+ UIKit interop" },
      { value: "Apple Pay", label: "PCI-light checkout" },
      { value: "Restock", label: "push alerts" },
    ],
    tags: ["SwiftUI", "UIKit", "Apple Pay", "Push", "StoreKit"],
    accent: "sky",
  },
];

export const ROLES = [
  {
    title: "Freelance Full-Stack Developer",
    org: "Self-Employed · Tokyo, Japan (Remote)",
    when: "April 2014 — Present",
    bullets: [
      "Designed and shipped end-to-end SaaS — FlowClinic serves 12,000+ MAU across three countries on Next.js 14 + NestJS + PostgreSQL.",
      "Developed the Ceras Health WhatsApp triage chatbot (Twilio + GPT-4o + LangChain). Cut support volume 38% in Q1.",
      "Architected multi-stage automation workflows on Bull/Redis + NestJS microservices processing 200K events/day for an e-commerce client.",
      "Integrated RAG pipelines on Pinecone and pgvector across 50GB+ of proprietary product documentation.",
      "Implemented Stripe billing — subscriptions, usage-based, free-trial flows — across eight SaaS products with PCI-compliant webhooks.",
      "4.97 / 5.0 average rating over 200+ contracts; sustained Top-Rated Plus on Upwork.",
    ],
    tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Twilio", "OpenAI", "LangChain", "Pinecone", "Stripe", "Vercel"],
  },
  {
    title: "Freelance Mobile Developer — Multiplatform & Native",
    org: "Self-Employed · Tokyo, Japan (Remote)",
    when: "June 2015 — Present",
    bullets: [
      "Cross-platform apps in Flutter and React Native / Expo. Timeleft — real-time matching, offline-first cache, FCM and APNs push.",
      "Native iOS features in SwiftUI + UIKit for the Her lip to luxury fashion app, including product carousels, restock alerts, Apple Pay.",
      "Kotlin / Android SDK modules for a wearable health-monitoring app — BLE pairing, background sync, encrypted local storage.",
      "Led deep-link architecture and onboarding redesign for an RN/Expo consumer app — 21% improvement in D7 retention.",
    ],
    tags: ["React Native", "Expo", "Flutter", "Dart", "Swift", "SwiftUI", "UIKit", "Kotlin", "Java", "Android SDK"],
  },
  {
    title: "Freelance Front-End Developer",
    org: "Self-Employed · Tokyo, Japan (Remote)",
    when: "April 2014 — Present",
    bullets: [
      "High-converting landing pages and programmatic SEO at scale for Printful's partner ecosystem. LCP < 1.8s under heavy image loads with next/image + ISR.",
      "Worked within large React and Vue codebases with strict design systems; i18n / hreflang for 14-locale campaigns.",
      "Built A/B-testable page variants for paid acquisition.",
      "Delivered iMean AI's public-facing marketing site with animated scroll sequences, GSAP transitions, and an embedded live product demo.",
    ],
    tags: ["Next.js", "React", "Vue", "Nuxt", "TypeScript", "Tailwind", "ISR", "Headless CMS"],
  },
  {
    title: "Freelance Integration & Automation Developer",
    org: "Self-Employed · Tokyo, Japan (Remote)",
    when: "March 2015 — Present",
    bullets: [
      "Order-webhook normalization layers for Shopify, Etsy, WooCommerce — HMAC validation, idempotency keys, DLQs in Node.js / NestJS.",
      "Lead-to-CRM pipelines with Clearbit enrichment + multi-channel nurture (Resend, Twilio WhatsApp), timezone-aware scheduling.",
      "Equivalent automation workflows in n8n, Make, Zapier for budget-constrained clients — same SLAs as custom code.",
    ],
    tags: ["Node.js", "Express", "NestJS", "PHP", "Laravel", "Python", "Django", "FastAPI", "n8n", "Make", "Zapier"],
  },
];

export const SKILL_GROUPS = [
  {
    code: "FE",
    sub: "01 · Daily driver",
    title: "Front-End",
    gradient: "bg-grad-aurora",
    items: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "SCSS"],
  },
  {
    code: "BE",
    sub: "02 · Production scale",
    title: "Back-End",
    gradient: "bg-grad-warm",
    items: ["Node.js", "NestJS", "Express", "Python", "FastAPI", "Django", "Laravel", "GraphQL", "REST", "tRPC"],
  },
  {
    code: "MO",
    sub: "03 · Cross-platform & native",
    title: "Mobile",
    gradient: "bg-grad-cool",
    items: ["React Native", "Expo", "Flutter", "Dart", "Swift", "SwiftUI", "UIKit", "Kotlin", "Android SDK"],
  },
  {
    code: "AI",
    sub: "04 · Most recent focus",
    title: "AI & ML",
    gradient: "bg-grad-mint",
    items: ["OpenAI", "Anthropic Claude", "LangChain", "LlamaIndex", "RAG", "Pinecone", "pgvector", "TensorFlow", "PyTorch", "Hugging Face"],
  },
  {
    code: "DB",
    sub: "05 · Data & cloud",
    title: "Data & Cloud",
    gradient: "bg-grad-electric",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase", "AWS", "GCP", "Vercel", "Docker", "K8s"],
  },
  {
    code: "IO",
    sub: "06 · Plumbing & payments",
    title: "Integrations",
    gradient: "bg-grad-aurora",
    items: ["Stripe", "Twilio", "Shopify API", "Slack API", "Webhooks", "HMAC Validation", "n8n", "Make", "Zapier", "Dialogflow"],
  },
  {
    code: "OPS",
    sub: "07 · How I run engagements",
    title: "Methods",
    gradient: "bg-grad-cool",
    items: ["Agile / Scrum", "Git / GitHub", "DevOps", "Performance Monitoring", "A/B Testing", "i18n / hreflang", "Lighthouse / Core Web Vitals"],
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
    desc: "Started taking client work while still in technical college. Thirty-plus engagements later, the same practice now spans SaaS, AI systems, mobile, and integrations — with a 4.97 / 5.0 average rating across 200+ contracts.",
    color: "bg-rose-600",
  },
  {
    when: "March 2018",
    title: "Associate Degree — Kōsen Tokyo College",
    desc: "Five-year accelerated technical program in software engineering and electronics. Best Graduation Project award for an autonomous task scheduler with priority-inversion prevention on a real-time embedded system.",
    color: "bg-electric-500",
  },
  {
    when: "2018 — 2020",
    title: "BEng Information Engineering — Tokyo Institute of Technology",
    desc: "Graduated with honors, GPA 3.82 / 4.00. Thesis: \"Latency-Optimized Multi-Agent Task Decomposition for Real-Time Language Model Systems\" — long before agents were trendy.",
    color: "bg-sky2-600",
  },
  {
    when: "2022 — 2024",
    title: "Cloud, ML, and Kubernetes certifications",
    desc: "AWS Solutions Architect Associate, GCP Professional Data Engineer, CKAD, and TensorFlow Developer — a stretch of focused certification work to formalize what client projects had already taught.",
    color: "bg-mint-500",
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
