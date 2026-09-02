"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { featureGroups } from "@/data/features";
import { Container } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function FeatureModules() {
  const [activeId, setActiveId] = useState(featureGroups[0]?.id ?? "");
  const active = featureGroups.find((g) => g.id === activeId) ?? featureGroups[0];
  const activeIndex = featureGroups.findIndex((g) => g.id === active?.id);

  return (
    <section className="border-t border-line bg-paper-2 py-14 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="section-kicker">Inside the system</p>
          <h2 className="section-title mt-2">
            <span className="md:hidden">
              What each module
              <br />
              actually does.
            </span>
            <span className="hidden md:inline">What each module actually does.</span>
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            <span className="md:hidden">Tap a department, then skim the outcomes.</span>
            <span className="hidden md:inline">
              Pick a department. See what staff get — without reading the whole catalog at once.
            </span>
          </p>
        </div>

        {/* Mobile: 2×2 tap grid. Desktop: one row of tabs. */}
        <div
          className="mt-7 grid grid-cols-2 gap-2 sm:mt-8 md:flex md:flex-wrap md:gap-2"
          role="tablist"
          aria-label="Departments"
        >
          {featureGroups.map((g) => {
            const selected = g.id === active.id;
            return (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(g.id)}
                className={cn(
                  "min-h-14 rounded-xl border px-3 py-3 text-left transition-colors md:min-h-0 md:rounded-lg md:px-4 md:py-2.5",
                  selected
                    ? "border-brand bg-brand text-white shadow-[0_8px_20px_rgba(22,142,0,0.18)]"
                    : "border-line bg-white text-charcoal active:bg-paper-2 md:hover:border-brand/30",
                )}
              >
                <span className="block text-[13px] font-semibold leading-snug tracking-wide md:text-[13px]">
                  {g.title}
                </span>
                <span
                  className={cn(
                    "mt-1 block text-[12px] leading-none",
                    selected ? "text-white/80" : "text-muted",
                  )}
                >
                  {g.items.length} modules
                </span>
              </button>
            );
          })}
        </div>

        {active && (
          <div key={active.id} role="tabpanel" className="mt-4 md:mt-6">
            <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between gap-3 border-b border-line bg-paper px-4 py-3 sm:px-5">
                <div className="min-w-0">
                  <p className="section-label">{active.title}</p>
                  <p className="mt-0.5 text-[13px] text-muted md:hidden">
                    {activeIndex + 1} of {featureGroups.length} · outcome first
                  </p>
                </div>
                <div className="flex shrink-0 gap-1.5 md:hidden">
                  <button
                    type="button"
                    aria-label="Previous department"
                    disabled={activeIndex <= 0}
                    onClick={() => {
                      const prev = featureGroups[activeIndex - 1];
                      if (prev) setActiveId(prev.id);
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white text-charcoal disabled:opacity-30"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden />
                  </button>
                  <button
                    type="button"
                    aria-label="Next department"
                    disabled={activeIndex >= featureGroups.length - 1}
                    onClick={() => {
                      const next = featureGroups[activeIndex + 1];
                      if (next) setActiveId(next.id);
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white text-charcoal disabled:opacity-30"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden />
                  </button>
                </div>
              </div>

              <ul>
                {active.items.map((item, i) => (
                  <li
                    key={item.id}
                    className="border-t border-line px-4 py-4 first:border-t-0 sm:px-5 sm:py-5 md:grid md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:items-start md:gap-8"
                  >
                    <div className="flex items-center gap-3 md:items-baseline md:gap-2.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-soft font-mono text-[11px] font-medium text-brand md:h-auto md:w-auto md:bg-transparent md:p-0 md:text-muted-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[15px] font-semibold leading-snug text-charcoal">
                        {item.title}
                      </p>
                    </div>
                    <p className="mt-2 pl-10 text-[14px] leading-relaxed text-muted md:mt-0 md:pl-0 md:text-[15px]">
                      {item.benefit}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-3 text-center text-[12px] text-muted md:hidden">
              Use the arrows or tap a department above
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
