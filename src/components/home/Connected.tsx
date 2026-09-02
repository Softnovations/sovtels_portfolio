"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";

const stats = [
  { value: "16", label: "Connected modules" },
  { value: "1", label: "System for your hotel" },
  { value: "0", label: "Extra spreadsheets needed" },
];

export function Connected() {
  return (
    <section className="section-dark relative overflow-hidden py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,#168e0030,transparent_55%)]" />
      <Container className="relative">
        <Reveal>
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-[11px] tracking-[0.2em] text-brand-bright uppercase">Connected operations</p>
              <h2 className="font-display mt-3 text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.1] text-white">
                Everything Your Hotel Needs. Connected.
              </h2>
            </div>
            <p className="text-[15px] leading-relaxed text-white/70 lg:col-span-5">
              Stop switching between paperwork, spreadsheets, messages and disconnected systems. Sovtels
              connects your daily hotel operations in one place.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm"
            >
              <p className="font-display text-4xl text-brand-bright md:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
