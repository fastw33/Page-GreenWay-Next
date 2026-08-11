import { getLocale, getMessages } from "next-intl/server";

type MapLocation = {
  address: string[];
  directionsUrl: string;
  mapUrl: string;
  phone: string;
  phoneHref: string;
  title: string;
};

type MapLocationsCopy = {
  cta: string;
  eyebrow: string;
  locations: MapLocation[];
  title: string;
};

type MapLocationsMessages = {
  Pages?: {
    home?: {
      mapLocations?: {
        cta?: string;
        eyebrow?: string;
        locations?: Array<Partial<MapLocation>>;
        title?: string;
      };
    };
  };
};

const miamiMap =
  "https://www.google.com/maps?q=10049%20NW%2089th%20Ave%20unit%204%2C%20Medley%2C%20FL%2033178&output=embed";
const miamiDirections =
  "https://www.google.com/maps/search/?api=1&query=10049%20NW%2089th%20Ave%20unit%204%2C%20Medley%2C%20FL%2033178";
const bogotaMap =
  "https://www.google.com/maps?q=Cra.%20129%20%2317f-74%2C%20Bogot%C3%A1%2C%20Colombia&output=embed";
const bogotaDirections =
  "https://www.google.com/maps/search/?api=1&query=Cra.%20129%20%2317f-74%2C%20Bogot%C3%A1%2C%20Colombia";

const fallbackCopy: Record<"en" | "es", MapLocationsCopy> = {
  en: {
    cta: "Open in Google Maps",
    eyebrow: "Warehouse Locations",
    title: "Operational locations",
    locations: [
      {
        address: ["10049 NW 89th Ave unit 4", "Medley, FL 33178"],
        directionsUrl: miamiDirections,
        mapUrl: miamiMap,
        phone: "+1 (786) 661-0046",
        phoneHref: "tel:+17866610046",
        title: "Miami - Warehouse",
      },
      {
        address: ["Cra. 129 #17f-74", "Bogota, Colombia"],
        directionsUrl: bogotaDirections,
        mapUrl: bogotaMap,
        phone: "+57 314 3002760",
        phoneHref: "tel:+573143002760",
        title: "Bogota - Warehouse",
      },
    ],
  },
  es: {
    cta: "Abrir en Google Maps",
    eyebrow: "Ubicaciones warehouse",
    title: "Ubicaciones operativas",
    locations: [
      {
        address: ["10049 NW 89th Ave unit 4", "Medley, FL 33178"],
        directionsUrl: miamiDirections,
        mapUrl: miamiMap,
        phone: "+1 (786) 661-0046",
        phoneHref: "tel:+17866610046",
        title: "Miami - Warehouse",
      },
      {
        address: ["Cra. 129 #17f-74", "Bogotá, Colombia"],
        directionsUrl: bogotaDirections,
        mapUrl: bogotaMap,
        phone: "+57 314 3002760",
        phoneHref: "tel:+573143002760",
        title: "Bogotá - Warehouse",
      },
    ],
  },
};

function getLocations(
  locationMessages: Array<Partial<MapLocation>> | undefined,
  fallback: MapLocation[],
) {
  return fallback.map((location, index) => {
    const message = locationMessages?.[index];

    return {
      address: message?.address?.length ? message.address : location.address,
      directionsUrl: message?.directionsUrl ?? location.directionsUrl,
      mapUrl: message?.mapUrl ?? location.mapUrl,
      phone: message?.phone ?? location.phone,
      phoneHref: message?.phoneHref ?? location.phoneHref,
      title: message?.title ?? location.title,
    };
  });
}

export async function HomeMapLocations() {
  const locale = await getLocale();
  const messages = (await getMessages()) as MapLocationsMessages;
  const localeKey = locale === "en" ? "en" : "es";
  const fallback = fallbackCopy[localeKey];
  const mapMessages = messages.Pages?.home?.mapLocations;
  const locations = getLocations(mapMessages?.locations, fallback.locations);

  return (
    <section
      className="border-y border-[#d7dde3] bg-[var(--gw-sand)] px-6 py-18 sm:py-20"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl border-l-4 border-[var(--gw-green)] pl-6 sm:pl-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-blue)]">
            {mapMessages?.eyebrow ?? fallback.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-[var(--gw-ink)] sm:text-4xl">
            {mapMessages?.title ?? fallback.title}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {locations.map((location, index) => (
            <article
              className="overflow-hidden rounded-[4px] border border-[#d7dde3] bg-white shadow-[0_16px_34px_rgba(15,23,42,0.07)]"
              data-aos="fade-up"
              data-aos-delay={String(100 + index * 100)}
              key={location.title}
            >
              <div className="grid min-h-[460px] grid-rows-[auto_1fr]">
                <div className="p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gw-green)]">
                    Warehouse
                  </p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-[var(--gw-ink)]">
                    {location.title}
                  </h3>
                  <address className="mt-5 not-italic text-base leading-7 text-[var(--color-muted)]">
                    {location.address.map((line) => (
                      <span className="block" key={line}>
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    className="mt-5 inline-flex font-bold text-[var(--gw-ink)] transition-colors duration-200 hover:text-[var(--gw-green)]"
                    href={location.phoneHref}
                  >
                    Tel: {location.phone}
                  </a>
                </div>

                <div className="relative min-h-[260px] border-t border-[#d7dde3] bg-[#eef4f1]">
                  <iframe
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={location.mapUrl}
                    title={`${location.title} Google Map`}
                  />
                  <a
                    className="absolute bottom-4 left-4 inline-flex min-h-10 items-center rounded-[4px] bg-white px-4 py-2 text-sm font-bold text-[var(--gw-ink)] shadow-[0_10px_24px_rgba(15,23,42,0.18)] transition-colors duration-200 hover:text-[var(--gw-green)]"
                    href={location.directionsUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {mapMessages?.cta ?? fallback.cta}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
