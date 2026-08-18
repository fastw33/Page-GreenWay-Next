import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getLocalizedRoutePath } from "./config/localizedMaterialSlugs";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

function getCanonicalPathname(pathname: string) {
  const lowerPathname = pathname.toLowerCase();
  const segments = lowerPathname.split("/").filter(Boolean);
  const explicitLocale =
    segments[0] === "en" || segments[0] === "es"
    ? segments[0]
    : undefined;
  const locale = explicitLocale === "en" ? "en" : "es";
  const pathSegments = explicitLocale ? segments.slice(1) : segments;
  const pathWithoutLocale = pathSegments.length
    ? `/${pathSegments.join("/")}`
    : "/";
  const localizedPath = getLocalizedRoutePath(pathWithoutLocale, locale);
  const canonicalPath =
    locale === "en"
      ? localizedPath === "/"
        ? "/en"
        : `/en${localizedPath}`
      : localizedPath;

  return canonicalPath === pathname ? undefined : canonicalPath;
}

export default function proxy(request: NextRequest) {
  const redirectPath = getCanonicalPathname(request.nextUrl.pathname);

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
