import Image from "next/image";
import type { HomeVideo } from "@/config/homeVideos";
import { HomeHeroVideo } from "./HomeHeroVideo";

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

export function HomeVideoStage({ copy, videos }: HomeVideoStageProps) {
  const activeVideo = videos[0];
  const poster =
    activeVideo?.poster ??
    "/countries/estados-unidos/houston/houston-metal-turnings-tag-01.webp";

  return (
    <section
      className="relative isolate min-h-[calc(100svh-var(--gw-nav-h))] overflow-hidden bg-[var(--gw-ink)]"
    >
      {activeVideo ? (
        <>
          <Image
            alt=""
            aria-hidden="true"
            className="object-cover"
            fill
            preload
            quality={72}
            sizes="100vw"
            src={poster}
          />
          <HomeHeroVideo videos={videos} />
        </>
      ) : (
        <div className="absolute inset-0 bg-[var(--gw-grad-brand-135)]" />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.82),rgba(15,23,42,0.46),rgba(15,23,42,0.1))]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,rgba(15,23,42,0.86),rgba(15,23,42,0))]" />

      <div
        className="relative z-10 mx-auto flex min-h-[calc(100svh-var(--gw-nav-h))] max-w-7xl flex-col justify-end gap-9 px-6 pb-12 pt-16"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[var(--gw-green)]">
              {copy.eyebrow}
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
              {copy.body}
            </p>
          </div>

          <div className="grid gap-3">
            {copy.announcements.map((announcement) => (
              <div
                className="border-l-4 border-[var(--gw-green)] bg-white/[0.08] px-5 py-4 backdrop-blur-sm transition-colors duration-200 hover:bg-white/[0.13]"
                key={announcement.id}
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-highlight)]">
                  {announcement.title}
                </p>
                <p className="mt-2 text-base leading-7 text-white/86">
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
