import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { AboutShowcase } from "./components/AboutShowcase";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return getPageMetadata(locale, "about");
}

export default function AboutPage() {
  return (
    <main data-aos="fade-in" data-aos-offset="0">
      <AboutShowcase />
    </main>
  );
}
