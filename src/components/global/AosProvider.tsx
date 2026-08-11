"use client";

import { useEffect, type ReactNode } from "react";
import AOS from "aos";
import { usePathname } from "@/i18n/navigation";

type AosProviderProps = {
  children: ReactNode;
};

export function AosProvider({ children }: AosProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      anchorPlacement: "top-bottom",
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);

  return children;
}
