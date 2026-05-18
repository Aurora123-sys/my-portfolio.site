"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function HeroVisual() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const translateX = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const translateY = useTransform(sy, [-0.5, 0.5], [-12, 12]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      style={{ rotateX, rotateY, x: translateX, y: translateY, perspective: 1000 }}
      className="relative mx-auto aspect-square w-full max-w-[480px] lg:ml-auto"
    >
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative aspect-square w-full overflow-hidden rounded-full bg-grad-aurora p-3.5 shadow-glow"
      >
        <span className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[conic-gradient(from_0deg,#f4b8c6,#c9b6e8,#a8d2e0,#b9e3c7,#f5c992,#f4b8c6)] opacity-40 blur-3xl animate-spin-slow" />
        <Image
          src="/avatar.png"
          alt="Portrait of Ravi Yoshitomo Tsunenori"
          width={520}
          height={520}
          priority
          className="h-full w-full rounded-full bg-cream-100 object-cover"
        />
      </motion.div>

      <Chip pos="top-[8%] -left-[10%]" color="bg-electric-500" delay={0}>
        Next.js · NestJS
      </Chip>
      <Chip pos="top-[42%] -right-[14%]" color="bg-rose-600" delay={1.5}>
        GPT-4o · RAG · LangChain
      </Chip>
      <Chip pos="bottom-[6%] -left-[4%]" color="bg-[#6dffb9]" delay={3}>
        Flutter · Swift · Kotlin
      </Chip>
    </motion.div>
  );
}

function Chip({
  pos,
  color,
  delay,
  children,
}: {
  pos: string;
  color: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute ${pos} flex items-center gap-2.5 rounded-full border border-ink/10 bg-cream-100/85 px-4 py-2.5 text-sm font-medium shadow-soft backdrop-blur-md`}
    >
      <span className={`h-2 w-2 rounded-full ${color}`} />
      {children}
    </motion.div>
  );
}
