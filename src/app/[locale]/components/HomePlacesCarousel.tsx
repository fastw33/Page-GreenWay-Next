"use client";

import Image from "next/image";
import { type CSSProperties, useCallback, useRef, useState } from "react";
import { BrandIcon } from "@/components/global/BrandIcons";
import { Link } from "@/i18n/navigation";

export type HomePlaceItem = {
  country: string;
  href: string;
  image: string;
  imageAlt: string;
  label: string;
  note: string;
};

type HomePlacesCarouselProps = {
  cta: string;
  eyebrow: string;
  items: HomePlaceItem[];
  nextLabel: string;
  photoSlotLabel: string;
  previousLabel: string;
  title: string;
};

export function HomePlacesCarousel({
  cta,
  eyebrow,
  items,
  nextLabel,
  photoSlotLabel,
  previousLabel,
  title,
}: HomePlacesCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [manualOffset, setManualOffset] = useState(0);
  const hasLoop = items.length > 1;
  const trackStyle = {
    "--gw-home-places-offset": `${manualOffset}px`,
  } as CSSProperties;

  const shiftByCard = useCallback(
    (direction: -1 | 1) => {
      const track = trackRef.current;

      if (!track || !hasLoop) {
        return;
      }

      const loopSet = track.querySelector<HTMLElement>("[data-place-set]");
      const card = track.querySelector<HTMLElement>("[data-place-card]");
      const step = (card?.offsetWidth ?? Math.min(track.clientWidth, 360)) + 16;
      const loopWidth = loopSet?.offsetWidth ?? 0;

      if (!loopWidth) {
        return;
      }

      setManualOffset((offset) => {
        const nextOffset = offset - direction * step;
        return ((nextOffset % loopWidth) + loopWidth) % loopWidth;
      });
    },
    [hasLoop],
  );

  return (
    <section
      className="overflow-hidden border-y border-[#d7dde3] bg-white py-18 sm:py-20"
      data-aos="fade-up"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6">
        <div className="flex flex-col gap-4 border-l-4 border-[var(--gw-blue)] pl-6 sm:pl-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--gw-green)]">
            {eyebrow}
          </p>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[var(--gw-ink)] sm:text-4xl">
            {title}
          </h2>
        </div>
      </div>

      <div
        className="relative mt-10"
        data-aos="fade-up"
        data-aos-delay="120"
      >
        <button
          aria-label={previousLabel}
          className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-[4px] border border-[#cfd7de] bg-white/95 text-[var(--gw-ink)] shadow-[0_14px_34px_rgba(15,23,42,0.16)] backdrop-blur transition duration-200 hover:-translate-x-0.5 hover:border-[var(--gw-blue)] hover:text-[var(--gw-blue)] disabled:pointer-events-none disabled:translate-x-0 disabled:opacity-30 sm:left-6"
          disabled={!hasLoop}
          onClick={() => shiftByCard(-1)}
          type="button"
        >
          <BrandIcon className="h-5 w-5 rotate-180" name="arrowRight" />
        </button>
        <button
          aria-label={nextLabel}
          className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-[4px] border border-[#cfd7de] bg-white/95 text-[var(--gw-ink)] shadow-[0_14px_34px_rgba(15,23,42,0.16)] backdrop-blur transition duration-200 hover:translate-x-0.5 hover:border-[var(--gw-green)] hover:text-[var(--gw-green)] disabled:pointer-events-none disabled:translate-x-0 disabled:opacity-30 sm:right-6"
          disabled={!hasLoop}
          onClick={() => shiftByCard(1)}
          type="button"
        >
          <BrandIcon className="h-5 w-5" name="arrowRight" />
        </button>

        <div className="gw-home-places-marquee px-6 pb-4">
          <div
            className="gw-home-places-track flex"
            ref={trackRef}
            style={trackStyle}
          >
            {[0, 1, 2].map((setIndex) => (
              <div
                aria-hidden={hasLoop && setIndex !== 1 ? true : undefined}
                className="flex shrink-0 gap-4 pr-4"
                data-place-set
                key={setIndex}
              >
                {items.map((item, itemIndex) => (
                  <Link
                    aria-label={`${cta}: ${item.label}, ${item.country}`}
                    className="group flex h-[380px] w-[300px] shrink-0 flex-col overflow-hidden rounded-[4px] border border-[#d7dde3] bg-white transition-colors duration-200 hover:border-[var(--gw-blue)] sm:h-[398px] sm:w-[360px]"
                    data-place-card={setIndex === 1 ? true : undefined}
                    href={item.href}
                    key={`${setIndex}-${itemIndex}-${item.href}-${item.label}`}
                    tabIndex={hasLoop && setIndex !== 1 ? -1 : undefined}
                  >
                    <span className="relative block h-[184px] shrink-0 overflow-hidden bg-[#eef4f1] sm:h-[196px]">
                      {item.image ? (
                        <Image
                          alt={item.imageAlt}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          fill
                          quality={60}
                          sizes="(min-width: 640px) 360px, 300px"
                          src={item.image}
                        />
                      ) : (
                        <span className="flex h-full items-center justify-center border-b border-[#d7dde3] text-xs font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)]">
                          {photoSlotLabel}
                        </span>
                      )}
                    </span>
                    <span className="flex flex-1 flex-col p-5">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gw-blue)]">
                        {item.country}
                      </span>
                      <span className="mt-5 text-2xl font-bold leading-tight text-[var(--gw-ink)]">
                        {item.label}
                      </span>
                      <span className="mt-3 overflow-hidden text-sm leading-6 text-[var(--color-muted)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                        {item.note}
                      </span>
                      <span className="mt-auto pt-5 text-sm font-bold text-[var(--gw-green)] transition-colors duration-200 group-hover:text-[var(--gw-blue)]">
                        {cta}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
