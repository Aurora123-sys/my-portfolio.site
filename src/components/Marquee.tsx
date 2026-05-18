import clsx from "clsx";

export default function Marquee({ items, className }: { items: readonly string[]; className?: string }) {
  const doubled = [...items, ...items];
  return (
    <div
      aria-hidden
      className={clsx(
        "relative overflow-hidden border-y border-ink/10 bg-cream-100 py-14",
        "before:absolute before:left-0 before:top-0 before:bottom-0 before:z-10 before:w-32 before:bg-gradient-to-r before:from-cream-100 before:to-transparent before:pointer-events-none",
        "after:absolute after:right-0 after:top-0 after:bottom-0 after:z-10 after:w-32 after:bg-gradient-to-l after:from-cream-100 after:to-transparent after:pointer-events-none",
        className
      )}
    >
      <div className="flex w-max animate-marquee-x gap-20">
        {doubled.map((t, i) => (
          <span
            key={i}
            className={clsx(
              "flex items-center gap-20 whitespace-nowrap font-display text-2xl tracking-[-0.02em] sm:text-3xl md:text-4xl",
              i % 2 === 1 ? "italic-display text-ink-500" : "text-ink",
              "after:text-rose-600 after:content-['✺'] after:text-base"
            )}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
