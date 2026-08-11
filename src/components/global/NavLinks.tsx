"use client";

import { useMessages } from "next-intl";
import { navigationItems } from "@/config/navigation";
import { Link, usePathname } from "@/i18n/navigation";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks() {
  const messages = useMessages();
  const pathname = usePathname();
  const navigationMessages =
    messages.Navigation && typeof messages.Navigation === "object"
      ? (messages.Navigation as Record<string, string>)
      : {};

  return (
    <div className="hidden items-center gap-2 lg:flex" data-aos="fade-down" data-aos-delay="100">
      {navigationItems.map((item) => {
        const isActive = isActivePath(pathname, item.href);
        const label = navigationMessages[item.labelKey] ?? item.fallbackLabel;

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={`group relative cursor-pointer rounded-[4px] border px-4 py-2.5 transition-colors duration-200 ${
              isActive
                ? "border-[var(--gw-green)] bg-[rgba(34,181,115,0.1)] text-[var(--gw-ink)]"
                : "border-transparent text-[var(--color-muted)] hover:border-[var(--color-border)] hover:bg-[var(--gw-sand)] hover:text-[var(--gw-green)]"
            }`}
            href={item.href}
            key={item.href}
          >
            <span className="relative z-10">{label}</span>
            <span
              aria-hidden="true"
              className={`absolute inset-x-4 bottom-1 h-0.5 rounded-full bg-[var(--gw-grad-brand-90)] transition-transform duration-200 ${
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
}
