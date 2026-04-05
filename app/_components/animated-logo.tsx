"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

type AnimatedLogoProps = {
  src: string;
};

export function AnimatedLogo({ src }: AnimatedLogoProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { y: -1.5, scale: 1.015 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <Link
        href="/"
        className="group relative inline-flex items-center overflow-hidden rounded-full px-1 py-1"
        aria-label="DraftOut home"
      >
        {!prefersReducedMotion ? (
          <>
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(1,79,220,0.1),transparent_65%)]"
              animate={{ opacity: [0.14, 0.28, 0.14] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-[-20%] left-[-30%] w-[34%] rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.95),transparent)] opacity-70 mix-blend-screen"
              animate={{ x: ["0%", "420%"] }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.8,
              }}
            />
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute right-1 top-[2px] h-2 w-2 rounded-full bg-[#70ccfa]"
              animate={{
                scale: [0.7, 1.1, 0.7],
                opacity: [0.15, 0.75, 0.15],
              }}
              transition={{
                duration: 1.9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        ) : null}

        <Image
          src={src}
          alt="DraftOut"
          width={150}
          height={32}
          className="relative z-[1] h-8 w-auto"
          priority
        />
      </Link>
    </motion.div>
  );
}
