import type { Metadata } from "next";
import { LegalInfoPage } from "../components/LegalInfoPage";
import { getPageMetadata, normalizeLocale } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return getPageMetadata(locale, "pqrs");
}

export default async function PqrsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <LegalInfoPage locale={normalizeLocale(locale)} page="pqrs" />;
}
