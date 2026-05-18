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
    const onScroll = () => setScrolled(window.scrollY > 8);
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
          "fixed inset-x-0 top-0 z-[100] transition-colors duration-300",
          scrolled ? "border-b border-line bg-paper/85 backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <div className="container flex h-[72px] items-center justify-between md:h-[88px]">
          <Link href="/" className="flex items-center gap-2.5 font-display text-[1.15rem] md:text-[1.25rem]">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-paper md:h-10 md:w-10">
              <span className="font-bold">R</span>
            </span>
            <span className="hidden text-ink-900 sm:inline">
              ravi<span className="text-coral">.</span>tsunenori
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={clsx(
                    "rounded-full px-4 py-2.5 text-[0.95rem] transition-colors",
                    active
                      ? "text-coral"
                      : "text-ink-700 hover:text-ink-900"
                  )}
                >
                  {t(l.labelKey)}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link href="/work" className="hidden md:inline-flex btn btn-cta !py-2.5 !px-5 !text-sm">
              {t("nav.followCta")}
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <button
              aria-label={t("nav.menuOpen")}
              onClick={() => {
                const next = !menuOpen;
                setMenuOpen(next);
                document.body.style.overflow = next ? "hidden" : "";
              }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper md:hidden"
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M1 1h16M1 6h16M1 11h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
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
            className="fixed inset-0 z-[90] flex flex-col bg-paper px-6 pb-10 pt-28 md:hidden"
          >
            <div className="mb-8 flex items-center justify-between">
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
                <Link href={l.href} className="block border-b border-line py-5 font-display text-4xl text-ink-900">
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
