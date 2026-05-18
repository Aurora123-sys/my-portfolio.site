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
    const textEnter = () => el.classList.add("is-text");
    const textExit = () => el.classList.remove("is-text");

    const interactiveSel = "a, button, [data-cursor='hover'], .feed-card, .skill-card, .story-bubble, .role-card, .cert-card";
    const textSel = "h1, h2, h3, p, [data-cursor='text']";
    const interactive = document.querySelectorAll(interactiveSel);
    const textTargets = document.querySelectorAll(textSel);

    interactive.forEach((t) => {
      t.addEventListener("mouseenter", enter);
      t.addEventListener("mouseleave", exit);
    });
    textTargets.forEach((t) => {
      t.addEventListener("mouseenter", textEnter);
      t.addEventListener("mouseleave", textExit);
    });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      interactive.forEach((t) => {
        t.removeEventListener("mouseenter", enter);
        t.removeEventListener("mouseleave", exit);
      });
      textTargets.forEach((t) => {
        t.removeEventListener("mouseenter", textEnter);
        t.removeEventListener("mouseleave", textExit);
      });
    };
  }, []);

  return <div ref={dotRef} className="cursor-blob" aria-hidden />;
}
