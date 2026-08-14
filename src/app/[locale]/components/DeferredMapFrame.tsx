"use client";

import { useEffect, useRef, useState } from "react";

type DeferredMapFrameProps = {
  mapUrl: string;
  title: string;
};

export function DeferredMapFrame({ mapUrl, title }: DeferredMapFrameProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const target = rootRef.current;

    if (!target || shouldLoad) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "80px",
        threshold: 0.1,
      },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div
      className="absolute inset-0 bg-[linear-gradient(135deg,#eef4f1_0%,#dde8e3_48%,#cfdad6_100%)]"
      ref={rootRef}
    >
      <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
      {shouldLoad ? (
        <iframe
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={mapUrl}
          title={title}
        />
      ) : null}
    </div>
  );
}
