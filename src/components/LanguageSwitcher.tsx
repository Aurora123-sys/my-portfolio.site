"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "./LanguageProvider";
import { LOCALES, type Locale } from "@/lib/i18n";
import clsx from "clsx";

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={clsx(
          "inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink-muted transition-colors hover:bg-white/[0.08] hover:text-ink",
          compact ? "px-2.5 py-1.5" : "px-3 py-2"
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span aria-hidden>{current.flag}</span>
        <span>{current.short}</span>
        <svg className={clsx("h-3 w-3 transition-transform", open && "rotate-180")} viewBox="0 0 12 12" fill="none">
          <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-line bg-bg-card p-1 shadow-card backdrop-blur-xl"
            role="listbox"
          >
            {LOCALES.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  onClick={() => {
                    setLocale(l.code as Locale);
                    setOpen(false);
                  }}
                  className={clsx(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                    l.code === locale
                      ? "bg-lime/10 text-lime"
                      : "text-ink-muted hover:bg-white/[0.06] hover:text-ink"
                  )}
                  role="option"
                  aria-selected={l.code === locale}
                >
                  <span className="text-base" aria-hidden>{l.flag}</span>
                  <span className="flex-1">{l.label}</span>
                  {l.code === locale && (
                    <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7.5L6 11.5L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
