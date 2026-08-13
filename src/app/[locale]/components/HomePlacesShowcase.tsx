import { getLocale, getMessages } from "next-intl/server";
import {
  HomePlacesCarousel,
  type HomePlaceItem,
} from "./HomePlacesCarousel";

type PlaceItem = HomePlaceItem;

type PlacesCopy = {
  cta: string;
  eyebrow: string;
  items: PlaceItem[];
  title: string;
};

type PlacesMessages = {
  Pages?: {
    home?: {
      places?: {
        cta?: string;
        eyebrow?: string;
        items?: Array<Partial<PlaceItem>>;
        title?: string;
      };
    };
  };
};

const siliconValleyImage =
  "/countries/estados-unidos/silicon-valley/silicon-valley-microsoft-campus-10.webp";
const miamiImage =
  "/countries/estados-unidos/miami/miami-warehouse-logistics-01.webp";
const medellinImage =
  "/countries/colombia/medellin/medellin-greentech-booth-07.webp";
const bogotaImage =
  "/countries/colombia/bogota/bogota-matrix-bits-inserts-05.webp";
const houstonImage =
  "/countries/estados-unidos/houston/houston-warehouse-storage-03.webp";
const madisonvilleImage =
  "/countries/estados-unidos/madisonville/madisonville-tungco-yard-drums-01.webp";

const fallbackItems: Record<"en" | "es", PlaceItem[]> = {
  en: [
    {
      country: "Chile",
      href: "/about/chile",
      image: "/countries/chile/santiago/chile-metales-santiago-01.webp",
      imageAlt: "Metals operation in Santiago, Chile",
      label: "Santiago",
      note: "Metals operation in Santiago.",
    },
    {
      country: "Spain",
      href: "/about/spain",
      image: "/countries/espana/barcelona/spain-barcelona-warehouse-01.webp",
      imageAlt: "Barcelona, Spain",
      label: "Barcelona",
      note: "Metals recovery and handling in a European industrial setting.",
    },
    {
      country: "Italy",
      href: "/about/italy",
      image: "/countries/italia/operacion/italy-industrial-equipment-05.webp",
      imageAlt: "Industrial equipment and machined components in Italy",
      label: "Italy",
      note: "Review of equipment, alloys, and recovery opportunities.",
    },
    {
      country: "Colombia",
      href: "/about/medellin",
      image: medellinImage,
      imageAlt: "GreenTech booth participation in Medellin, Colombia",
      label: "Medellin",
      note: "Commercial and technical participation for industrial metals in Colombia.",
    },
    {
      country: "United States",
      href: "/about/houston",
      image: houstonImage,
      imageAlt: "Industrial warehouse and recovered metal materials in Houston, Texas",
      label: "Houston, Texas",
      note: "Warehouses, turnings, drums, and recoverable materials in operation.",
    },
    {
      country: "United States",
      href: "/about/madisonville",
      image: madisonvilleImage,
      imageAlt: "Tungco yard with recovered metal drums in Madisonville, Kentucky",
      label: "Madisonville",
      note: "Industrial lots, tungsten carbide, and high-wear technical materials.",
    },
    {
      country: "United States",
      href: "/about/miami",
      image: miamiImage,
      imageAlt: "Miami warehouse logistics and truck loading",
      label: "Miami",
      note: "Warehouse logistics, truck loading, and international movement coordination.",
    },
    {
      country: "Colombia",
      href: "/about/bogota",
      image: bogotaImage,
      imageAlt: "Matrix drill bits and tungsten inserts in Bogota, Colombia",
      label: "Bogota",
      note: "Matrix drill bits and tungsten inserts received for technical evaluation.",
    },
    {
      country: "United States",
      href: "/about/silicon-valley",
      image: siliconValleyImage,
      imageAlt: "Microsoft campus visit in Silicon Valley",
      label: "Silicon Valley",
      note: "Strategic relationships and commercial network development.",
    },
  ],
  es: [
    {
      country: "Chile",
      href: "/about/chile",
      image: "/countries/chile/santiago/chile-metales-santiago-01.webp",
      imageAlt: "Operación de metales en Santiago, Chile",
      label: "Santiago",
      note: "Operación de metales en Santiago.",
    },
    {
      country: "España",
      href: "/about/espana",
      image: "/countries/espana/barcelona/spain-barcelona-warehouse-01.webp",
      imageAlt: "Barcelona, España",
      label: "Barcelona",
      note: "Recuperación y manejo de metales en entorno industrial europeo.",
    },
    {
      country: "Italia",
      href: "/about/italia",
      image: "/countries/italia/operacion/italy-industrial-equipment-05.webp",
      imageAlt: "Equipo industrial y componentes mecanizados en Italia",
      label: "Italia",
      note: "Lectura de equipos, aleaciones y oportunidades de recuperación.",
    },
    {
      country: "Colombia",
      href: "/about/medellin",
      image: medellinImage,
      imageAlt: "Participación en stand GreenTech en Medellín, Colombia",
      label: "Medellín",
      note: "Participación comercial y técnica para metales industriales en Colombia.",
    },
    {
      country: "Estados Unidos",
      href: "/about/houston",
      image: houstonImage,
      imageAlt: "Bodega industrial y materiales metalicos recuperados en Houston, Texas",
      label: "Houston, Texas",
      note: "Bodegas, turnings, tambores y materiales recuperables en operación.",
    },
    {
      country: "Estados Unidos",
      href: "/about/madisonville",
      image: madisonvilleImage,
      imageAlt: "Patio de Tungco con tambores de metal recuperado en Madisonville, Kentucky",
      label: "Madisonville",
      note: "Lotes industriales, carburo de tungsteno y materiales de alto desgaste.",
    },
    {
      country: "Estados Unidos",
      href: "/about/miami",
      image: miamiImage,
      imageAlt: "Bodega logística de Miami y cargue de camión",
      label: "Miami",
      note: "Bodega logística, cargue de camiones y coordinación de salida internacional.",
    },
    {
      country: "Colombia",
      href: "/about/bogota",
      image: bogotaImage,
      imageAlt: "Brocas matriz e insertos de tungsteno en Bogotá, Colombia",
      label: "Bogotá",
      note: "Brocas matriz e insertos de tungsteno recibidos para evaluación técnica.",
    },
    {
      country: "Estados Unidos",
      href: "/about/silicon-valley",
      image: siliconValleyImage,
      imageAlt: "Visita al campus de Microsoft en Silicon Valley",
      label: "Silicon Valley",
      note: "Relacionamiento estratégico y desarrollo de red comercial.",
    },
  ],
};

const fallbackCopy: Record<"en" | "es", Omit<PlacesCopy, "items">> = {
  en: {
    cta: "View",
    eyebrow: "International Presence",
    title: "Our Reach",
  },
  es: {
    cta: "Ver",
    eyebrow: "Presencia Internacional",
    title: "Nuestro Alcance",
  },
};

function getItems(
  itemMessages: Array<Partial<PlaceItem>> | undefined,
  fallback: PlaceItem[],
) {
  return fallback.map((item, index) => {
    const message = itemMessages?.[index];
    const messageHasImage = Boolean(message?.image);
    const label = message?.label ?? item.label;
    const href = message?.href ?? item.href;
    const isChileSantiago = item.country === "Chile" && item.label === "Santiago";
    const isSpainBarcelona =
      (item.country === "Spain" || item.country === "España") &&
      item.label === "Barcelona";
    const isItaly =
      item.country === "Italy" || item.country === "Italia";
    const isSiliconValley =
      item.label === "Silicon Valley" ||
      label === "Silicon Valley" ||
      href.includes("silicon-valley");
    const isMiami =
      item.label === "Miami" ||
      label === "Miami" ||
      href.includes("miami");
    const isMedellin =
      item.label === "Medellin" ||
      item.label === "Medellín" ||
      label === "Medellin" ||
      label === "Medellín" ||
      href.includes("medellin");
    const isBogota =
      item.label === "Bogota" ||
      item.label === "Bogotá" ||
      label === "Bogota" ||
      label === "Bogotá" ||
      href.includes("bogota");
    const isHouston =
      item.label === "Houston, Texas" ||
      label === "Houston, Texas" ||
      href.includes("houston");
    const isMadisonville =
      item.label === "Madisonville" ||
      label === "Madisonville" ||
      href.includes("madisonville");

    return {
      country: message?.country ?? item.country,
      href:
        isChileSantiago && !messageHasImage
          ? item.href
          : isSpainBarcelona ||
              isItaly ||
              isSiliconValley ||
              isMiami ||
              isMedellin ||
              isBogota ||
              isHouston ||
              isMadisonville
            ? item.href
            : (message?.href ?? item.href),
      image: isSiliconValley
        ? siliconValleyImage
        : isMiami
          ? miamiImage
          : isMedellin
            ? medellinImage
            : isBogota
              ? bogotaImage
              : isHouston
                ? houstonImage
                : isMadisonville
                  ? madisonvilleImage
                  : message?.image || item.image,
      imageAlt:
        isMiami || isBogota || isHouston || isMadisonville
          ? item.imageAlt
          : message?.imageAlt || item.imageAlt,
      label,
      note:
        isChileSantiago && !messageHasImage
          ? item.note
          : (message?.note ?? item.note),
    };
  });
}

export async function HomePlacesShowcase() {
  const locale = await getLocale();
  const messages = (await getMessages()) as PlacesMessages;
  const localeKey = locale === "en" ? "en" : "es";
  const fallback = fallbackCopy[localeKey];
  const placesMessages = messages.Pages?.home?.places;
  const items = getItems(placesMessages?.items, fallbackItems[localeKey]);

  return (
    <HomePlacesCarousel
      cta={placesMessages?.cta ?? fallback.cta}
      eyebrow={placesMessages?.eyebrow ?? fallback.eyebrow}
      items={items}
      nextLabel={localeKey === "en" ? "Next place" : "Siguiente lugar"}
      photoSlotLabel={localeKey === "en" ? "Photo slot" : "Espacio para foto"}
      previousLabel={localeKey === "en" ? "Previous place" : "Lugar anterior"}
      title={placesMessages?.title ?? fallback.title}
    />
  );
}
