"use client";

import { Button } from "@/components/ui/Button";
import { MobileHeroDashboard } from "@/components/mobile/MobileProductMoments";
import { SovtelsDashboardImage } from "@/components/product/DashboardImage";
import { Reveal } from "@/components/ui/Reveal";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-mesh-hero pt-28 pb-16 md:pt-32 md:pb-20">
      {/* Mobile */}
      <div className="mx-auto max-w-[1200px] px-5 md:hidden">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] text-brand uppercase">
            Sovtels Hotel & Motel Management
          </p>
          <h1 className="font-display mt-3 text-[clamp(2.75rem,11vw,3.5rem)] leading-[0.95] text-charcoal">
            Run Better,
            <br />
            Spend Less.
          </h1>
          <p className="mt-5 text-[17px] font-medium text-charcoal">One system to manage your entire hotel.</p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Reservations, rooms, guests, housekeeping, finance, services and daily hotel operations —
            connected through Sovtels.
          </p>
          <div className="mt-7">
            <Button href="/demo" size="lg" className="w-full sm:w-auto">
              Request Demo
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <MobileHeroDashboard />
        </Reveal>
      </div>

      {/* Desktop */}
      <div className="relative mx-auto hidden max-w-[1200px] items-center gap-10 px-5 sm:px-8 md:grid lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase">
              Sovtels Hotel & Motel Management
            </p>
            <h1 className="font-display mt-4 text-[clamp(2.8rem,6vw,4.6rem)] leading-[0.95] text-charcoal">
              Run Better,
              <br />
              Spend Less.
            </h1>
            <p className="mt-5 text-lg font-medium text-charcoal">One system to manage your entire hotel.</p>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
              Reservations, rooms, guests, housekeeping, finance, services and daily hotel operations —
              connected through Sovtels.
            </p>
            <div className="mt-7">
              <Button href="/demo" size="lg">
                Request Demo
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <SovtelsDashboardImage priority />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
