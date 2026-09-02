"use client";

import {
  HousekeepingMobileVisual,
  HousekeepingPipeline,
  HousekeepingProductVisual,
} from "@/components/product/HousekeepingVisual";
import { housekeepingSteps } from "@/data/homepage";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { useScrollStory } from "@/hooks/useScrollStory";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";

function MobileHousekeeping() {
  return (
    <section className="bg-mesh-warm border-y border-line py-14 lg:hidden">
      <Container>
        <Reveal>
          <p className="section-kicker">Connected operations</p>
          <h2 className="section-title-mobile mt-2">
            Check-Out
            <br />
            to Ready.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            One room, one flow — reception and housekeeping stay aligned.
          </p>
        </Reveal>

        <div className="mt-10 space-y-12">
          {housekeepingSteps.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.04}>
              <HousekeepingPipeline activeStep={i} />
              <div className="mt-5">
                <HousekeepingMobileVisual step={i} />
              </div>
              <p className="font-display mt-4 text-xl text-charcoal">{s.label}</p>
              <p className="mt-1 text-[15px] text-muted">{s.detail}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DesktopHousekeeping() {
  const reduce = useReducedMotion();
  const { wrapRef, pinRef, step } = useScrollStory(housekeepingSteps.length, reduce, {
    stepHeight: 55,
  });

  return (
    <section className="bg-mesh-warm hidden border-y border-line lg:block">
      <div ref={wrapRef} className="relative">
        <div
          ref={pinRef}
          className="flex min-h-[calc(100vh-5rem)] items-start py-8 md:py-10"
        >
          <Container>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-kicker">Connected operations</p>
                <h2 className="section-title mt-2">Check-Out to Ready.</h2>
              </div>
              <p className="max-w-xs text-[14px] text-muted">
                When a guest leaves, housekeeping and reception stay on the same page.
              </p>
            </div>

            <HousekeepingPipeline activeStep={step} />

            <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)]">
              <div className="relative min-h-[148px]">
                {housekeepingSteps.map((s, i) => (
                  <div
                    key={s.label}
                    className={cn(
                      "transition-all duration-700 ease-out",
                      i === step
                        ? "relative translate-y-0 opacity-100"
                        : "pointer-events-none absolute inset-0 translate-y-2 opacity-0",
                    )}
                  >
                    <p className="font-mono text-[11px] text-brand">
                      Step {String(i + 1).padStart(2, "0")} / {housekeepingSteps.length}
                    </p>
                    <p className="font-display mt-2 text-3xl text-charcoal">{s.label}</p>
                    <p className="mt-3 text-[16px] leading-relaxed text-muted">{s.detail}</p>
                  </div>
                ))}
              </div>

              <div className="relative min-h-[360px]">
                <HousekeepingProductVisual step={step} />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

export function HousekeepingFlow() {
  return (
    <>
      <MobileHousekeeping />
      <DesktopHousekeeping />
    </>
  );
}
