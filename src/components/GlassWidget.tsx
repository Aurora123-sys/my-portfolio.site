"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Variant = "neutral" | "rose" | "blue" | "mint";

/**
 * Floating 3D glass panel. Tilts on mouse-move with damped transform.
 * Used as the prominent overlay on top of imagery / warm backdrops.
 */
export default function GlassWidget({
  children,
  variant = "neutral",
  tilt = true,
  className,
  delay = 0,
  rotate = 0,
}: {
  children: ReactNode;
  variant?: Variant;
  tilt?: boolean;
  className?: string;
  delay?: number;
  /** Static rotate-z for stylistic offsetting */
  rotate?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tilt) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--gx", String(px));
      el.style.setProperty("--gy", String(py));
    };
    const onLeave = () => {
      el.style.setProperty("--gx", "0");
      el.style.setProperty("--gy", "0");
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [tilt]);

  const variantClass =
    variant === "rose"
      ? "glass-rose"
      : variant === "blue"
      ? "glass-blue"
      : variant === "mint"
      ? "glass-mint"
      : "";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={clsx("glass", variantClass, className)}
      style={{
        transform: `perspective(1200px) rotateX(calc(var(--gy, 0) * -5deg)) rotateY(calc(var(--gx, 0) * 5deg)) rotate(${rotate}deg)`,
        transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </motion.div>
  );
}
