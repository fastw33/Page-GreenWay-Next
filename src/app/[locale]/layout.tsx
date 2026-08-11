import type { ReactNode } from "react";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/global/SiteFooter";
import { SiteHeader } from "@/components/global/SiteHeader";
import { AosProvider } from "@/components/global/AosProvider";
import { AssetProtection } from "@/components/global/AssetProtection";
import { FloatingWhatsApp } from "@/components/global/FloatingWhatsApp";
import { routing } from "@/i18n/routing";
import { getOrganizationJsonLd, getRootMetadata } from "@/lib/seo";
import "aos/dist/aos.css";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: ["400", "500", "600", "700", "800"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  return getRootMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const jsonLd = JSON.stringify(getOrganizationJsonLd(locale)).replace(
    /</g,
    "\\u003c",
  );

  return (
    <html className={montserrat.variable} lang={locale}>
      <head>
        <link href="/llms.txt" rel="describedby" type="text/plain" />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: jsonLd }}
          type="application/ld+json"
        />
        <NextIntlClientProvider>
          <AosProvider>
            <AssetProtection />
            <SiteHeader />
            {children}
            <SiteFooter />
            <FloatingWhatsApp locale={locale} />
          </AosProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
