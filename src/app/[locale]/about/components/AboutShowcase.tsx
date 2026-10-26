import { ActionLink } from "@/components/global/ActionLink";
import { BrandIcon, type BrandIconName } from "@/components/global/BrandIcons";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale, getMessages } from "next-intl/server";
import styles from "./AboutShowcase.module.css";

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
    <div className={styles.about}>
      <section className={styles.hero}>
        <Image
          alt={heroPrimaryImage.imageAlt ?? heroPrimaryImage.imageLabel}
          className={styles.heroImage}
          fill
          fetchPriority="high"
          loading="eager"
          quality={75}
          sizes="100vw"
          src={heroPrimaryImage.image ?? "/countries/estados-unidos/houston/houston-warehouse-storage-03.webp"}
        />
        <div className={styles.container}>
          <div data-aos="fade-up">
            <p className={styles.eyebrow}>Green Way International</p>
            <h1>{copy.title}</h1>
            <p className={styles.heroSummary}>{copy.introTitle}</p>
            <ActionLink href="/contacto" variant="solid">{copy.cta}</ActionLink>
          </div>
        </div>
      </section>

      <dl className={`${styles.container} ${styles.stats}`}>
        {copy.stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.intro}`}>
          <div data-aos="fade-up">
            <p className={styles.eyebrow}>{copy.introEyebrow}</p>
            <h2 className={styles.title}>{copy.proofTitle}</h2>
            <p className={styles.body}>{copy.introBody}</p>
          </div>
          <div className={styles.introPhoto} data-aos="fade-up" data-aos-delay="100">
            <Image
              alt={heroSecondaryImage.imageAlt ?? heroSecondaryImage.imageLabel}
              className={styles.photo}
              fill
              sizes="(min-width: 1024px) 520px, (min-width: 640px) 80vw, 100vw"
              src={heroSecondaryImage.image ?? "/countries/colombia/medellin/medellin-greentech-booth-07.webp"}
            />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.muted}`}>
        <div className={styles.container}>
          <div data-aos="fade-up">
            <p className={styles.eyebrow}>{copy.operatingEyebrow}</p>
            <h2 className={styles.title}>{copy.operatingTitle}</h2>
            <p className={styles.body}>{copy.operatingBody}</p>
          </div>
          <div className={styles.operating}>
            {copy.operatingItems.map((item, index) => (
              <article data-aos="fade-up" data-aos-delay={String(index * 80)} key={item.title}>
                <div className={styles.step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <BrandIcon className="h-6 w-6" name={operatingIcons[index] ?? "process"} />
                </div>
                <h3>{item.title}</h3>
                <p className={styles.body}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="presencia">
        <div className={styles.container}>
          <div data-aos="fade-up">
            <p className={styles.eyebrow}>{copy.countriesTitle}</p>
            <h2 className={styles.title}>{copy.experienceTitle}</h2>
            <p className={styles.body}>{copy.proofBody}</p>
          </div>
          <div className={styles.countries}>
            {copy.countryItems.map((item, index) => (
              <Link
                aria-label={item.title}
                className={styles.country}
                data-aos="fade-up"
                data-aos-delay={String((index % 3) * 60)}
                href={item.href}
                key={item.slug}
              >
                {item.image ? (
                  <Image
                    alt={item.imageAlt ?? item.imageLabel}
                    className={styles.photo}
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 800px, 100vw" : "(min-width: 1024px) 390px, (min-width: 640px) 50vw, 100vw"}
                    src={item.image}
                  />
                ) : null}
                <p className={styles.eyebrow}>{item.meta}</p>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <div className={styles.countryAction}>
                  <span>{locale === "en" ? "Explore our presence" : "Conoce nuestra presencia"}</span>
                  <BrandIcon className="h-4 w-4 shrink-0" name="arrowRight" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.muted}`}>
        <div className={`${styles.container} ${styles.capabilities}`}>
          <div className={styles.capabilityIntro}>
            <p className={styles.eyebrow}>{locale === "en" ? "Operational depth" : "Profundidad operativa"}</p>
            <h2 className={styles.title}>
              {locale === "en"
                ? "4PL service and market studies support the metal purchase."
                : "4PL y estudios de mercado al servicio de la compra de metales."}
            </h2>
            <p className={styles.body}>
              {locale === "en"
                ? "The priority is still the recoverable material. These capabilities help us make the purchase executable, informed, and traceable when the lot requires it."
                : "La prioridad sigue siendo el material recuperable. Estas capacidades ayudan a que la compra sea ejecutable, informada y trazable cuando el lote lo requiere."}
            </p>
          </div>
          <div>
            <article className={styles.capability} data-aos="fade-up">
              <p className={styles.eyebrow}>{capabilityCopy.logistics.eyebrow}</p>
              <h3>{capabilityCopy.logistics.title}</h3>
              <p className={styles.body}>{capabilityCopy.logistics.body}</p>
              <div className={styles.capabilityList}>
                {capabilityCopy.logistics.items.map((item) => (
                  <div key={item.title}>
                    <BrandIcon className="h-5 w-5 text-[var(--gw-green)]" name={item.icon as BrandIconName} />
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className={styles.capability} data-aos="fade-up">
              <p className={styles.eyebrow}>{capabilityCopy.market.eyebrow}</p>
              <h3>{capabilityCopy.market.title}</h3>
              <p className={styles.body}>{capabilityCopy.market.body}</p>
              <ul className={styles.marketList}>
                {capabilityCopy.market.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.intro}`}>
          <div className={styles.materialPhoto} data-aos="fade-up">
            <Image
              alt={copy.footerBufferImageLabel}
              className={styles.photo}
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              src="/countries/estados-unidos/houston/houston-metal-turnings-tag-01.webp"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <p className={styles.eyebrow}>{copy.footerBufferEyebrow}</p>
            <h2 className={styles.title}>{copy.footerBufferTitle}</h2>
            <p className={styles.body}>{copy.footerBufferBody}</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.closing}`}>
        <div className={`${styles.container} ${styles.closingContent}`}>
          <div data-aos="fade-up">
            <p className={styles.eyebrow}>{copy.closingEyebrow}</p>
            <h2 className={styles.title}>{copy.closingTitle}</h2>
          </div>
          <ActionLink className="shrink-0" href="/contacto" variant="solid">{copy.cta}</ActionLink>
        </div>
      </section>
    </div>
  );
}
