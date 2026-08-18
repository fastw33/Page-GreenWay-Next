import { Link } from "@/i18n/navigation";
import type { Locale } from "@/lib/seo";

type LegalPageKey = "privacy" | "terms" | "pqrs";

type LegalSection = {
  body: string;
  title: string;
};

type LegalCopy = {
  contactLabel: string;
  contactText: string;
  eyebrow: string;
  intro: string;
  sections: LegalSection[];
  title: string;
  updated: string;
};

const legalCopy: Record<LegalPageKey, Record<Locale, LegalCopy>> = {
  privacy: {
    en: {
      contactLabel: "Contact Green Way",
      contactText:
        "For privacy questions or data requests, contact Green Way through the official contact page.",
      eyebrow: "Information",
      intro:
        "This policy explains how Green Way International handles information submitted through this website and its business contact channels.",
      sections: [
        {
          title: "Information We Receive",
          body: "We may receive identification, company, location, contact, material, photo, and lot information when a visitor requests a quote or contacts Green Way.",
        },
        {
          title: "Use Of Information",
          body: "Information is used to evaluate industrial metal lots, respond to requests, coordinate logistics, prepare commercial communications, and maintain business records.",
        },
        {
          title: "Sharing",
          body: "Green Way may share information with team members, logistics providers, technical reviewers, or commercial partners when needed to evaluate or coordinate a requested operation.",
        },
        {
          title: "Security And Retention",
          body: "Information is handled with reasonable administrative and technical care and retained only as needed for operational, commercial, accounting, or legal purposes.",
        },
        {
          title: "User Requests",
          body: "Users may request review, update, or deletion of personal information through the contact channels published by Green Way.",
        },
      ],
      title: "Privacy Policy",
      updated: "Last updated: August 2026",
    },
    es: {
      contactLabel: "Contactar a Green Way",
      contactText:
        "Para consultas de privacidad o solicitudes sobre datos, contacta a Green Way desde la página oficial de contacto.",
      eyebrow: "Información",
      intro:
        "Esta política explica cómo Green Way International maneja la información enviada a través de este sitio web y sus canales comerciales.",
      sections: [
        {
          title: "Información Que Recibimos",
          body: "Podemos recibir datos de identificación, empresa, ubicación, contacto, material, fotos e información del lote cuando un visitante solicita una cotización o contacta a Green Way.",
        },
        {
          title: "Uso De La Información",
          body: "La información se usa para evaluar lotes metálicos industriales, responder solicitudes, coordinar logística, preparar comunicaciones comerciales y conservar registros de negocio.",
        },
        {
          title: "Compartir Información",
          body: "Green Way puede compartir información con equipo interno, operadores logísticos, revisores técnicos o aliados comerciales cuando sea necesario para evaluar o coordinar una operación solicitada.",
        },
        {
          title: "Seguridad Y Conservación",
          body: "La información se maneja con medidas administrativas y técnicas razonables y se conserva sólo por el tiempo necesario para fines operativos, comerciales, contables o legales.",
        },
        {
          title: "Solicitudes Del Usuario",
          body: "Los usuarios pueden solicitar revisión, actualización o eliminación de datos personales a través de los canales de contacto publicados por Green Way.",
        },
      ],
      title: "Política De Privacidad",
      updated: "Última actualización: agosto de 2026",
    },
  },
  terms: {
    en: {
      contactLabel: "Request A Quote",
      contactText:
        "Commercial conditions are confirmed directly after technical review of each material lot.",
      eyebrow: "Information",
      intro:
        "These terms describe general website use and the commercial nature of Green Way International's industrial metal recovery services.",
      sections: [
        {
          title: "Website Use",
          body: "The website provides general information about Green Way, its materials of interest, locations, contact channels, and business process.",
        },
        {
          title: "Quotes And Purchases",
          body: "Any quote, purchase, payment, pickup, shipment, or recovery operation depends on technical review, material verification, weight, location, market conditions, and written confirmation.",
        },
        {
          title: "No Automatic Offer",
          body: "Website content does not create an automatic purchase obligation, fixed price, or binding commercial agreement without direct confirmation from Green Way.",
        },
        {
          title: "Intellectual Property",
          body: "Text, images, brand elements, and website materials belong to Green Way or their respective owners and may not be copied for misleading or unauthorized commercial use.",
        },
        {
          title: "External Links",
          body: "External platforms such as WhatsApp, Instagram, maps, or logistics tools are governed by their own terms and privacy practices.",
        },
      ],
      title: "Terms And Conditions",
      updated: "Last updated: August 2026",
    },
    es: {
      contactLabel: "Solicitar Cotización",
      contactText:
        "Las condiciones comerciales se confirman directamente después de revisar técnicamente cada lote de material.",
      eyebrow: "Información",
      intro:
        "Estos términos describen el uso general del sitio web y la naturaleza comercial de los servicios de recuperación de metales industriales de Green Way International.",
      sections: [
        {
          title: "Uso Del Sitio",
          body: "El sitio web ofrece información general sobre Green Way, sus materiales de interés, ubicaciones, canales de contacto y proceso comercial.",
        },
        {
          title: "Cotizaciones Y Compras",
          body: "Toda cotización, compra, pago, recogida, envío u operación de recuperación depende de revisión técnica, verificación del material, peso, ubicación, condiciones de mercado y confirmación escrita.",
        },
        {
          title: "Sin Oferta Automática",
          body: "El contenido del sitio no genera una obligación automática de compra, precio fijo ni acuerdo comercial vinculante sin confirmación directa de Green Way.",
        },
        {
          title: "Propiedad Intelectual",
          body: "Textos, imágenes, elementos de marca y materiales del sitio pertenecen a Green Way o a sus respectivos titulares y no pueden copiarse para usos comerciales engañosos o no autorizados.",
        },
        {
          title: "Enlaces Externos",
          body: "Plataformas externas como WhatsApp, Instagram, mapas o herramientas logísticas se rigen por sus propios términos y prácticas de privacidad.",
        },
      ],
      title: "Términos Y Condiciones",
      updated: "Última actualización: agosto de 2026",
    },
  },
  pqrs: {
    en: {
      contactLabel: "Submit A Request",
      contactText:
        "Use the contact page and include your name, company, contact channel, request type, and supporting details.",
      eyebrow: "Information",
      intro:
        "PQRS is Green Way's channel for petitions, complaints, claims, and suggestions related to website contact or business attention.",
      sections: [
        {
          title: "What Can Be Submitted",
          body: "Visitors and business contacts may submit petitions, complaints, claims, suggestions, corrections, or follow-up requests related to Green Way communications.",
        },
        {
          title: "Information To Include",
          body: "Include your name, company if applicable, country or city, contact details, the request type, a clear description, and any useful support files or references.",
        },
        {
          title: "Channels",
          body: "PQRS requests can be sent through the website contact form, WhatsApp, phone, or any official Green Way contact channel published on this website.",
        },
        {
          title: "Handling",
          body: "Green Way reviews each request, validates the available information, and responds through the contact channel provided by the requester.",
        },
      ],
      title: "PQRS",
      updated: "Last updated: August 2026",
    },
    es: {
      contactLabel: "Enviar Solicitud",
      contactText:
        "Usa la página de contacto e incluye nombre, empresa, canal de contacto, tipo de solicitud y detalles de soporte.",
      eyebrow: "Información",
      intro:
        "PQRS es el canal de Green Way para peticiones, quejas, reclamos y sugerencias relacionadas con la atención comercial o el contacto desde el sitio web.",
      sections: [
        {
          title: "Qué Puedes Presentar",
          body: "Visitantes y contactos comerciales pueden presentar peticiones, quejas, reclamos, sugerencias, correcciones o solicitudes de seguimiento relacionadas con comunicaciones de Green Way.",
        },
        {
          title: "Información A Incluir",
          body: "Incluye nombre, empresa si aplica, país o ciudad, datos de contacto, tipo de solicitud, descripción clara y cualquier soporte o referencia útil.",
        },
        {
          title: "Canales",
          body: "Las solicitudes PQRS pueden enviarse por el formulario de contacto del sitio, WhatsApp, teléfono o cualquier canal oficial de Green Way publicado en esta web.",
        },
        {
          title: "Gestión",
          body: "Green Way revisa cada solicitud, valida la información disponible y responde por el canal de contacto indicado por el solicitante.",
        },
      ],
      title: "PQRS",
      updated: "Última actualización: agosto de 2026",
    },
  },
};

export function LegalInfoPage({
  locale,
  page,
}: {
  locale: Locale;
  page: LegalPageKey;
}) {
  const copy = legalCopy[page][locale];

  return (
    <main className="bg-white" data-aos="fade-in" data-aos-offset="0">
      <section className="border-b border-[#d7dde3] bg-[var(--gw-sand)] pt-[var(--gw-nav-h)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--gw-blue)]">
            {copy.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-[var(--gw-ink)] sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
            {copy.intro}
          </p>
          <p className="mt-5 text-sm font-semibold text-[var(--color-muted)]">
            {copy.updated}
          </p>
        </div>
      </section>

      <section className="border-b border-[#d7dde3]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[0.72fr_1.28fr] lg:py-18">
          <aside>
            <div className="border-l-4 border-[var(--gw-green)] pl-6">
              <h2 className="text-2xl font-bold text-[var(--gw-ink)]">
                {copy.contactLabel}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                {copy.contactText}
              </p>
              <Link
                className="mt-6 inline-flex rounded-[4px] bg-[var(--gw-green)] px-5 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[var(--gw-blue)]"
                href="/contacto"
              >
                {locale === "en" ? "Contact" : "Contacto"}
              </Link>
            </div>
          </aside>

          <div className="divide-y divide-[#d7dde3] border-y border-[#d7dde3]">
            {copy.sections.map((section) => (
              <section className="py-7" key={section.title}>
                <h2 className="text-xl font-bold text-[var(--gw-ink)]">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
