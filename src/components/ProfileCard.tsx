"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useLang } from "./LanguageProvider";
import { HOME_STATS } from "@/lib/data";
import Counter from "./Counter";

export default function ProfileCard() {
  const { t } = useLang();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 25 });
  const sy = useSpring(my, { stiffness: 80, damping: 25 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const r = document.querySelector(".profile-card-wrap")?.getBoundingClientRect();
      if (!r) return;
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      mx.set(px);
      my.set(py);
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="profile-card-wrap relative mx-auto w-full max-w-2xl"
    >
      <div className="panel relative overflow-hidden rounded-[2rem] p-8 md:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-grad-lime opacity-30 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 -bottom-20 h-64 w-64 rounded-full bg-grad-coral opacity-25 blur-3xl" />

        <div className="relative flex items-center gap-5">
          <div className="story-ring shrink-0">
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-bg-card md:h-24 md:w-24">
              <Image
                src="/avatar.png"
                alt="Ravi"
                fill
                sizes="96px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-display text-2xl md:text-3xl">Ravi Tsunenori</span>
              <span
                className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime text-bg"
                title={t("home.verified")}
                aria-label="Verified"
              >
                <svg viewBox="0 0 14 14" className="h-3 w-3" fill="none">
                  <path d="M2 7.5l3.2 3.2L12 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <div className="mt-1 handle">{t("home.handle")}</div>
            <div className="mt-1 text-[0.84rem] text-ink-muted">{t("home.role")}</div>
          </div>
        </div>

        <p className="relative mt-7 max-w-[58ch] text-[0.98rem] leading-relaxed text-ink/90">
          {t("home.bio")}
        </p>

        <div className="relative mt-7 grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
          {HOME_STATS.map((s) => (
            <div key={s.key}>
              <div className="num text-3xl md:text-[2rem]">
                <Counter value={s.value} decimals={"decimals" in s ? s.decimals : 0} />
                <span className="text-ink-faint text-base align-baseline">{s.suffix}</span>
              </div>
              <div className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-faint">
                {t(s.key)}
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-9 flex flex-wrap gap-3">
          <Link href="/work" className="btn btn-primary">
            {t("home.action.viewWork")}
            <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/about" className="btn btn-ghost">
            {t("home.action.about")}
          </Link>
          <span className="badge-live ml-auto">{t("common.openToWork")}</span>
        </div>
      </div>
    </motion.div>
  );
}
