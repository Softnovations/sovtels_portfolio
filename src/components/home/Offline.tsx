"use client";

import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, Wifi, WifiOff } from "lucide-react";

const checks = ["Reservation", "Check-In", "Check-Out", "Room Operations"];

const desktopStages = [
  { label: "ONLINE", detail: "Sovtels is connected.", icon: "online" as const },
  { label: "Internet connection lost", detail: "The connection drops.", icon: "off" as const },
  { label: "SOVTELS CONTINUES", detail: "Hotel operations keep running.", icon: "run" as const },
  { label: "Internet restored", detail: "Connection returns.", icon: "online" as const },
  { label: "SYNCED", detail: "Data aligns automatically.", icon: "online" as const },
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
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="section-kicker-bright">Online + Offline</p>
              <h2 className="font-display mt-2 text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.05]">
                Internet Down?
                <br />
                <span className="text-brand-bright">Keep Running.</span>
              </h2>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/65">
                Front desk work does not stop when the line drops. Sovtels continues locally, then syncs
                when the connection returns.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Phone */}
        <Reveal delay={0.08} className="mt-10 md:hidden">
          <div className="space-y-3">
            <div className="flex items-center gap-2 rounded-xl border border-brand-bright/30 bg-brand-bright/10 px-4 py-3 text-[14px] font-medium text-brand-bright">
              <Wifi className="h-4 w-4" />
              Online
            </div>
            <p className="px-1 text-[13px] text-white/45">Connection lost</p>
            <div className="rounded-xl border border-white/15 bg-white/10 p-5">
              <div className="flex items-center gap-2 text-brand-bright">
                <WifiOff className="h-4 w-4" />
                <p className="font-display text-xl">Sovtels continues</p>
              </div>
              <ul className="mt-4 space-y-2.5 text-[15px]">
                {checks.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-bright/20 text-brand-bright">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="px-1 text-[13px] text-white/45">Connection restored</p>
            <div className="flex items-center gap-2 rounded-xl border border-brand-bright/30 bg-brand-bright/10 px-4 py-3 text-[14px] font-semibold text-brand-bright">
              <Wifi className="h-4 w-4" />
              Synced
            </div>
          </div>
        </Reveal>

        {/* Tablet + desktop */}
        <div className="mt-10 hidden items-stretch gap-6 md:grid md:grid-cols-1 lg:grid-cols-12 lg:gap-8">
          <Reveal className="h-full lg:col-span-5">
            <ol className="h-full space-y-0 rounded-xl bg-white/8 p-5 ring-1 ring-white/12 md:p-6">
              {desktopStages.map((s, idx) => (
                <li key={s.label} className="flex gap-4">
                  <div className="flex w-5 flex-col items-center">
                    <span
                      className={cn(
                        "mt-1 h-2.5 w-2.5 rounded-full transition-colors",
                        idx <= i ? "bg-brand-bright" : "bg-white/25",
                      )}
                    />
                    {idx < desktopStages.length - 1 && (
                      <span
                        className={cn(
                          "my-1 w-px flex-1 transition-colors",
                          idx < i ? "bg-brand-bright/70" : "bg-white/15",
                        )}
                      />
                    )}
                  </div>
                  <div className={cn("pb-5", idx === desktopStages.length - 1 && "pb-0")}>
                    <p className={cn("text-sm font-medium", idx === i ? "text-white" : "text-white/40")}>
                      {s.label}
                    </p>
                    <p className={cn("mt-0.5 text-[12px]", idx === i ? "text-white/65" : "text-white/25")}>
                      {s.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1} className="h-full lg:col-span-7">
            <div className="flex h-full flex-col rounded-xl border border-white/12 bg-white/6 p-5 md:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-[11px] font-medium tracking-[0.14em] text-brand-bright uppercase">
                    Still available offline
                  </p>
                  <p className="mt-1 text-[15px] text-white/70">Core front-office work keeps moving.</p>
                </div>
                <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-brand-bright/15 px-3 py-1 text-[11px] font-medium text-brand-bright">
                  <WifiOff className="h-3.5 w-3.5" />
                  Offline mode
                </span>
              </div>
              <ul className="mt-6 grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
                {checks.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/8 px-4 py-4 text-[14px] font-medium"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-bright/20 text-brand-bright">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
