"use client";

import { useEffect, useState } from "react";
import type { HomeVideo } from "@/config/homeVideos";

type HomeHeroVideoProps = {
  videos: HomeVideo[];
};

export function HomeHeroVideo({ videos }: HomeHeroVideoProps) {
  const [canLoadVideo, setCanLoadVideo] = useState(false);
  const activeVideo = videos[0];

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motionQuery.matches) {
      return;
    }

    const timeout = window.setTimeout(() => setCanLoadVideo(true), 350);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!activeVideo || !canLoadVideo) {
    return null;
  }

  return (
    <video
      aria-hidden="true"
      autoPlay
      className="absolute inset-0 h-full w-full object-cover"
      controls={false}
      disablePictureInPicture
      loop
      muted
      playsInline
      poster={activeVideo.poster}
      preload="metadata"
    >
      <source src={activeVideo.src} type="video/mp4" />
    </video>
  );
}
