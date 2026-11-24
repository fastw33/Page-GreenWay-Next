"use client";

import { useEffect, useState } from "react";
import type { HomeVideo } from "@/config/homeVideos";

export function HomeHeroVideo({ video }: { video: HomeVideo }) {
  const [canLoadVideo, setCanLoadVideo] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;

    function canPlayVideo() {
      return desktopQuery.matches && !motionQuery.matches;
    }

    function scheduleVideo() {
      window.clearTimeout(timer);
      if (canPlayVideo() && document.readyState === "complete") {
        timer = window.setTimeout(() => setCanLoadVideo(canPlayVideo()), 1800);
      }
    }

    function handleMediaChange() {
      if (!canPlayVideo()) setCanLoadVideo(false);
      scheduleVideo();
    }

    if (document.readyState === "complete") {
      scheduleVideo();
    } else {
      window.addEventListener("load", scheduleVideo, { once: true });
    }
    desktopQuery.addEventListener("change", handleMediaChange);
    motionQuery.addEventListener("change", handleMediaChange);

    return () => {
      window.removeEventListener("load", scheduleVideo);
      desktopQuery.removeEventListener("change", handleMediaChange);
      motionQuery.removeEventListener("change", handleMediaChange);
      window.clearTimeout(timer);
    };
  }, []);

  if (!canLoadVideo) return null;

  return (
    <video
      aria-hidden="true"
      autoPlay
      className="absolute inset-0 hidden h-full w-full object-cover lg:block"
      controls={false}
      disablePictureInPicture
      loop
      muted
      playsInline
      preload="none"
    >
      <source src={video.src} type="video/mp4" />
    </video>
  );
}
