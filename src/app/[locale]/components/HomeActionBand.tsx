import { getLocale, getMessages } from "next-intl/server";
import { ActionLink } from "@/components/global/ActionLink";

type ActionBandCopy = {
  body: string;
  cta: string;
  eyebrow: string;
  title: string;
};

type ActionBandMessages = {
  Pages?: {
    home?: {
      actionBand?: Partial<ActionBandCopy>;
    };
  };
};

const fallbackCopy: Record<"en" | "es", ActionBandCopy> = {
  en: {
    body: "Our team reviews the material, identifies recovery opportunities, and coordinates the operating route for purchase or recovery.",
    cta: "Contact Us",
    eyebrow: "Next lot",
    title: "Turn Your Metallic Waste Into Recoverable Value.",
  },
  es: {
    body: "Nuestro equipo revisa el material, identifica oportunidades de valorización y coordina la ruta operativa para compra o recuperación.",
    cta: "Contáctanos",
    eyebrow: "Siguiente lote",
    title: "Convirtamos Tus Residuos Metálicos En Valor Recuperable.",
  },
};

export async function HomeActionBand() {
  const locale = await getLocale();
  const messages = (await getMessages()) as ActionBandMessages;
  const fallback = fallbackCopy[locale === "en" ? "en" : "es"];
  const actionBand = messages.Pages?.home?.actionBand;
  const copy = {
    body: actionBand?.body ?? fallback.body,
    cta: actionBand?.cta ?? fallback.cta,
    eyebrow: actionBand?.eyebrow ?? fallback.eyebrow,
    title: actionBand?.title ?? fallback.title,
  };

  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--gw-ink)] px-6 py-16 text-white sm:py-20"
      data-aos="fade-up"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-[var(--gw-green)]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className="max-w-4xl border-l-4 border-[var(--gw-green)] pl-6 sm:pl-8"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            {copy.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ActionLink className="px-7 py-3.5" href="/contacto" variant="solid">
              {copy.cta}
            </ActionLink>
            <span className="text-sm font-semibold text-slate-400">
              Greenway International LLC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
