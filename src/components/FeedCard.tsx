"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectArt from "./ProjectArt";
import { type Project, accentToRing } from "@/lib/data";
import { useLang } from "./LanguageProvider";
import clsx from "clsx";

const ACCENT_GLOW: Record<Project["accent"], string> = {
  lime: "shadow-[0_0_60px_rgba(200,255,0,0.18)]",
  coral: "shadow-[0_0_60px_rgba(255,93,124,0.18)]",
  violet: "shadow-[0_0_60px_rgba(157,108,255,0.18)]",
  cyan: "shadow-[0_0_60px_rgba(61,240,209,0.18)]",
  amber: "shadow-[0_0_60px_rgba(255,181,71,0.18)]",
};

const ACCENT_BORDER: Record<Project["accent"], string> = {
  lime: "hover:border-lime/40",
  coral: "hover:border-coral/40",
  violet: "hover:border-violet2/40",
  cyan: "hover:border-cyan2/40",
  amber: "hover:border-amber2/40",
};

const ACCENT_TEXT: Record<Project["accent"], string> = {
  lime: "text-lime",
  coral: "text-coral",
  violet: "text-violet2",
  cyan: "text-cyan2",
  amber: "text-amber2",
};

export default function FeedCard({ project }: { project: Project }) {
  const { t } = useLang();
  const ring = accentToRing(project.accent);
  const cardRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  // Tilt effect on mouse move
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--mx", `${px}`);
      el.style.setProperty("--my", `${py}`);
    };
    const onLeave = () => {
      el.style.setProperty("--mx", `0`);
      el.style.setProperty("--my", `0`);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={clsx(
        "feed-card group relative overflow-hidden rounded-[1.75rem] border border-line bg-bg-surface transition-all duration-500",
        ACCENT_BORDER[project.accent],
        ACCENT_GLOW[project.accent]
      )}
      style={{
        transform: "perspective(1200px) rotateX(calc(var(--my, 0) * -3deg)) rotateY(calc(var(--mx, 0) * 3deg))",
      }}
    >
      {/* header / post bar */}
      <header className="flex items-center justify-between gap-3 px-6 pt-5">
        <div className="flex items-center gap-3">
          <div className="story-ring shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-card">
              <span className="font-display text-sm">R</span>
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1 text-[0.92rem] font-medium">
              <span className="truncate">ravi.tsunenori</span>
              <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 text-lime" fill="none">
                <path d="M2 7.5l3.2 3.2L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-ink-faint">
              {project.badge} · {project.postedAgo}
            </div>
          </div>
        </div>
        <span className={clsx("font-mono text-[0.68rem] uppercase tracking-[0.12em]", ACCENT_TEXT[project.accent])}>
          ◉ {t("home.feed.case")}
        </span>
      </header>

      {/* visual */}
      <div className="relative mt-4 aspect-[16/10] overflow-hidden">
        <ProjectArt slug={project.slug} className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-surface/80 via-transparent to-transparent" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={hover ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-bg/80 text-ink backdrop-blur-md">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="currentColor">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </div>
        </motion.div>
        <PlayingBars active={hover} />
      </div>

      {/* body */}
      <div className="px-6 pt-5 pb-6">
        <h3 className="font-display text-[1.45rem] leading-tight tracking-tight">{project.title}</h3>
        <p className="mt-2 text-[0.94rem] leading-relaxed text-ink-muted">{project.blurb}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="chip">{tag}</span>
          ))}
        </div>

        <footer className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm text-ink-muted">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Heart /> {project.reactions.likes}
            </span>
            <span className="flex items-center gap-1.5">
              <Save /> {project.reactions.saves}
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <span className="num text-ink">{project.stats[0]?.value}</span>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-ink-faint">
                {project.stats[0]?.label}
              </span>
            </span>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.85rem] text-ink hover:bg-white/[0.06]"
          >
            Open
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </footer>
      </div>
    </motion.article>
  );
}

function PlayingBars({ active }: { active: boolean }) {
  return (
    <div className="absolute bottom-3 left-3 flex items-end gap-0.5">
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-sm bg-lime"
          animate={
            active
              ? {
                  height: [6, 14, 6, 18, 10, 6][i % 6 === 0 ? 0 : i],
                  opacity: 1,
                }
              : { height: 4, opacity: 0.35 }
          }
          transition={{
            duration: 0.5,
            repeat: active ? Infinity : 0,
            repeatType: "mirror",
            delay: i * 0.07,
          }}
        />
      ))}
    </div>
  );
}

function Heart() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function Save() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path d="M6 4h12v17l-6-4-6 4V4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
