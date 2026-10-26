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
      document.querySelectorAll<HTMLElement>("[data-aos]:not(main)"),
    );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

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
        rootMargin: "0px 0px -32px 0px",
        // Tall sections on mobile may never expose 8% of their total area.
        threshold: 0,
      },
    );

    elements.forEach((element) => {
      const delay = Number(element.dataset.aosDelay ?? 0);

      if (Number.isFinite(delay) && delay > 0) {
        element.style.transitionDelay = `${Math.min(delay, 240)}ms`;
      }

      observer.observe(element);
      // Only hide registered elements; streamed content stays visible by default.
      element.classList.add("aos-init");
    });

    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove("aos-init", "aos-animate");
        element.style.removeProperty("transition-delay");
      });
    };
  }, [pathname]);

  return children;
}
