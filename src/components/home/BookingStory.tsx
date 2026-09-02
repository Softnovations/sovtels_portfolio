"use client";

import { ProductScreenImage } from "@/components/product/DashboardImage";
import { bookingStorySteps } from "@/data/homepage";
import type { ProductScreenshotKey } from "@/data/product-screenshots";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { useScrollStory } from "@/hooks/useScrollStory";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";

const storyScreens: Record<string, ProductScreenshotKey> = {
  book: "reservation",
  checkin: "checkIn",
  stay: "stay",
  checkout: "checkout",
};

function StoryVisual({ stepId }: { stepId: string }) {
  const screen = storyScreens[stepId] ?? "dashboard";
  return <ProductScreenImage screen={screen} framed={false} />;
}

function MobileBookingStory() {
  return (
    <section className="border-y border-line bg-white py-14 md:hidden">
      <Container>
        <Reveal>
          <p className="section-kicker">Front office</p>
          <h2 className="font-display mt-2 text-[clamp(2rem,9vw,2.5rem)] leading-[1.05] text-charcoal">
            From Booking
            <br />
            to Check-Out.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-10">
          {bookingStorySteps.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.04}>
              <div className="product-stage overflow-hidden p-2">
                <StoryVisual stepId={step.id} />
              </div>
              <h3 className="font-display mt-4 text-2xl text-charcoal">{step.title}</h3>
              <p className="mt-1 text-[15px] text-muted">{step.body}</p>
              {i < bookingStorySteps.length - 1 && (
                <p className="mt-6 text-center text-muted" aria-hidden>
                  ↓
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DesktopBookingStory() {
  const reduce = useReducedMotion();
  const { wrapRef, pinRef, step } = useScrollStory(bookingStorySteps.length, reduce, {
    stepHeight: 50,
  });

  if (reduce) {
    return (
      <section className="hidden border-y border-line bg-white py-20 md:block">
        <Container>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] text-charcoal">
            From Booking to Check-Out.
          </h2>
          <div className="mt-10 space-y-12">
            {bookingStorySteps.map((s) => (
              <div key={s.id} className="grid items-center gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="font-display text-2xl text-charcoal">{s.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{s.body}</p>
                </div>
                <div className="product-stage overflow-hidden p-2">
                  <StoryVisual stepId={s.id} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="hidden border-y border-line bg-white md:block">
      <div ref={wrapRef} className="relative">
        <div ref={pinRef} className="flex min-h-[75vh] items-center py-16">
          <Container>
            <p className="section-kicker">Front office</p>
            <h2 className="font-display mt-2 text-[clamp(2rem,4vw,3.2rem)] text-charcoal">
              From Booking to Check-Out.
            </h2>

            <div className="mt-4 flex gap-2">
              {bookingStorySteps.map((s, i) => (
                <div
                  key={s.id}
                  className={cn(
                    "h-1 flex-1 rounded-full transition-all duration-500",
                    i <= step ? "bg-brand" : "bg-line",
                  )}
                />
              ))}
            </div>

            <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)]">
              <div className="relative min-h-[160px]">
                {bookingStorySteps.map((s, i) => (
                  <div
                    key={s.id}
                    className={cn(
                      "transition-all duration-700",
                      i === step
                        ? "relative translate-y-0 opacity-100"
                        : "pointer-events-none absolute inset-0 translate-y-4 opacity-0",
                    )}
                  >
                    <p className="font-mono text-[11px] text-brand">
                      {String(i + 1).padStart(2, "0")} — {s.id}
                    </p>
                    <h3 className="font-display mt-2 text-4xl text-charcoal">{s.title}</h3>
                    <p className="mt-3 text-[17px] leading-relaxed text-muted">{s.body}</p>
                  </div>
                ))}
              </div>

              <div className="product-stage relative overflow-hidden p-2">
                {bookingStorySteps.map((s, i) => (
                  <div
                    key={s.id}
                    className={cn(
                      "transition-all duration-700",
                      i === step ? "relative opacity-100" : "pointer-events-none absolute inset-2 opacity-0",
                    )}
                  >
                    <StoryVisual stepId={s.id} />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

export function BookingStory() {
  return (
    <>
      <MobileBookingStory />
      <DesktopBookingStory />
    </>
  );
}
