import Image from "next/image";
import { getLocale, getMessages } from "next-intl/server";

type AllyItem = {
  href: string;
  logo: string;
  logoAlt: string;
  name: string;
};

type AlliesCopy = {
  eyebrow: string;
  items: AllyItem[];
  title: string;
};

type AlliesMessages = {
  Pages?: {
    home?: {
      allies?: {
        eyebrow?: string;
        items?: Array<Partial<AllyItem>>;
        title?: string;
      };
    };
  };
};

const fallbackItems: Record<"en" | "es", AllyItem[]> = {
  en: [
    {
      href: "https://www.fastwaysas.com/",
      logo: "/allies/fastway.webp",
      logoAlt: "Fastway Logistic SAS logo",
      name: "Fastway Logistic SAS",
    },
    {
      href: "https://metalharvest.io/",
      logo: "/allies/metal-harvest.webp",
      logoAlt: "Metal Harvest logo",
      name: "Metal Harvest",
    },
    {
      href: "https://tlimiami.com/",
      logo: "/allies/transport-logistic.webp",
      logoAlt: "Transport Logistic International logo",
      name: "Transport Logistic International",
    },
  ],
  es: [
    {
      href: "https://www.fastwaysas.com/",
      logo: "/allies/fastway.webp",
      logoAlt: "Logo de Fastway Logistic SAS",
      name: "Fastway Logistic SAS",
    },
    {
      href: "https://metalharvest.io/",
      logo: "/allies/metal-harvest.webp",
      logoAlt: "Logo de Metal Harvest",
      name: "Metal Harvest",
    },
    {
      href: "https://tlimiami.com/",
      logo: "/allies/transport-logistic.webp",
      logoAlt: "Logo de Transport Logistic International",
      name: "Transport Logistic International",
    },
  ],
};

const fallbackCopy: Record<"en" | "es", Omit<AlliesCopy, "items">> = {
  en: {
    eyebrow: "Metal Recovery Network",
    title: "Our Allies",
  },
  es: {
    eyebrow: "Red Operativa De Metales",
    title: "Nuestros Aliados",
  },
};

function getItems(
  itemMessages: Array<Partial<AllyItem>> | undefined,
  fallback: AllyItem[],
) {
  return fallback.map((item, index) => {
    const message = itemMessages?.[index];

    return {
      href: message?.href ?? item.href,
      logo: message?.logo ?? item.logo,
      logoAlt: message?.logoAlt ?? item.logoAlt,
      name: message?.name ?? item.name,
    };
  });
}

export async function HomeAllies() {
  const locale = await getLocale();
  const messages = (await getMessages()) as AlliesMessages;
  const localeKey = locale === "en" ? "en" : "es";
  const fallback = fallbackCopy[localeKey];
  const alliesMessages = messages.Pages?.home?.allies;
  const items = getItems(alliesMessages?.items, fallbackItems[localeKey]);

  return (
    <section
      className="border-y border-[#d7dde3] bg-white px-6 py-16 sm:py-18"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-l-4 border-[var(--gw-green)] pl-6 sm:pl-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-blue)]">
            {alliesMessages?.eyebrow ?? fallback.eyebrow}
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[var(--gw-ink)] sm:text-4xl">
            {alliesMessages?.title ?? fallback.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => {
            const Wrapper = item.href === "#" ? "div" : "a";
            const isWideLogo = item.logo.includes("transport-logistic");
            const imageSizes = item.logo.includes("metal-harvest")
              ? "(min-width: 768px) 132px, 48vw"
              : isWideLogo
                ? "(min-width: 768px) 340px, 80vw"
                : "(min-width: 768px) 190px, 62vw";

            return (
              <Wrapper
                className={`group flex min-h-[220px] items-center justify-center rounded-[4px] border border-[#d7dde3] bg-white transition-colors duration-200 hover:border-[var(--gw-blue)] hover:bg-[var(--gw-sand)] ${
                  isWideLogo ? "p-6" : "p-8"
                }`}
                data-aos="fade-up"
                data-aos-delay={String(100 + index * 80)}
                href={item.href === "#" ? undefined : item.href}
                key={`${item.name}-${index}`}
                rel={item.href === "#" ? undefined : "noreferrer"}
                target={item.href === "#" ? undefined : "_blank"}
              >
                {item.logo ? (
                  <span
                    className={`relative block h-36 w-full ${
                      isWideLogo ? "max-w-[380px]" : "max-w-[300px]"
                    }`}
                  >
                    <Image
                      alt={item.logoAlt}
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                      fill
                      quality={55}
                      sizes={imageSizes}
                      src={item.logo}
                    />
                  </span>
                ) : (
                  <span className="text-center text-xs font-bold uppercase tracking-[0.22em] text-[var(--gw-blue)]">
                    {localeKey === "en" ? "Logo slot" : "Espacio para logo"}
                  </span>
                )}
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
