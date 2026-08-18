import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  getLocalizedMaterialPath,
  localizedMaterialSlugs,
} from "./config/localizedMaterialSlugs";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

function getLocalizedMaterialRedirect(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const explicitLocale = segments[0] === "en" || segments[0] === "es"
    ? segments[0]
    : undefined;
  const locale = explicitLocale === "en" ? "en" : "es";
  const slugIndex = explicitLocale ? 1 : 0;
  const slug = segments[slugIndex];

  if (!slug || segments.length !== slugIndex + 1) {
    return undefined;
  }

  const route = localizedMaterialSlugs.find(
    (item) => item.enSlug === slug || item.esSlug === slug,
  );

  if (!route) {
    return undefined;
  }

  if (locale === "en" && slug === route.esSlug) {
    return `/en${getLocalizedMaterialPath(pathname, "en")}`;
  }

  if (locale === "es" && slug === route.enSlug) {
    return getLocalizedMaterialPath(pathname, "es");
  }

  return undefined;
}

export default function proxy(request: NextRequest) {
  const redirectPath = getLocalizedMaterialRedirect(request.nextUrl.pathname);

  if (redirectPath) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = redirectPath;

    return NextResponse.redirect(redirectUrl, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
