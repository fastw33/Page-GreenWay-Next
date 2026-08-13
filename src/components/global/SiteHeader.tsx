import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";

export async function SiteHeader() {
  const t = await getTranslations("Navigation");

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-white/95 shadow-[0_8px_28px_rgba(15,23,42,0.06)] backdrop-blur-md">
      <nav
        aria-label="Navegacion principal"
        className="relative mx-auto flex min-h-[78px] max-w-7xl items-center justify-between gap-2 px-3 sm:min-h-[96px] sm:gap-3 sm:px-6 lg:min-h-[var(--gw-nav-h)] lg:gap-8"
      >
        <Link
          aria-label={t("brand")}
          className="flex shrink-0 items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[var(--gw-green)] focus-visible:ring-offset-4"
          href="/"
        >
          <span className="relative h-[58px] w-[176px] shrink-0 sm:h-[68px] sm:w-[214px] lg:h-[78px] lg:w-[246px]">
            <Image
              alt={t("brand")}
              className="h-full w-full object-contain"
              height={1440}
              priority
              sizes="(max-width: 639px) 176px, (max-width: 1023px) 214px, 246px"
              src="/brand/greenway-logo-full-transparent.png"
              width={1600}
            />
          </span>
        </Link>
        <div className="hidden items-center justify-end gap-4 text-sm font-semibold text-[var(--color-muted)] lg:flex">
          <NavLinks />
          <LanguageSwitcher />
        </div>
        <div className="flex min-w-0 items-center justify-end gap-2 lg:hidden">
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
