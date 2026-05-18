"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";
import clsx from "clsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
          "fixed left-0 right-0 top-0 z-[100] transition-all duration-500",
          scrolled ? "px-3 py-3 md:px-8" : "px-3 py-4 md:px-8 md:py-5"
        )}
      >
        <div
          className={clsx(
            "mx-auto flex max-w-[1180px] items-center justify-between rounded-full border transition-all duration-500",
            scrolled
              ? "border-ink/10 bg-cream-100/75 px-3 py-2 pl-6 backdrop-blur-xl backdrop-saturate-150 shadow-soft"
              : "border-transparent bg-transparent px-3 py-2 pl-6"
          )}
        >
          <Link href="/" className="flex items-center gap-2.5 font-display text-[1.05rem]">
            <span className="relative inline-block h-7 w-7 overflow-hidden rounded-full bg-grad-aurora">
              <span className="absolute inset-1 rounded-full bg-cream-100" />
            </span>
            <span>
              Ravi <span className="italic-display">Tsunenori</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 text-[0.92rem] md:flex">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={clsx(
                    "relative rounded-full px-3.5 py-2 transition-colors",
                    active
                      ? "bg-ink text-cream-100"
                      : "text-ink-500 hover:bg-ink hover:text-cream-100"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-cream-100 transition-all hover:-translate-y-0.5 hover:shadow-glow md:inline-flex"
          >
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-[#6dffb9] shadow-[0_0_8px_#6dffb9]" />
            <span>Available — Q3</span>
          </Link>

          <button
            aria-label="Open menu"
            onClick={() => {
              const next = !menuOpen;
              setMenuOpen(next);
              document.body.style.overflow = next ? "hidden" : "";
            }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-cream-100 md:hidden"
          >
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M1 1h16M1 6h16M1 11h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[90] flex flex-col bg-cream-100 px-8 pb-10 pt-28 md:hidden"
          >
            {NAV_LINKS.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  href={l.href}
                  className="block border-b border-ink/10 py-4 font-display text-4xl"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
