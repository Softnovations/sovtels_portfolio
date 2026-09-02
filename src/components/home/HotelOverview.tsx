"use client";

import {
  DashboardScreen,
  GuestReportScreen,
  ReservationManagementScreen,
} from "@/components/product/screens";
import { ProductFrame } from "@/components/product/ProductFrame";
import { todayPanel } from "@/data/homepage";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const PREVIEW_SCALE = 0.78;

export function HotelOverview() {
  return (
    <section id="showcase" className="bg-mesh-light py-14 md:py-20">
      <Container>
        <Reveal>
          <p className="section-kicker">Management view</p>
          <h2 className="section-title mt-2">
            <span className="md:hidden">
              See Your Hotel
              <br />
              Clearly.
            </span>
            <span className="hidden md:inline">See Your Hotel Clearly.</span>
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
            One look — occupancy, rooms, arrivals, revenue and guest reporting together.
          </p>
        </Reveal>

        <div className="mt-8 space-y-8">
          <Reveal delay={0.06}>
            <p className="section-label mb-2">Dashboard</p>
            <ProductFrame scale={PREVIEW_SCALE}>
              <DashboardScreen />
            </ProductFrame>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="section-label mb-2">Reservation & room availability</p>
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
              <ProductFrame scale={PREVIEW_SCALE}>
                <ReservationManagementScreen />
              </ProductFrame>
              <div>
                <p className="section-label mb-2">Today</p>
                <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                  {todayPanel.map((item) => (
                    <div key={item.label} className="surface-card !p-4 !shadow-none">
                      <p className="text-[11px] font-medium tracking-[0.1em] text-muted uppercase">
                        {item.label}
                      </p>
                      <p className="mt-1.5 font-mono text-base font-medium text-charcoal">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="section-label mb-2">Guest Report · GLIS</p>
            <ProductFrame scale={PREVIEW_SCALE}>
              <GuestReportScreen />
            </ProductFrame>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
