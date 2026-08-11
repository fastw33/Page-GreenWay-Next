import { getLocale } from "next-intl/server";
import { NotFoundExperience } from "@/components/global/NotFoundExperience";

export default async function CountryNotFound() {
  const locale = await getLocale();

  return <NotFoundExperience locale={locale === "en" ? "en" : "es"} />;
}
