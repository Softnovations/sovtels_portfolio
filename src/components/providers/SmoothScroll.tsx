"use client";

import { useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_MQ = "(min-width: 768px)";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;

    const mq = window.matchMedia(DESKTOP_MQ);
    let lenis: Lenis | null = null;
    let ticker: ((time: number) => void) | null = null;

    const enable = () => {
      if (!mq.matches || lenis) return;

      lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        wheelMultiplier: 0.9,
      });

      lenis.on("scroll", ScrollTrigger.update);

      ticker = (time: number) => {
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
    };

    const disable = () => {
      if (ticker) gsap.ticker.remove(ticker);
      lenis?.destroy();
      lenis = null;
      ticker = null;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };

    const onMqChange = () => {
      disable();
      enable();
      ScrollTrigger.refresh();
    };

    enable();
    mq.addEventListener("change", onMqChange);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      mq.removeEventListener("change", onMqChange);
      window.removeEventListener("resize", onResize);
      disable();
    };
  }, [reduce]);

  return <>{children}</>;
}
