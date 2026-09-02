"use client";

import { homepageFeatureGroups } from "@/data/homepage";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const groupAccents = [
  "from-brand/80 to-brand/20",
  "from-amber/70 to-amber/15",
  "from-yellow/80 to-yellow/20",
  "from-charcoal/60 to-charcoal/10",
];

export function FeatureOverview({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="features" className="relative bg-mesh-light pt-14 pb-24 md:py-20">
      <Container>
        {!hideHeader && (
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-kicker">Complete system</p>
                <h2 className="section-title mt-2">
                  <span className="md:hidden">
                    Everything Your
                    <br />
                    Hotel Needs.
                  </span>
                  <span className="hidden md:inline">Everything Your Hotel Needs.</span>
                </h2>
              </div>
              <p className="rounded-full border border-line bg-white px-4 py-2 text-[12px] font-medium text-muted">
                16 modules · 4 departments
              </p>
            </div>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
              Reservations, rooms, guests, housekeeping, finance and management — connected in Sovtels.
            </p>
          </Reveal>
        )}

        <div
          className={
            hideHeader
              ? "card-grid min-w-0 grid-cols-2 lg:grid-cols-4"
              : "card-grid mt-8 min-w-0 grid-cols-2 lg:grid-cols-4"
          }
        >
          {homepageFeatureGroups.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 0.04} className="flex h-full min-h-0 min-w-0">
              <div className="group relative flex h-full w-full min-w-0 flex-col overflow-hidden surface-card !p-3 !pt-5 transition-colors hover:border-brand/30 sm:!p-5 sm:!pt-6">
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${groupAccents[gi] ?? groupAccents[0]}`}
                />
                <p className="section-label shrink-0 whitespace-nowrap tracking-[0.1em] sm:tracking-[0.14em]">
                  {group.title}
                </p>
                <ul className="mt-3 grid flex-1 grid-rows-4 content-stretch gap-y-0 sm:mt-4">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.label}
                        className="flex min-h-[2.75rem] min-w-0 items-center gap-2 border-t border-line/70 first:border-t-0 sm:min-h-[3rem] sm:gap-2.5"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white sm:h-8 sm:w-8 sm:rounded-lg">
                          <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1 text-[11px] font-medium leading-snug text-charcoal sm:text-[12px] md:text-[13px]">
                          {item.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
