import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { ProductsShowcase } from "./components/ProductsShowcase";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return getPageMetadata(locale, "products");
}

export default function ProductosServiciosPage() {
  return (
    <main data-aos="fade-in" data-aos-offset="0">
      <ProductsShowcase />
    </main>
  );
}
