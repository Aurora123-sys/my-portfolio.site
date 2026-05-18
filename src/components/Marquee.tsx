import clsx from "clsx";

export default function Marquee({ items, className }: { items: readonly string[]; className?: string }) {
  const doubled = [...items, ...items];
  return (
    <div
      aria-hidden
      className={clsx(
        "relative overflow-hidden border-y border-line bg-paper py-10",
        "before:absolute before:left-0 before:top-0 before:bottom-0 before:z-10 before:w-24 before:bg-gradient-to-r before:from-paper before:to-transparent before:pointer-events-none",
        "after:absolute after:right-0 after:top-0 after:bottom-0 after:z-10 after:w-24 after:bg-gradient-to-l after:from-paper after:to-transparent after:pointer-events-none",
        className
      )}
    >
      <div className="flex w-max animate-marquee-x gap-16">
        {doubled.map((t, i) => (
          <span
            key={i}
            className={clsx(
              "flex items-center gap-16 whitespace-nowrap font-display text-2xl tracking-[-0.025em] sm:text-3xl md:text-4xl",
              "after:text-cobalt after:content-['✺'] after:text-base",
              i % 2 === 0 ? "text-ink-900" : "italic-display text-ink-500"
            )}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
