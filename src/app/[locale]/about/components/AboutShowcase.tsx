import { ActionLink } from "@/components/global/ActionLink";
import { BrandIcon, type BrandIconName } from "@/components/global/BrandIcons";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale, getMessages } from "next-intl/server";

type StatItem = {
  label: string;
  value: string;
};

type CountryItem = {
  excerpt: string;
  href: string;
  image?: string;
  imageAlt?: string;
  imageLabel: string;
  label: string;
  meta: string;
  slug: string;
  title: string;
};

type OperatingItem = {
  body: string;
  title: string;
};

type AboutCopy = {
  closingEyebrow: string;
  closingTitle: string;
  countriesTitle: string;
  countryItems: CountryItem[];
  cta: string;
  eyebrow: string;
  experienceEyebrow: string;
  experienceTitle: string;
  footerBufferBody: string;
  footerBufferEyebrow: string;
  footerBufferImageLabel: string;
  footerBufferTitle: string;
  heroImageLabel: string;
  introBody: string;
  introEyebrow: string;
  introImageLabel: string;
  introTitle: string;
  operatingBody: string;
  operatingEyebrow: string;
  operatingItems: OperatingItem[];
  operatingTitle: string;
  proofBody: string;
  proofImageLabel: string;
  proofTitle: string;
  stats: StatItem[];
  title: string;
};

type AboutMessages = {
  Pages?: {
    about?: Partial<AboutCopy>;
  };
};

const fallbackCopy: Record<"en" | "es", AboutCopy> = {
  en: {
    closingEyebrow: "Next Step",
    closingTitle: "Send Us Your Material and We Will Review The Best Recovery Route.",
    countriesTitle: "Country Stories",
    countryItems: [
      {
        excerpt: "Operations and final purchasing for specialty alloys, turnings, tungsten carbide, and industrial materials with international traceability.",
        href: "/about/united-states",
        image: "/countries/estados-unidos/houston/houston-warehouse-storage-03.webp",
        imageAlt: "Industrial warehouse and recovered metal materials in Houston, Texas",
        imageLabel: "United States",
        label: "United States",
        meta: "Country story",
        slug: "united-states",
        title: "United States",
      },
      {
        excerpt: "National coverage for evaluation and purchase of tungsten, tungsten carbide, and industrial metals.",
        href: "/about/colombia",
        image: "/countries/colombia/medellin/medellin-greentech-booth-07.webp",
        imageAlt: "GreenTech booth participation in Medellin, Colombia",
        imageLabel: "Colombia",
        label: "Colombia",
        meta: "Country story",
        slug: "colombia",
        title: "Colombia",
      },
      {
        excerpt: "Industrial material reading, steels, wear parts, and recovery opportunities in mining and production settings.",
        href: "/about/chile",
        image: "/countries/chile/santiago/chile-operacion-santiago-02.jpg",
        imageAlt: "Metals operation in Santiago, Chile",
        imageLabel: "Photo slot",
        label: "Chile",
        meta: "Country story",
        slug: "chile",
        title: "Chile",
      },
      {
        excerpt: "European operation focused on stainless steels, specialty alloys, and industrial material recovery.",
        href: "/about/spain",
        image: "/countries/espana/barcelona/spain-barcelona-warehouse-01.webp",
        imageAlt: "Industrial metals warehouse in Barcelona, Spain",
        imageLabel: "Barcelona, Spain",
        label: "Spain",
        meta: "Country story",
        slug: "spain",
        title: "Spain",
      },
      {
        excerpt: "Review of industrial equipment, machined components, and recoverable materials in European operations.",
        href: "/about/italy",
        image: "/countries/italia/operacion/italy-industrial-equipment-05.webp",
        imageAlt: "Industrial equipment and machined components in Italy",
        imageLabel: "Italy",
        label: "Italy",
        meta: "Country story",
        slug: "italy",
        title: "Italy",
      },
    ],
    cta: "Contact Us",
    eyebrow: "About Green Way",
    experienceEyebrow: "Where We Have Participated",
    experienceTitle: "Presence Designed To Recover Metals Across Markets.",
    footerBufferBody:
      "We prioritize materials with technical value: wear tools, inserts, drill bits, turnings, sludge, industrial parts, stainless steels, nickel, cobalt, titanium, and non-ferrous metals.",
    footerBufferEyebrow: "Additional Section",
    footerBufferImageLabel: "Image slot",
    footerBufferTitle: "Tungsten, Tungsten Carbide, Specialty Alloys, and Industrial Metals.",
    heroImageLabel: "Institutional image slot",
    introBody:
      "Green Way International connects material knowledge, final purchasing capacity, 4PL service, and market studies to recover metals with technical value: tungsten, wolfram, tungsten carbide, specialty alloys, stainless steels, and non-ferrous metals.",
    introEyebrow: "Who We Are",
    introImageLabel: "Team and operation image slot",
    introTitle: "We Buy and Value Industrial Metal Materials.",
    operatingBody:
      "We do not treat scrap as generic volume. We review origin, probable composition, physical presentation, cleanliness, mix, location, 4PL logistics, and market context to structure a serious offer and an executable operation.",
    operatingEyebrow: "Operating Standard",
    operatingItems: [
      {
        body: "We review photos, part type, industrial origin, mix, and alloy signals to guide valuation.",
        title: "Material Identification",
      },
      {
        body: "We structure offers for metals with demand and use market studies when a lot requires price, timing, and opportunity validation.",
        title: "Purchase and Valuation",
      },
      {
        body: "We integrate 4PL service for pickup, documentation, warehouses, consolidation, and international movement when the lot requires it.",
        title: "4PL and Traceability",
      },
    ],
    operatingTitle: "A Structured Way To Enter, Operate, and Scale.",
    proofBody:
      "We have documented operations, visits, and opportunities in the United States, Colombia, Chile, Spain, and Italy, always around recoverable materials and final industrial purchasing.",
    proofImageLabel: "International operation image slot",
    proofTitle: "What We Have Done",
    stats: [
      { label: "Markets", value: "00" },
      { label: "Operations", value: "00" },
      { label: "Partners", value: "00" },
    ],
    title: "About Us",
  },
  es: {
    closingEyebrow: "Siguiente Paso",
    closingTitle: "Envíanos Tu Material y Revisamos La Mejor Ruta De Recuperación.",
    countriesTitle: "Historias Por País",
    countryItems: [
      {
        excerpt:
          "Operación y compra final de aleaciones especiales, turnings, carburo de tungsteno y materiales industriales con trazabilidad internacional.",
        href: "/about/estados-unidos",
        image: "/countries/estados-unidos/houston/houston-warehouse-storage-03.webp",
        imageAlt: "Bodega industrial y materiales metalicos recuperados en Houston, Texas",
        imageLabel: "Estados Unidos",
        label: "Estados Unidos",
        meta: "Historia por país",
        slug: "estados-unidos",
        title: "Estados Unidos",
      },
      {
        excerpt:
          "Cobertura nacional para evaluación y compra de tungsteno, carburo de tungsteno y metales industriales.",
        href: "/about/colombia",
        image: "/countries/colombia/medellin/medellin-greentech-booth-07.webp",
        imageAlt: "Participación en stand GreenTech en Medellín, Colombia",
        imageLabel: "Colombia",
        label: "Colombia",
        meta: "Historia por país",
        slug: "colombia",
        title: "Colombia",
      },
      {
        excerpt:
          "Lectura de materiales industriales, aceros, piezas de desgaste y oportunidades de recuperación en operación minera y productiva.",
        href: "/about/chile",
        image: "/countries/chile/santiago/chile-operacion-santiago-02.jpg",
        imageAlt: "Operación de metales en Santiago, Chile",
        imageLabel: "Espacio para foto",
        label: "Chile",
        meta: "Historia por país",
        slug: "chile",
        title: "Chile",
      },
      {
        excerpt:
          "Operación europea enfocada en aceros inoxidables, aleaciones especiales y recuperación de materiales industriales.",
        href: "/about/espana",
        image: "/countries/espana/barcelona/spain-barcelona-warehouse-01.webp",
        imageAlt: "Bodega industrial de metales en Barcelona, España",
        imageLabel: "Barcelona, España",
        label: "España",
        meta: "Historia por país",
        slug: "espana",
        title: "España",
      },
      {
        excerpt:
          "Revisión de equipos industriales, componentes mecanizados y materiales recuperables dentro de operaciones europeas.",
        href: "/about/italia",
        image: "/countries/italia/operacion/italy-industrial-equipment-05.webp",
        imageAlt: "Equipo industrial y componentes mecanizados en Italia",
        imageLabel: "Italia",
        label: "Italia",
        meta: "Historia por país",
        slug: "italia",
        title: "Italia",
      },
    ],
    cta: "Contáctanos",
    eyebrow: "Sobre Green Way",
    experienceEyebrow: "Donde Hemos Participado",
    experienceTitle: "Presencia Pensada Para Recuperar Metales Entre Mercados.",
    footerBufferBody:
      "Priorizamos materiales con valor técnico: herramientas de desgaste, insertos, brocas, turnings, lodos, piezas industriales, inoxidables, níquel, cobalto, titanio y metales no ferrosos.",
    footerBufferEyebrow: "Sección Adicional",
    footerBufferImageLabel: "Espacio para imagen",
    footerBufferTitle: "Tungsteno, Carburo De Tungsteno, Aleaciones Especiales y Metales Industriales.",
    heroImageLabel: "Espacio para imagen institucional",
    introBody:
      "Green Way International conecta conocimiento de materiales, capacidad de compra final, servicio 4PL y estudios de mercado para recuperar metales con valor técnico: tungsteno, carburo de tungsteno, aleaciones especiales, inoxidables y no ferrosos.",
    introEyebrow: "Quienes Somos",
    introImageLabel: "Espacio para foto de equipo y operación",
    introTitle: "Compramos y Valorizamos Materiales Metálicos Industriales.",
    operatingBody:
      "No tratamos la chatarra como volumen genérico. Revisamos origen, composición probable, presentación física, limpieza, mezcla, ubicación, logística 4PL y contexto de mercado para estructurar una oferta seria y una operación ejecutable.",
    operatingEyebrow: "Estándar Operativo",
    operatingItems: [
      {
        body: "Revisamos fotos, tipo de pieza, proceso de origen, mezcla y señales de aleación para orientar la valorización.",
        title: "Identificación De Material",
      },
      {
        body: "Estructuramos ofertas para materiales metálicos con demanda y usamos estudios de mercado cuando el lote requiere validar precio, momento y oportunidad.",
        title: "Compra y Valorización",
      },
      {
        body: "Integramos servicio 4PL para recolección, documentación, bodegas, consolidación y movimiento internacional cuando el lote lo requiere.",
        title: "4PL y Trazabilidad",
      },
    ],
    operatingTitle: "Una Forma Estructurada De Entrar, Operar y Escalar.",
    proofBody:
      "Hemos documentado operaciones, visitas y oportunidades en Estados Unidos, Colombia, Chile, España e Italia, siempre alrededor de materiales recuperables y compra industrial final.",
    proofImageLabel: "Espacio para imagen de operación internacional",
    proofTitle: "Lo Que Hemos Hecho",
    stats: [
      { label: "Mercados", value: "00" },
      { label: "Operaciones", value: "00" },
      { label: "Aliados", value: "00" },
    ],
    title: "Quienes Somos",
  },
};

function getMessageBySlug<T extends { slug?: string }>(
  items: T[] | undefined,
  slug: string,
  index: number,
) {
  const direct = items?.find((item) => item.slug === slug);

  if (direct) {
    return direct;
  }

  const indexed = items?.[index];
  return !indexed?.slug || indexed.slug === slug ? indexed : undefined;
}

function getCopy(locale: string, messages: AboutMessages): AboutCopy {
  const localeKey = locale === "en" ? "en" : "es";
  const fallback = fallbackCopy[localeKey];
  const about = messages.Pages?.about ?? {};

  return {
    ...fallback,
    ...about,
    countryItems: fallback.countryItems.map((item, index) => ({
      ...item,
      ...getMessageBySlug(about.countryItems, item.slug, index),
    })),
    operatingItems:
      about.operatingItems?.map((item, index) => ({
        ...fallback.operatingItems[index],
        ...item,
      })) ?? fallback.operatingItems,
    stats:
      about.stats?.map((item, index) => ({
        ...fallback.stats[index],
        ...item,
      })) ?? fallback.stats,
  };
}

function MediaPlaceholder({
  label,
  tone = "light",
}: {
  label: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      aria-label={label}
      className={`relative isolate min-h-[320px] overflow-hidden rounded-[4px] border ${
        tone === "dark"
          ? "border-white/15 bg-[var(--gw-ink)]"
          : "border-[#d7dde3] bg-[#edf4f2]"
      }`}
      role="img"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,181,115,0.26),rgba(28,110,164,0.34)_44%,rgba(15,23,42,0.08))]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(15,23,42,0.32),rgba(15,23,42,0))]" />
      <div className="absolute -right-16 top-8 h-48 w-72 rotate-[-12deg] border-y border-white/40 bg-white/20" />
      <div className="absolute left-8 top-8 h-24 w-40 border border-white/50 bg-white/25" />
      <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-6">
        <p
          className={`max-w-[240px] text-sm font-bold uppercase tracking-[0.18em] ${
            tone === "dark" ? "text-white" : "text-[var(--gw-ink)]"
          }`}
        >
          {label}
        </p>
        <span className="h-10 w-10 border border-white/55 bg-white/25" />
      </div>
    </div>
  );
}

export async function AboutShowcase() {
  const locale = await getLocale();
  const messages = (await getMessages()) as AboutMessages;
  const copy = getCopy(locale, messages);
  const heroPrimaryImage = copy.countryItems[0];
  const heroSecondaryImage = copy.countryItems[1];
  const operatingIcons = [
    "evaluate",
    "market",
    "logistics",
  ] as const satisfies BrandIconName[];
  const capabilityCopy =
    locale === "en"
      ? {
          logistics: {
            body: "When a metal lot needs more than a local pickup, Green Way structures the operational route: pickup, warehouse, documentation, consolidation, and international movement.",
            eyebrow: "4PL service",
            items: [
              {
                body: "We define the pickup point, warehouse flow, and movement sequence around the lot conditions.",
                icon: "logistics",
                title: "Movement Plan",
              },
              {
                body: "We align paperwork, traceability, partners, and receiving points before the material moves.",
                icon: "check",
                title: "Operational Control",
              },
              {
                body: "We coordinate consolidation when volume, route, or destination makes it necessary.",
                icon: "warehouse",
                title: "Consolidation",
              },
            ],
            title: "4PL For Industrial Metal Lots That Need Controlled Movement.",
          },
          market: {
            body: "Market studies help us read demand, timing, price context, and industrial appetite before defining how aggressively Green Way should quote or move a lot.",
            eyebrow: "Market studies",
            items: [
              "Demand by material family",
              "Price context and timing",
              "Signals from industrial sectors",
              "Opportunity by volume and location",
            ],
            title: "Market Intelligence Around The Purchase Decision.",
          },
        }
      : {
          logistics: {
            body: "Cuando un lote metálico necesita más que una recolección local, Green Way estructura la ruta operativa: recolección, bodega, documentación, consolidación y movimiento internacional.",
            eyebrow: "Servicio 4PL",
            items: [
              {
                body: "Definimos punto de recolección, flujo de bodega y secuencia de movimiento según las condiciones del lote.",
                icon: "logistics",
                title: "Plan De Movimiento",
              },
              {
                body: "Alineamos documentación, trazabilidad, aliados y puntos de recepción antes de mover el material.",
                icon: "check",
                title: "Control Operativo",
              },
              {
                body: "Coordinamos consolidación cuando el volumen, la ruta o el destino lo hacen necesario.",
                icon: "warehouse",
                title: "Consolidación",
              },
            ],
            title: "4PL Para Lotes Metálicos Industriales Que Necesitan Movimiento Controlado.",
          },
          market: {
            body: "Los estudios de mercado nos ayudan a leer demanda, momento, contexto de precio y apetito industrial antes de definir cómo Green Way debe cotizar o mover un lote.",
            eyebrow: "Estudios de mercado",
            items: [
              "Demanda por familia de material",
              "Contexto de precio y momento",
              "Señales de sectores industriales",
              "Oportunidad por volumen y ubicación",
            ],
            title: "Inteligencia De Mercado Alrededor De La Decisión De Compra.",
          },
        };

  return (
    <>
      <section className="border-b border-[#d7dde3] bg-white" data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-5xl" data-aos="fade-up" data-aos-delay="80">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-blue)]">
              {copy.eyebrow}
            </p>
            <h1 className="text-5xl font-bold leading-[0.98] text-[var(--gw-ink)] sm:text-6xl lg:text-7xl">
              {copy.title}
            </h1>
            <div className="mt-8 h-1 w-28 bg-[var(--gw-grad-brand-90)]" />
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]" data-aos="fade-up" data-aos-delay="140">
            <div className="relative min-h-[440px] overflow-hidden bg-[#edf4f2]">
              {heroPrimaryImage.image ? (
                <Image
                  alt={heroPrimaryImage.imageAlt ?? heroPrimaryImage.imageLabel}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 760px, 100vw"
                  src={heroPrimaryImage.image}
                />
              ) : (
                <MediaPlaceholder label={copy.heroImageLabel} />
              )}
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.72),rgba(15,23,42,0.06)_62%,rgba(15,23,42,0))]" />
              <div className="absolute bottom-8 left-8 right-8 max-w-2xl text-white">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--gw-green)]">
                  {copy.introEyebrow}
                </p>
                <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                  {copy.introTitle}
                </h2>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="grid gap-0 border border-[#d7dde3] bg-[#f8fafc]">
                {copy.stats.map((stat, index) => (
                  <div
                    className="flex items-center justify-between border-b border-[#d7dde3] px-6 py-5 last:border-b-0"
                    data-aos="fade-up"
                    data-aos-delay={String(180 + index * 70)}
                    key={stat.label}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-[var(--gw-ink)]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="relative min-h-[210px] overflow-hidden bg-[var(--gw-ink)]">
                {heroSecondaryImage.image ? (
                  <Image
                    alt={heroSecondaryImage.imageAlt ?? heroSecondaryImage.imageLabel}
                    className="object-cover opacity-78"
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    src={heroSecondaryImage.image}
                  />
                ) : null}
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.78),rgba(15,23,42,0.18))]" />
                <p className="absolute bottom-6 left-6 right-6 text-sm font-bold uppercase tracking-[0.18em] text-white">
                  {copy.heroImageLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--gw-sand)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden border border-[#d7dde3] bg-white lg:grid-cols-[0.72fr_1.28fr]" data-aos="fade-up">
            <div className="flex min-h-[280px] flex-col justify-between bg-[var(--gw-ink)] p-8 text-white lg:p-10">
              <BrandIcon className="h-10 w-10 text-[var(--gw-green)]" name="recovery" />
              <p className="max-w-sm text-2xl font-bold leading-tight">
                {copy.proofTitle}
              </p>
            </div>
            <p className="p-8 text-xl leading-9 text-[var(--gw-ink)] lg:p-10">
              {copy.introBody}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7dde3] bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-blue)]">
              {copy.operatingEyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
              {copy.operatingTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              {copy.operatingBody}
            </p>
          </div>

          <div className="mt-12 grid border-y border-[#d7dde3] lg:grid-cols-3">
            {copy.operatingItems.map((item, index) => (
              <article
                className={`min-h-[280px] border-b border-[#d7dde3] p-7 lg:border-b-0 lg:border-r lg:last:border-r-0 ${
                  index === 1
                    ? "bg-[var(--gw-ink)] text-white"
                    : "bg-white text-[var(--gw-ink)]"
                }`}
                data-aos="fade-up"
                data-aos-delay={String(80 + index * 80)}
                key={`${item.title}-${index}`}
              >
                <div className="mb-8 flex items-center justify-between gap-6">
                  <span
                    className={`h-px w-20 ${
                      index === 1 ? "bg-[var(--gw-green)]" : "bg-[var(--gw-blue)]"
                    }`}
                  />
                  <BrandIcon
                    className={`h-6 w-6 ${
                      index === 1 ? "text-[var(--gw-green)]" : "text-[var(--gw-blue)]"
                    }`}
                    name={operatingIcons[index] ?? "process"}
                  />
                </div>
                <h3 className="text-3xl font-bold leading-tight">
                  {item.title}
                </h3>
                <p
                  className={`mt-5 text-base leading-7 ${
                    index === 1 ? "text-white/72" : "text-[var(--color-muted)]"
                  }`}
                >
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center" data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
              {copy.countriesTitle}
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
              {copy.experienceTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]" data-aos="fade-up" data-aos-delay="100">
              {copy.proofBody}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {copy.countryItems.map((item, index) => (
              <Link
                aria-label={item.title}
                className={`group relative min-h-[300px] cursor-pointer overflow-hidden border border-[#d7dde3] bg-[var(--gw-ink)] outline-none transition-colors duration-200 hover:border-[var(--gw-green)] focus-visible:ring-2 focus-visible:ring-[var(--gw-blue)] focus-visible:ring-offset-4 ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2 lg:min-h-[620px]" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={String(80 + index * 70)}
                href={item.href}
                key={`${item.label}-${index}`}
              >
                {item.image ? (
                  <Image
                    alt={item.imageAlt ?? item.imageLabel}
                    className="object-cover opacity-82 transition-transform duration-500 group-hover:scale-105"
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 320px, 100vw"}
                    src={item.image}
                  />
                ) : (
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,181,115,0.18),rgba(28,110,164,0.34))]" />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.86),rgba(15,23,42,0.26)_58%,rgba(15,23,42,0.06))]" />
                <div className="absolute inset-x-6 bottom-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--gw-green)]">
                    {item.meta}
                  </p>
                  <h3 className={`${index === 0 ? "text-5xl" : "text-3xl"} mt-4 font-bold leading-tight`}>
                    {item.title}
                  </h3>
                  <p className={`${index === 0 ? "max-w-xl text-base" : "text-sm"} mt-5 leading-7 text-white/74`}>
                    {item.excerpt}
                  </p>
                  <div className="mt-7 flex items-center justify-between border-t border-white/20 pt-5">
                    <span className="text-sm font-bold">{item.label}</span>
                    <span className="grid h-10 w-10 place-items-center border border-white/28 text-white transition-colors duration-200 group-hover:border-[var(--gw-green)] group-hover:text-[var(--gw-green)]">
                      <BrandIcon className="h-4 w-4" name="arrowRight" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--gw-sand)] px-6 py-18 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div className="sticky top-24" data-aos="fade-up">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-blue)]">
                {locale === "en" ? "Operational depth" : "Profundidad operativa"}
              </p>
              <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
                {locale === "en"
                  ? "4PL service and market studies support the metal purchase."
                  : "4PL y estudios de mercado al servicio de la compra de metales."}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
                {locale === "en"
                  ? "The priority is still the recoverable material. These capabilities help us make the purchase executable, informed, and traceable when the lot requires it."
                  : "La prioridad sigue siendo el material recuperable. Estas capacidades ayudan a que la compra sea ejecutable, informada y trazable cuando el lote lo requiere."}
              </p>
            </div>

            <div className="space-y-6">
              <article className="bg-[var(--gw-ink)] p-8 text-white lg:p-10" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-start justify-between gap-8 border-b border-white/16 pb-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
                      {capabilityCopy.logistics.eyebrow}
                    </p>
                    <h3 className="mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                      {capabilityCopy.logistics.title}
                    </h3>
                  </div>
                  <BrandIcon className="hidden h-8 w-8 shrink-0 text-[var(--gw-green)] sm:block" name="logistics" />
                </div>
                <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
                  {capabilityCopy.logistics.body}
                </p>
                <div className="mt-10 grid gap-8 lg:grid-cols-3">
                  {capabilityCopy.logistics.items.map((item, index) => (
                    <div data-aos="fade-up" data-aos-delay={String(160 + index * 70)} key={item.title}>
                      <div className="mb-5 h-px w-16 bg-[var(--gw-green)]" />
                      <h4 className="text-xl font-bold leading-tight">{item.title}</h4>
                      <p className="mt-4 text-sm leading-7 text-white/64">{item.body}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="bg-white p-8 lg:p-10" data-aos="fade-up" data-aos-delay="180">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-blue)]">
                      {capabilityCopy.market.eyebrow}
                    </p>
                    <h3 className="mt-4 text-3xl font-bold leading-tight text-[var(--gw-ink)] sm:text-4xl">
                      {capabilityCopy.market.title}
                    </h3>
                    <p className="mt-6 text-base leading-8 text-[var(--color-muted)]">
                      {capabilityCopy.market.body}
                    </p>
                  </div>

                  <div className="divide-y divide-[#d7dde3] border-y border-[#d7dde3]">
                    {capabilityCopy.market.items.map((item, index) => (
                      <div
                        className="grid grid-cols-[22px_1fr] items-start gap-4 py-5"
                        data-aos="fade-up"
                        data-aos-delay={String(230 + index * 60)}
                        key={item}
                      >
                        <span className="mt-2 h-2.5 w-2.5 bg-[var(--gw-green)]" />
                        <p className="text-lg font-bold leading-7 text-[var(--gw-ink)]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--gw-green)] bg-[var(--gw-ink)] px-6 py-18 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
              {copy.closingEyebrow}
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              {copy.closingTitle}
            </h2>
          </div>
          <div data-aos="fade-left" data-aos-delay="120">
            <ActionLink href="/contacto" variant="solid">
              {copy.cta}
            </ActionLink>
          </div>
        </div>
      </section>

      <section className="bg-[var(--gw-sand)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden border border-[#d7dde3] bg-white lg:grid-cols-[1.15fr_0.85fr]" data-aos="fade-up">
            <div className="p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
              {copy.footerBufferEyebrow}
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
              {copy.footerBufferTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              {copy.footerBufferBody}
            </p>
            </div>

            <div className="relative min-h-[340px] bg-[var(--gw-ink)] text-white">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,181,115,0.2),rgba(28,110,164,0.25),rgba(15,23,42,0))]" />
              <div className="absolute left-8 top-8 text-[10rem] font-bold leading-none tracking-normal text-white/8">
                W
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <BrandIcon className="mb-6 h-10 w-10 text-[var(--gw-green)]" name="material" />
                <p className="max-w-xs text-sm font-bold uppercase tracking-[0.18em] text-white/78">
                  {copy.footerBufferImageLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
