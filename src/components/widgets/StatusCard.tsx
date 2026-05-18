"use client";
import { useLang } from "../LanguageProvider";

export default function StatusCard() {
  const { t } = useLang();
  return (
    <div className="flex h-full flex-col">
      <span className="badge-live mb-4 self-start">status</span>
      <h3 className="font-display text-[1.6rem] leading-[1.05] tracking-tight">
        Currently <span className="italic-display">accepting</span> two new engagements for next quarter.
      </h3>
      <ul className="mt-6 space-y-2.5">
        {[
          ["⏱", "12-hour reply SLA"],
          ["📁", "Fixed-scope proposals"],
          ["🔒", "NDA-friendly"],
          ["🌐", t("footer.timezone")],
        ].map(([emoji, text]) => (
          <li key={text} className="flex items-center gap-3 rounded-xl border border-line bg-white/60 px-3 py-2 text-sm">
            <span className="text-base" aria-hidden>{emoji}</span>
            <span className="text-ink-700">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
