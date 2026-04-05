"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ParallaxButton } from "./parallax-button";

type NavItem = {
  label: string;
  href: string;
};

type HeaderNavProps = {
  items: NavItem[];
  loginHref?: string;
  loginOpensModal?: boolean;
};

export function HeaderNav({
  items,
  loginHref = "#login",
  loginOpensModal = false,
}: HeaderNavProps) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = items
      .map((item) => item.href.replace("#", ""))
      .filter(Boolean);

    const updateActiveSection = () => {
      const offset = 140;
      let current = sectionIds[0] ?? "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (!element) {
          continue;
        }

        const top = element.getBoundingClientRect().top;

        if (top <= offset) {
          current = id;
        }
      }

      setActiveHref(current ? `#${current}` : items[0]?.href ?? "");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [items]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className="hidden items-center gap-[10px] font-display text-[16px] leading-5 font-bold text-[var(--text)] lg:flex"
        aria-label="Primary navigation"
      >
        {items.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <a
              key={item.label}
              href={item.href}
              className={`relative rounded-full px-4 py-2 transition-colors duration-200 ${
                isActive ? "text-[var(--brand)]" : "hover:text-[var(--brand)]"
              }`}
            >
              {isActive ? (
                <motion.span
                  layoutId="header-nav-pill"
                  className="absolute inset-0 rounded-full bg-[rgba(1,79,220,0.08)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
              <span className="relative z-[1]">{item.label}</span>
            </a>
          );
        })}
      </nav>

      <button
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((value) => !value)}
        className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(1,79,220,0.15)] bg-white/80 lg:hidden"
      >
        <motion.span
          className="absolute h-px w-5 bg-[#313131]"
          animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
        <motion.span
          className="absolute h-px w-5 bg-[#313131]"
          animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        />
        <motion.span
          className="absolute h-px w-5 bg-[#313131]"
          animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </button>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            className="fixed inset-x-0 top-[72px] z-[60] border-b border-[var(--line)] bg-[rgba(244,244,242,0.96)] px-4 pb-6 pt-4 backdrop-blur-xl sm:px-6 lg:hidden"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="mx-auto max-w-[1240px]">
              <div className="flex flex-col gap-2">
                {items.map((item) => {
                  const isActive = activeHref === item.href;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`rounded-[18px] px-4 py-3 font-display text-[16px] leading-5 font-bold ${
                        isActive
                          ? "bg-[rgba(1,79,220,0.08)] text-[var(--brand)]"
                          : "text-[var(--text)]"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <div className="mt-4">
                <ParallaxButton
                  href={loginHref}
                  opensModal={loginOpensModal}
                  className="w-full justify-center"
                >
                  Log In
                </ParallaxButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
