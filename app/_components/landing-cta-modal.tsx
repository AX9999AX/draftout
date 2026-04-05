"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const OPEN_EVENT_NAME = "open-landing-cta-modal";

export function openLandingCtaModal() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new CustomEvent(OPEN_EVENT_NAME));
}

export function LandingCtaModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);

    window.addEventListener(OPEN_EVENT_NAME, handleOpen);
    return () => window.removeEventListener(OPEN_EVENT_NAME, handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(15,0,23,0.42)] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-[520px] rounded-[28px] bg-white p-6 shadow-[0_28px_80px_rgba(15,0,23,0.18)] sm:p-8"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <p className="font-display text-[28px] font-bold leading-[32px] text-[#0f0017]">
              Registration flow placeholder
            </p>
            <p className="mt-4 text-[16px] leading-6 text-[#5f5f5f]">
              This landing button is using a temporary modal. In the production
              version, replace this action with the real registration flow or
              direct app entry point.
            </p>

            <div className="mt-6 rounded-[20px] bg-[rgba(27,175,65,0.08)] px-4 py-3 text-[14px] leading-5 text-[#189638]">
              Replace this modal with the final signup, onboarding, or in-app
              destination before release.
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-full border border-[#014fdc] px-5 font-display text-[14px] font-bold leading-5 text-[#014fdc]"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
