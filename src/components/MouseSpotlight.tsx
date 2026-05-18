"use client";
import { useEffect, useRef, type ReactNode } from "react";
import clsx from "clsx";

/**
 * Wraps children with a mouse-tracked spotlight gradient layer.
 * Use over .bento or any card.
 */
export default function MouseSpotlight({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
      el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={ref} className={clsx("group relative", className)}>
      <div className="pointer-events-none absolute inset-0 spotlight opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {children}
    </div>
  );
}
