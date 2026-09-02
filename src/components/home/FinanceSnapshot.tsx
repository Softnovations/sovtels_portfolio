"use client";

import { FinanceScreen } from "@/components/product/screens";
import { ProductFrame } from "@/components/product/ProductFrame";
import { financeMetrics } from "@/data/homepage";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function FinanceSnapshot() {
  return (
    <section className="border-y border-line bg-white py-14 md:py-20">
      <Container>
        <Reveal>
          <p className="section-kicker">Owner view</p>
          <h2 className="section-title mt-2">Know Your Numbers.</h2>
          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted">
            Revenue, salary costs, maintenance and profit — from your actual Sovtels financial report.
          </p>
        </Reveal>

        <div className="mt-8 grid min-w-0 items-stretch gap-6 xl:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)]">
          <Reveal delay={0.08} className="min-w-0">
            <div className="surface-card h-full bg-paper">
              <p className="section-label">At a glance</p>
              <dl className="mt-4 space-y-3">
                {financeMetrics.map((m) => (
                  <div
                    key={m.label}
                    className={cn(
                      "flex items-baseline justify-between gap-3 border-b border-line pb-3 last:border-0",
                      "accent" in m && m.accent && "border-brand/20",
                    )}
                  >
                    <dt className="min-w-0 text-[14px] text-muted">{m.label}</dt>
                    <dd
                      className={cn(
                        "shrink-0 font-mono font-medium",
                        "accent" in m && m.accent ? "text-xl text-brand" : "text-base text-charcoal",
                      )}
                    >
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="min-w-0">
            <ProductFrame>
              <FinanceScreen />
            </ProductFrame>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
