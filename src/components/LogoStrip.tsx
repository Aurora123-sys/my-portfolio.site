"use client";
import { motion } from "framer-motion";

/**
 * Small grayscale wordmark strip in the style of "Brands using X".
 * Uses styled type for portfolio tech stack instead of brand logos.
 */
export default function LogoStrip({
  items,
  title,
}: {
  items: string[];
  title?: string;
}) {
  return (
    <section className="border-y border-line bg-paper-50 py-12 md:py-16">
      <div className="container">
        {title && (
          <p className="mb-7 text-center font-mono text-[0.74rem] uppercase tracking-[0.18em] text-ink-500">
            {title}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-80 md:gap-x-14">
          {items.map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="font-display text-[1.4rem] tracking-tight text-ink-600 md:text-[1.75rem]"
            >
              {label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
