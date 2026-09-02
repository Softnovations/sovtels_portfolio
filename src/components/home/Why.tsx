"use client";

import { whyPoints } from "@/data/homepage";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Eye, Layers, Sparkles, Workflow } from "lucide-react";

const icons = [Workflow, Sparkles, Eye, Layers];

export function Why() {
  return (
    <section className="border-t border-line bg-white py-14 md:py-20">
      <Container>
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,9vw,3.2rem)] text-charcoal">Why Sovtels?</h2>
        </Reveal>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {whyPoints.map((p, i) => {
            const Icon = icons[i] ?? Workflow;
            return (
              <Reveal key={p.title} delay={i * 0.05}>
                <li className="border-b border-line pb-6 sm:border-0 sm:pb-0">
                  <div className="flex items-start gap-3 md:block">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand md:mb-4 md:h-10 md:w-10">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-[17px] font-semibold text-charcoal md:text-lg">{p.title}</h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{p.body}</p>
                    </div>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={0.15} className="mt-12 text-center">
          <p className="font-display text-[clamp(1.75rem,7vw,2.75rem)] leading-tight text-brand">
            Run Better,
            <br />
            Spend Less.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
