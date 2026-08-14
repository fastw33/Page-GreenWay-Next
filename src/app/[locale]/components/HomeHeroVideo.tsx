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
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!desktopQuery.matches || motionQuery.matches) {
      return;
    }

    let timeout: number | undefined;

    function loadAfterInitialPaint() {
      timeout = window.setTimeout(() => setCanLoadVideo(true), 1800);
    }

    if (document.readyState === "complete") {
      loadAfterInitialPaint();
    } else {
      window.addEventListener("load", loadAfterInitialPaint, { once: true });
    }

    return () => {
      window.removeEventListener("load", loadAfterInitialPaint);

      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
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
      preload="none"
    >
      <source src={activeVideo.src} type="video/mp4" />
    </video>
  );
}
