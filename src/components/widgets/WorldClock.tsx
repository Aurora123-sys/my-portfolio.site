"use client";
import { useEffect, useState } from "react";

const ZONES = [
  { city: "Tokyo", tz: "Asia/Tokyo", accent: "text-cobalt" },
  { city: "São Paulo", tz: "America/Sao_Paulo", accent: "text-coral" },
  { city: "Madrid", tz: "Europe/Madrid", accent: "text-violet2" },
  { city: "New York", tz: "America/New_York", accent: "text-cyan2" },
];

function fmt(tz: string, d: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(d);
}

export default function WorldClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flex h-full flex-col">
      <header className="mb-5">
        <div className="text-eyebrow">Working hours</div>
        <h3 className="mt-2 font-display text-2xl tracking-tight">In the client&apos;s timezone.</h3>
      </header>
      <ul className="flex flex-1 flex-col justify-center gap-3">
        {ZONES.map((z) => (
          <li key={z.city} className="flex items-baseline justify-between border-b border-line py-2 last:border-0">
            <div>
              <div className="font-display text-lg">{z.city}</div>
              <div className="font-mono text-[0.74rem] uppercase tracking-[0.08em] text-ink-500">{z.tz.replace("_", " ")}</div>
            </div>
            <div className={`num text-2xl ${z.accent}`}>{now ? fmt(z.tz, now) : "—"}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
