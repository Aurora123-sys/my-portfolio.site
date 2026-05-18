"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type ProjectTileData = {
  slug: string;
  title: string;
  category: string;
  blurb: string;
  era: string;
  image: string;
  tone: "dark" | "light";
  span?: "small" | "wide" | "tall";
};

export default function ProjectTile({ p }: { p: ProjectTileData }) {
  const span = p.span === "wide" ? "md:col-span-7" : p.span === "tall" ? "md:col-span-5 md:row-span-2" : "md:col-span-5";
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${span}`}
    >
      <Link href="/work" className="relative block overflow-hidden rounded-3xl ring-1 ring-line shadow-bento">
        <div className="relative aspect-[4/3]">
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
          />
          {/* gradient overlay */}
          <div
            className={
              p.tone === "dark"
                ? "absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/40 to-ink-900/15"
                : "absolute inset-0 bg-gradient-to-t from-ink-900/55 via-transparent to-transparent"
            }
          />
          {/* badge top-left */}
          <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-paper/85 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-700 backdrop-blur-md">
            {p.category}
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-ink/80 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-paper backdrop-blur-md">
            {p.era}
          </span>

          {/* bottom block */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
            <h3 className="font-display text-[1.55rem] leading-[1.05] tracking-[-0.035em] text-paper md:text-[1.85rem]">
              {p.title}
            </h3>
            <p className="mt-2 max-w-md text-[0.92rem] leading-snug text-paper/80">
              {p.blurb}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] text-coral-soft">
              Read case
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
