"use client";

import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const checks = ["Reservation", "Check-In", "Check-Out", "Room Operations"];

const desktopStages = [
  { label: "ONLINE", detail: "Sovtels is connected." },
  { label: "Internet connection lost", detail: "The connection drops." },
  { label: "SOVTELS CONTINUES", detail: "Hotel operations keep running." },
  { label: "Internet restored", detail: "Connection returns." },
  { label: "SYNCED", detail: "Data aligns automatically." },
];

export function Offline() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % desktopStages.length), 2000);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section id="offline" className="border-y border-line bg-charcoal py-14 text-white md:py-20">
      <Container>
        <Reveal>
          <p className="section-kicker-bright">Online + Offline</p>
          <h2 className="font-display mt-2 text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.05]">
            Internet Down?
            <br />
            <span className="text-brand-bright">Keep Running.</span>
          </h2>
        </Reveal>

        {/* Mobile — simple vertical flow */}
        <Reveal delay={0.08} className="mt-10 md:hidden">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="rounded-full bg-brand-bright/20 px-4 py-2 text-[14px] font-medium text-brand-bright">
              🟢 ONLINE
            </p>
            <p className="text-white/50">↓</p>
            <p className="text-[14px] text-white/80">Internet connection lost</p>
            <p className="text-white/50">↓</p>
            <div className="w-full max-w-xs rounded-xl border border-white/15 bg-white/10 p-5">
              <p className="font-display text-xl text-brand-bright">SOVTELS CONTINUES</p>
              <ul className="mt-4 space-y-2 text-left text-[15px]">
                {checks.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-brand-bright">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-white/50">↓</p>
            <p className="text-[14px] text-white/70">Internet restored</p>
            <p className="text-white/50">↓</p>
            <p className="rounded-full bg-brand-bright/20 px-4 py-2 text-[14px] font-semibold text-brand-bright">
              🟢 SYNCED
            </p>
          </div>
        </Reveal>

        {/* Desktop */}
        <div className="mt-10 hidden items-center gap-12 lg:grid lg:grid-cols-2">
          <Reveal>
            <ol className="space-y-0 rounded-xl bg-white/10 p-6 ring-1 ring-white/10">
              {desktopStages.map((s, idx) => (
                <li key={s.label} className="flex gap-4">
                  <div className="flex w-5 flex-col items-center">
                    <span
                      className={cn(
                        "mt-1 h-2.5 w-2.5 rounded-full",
                        idx <= i ? "bg-brand-bright" : "bg-white/25",
                      )}
                    />
                    {idx < desktopStages.length - 1 && (
                      <span
                        className={cn("my-1 w-px flex-1", idx < i ? "bg-brand-bright/70" : "bg-white/15")}
                      />
                    )}
                  </div>
                  <div className={cn("pb-5", idx === desktopStages.length - 1 && "pb-0")}>
                    <p className={cn("text-sm font-medium", idx === i ? "text-white" : "text-white/45")}>
                      {s.label}
                    </p>
                    <p className={cn("mt-0.5 text-[12px]", idx === i ? "text-white/70" : "text-white/30")}>
                      {s.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {checks.map((t) => (
                <li key={t} className="rounded-md bg-white/10 px-3 py-3">
                  {t} ✓
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
