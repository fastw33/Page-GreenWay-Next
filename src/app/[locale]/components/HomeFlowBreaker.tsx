import { getLocale, getMessages } from "next-intl/server";
import { ActionLink } from "@/components/global/ActionLink";

type FlowBreakerCopy = {
  cta: string;
  eyebrow: string;
  phrase: string;
};

type FlowBreakerMessages = {
  Pages?: {
    home?: {
      flowBreaker?: Partial<FlowBreakerCopy>;
    };
  };
};

const fallbackCopy: Record<"en" | "es", FlowBreakerCopy> = {
  en: {
    cta: "Contact Us",
    eyebrow: "Material quote",
    phrase:
      "Do you have an industrial lot for Greenway to quote, buy, or recover? Send photos, estimated weight, and city.",
  },
  es: {
    cta: "Contáctanos",
    eyebrow: "Cotización de material",
    phrase:
      "¿Tienes un lote industrial para que Greenway lo cotice, compre o recupere? Envíanos fotos, peso aproximado y ciudad.",
  },
};

export async function HomeFlowBreaker() {
  const locale = await getLocale();
  const messages = (await getMessages()) as FlowBreakerMessages;
  const flowBreaker = messages.Pages?.home?.flowBreaker;
  const fallback = fallbackCopy[locale === "en" ? "en" : "es"];
  const copy = {
    cta: flowBreaker?.cta ?? fallback.cta,
    eyebrow: flowBreaker?.eyebrow ?? fallback.eyebrow,
    phrase: flowBreaker?.phrase ?? fallback.phrase,
  };

  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--gw-ink)] px-6 py-20 text-white"
      data-aos="fade-up"
      id="contacto"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-2 bg-[var(--gw-grad-brand-135)]"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-1/3 skew-x-[-12deg] bg-[var(--gw-grad-brand-135)] opacity-15"
      />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl" data-aos="fade-up" data-aos-delay="80">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
            {copy.eyebrow}
          </p>
          <p className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {copy.phrase}
          </p>
        </div>
        <div className="shrink-0" data-aos="fade-up" data-aos-delay="160">
          <ActionLink
            className="border border-white/20 px-6 py-3.5"
            href="/contacto"
            variant="primary"
          >
            {copy.cta}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
