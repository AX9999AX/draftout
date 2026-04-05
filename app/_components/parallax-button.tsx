"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { MouseEventHandler, ReactNode } from "react";
import { openLandingCtaModal } from "./landing-cta-modal";

type ParallaxButtonProps = {
  arrowSrc?: string;
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  variant?: "primary" | "plain";
  attention?: boolean;
  opensModal?: boolean;
  onMouseMove?: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>;
};

export function ParallaxButton({
  arrowSrc,
  children,
  className,
  href,
  target,
  rel,
  ariaLabel,
  variant = "primary",
  attention = false,
  opensModal = false,
  onMouseMove,
  onMouseLeave,
}: ParallaxButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18 });
  const shineX = useTransform(springY, [-8, 8], [35, 65]);
  const shineY = useTransform(springX, [-8, 8], [35, 65]);
  const background = useMotionTemplate`radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.22), transparent 42%)`;

  const handleMouseMove: MouseEventHandler<HTMLAnchorElement> =
    (event) => {
      if (!prefersReducedMotion) {
        const rect = event.currentTarget.getBoundingClientRect();
        const pointerX = event.clientX - rect.left;
        const pointerY = event.clientY - rect.top;
        const rotateYValue = ((pointerX / rect.width) - 0.5) * 12;
        const rotateXValue = (0.5 - pointerY / rect.height) * 12;

        rotateX.set(rotateXValue);
        rotateY.set(rotateYValue);
      }

      onMouseMove?.(event);
    };

  const handleMouseLeave: MouseEventHandler<HTMLAnchorElement> =
    (event) => {
      rotateX.set(0);
      rotateY.set(0);
      onMouseLeave?.(event);
    };

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (!opensModal) {
      return;
    }

    event.preventDefault();
    openLandingCtaModal();
  };

  const baseClassName =
    variant === "primary"
      ? "h-[52px] items-center justify-center rounded-[100px] bg-[linear-gradient(87deg,#34c759_0%,rgba(27,175,65,0.8)_100%)] px-8 font-display text-[16px] leading-5 font-bold text-white shadow-[0_10px_25px_-5px_rgba(52,199,89,0.3)]"
      : "";

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.01 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      style={
        prefersReducedMotion
          ? undefined
          : {
              rotateX: springX,
              rotateY: springY,
              transformPerspective: 900,
            }
      }
      className={`relative inline-flex overflow-hidden ${baseClassName} ${className ?? ""}`}
      animate={
        attention && !prefersReducedMotion
          ? {
              y: [0, -2, 0],
              boxShadow: [
                "0 10px 25px -5px rgba(52,199,89,0.30)",
                "0 16px 34px -8px rgba(52,199,89,0.52)",
                "0 10px 25px -5px rgba(52,199,89,0.30)",
              ],
            }
          : undefined
      }
      transition={
        attention && !prefersReducedMotion
          ? {
              duration: 2.1,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : undefined
      }
    >
      {!prefersReducedMotion ? (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background }}
        />
      ) : null}

      <motion.span
        className="relative z-[1] inline-flex items-center justify-center gap-[10px] text-white"
        whileHover={prefersReducedMotion ? undefined : { x: -2 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        animate={
          attention && !prefersReducedMotion
            ? {
                scale: [1, 1.035, 1],
                letterSpacing: ["0em", "0.02em", "0em"],
              }
            : undefined
        }
      >
        {children}
        {arrowSrc ? (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none inline-flex h-3 w-3 shrink-0 items-center justify-center"
            whileHover={prefersReducedMotion ? undefined : { x: 3, y: -1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            animate={
              attention && !prefersReducedMotion
                ? {
                    x: [0, 2, 0],
                  }
                : undefined
            }
          >
            <Image src={arrowSrc} alt="" width={12} height={12} className="h-3 w-3" />
          </motion.span>
        ) : null}
      </motion.span>
    </motion.a>
  );
}
