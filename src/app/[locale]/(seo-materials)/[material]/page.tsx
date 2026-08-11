import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ActionLink } from "@/components/global/ActionLink";
import {
  absoluteUrl,
  getMaterialMetadata,
  getMaterialRouteBySlug,
  materialRoutes,
  normalizeLocale,
  siteBaseUrl,
  type Locale,
} from "@/lib/seo";

type MaterialPageCopy = {
  accepted: string[];
  acceptedIntro: string;
  acceptedTitle: string;
  ctaBody: string;
  ctaTitle: string;
  detailBody: string;
  detailEyebrow: string;
  detailPoints: Array<{ body: string; title: string }>;
  detailTitle: string;
  evidence: string[];
  evidenceTitle: string;
  faqs: Array<{ answer: string; question: string }>;
  heroBody: string;
  heroEyebrow: string;
  heroImage: string;
  heroImageAlt: string;
  heroImageLabel: string;
  heroTitle: string;
  proofBody: string;
  proofEyebrow: string;
  proofTitle: string;
};

const materialPages: Record<string, Record<Locale, MaterialPageCopy>> = {
  tungsten: {
    en: {
      accepted: [
        "Tungsten, wolfram, or wolframio pieces, rods, plates, and dense metal parts",
        "Tungsten-bearing or wolfram-bearing turnings, solids, and industrial leftovers",
        "Tungsten tools, wear components, and production scrap",
        "Mixed lots where tungsten may be present and needs technical review",
      ],
      acceptedIntro:
        "The first step is not a generic scrap price. We review the presentation, origin, weight, and alloy signals before quoting.",
      acceptedTitle: "Tungsten, wolfram, and wolframio materials Greenway buys",
      ctaBody:
        "Send photos, approximate weight, city, and any available material history. Greenway reviews the lot as a final buyer.",
      ctaTitle: "Send tungsten or wolfram for Greenway to quote",
      detailBody:
        "Tungsten, also searched as wolfram or wolframio, is valuable because density, temperature resistance, and industrial use make it different from ordinary scrap. A clean technical read can protect the value of the lot.",
      detailEyebrow: "Material focus",
      detailPoints: [
        {
          body: "We review whether the lot is solid tungsten, wolfram, tungsten-bearing material, mixed alloy, or process residue.",
          title: "Identification",
        },
        {
          body: "Weight, cleanliness, separation, and industrial origin influence the quote and recovery path.",
          title: "Valuation",
        },
        {
          body: "Greenway coordinates purchase, payment, pickup, consolidation, and documentation when the lot is viable.",
          title: "Final purchase",
        },
      ],
      detailTitle: "Tungsten and wolfram need a technical buyer, not a generic outlet.",
      evidence: [
        "Photos of the full lot and close-up detail",
        "Approximate weight or volume",
        "City, country, and pickup conditions",
        "Known origin: machining, mining, maintenance, or production",
      ],
      evidenceTitle: "Information that speeds up a tungsten or wolfram quote",
      faqs: [
        {
          answer:
            "Yes. Greenway reviews tungsten, wolfram, and wolframio-related industrial lots as a final buyer when the material fits its recovery route.",
          question: "Does Greenway buy tungsten or wolfram directly?",
        },
        {
          answer:
            "Photos, approximate weight, city, material origin, condition, and any alloy or process history help Greenway quote faster.",
          question: "What information is needed to quote tungsten?",
        },
        {
          answer:
            "Greenway reviews mixed lots, but clear separation, weight, and photos improve the technical read and purchase decision.",
          question: "Can mixed tungsten-bearing lots be evaluated?",
        },
      ],
      heroBody:
        "Greenway buys tungsten, wolfram, and wolframio-related industrial material from generators, workshops, yards, and companies that need a direct final buyer for recoverable metal.",
      heroEyebrow: "Final buyer for tungsten and wolfram",
      heroImage: "/countries/estados-unidos/houston/houston-metal-turnings-tag-01.webp",
      heroImageAlt:
        "Tagged industrial metal turnings prepared for tungsten recovery evaluation",
      heroImageLabel: "Tungsten / wolfram evaluation",
      heroTitle: "Tungsten, wolfram, and wolframio buying.",
      proofBody:
        "We do not position the material for another buyer. Greenway evaluates, quotes, buys, pays, and coordinates the operating route.",
      proofEyebrow: "No intermediary framing",
      proofTitle: "Greenway is the purchasing counterparty.",
    },
    es: {
      accepted: [
        "Piezas, barras, placas y partes densas de tungsteno o wolframio",
        "Turnings, sólidos y sobrantes industriales con contenido de tungsteno o wolframio",
        "Herramientas, componentes de desgaste y scrap de producción",
        "Lotes mezclados donde puede existir tungsteno y se requiere revisión técnica",
      ],
      acceptedIntro:
        "El primer paso no es un precio genérico de chatarra. Revisamos presentación, origen, peso y señales de aleación antes de cotizar.",
      acceptedTitle: "Materiales de tungsteno o wolframio que Greenway compra",
      ctaBody:
        "Envíanos fotos, peso aproximado, ciudad e historial disponible del material. Greenway revisa el lote como comprador final.",
      ctaTitle: "Envía tungsteno o wolframio para que Greenway cotice",
      detailBody:
        "El tungsteno, también conocido como wolframio, tiene valor por su densidad, resistencia a temperatura y uso industrial. Una lectura técnica protege el valor real del lote.",
      detailEyebrow: "Enfoque de material",
      detailPoints: [
        {
          body: "Revisamos si el lote es tungsteno sólido, wolframio, material con tungsteno, aleación mezclada o residuo de proceso.",
          title: "Identificación",
        },
        {
          body: "Peso, limpieza, separación y origen industrial influyen en la cotización y ruta de recuperación.",
          title: "Valorización",
        },
        {
          body: "Greenway coordina compra, pago, recolección, consolidación y documentación cuando el lote es viable.",
          title: "Compra final",
        },
      ],
      detailTitle: "El tungsteno o wolframio necesita comprador técnico, no salida genérica.",
      evidence: [
        "Fotos del lote completo y detalle cercano",
        "Peso o volumen aproximado",
        "Ciudad, país y condiciones de retiro",
        "Origen conocido: mecanizado, minería, mantenimiento o producción",
      ],
      evidenceTitle: "Información que acelera una cotización de tungsteno o wolframio",
      faqs: [
        {
          answer:
            "Sí. Greenway revisa lotes industriales de tungsteno, wolframio o materiales relacionados como comprador final cuando el lote encaja con su ruta de recuperación.",
          question: "¿Greenway compra tungsteno o wolframio directamente?",
        },
        {
          answer:
            "Fotos, peso aproximado, ciudad, origen del material, condición e historial de aleación o proceso ayudan a cotizar más rápido.",
          question: "¿Qué información necesito para cotizar tungsteno?",
        },
        {
          answer:
            "Sí. Greenway puede evaluar lotes mezclados con contenido de tungsteno, pero la separación, el peso y fotos claras mejoran la lectura técnica.",
          question: "¿Pueden evaluar lotes mezclados con tungsteno?",
        },
      ],
      heroBody:
        "Greenway compra tungsteno o wolframio a generadores industriales, talleres, patios y empresas que necesitan un comprador final directo para metal recuperable.",
      heroEyebrow: "Comprador final de tungsteno y wolframio",
      heroImage: "/countries/estados-unidos/houston/houston-metal-turnings-tag-01.webp",
      heroImageAlt:
        "Turnings metálicos industriales etiquetados para evaluación de recuperación de tungsteno",
      heroImageLabel: "Evaluación de tungsteno / wolframio",
      heroTitle: "Compra, evaluación y recuperación de tungsteno o wolframio.",
      proofBody:
        "No posicionamos el material para otro comprador. Greenway evalúa, cotiza, compra, paga y coordina la ruta operativa.",
      proofEyebrow: "Sin enfoque de intermediario",
      proofTitle: "Greenway es la contraparte compradora.",
    },
  },
  "tungsten-carbide": {
    en: {
      accepted: [
        "Tungsten carbide inserts, tips, drill bits, dies, and wear parts",
        "Carbide sludge, grinding residue, full grind clippings, and process material",
        "Mixed barrels, drums, or bins with carbide-bearing components",
        "Industrial lots that need separation before final valuation",
      ],
      acceptedIntro:
        "Tungsten carbide, also searched as wolfram carbide in some industrial contexts, often appears in mixed, dirty, or process-heavy lots. Greenway reviews the lot as a final buyer and quotes based on recoverable value.",
      acceptedTitle: "Tungsten carbide and wolfram carbide materials Greenway buys",
      ctaBody:
        "Send photos of the material, the container, estimated weight, and city. We will review the carbide lot for direct purchase.",
      ctaTitle: "Send tungsten carbide or wolfram carbide for Greenway to quote",
      detailBody:
        "Carbide value changes with form, cleanliness, oil, moisture, mixing, and expected recovery. We look at those details before giving direction.",
      detailEyebrow: "High-value recovery",
      detailPoints: [
        {
          body: "We look for tungsten carbide inserts, drill bits, wear pieces, grinding material, sludge, and mixed industrial lots.",
          title: "Material reading",
        },
        {
          body: "Clean carbide is different from sludge, oily residue, or mixed barrels. Presentation affects the quote.",
          title: "Condition",
        },
        {
          body: "Greenway can buy the material directly and coordinate pickup, warehouse, payment, and recovery route.",
          title: "Direct purchase",
        },
      ],
      detailTitle: "Tungsten carbide and wolfram carbide should be priced by recoverable value.",
      evidence: [
        "Photos of inserts, bits, parts, sludge, or barrels",
        "Estimated net weight and container type",
        "Moisture, oil, or mixed-material condition",
        "City and pickup access",
      ],
      evidenceTitle: "Information that speeds up a tungsten carbide or wolfram carbide quote",
      faqs: [
        {
          answer:
            "Yes. Greenway buys tungsten carbide and wolfram carbide scrap such as inserts, drill bits, wear parts, sludge, grinding residue, and mixed industrial lots.",
          question: "Does Greenway buy tungsten carbide scrap?",
        },
        {
          answer:
            "Carbide value depends on form, cleanliness, oil, moisture, mixed material, weight, and expected recoverable content.",
          question: "What affects the value of tungsten carbide?",
        },
        {
          answer:
            "Send photos of the material and container, estimated net weight, city, pickup access, and any details about oil, moisture, or mixing.",
          question: "How do I quote a carbide lot?",
        },
      ],
      heroBody:
        "Greenway buys tungsten carbide scrap, wolfram carbide references, and industrial carbide-bearing materials as a final purchasing counterparty.",
      heroEyebrow: "Final buyer for tungsten carbide and wolfram carbide",
      heroImage:
        "/countries/estados-unidos/madisonville/madisonville-tungco-yard-drums-01.webp",
      heroImageAlt:
        "Drums of industrial tungsten carbide scrap and recovered material in Madisonville",
      heroImageLabel: "Tungsten carbide scrap",
      heroTitle: "Tungsten carbide and wolfram carbide buying.",
      proofBody:
        "The goal is simple: identify the carbide, protect recoverable value, quote clearly, and buy the lot when it fits our recovery route.",
      proofEyebrow: "Direct buying focus",
      proofTitle: "Carbide lots need a buyer that understands recovery.",
    },
    es: {
      accepted: [
        "Insertos, puntas, brocas, matrices y piezas de desgaste de carburo de tungsteno",
        "Lodos de carburo, residuos de rectificado, full grind clippings y material de proceso",
        "Tambores, canecas o bins mezclados con componentes que contienen carburo",
        "Lotes industriales que necesitan separación antes de valoración final",
      ],
      acceptedIntro:
        "El carburo de tungsteno, también relacionado con búsquedas de carburo de wolframio, suele llegar mezclado, sucio o con alto contenido de proceso. Greenway revisa el lote como comprador final y cotiza según valor recuperable.",
      acceptedTitle: "Materiales de carburo de tungsteno o carburo de wolframio que Greenway compra",
      ctaBody:
        "Envíanos fotos del material, contenedor, peso estimado y ciudad. Revisamos el lote de carburo para compra directa.",
      ctaTitle:
        "Envía carburo de tungsteno o carburo de wolframio para que Greenway cotice",
      detailBody:
        "El valor del carburo de tungsteno o carburo de wolframio cambia según forma, limpieza, aceite, humedad, mezcla y recuperación esperada. Revisamos esos detalles antes de orientar la cotización.",
      detailEyebrow: "Recuperación de alto valor",
      detailPoints: [
        {
          body: "Buscamos insertos, brocas, piezas de desgaste, material de rectificado, lodos y lotes industriales mezclados.",
          title: "Lectura de material",
        },
        {
          body: "No es lo mismo carburo limpio que lodo, residuo aceitoso o tambores mezclados. La presentación afecta la cotización.",
          title: "Condición",
        },
        {
          body: "Greenway puede comprar directamente el material y coordinar retiro, bodega, pago y ruta de recuperación.",
          title: "Compra directa",
        },
      ],
      detailTitle:
        "El carburo de tungsteno o carburo de wolframio debe cotizarse por valor recuperable.",
      evidence: [
        "Fotos de insertos, brocas, piezas, lodo o tambores",
        "Peso neto estimado y tipo de contenedor",
        "Condición de humedad, aceite o mezcla",
        "Ciudad y acceso para recolección",
      ],
      evidenceTitle:
        "Información que acelera una cotización de carburo de tungsteno o carburo de wolframio",
      faqs: [
        {
          answer:
            "Sí. Greenway compra chatarra de carburo de tungsteno o carburo de wolframio como insertos, brocas, piezas de desgaste, lodos, residuos de rectificado y lotes industriales mezclados.",
          question: "¿Greenway compra chatarra de carburo de tungsteno?",
        },
        {
          answer:
            "El valor depende de forma, limpieza, aceite, humedad, mezcla, peso y contenido recuperable esperado.",
          question: "¿Qué afecta el valor del carburo de tungsteno?",
        },
        {
          answer:
            "Envía fotos del material y contenedor, peso neto estimado, ciudad, acceso para retiro y detalles sobre aceite, humedad o mezcla.",
          question: "¿Cómo cotizo un lote de carburo?",
        },
      ],
      heroBody:
        "Greenway compra chatarra de carburo de tungsteno, carburo de wolframio y materiales industriales con contenido de carburo como contraparte compradora final.",
      heroEyebrow: "Comprador final de carburo de tungsteno y carburo de wolframio",
      heroImage:
        "/countries/estados-unidos/madisonville/madisonville-tungco-yard-drums-01.webp",
      heroImageAlt:
        "Tambores con chatarra industrial de carburo de tungsteno y material recuperado en Madisonville",
      heroImageLabel: "Chatarra de carburo de tungsteno / wolframio",
      heroTitle:
        "Compra de carburo de tungsteno o carburo de wolframio.",
      proofBody:
        "El objetivo es simple: identificar el carburo, proteger el valor recuperable, cotizar con claridad y comprar el lote cuando encaja con nuestra ruta de recuperación.",
      proofEyebrow: "Enfoque de compra directa",
      proofTitle:
        "Los lotes de carburo necesitan un comprador que entienda recuperación.",
    },
  },
};

function getMaterialPage(slug: string, locale: Locale) {
  const route = getMaterialRouteBySlug(slug);

  if (!route) {
    return undefined;
  }

  return materialPages[route.key][locale];
}

export function generateStaticParams() {
  return materialRoutes.flatMap((route) => [
    { material: route.esSlug },
    { material: route.enSlug },
  ]);
}

function getMaterialJsonLd({
  copy,
  locale,
  slug,
}: {
  copy: MaterialPageCopy;
  locale: Locale;
  slug: string;
}) {
  const route = getMaterialRouteBySlug(slug);
  const activeSlug = route
    ? locale === "en"
      ? route.enSlug
      : route.esSlug
    : slug;
  const pageUrl = absoluteUrl(
    locale === "en" ? `/en/${activeSlug}` : `/${activeSlug}`,
  );
  const productsUrl = absoluteUrl(
    locale === "en" ? "/en/productosservicios" : "/productosservicios",
  );
  const contactUrl = absoluteUrl(
    locale === "en" ? "/en/contacto" : "/contacto",
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": `${pageUrl}#service`,
        "@type": "Service",
        areaServed: ["United States", "Colombia", "Latin America"],
        category:
          locale === "en"
            ? "Industrial metal recovery and purchasing"
            : "Compra y recuperacion de metales industriales",
        description: copy.heroBody,
        name: copy.heroTitle,
        provider: {
          "@id": `${siteBaseUrl}/#organization`,
        },
        serviceType:
          locale === "en"
            ? "Tungsten and tungsten carbide buying"
            : "Compra de tungsteno y carburo de tungsteno",
        url: pageUrl,
      },
      {
        "@id": `${pageUrl}#breadcrumbs`,
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            item: siteBaseUrl,
            name: locale === "en" ? "Home" : "Inicio",
            position: 1,
          },
          {
            "@type": "ListItem",
            item: productsUrl,
            name:
              locale === "en"
                ? "Materials and Services"
                : "Materiales y Servicios",
            position: 2,
          },
          {
            "@type": "ListItem",
            item: pageUrl,
            name: copy.heroTitle,
            position: 3,
          },
        ],
      },
      {
        "@id": `${pageUrl}#faq`,
        "@type": "FAQPage",
        mainEntity: copy.faqs.map((faq) => ({
          "@type": "Question",
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
          name: faq.question,
        })),
      },
      {
        "@id": `${pageUrl}#quote-action`,
        "@type": "ContactPoint",
        areaServed: ["US", "CO", "LATAM"],
        contactType:
          locale === "en"
            ? "Industrial metal quote"
            : "Cotizacion de metales industriales",
        url: contactUrl,
      },
    ],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; material: string }>;
}): Promise<Metadata> {
  const { locale, material } = await params;

  return getMaterialMetadata(locale, material);
}

export default async function MaterialSeoPage({
  params,
}: {
  params: Promise<{ locale: string; material: string }>;
}) {
  const { locale: localeInput, material } = await params;
  const locale = normalizeLocale(localeInput);
  const copy = getMaterialPage(material, locale);

  if (!copy) {
    notFound();
  }

  const jsonLd = JSON.stringify(
    getMaterialJsonLd({ copy, locale, slug: material }),
  ).replace(/</g, "\\u003c");

  return (
    <main data-aos="fade-in" data-aos-offset="0">
      <script
        dangerouslySetInnerHTML={{ __html: jsonLd }}
        type="application/ld+json"
      />
      <section className="relative isolate overflow-hidden border-b border-[#d7dde3] bg-[var(--gw-ink)] text-white">
        <div className="absolute inset-0">
          <Image
            alt={copy.heroImageAlt}
            className="object-cover opacity-[0.42]"
            fill
            priority
            sizes="100vw"
            src={copy.heroImage}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.94),rgba(15,23,42,0.68)_48%,rgba(15,23,42,0.25))]" />
        </div>
        <div className="relative mx-auto flex min-h-[calc(100svh-var(--gw-nav-h))] max-w-7xl items-center px-6 py-16">
          <div className="max-w-3xl" data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
              {copy.heroEyebrow}
            </p>
            <h1 className="mt-6 text-5xl font-bold leading-[0.98] sm:text-6xl lg:text-7xl">
              {copy.heroTitle}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">
              {copy.heroBody}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ActionLink href="/contacto" variant="solid">
                {locale === "en" ? "Quote material" : "Cotizar material"}
              </ActionLink>
              <ActionLink href="/productosservicios" variant="secondary">
                {locale === "en" ? "View materials" : "Ver materiales"}
              </ActionLink>
            </div>
          </div>
          <p className="absolute bottom-8 right-6 hidden max-w-[260px] text-right text-xs font-bold uppercase tracking-[0.2em] text-white/72 lg:block">
            {copy.heroImageLabel}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="border-l-4 border-[var(--gw-green)] pl-6 sm:pl-8" data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-blue)]">
              {copy.detailEyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
              {copy.detailTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
              {copy.detailBody}
            </p>
          </div>

          <div className="divide-y divide-[#d7dde3] border-y border-[#d7dde3]" data-aos="fade-left">
            {copy.detailPoints.map((point, index) => (
              <article
                className="grid gap-4 py-7 sm:grid-cols-[92px_1fr]"
                data-aos="fade-up"
                data-aos-delay={String(90 + index * 70)}
                key={point.title}
              >
                <span className="text-sm font-bold text-[var(--gw-blue)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--gw-ink)]">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                    {point.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7dde3] bg-[var(--gw-sand)] px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
              {copy.acceptedTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              {copy.acceptedIntro}
            </p>
          </div>
          <ul className="grid gap-0 border-y border-[#d7dde3] bg-white" data-aos="fade-left">
            {copy.accepted.map((item, index) => (
              <li
                className="grid gap-4 border-b border-[#d7dde3] px-6 py-5 last:border-b-0 sm:grid-cols-[58px_1fr]"
                data-aos="fade-up"
                data-aos-delay={String(80 + index * 55)}
                key={item}
              >
                <span className="text-sm font-bold text-[var(--gw-green)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-semibold leading-7 text-[var(--gw-ink)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative min-h-[440px] overflow-hidden rounded-[4px] border border-[#d7dde3] bg-[#edf4f2]" data-aos="fade-right">
            <Image
              alt={copy.heroImageAlt}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              src={copy.heroImage}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.58),rgba(15,23,42,0.04)_62%,rgba(15,23,42,0))]" />
            <p className="absolute bottom-6 left-6 right-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
              {copy.heroImageLabel}
            </p>
          </div>

          <div className="border-l-4 border-[var(--gw-blue)] pl-6 sm:pl-8" data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
              {copy.proofEyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
              {copy.proofTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
              {copy.proofBody}
            </p>
            <div className="mt-9 border-y border-[#d7dde3]">
              <h3 className="py-5 text-2xl font-bold text-[var(--gw-ink)]">
                {copy.evidenceTitle}
              </h3>
              <ul className="divide-y divide-[#d7dde3]">
                {copy.evidence.map((item) => (
                  <li className="flex gap-3 py-4 text-base leading-7 text-[var(--color-muted)]" key={item}>
                    <span className="mt-3 h-2 w-2 shrink-0 bg-[var(--gw-green)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--gw-green)] bg-[var(--gw-ink)] px-6 py-18 text-white sm:py-20">
        <div className="mx-auto mb-16 grid max-w-7xl gap-8 border-b border-white/14 pb-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
              FAQ
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
              {locale === "en"
                ? "Common questions before quoting."
                : "Preguntas antes de cotizar."}
            </h2>
          </div>
          <div className="divide-y divide-white/14" data-aos="fade-left">
            {copy.faqs.map((faq) => (
              <article className="py-6" key={faq.question}>
                <h3 className="text-xl font-bold leading-7 text-white">
                  {faq.question}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/72">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
              Greenway International
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              {copy.ctaTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              {copy.ctaBody}
            </p>
          </div>
          <div data-aos="fade-left" data-aos-delay="120">
            <ActionLink href="/contacto" variant="solid">
              {locale === "en" ? "Send material" : "Enviar material"}
            </ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
