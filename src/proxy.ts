import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { localizedPath } from "./i18n/localizedPaths";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
  const unprefixedPath = pathname.replace(/^\/(?:es|en)(?=\/|$)/, "");
  const canonicalPath = localizedPath(locale, unprefixedPath);

  if (pathname !== canonicalPath) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = canonicalPath;

    return NextResponse.redirect(redirectUrl, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
