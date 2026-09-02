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
    <section id="features" className="relative bg-mesh-light py-14 md:py-20">
      <Container>
        {!hideHeader && (
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-kicker">Complete system</p>
                <h2 className="font-display mt-2 text-[clamp(2rem,9vw,3.4rem)] leading-[1.05] text-charcoal md:text-[clamp(2rem,4.2vw,3.4rem)]">
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
            <p className="mt-3 max-w-xl text-[15px] text-muted">
              Reservations, rooms, guests, housekeeping, finance and management — connected in Sovtels.
            </p>
          </Reveal>
        )}

        <div
          className={
            hideHeader
              ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              : "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          }
        >
          {homepageFeatureGroups.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 0.04}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${groupAccents[gi] ?? groupAccents[0]}`}
                />
                <p className="text-[11px] font-semibold tracking-[0.18em] text-brand uppercase">
                  {group.title}
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3.5 lg:grid-cols-1 lg:gap-y-3">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label} className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white lg:h-9 lg:w-9">
                          <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" aria-hidden />
                        </span>
                        <span className="text-[13px] font-medium leading-snug text-charcoal lg:text-[14px]">
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
