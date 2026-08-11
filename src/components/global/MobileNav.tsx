"use client";

import { useState } from "react";
import { useMessages } from "next-intl";
import { navigationItems } from "@/config/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { BrandIcon } from "./BrandIcons";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const messages = useMessages();
  const pathname = usePathname();
  const navigationMessages =
    messages.Navigation && typeof messages.Navigation === "object"
      ? (messages.Navigation as Record<string, string>)
      : {};
  const openMenuLabel = navigationMessages.openMenu ?? "Abrir menu";
  const closeMenuLabel = navigationMessages.closeMenu ?? "Cerrar menu";
  const mobileLabel = navigationMessages.mobileLabel ?? "Navegacion movil";

  return (
    <div className="lg:hidden">
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? closeMenuLabel : openMenuLabel}
        className="grid h-11 w-11 place-items-center rounded-[4px] border border-[#d7dde3] bg-white text-[var(--gw-ink)] outline-none transition-colors duration-200 hover:border-[var(--gw-green)] hover:text-[var(--gw-green)] focus-visible:ring-2 focus-visible:ring-[var(--gw-green)] focus-visible:ring-offset-4"
        onClick={() => setIsOpen((value) => !value)}
        type="button"
      >
        <BrandIcon className="h-5 w-5" name={isOpen ? "x" : "menu"} />
      </button>

      {isOpen ? (
        <div className="absolute inset-x-0 top-full max-h-[calc(100svh-84px)] overflow-y-auto border-b border-[#d7dde3] bg-white px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
          <nav aria-label={mobileLabel} className="grid gap-2">
            {navigationItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);
              const label = navigationMessages[item.labelKey] ?? item.fallbackLabel;

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-12 items-center justify-between rounded-[4px] border px-4 py-3 text-base font-bold transition-colors duration-200 ${
                    isActive
                      ? "border-[var(--gw-green)] bg-[rgba(34,181,115,0.1)] text-[var(--gw-ink)]"
                      : "border-[#d7dde3] text-[var(--color-muted)] hover:border-[var(--gw-green)] hover:text-[var(--gw-green)]"
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                  <BrandIcon className="h-4 w-4" name="arrowRight" />
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
