"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = dotRef.current;
    if (!el) return;
    let x = 0,
      y = 0,
      tx = 0,
      ty = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.classList.add("is-visible");
    };
    const onLeave = () => el.classList.remove("is-visible");

    const tick = () => {
      tx += (x - tx) * 0.22;
      ty += (y - ty) * 0.22;
      el.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };
    tick();

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    const enter = () => el.classList.add("is-active");
    const exit = () => el.classList.remove("is-active");
    const sel = "a, button, [data-cursor], .work-card, .service-card, .skill-card, .role-card";
    const targets = document.querySelectorAll(sel);
    targets.forEach((t) => {
      t.addEventListener("mouseenter", enter);
      t.addEventListener("mouseleave", exit);
    });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", enter);
        t.removeEventListener("mouseleave", exit);
      });
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden />;
}
