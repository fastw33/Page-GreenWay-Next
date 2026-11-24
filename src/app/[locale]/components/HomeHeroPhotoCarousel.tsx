"use client";

import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState, type TouchEvent } from "react";

const rotationInterval = 6500;

export function HomeHeroPhotoCarousel({ photos }: { photos: readonly string[] }) {
  const t = useTranslations("Pages.home.videoHero.carousel");
  const stageRef = useRef<HTMLDivElement>(null);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const [selection, setSelection] = useState({ previous: 0, requested: 0 });
  const [loadedPhotos, setLoadedPhotos] = useState([0]);
  const [paused, setPaused] = useState(false);
  const [canRotate, setCanRotate] = useState(false);
  const requestedIndex = selection.requested;
  const visibleIndex = loadedPhotos.includes(requestedIndex)
    ? requestedIndex
    : selection.previous;

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    let inView = false;

    function syncRotation() {
      setCanRotate(inView && motion.matches && !document.hidden);
    }

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncRotation();
    }, { threshold: 0.15 });

    observer.observe(stage);
    motion.addEventListener("change", syncRotation);
    document.addEventListener("visibilitychange", syncRotation);

    return () => {
      observer.disconnect();
      motion.removeEventListener("change", syncRotation);
      document.removeEventListener("visibilitychange", syncRotation);
    };
  }, []);

  useEffect(() => {
    if (paused || !canRotate || photos.length < 2) return;

    const timer = window.setTimeout(() => {
      setSelection({
        previous: visibleIndex,
        requested: (requestedIndex + 1) % photos.length,
      });
    }, rotationInterval);

    return () => window.clearTimeout(timer);
  }, [canRotate, paused, photos.length, requestedIndex, visibleIndex]);

  function selectPhoto(index: number) {
    setPaused(true);
    setSelection({ previous: visibleIndex, requested: index });
  }

  function startSwipe(event: TouchEvent<HTMLDivElement>) {
    const touch = event.touches[0];
    swipeStart.current = event.touches.length === 1
      ? { x: touch.clientX, y: touch.clientY }
      : null;
  }

  function endSwipe(event: TouchEvent<HTMLDivElement>) {
    const start = swipeStart.current;
    swipeStart.current = null;
    if (!start) return;

    const touch = event.changedTouches[0];
    const distanceX = touch.clientX - start.x;
    const distanceY = touch.clientY - start.y;
    if (Math.abs(distanceX) < 44 || Math.abs(distanceX) <= Math.abs(distanceY)) return;

    const direction = distanceX < 0 ? 1 : -1;
    selectPhoto((requestedIndex + direction + photos.length) % photos.length);
  }

  return (
    <div
      className="absolute inset-0 touch-pan-y lg:hidden"
      onTouchEnd={endSwipe}
      onTouchStart={startSwipe}
      ref={stageRef}
    >
      {photos.map((photo, index) => {
        // The first photo is already in the server-rendered picture.
        if (index === 0 || (!loadedPhotos.includes(index) && index !== requestedIndex)) {
          return null;
        }

        return (
          <Image
            alt=""
            aria-hidden="true"
            className={
              "pointer-events-none object-cover transition-opacity duration-500 motion-reduce:transition-none " +
              (visibleIndex === index ? "opacity-100" : "opacity-0")
            }
            fill
            key={photo}
            loading="eager"
            onLoad={() => setLoadedPhotos((loaded) => loaded.includes(index)
              ? loaded
              : [...loaded, index])}
            quality={45}
            sizes="100vw"
            src={photo}
          />
        );
      })}

      <div
        aria-label={t("label")}
        className="absolute left-6 top-5 z-20 flex items-center rounded-full border border-white/25 bg-[var(--gw-ink)]/70 px-1 text-white"
        role="group"
      >
        <button
          aria-label={t(paused ? "play" : "pause")}
          className="grid size-11 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-white motion-reduce:hidden"
          onClick={() => setPaused((value) => !value)}
          type="button"
        >
          {paused ? <Play aria-hidden="true" size={15} /> : <Pause aria-hidden="true" size={15} />}
        </button>
        {photos.map((photo, index) => (
          <button
            aria-current={index === visibleIndex ? "true" : undefined}
            aria-label={t("photo", { number: index + 1 })}
            className="grid size-11 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-white"
            key={photo}
            onClick={() => selectPhoto(index)}
            onFocus={() => setPaused(true)}
            type="button"
          >
            <span
              className={index === visibleIndex
                ? "h-1.5 w-5 rounded-full bg-[var(--gw-green)]"
                : "size-1.5 rounded-full bg-white/75"}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
