"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type PricingPlanShellProps = {
  featured?: boolean;
  badge?: string;
  children: ReactNode;
};

export function PricingPlanShell({
  featured = false,
  badge,
  children,
}: PricingPlanShellProps) {
  const prefersReducedMotion = useReducedMotion();

  if (!featured) {
    return (
      <div className="relative rounded-[24px] bg-[linear-gradient(180deg,rgba(113,128,150,0)_0%,rgba(113,128,150,0.2)_100%)]">
        <div className="rounded-[24px] px-4 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5 shadow-[-1px_-1px_0px_1px_rgba(255,255,255,1)]">
          {children}
        </div>
      </div>
    );
  }

  return (
    <motion.article
      className="relative my-2 rounded-[24px] bg-[rgba(180,220,255,0.78)] pt-0 sm:-mt-6 sm:my-0"
      animate={
        prefersReducedMotion
          ? undefined
          : {
              y: [0, -6, 0],
              boxShadow: [
                "0px 0px 0px rgba(34,112,253,0)",
                "0px 18px 40px rgba(34,112,253,0.18)",
                "0px 0px 0px rgba(34,112,253,0)",
              ],
            }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
    >
      {badge ? (
        <motion.div
          className="relative z-[1] flex h-7 items-center justify-center rounded-t-[24px] bg-[#91cffd]"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  opacity: [0.92, 1, 0.92],
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        >
          <motion.p
            className="text-[10px] font-bold uppercase leading-[14px] text-[#0f0017]"
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    scale: [1, 1.04, 1],
                  }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          >
            {badge}
          </motion.p>
        </motion.div>
      ) : null}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[24px] border border-[#2270fd]/45"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                opacity: [0.5, 0.85, 0.5],
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />

      <div className="relative overflow-hidden rounded-b-[24px] px-4 pb-5 pt-5 sm:px-5 sm:pb-5 sm:pt-5">
        {!prefersReducedMotion ? (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-[-30%] w-[40%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)]"
            animate={{ x: ["0%", "320%"] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.7,
            }}
          />
        ) : null}

        <div className="relative z-[1]">{children}</div>
      </div>
    </motion.article>
  );
}
