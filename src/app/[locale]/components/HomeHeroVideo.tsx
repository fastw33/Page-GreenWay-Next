"use client";

import { useEffect, useState } from "react";
import type { HomeVideo } from "@/config/homeVideos";

type HomeHeroVideoProps = {
  videos: HomeVideo[];
};

export function HomeHeroVideo({ videos }: HomeHeroVideoProps) {
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
  const activeVideo = videos[0];

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function updateVideoPreference() {
      setShouldPlayVideo(desktopQuery.matches && !motionQuery.matches);
    }

    updateVideoPreference();
    desktopQuery.addEventListener("change", updateVideoPreference);
    motionQuery.addEventListener("change", updateVideoPreference);

    return () => {
      desktopQuery.removeEventListener("change", updateVideoPreference);
      motionQuery.removeEventListener("change", updateVideoPreference);
    };
  }, []);

  if (!activeVideo || !shouldPlayVideo) {
    return null;
  }

  return (
    <video
      aria-label={activeVideo.label}
      autoPlay
      className="absolute inset-0 hidden h-full w-full object-cover md:block"
      controls={false}
      loop
      muted
      playsInline
      poster={activeVideo.poster}
      preload="none"
    >
      <source src={activeVideo.src} type="video/mp4" />
    </video>
  );
}
