import Link from "next/link";
import Reveal from "./Reveal";

export default function CtaBand({
  eyebrow,
  title,
  body,
  href,
  cta,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="relative mx-auto max-w-[920px] overflow-hidden rounded-[2.5rem] bg-grad-dark px-6 py-20 text-center text-cream-100 md:px-12">
          <div className="pointer-events-none absolute -left-[10%] -top-1/2 h-[200%] w-[60%] bg-[radial-gradient(closest-side,rgba(244,184,198,0.35),transparent)] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-1/2 -right-[10%] h-[200%] w-[60%] bg-[radial-gradient(closest-side,rgba(124,92,255,0.35),transparent)] blur-3xl" />

          <Reveal>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.6)", justifyContent: "center" }}>
              {eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="relative z-10 mx-auto mt-4 max-w-[18ch] text-balance text-4xl text-cream-100 md:text-5xl lg:text-[3.6rem]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="relative z-10 mx-auto mt-6 max-w-[56ch] text-cream-100/75">{body}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <Link
              href={href}
              className="relative z-10 mt-9 inline-flex items-center gap-2 rounded-full bg-cream-100 px-6 py-3.5 font-medium text-ink transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              {cta}
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
