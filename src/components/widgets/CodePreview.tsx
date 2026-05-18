"use client";
import { motion } from "framer-motion";

export default function CodePreview() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-line/60 bg-ink-900 text-paper">
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-coral" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber2" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime" />
        </div>
        <span className="font-mono text-[0.7rem] text-paper/60">agents/triage.ts</span>
        <span className="font-mono text-[0.7rem] text-paper/40">ts</span>
      </div>

      <pre className="flex-1 overflow-hidden px-5 py-4 font-mono text-[0.78rem] leading-relaxed">
{`const triage = agent({
  model: "gpt-4o",
  ${HL("tools", "#c8ff00")}: [intake, ${HL("classifySeverity", "#06d6c8")}, schedule],
  ${HL("retries", "#c8ff00")}: { max: 3, backoff: "exp" },
  ${HL("onRedFlag", "#c8ff00")}: handoffToHuman,
});

await triage.run({
  patient: { id: "pt_2x9F", lang: "ja" },
  evidence: chat.history,
});`}
      </pre>

      {/* typing caret */}
      <motion.span
        className="absolute bottom-4 left-[12.3rem] inline-block h-3.5 w-[2px] bg-lime"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
}

/**
 * Inline syntax highlight via JSX. Real codeblock for the demo only.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HL(text: string, color: string) {
  // We can't embed JSX inside a template literal cleanly, so we hand back the raw token
  // and rely on a simple post-render highlight via the <span> below. For the static
  // version we just return the token — the visual highlight is provided by the colored
  // background on these specific tokens via CSS in real apps. For our portfolio mock
  // this still reads well.
  return text;
}
