import { getLocale, getMessages } from "next-intl/server";
import { ActionLink } from "@/components/global/ActionLink";
import { BrandIcon, type BrandIconName } from "@/components/global/BrandIcons";

type ProductStat = {
  label: string;
  value: string;
};

type ProductPoint = {
  body: string;
  title: string;
};

type ProductService = {
  body: string;
  eyebrow: string;
  title: string;
};

type ProductStep = {
  body: string;
  title: string;
};

type ProductsCopy = {
  closingBody: string;
  closingCta: string;
  closingEyebrow: string;
  closingTitle: string;
  continuationBody: string;
  continuationEyebrow: string;
  continuationItems: ProductPoint[];
  continuationTitle: string;
  heroBody: string;
  heroEyebrow: string;
  heroStats: ProductStat[];
  heroTitle: string;
  intelligenceBody: string;
  intelligenceEyebrow: string;
  intelligenceItems: ProductPoint[];
  intelligenceTitle: string;
  materialBody: string;
  materialEyebrow: string;
  materialItems: ProductPoint[];
  materialLabel: string;
  materialTitle: string;
  materialVisualCaption: string;
  processBody: string;
  processEyebrow: string;
  processSteps: ProductStep[];
  processTitle: string;
  servicesBody: string;
  servicesEyebrow: string;
  servicesItems: ProductService[];
  servicesTitle: string;
};

type ProductsMessages = {
  Pages?: {
    products?: Partial<ProductsCopy>;
  };
};

const fallbackCopy: Record<"en" | "es", ProductsCopy> = {
  en: {
    closingBody:
      "We can review scope, available information, logistics requirements, and the best path to structure the conversation.",
    closingCta: "Contact Us",
    closingEyebrow: "Next Step",
    closingTitle: "Talk to Greenway about tungsten and metal operations.",
    continuationBody:
      "The page is prepared to incorporate material profiles, imagery, and cases with a clearer purchasing read.",
    continuationEyebrow: "Portfolio in progress",
    continuationItems: [
      {
        body: "Tungsten remains positioned as the priority material within the industrial buying conversation.",
        title: "Material",
      },
      {
        body: "4PL and market studies are organized around final purchasing and metal recovery.",
        title: "Services",
      },
      {
        body: "Market studies connect demand, price context, industry behavior, and purchasing timing.",
        title: "Market Intelligence",
      },
    ],
    continuationTitle:
      "Tungsten, metals, and intelligence stay organized by commercial priority.",
    heroBody:
      "Greenway works with materials of high technical value: tungsten, tungsten carbide, stainless steels, nickel, cobalt, titanium, non-ferrous metals, and metal-bearing process residues.",
    heroEyebrow: "Materials and Services",
    heroStats: [
      { label: "Tungsten", value: "W" },
      { label: "Tungsten carbide", value: "WC" },
      { label: "Alloys", value: "Ni/Co" },
    ],
    heroTitle: "Buying and recovery of industrial metals.",
    intelligenceBody:
      "We prepare market studies for industrial metals: demand behavior, price context, supply signals, sector movement, and opportunity timing.",
    intelligenceEyebrow: "Market intelligence",
    intelligenceItems: [
      {
        body: "Separating tungsten, tungsten carbide, nickel, cobalt, titanium, or stainless steel helps avoid generic pricing.",
        title: "Demand signals",
      },
      {
        body: "Cleanliness, mix, moisture, oil, and process residue change the expected recovery.",
        title: "Counterpart review",
      },
      {
        body: "Market studies help compare demand, timing, and material opportunity across industrial sectors.",
        title: "Market studies",
      },
    ],
    intelligenceTitle: "Market intelligence and studies for specialty materials.",
    materialBody:
      "Tungsten gives the page a clear material focus: dense, technical, industrial, and relevant for conversations where quality, recovery, and final purchase matter.",
    materialEyebrow: "Priority material",
    materialItems: [
      {
        body: "Used as a reference point for technical, industrial, and high-performance demand conversations.",
        title: "Industrial relevance",
      },
      {
        body: "Presented with a sober framework for review, sourcing, coordination, and commercial follow-up.",
        title: "Commercial structure",
      },
      {
        body: "Connected with 4PL, metal recovery, and market intelligence instead of being treated as generic scrap.",
        title: "Operating context",
      },
    ],
    materialLabel: "Tungsten",
    materialTitle: "The material focus should be unmistakable.",
    materialVisualCaption: "Industrial material focus",
    processBody:
      "The route starts with simple information and ends with a clear decision: quote, buy, collect, store, move, or prepare the lot for recovery.",
    processEyebrow: "Operating path",
    processSteps: [
      {
        body: "Photos, approximate weight, city, and a short description of the material.",
        title: "Identify",
      },
      {
        body: "Initial review of metal family, presentation, mix, and purchase potential.",
        title: "Validate",
      },
      {
        body: "Offer or recommended route according to material, volume, and lot conditions.",
        title: "Coordinate",
      },
      {
        body: "Collection, warehouse, payment, dispatch, or recovery coordination.",
        title: "Move",
      },
    ],
    processTitle: "From material opportunity to controlled execution.",
    servicesBody:
      "Greenway is a final buyer for tungsten, wolfram, tungsten carbide, specialty alloys, and metal-bearing residues. When a lot requires it, we integrate 4PL and market studies to evaluate, quote, and move the material with control.",
    servicesEyebrow: "Service lines",
    servicesItems: [
      {
        body: "4PL service for pickup, warehouse, documentation, partners, consolidation, and international movement for lots that fit Greenway's purchasing route.",
        eyebrow: "4PL",
        title: "4PL",
      },
      {
        body: "Identification, sorting, valuation, and recovery of tungsten, tungsten carbide, specialty alloys, and metal-bearing residues.",
        eyebrow: "Recovery",
        title: "Metal recovery",
      },
      {
        body: "Market studies, demand analysis, price context, supply signals, and opportunity timing for industrial metals.",
        eyebrow: "Studies",
        title: "Market intelligence",
      },
    ],
    servicesTitle: "We buy industrial metals and structure the recovery route.",
  },
  es: {
    closingBody:
      "Podemos revisar alcance, información disponible, requerimientos logísticos y el mejor camino para estructurar la conversación.",
    closingCta: "Contáctanos",
    closingEyebrow: "Siguiente paso",
    closingTitle: "Conversemos sobre tungsteno y operaciones de metales.",
    continuationBody:
      "La página queda preparada para incorporar fichas de material, imágenes y casos con una lectura de compra clara.",
    continuationEyebrow: "Portafolio en construcción",
    continuationItems: [
      {
        body: "El tungsteno se mantiene como material prioritario dentro de la conversación industrial.",
        title: "Material",
      },
      {
        body: "4PL y estudios de mercado se ordenan alrededor de la compra final y la recuperación de metales.",
        title: "Servicios",
      },
      {
        body: "Los estudios de mercado conectan demanda, contexto de precios, comportamiento industrial y momento de compra.",
        title: "Inteligencia de mercado",
      },
    ],
    continuationTitle:
      "Tungsteno, metales e inteligencia ordenados por prioridad comercial.",
    heroBody:
      "Greenway trabaja con materiales de alto valor técnico: tungsteno, carburo de tungsteno, aceros inoxidables, níquel, cobalto, titanio, no ferrosos y residuos metálicos de proceso.",
    heroEyebrow: "Materiales y Servicios",
    heroStats: [
      { label: "Tungsteno", value: "W" },
      { label: "Carburo de tungsteno", value: "WC" },
      { label: "Aleaciones", value: "Ni/Co" },
    ],
    heroTitle: "Compra y recuperación de metales industriales.",
    intelligenceBody:
      "Realizamos estudios de mercado para metales industriales: comportamiento de demanda, contexto de precios, señales de oferta, movimiento por sector y momento de oportunidad.",
    intelligenceEyebrow: "Inteligencia de mercado",
    intelligenceItems: [
      {
        body: "Separar tungsteno, carburo de tungsteno, níquel, cobalto, titanio o inoxidable evita precios genéricos.",
        title: "Señales de demanda",
      },
      {
        body: "Limpieza, mezcla, humedad, aceite o residuo de proceso cambian la recuperación esperada.",
        title: "Revisión de contrapartes",
      },
      {
        body: "Los estudios de mercado ayudan a comparar demanda, momento y oportunidad del material entre sectores industriales.",
        title: "Estudios de mercado",
      },
    ],
    intelligenceTitle: "Inteligencia y estudios de mercado para materiales especiales.",
    materialBody:
      "El tungsteno le da a la página un foco claro de material: denso, técnico, industrial y relevante para conversaciones donde importan calidad, recuperación y compra final.",
    materialEyebrow: "Material prioritario",
    materialItems: [
      {
        body: "Funciona como punto de referencia para conversaciones técnicas, industriales y de demanda especializada.",
        title: "Relevancia industrial",
      },
      {
        body: "Se presenta con una estructura sobria para revisión, origen, coordinación y seguimiento comercial.",
        title: "Estructura comercial",
      },
      {
        body: "Se conecta con 4PL, recuperación de metales e inteligencia de mercado, no como chatarra genérica.",
        title: "Contexto operativo",
      },
    ],
    materialLabel: "Tungsteno",
    materialTitle: "El enfoque en material debe ser imposible de ignorar.",
    materialVisualCaption: "Material industrial prioritario",
    processBody:
      "La ruta empieza con información simple y termina con una decisión clara: cotizar, comprar, recolectar, almacenar, mover o preparar el lote para recuperación.",
    processEyebrow: "Ruta operativa",
    processSteps: [
      {
        body: "Fotos, peso aproximado, ciudad y breve descripción del material.",
        title: "Identificar",
      },
      {
        body: "Revisión inicial de familia metálica, presentación, mezcla y potencial de compra.",
        title: "Validar",
      },
      {
        body: "Oferta o ruta recomendada según material, volumen y condiciones del lote.",
        title: "Coordinar",
      },
      {
        body: "Coordinación de recolección, bodega, pago, despacho o recuperación.",
        title: "Mover",
      },
    ],
    processTitle: "De oportunidad de material a ejecución controlada.",
    servicesBody:
      "Greenway es comprador final de tungsteno, carburo de tungsteno, aleaciones especiales y residuos metálicos. Cuando el lote lo exige, integramos 4PL y estudios de mercado para evaluar, cotizar y mover el material con control.",
    servicesEyebrow: "Líneas de servicio",
    servicesItems: [
      {
        body: "Servicio 4PL para recolección, bodega, documentación, aliados, consolidación y movimiento internacional de lotes que encajan con la ruta de compra de Greenway.",
        eyebrow: "4PL",
        title: "4PL",
      },
      {
        body: "Identificación, clasificación, valorización y recuperación de tungsteno, carburo de tungsteno, aleaciones especiales y residuos metálicos.",
        eyebrow: "Recuperación",
        title: "Recuperación de metales",
      },
      {
        body: "Estudios de mercado, análisis de demanda, contexto de precios, señales de oferta y momento de oportunidad para metales industriales.",
        eyebrow: "Estudios",
        title: "Inteligencia de mercado",
      },
    ],
    servicesTitle: "Compramos metales industriales y estructuramos la ruta de recuperación.",
  },
};

function mergeArray<T extends object>(fallbackItems: T[], messageItems?: Partial<T>[]) {
  if (!messageItems?.length) {
    return fallbackItems;
  }

  return messageItems.map((item, index) => ({
    ...(fallbackItems[index] ?? fallbackItems[0]),
    ...item,
  }));
}

function getCopy(locale: string, messages: ProductsMessages): ProductsCopy {
  const localeKey = locale === "en" ? "en" : "es";
  const fallback = fallbackCopy[localeKey];
  const products = messages.Pages?.products ?? {};

  return {
    ...fallback,
    ...products,
    continuationItems: mergeArray(
      fallback.continuationItems,
      products.continuationItems,
    ),
    heroStats: mergeArray(fallback.heroStats, products.heroStats),
    intelligenceItems: mergeArray(
      fallback.intelligenceItems,
      products.intelligenceItems,
    ),
    materialItems: mergeArray(fallback.materialItems, products.materialItems),
    processSteps: mergeArray(fallback.processSteps, products.processSteps),
    servicesItems: mergeArray(
      fallback.servicesItems,
      products.servicesItems,
    ).slice(0, 3),
  };
}

function TungstenVisual({
  caption,
  label,
}: {
  caption: string;
  label: string;
}) {
  return (
    <div
      aria-label={label}
      className="relative isolate min-h-[440px] overflow-hidden rounded-[4px] border border-white/15 bg-[var(--gw-ink)] text-white"
      role="img"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,181,115,0.26),rgba(28,110,164,0.42)_48%,rgba(15,23,42,0.05))]" />
      <div className="absolute inset-x-10 top-10 h-px bg-white/20" />
      <div className="absolute inset-y-10 right-10 w-px bg-white/20" />
      <div className="absolute left-8 top-8 text-[11rem] font-bold leading-none tracking-normal text-white/10 sm:text-[15rem]">
        W
      </div>
      <div className="absolute bottom-8 left-8 right-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
          {label}
        </p>
        <div className="mt-5 flex items-end justify-between gap-6 border-t border-white/20 pt-6">
          <p className="text-6xl font-bold leading-none sm:text-8xl">74</p>
          <p className="max-w-[220px] text-right text-sm font-semibold uppercase tracking-[0.18em] text-white/78">
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
}

export async function ProductsShowcase() {
  const locale = await getLocale();
  const messages = (await getMessages()) as ProductsMessages;
  const copy = getCopy(locale, messages);
  const [fourPlService, recoveryService, marketService] = copy.servicesItems;
  const materialIcons = [
    "material",
    "alloy",
    "warehouse",
  ] as const satisfies BrandIconName[];
  const processIcons = [
    "evaluate",
    "check",
    "process",
    "logistics",
  ] as const satisfies BrandIconName[];
  const materialSeoLinks =
    locale === "en"
      ? [
          { href: "/tungsten", label: "Tungsten and wolfram buying" },
          { href: "/tungsten-carbide", label: "Tungsten carbide buying" },
        ]
      : [
          { href: "/tungsteno", label: "Compra de tungsteno y wolframio" },
          {
            href: "/carburo-de-tungsteno",
            label: "Compra de carburo de tungsteno",
          },
        ];

  return (
    <>
      <section className="border-b border-[#d7dde3] bg-white" data-aos="fade-up">
        <div className="mx-auto grid min-h-[calc(100svh-var(--gw-nav-h))] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-aos="fade-up" data-aos-delay="80">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-blue)]">
              {copy.heroEyebrow}
            </p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] text-[var(--gw-ink)] sm:text-6xl lg:text-7xl">
              {copy.heroTitle}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              {copy.heroBody}
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {copy.heroStats.map((stat, index) => (
                <div
                  className="border-l-2 border-[var(--gw-green)] bg-[#f8fafc] px-5 py-4"
                  data-aos="fade-up"
                  data-aos-delay={String(140 + index * 70)}
                  key={`${stat.label}-${index}`}
                >
                  <p className="text-3xl font-bold text-[var(--gw-ink)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="160">
            <TungstenVisual
              caption={copy.materialVisualCaption}
              label={copy.materialLabel}
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--gw-sand)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl" data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
              {copy.materialEyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
              {copy.materialTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <div
              className="flex min-h-[390px] flex-col justify-between bg-[var(--gw-ink)] p-8 text-white lg:p-10"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <div>
                <p className="max-w-2xl text-xl leading-8 text-white/76">
                  {copy.materialBody}
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  {materialSeoLinks.map((link) => (
                    <ActionLink href={link.href} key={link.href} variant="solid">
                      {link.label}
                    </ActionLink>
                  ))}
                </div>
              </div>
              <div className="mt-12 grid grid-cols-3 border-t border-white/16 pt-7">
                {copy.heroStats.map((stat, index) => (
                  <div
                    className="border-r border-white/16 pr-4 last:border-r-0"
                    key={`material-stat-${stat.label}-${index}`}
                  >
                    <p className="text-3xl font-bold text-[var(--gw-green)]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-white/58">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2" data-aos="fade-left" data-aos-delay="120">
              {copy.materialItems.map((item, index) => (
                <article
                  className={`border border-[#d7dde3] bg-white p-6 ${
                    index === 0 ? "sm:col-span-2" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={String(150 + index * 70)}
                  key={`${item.title}-${index}`}
                >
                  <BrandIcon
                    className="mb-8 h-7 w-7 text-[var(--gw-blue)]"
                    name={materialIcons[index] ?? "material"}
                  />
                  <h3 className="text-2xl font-bold text-[var(--gw-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7dde3] bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-blue)]">
              {copy.servicesEyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
              {copy.servicesTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              {copy.servicesBody}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.82fr_1.36fr_0.82fr] lg:items-stretch">
            <article
              className="order-2 flex min-h-[250px] flex-col justify-between border border-[#d7dde3] bg-[#f8fafc] p-7 lg:order-1"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--gw-blue)]">
                    {fourPlService.eyebrow}
                  </p>
                  <BrandIcon className="h-6 w-6 text-[var(--gw-blue)]" name="logistics" />
                </div>
                <h3 className="text-3xl font-bold leading-tight text-[var(--gw-ink)]">
                  {fourPlService.title}
                </h3>
              </div>
              <p className="mt-7 text-base leading-7 text-[var(--color-muted)]">
                {fourPlService.body}
              </p>
            </article>

            <article
              className="order-1 relative isolate min-h-[360px] overflow-hidden border border-[var(--gw-green)] bg-[var(--gw-ink)] p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.22)] lg:order-2 lg:-mt-8 lg:min-h-[440px] lg:p-10"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,181,115,0.18),rgba(28,110,164,0.16)_45%,rgba(15,23,42,0))]" />
              <div className="absolute right-8 top-8 text-[8rem] font-bold leading-none tracking-normal text-white/8 lg:text-[11rem]">
                W
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mb-10 flex items-center justify-between border-b border-white/18 pb-6">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
                      {recoveryService.eyebrow}
                    </p>
                    <BrandIcon className="h-8 w-8 text-[var(--gw-green)]" name="recovery" />
                  </div>
                  <h3 className="max-w-[520px] text-4xl font-bold leading-[1.02] sm:text-5xl">
                    {recoveryService.title}
                  </h3>
                </div>
                <p className="mt-10 max-w-xl text-lg leading-8 text-white/76">
                  {recoveryService.body}
                </p>
              </div>
            </article>

            <article
              className="order-3 flex min-h-[250px] flex-col justify-between border border-[#d7dde3] bg-white p-7 lg:order-3"
              data-aos="fade-up"
              data-aos-delay="220"
            >
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--gw-blue)]">
                    {marketService.eyebrow}
                  </p>
                  <BrandIcon className="h-6 w-6 text-[var(--gw-blue)]" name="market" />
                </div>
                <h3 className="text-3xl font-bold leading-tight text-[var(--gw-ink)]">
                  {marketService.title}
                </h3>
              </div>
              <p className="mt-7 text-base leading-7 text-[var(--color-muted)]">
                {marketService.body}
              </p>
            </article>
          </div>

        </div>
      </section>

      <section className="bg-[var(--gw-ink)] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl" data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
              {copy.processEyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              {copy.processTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              {copy.processBody}
            </p>
          </div>

          <div className="relative mt-12 grid gap-5 lg:grid-cols-4" data-aos="fade-up" data-aos-delay="120">
            <div aria-hidden="true" className="absolute left-0 right-0 top-6 hidden h-px bg-white/18 lg:block" />
            {copy.processSteps.map((step, index) => (
              <article
                className="relative bg-[rgba(255,255,255,0.04)] p-6 ring-1 ring-white/12"
                data-aos="fade-up"
                data-aos-delay={String(160 + index * 70)}
                key={`${step.title}-${index}`}
              >
                <span className="relative z-10 mb-8 grid h-12 w-12 place-items-center border border-[var(--gw-green)] bg-[var(--gw-ink)] text-[var(--gw-green)]">
                  <BrandIcon
                    className="h-5 w-5"
                    name={processIcons[index] ?? "process"}
                  />
                </span>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/68">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-[#d7dde3] pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end" data-aos="fade-up">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
                {copy.intelligenceEyebrow}
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
                {copy.intelligenceTitle}
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[var(--color-muted)] lg:justify-self-end">
              {copy.intelligenceBody}
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="100">
            {copy.intelligenceItems.map((item, index) => (
              <article
                className={`min-h-[270px] border p-7 ${
                  index === 1
                    ? "border-[var(--gw-blue)] bg-[#f8fafc]"
                    : "border-[#d7dde3] bg-white"
                }`}
                data-aos="fade-up"
                data-aos-delay={String(140 + index * 70)}
                key={`${item.title}-${index}`}
              >
                <div className="mb-10 h-1 w-16 bg-[var(--gw-green)]" />
                <h3 className="text-2xl font-bold leading-tight text-[var(--gw-ink)]">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
                  {item.body}
                </p>
              </article>
            ))}
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
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              {copy.closingBody}
            </p>
          </div>
          <div data-aos="fade-left" data-aos-delay="120">
            <ActionLink href="/contacto" variant="solid">
              {copy.closingCta}
            </ActionLink>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl" data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
              {copy.continuationEyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
              {copy.continuationTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
              {copy.continuationBody}
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3" data-aos="fade-up" data-aos-delay="100">
            {copy.continuationItems.map((item, index) => (
              <article
                className={`min-h-[230px] border p-6 ${
                  index === 0
                    ? "border-[var(--gw-green)] bg-[var(--gw-ink)] text-white"
                    : "border-[#d7dde3] bg-white text-[var(--gw-ink)]"
                }`}
                data-aos="fade-up"
                data-aos-delay={String(140 + index * 70)}
                key={`${item.title}-${index}`}
              >
                <div className="flex h-full flex-col justify-between">
                  <h3 className="text-3xl font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-8 text-base leading-7 ${
                      index === 0 ? "text-white/72" : "text-[var(--color-muted)]"
                    }`}
                  >
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
