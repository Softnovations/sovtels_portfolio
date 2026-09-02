"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

/** Matches fixed navbar height (68px) + breathing room so pinned titles aren't clipped */
export const SCROLL_STORY_NAV_OFFSET = 80;

type Options = {
  /** Viewport-height units of scroll per step */
  stepHeight?: number;
};

export function useScrollStory(stepCount: number, reduce: boolean | null, options?: Options) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const stepHeight = options?.stepHeight ?? 75;

  useEffect(() => {
    if (reduce) return;

    const wrap = wrapRef.current;
    const pin = pinRef.current;
    if (!wrap || !pin || stepCount < 2) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrap,
        start: () => `top ${SCROLL_STORY_NAV_OFFSET}px`,
        end: () => `+=${(stepCount - 1) * stepHeight * (window.innerHeight / 100)}`,
        pin: pin,
        pinSpacing: true,
        scrub: 0.65,
        // anticipatePin causes a hard jump with Lenis + fixed nav
        anticipatePin: 0,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const next = Math.min(stepCount - 1, Math.floor(self.progress * stepCount));
          setStep((prev) => (prev === next ? prev : next));
        },
      });
    }, wrap);

    // Refresh after layout so pin offset is accurate
    const refresh = () => ScrollTrigger.refresh();
    const t = window.setTimeout(refresh, 100);
    window.addEventListener("resize", refresh);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", refresh);
      ctx.revert();
    };
  }, [stepCount, stepHeight, reduce]);

  return { wrapRef, pinRef, step };
}
