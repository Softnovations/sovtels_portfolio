"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DashboardScreen } from "@/components/product/screens";
import { ProductFrame } from "@/components/product/ProductFrame";
import { Reveal } from "@/components/ui/Reveal";
import { motion, useReducedMotion } from "framer-motion";

const HERO_SCALE = 0.78;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-mesh-hero pt-28 pb-16 md:pt-32 md:pb-20">
      {/* Mobile */}
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:hidden">
        <Reveal>
          <p className="section-kicker">Sovtels Hotel & Motel Management</p>
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

        <Reveal delay={0.1} className="relative mt-10">
          <ProductFrame scale={0.72}>
            <DashboardScreen />
          </ProductFrame>
          <div className="pointer-events-none absolute right-0 -bottom-3 z-10 h-28 w-28">
            <Image
              src="/images/mascot.png"
              alt=""
              fill
              className="object-contain drop-shadow-[0_12px_24px_rgba(26,31,28,0.18)]"
              sizes="112px"
              aria-hidden
            />
          </div>
        </Reveal>
      </div>

      {/* Desktop */}
      <div className="relative mx-auto hidden max-w-[1200px] items-center gap-8 px-5 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-5 xl:col-span-4">
          <Reveal>
            <p className="section-kicker">Sovtels Hotel & Motel Management</p>
            <h1 className="font-display mt-4 text-[clamp(2.8rem,5.5vw,4.4rem)] leading-[0.95] text-charcoal">
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

        <Reveal delay={0.1} className="relative min-w-0 lg:col-span-7 xl:col-span-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="relative"
          >
            <ProductFrame scale={HERO_SCALE}>
              <DashboardScreen />
            </ProductFrame>

            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.45 }}
              className="pointer-events-none absolute right-0 -bottom-6 z-10 h-36 w-36 xl:h-44 xl:w-44"
            >
              <div
                className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(22,142,0,0.18),transparent_70%)] blur-md"
                aria-hidden
              />
              <Image
                src="/images/mascot.png"
                alt="Sovtels mascot"
                fill
                className="object-contain drop-shadow-[0_16px_32px_rgba(26,31,28,0.2)]"
                sizes="176px"
                priority
              />
            </motion.div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
