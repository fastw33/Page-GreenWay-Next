"use client";

import { useMemo, useState } from "react";
import { BrandIcon } from "@/components/global/BrandIcons";
import { trackLeadEvent } from "@/services/leadEvents.service";

type FloatingWhatsAppProps = {
  locale: string;
};

type WhatsAppContact = {
  body: string;
  label: string;
  message: string;
  phone: string;
  title: string;
  trackingTarget: string;
};

const contacts: Record<"en" | "es", WhatsAppContact[]> = {
  en: [
    {
      body: "Industrial metal lots, tungsten, tungsten carbide, and international coordination.",
      label: "+1 (786) 661-0046",
      message:
        "Hello Green Way, I want to quote an industrial metal lot. I have material, photos, and location details.",
      phone: "17866610046",
      title: "Miami / USA",
      trackingTarget: "miami-usa",
    },
    {
      body: "Metal recovery and evaluation for Colombia and LATAM operations.",
      label: "+57 314 3002760",
      message:
        "Hello Green Way, I want to quote tungsten, tungsten carbide, or another industrial metal lot.",
      phone: "573143002760",
      title: "Bogota / LATAM",
      trackingTarget: "bogota-latam",
    },
  ],
  es: [
    {
      body: "Lotes metálicos industriales, tungsteno, carburo de tungsteno y coordinación internacional.",
      label: "+1 (786) 661-0046",
      message:
        "Hola Green Way, quiero cotizar un lote de metal industrial. Tengo material, fotos y ubicación para revisar.",
      phone: "17866610046",
      title: "Miami / USA",
      trackingTarget: "miami-usa",
    },
    {
      body: "Recuperación y evaluación de metales para Colombia y operaciones LATAM.",
      label: "+57 314 3002760",
      message:
        "Hola Green Way, quiero cotizar tungsteno, carburo de tungsteno u otro lote de metal industrial.",
      phone: "573143002760",
      title: "Bogotá / LATAM",
      trackingTarget: "bogota-latam",
    },
  ],
};

function getWhatsAppUrl(contact: WhatsAppContact) {
  return `https://wa.me/${contact.phone}?text=${encodeURIComponent(contact.message)}`;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <path d="M16.02 3.2A12.78 12.78 0 0 0 3.26 15.96c0 2.25.59 4.44 1.72 6.36L3.2 28.8l6.64-1.74a12.75 12.75 0 0 0 6.18 1.58h.01A12.78 12.78 0 0 0 28.8 15.88 12.78 12.78 0 0 0 16.02 3.2Zm.01 23.27h-.01a10.57 10.57 0 0 1-5.39-1.48l-.39-.23-3.94 1.03 1.05-3.84-.25-.4a10.55 10.55 0 1 1 8.93 4.92Zm5.79-7.91c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.77-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.61-.52-.53-.71-.54l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.88-.77 2.15-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function FloatingWhatsApp({ locale }: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const localeKey = locale === "en" ? "en" : "es";
  const copy = useMemo(
    () =>
      localeKey === "en"
        ? {
            aria: "Open WhatsApp contact options",
            close: "Close WhatsApp contact options",
            eyebrow: "WhatsApp",
            title: "Talk To Green Way",
          }
        : {
            aria: "Abrir opciones de contacto por WhatsApp",
            close: "Cerrar opciones de contacto por WhatsApp",
            eyebrow: "WhatsApp",
            title: "Habla Con Green Way",
          },
    [localeKey],
  );

  function handleContactClick(contact: WhatsAppContact) {
    void trackLeadEvent("whatsapp_contact_click", {
      contactChannel: "whatsapp",
      contactTarget: contact.trackingTarget,
      locale: localeKey,
      whatsappPhone: contact.phone,
      whatsappUrl: getWhatsAppUrl(contact),
    });
  }

  return (
    <div className="fixed bottom-[calc(env(safe-area-inset-bottom,0px)+1rem)] right-4 z-[80] sm:bottom-6 sm:right-6">
      {isOpen ? (
        <div
          className="mb-3 w-[min(360px,calc(100vw-2rem))] overflow-hidden border border-[#d7dde3] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.18)]"
        >
          <div className="flex items-start justify-between gap-5 bg-[var(--gw-ink)] p-5 text-white">
            <div>
              <div className="flex items-center gap-2 text-[var(--gw-green)]">
                <WhatsAppIcon className="h-4 w-4" />
                <p className="text-xs font-bold uppercase tracking-[0.2em]">
                  {copy.eyebrow}
                </p>
              </div>
              <p className="mt-2 text-xl font-bold leading-tight">{copy.title}</p>
            </div>
            <button
              aria-label={copy.close}
              className="grid h-9 w-9 shrink-0 place-items-center border border-white/18 text-white outline-none transition-colors duration-200 hover:border-[var(--gw-green)] hover:text-[var(--gw-green)] focus-visible:ring-2 focus-visible:ring-[var(--gw-green)]"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <span aria-hidden="true" className="text-xl leading-none">
                x
              </span>
            </button>
          </div>

          <div className="divide-y divide-[#d7dde3]">
            {contacts[localeKey].map((contact) => (
              <a
                className="group block bg-white p-5 outline-none transition-colors duration-200 hover:bg-[#f8fafc] focus-visible:ring-2 focus-visible:ring-[var(--gw-blue)] focus-visible:ring-inset"
                href={getWhatsAppUrl(contact)}
                key={contact.phone}
                onClick={() => handleContactClick(contact)}
                rel="noreferrer"
                target="_blank"
              >
                <span className="flex items-start justify-between gap-4">
                  <span>
                    <span className="block text-base font-bold text-[var(--gw-ink)]">
                      {contact.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-[var(--color-muted)]">
                      {contact.body}
                    </span>
                    <span className="mt-3 block text-sm font-bold text-[var(--gw-blue)]">
                      {contact.label}
                    </span>
                  </span>
                  <BrandIcon
                    className="mt-1 h-5 w-5 shrink-0 text-[var(--gw-green)] transition-transform duration-200 group-hover:translate-x-1"
                    name="arrowRight"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <button
        aria-expanded={isOpen}
        aria-label={copy.aria}
        className="ml-auto flex h-14 min-w-14 items-center justify-center gap-3 rounded-full border border-[var(--gw-green)] bg-[var(--gw-green)] px-4 font-bold text-white shadow-[0_18px_36px_rgba(34,181,115,0.28)] outline-none transition-colors duration-200 hover:border-[var(--gw-blue)] hover:bg-[var(--gw-blue)] focus-visible:ring-2 focus-visible:ring-[var(--gw-green)] focus-visible:ring-offset-4"
        onClick={() => setIsOpen((value) => !value)}
        type="button"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
