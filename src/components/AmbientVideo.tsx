"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type Props = {
  sources: string[];
  poster?: string;
  className?: string;
  /** 0..1 — multiplied over the video for the paper backdrop blend */
  opacity?: number;
};

/**
 * Background ambient video. Lazy plays on intersect. Falls back gracefully
 * if the source is blocked / fails — we just remain transparent and the
 * surrounding gradient/spotlight carries the layout.
 */
export default function AmbientVideo({ sources, poster, className, opacity = 0.5 }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ok, setOk] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => setOk(false));
        else v.pause();
      },
      { threshold: 0.1 }
    );
    io.observe(v);

    const onErr = () => setOk(false);
    v.addEventListener("error", onErr);
    return () => {
      io.disconnect();
      v.removeEventListener("error", onErr);
    };
  }, []);

  if (!ok) return null;

  return (
    <video
      ref={ref}
      className={clsx("pointer-events-none object-cover", className)}
      style={{ opacity }}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden
    >
      {sources.map((s) => (
        <source key={s} src={s} type={s.endsWith(".webm") ? "video/webm" : "video/mp4"} />
      ))}
    </video>
  );
}
