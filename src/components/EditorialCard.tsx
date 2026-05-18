"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectArt from "./ProjectArt";
import { type Project } from "@/lib/data";

const ACCENT_DOT: Record<Project["accent"], string> = {
  lime: "bg-cobalt",
  coral: "bg-coral",
  violet: "bg-violet2",
  cyan: "bg-cyan2",
  amber: "bg-amber2",
};

export default function EditorialCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href="/work" className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] shadow-bento ring-1 ring-line">
          <ProjectArt slug={project.slug} className="absolute inset-0 h-full w-full" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-700 backdrop-blur-md">
            <span className={`h-1.5 w-1.5 rounded-full ${ACCENT_DOT[project.accent]}`} />
            {project.badge}
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-ink/85 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-paper backdrop-blur-md">
            {project.era}
          </span>
        </div>

        <div className="mt-5">
          <h3 className="text-balance font-display text-[1.7rem] leading-[1.04] tracking-[-0.035em] text-ink-900 transition-colors group-hover:text-coral md:text-[2rem]">
            {project.title}
          </h3>
          <p className="mt-3 max-w-[60ch] text-[0.98rem] leading-relaxed text-ink-600">{project.blurb}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="chip">{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
