"use client";

import type {
  AnchorHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";
import { googleAdsCallConversionSendTo } from "@/config/googleAds";

type PhoneConversionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
};

type GtagConversionPayload = {
  currency?: string;
  event_callback?: () => void;
  event_timeout?: number;
  send_to: string;
  value?: number;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: "conversion",
      payload: GtagConversionPayload,
    ) => void;
  }
}

export function PhoneConversionLink({
  children,
  href,
  onClick,
  target,
  ...props
}: PhoneConversionLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      target === "_blank" ||
      !href.startsWith("tel:") ||
      !googleAdsCallConversionSendTo ||
      typeof window.gtag !== "function"
    ) {
      return;
    }

    event.preventDefault();

    let didNavigate = false;
    const openPhoneLink = () => {
      if (didNavigate) {
        return;
      }

      didNavigate = true;
      window.location.href = href;
    };

    window.gtag("event", "conversion", {
      currency: "USD",
      event_callback: openPhoneLink,
      event_timeout: 1200,
      send_to: googleAdsCallConversionSendTo,
      value: 1,
    });

    window.setTimeout(openPhoneLink, 1200);
  }

  return (
    <a href={href} onClick={handleClick} target={target} {...props}>
      {children}
    </a>
  );
}
