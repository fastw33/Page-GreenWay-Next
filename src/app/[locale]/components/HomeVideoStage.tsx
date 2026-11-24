import { getImageProps } from "next/image";
import { getTranslations } from "next-intl/server";
import type { HomeVideo } from "@/config/homeVideos";
import { HomeHeroPhotoCarousel } from "./HomeHeroPhotoCarousel";
import { HomeHeroVideo } from "./HomeHeroVideo";

const mobileHeroMedia = "(width < 1024px)";
const mobileLeadPhoto = "/videos/home/miami-hero-768.avif";

const mobileHeroPhotos = [
  "/countries/estados-unidos/miami/miami-warehouse-logistics-02.webp",
  "/countries/colombia/bogota/bogota-matrix-bits-inserts-03.webp",
  "/countries/estados-unidos/houston/houston-industrial-warehouse-05.webp",
] as const;

export type HomeVideoAnnouncement = {
  body: string;
  id: string;
  title: string;
};

export type HomeVideoCopy = {
  announcements: HomeVideoAnnouncement[];
  body: string;
  eyebrow: string;
  title: string;
};

type HomeVideoStageProps = {
  copy: HomeVideoCopy;
  videos: HomeVideo[];
};

export async function HomeVideoStage({ copy, videos }: HomeVideoStageProps) {
  const t = await getTranslations("Pages.home.videoHero.carousel");
  const activeVideo = videos[0];
  const imageOptions = {
    alt: "",
    className: "object-cover",
    fetchPriority: "high",
    fill: true,
    loading: "eager",
    quality: 45,
    sizes: "100vw",
  } as const;
  const { props: mobilePhoto } = getImageProps({
    ...imageOptions,
    src: mobileHeroPhotos[0],
  });
  const { props: desktopPoster } = getImageProps({
    ...imageOptions,
    src: activeVideo?.poster ?? mobileHeroPhotos[0],
  });

  return (
    <section
      className="relative isolate min-h-[calc(100svh-var(--gw-nav-h))] overflow-hidden bg-[var(--gw-ink)]"
    >
      <link
        as="image"
        fetchPriority="high"
        href={mobileLeadPhoto}
        media={mobileHeroMedia}
        rel="preload"
        type="image/avif"
      />
      <picture>
        <source media={mobileHeroMedia} srcSet={mobileLeadPhoto} type="image/avif" />
        <source
          media="(min-width: 1024px)"
          sizes={desktopPoster.sizes}
          srcSet={desktopPoster.srcSet}
        />
        <img {...mobilePhoto} alt="" aria-hidden="true" />
      </picture>
      <HomeHeroPhotoCarousel
        labels={{ group: t("label"), pause: t("pause"), play: t("play") }}
        photos={mobileHeroPhotos.map((src, index) => ({
          src,
          label: t("photo", { number: index + 1 }),
        }))}
      />
      {activeVideo && <HomeHeroVideo video={activeVideo} />}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.22),rgba(15,23,42,0.62)_34%,rgba(15,23,42,0.8))] lg:bg-[linear-gradient(90deg,rgba(15,23,42,0.82),rgba(15,23,42,0.46),rgba(15,23,42,0.1))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,rgba(15,23,42,0.86),rgba(15,23,42,0))]" />

      <div
        className="pointer-events-none relative z-10 mx-auto flex min-h-[calc(100svh-var(--gw-nav-h))] max-w-7xl flex-col justify-end gap-9 px-6 pb-8 pt-20 lg:pb-12 lg:pt-16"
      >
        <div className="pointer-events-auto grid gap-6 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-end lg:gap-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[var(--gw-green)] lg:mb-5">
              {copy.eyebrow}
            </p>
            <h1 className="max-w-4xl text-[clamp(1.875rem,8.6vw,2.25rem)] font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              {copy.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/82 sm:text-xl sm:leading-8 lg:mt-6">
              {copy.body}
            </p>
          </div>

          <div className="grid gap-2 lg:gap-3">
            {copy.announcements.map((announcement) => (
              <div
                className="border-l-4 border-[var(--gw-green)] bg-[#222d3e]/90 p-4 lg:bg-white/[0.08] lg:px-5 lg:backdrop-blur-sm lg:transition-colors lg:duration-200 lg:hover:bg-white/[0.13]"
                key={announcement.id}
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-highlight)]">
                  {announcement.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/86 lg:text-base lg:leading-7">
                  {announcement.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
