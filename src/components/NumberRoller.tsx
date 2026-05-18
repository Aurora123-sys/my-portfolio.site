"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Digit-by-digit mechanical roller. Each digit column scrolls 0..9 to its target.
 */
export default function NumberRoller({
  value,
  decimals = 0,
  duration = 1200,
  prefix,
  suffix,
  className,
}: {
  value: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const text = value.toFixed(decimals);
  // pad integer side for stable width? not needed — use tabular nums.
  return (
    <span ref={ref} className={className}>
      {prefix}
      <span className="text-tabular inline-flex">
        {text.split("").map((ch, i) =>
          /\d/.test(ch) ? (
            <Digit key={i} target={parseInt(ch, 10)} duration={duration} active={started} delay={i * 60} />
          ) : (
            <span key={i}>{ch}</span>
          )
        )}
      </span>
      {suffix}
    </span>
  );
}

function Digit({ target, duration, active, delay }: { target: number; duration: number; active: boolean; delay: number }) {
  const trackRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!active) return;
    const el = trackRef.current;
    if (!el) return;
    el.style.transitionDuration = `${duration}ms`;
    el.style.transitionDelay = `${delay}ms`;
    el.style.transform = `translateY(-${target * 100}%)`;
  }, [active, target, duration, delay]);

  return (
    <span className="roller">
      <span ref={trackRef} className="roller-track" style={{ transform: "translateY(0)" }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="roller-digit">{i}</span>
        ))}
      </span>
    </span>
  );
}
