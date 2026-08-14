"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
} from "react";

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

type LottieComponent = ComponentType<{
  animationData: unknown;
  autoplay?: boolean;
  loop?: boolean;
  rendererSettings?: { preserveAspectRatio: string };
  style?: CSSProperties;
}>;

const animationLoaders = {
  company: () => import("@/assets/lotties/company.json"),
  drillingGears: () => import("@/assets/lotties/drilling-gears.json"),
  marketIntelligence: () => import("@/assets/lotties/market-intelligence.json"),
  process: () => import("@/assets/lotties/process.json"),
  solutions: () => import("@/assets/lotties/solutions.json"),
  technology: () => import("@/assets/lotties/technology.json"),
} satisfies Record<BrandLottieName, () => Promise<{ default: unknown }>>;

export function BrandLottie({ className, name }: BrandLottieProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [Lottie, setLottie] = useState<LottieComponent | null>(null);
  const [animationData, setAnimationData] = useState<unknown>(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const target = rootRef.current;
    let isCancelled = false;
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!desktopQuery.matches) {
      return;
    }

    async function loadAnimation() {
      const [{ default: LottieModule }, { default: data }] = await Promise.all([
        import("lottie-react"),
        animationLoaders[name](),
      ]);

      if (isCancelled) {
        return;
      }

      setLottie(() => LottieModule as LottieComponent);
      setAnimationData(data);
    }

    const updateMotion = () => setShouldAnimate(!motionQuery.matches);

    updateMotion();
    motionQuery.addEventListener("change", updateMotion);

    if (!target || !("IntersectionObserver" in window)) {
      void loadAnimation();
      return () => {
        isCancelled = true;
        motionQuery.removeEventListener("change", updateMotion);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        observer.disconnect();
        void loadAnimation();
      },
      {
        rootMargin: "80px",
        threshold: 0.12,
      },
    );

    observer.observe(target);

    return () => {
      isCancelled = true;
      observer.disconnect();
      motionQuery.removeEventListener("change", updateMotion);
    };
  }, [name]);

  return (
    <div aria-hidden="true" className={className} ref={rootRef}>
      {Lottie && animationData ? (
        <Lottie
          animationData={animationData}
          autoplay={shouldAnimate}
          loop={shouldAnimate}
          rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
          style={{ height: "100%", width: "100%" }}
        />
      ) : null}
    </div>
  );
}
