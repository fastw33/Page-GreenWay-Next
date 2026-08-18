import type { Metadata, MetadataRoute } from "next";
import {
  getSeoLandingPageBySlug,
  seoLandingPages,
  type SeoLandingPage,
} from "@/config/seoLandings";

export type Locale = "es" | "en";
export type SeoPage =
  | "home"
  | "about"
  | "work"
  | "products"
  | "contact"
  | "privacy"
  | "terms"
  | "pqrs";
export type MaterialPageKey = "tungsten" | "tungsten-carbide";

const fallbackSiteUrl = "https://www.greenwayinter.com";

export const siteBaseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl
).replace(/\/$/, "");

const defaultLocale: Locale = "es";

const siteName = "Green Way International";
const ogImage = "/brand/greenway-logo-full-transparent.png";
const googleSiteVerification = "KM2DSOQXaEkwlQMlLRfTRDkasnEaZgbtaOT1lx6T7dA";

const baseKeywords: Record<Locale, string[]> = {
  es: [
    "tungsteno",
    "cotizar tungsteno",
    "comprador final de tungsteno",
    "wolframio",
    "wolfram",
    "cotizar wolframio",
    "comprador final de wolframio",
    "carburo de tungsteno",
    "carburo de wolframio",
    "compra de tungsteno",
    "compra de wolframio",
    "compramos tungsteno",
    "compramos wolframio",
    "compra de carburo de tungsteno",
    "compra de carburo de wolframio",
    "compramos carburo de wolframio",
    "cotizar carburo de tungsteno",
    "comprador final de carburo de tungsteno",
    "recuperacion de tungsteno",
    "recuperacion de wolframio",
    "recuperacion de carburo de tungsteno",
    "chatarra de tungsteno",
    "chatarra de wolframio",
    "chatarra de carburo de tungsteno",
    "residuos de tungsteno",
    "residuos de wolframio",
    "lodos de carburo",
    "lodos de carburo de tungsteno",
    "insertos de carburo",
    "insertos de carburo de tungsteno",
    "brocas de tungsteno",
    "brocas de carburo de tungsteno",
    "metales industriales",
    "recuperacion de metales",
    "compra de metales industriales",
    "servicio 4PL",
    "logistica 4PL",
    "inteligencia de mercado metales",
    "estudios de mercado metales",
    "inteligencia comercial metales",
    "aleaciones especiales",
    "niquel",
    "cobalto",
    "titanio",
    "molibdeno",
    "inconel",
    "monel",
    "hastelloy",
    "acero inoxidable",
    "metales no ferrosos",
  ],
  en: [
    "tungsten",
    "wolfram",
    "wolframio",
    "tungsten carbide",
    "wolfram carbide",
    "buy tungsten",
    "buy wolfram",
    "we buy tungsten",
    "we buy wolfram",
    "buy tungsten carbide",
    "tungsten recovery",
    "tungsten carbide recovery",
    "tungsten scrap",
    "tungsten residues",
    "carbide sludge",
    "carbide inserts",
    "tungsten drill bits",
    "industrial metals",
    "metal recovery",
    "industrial metal purchasing",
    "4PL logistics",
    "4PL service",
    "market intelligence metals",
    "market studies metals",
    "commercial intelligence metals",
    "specialty alloys",
    "nickel",
    "cobalt",
    "titanium",
    "molybdenum",
    "inconel",
    "monel",
    "hastelloy",
    "stainless steel",
    "non-ferrous metals",
  ],
};

const pageSeo: Record<
  SeoPage,
  Record<Locale, { description: string; path: string; title: string }>
> = {
  home: {
    es: {
      description:
        "Compra, evaluacion y recuperacion de tungsteno, carburo de tungsteno, aleaciones especiales y metales industriales con trazabilidad internacional.",
      path: "",
      title: "Compra De Tungsteno y Carburo De Tungsteno",
    },
    en: {
      description:
        "Buying, evaluation, and recovery of tungsten, wolfram, tungsten carbide, specialty alloys, and industrial metals with international traceability.",
      path: "",
      title: "Tungsten and Tungsten Carbide Buying",
    },
  },
  about: {
    es: {
      description:
        "Green Way International recupera tungsteno, carburo de tungsteno y metales industriales con presencia por pais, ciudades operativas y aliados comerciales.",
      path: "/about",
      title: "Expertos En Recuperacion De Tungsteno y Metales",
    },
    en: {
      description:
        "Green Way International recovers tungsten, wolfram, tungsten carbide, and industrial metals with country presence, operating cities, and commercial partners.",
      path: "/about",
      title: "Experts In Tungsten and Metal Recovery",
    },
  },
  work: {
    es: {
      description:
        "Proceso para cotizar, comprar y recuperar tungsteno, carburo de tungsteno, aleaciones especiales y residuos metalicos industriales.",
      path: "/comotrabajamos",
      title: "Como Compramos y Recuperamos Metales",
    },
    en: {
      description:
        "Process to quote, buy, and recover tungsten, wolfram, tungsten carbide, specialty alloys, and industrial metal-bearing residues.",
      path: "/comotrabajamos",
      title: "How We Buy and Recover Metals",
    },
  },
  products: {
    es: {
      description:
        "Compramos y recuperamos tungsteno, carburo de tungsteno, aleaciones especiales y residuos metalicos con soporte 4PL, recuperacion de metales e inteligencia de mercado.",
      path: "/productosservicios",
      title: "Tungsteno y Carburo De Tungsteno",
    },
    en: {
      description:
        "We buy and recover tungsten, wolfram, tungsten carbide, specialty alloys, and metal-bearing residues with 4PL service, metal recovery, and market intelligence.",
      path: "/productosservicios",
      title: "Tungsten and Tungsten Carbide",
    },
  },
  contact: {
    es: {
      description:
        "Contacta a Green Way para cotizar, comprar y coordinar recuperacion de tungsteno, carburo de tungsteno, chatarra industrial, lodos, insertos y aleaciones especiales.",
      path: "/contacto",
      title: "Cotizar Tungsteno y Metales Industriales",
    },
    en: {
      description:
        "Contact Green Way to quote, buy, and coordinate recovery for tungsten, wolfram, tungsten carbide, industrial scrap, sludge, inserts, and specialty alloys.",
      path: "/contacto",
      title: "Quote Tungsten and Industrial Metals",
    },
  },
  privacy: {
    es: {
      description:
        "Politica de privacidad de Green Way International para el manejo de datos recibidos desde el sitio web, formularios y canales comerciales.",
      path: "/politica-de-privacidad",
      title: "Politica De Privacidad",
    },
    en: {
      description:
        "Green Way International privacy policy for information received through the website, forms, and business contact channels.",
      path: "/privacy-policy",
      title: "Privacy Policy",
    },
  },
  terms: {
    es: {
      description:
        "Terminos y condiciones generales de uso del sitio web y comunicaciones comerciales de Green Way International.",
      path: "/terminos-y-condiciones",
      title: "Terminos Y Condiciones",
    },
    en: {
      description:
        "General terms and conditions for Green Way International website use and business communications.",
      path: "/terms-and-conditions",
      title: "Terms And Conditions",
    },
  },
  pqrs: {
    es: {
      description:
        "Canal PQRS de Green Way International para peticiones, quejas, reclamos y sugerencias relacionadas con la atencion comercial.",
      path: "/pqrs",
      title: "PQRS",
    },
    en: {
      description:
        "Green Way International PQRS channel for petitions, complaints, claims, and suggestions related to business attention.",
      path: "/pqrs",
      title: "PQRS",
    },
  },
};

const countryRoutes = [
  {
    enDescription:
      "United States operations for tungsten, wolfram, tungsten carbide, specialty alloys, turnings, process residues, and industrial metal recovery.",
    enLabel: "United States",
    enSlug: "united-states",
    esDescription:
      "Operaciones en Estados Unidos para tungsteno, carburo de tungsteno, aleaciones especiales, turnings, residuos de proceso y recuperacion de metales industriales.",
    esLabel: "Estados Unidos",
    esSlug: "estados-unidos",
    key: "united-states",
    priority: 0.82,
  },
  {
    enDescription:
      "Miami warehouse logistics for receiving, staging, truck loading, and international movement of industrial metal materials.",
    enLabel: "Miami",
    enSlug: "miami",
    esDescription:
      "Bodega logistica en Miami para recepcion, alistamiento, cargue de camiones y movimiento internacional de materiales metalicos industriales.",
    esLabel: "Miami",
    esSlug: "miami",
    key: "miami",
    priority: 0.72,
  },
  {
    enDescription:
      "Colombia coverage for direct buying, evaluation, and recovery of tungsten, wolfram, tungsten carbide, and industrial metals through Metal Harvest.",
    enLabel: "Colombia",
    enSlug: "colombia",
    esDescription:
      "Cobertura en Colombia para compra directa, evaluacion y recuperacion de tungsteno, carburo de tungsteno y metales industriales a traves de Metal Harvest.",
    esLabel: "Colombia",
    esSlug: "colombia",
    key: "colombia",
    priority: 0.82,
  },
  {
    enDescription:
      "Bogota operating context for matrix drill bits, tungsten inserts, wear materials, and technical evaluation for industrial metal recovery.",
    enLabel: "Bogota",
    enSlug: "bogota",
    esDescription:
      "Bogota como contexto operativo para brocas matriz, insertos de tungsteno, materiales de desgaste y evaluacion tecnica para recuperacion de metales industriales.",
    esLabel: "Bogota",
    esSlug: "bogota",
    key: "bogota",
    priority: 0.72,
  },
  {
    enDescription:
      "Medellin relationship hub for industrial metal recovery, tungsten and wolfram opportunities, tungsten carbide materials, and technical metal purchasing.",
    enLabel: "Medellin",
    enSlug: "medellin",
    esDescription:
      "Medellin como plaza de relacionamiento para recuperacion de metales industriales, oportunidades de tungsteno, carburo de tungsteno y compra tecnica de metales.",
    esLabel: "Medellin",
    esSlug: "medellin",
    key: "medellin",
    priority: 0.72,
  },
  {
    enDescription:
      "Chile context for wear parts, mining materials, tungsten, tungsten carbide, steels, and recoverable industrial metal lots.",
    enLabel: "Chile",
    enSlug: "chile",
    esDescription:
      "Chile como contexto para piezas de desgaste, materiales mineros, tungsteno, carburo de tungsteno, aceros y lotes metalicos industriales recuperables.",
    esLabel: "Chile",
    esSlug: "chile",
    key: "chile",
    priority: 0.72,
  },
  {
    enDescription:
      "Spain operating presence for stainless steels, specialty alloys, non-ferrous metals, tungsten, tungsten carbide, and industrial lot handling.",
    enLabel: "Spain",
    enSlug: "spain",
    esDescription:
      "Presencia operativa en Espana para inoxidables, aleaciones especiales, no ferrosos, tungsteno, carburo de tungsteno y manejo de lotes industriales.",
    esLabel: "Espana",
    esSlug: "espana",
    key: "spain",
    priority: 0.72,
  },
  {
    enDescription:
      "Italy industrial context for machined parts, equipment, specialty alloys, tungsten, tungsten carbide, and metal recovery opportunities.",
    enLabel: "Italy",
    enSlug: "italy",
    esDescription:
      "Italia como contexto industrial para piezas mecanizadas, equipos, aleaciones especiales, tungsteno, carburo de tungsteno y oportunidades de recuperacion metalica.",
    esLabel: "Italia",
    esSlug: "italia",
    key: "italy",
    priority: 0.72,
  },
  {
    enDescription:
      "Houston, Texas metal recovery documentation for turnings, drums, tungsten-bearing residues, tungsten carbide lots, and specialty alloys.",
    enLabel: "Houston, Texas",
    enSlug: "houston",
    esDescription:
      "Documentacion de recuperacion de metales en Houston, Texas: turnings, tambores, residuos con tungsteno, lotes de carburo de tungsteno y aleaciones especiales.",
    esLabel: "Houston, Texas",
    esSlug: "houston",
    key: "houston",
    priority: 0.78,
  },
  {
    enDescription:
      "Madisonville, Kentucky technical lots for tungsten carbide, wear materials, sludge, full grind clippings, and recovered industrial metals.",
    enLabel: "Madisonville, Kentucky",
    enSlug: "madisonville",
    esDescription:
      "Lotes tecnicos en Madisonville, Kentucky para carburo de tungsteno, materiales de desgaste, lodos, full grind clippings y metales industriales recuperados.",
    esLabel: "Madisonville, Kentucky",
    esSlug: "madisonville",
    key: "madisonville",
    priority: 0.78,
  },
  {
    enDescription:
      "Silicon Valley relationship experience connected to technology, traceability, metal recovery, tungsten, and industrial market access.",
    enLabel: "Silicon Valley",
    enSlug: "silicon-valley",
    esDescription:
      "Experiencia de relacionamiento en Silicon Valley conectada con tecnologia, trazabilidad, recuperacion de metales, tungsteno y acceso a mercado industrial.",
    esLabel: "Silicon Valley",
    esSlug: "silicon-valley",
    key: "silicon-valley",
    priority: 0.62,
  },
] as const;

export const materialRoutes = [
  {
    enDescription:
      "Informational page for companies with tungsten or wolfram available for quote: Green Way buys tungsten, evaluates industrial lots, pays, and coordinates recovery.",
    enSlug: "tungsten",
    esDescription:
      "Pagina SEO para cotizar tungsteno o wolframio: Green Way compra tungsteno como comprador final, evalua lotes industriales, paga y coordina recuperacion.",
    esSlug: "tungsteno",
    key: "tungsten",
    priority: 0.96,
    title: {
      en: "Tungsten buying and recovery",
      es: "Compra de tungsteno y wolframio",
    },
  },
  {
    enDescription:
      "Informational page for tungsten carbide and wolfram carbide scrap: Green Way buys tungsten carbide inserts, drill bits, wear parts, sludge, and industrial residues.",
    enSlug: "tungsten-carbide",
    esDescription:
      "Pagina SEO para cotizar chatarra de carburo de tungsteno o carburo de wolframio: Green Way compra insertos, brocas, lodos, piezas de desgaste y residuos industriales como comprador final.",
    esSlug: "carburo-de-tungsteno",
    key: "tungsten-carbide",
    priority: 0.98,
    title: {
      en: "Tungsten carbide buying",
      es: "Compra de carburo de tungsteno y carburo de wolframio",
    },
  },
] as const;

export function normalizeLocale(locale: string): Locale {
  return locale === "en" ? "en" : defaultLocale;
}

export function localizedPath(locale: Locale, path = "") {
  const cleanPath =
    path === "" || path === "/" ? "" : `/${path.replace(/^\/+/, "")}`;

  if (locale === defaultLocale) {
    return cleanPath || "/";
  }

  return cleanPath ? `/en${cleanPath}` : "/en";
}

export function absoluteUrl(path = "") {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${siteBaseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function getLanguageAlternates(path: string) {
  return {
    en: absoluteUrl(localizedPath("en", path)),
    es: absoluteUrl(localizedPath("es", path)),
    "x-default": absoluteUrl(localizedPath("es", path)),
  };
}

function getPageAlternates(page: SeoPage) {
  const esPath = pageSeo[page].es.path;
  const enPath = pageSeo[page].en.path;

  return {
    en: absoluteUrl(localizedPath("en", enPath)),
    es: absoluteUrl(localizedPath("es", esPath)),
    "x-default": absoluteUrl(localizedPath("es", esPath)),
  };
}

function buildMetadata({
  description,
  locale,
  path,
  title,
  keywords = [],
}: {
  description: string;
  keywords?: string[];
  locale: Locale;
  path: string;
  title: string;
}): Metadata {
  const mergedKeywords = Array.from(
    new Set([...baseKeywords[locale], ...keywords]),
  );
  const canonical = localizedPath(locale, path);

  return {
    applicationName: siteName,
    authors: [{ name: siteName, url: siteBaseUrl }],
    category: "Industrial metal recovery",
    creator: siteName,
    description,
    keywords: mergedKeywords,
    metadataBase: new URL(siteBaseUrl),
    openGraph: {
      description,
      images: [
        {
          alt:
            locale === "en"
              ? "Green Way International tungsten and industrial metal recovery"
              : "Green Way International recuperacion de tungsteno y metales industriales",
          height: 630,
          url: ogImage,
          width: 1200,
        },
      ],
      locale: locale === "en" ? "en_US" : "es_CO",
      siteName,
      title,
      type: "website",
      url: canonical,
    },
    publisher: siteName,
    referrer: "origin-when-cross-origin",
    robots: {
      follow: true,
      googleBot: {
        follow: true,
        index: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
      index: true,
    },
    title,
    twitter: {
      card: "summary_large_image",
      description,
      images: [ogImage],
      title,
    },
    verification: {
      google: googleSiteVerification,
    },
    alternates: {
      canonical,
      languages: getLanguageAlternates(path),
    },
  };
}

export function getRootMetadata(localeInput: string): Metadata {
  const locale = normalizeLocale(localeInput);
  const home = pageSeo.home[locale];

  return {
    ...buildMetadata({
      description: home.description,
      locale,
      path: home.path,
      title: siteName,
    }),
    title: {
      default: `${home.title} | ${siteName}`,
      template: `%s | ${siteName}`,
    },
  };
}

export function getPageMetadata(
  localeInput: string,
  page: SeoPage,
): Metadata {
  const locale = normalizeLocale(localeInput);
  const seo = pageSeo[page][locale];

  return {
    ...buildMetadata({
      description: seo.description,
      keywords:
        page === "products"
          ? locale === "en"
            ? ["tungsten carbide scrap", "carbide recycling", "buy carbide"]
            : [
                "chatarra de carburo de tungsteno",
                "reciclaje de carburo",
                "comprar carburo",
              ]
          : undefined,
      locale,
      path: seo.path,
      title: seo.title,
    }),
    alternates: {
      canonical: localizedPath(locale, seo.path),
      languages: getPageAlternates(page),
    },
  };
}

function findCountryRoute(slug: string) {
  return countryRoutes.find(
    (route) => route.esSlug === slug || route.enSlug === slug,
  );
}

export function getMaterialRouteBySlug(slug: string) {
  return materialRoutes.find(
    (route) => route.esSlug === slug || route.enSlug === slug,
  );
}

function getMaterialAlternates(route: (typeof materialRoutes)[number]) {
  return {
    en: absoluteUrl(localizedPath("en", `/${route.enSlug}`)),
    es: absoluteUrl(localizedPath("es", `/${route.esSlug}`)),
    "x-default": absoluteUrl(localizedPath("es", `/${route.esSlug}`)),
  };
}

function getSeoLandingAlternates(route: SeoLandingPage) {
  return {
    en: absoluteUrl(localizedPath("en", `/${route.enSlug}`)),
    es: absoluteUrl(localizedPath("es", `/${route.esSlug}`)),
    "x-default": absoluteUrl(localizedPath("es", `/${route.esSlug}`)),
  };
}

export function getMaterialMetadata(
  localeInput: string,
  slug: string,
): Metadata {
  const locale = normalizeLocale(localeInput);
  const route = getMaterialRouteBySlug(slug);

  if (!route) {
    const landing = getSeoLandingPageBySlug(slug);

    if (!landing) {
      return getPageMetadata(locale, "products");
    }

    const activeSlug = locale === "en" ? landing.enSlug : landing.esSlug;
    const description =
      locale === "en" ? landing.enDescription : landing.esDescription;

    return {
      ...buildMetadata({
        description,
        keywords: landing.keywords[locale],
        locale,
        path: `/${activeSlug}`,
        title: landing.title[locale],
      }),
      alternates: {
        canonical: localizedPath(locale, `/${activeSlug}`),
        languages: getSeoLandingAlternates(landing),
      },
    };
  }

  const activeSlug = locale === "en" ? route.enSlug : route.esSlug;
  const title = route.title[locale];
  const description =
    locale === "en" ? route.enDescription : route.esDescription;

  return {
    ...buildMetadata({
      description,
      keywords:
        route.key === "tungsten-carbide"
          ? locale === "en"
            ? [
                "tungsten carbide scrap",
                "buy tungsten carbide scrap",
                "carbide inserts",
                "carbide drill bits",
                "carbide sludge",
              ]
            : [
                "chatarra de carburo de tungsteno",
                "chatarra de carburo de wolframio",
                "compramos carburo de tungsteno",
                "compramos carburo de wolframio",
                "compra de carburo de wolframio",
                "cotizar carburo de wolframio",
                "comprador final de carburo de tungsteno",
                "insertos de carburo de tungsteno",
                "brocas de carburo de tungsteno",
                "lodos de carburo de tungsteno",
              ]
          : locale === "en"
            ? [
                "quote tungsten",
                "quote wolfram",
                "tungsten buyers",
                "wolfram buyers",
                "tungsten metal recovery",
                "wolfram metal recovery",
                "tungsten industrial scrap",
                "wolfram industrial scrap",
              ]
            : [
                "cotizar tungsteno",
                "cotizar wolframio",
                "compramos wolframio",
                "compradores de tungsteno",
                "comprador final de tungsteno",
                "comprador final de wolframio",
                "recuperacion de tungsteno",
                "recuperacion de wolframio",
                "chatarra industrial de tungsteno",
                "chatarra industrial de wolframio",
              ],
      locale,
      path: `/${activeSlug}`,
      title,
    }),
    alternates: {
      canonical: localizedPath(locale, `/${activeSlug}`),
      languages: getMaterialAlternates(route),
    },
  };
}

function getCountryAlternates(route: (typeof countryRoutes)[number]) {
  return {
    en: absoluteUrl(localizedPath("en", `/about/${route.enSlug}`)),
    es: absoluteUrl(localizedPath("es", `/about/${route.esSlug}`)),
    "x-default": absoluteUrl(localizedPath("es", `/about/${route.esSlug}`)),
  };
}

export function getCountryMetadata(
  localeInput: string,
  slug: string,
): Metadata {
  const locale = normalizeLocale(localeInput);
  const route = findCountryRoute(slug);

  if (!route) {
    return getPageMetadata(locale, "about");
  }

  const label = locale === "en" ? route.enLabel : route.esLabel;
  const description =
    locale === "en" ? route.enDescription : route.esDescription;
  const activeSlug = locale === "en" ? route.enSlug : route.esSlug;
  const title =
    locale === "en"
      ? `${label}: tungsten and tungsten carbide recovery`
      : `${label}: recuperacion de tungsteno y carburo de tungsteno`;

  return {
    ...buildMetadata({
      description,
      keywords: [label, route.key],
      locale,
      path: `/about/${activeSlug}`,
      title,
    }),
    alternates: {
      canonical: localizedPath(locale, `/about/${activeSlug}`),
      languages: getCountryAlternates(route),
    },
  };
}

export function getOrganizationJsonLd(localeInput: string) {
  const locale = normalizeLocale(localeInput);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": `${siteBaseUrl}/#organization`,
        "@type": "Organization",
        address: [
          {
            "@type": "PostalAddress",
            addressCountry: "US",
            addressLocality: "Medley",
            addressRegion: "FL",
            postalCode: "33178",
            streetAddress: "10049 NW 89th Ave unit 4",
          },
          {
            "@type": "PostalAddress",
            addressCountry: "CO",
            addressLocality: "Bogota",
            streetAddress: "Cra. 129 #17f-74",
          },
        ],
        areaServed: [
          "United States",
          "Peru",
          "Chile",
          "Ecuador",
          "Bolivia",
          "Argentina",
          "Panama",
          "Uruguay",
          "Paraguay",
          "Venezuela",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            areaServed: ["US", "LATAM"],
            contactType:
              locale === "en"
                ? "Industrial metal purchasing"
                : "Compra de metales industriales",
            telephone: "+1-786-661-0046",
          },
          {
            "@type": "ContactPoint",
            areaServed: ["CO", "LATAM"],
            contactType:
              locale === "en"
                ? "Industrial metal purchasing"
                : "Compra de metales industriales",
            telephone: "+57-314-300-2760",
          },
        ],
        description:
          locale === "en"
            ? "Green Way International buys, evaluates, and recovers tungsten, wolfram, tungsten carbide, specialty alloys, and industrial metals."
            : "Green Way International compra, evalua y recupera tungsteno, carburo de tungsteno, aleaciones especiales y metales industriales.",
        legalName: "Green Way International LLC",
        knowsAbout: baseKeywords[locale],
        logo: absoluteUrl("/brand/greenway-logo-full-transparent.png"),
        name: siteName,
        telephone: "+1-786-661-0046",
        sameAs: ["https://www.instagram.com/greenwayllc/"],
        url: siteBaseUrl,
      },
      {
        "@id": `${siteBaseUrl}/#website`,
        "@type": "WebSite",
        inLanguage: locale === "en" ? "en-US" : "es-CO",
        name: siteName,
        publisher: {
          "@id": `${siteBaseUrl}/#organization`,
        },
        url: siteBaseUrl,
      },
      {
        "@id": `${siteBaseUrl}/#services`,
        "@type": "OfferCatalog",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name:
                locale === "en"
                  ? "Tungsten, wolfram, and tungsten carbide buying"
                  : "Compra de tungsteno y carburo de tungsteno",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name:
                locale === "en"
                  ? "Industrial metal recovery"
                  : "Recuperacion de metales industriales",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name:
                locale === "en"
                  ? "Specialty alloy valuation"
                  : "Valorizacion de aleaciones especiales",
            },
          },
        ],
        name:
          locale === "en"
            ? "Metal recovery services"
            : "Servicios de recuperacion de metales",
      },
    ],
  };
}

export function getSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-10T00:00:00.000Z");
  const basePages: SeoPage[] = [
    "home",
    "about",
    "work",
    "products",
    "contact",
    "privacy",
    "terms",
    "pqrs",
  ];

  const pageEntries = basePages.flatMap((page) => {
    return (["es", "en"] as const).map((locale) => ({
      alternates: {
        languages: getPageAlternates(page),
      },
      changeFrequency: "weekly" as const,
      lastModified,
      priority:
        page === "home"
          ? 1
          : page === "products"
            ? 0.94
            : page === "privacy" || page === "terms" || page === "pqrs"
              ? 0.42
              : 0.86,
      url: absoluteUrl(localizedPath(locale, pageSeo[page][locale].path)),
    }));
  });

  const countryEntries = countryRoutes.flatMap((route) =>
    (["es", "en"] as const).map((locale) => {
      const slug = locale === "en" ? route.enSlug : route.esSlug;

      return {
        alternates: {
          languages: getCountryAlternates(route),
        },
        changeFrequency: "monthly" as const,
        lastModified,
        priority: route.priority,
        url: absoluteUrl(localizedPath(locale, `/about/${slug}`)),
      };
    }),
  );

  const materialEntries = materialRoutes.flatMap((route) =>
    (["es", "en"] as const).map((locale) => {
      const slug = locale === "en" ? route.enSlug : route.esSlug;

      return {
        alternates: {
          languages: getMaterialAlternates(route),
        },
        changeFrequency: "weekly" as const,
        lastModified,
        priority: route.priority,
        url: absoluteUrl(localizedPath(locale, `/${slug}`)),
      };
    }),
  );

  const landingEntries = seoLandingPages.flatMap((route) =>
    (["es", "en"] as const).map((locale) => {
      const slug = locale === "en" ? route.enSlug : route.esSlug;

      return {
        alternates: {
          languages: getSeoLandingAlternates(route),
        },
        changeFrequency: "weekly" as const,
        lastModified,
        priority: route.priority,
        url: absoluteUrl(localizedPath(locale, `/${slug}`)),
      };
    }),
  );

  return [
    ...pageEntries,
    ...countryEntries,
    ...materialEntries,
    ...landingEntries,
  ];
}
