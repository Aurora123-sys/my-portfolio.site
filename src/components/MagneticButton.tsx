"use client";
import { useRef, type ReactNode, type CSSProperties } from "react";
import clsx from "clsx";

export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  strength = 0.35,
  style,
  as: As = "a" as React.ElementType,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  style?: CSSProperties;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    inner.style.transform = `translate(${x * strength * 0.4}px, ${y * strength * 0.4}px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "";
    if (innerRef.current) innerRef.current.style.transform = "";
  };

  const Wrapper: React.ElementType = As;
  return (
    <Wrapper
      ref={ref as React.Ref<HTMLElement>}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={clsx("inline-block will-change-transform transition-transform duration-300", className)}
      style={style}
    >
      <span ref={innerRef} className="inline-block will-change-transform transition-transform duration-300">
        {children}
      </span>
    </Wrapper>
  );
}
