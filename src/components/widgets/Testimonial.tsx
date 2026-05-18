"use client";

export default function Testimonial() {
  return (
    <div className="flex h-full flex-col justify-between">
      <header className="mb-5 flex items-start justify-between">
        <svg viewBox="0 0 32 24" className="h-7 w-7 text-cobalt" fill="currentColor" aria-hidden>
          <path d="M0 24V12C0 5.4 4.5 1 11 0v6c-2.8.3-4.5 2-4.7 5H11v13H0zm21 0V12C21 5.4 25.5 1 32 0v6c-2.8.3-4.5 2-4.7 5H32v13H21z" />
        </svg>
        <div className="flex gap-0.5 text-amber2">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor">
              <path d="M8 .5l2.3 4.7 5.2.75-3.75 3.65.9 5.2L8 12.4 3.35 14.8l.9-5.2L.5 5.95l5.2-.75z" />
            </svg>
          ))}
        </div>
      </header>

      <blockquote className="font-display text-[1.4rem] leading-[1.2] tracking-tight text-ink-900 md:text-[1.6rem]">
        “Ravi is the only freelancer we&apos;ve worked with who treats production like he owns it. Shipped a multi-agent pipeline in two weeks that we&apos;d sized at two months.”
      </blockquote>

      <footer className="mt-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-grad-cobalt" />
        <div>
          <div className="font-display text-base">Sora Imai</div>
          <div className="font-mono text-[0.74rem] uppercase tracking-[0.08em] text-ink-500">Head of Product · Ceras Health</div>
        </div>
      </footer>
    </div>
  );
}
