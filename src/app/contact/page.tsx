import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ravi Tsunenori — freelance full-stack, AI systems, and mobile engineer based in Tokyo.",
};

const METHODS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Email · primary",
    value: "hello@ravi.dev",
    href: "mailto:hello@ravi.dev",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "WhatsApp · responses in JST",
    value: "+81 80 — request on email",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="8.5" cy="9" r="1.5" fill="currentColor" />
        <path d="M8.5 12v6M15.5 18v-3.5a2 2 0 012-2v0a2 2 0 012 2V18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    label: "Professional",
    value: "linkedin.com / in / ravi-tsunenori",
    href: "#",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.1 6.8 9.4.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1 1 1.7 2.5 1.2 3.1.9.1-.7.4-1.2.7-1.5-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.5 9.5 0 015 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5C19.1 20.1 22 16.4 22 12c0-5.5-4.5-10-10-10z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    label: "Code",
    value: "github.com / ravi-tsunenori",
    href: "#",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s-7-5.5-7-12a7 7 0 0114 0c0 6.5-7 12-7 12z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    label: "Studio",
    value: "Tokyo, Japan · UTC+9",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48">
        <div className="container">
          <Reveal>
            <div className="eyebrow mb-6">Contact</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-balance text-5xl md:text-6xl lg:text-[5.4rem]">
              Let&apos;s <span className="italic-display">talk shape</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-[64ch] text-lg leading-relaxed text-ink-500">
              Most engagements start with a short call to confirm fit — what you&apos;re building, the constraints, the timeline.
              If we&apos;re aligned I&apos;ll send a fixed-scope proposal within 48 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="grid items-start gap-16 md:grid-cols-2 md:gap-20">
            <Reveal>
              <div>
                {METHODS.map((m, i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-ink/10 py-5 last:border-b-0">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-200">
                      {m.icon}
                    </div>
                    <div>
                      <div className="font-mono text-[0.74rem] uppercase tracking-[0.1em] text-ink-400">{m.label}</div>
                      {m.href ? (
                        <a href={m.href} className="font-display text-lg">{m.value}</a>
                      ) : (
                        <span className="font-display text-lg">{m.value}</span>
                      )}
                    </div>
                  </div>
                ))}
                <p className="mt-9 font-mono text-sm text-ink-400">
                  Average reply time: under 12 business hours in JST.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-grad-dark py-24 text-cream-100 md:py-32">
        <div className="container-narrow text-center">
          <Reveal>
            <div className="eyebrow justify-center" style={{ color: "rgba(255,255,255,0.6)" }}>
              Availability
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-5 max-w-[24ch] text-balance text-4xl text-cream-100 md:text-5xl">
              Booking <span className="italic-display">selected</span> engagements for <span className="italic-display">Q3 2026</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-[60ch] text-cream-100/75">
              I usually take on two to three concurrent engagements. Greenfield AI / SaaS work and senior augmentation roles
              inside small product teams are the best fit. If timing slips, I&apos;ll suggest a trusted referral from my network of
              Tokyo and Singapore engineers.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-3">
              <Tag>⏱ 12-hour reply SLA</Tag>
              <Tag>📁 Fixed-scope proposals</Tag>
              <Tag>🔒 NDA-friendly</Tag>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-cream-100/20 px-4 py-2.5 font-mono text-[0.8rem] text-cream-100/75">
      {children}
    </span>
  );
}
