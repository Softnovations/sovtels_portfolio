"use client";

import { whyPoints } from "@/data/homepage";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { Eye, Layers, Sparkles, Workflow } from "lucide-react";

const icons = [Workflow, Sparkles, Eye, Layers];

export function Why() {
  const [lead, ...rest] = whyPoints;

  return (
    <section className="border-t border-line bg-mesh-light py-14 md:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="section-kicker">Why Sovtels</p>
              <h2 className="section-title mt-2">Built for how hotels actually run.</h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                Not another generic dashboard. An operational system shaped around rooms, guests, staff,
                and daily hotel work.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-12">
          <Reveal className="h-full lg:col-span-5">
            <article className="surface-card relative flex h-full flex-col overflow-hidden !border-brand/25 !bg-white !p-5 md:!p-7">
              <div className="absolute inset-y-0 left-0 w-1 bg-brand" aria-hidden />
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
                <Workflow className="h-5 w-5" aria-hidden />
              </span>
              <p className="section-label mt-5">Lead reason</p>
              <h3 className="font-display mt-2 text-[clamp(1.5rem,3vw,2.1rem)] leading-tight text-charcoal">
                {lead.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{lead.body}</p>
              <p className="mt-6 text-[13px] font-medium text-brand">
                Reservations, rooms, housekeeping and finance stay on one page.
              </p>
            </article>
          </Reveal>

          <div className="grid grid-cols-1 items-stretch gap-3 sm:gap-4 md:grid-cols-3 lg:col-span-7 lg:grid-cols-1">
            {rest.map((p, i) => {
              const Icon = icons[i + 1] ?? Sparkles;
              return (
                <Reveal key={p.title} delay={(i + 1) * 0.05} className="h-full min-h-0">
                  <article className="surface-card flex h-full flex-col gap-3 !p-4 transition-colors hover:border-brand/30 sm:gap-4 md:!p-5 lg:flex-row">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[15px] font-semibold text-charcoal sm:text-[16px]">{p.title}</h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-muted sm:text-[14px]">{p.body}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Shared card grid for the Features / Why Sovtels section */
export function WhyPointsGrid({ className }: { className?: string }) {
  return (
    <div className={cn("card-grid grid-cols-1 md:grid-cols-3", className)}>
      {whyPoints.map((p, i) => {
        const Icon = icons[i] ?? Workflow;
        const isLead = i === 0;
        return (
          <article
            key={p.title}
            className={cn(
              "surface-card relative flex h-full flex-col overflow-hidden",
              isLead && "md:col-span-3 !border-brand/25 md:flex-row md:items-start md:gap-5",
            )}
          >
            {isLead && <div className="absolute inset-y-0 left-0 w-1 bg-brand" aria-hidden />}
            <span
              className={cn(
                "mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl md:mb-0",
                isLead ? "bg-brand text-white" : "bg-brand-soft text-brand",
              )}
            >
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-semibold text-charcoal">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
