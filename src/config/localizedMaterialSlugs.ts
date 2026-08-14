export const localizedMaterialSlugs = [
  { enSlug: "tungsten", esSlug: "tungsteno" },
  { enSlug: "tungsten-carbide", esSlug: "carburo-de-tungsteno" },
  { enSlug: "we-buy-tungsten-peru", esSlug: "compramos-tungsteno-peru" },
  {
    enSlug: "tungsten-carbide-recycling-peru",
    esSlug: "compramos-carburo-de-tungsteno-peru",
  },
  { enSlug: "we-buy-tungsten-chile", esSlug: "compramos-tungsteno-chile" },
  {
    enSlug: "tungsten-carbide-recycling-chile",
    esSlug: "compramos-carburo-de-tungsteno-chile",
  },
  { enSlug: "we-buy-tungsten-ecuador", esSlug: "compramos-tungsteno-ecuador" },
  {
    enSlug: "tungsten-carbide-recycling-ecuador",
    esSlug: "compramos-carburo-de-tungsteno-ecuador",
  },
  { enSlug: "we-buy-tungsten-bolivia", esSlug: "compramos-tungsteno-bolivia" },
  {
    enSlug: "tungsten-carbide-recycling-bolivia",
    esSlug: "compramos-carburo-de-tungsteno-bolivia",
  },
  {
    enSlug: "we-buy-tungsten-argentina",
    esSlug: "compramos-tungsteno-argentina",
  },
  {
    enSlug: "tungsten-carbide-recycling-argentina",
    esSlug: "compramos-carburo-de-tungsteno-argentina",
  },
  { enSlug: "we-buy-tungsten-panama", esSlug: "compramos-tungsteno-panama" },
  {
    enSlug: "tungsten-carbide-recycling-panama",
    esSlug: "compramos-carburo-de-tungsteno-panama",
  },
  { enSlug: "we-buy-tungsten-uruguay", esSlug: "compramos-tungsteno-uruguay" },
  {
    enSlug: "tungsten-carbide-recycling-uruguay",
    esSlug: "compramos-carburo-de-tungsteno-uruguay",
  },
  { enSlug: "we-buy-tungsten-paraguay", esSlug: "compramos-tungsteno-paraguay" },
  {
    enSlug: "tungsten-carbide-recycling-paraguay",
    esSlug: "compramos-carburo-de-tungsteno-paraguay",
  },
  {
    enSlug: "we-buy-tungsten-venezuela",
    esSlug: "compramos-tungsteno-venezuela",
  },
  {
    enSlug: "tungsten-carbide-recycling-venezuela",
    esSlug: "compramos-carburo-de-tungsteno-venezuela",
  },
  {
    enSlug: "we-buy-tungsten-united-states",
    esSlug: "compramos-tungsteno-estados-unidos",
  },
  {
    enSlug: "tungsten-carbide-recycling-united-states",
    esSlug: "compramos-carburo-de-tungsteno-estados-unidos",
  },
  { enSlug: "we-buy-tungsten-miami", esSlug: "compramos-tungsteno-miami" },
  {
    enSlug: "tungsten-carbide-recycling-miami",
    esSlug: "compramos-carburo-de-tungsteno-miami",
  },
  { enSlug: "we-buy-tungsten-florida", esSlug: "compramos-tungsteno-florida" },
  {
    enSlug: "tungsten-carbide-recycling-florida",
    esSlug: "compramos-carburo-de-tungsteno-florida",
  },
  { enSlug: "we-buy-tungsten-georgia", esSlug: "compramos-tungsteno-georgia" },
  {
    enSlug: "tungsten-carbide-recycling-georgia",
    esSlug: "compramos-carburo-de-tungsteno-georgia",
  },
  { enSlug: "we-buy-tungsten-alabama", esSlug: "compramos-tungsteno-alabama" },
  {
    enSlug: "tungsten-carbide-recycling-alabama",
    esSlug: "compramos-carburo-de-tungsteno-alabama",
  },
  {
    enSlug: "we-buy-tungsten-south-carolina",
    esSlug: "compramos-tungsteno-carolina-del-sur",
  },
  {
    enSlug: "tungsten-carbide-recycling-south-carolina",
    esSlug: "compramos-carburo-de-tungsteno-carolina-del-sur",
  },
  {
    enSlug: "we-buy-tungsten-north-carolina",
    esSlug: "compramos-tungsteno-carolina-del-norte",
  },
  {
    enSlug: "tungsten-carbide-recycling-north-carolina",
    esSlug: "compramos-carburo-de-tungsteno-carolina-del-norte",
  },
  {
    enSlug: "we-buy-tungsten-tennessee",
    esSlug: "compramos-tungsteno-tennessee",
  },
  {
    enSlug: "tungsten-carbide-recycling-tennessee",
    esSlug: "compramos-carburo-de-tungsteno-tennessee",
  },
  { enSlug: "we-buy-tungsten-texas", esSlug: "compramos-tungsteno-texas" },
  {
    enSlug: "tungsten-carbide-recycling-texas",
    esSlug: "compramos-carburo-de-tungsteno-texas",
  },
  { enSlug: "we-buy-tungsten-houston", esSlug: "compramos-tungsteno-houston" },
  {
    enSlug: "tungsten-carbide-recycling-houston",
    esSlug: "compramos-carburo-de-tungsteno-houston",
  },
  {
    enSlug: "we-buy-tungsten-louisiana",
    esSlug: "compramos-tungsteno-louisiana",
  },
  {
    enSlug: "tungsten-carbide-recycling-louisiana",
    esSlug: "compramos-carburo-de-tungsteno-louisiana",
  },
  {
    enSlug: "we-buy-tungsten-mississippi",
    esSlug: "compramos-tungsteno-mississippi",
  },
  {
    enSlug: "tungsten-carbide-recycling-mississippi",
    esSlug: "compramos-carburo-de-tungsteno-mississippi",
  },
];

export function getLocalizedMaterialPath(
  pathname: string,
  targetLocale: "es" | "en",
) {
  const segments = pathname.split("/").filter(Boolean);
  const explicitLocale = segments[0] === "en" || segments[0] === "es"
    ? segments[0]
    : undefined;
  const slugIndex = explicitLocale ? 1 : 0;
  const slug = segments[slugIndex];

  if (!slug || segments.length !== slugIndex + 1) {
    return pathname || "/";
  }

  const route = localizedMaterialSlugs.find(
    (item) => item.enSlug === slug || item.esSlug === slug,
  );

  if (!route) {
    return pathname || "/";
  }

  return targetLocale === "en" ? `/${route.enSlug}` : `/${route.esSlug}`;
}
