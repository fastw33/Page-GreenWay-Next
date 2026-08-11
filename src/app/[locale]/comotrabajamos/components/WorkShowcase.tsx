import Image from "next/image";
import { getLocale, getMessages } from "next-intl/server";
import { ActionLink } from "@/components/global/ActionLink";
import { BrandIcon } from "@/components/global/BrandIcons";

type HeroStat = {
  label: string;
  value: string;
};

type WorkStep = {
  body: string;
  bullets: string[];
  title: string;
};

type WorkLayer = {
  body: string;
  label: string;
  title: string;
};

type WorkPartner = {
  href: string;
  logo: string;
  logoAlt: string;
  name: string;
  role: string;
};

type WorkEvidence = {
  body: string;
  title: string;
};

type WorkImage = {
  alt: string;
  src: string;
};

type WorkCopy = {
  alliesBody: string;
  alliesEyebrow: string;
  alliesTitle: string;
  closingBody: string;
  closingCta: string;
  closingEyebrow: string;
  closingTitle: string;
  continuationBody: string;
  continuationEyebrow: string;
  continuationItems: WorkEvidence[];
  continuationTitle: string;
  evidenceBody: string;
  evidenceEyebrow: string;
  evidenceImageLabel: string;
  evidenceItems: WorkEvidence[];
  evidenceTitle: string;
  heroBody: string;
  heroEyebrow: string;
  heroImageLabel: string;
  heroStats: HeroStat[];
  heroTitle: string;
  modelBody: string;
  modelEyebrow: string;
  modelImageLabel: string;
  modelLayers: WorkLayer[];
  modelTitle: string;
  partnerLinkLabel: string;
  partners: WorkPartner[];
  routeBody: string;
  routeEyebrow: string;
  routeSteps: WorkStep[];
  routeTitle: string;
};

type WorkMessages = {
  Pages?: {
    work?: Partial<WorkCopy>;
  };
};

const fallbackCopy: Record<"en" | "es", WorkCopy> = {
  en: {
    alliesBody:
      "We integrate operating and commercial partners so material can be evaluated, collected, stored, and moved responsibly.",
    alliesEyebrow: "Metal Recovery Partners",
    alliesTitle: "A Connected Operating Network.",
    closingBody:
      "Send photos, approximate quantity, city, and any information about the material origin. With that we can guide the first quote.",
    closingCta: "Contact Us",
    closingEyebrow: "Next Step",
    closingTitle: "Do You Have Material For Review?",
    continuationBody:
      "We support the operation from the initial review through logistics coordination, payment, documentation, and learning for future lots.",
    continuationEyebrow: "Operational Continuity",
    continuationItems: [
      {
        body: "We confirm material data and resolve technical questions before quoting.",
        title: "Review",
      },
      {
        body: "We agree on price, timing, collection, and required documentation.",
        title: "Alignment",
      },
      {
        body: "We keep a record to make recurring operations easier for the same supplier.",
        title: "Next Move",
      },
    ],
    continuationTitle: "Follow-Up That Keeps The Operation Moving.",
    evidenceBody:
      "Clear photos, weight, location, origin, and material condition help us quote faster and with less room for error.",
    evidenceEyebrow: "Documentation",
    evidenceImageLabel: "Photo and evidence slot",
    evidenceItems: [
      {
        body: "Visual evidence and approximate quantity speed up the initial review.",
        title: "Operational Records",
      },
      {
        body: "Knowing if it comes from machining, mining, maintenance, or production improves the technical read.",
        title: "Partner Coordination",
      },
      {
        body: "Separation, cleanliness, and mix directly influence valuation.",
        title: "Market Follow-Up",
      },
    ],
    evidenceTitle: "Work Prepared To Be Reviewed, Tracked, and Improved.",
    heroBody:
      "A clear process to identify materials, quote with technical judgment, coordinate logistics, and close metal recovery operations.",
    heroEyebrow: "How We Work",
    heroImageLabel: "Operations image slot",
    heroStats: [
      { label: "Planning", value: "01" },
      { label: "Execution", value: "02" },
      { label: "Control", value: "03" },
    ],
    heroTitle: "How We Recover Value From Every Metal Lot.",
    modelBody:
      "Separation, cleanliness, industrial origin, and documentation change the value of a lot. Our process organizes that information before negotiating or transporting.",
    modelEyebrow: "Execution Structure",
    modelImageLabel: "Field operation image slot",
    modelLayers: [
      {
        body: "Metal family, physical form, cleanliness, mix, and industrial use.",
        label: "Layer 01",
        title: "Material",
      },
      {
        body: "Demand, expected recovery, volume, and purchase conditions.",
        label: "Layer 02",
        title: "Value",
      },
      {
        body: "Collection, warehouse, documentation, dispatch, and closing.",
        label: "Layer 03",
        title: "Movement",
      },
    ],
    modelTitle: "Technical Control Before Moving The Material.",
    partnerLinkLabel: "Website",
    partners: [
      {
        href: "https://www.fastwaysas.com/",
        logo: "/allies/fastway-transparent.png",
        logoAlt: "Fastway Logistic SAS logo",
        name: "Fastway Logistic SAS",
        role: "Logistics support for movements, warehouses, and operations between markets.",
      },
      {
        href: "https://metalharvest.io/",
        logo: "/allies/metal-harvest-transparent.png",
        logoAlt: "Metal Harvest logo",
        name: "Metal Harvest",
        role: "Channel in Colombia for purchasing, evaluation, and quoting of industrial metals.",
      },
      {
        href: "https://tlimiami.com/",
        logo: "/allies/transport-logistic.webp",
        logoAlt: "Transport Logistic International logo",
        name: "Transport Logistic International",
        role: "Partner for international transport coordination and cargo support.",
      },
    ],
    routeBody:
      "The priority is to reduce uncertainty: what material it is, how much exists, where it is, how it is presented, and which Green Way purchasing and logistics route makes sense.",
    routeEyebrow: "Operating Roadmap",
    routeSteps: [
      {
        body: "We receive photos, approximate weight, city, piece type, and industrial process context.",
        bullets: [
          "General and close-up photos",
          "Quantity, weight, or volume",
          "Material origin",
        ],
        title: "Information Intake",
      },
      {
        body: "We classify the lot by material family and detect signals of technical value or mixing.",
        bullets: [
          "Tungsten and tungsten carbide",
          "Stainless steels and specialty alloys",
          "Non-ferrous and process materials",
        ],
        title: "Initial Identification",
      },
      {
        body: "We structure a commercial read based on material, condition, cleanliness, volume, and demand.",
        bullets: [
          "Material-oriented price",
          "Condition and separation",
          "Buying viability",
        ],
        title: "Valuation",
      },
      {
        body: "We define pickup, storage, or shipment depending on location and lot characteristics.",
        bullets: [
          "Warehouse or pickup point",
          "Basic documentation",
          "Logistics partner",
        ],
        title: "Logistics Coordination",
      },
      {
        body: "We align final conditions so Green Way's purchase or recovery can move forward clearly.",
        bullets: [
          "Lot confirmation",
          "Commercial terms",
          "Payment and support",
        ],
        title: "Close and Payment",
      },
      {
        body: "We record lot learnings to improve future quotes and recurring operations.",
        bullets: [
          "Photo evidence",
          "Material history",
          "Sorting improvement",
        ],
        title: "Traceability",
      },
    ],
    routeTitle: "From Material Photos To An Operation Ready To Execute.",
  },
  es: {
    alliesBody:
      "Integramos socios operativos y comerciales para que el material pueda evaluarse, recogerse, almacenarse y moverse con responsabilidad.",
    alliesEyebrow: "Aliados Para Recuperación De Metales",
    alliesTitle: "Una Red Operativa Conectada.",
    closingBody:
      "Envíanos fotos, cantidad aproximada, ciudad y cualquier información del proceso de origen. Con eso podemos orientar la cotización inicial.",
    closingCta: "Contáctanos",
    closingEyebrow: "Siguiente Paso",
    closingTitle: "¿Tienes Material Para Revisar?",
    continuationBody:
      "Acompañamos la operación desde la revisión inicial hasta la coordinación logística, pago, documentación y aprendizaje para próximos lotes.",
    continuationEyebrow: "Continuidad Operativa",
    continuationItems: [
      {
        body: "Confirmamos datos del material y resolvemos dudas técnicas antes de cotizar.",
        title: "Revisión",
      },
      {
        body: "Acordamos precio, tiempos, recolección y documentación necesaria.",
        title: "Alineación",
      },
      {
        body: "Dejamos registro para facilitar operaciones recurrentes con el mismo proveedor.",
        title: "Próximo Movimiento",
      },
    ],
    continuationTitle: "Seguimiento Para Mantener La Operación En Marcha.",
    evidenceBody:
      "Fotos claras, peso, ubicación, origen y condición del material permiten cotizar con más velocidad y menor margen de error.",
    evidenceEyebrow: "Documentación",
    evidenceImageLabel: "Evidencia operativa",
    evidenceItems: [
      {
        body: "La evidencia visual y la cantidad aproximada aceleran la revisión inicial.",
        title: "Registros Operativos",
      },
      {
        body: "Saber si viene de mecanizado, minería, mantenimiento o producción mejora la lectura técnica.",
        title: "Coordinación Con Aliados",
      },
      {
        body: "Separación, limpieza y mezcla influyen directamente en la valorización.",
        title: "Seguimiento De Mercado",
      },
    ],
    evidenceTitle: "Trabajo Preparado Para Revisar, Medir y Mejorar.",
    heroBody:
      "Un proceso claro para identificar materiales, cotizar con criterio técnico, coordinar logística y cerrar operaciones de recuperación de metales.",
    heroEyebrow: "Como Trabajamos",
    heroImageLabel: "Operación Green Way",
    heroStats: [
      { label: "Planeación", value: "01" },
      { label: "Ejecución", value: "02" },
      { label: "Control", value: "03" },
    ],
    heroTitle: "Cómo Recuperamos Valor De Cada Lote Metálico.",
    modelBody:
      "Separación, limpieza, origen industrial y documentación cambian el valor de un lote. Nuestro proceso ordena esa información antes de negociar o transportar.",
    modelEyebrow: "Estructura De Ejecución",
    modelImageLabel: "Imagen de campo",
    modelLayers: [
      {
        body: "Familia metálica, forma física, limpieza, mezcla y uso industrial.",
        label: "Capa 01",
        title: "Material",
      },
      {
        body: "Demanda, recuperación esperada, volumen y condiciones de compra.",
        label: "Capa 02",
        title: "Valor",
      },
      {
        body: "Recolección, bodega, documentación, despacho y cierre.",
        label: "Capa 03",
        title: "Movimiento",
      },
    ],
    modelTitle: "Control Técnico Antes De Mover El Material.",
    partnerLinkLabel: "Sitio web",
    partners: [
      {
        href: "https://www.fastwaysas.com/",
        logo: "/allies/fastway-transparent.png",
        logoAlt: "Logo de Fastway Logistic SAS",
        name: "Fastway Logistic SAS",
        role: "Soporte logístico para coordinar movimientos, bodegas y operación entre mercados.",
      },
      {
        href: "https://metalharvest.io/",
        logo: "/allies/metal-harvest-transparent.png",
        logoAlt: "Logo de Metal Harvest",
        name: "Metal Harvest",
        role: "Canal en Colombia para compra, evaluación y cotización de metales industriales.",
      },
      {
        href: "https://tlimiami.com/",
        logo: "/allies/transport-logistic.webp",
        logoAlt: "Logo de Transport Logistic International",
        name: "Transport Logistic International",
        role: "Aliado para coordinación de transporte internacional y soporte de carga.",
      },
    ],
    routeBody:
      "La prioridad es reducir incertidumbre: saber qué material es, cuánto hay, dónde está, cómo se presenta y qué ruta de compra y logística tiene sentido para Green Way.",
    routeEyebrow: "Ruta De Trabajo",
    routeSteps: [
      {
        body: "Recibimos fotos, peso aproximado, ciudad, tipo de pieza y contexto del proceso industrial.",
        bullets: [
          "Fotos generales y de detalle",
          "Cantidad, peso o volumen",
          "Origen del material",
        ],
        title: "Recepción De Información",
      },
      {
        body: "Clasificamos el lote por familia de material y detectamos señales de valor técnico o mezcla.",
        bullets: [
          "Tungsteno y carburo de tungsteno",
          "Inoxidables y aleaciones especiales",
          "No ferrosos y materiales de proceso",
        ],
        title: "Identificación Inicial",
      },
      {
        body: "Estructuramos una lectura comercial según material, estado, limpieza, volumen y demanda.",
        bullets: [
          "Precio orientado por material",
          "Condición y separación",
          "Viabilidad de compra",
        ],
        title: "Valorización",
      },
      {
        body: "Definimos recolección, almacenamiento o despacho según ubicación y características del lote.",
        bullets: [
          "Bodega o punto de retiro",
          "Documentación básica",
          "Aliado logístico",
        ],
        title: "Coordinación Logística",
      },
      {
        body: "Alineamos condiciones finales para que la compra o recuperación avance con claridad.",
        bullets: [
          "Confirmación del lote",
          "Condiciones comerciales",
          "Pago y soporte",
        ],
        title: "Cierre y Pago",
      },
      {
        body: "Registramos aprendizajes del lote para mejorar futuras cotizaciones y operaciones recurrentes.",
        bullets: [
          "Evidencia fotográfica",
          "Historial de materiales",
          "Mejora de clasificación",
        ],
        title: "Trazabilidad",
      },
    ],
    routeTitle: "Una Ruta Pensada Para Controlar Antes De Escalar.",
  },
};

function mergeArray<T extends object>(fallbackItems: T[], messageItems?: Partial<T>[]) {
  return (
    messageItems?.map((item, index) => ({
      ...(fallbackItems[index] ?? fallbackItems[0]),
      ...item,
    })) ?? fallbackItems
  );
}

function getCopy(locale: string, messages: WorkMessages): WorkCopy {
  const localeKey = locale === "en" ? "en" : "es";
  const fallback = fallbackCopy[localeKey];
  const work = messages.Pages?.work ?? {};

  return {
    ...fallback,
    ...work,
    continuationItems: mergeArray(
      fallback.continuationItems,
      work.continuationItems,
    ),
    evidenceItems: mergeArray(fallback.evidenceItems, work.evidenceItems),
    heroStats: mergeArray(fallback.heroStats, work.heroStats),
    modelLayers: mergeArray(fallback.modelLayers, work.modelLayers),
    partners: mergeArray(fallback.partners, work.partners),
    routeSteps: mergeArray(fallback.routeSteps, work.routeSteps),
  };
}

const workImages = {
  evidence: {
    alt: "Recovered tungsten carbide parts in industrial drums",
    src: "/countries/estados-unidos/houston/houston-sorted-castings-drums-11.webp",
  },
  hero: {
    alt: "Industrial metal recovery operation in Houston",
    src: "/countries/estados-unidos/houston/houston-industrial-warehouse-05.webp",
  },
  model: {
    alt: "Tagged metal turnings prepared for material review",
    src: "/countries/estados-unidos/houston/houston-metal-turnings-tag-01.webp",
  },
} satisfies Record<string, WorkImage>;

function WorkImagePanel({
  image,
  label,
  minHeight = "min-h-[420px]",
  variant = "light",
}: {
  image: WorkImage;
  label: string;
  minHeight?: string;
  variant?: "light" | "dark";
}) {
  return (
    <div
      aria-label={label}
      className={`relative isolate ${minHeight} overflow-hidden rounded-[4px] border ${
        variant === "dark"
          ? "border-white/15 bg-[var(--gw-ink)]"
          : "border-[#d7dde3] bg-[#edf4f2]"
      }`}
      role="img"
    >
      <Image
        alt={image.alt}
        className="object-cover"
        fill
        sizes="(min-width: 1024px) 620px, 100vw"
        src={image.src}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.82),rgba(15,23,42,0.22)_58%,rgba(15,23,42,0.04))]" />
      <p
        className="absolute bottom-8 left-8 max-w-[300px] text-xs font-bold uppercase tracking-[0.2em] text-white"
      >
        {label}
      </p>
    </div>
  );
}

export async function WorkShowcase() {
  const locale = await getLocale();
  const messages = (await getMessages()) as WorkMessages;
  const copy = getCopy(locale, messages);

  return (
    <>
      <section className="border-b border-[#d7dde3] bg-white" data-aos="fade-up">
        <div className="mx-auto grid min-h-[calc(100svh-var(--gw-nav-h))] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[0.92fr_1.08fr]">
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
            <WorkImagePanel image={workImages.hero} label={copy.heroImageLabel} minHeight="min-h-[520px]" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--gw-sand)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-32" data-aos="fade-up">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
                {copy.routeEyebrow}
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
                {copy.routeTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
                {copy.routeBody}
              </p>
            </div>

            <div className="divide-y divide-[#d7dde3] border-y border-[#d7dde3] bg-white" data-aos="fade-up" data-aos-delay="100">
              {copy.routeSteps.map((step, index) => (
                <article
                  className={`grid gap-6 p-6 sm:grid-cols-[88px_1fr] sm:p-8 ${
                    index === 2 ? "bg-[var(--gw-ink)] text-white" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={String(60 + index * 55)}
                  key={`${step.title}-${index}`}
                >
                  <span
                    className={`text-sm font-bold uppercase tracking-[0.18em] ${
                      index === 2 ? "text-[var(--gw-green)]" : "text-[var(--gw-blue)]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold leading-tight">
                      {step.title}
                    </h3>
                    <p
                      className={`mt-4 max-w-3xl text-base leading-7 ${
                        index === 2 ? "text-white/72" : "text-[var(--color-muted)]"
                      }`}
                    >
                      {step.body}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {step.bullets.map((bullet) => (
                        <span
                          className={`border px-3 py-2 text-xs font-bold ${
                            index === 2
                              ? "border-white/16 text-white/76"
                              : "border-[#d7dde3] text-[var(--gw-ink)]"
                          }`}
                          key={bullet}
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7dde3] bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div data-aos="fade-right">
            <WorkImagePanel image={workImages.model} label={copy.modelImageLabel} minHeight="min-h-[560px]" variant="dark" />
          </div>

          <div data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-blue)]">
              {copy.modelEyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
              {copy.modelTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
              {copy.modelBody}
            </p>
            <div className="mt-9 grid gap-0 border-y border-[#d7dde3]">
              {copy.modelLayers.map((layer, index) => (
                <article
                  className={`grid gap-4 border-b border-[#d7dde3] py-6 last:border-b-0 sm:grid-cols-[128px_1fr] ${
                    index === 1 ? "bg-[#f8fafc] px-5 sm:px-6" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={String(80 + index * 80)}
                  key={`${layer.title}-${index}`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gw-green)]">
                    {layer.label}
                  </p>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--gw-ink)]">
                      {layer.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                      {layer.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--gw-sand)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div className="border-l-4 border-[var(--gw-green)] pl-6 sm:pl-8" data-aos="fade-up">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-blue)]">
                {copy.alliesEyebrow}
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
                {copy.alliesTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] lg:justify-self-end" data-aos="fade-up" data-aos-delay="100">
              {copy.alliesBody}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:auto-rows-fr">
            {copy.partners.map((partner, index) => (
              <a
                className="group flex h-full min-h-[360px] cursor-pointer flex-col justify-between rounded-[4px] border border-[#d7dde3] bg-white p-7 outline-none transition-colors duration-200 hover:border-[var(--gw-blue)] hover:bg-[#f8fafc] focus-visible:ring-2 focus-visible:ring-[var(--gw-blue)] focus-visible:ring-offset-4"
                data-aos="fade-up"
                data-aos-delay={String(80 + index * 80)}
                href={partner.href}
                key={partner.name}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex h-40 items-center justify-center border border-[#e2e8f0] bg-white px-8 py-6">
                  <Image
                    alt={partner.logoAlt}
                    className="h-24 w-72 max-w-full object-contain"
                    height={220}
                    src={partner.logo}
                    width={420}
                  />
                </div>
                <div className="mt-7">
                  <h3 className="text-2xl font-bold text-[var(--gw-ink)]">
                    {partner.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                    {partner.role}
                  </p>
                </div>
                <div className="mt-7 flex items-center justify-between border-t border-[#d7dde3] pt-5">
                  <span className="text-sm font-bold text-[var(--gw-ink)]">
                    {copy.partnerLinkLabel}
                  </span>
                  <span className="grid h-10 w-10 place-items-center border border-[#cbd5e1] text-[var(--gw-blue)] transition-colors duration-200 group-hover:border-[var(--gw-green)] group-hover:bg-[var(--gw-sand)]">
                    <BrandIcon className="h-4 w-4" name="arrowRight" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-blue)]">
              {copy.evidenceEyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
              {copy.evidenceTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
              {copy.evidenceBody}
            </p>
            <div className="mt-10 grid gap-4">
              {copy.evidenceItems.map((item, index) => (
                <article
                  className="border-l-2 border-[var(--gw-green)] bg-[#f8fafc] px-6 py-5"
                  data-aos="fade-up"
                  data-aos-delay={String(80 + index * 80)}
                  key={`${item.title}-${index}`}
                >
                  <h3 className="text-xl font-bold text-[var(--gw-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="140">
            <WorkImagePanel image={workImages.evidence} label={copy.evidenceImageLabel} />
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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="border-l-4 border-[var(--gw-blue)] pl-6 sm:pl-8" data-aos="fade-up">
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

          <div className="grid gap-0 overflow-hidden rounded-[4px] border border-[#d7dde3]" data-aos="fade-up" data-aos-delay="120">
            {copy.continuationItems.map((item, index) => (
              <article
                className="grid gap-4 border-b border-[#d7dde3] p-6 last:border-b-0 sm:grid-cols-[72px_1fr]"
                data-aos="fade-up"
                data-aos-delay={String(160 + index * 70)}
                key={`${item.title}-${index}`}
              >
                <span className="text-sm font-bold text-[var(--gw-blue)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[var(--gw-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">
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
