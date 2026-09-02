"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

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
        start: "top top",
        end: `+=${(stepCount - 1) * stepHeight}%`,
        pin: pin,
        scrub: 0.35,
        anticipatePin: 1,
        onUpdate: (self) => {
          const next = Math.min(stepCount - 1, Math.floor(self.progress * stepCount));
          setStep((prev) => (prev === next ? prev : next));
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, [stepCount, stepHeight, reduce]);

  return { wrapRef, pinRef, step };
}
