"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

const languages: Array<{
  locale: AppLocale;
  code: string;
  nameKey: "spanish" | "english";
  mark: "latam" | "us";
}> = [
  {
    locale: "es",
    code: "LATAM",
    nameKey: "spanish",
    mark: "latam",
  },
  {
    locale: "en",
    code: "US",
    nameKey: "english",
    mark: "us",
  },
];

function LocaleMark({ mark }: { mark: "latam" | "us" }) {
  if (mark === "us") {
    return (
      <svg
        aria-hidden="true"
        className="h-3.5 w-5 overflow-hidden rounded-[2px] border border-black/10"
        viewBox="0 0 52 36"
      >
        <rect fill="#ffffff" height="36" width="52" />
        {Array.from({ length: 7 }).map((_, index) => (
          <rect
            fill="#b22234"
            height="2.77"
            key={index}
            width="52"
            y={index * 5.54}
          />
        ))}
        <rect fill="#3c3b6e" height="19.4" width="22" />
        {Array.from({ length: 12 }).map((_, index) => (
          <circle
            cx={3 + (index % 4) * 4.7}
            cy={3 + Math.floor(index / 4) * 5}
            fill="#ffffff"
            key={index}
            r="0.9"
          />
        ))}
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 text-[var(--gw-ink)]"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.6 9h16.8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M3.6 15h16.8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path
        d="M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function LanguageSwitcher() {
  const activeLocale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("LanguageSwitcher");

  return (
    <div aria-label={t("label")} className="flex items-center gap-2">
      {languages.map((language) => {
        const isActive = activeLocale === language.locale;

        return (
          <Link
            aria-current={isActive ? "true" : undefined}
            className={`inline-flex items-center gap-1.5 rounded-[4px] border px-2 py-2 text-[11px] font-semibold transition-colors sm:gap-2 sm:px-3 sm:text-xs ${
              isActive
                ? "border-[var(--gw-green)] text-[var(--gw-ink)]"
                : "border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--gw-green)]"
            }`}
            href={pathname}
            key={language.locale}
            locale={language.locale}
            title={t(language.nameKey)}
          >
            <LocaleMark mark={language.mark} />
            {language.code}
          </Link>
        );
      })}
    </div>
  );
}
