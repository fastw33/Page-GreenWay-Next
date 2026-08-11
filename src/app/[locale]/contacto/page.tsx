import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { ContactShowcase } from "./components/ContactShowcase";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return getPageMetadata(locale, "contact");
}

export default function ContactPage() {
  return (
    <main data-aos="fade-in" data-aos-offset="0">
      <ContactShowcase />
    </main>
  );
}
