import type { Metadata } from "next";
import { LegalInfoPage } from "../components/LegalInfoPage";
import { getPageMetadata, normalizeLocale } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return getPageMetadata(locale, "terms");
}

export default async function TermsEnPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <LegalInfoPage locale={normalizeLocale(locale)} page="terms" />;
}
