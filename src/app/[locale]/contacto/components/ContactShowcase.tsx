import { getLocale, getMessages } from "next-intl/server";
import { actionLinkClassName } from "@/components/global/ActionLink";
import { BrandIcon } from "@/components/global/BrandIcons";
import { ContactLotForm } from "./ContactLotForm";

type ContactChannel = {
  body: string;
  href: string;
  label: string;
  title: string;
};

type ContactLocation = {
  address: string[];
  company?: string;
  directionsUrl: string;
  mapUrl: string;
  phone: string;
  phoneHref: string;
  title: string;
};

type ContactCopy = {
  channels: ContactChannel[];
  channelsEyebrow: string;
  channelsTitle: string;
  directionsLabel: string;
  heroBody: string;
  heroEyebrow: string;
  heroTitle: string;
  locations: ContactLocation[];
  locationsBody: string;
  locationsEyebrow: string;
  locationsTitle: string;
  phoneLabel: string;
  responseBody: string;
  responseEyebrow: string;
  responseItems: string[];
  responseTitle: string;
};

type ContactFormCopy = Parameters<typeof ContactLotForm>[0]["copy"];

type ContactMessages = {
  Pages?: {
    contact?: Partial<ContactCopy>;
  };
};

const fallbackCopy: Record<"en" | "es", ContactCopy> = {
  en: {
    channels: [
      {
        body: "Coordination for operations, warehouses, and materials with international movement.",
        href: "tel:+17866610046",
        label: "+1 (786) 661-0046",
        title: "Miami Office",
      },
      {
        body: "Purchase and evaluation of industrial metal materials in Colombia.",
        href: "tel:+573143002760",
        label: "+57 314 3002760",
        title: "Bogota Office",
      },
    ],
    channelsEyebrow: "Contact channels",
    channelsTitle: "Direct access to the Greenway operating team.",
    directionsLabel: "Open in Google Maps",
    heroBody:
      "Tell us what metal you have, where it is located, estimated weight, and send photos. With that information we can guide the first review.",
    heroEyebrow: "Contact",
    heroTitle: "Quote or coordinate recovery for your material.",
    locations: [
      {
        address: ["10049 NW 89th Ave unit 4", "Medley, FL 33178"],
        directionsUrl:
          "https://www.google.com/maps/search/?api=1&query=10049%20NW%2089th%20Ave%20unit%204%2C%20Medley%2C%20FL%2033178",
        mapUrl:
          "https://www.google.com/maps?q=10049%20NW%2089th%20Ave%20unit%204%2C%20Medley%2C%20FL%2033178&output=embed",
        phone: "+1 (786) 661-0046",
        phoneHref: "tel:+17866610046",
        title: "Miami - Warehouse",
      },
      {
        address: ["Cra. 129 #17f-74", "Bogota, Colombia"],
        directionsUrl:
          "https://www.google.com/maps/search/?api=1&query=Cra.%20129%20%2317f-74%2C%20Bogot%C3%A1%2C%20Colombia",
        mapUrl:
          "https://www.google.com/maps?q=Cra.%20129%20%2317f-74%2C%20Bogot%C3%A1%2C%20Colombia&output=embed",
        phone: "+57 314 3002760",
        phoneHref: "tel:+573143002760",
        title: "Bogota - Warehouse",
      },
    ],
    locationsBody:
      "From Miami and Bogota we coordinate receiving, review, and movement of industrial metal materials according to the lot scope.",
    locationsEyebrow: "Warehouses",
    locationsTitle: "Operational locations",
    phoneLabel: "Call",
    responseBody:
      "The clearer the lot information is, the faster we can value, quote, and coordinate the operation.",
    responseEyebrow: "Before the first call",
    responseItems: [
      "General and detailed photos of the material",
      "Approximate weight or volume and city",
      "Industry or process of origin",
    ],
    responseTitle: "Information that helps move faster.",
  },
  es: {
    channels: [
      {
        body: "Coordinación para operaciones, bodegas y materiales con salida internacional.",
        href: "tel:+17866610046",
        label: "+1 (786) 661-0046",
        title: "Oficina Miami",
      },
      {
        body: "Compra y evaluación de materiales industriales en Colombia.",
        href: "tel:+573143002760",
        label: "+57 314 3002760",
        title: "Oficina Bogotá",
      },
    ],
    channelsEyebrow: "Canales de contacto",
    channelsTitle: "Acceso directo al equipo operativo de Greenway.",
    directionsLabel: "Abrir en Google Maps",
    heroBody:
      "Cuéntanos qué metal tienes, en qué ciudad está, cuánto pesa y adjunta fotos. Con esa información podemos orientar la revisión inicial.",
    heroEyebrow: "Contacto",
    heroTitle: "Cotiza o coordina la recuperación de tu material.",
    locations: [
      {
        address: ["10049 NW 89th Ave unit 4", "Medley, FL 33178"],
        directionsUrl:
          "https://www.google.com/maps/search/?api=1&query=10049%20NW%2089th%20Ave%20unit%204%2C%20Medley%2C%20FL%2033178",
        mapUrl:
          "https://www.google.com/maps?q=10049%20NW%2089th%20Ave%20unit%204%2C%20Medley%2C%20FL%2033178&output=embed",
        phone: "+1 (786) 661-0046",
        phoneHref: "tel:+17866610046",
        title: "Miami - Warehouse",
      },
      {
        address: ["Cra. 129 #17f-74", "Bogotá, Colombia"],
        directionsUrl:
          "https://www.google.com/maps/search/?api=1&query=Cra.%20129%20%2317f-74%2C%20Bogot%C3%A1%2C%20Colombia",
        mapUrl:
          "https://www.google.com/maps?q=Cra.%20129%20%2317f-74%2C%20Bogot%C3%A1%2C%20Colombia&output=embed",
        phone: "+57 314 3002760",
        phoneHref: "tel:+573143002760",
        title: "Bogotá - Warehouse",
      },
    ],
    locationsBody:
      "Desde Miami y Bogotá coordinamos recepción, revisión y movimiento de materiales metálicos industriales según el alcance del lote.",
    locationsEyebrow: "Bodegas",
    locationsTitle: "Ubicaciones operativas",
    phoneLabel: "Llamar",
    responseBody:
      "Mientras más clara sea la información del lote, mejor podremos valorar, cotizar y coordinar la operación.",
    responseEyebrow: "Antes de la primera conversación",
    responseItems: [
      "Fotos generales y de detalle del material",
      "Peso o volumen aproximado y ciudad",
      "Tipo de industria o proceso de origen",
    ],
    responseTitle: "Información que ayuda a avanzar más rápido.",
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

function getCopy(locale: string, messages: ContactMessages): ContactCopy {
  const localeKey = locale === "en" ? "en" : "es";
  const fallback = fallbackCopy[localeKey];
  const contact = messages.Pages?.contact ?? {};

  return {
    ...fallback,
    ...contact,
    channels: mergeArray(fallback.channels, contact.channels),
    locations: mergeArray(fallback.locations, contact.locations),
    responseItems: contact.responseItems ?? fallback.responseItems,
  };
}

export async function ContactShowcase() {
  const locale = await getLocale();
  const messages = (await getMessages()) as ContactMessages;
  const copy = getCopy(locale, messages);
  const formCopy: ContactFormCopy =
    locale === "en"
      ? {
          city: "City / pickup location",
          cityPlaceholder: "Houston, TX",
          company: "Company",
          companyPlaceholder: "Company or workshop",
          email: "Email",
          emailPlaceholder: "name@company.com",
          material: "Material",
          materialOptions: [
            "Tungsten / wolfram",
            "Tungsten carbide",
            "Nickel / cobalt alloy",
            "Stainless steel",
            "Titanium / molybdenum",
            "Other industrial metal",
          ],
          message: "Lot details",
          messagePlaceholder:
            "Tell us origin, condition, packaging, available photos, and timing.",
          name: "Name",
          namePlaceholder: "Your name",
          phone: "Phone",
          phonePlaceholder: "+1 786 661 0046",
          photos: "Material photos",
          photosPlaceholder: "Attach photos or PDF files of the material.",
          sending: "Sending information...",
          submit: "Send lot details",
          success: "Information sent. We will contact you soon.",
          subtitle: "Lot quote",
          title: "Send material details",
          weight: "Approximate weight",
          weightPlaceholder: "2,500 lb / 1,200 kg",
        }
      : {
          city: "Ciudad / punto de recolección",
          cityPlaceholder: "Houston, TX",
          company: "Empresa",
          companyPlaceholder: "Empresa o taller",
          email: "Correo",
          emailPlaceholder: "nombre@empresa.com",
          material: "Material",
          materialOptions: [
            "Tungsteno / wolframio",
            "Carburo de tungsteno",
            "Aleación níquel / cobalto",
            "Acero inoxidable",
            "Titanio / molibdeno",
            "Otro metal industrial",
          ],
          message: "Detalles del lote",
          messagePlaceholder:
            "Cuéntanos origen, condición, empaque, fotos disponibles y tiempos.",
          name: "Nombre",
          namePlaceholder: "Tu nombre",
          phone: "Teléfono",
          phonePlaceholder: "+57 314 3002760",
          photos: "Fotos del material",
          photosPlaceholder: "Adjunta fotos o PDF del material.",
          sending: "Enviando información...",
          submit: "Enviar datos del lote",
          success: "Información enviada. Te contactaremos pronto.",
          subtitle: "Cotización de lote",
          title: "Envía los datos del material",
          weight: "Peso aproximado",
          weightPlaceholder: "2.500 lb / 1.200 kg",
        };

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
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {copy.channels.map((channel, index) => (
                <a
                  className="group border border-[#d7dde3] bg-[#f8fafc] p-5 outline-none transition-colors duration-200 hover:border-[var(--gw-green)] hover:bg-white focus-visible:ring-2 focus-visible:ring-[var(--gw-blue)] focus-visible:ring-offset-4"
                  data-aos="fade-up"
                  data-aos-delay={String(150 + index * 70)}
                  href={channel.href}
                  key={channel.title}
                >
                  <span className="mb-6 flex items-center justify-between gap-4">
                    <BrandIcon
                      className="h-6 w-6 text-[var(--gw-blue)] transition-colors duration-200 group-hover:text-[var(--gw-green)]"
                      name="phone"
                    />
                    <BrandIcon
                      className="h-4 w-4 text-[var(--gw-blue)] transition-colors duration-200 group-hover:text-[var(--gw-green)]"
                      name="arrowRight"
                    />
                  </span>
                  <span className="block text-lg font-bold text-[var(--gw-ink)]">
                    {channel.title}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-[var(--color-muted)]">
                    {channel.body}
                  </span>
                  <span className="mt-4 block text-base font-bold text-[var(--gw-blue)]">
                    {channel.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <ContactLotForm copy={formCopy} />
        </div>
      </section>

      <section className="bg-[var(--gw-sand)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
              {copy.locationsEyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
              {copy.locationsTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]" data-aos="fade-up" data-aos-delay="100">
              {copy.locationsBody}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:auto-rows-fr">
            {copy.locations.map((location, index) => (
              <article
                className="grid h-full overflow-hidden rounded-[4px] border border-[#d7dde3] bg-white lg:grid-rows-[320px_360px]"
                data-aos="fade-up"
                data-aos-delay={String(80 + index * 90)}
                key={location.title}
              >
                <div className="flex h-full flex-col justify-between p-7">
                  <div className="flex items-center justify-between gap-5">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--gw-blue)]">
                      {copy.locationsEyebrow}
                    </p>
                    <BrandIcon className="h-6 w-6 text-[var(--gw-blue)]" name="map" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-3xl font-bold text-[var(--gw-ink)]">
                      {location.title}
                    </h3>
                    {location.company ? (
                      <p className="mt-3 text-base font-semibold text-[var(--color-muted)]">
                        {location.company}
                      </p>
                    ) : null}
                    <address className="mt-4 min-h-[56px] not-italic text-base leading-7 text-[var(--color-muted)]">
                      {location.address.map((line) => (
                        <span className="block" key={line}>
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      className={actionLinkClassName("secondary")}
                      href={location.phoneHref}
                    >
                      <BrandIcon className="h-4 w-4" name="phone" />
                      {copy.phoneLabel} {location.phone}
                    </a>
                    <a
                      className={actionLinkClassName("solid")}
                      href={location.directionsUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {copy.directionsLabel}
                    </a>
                  </div>
                </div>
                <iframe
                  aria-label={location.title}
                  className="h-[360px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={location.mapUrl}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl" data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-blue)]">
              {copy.responseEyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[var(--gw-ink)] sm:text-5xl">
              {copy.responseTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
              {copy.responseBody}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3" data-aos="fade-up" data-aos-delay="120">
            {copy.responseItems.map((item, index) => (
              <div
                className={`min-h-[220px] border p-6 ${
                  index === 0
                    ? "border-[var(--gw-green)] bg-[var(--gw-ink)] text-white"
                    : "border-[#d7dde3] bg-[#f8fafc] text-[var(--gw-ink)]"
                }`}
                data-aos="fade-up"
                data-aos-delay={String(160 + index * 70)}
                key={`${item}-${index}`}
              >
                <span
                  className={`mb-10 grid h-12 w-12 place-items-center border ${
                    index === 0
                      ? "border-[var(--gw-green)] text-[var(--gw-green)]"
                      : "border-[#cbd5e1] text-[var(--gw-blue)]"
                  }`}
                >
                  <BrandIcon
                    className="h-6 w-6"
                    name={index === 0 ? "upload" : index === 1 ? "material" : "company"}
                  />
                </span>
                <p
                  className={`text-xl font-bold leading-7 ${
                    index === 0 ? "text-white" : "text-[var(--gw-ink)]"
                  }`}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
