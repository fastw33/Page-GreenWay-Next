import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  alternateLinks: false,
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "as-needed",
});

export type AppLocale = (typeof routing.locales)[number];
