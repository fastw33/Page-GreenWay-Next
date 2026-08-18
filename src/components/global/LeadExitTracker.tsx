"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "@/i18n/navigation";
import { trackLeadEvent } from "@/services/leadEvents.service";

type LeadExitTrackerProps = {
  locale: string;
};

export function LeadExitTracker({ locale }: LeadExitTrackerProps) {
  const pathname = usePathname();
  const sentExitRef = useRef("");

  useEffect(() => {
    const exitKey = `${pathname}|${window.location.search}`;
    sentExitRef.current = "";

    function sendExit() {
      if (sentExitRef.current === exitKey) {
        return;
      }

      sentExitRef.current = exitKey;
      void trackLeadEvent(
        "page_exit",
        {
          locale,
          metadata: {
            pathname,
          },
        },
        { keepalive: true },
      );
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "hidden") {
        sendExit();
      }
    }

    window.addEventListener("pagehide", sendExit);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("pagehide", sendExit);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [locale, pathname]);

  return null;
}
