"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";
import { useLang } from "./LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import clsx from "clsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
          scrolled ? "px-3 py-2.5 md:px-6" : "px-3 py-3.5 md:px-6 md:py-4"
        )}
      >
        <div
          className={clsx(
            "mx-auto flex max-w-[1180px] items-center justify-between rounded-full border transition-all duration-500",
            scrolled
              ? "border-line bg-bg/70 px-2 pl-5 py-1.5 backdrop-blur-xl shadow-card"
              : "border-transparent bg-transparent px-2 pl-5 py-1.5"
          )}
        >
          <Link href="/" className="flex items-center gap-2.5 font-display text-[1.04rem]">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-grad-lime text-[0.62rem] font-bold text-bg">
              R
            </span>
            <span className="hidden sm:inline">
              ravi<span className="text-lime">.</span>tsunenori
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={clsx(
                    "rounded-full px-3.5 py-2 text-[0.9rem] transition-colors",
                    active
                      ? "bg-lime text-bg"
                      : "text-ink-muted hover:bg-white/[0.06] hover:text-ink"
                  )}
                >
                  {t(l.labelKey)}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              aria-label={t("nav.menuOpen")}
              onClick={() => {
                const next = !menuOpen;
                setMenuOpen(next);
                document.body.style.overflow = next ? "hidden" : "";
              }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-bg md:hidden"
            >
              <svg width="16" height="11" viewBox="0 0 18 12" fill="none">
                <path d="M1 1h16M1 6h16M1 11h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] flex flex-col bg-bg px-6 pb-10 pt-24 md:hidden"
          >
            <div className="mb-10 flex items-center justify-between">
              <span className="text-eyebrow">{t("nav.langLabel")}</span>
              <LanguageSwitcher />
            </div>
            {NAV_LINKS.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  href={l.href}
                  className="block border-b border-line py-4 font-display text-4xl"
                >
                  {t(l.labelKey)}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
