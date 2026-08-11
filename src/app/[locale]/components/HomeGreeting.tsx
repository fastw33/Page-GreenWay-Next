import { getLocale, getMessages } from "next-intl/server";
import { actionLinkClassName } from "@/components/global/ActionLink";
import { BrandIcon } from "@/components/global/BrandIcons";
import { BrandLottie, type BrandLottieName } from "@/components/global/BrandLottie";
import { Link } from "@/i18n/navigation";

type HomeCardKey = "about" | "work" | "products";

type HomeCardCopy = {
  description: string;
  eyebrow: string;
  title: string;
};

type HomeMessages = {
  Pages?: {
    home?: {
      cards?: Partial<Record<HomeCardKey, Partial<HomeCardCopy>>> & {
        cta?: string;
      };
    };
  };
};

const fallbackCards: Record<"en" | "es", Record<HomeCardKey, HomeCardCopy> & { cta: string }> = {
  en: {
    cta: "View page",
    about: {
      description:
        "4PL service for pickup, warehouses, documentation, partners, consolidation, and international movement when the metal lot requires it.",
      eyebrow: "Logistics service",
      title: "4PL",
    },
    work: {
      description:
        "We identify, sort, value, and recover tungsten, tungsten carbide, alloys, and metal-bearing industrial residues.",
      eyebrow: "Recovery",
      title: "Metal Recovery",
    },
    products: {
      description:
        "We prepare market studies, demand analysis, price context, and opportunity reads for industrial metal decisions.",
      eyebrow: "Market studies",
      title: "Market Intelligence",
    },
  },
  es: {
    cta: "Ver pagina",
    about: {
      description:
        "Servicio 4PL para recolección, bodegas, documentación, aliados, consolidación y movimiento internacional cuando el lote metálico lo requiere.",
      eyebrow: "Servicio logístico",
      title: "4PL",
    },
    work: {
      description:
        "Identificamos, clasificamos, valorizamos y recuperamos tungsteno, carburo de tungsteno, aleaciones y residuos metálicos industriales.",
      eyebrow: "Recuperación",
      title: "Recuperación de metales",
    },
    products: {
      description:
        "Realizamos estudios de mercado, análisis de demanda, contexto de precios y lectura de oportunidad para decisiones industriales.",
      eyebrow: "Estudios de mercado",
      title: "Inteligencia de mercado",
    },
  },
};

const homeCards = [
  {
    href: "/productosservicios",
    key: "about",
    lottie: "technology",
    tone: "green",
    visualClassName: "h-32 w-32 scale-110",
  },
  {
    href: "/productosservicios",
    key: "work",
    lottie: "drillingGears",
    tone: "blue",
    visualClassName: "h-36 w-36 scale-[1.45]",
  },
  {
    href: "/productosservicios",
    key: "products",
    lottie: "marketIntelligence",
    tone: "brand",
    visualClassName: "h-36 w-36 scale-[1.85]",
  },
] as const satisfies Array<{
  href: string;
  key: HomeCardKey;
  lottie: BrandLottieName;
  tone: "brand" | "blue" | "green";
  visualClassName: string;
}>;

export async function HomeGreeting() {
  const locale = await getLocale();
  const messages = (await getMessages()) as HomeMessages;
  const cardMessages = messages.Pages?.home?.cards;
  const fallbackCopy = fallbackCards[locale === "en" ? "en" : "es"];
  const ctaLabel = cardMessages?.cta ?? fallbackCopy.cta;

  function getCardCopy(key: HomeCardKey): HomeCardCopy {
    return {
      description:
        cardMessages?.[key]?.description ?? fallbackCopy[key].description,
      eyebrow: cardMessages?.[key]?.eyebrow ?? fallbackCopy[key].eyebrow,
      title: cardMessages?.[key]?.title ?? fallbackCopy[key].title,
    };
  }

  return (
    <section
      className="border-y border-[var(--color-border)] bg-[#f8fafc] px-6 py-24"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-3">
          {homeCards.map((card, index) => {
            const cardCopy = getCardCopy(card.key);

            return (
              <Link
                className="group relative flex min-h-[340px] cursor-pointer flex-col justify-between overflow-hidden rounded-[2px] border border-[#cbd5e1] bg-white p-0 shadow-[0_14px_34px_rgba(15,23,42,0.07)] outline-none transition-colors duration-200 hover:border-[var(--gw-blue)] hover:bg-white focus-visible:ring-2 focus-visible:ring-[var(--gw-blue)] focus-visible:ring-offset-4"
                data-aos="fade-up"
                data-aos-delay={String(160 + index * 90)}
                href={card.href}
                key={card.key}
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1.5 ${
                    card.tone === "green"
                      ? "bg-[var(--gw-green)]"
                      : card.tone === "blue"
                        ? "bg-[var(--gw-blue)]"
                        : "bg-[var(--gw-grad-brand-90)]"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-full w-12 bg-[var(--gw-grad-brand-135)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
                <div>
                  <div className="relative border-b border-[#dbe3ea] bg-[#eef4f2] px-7 py-8">
                    <div className="grid min-h-[150px] grid-cols-[132px_1fr] items-center gap-6">
                      <div className="flex h-32 w-32 items-center justify-center overflow-visible">
                        <BrandLottie
                          className={`origin-center ${card.visualClassName}`}
                          name={card.lottie}
                        />
                      </div>
                      <div className="relative z-10">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--gw-blue)]">
                          {cardCopy.eyebrow}
                        </p>
                        <h2 className="text-2xl font-semibold leading-tight text-[var(--gw-ink)]">
                          {cardCopy.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-sm leading-7 text-[var(--color-muted)]">
                      {cardCopy.description}
                    </p>
                  </div>
                </div>
                <div className="border-t border-[#dbe3ea] p-7 pt-5">
                  <span
                    className={actionLinkClassName(
                      "secondary",
                      "pointer-events-none min-h-10 px-4 py-2.5",
                    )}
                  >
                    <span>{ctaLabel}</span>
                    <BrandIcon className="h-4 w-4" name="arrowRight" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
