import { getLocale, getMessages } from "next-intl/server";

type WorkRouteStep = {
  body: string;
  bullets: string[];
  title: string;
};

type WorkRouteCopy = {
  steps: WorkRouteStep[];
  title: string;
};

type WorkRouteMessages = {
  Pages?: {
    home?: {
      workRoute?: {
        steps?: Array<Partial<WorkRouteStep>>;
        title?: string;
      };
    };
  };
};

const fallbackCopy: Record<"en" | "es", WorkRouteCopy> = {
  en: {
    title: "Metal Recovery Roadmap",
    steps: [
      {
        title: "Information Intake",
        body: "We receive photos, approximate weight, city, piece type, and industrial process context.",
        bullets: [
          "General and close-up photos",
          "Quantity, weight, or volume",
          "Material origin",
        ],
      },
      {
        title: "Initial Identification",
        body: "We classify the lot by material family and detect signals of technical value or mixing.",
        bullets: [
          "Tungsten and tungsten carbide",
          "Stainless steels and specialty alloys",
          "Non-ferrous and process materials",
        ],
      },
      {
        title: "Valuation",
        body: "We structure a commercial read based on material, condition, cleanliness, volume, and demand.",
        bullets: [
          "Material-oriented price",
          "Condition and separation",
          "Buying viability",
        ],
      },
      {
        title: "Logistics Coordination",
        body: "We define pickup, storage, or shipment depending on location and lot characteristics.",
        bullets: [
          "Warehouse or pickup point",
          "Basic documentation",
          "Logistics partner",
        ],
      },
      {
        title: "Close and Payment",
        body: "We align final conditions so Greenway's purchase or recovery can move forward clearly.",
        bullets: [
          "Lot confirmation",
          "Commercial terms",
          "Payment and support",
        ],
      },
      {
        title: "Traceability",
        body: "We record lot learnings to improve future quotes and recurring operations.",
        bullets: [
          "Photo evidence",
          "Material history",
          "Sorting improvement",
        ],
      },
    ],
  },
  es: {
    title: "Ruta De Trabajo",
    steps: [
      {
        title: "Recepción De Información",
        body: "Recibimos fotos, peso aproximado, ciudad, tipo de pieza y contexto del proceso industrial.",
        bullets: [
          "Fotos generales y de detalle",
          "Cantidad, peso o volumen",
          "Origen del material",
        ],
      },
      {
        title: "Identificación Inicial",
        body: "Clasificamos el lote por familia de material y detectamos señales de valor técnico o mezcla.",
        bullets: [
          "Tungsteno y carburo de tungsteno",
          "Inoxidables y aleaciones especiales",
          "No ferrosos y materiales de proceso",
        ],
      },
      {
        title: "Valorización",
        body: "Estructuramos una lectura comercial según material, estado, limpieza, volumen y demanda.",
        bullets: [
          "Precio orientado por material",
          "Condición y separación",
          "Viabilidad de compra",
        ],
      },
      {
        title: "Coordinación Logística",
        body: "Definimos recolección, almacenamiento o despacho según ubicación y características del lote.",
        bullets: [
          "Bodega o punto de retiro",
          "Documentación básica",
          "Aliado logístico",
        ],
      },
      {
        title: "Cierre y Pago",
        body: "Alineamos condiciones finales para que la compra o recuperación avance con claridad.",
        bullets: [
          "Confirmación del lote",
          "Condiciones comerciales",
          "Pago y soporte",
        ],
      },
      {
        title: "Trazabilidad",
        body: "Registramos aprendizajes del lote para mejorar futuras cotizaciones y operaciones recurrentes.",
        bullets: [
          "Evidencia fotográfica",
          "Historial de materiales",
          "Mejora de clasificación",
        ],
      },
    ],
  },
};

function getStep(
  stepMessages: Array<Partial<WorkRouteStep>> | undefined,
  fallback: WorkRouteStep,
  index: number,
): WorkRouteStep {
  const step = stepMessages?.[index];

  return {
    body: step?.body ?? fallback.body,
    bullets: step?.bullets?.length ? step.bullets : fallback.bullets,
    title: step?.title ?? fallback.title,
  };
}

export async function HomeWorkRoute() {
  const locale = await getLocale();
  const messages = (await getMessages()) as WorkRouteMessages;
  const fallback = fallbackCopy[locale === "en" ? "en" : "es"];
  const routeMessages = messages.Pages?.home?.workRoute;
  const steps = fallback.steps.map((step, index) =>
    getStep(routeMessages?.steps, step, index),
  );

  return (
    <section
      className="border-y border-[var(--color-border)] bg-[var(--gw-sand)] px-6 py-20"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          className="text-center text-3xl font-bold text-[var(--gw-blue)] sm:text-4xl"
          data-aos="fade-up"
        >
          {routeMessages?.title ?? fallback.title}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <article
              className="group relative min-h-[276px] rounded-[4px] border border-[#d7dde3] bg-white p-7 shadow-[0_16px_36px_rgba(15,23,42,0.08)] transition-colors duration-200 hover:border-[var(--gw-blue)]"
              data-aos="fade-up"
              data-aos-delay={String(100 + index * 70)}
              key={step.title}
            >
              <div className="flex items-start gap-4">
                <span className="relative grid h-10 min-w-10 place-items-center overflow-hidden rounded-[3px] border border-[#cbd5e1] bg-[#f8fafc] pl-1 text-sm font-bold text-[var(--gw-blue)] shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1 bg-[var(--gw-green)]"
                  />
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-bold leading-tight text-[var(--gw-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--gw-ink)]">
                    {step.body}
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 pl-14 text-base leading-6 text-[var(--color-muted)]">
                {step.bullets.map((bullet) => (
                  <li className="list-disc marker:text-[var(--gw-green)]" key={bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
