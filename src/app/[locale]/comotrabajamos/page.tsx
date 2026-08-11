import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { WorkShowcase } from "./components/WorkShowcase";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return getPageMetadata(locale, "work");
}

export default function ComoTrabajamosPage() {
  return (
    <main data-aos="fade-in" data-aos-offset="0">
      <WorkShowcase />
    </main>
  );
}
