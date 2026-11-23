import { localizedMaterialSlugs } from "../config/localizedMaterialSlugs";
import type { AppLocale } from "./routing";

const translatedPaths = [
  { es: "/about/estados-unidos", en: "/about/united-states" },
  { es: "/about/espana", en: "/about/spain" },
  { es: "/about/italia", en: "/about/italy" },
  { es: "/politica-de-privacidad", en: "/privacy-policy" },
  { es: "/terminos-y-condiciones", en: "/terms-and-conditions" },
  ...localizedMaterialSlugs.map(({ esSlug, enSlug }) => ({
    es: "/" + esSlug,
    en: "/" + enSlug,
  })),
];

export function localizedPath(locale: AppLocale, path = "") {
  const unprefixedPath = "/" + path.replace(/^\/+/, "");
  const route = translatedPaths.find(
    ({ es, en }) => unprefixedPath === es || unprefixedPath === en,
  );
  const pathInLocale = route?.[locale] ?? unprefixedPath;

  if (locale === "es") {
    return pathInLocale;
  }

  return pathInLocale === "/" ? "/en" : "/en" + pathInLocale;
}
