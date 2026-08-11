"use client";

import { useEffect, useRef, useState } from "react";
import type { HomeVideo } from "@/config/homeVideos";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const activeVideo = videos[activeIndex];
  const hasMultipleVideos = videos.length > 1;

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video || !activeVideo) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [activeVideo]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !activeVideo) {
      return;
    }

    video.load();
    video.play().catch(() => undefined);
  }, [activeVideo]);

  function goToVideo(index: number) {
    setActiveIndex(index);
  }

  function goToNextVideo() {
    if (!hasMultipleVideos) {
      return;
    }

    setActiveIndex((currentIndex) => (currentIndex + 1) % videos.length);
  }

  return (
    <section
      className="relative isolate min-h-[calc(100svh-var(--gw-nav-h))] overflow-hidden bg-[var(--gw-ink)]"
      data-aos="fade-in"
      data-aos-duration="900"
      data-aos-offset="0"
      ref={sectionRef}
    >
      {activeVideo ? (
        <video
          aria-label={activeVideo.label}
          className="absolute inset-0 h-full w-full object-cover"
          controls={false}
          key={activeVideo.id}
          loop={!hasMultipleVideos}
          muted
          onEnded={goToNextVideo}
          playsInline
          poster={activeVideo.poster}
          preload="metadata"
          ref={videoRef}
        >
          <source src={activeVideo.src} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-[var(--gw-grad-brand-135)]" />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.82),rgba(15,23,42,0.46),rgba(15,23,42,0.1))]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,rgba(15,23,42,0.86),rgba(15,23,42,0))]" />

      <div
        className="relative z-10 mx-auto flex min-h-[calc(100svh-var(--gw-nav-h))] max-w-7xl flex-col justify-end gap-9 px-6 pb-12 pt-16"
        data-aos="fade-up"
        data-aos-delay="180"
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
            {copy.announcements.map((announcement, index) => (
              <div
                className="border-l-4 border-[var(--gw-green)] bg-white/[0.08] px-5 py-4 backdrop-blur-sm transition-colors duration-200 hover:bg-white/[0.13]"
                data-aos="fade-left"
                data-aos-delay={260 + index * 90}
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

        {hasMultipleVideos ? (
          <div className="flex items-center gap-2" aria-label="Videos destacados">
            {videos.map((video, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  aria-label={video.label}
                  aria-pressed={isActive}
                  className={`h-2.5 cursor-pointer rounded-full transition-all duration-200 ${
                    isActive
                      ? "w-10 bg-[var(--color-highlight)]"
                      : "w-2.5 bg-white/60 hover:bg-white"
                  }`}
                  key={video.id}
                  onClick={() => goToVideo(index)}
                  type="button"
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
