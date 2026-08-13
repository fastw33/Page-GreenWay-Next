import { homeVideos } from "@/config/homeVideos";
import type { Metadata } from "next";
import { getLocale, getMessages } from "next-intl/server";
import { HomeActionBand } from "./components/HomeActionBand";
import { HomeAllies } from "./components/HomeAllies";
import { HomeFlowBreaker } from "./components/HomeFlowBreaker";
import { HomeGreeting } from "./components/HomeGreeting";
import { HomeMapLocations } from "./components/HomeMapLocations";
import { HomePlacesShowcase } from "./components/HomePlacesShowcase";
import { getPageMetadata } from "@/lib/seo";
import {
  HomeVideoStage,
  type HomeVideoAnnouncement,
  type HomeVideoCopy,
} from "./components/HomeVideoStage";
import { HomeWorkRoute } from "./components/HomeWorkRoute";

type HomeMessages = {
  Pages?: {
    home?: {
      videoHero?: Partial<Omit<HomeVideoCopy, "announcements">> & {
        announcements?: Partial<HomeVideoAnnouncement>[];
      };
    };
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return getPageMetadata(locale, "home");
}

const fallbackVideoHero: Record<"en" | "es", HomeVideoCopy> = {
  en: {
    announcements: [
      {
        body: "Tungsten, tungsten carbide, nickel, cobalt, titanium, stainless steels, and specialty alloys.",
        id: "operations",
        title: "Buying and Recovery",
      },
      {
        body: "Photos, industrial origin, weight, and initial sorting for more accurate quoting.",
        id: "market",
        title: "Technical Evaluation",
      },
    ],
    body:
      "We identify, value, and buy recoverable metals so every lot moves through a final purchasing process with traceability and speed.",
    eyebrow: "Green Way International",
    title: "Industrial Metal Recovery With International Reach.",
  },
  es: {
    announcements: [
      {
        body: "Tungsteno, carburo de tungsteno, níquel, cobalto, titanio, inoxidables y aleaciones especiales.",
        id: "operations",
        title: "Compra y Recuperación",
      },
      {
        body: "Fotos, origen industrial, peso y clasificación inicial para cotizar con mayor precisión.",
        id: "market",
        title: "Evaluación Técnica",
      },
    ],
    body:
      "Identificamos, valorizamos y compramos materiales metálicos recuperables para que cada lote avance con trazabilidad, velocidad y compra final.",
    eyebrow: "Green Way International",
    title: "Recuperación De Metales Industriales Con Alcance Internacional.",
  },
};

function mergeAnnouncements(
  fallback: HomeVideoAnnouncement[],
  messages?: Partial<HomeVideoAnnouncement>[],
) {
  return fallback.map((announcement, index) => ({
    ...announcement,
    ...(messages?.[index] ?? {}),
    id: announcement.id,
  }));
}

export default async function HomePage() {
  const locale = await getLocale();
  const messages = (await getMessages()) as HomeMessages;
  const fallback = fallbackVideoHero[locale === "en" ? "en" : "es"];
  const videoHero = messages.Pages?.home?.videoHero;
  const videoHeroCopy = {
    announcements: mergeAnnouncements(
      fallback.announcements,
      videoHero?.announcements,
    ),
    body: videoHero?.body ?? fallback.body,
    eyebrow: videoHero?.eyebrow ?? fallback.eyebrow,
    title: videoHero?.title ?? fallback.title,
  };

  return (
    <main>
      <HomeVideoStage copy={videoHeroCopy} videos={homeVideos} />
      <HomeGreeting />
      <HomeFlowBreaker />
      <HomeWorkRoute />
      <HomeAllies />
      <HomeActionBand />
      <HomePlacesShowcase />
      <HomeMapLocations />
    </main>
  );
}
