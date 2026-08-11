"use client";

import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";
import companyAnimation from "@/assets/lotties/company.json";
import drillingGearsAnimation from "@/assets/lotties/drilling-gears.json";
import marketIntelligenceAnimation from "@/assets/lotties/market-intelligence.json";
import processAnimation from "@/assets/lotties/process.json";
import solutionsAnimation from "@/assets/lotties/solutions.json";
import technologyAnimation from "@/assets/lotties/technology.json";

export type BrandLottieName =
  | "company"
  | "drillingGears"
  | "marketIntelligence"
  | "process"
  | "solutions"
  | "technology";

type BrandLottieProps = {
  className?: string;
  name: BrandLottieName;
};

const animations = {
  company: companyAnimation,
  drillingGears: drillingGearsAnimation,
  marketIntelligence: marketIntelligenceAnimation,
  process: processAnimation,
  solutions: solutionsAnimation,
  technology: technologyAnimation,
} satisfies Record<BrandLottieName, unknown>;

export function BrandLottie({ className, name }: BrandLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => {
      const player = lottieRef.current;

      if (!player) {
        return;
      }

      player.setSubframe(true);

      if (motionQuery.matches) {
        player.goToAndStop(0, true);
        return;
      }

      player.goToAndPlay(0, true);
    };

    updateMotion();
    motionQuery.addEventListener("change", updateMotion);

    return () => motionQuery.removeEventListener("change", updateMotion);
  }, [name]);

  return (
    <div aria-hidden="true" className={className}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animations[name]}
        autoplay
        loop
        onDOMLoaded={() => lottieRef.current?.goToAndPlay(0, true)}
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
