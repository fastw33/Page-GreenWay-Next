"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "@/i18n/navigation";

type AosProviderProps = {
  children: ReactNode;
};

export function AosProvider({ children }: AosProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-aos]"),
    );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.body.classList.add("aos-ready");

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("aos-animate"));
      return;
    }

    elements.forEach((element) => {
      const delay = Number(element.dataset.aosDelay ?? 0);

      if (Number.isFinite(delay) && delay > 0) {
        element.style.transitionDelay = `${Math.min(delay, 240)}ms`;
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("aos-animate");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return children;
}
