import Image from "next/image";
import Link from "next/link";
import { actionLinkClassName } from "./ActionLink";
import { BrandIcon } from "./BrandIcons";

type NotFoundLocale = "es" | "en";

const copy = {
  en: {
    eyebrow: "Route not found",
    title: "This Material Route Is Not In Our System.",
    body: "The page may have moved, but Greenway still buys and evaluates tungsten, wolfram, tungsten carbide, specialty alloys, and recoverable industrial metals.",
    primaryCta: "Quote material",
    secondaryCta: "View materials",
    home: "Return home",
    routesTitle: "Useful Routes",
    routes: [
      { href: "/tungsten", label: "Tungsten and wolfram buying" },
      { href: "/tungsten-carbide", label: "Tungsten carbide buying" },
      { href: "/about", label: "International presence" },
    ],
    signal: "404 / final buyer for industrial metal recovery",
  },
  es: {
    eyebrow: "Ruta no encontrada",
    title: "Esta Ruta De Material No Está En Nuestro Sistema.",
    body: "La página pudo moverse, pero Greenway sigue comprando y evaluando tungsteno, wolframio, carburo de tungsteno, aleaciones especiales y metales industriales recuperables.",
    primaryCta: "Cotizar material",
    secondaryCta: "Ver materiales",
    home: "Volver al inicio",
    routesTitle: "Rutas Útiles",
    routes: [
      { href: "/tungsteno", label: "Compra de tungsteno y wolframio" },
      { href: "/carburo-de-tungsteno", label: "Compra de carburo de tungsteno" },
      { href: "/about", label: "Presencia internacional" },
    ],
    signal: "404 / comprador final para recuperación de metales",
  },
};

function localizedHref(locale: NotFoundLocale, href: string) {
  if (locale === "en") {
    return href === "/" ? "/en" : `/en${href}`;
  }

  return href;
}

export function NotFoundExperience({ locale }: { locale: NotFoundLocale }) {
  const pageCopy = copy[locale];

  return (
    <main className="bg-white">
      <section className="relative isolate min-h-[calc(100svh-var(--gw-nav-h))] overflow-hidden bg-[var(--gw-ink)] text-white">
        <div className="absolute inset-0">
          <Image
            alt=""
            className="object-cover opacity-[0.36]"
            fill
            priority
            sizes="100vw"
            src="/countries/estados-unidos/houston/houston-metal-turnings-tag-01.webp"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.96),rgba(15,23,42,0.74)_52%,rgba(15,23,42,0.28))]" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100svh-var(--gw-nav-h))] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_420px]">
          <div data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--gw-green)]">
              {pageCopy.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.98] sm:text-6xl lg:text-7xl">
              {pageCopy.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">
              {pageCopy.body}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                className={actionLinkClassName("solid")}
                href={localizedHref(locale, "/contacto")}
              >
                <span>{pageCopy.primaryCta}</span>
                <BrandIcon className="h-4 w-4" name="arrowRight" />
              </Link>
              <Link
                className={actionLinkClassName("secondary")}
                href={localizedHref(locale, "/productosservicios")}
              >
                <span>{pageCopy.secondaryCta}</span>
                <BrandIcon className="h-4 w-4" name="arrowRight" />
              </Link>
            </div>
          </div>

          <aside
            className="border-y border-white/18 py-7 lg:border-l lg:border-y-0 lg:py-0 lg:pl-8"
            data-aos="fade-left"
            data-aos-delay="120"
          >
            <p className="text-[84px] font-bold leading-none text-white/10 sm:text-[110px]">
              404
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.24em] text-white/54">
              {pageCopy.routesTitle}
            </p>
            <nav className="mt-6 divide-y divide-white/14 border-y border-white/14">
              {pageCopy.routes.map((route) => (
                <Link
                  className="flex items-center justify-between gap-4 py-4 text-base font-semibold text-white/82 transition-colors duration-200 hover:text-[var(--gw-green)]"
                  href={localizedHref(locale, route.href)}
                  key={route.href}
                >
                  <span>{route.label}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </nav>
            <Link
              className="mt-7 inline-flex text-sm font-bold uppercase tracking-[0.18em] text-[var(--gw-green)]"
              href={localizedHref(locale, "/")}
            >
              {pageCopy.home}
            </Link>
          </aside>

          <p className="absolute bottom-7 right-6 hidden max-w-[280px] text-right text-xs font-bold uppercase tracking-[0.2em] text-white/58 lg:block">
            {pageCopy.signal}
          </p>
        </div>
      </section>
    </main>
  );
}
