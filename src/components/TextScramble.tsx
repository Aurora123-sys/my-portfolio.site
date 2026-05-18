"use client";
import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

/**
 * Scrambles into the target text on mount or when `text` changes.
 */
export default function TextScramble({ text, speed = 50, className }: { text: string; speed?: number; className?: string }) {
  const [out, setOut] = useState(text);
  const frameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const from = out;
    const to = text;
    const length = Math.max(from.length, to.length);
    const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
    for (let i = 0; i < length; i++) {
      const fromChar = from[i] ?? "";
      const toChar = to[i] ?? "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from: fromChar, to: toChar, start, end });
    }
    frameRef.current = 0;

    const update = () => {
      let output = "";
      let complete = 0;
      for (let i = 0; i < queue.length; i++) {
        const q = queue[i];
        if (frameRef.current >= q.end) {
          complete++;
          output += q.to;
        } else if (frameRef.current >= q.start) {
          if (!q.char || Math.random() < 0.28) {
            q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          output += q.char;
        } else {
          output += q.from;
        }
      }
      setOut(output);
      if (complete === queue.length) {
        rafRef.current = null;
        return;
      }
      frameRef.current++;
      rafRef.current = window.setTimeout(update, speed) as unknown as number;
    };
    update();

    return () => {
      if (rafRef.current) clearTimeout(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return <span className={className}>{out}</span>;
}
