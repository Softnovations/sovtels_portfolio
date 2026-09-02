"use client";

import { roomStatusMeta } from "@/data/rooms";
import { cn } from "@/lib/utils";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

function MobileShell({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="surface-card">
      {title && <p className="section-label mb-4">{title}</p>}
      {children}
    </div>
  );
}

function BigMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-line bg-paper p-4">
      <p className="font-mono text-[clamp(1.5rem,6vw,2rem)] font-medium leading-none text-charcoal">{value}</p>
      <p className="mt-2 text-[12px] leading-snug text-muted">{label}</p>
    </div>
  );
}

export function MobileHeroDashboard() {
  const kpis = [
    { label: "Total Revenue", value: "2.45M Ks" },
    { label: "Total Bookings", value: "48" },
    { label: "Booking Rate", value: "78%" },
  ];

  const rooms = [
    { number: "101", status: "available" as const },
    { number: "102", status: "occupied" as const },
    { number: "103", status: "reserved" as const },
    { number: "104", status: "cleaning" as const },
  ];

  return (
    <MobileShell title="Dashboard">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="relative overflow-hidden rounded-xl border border-[#e8ece6] bg-white p-4"
          >
            <div className="absolute inset-y-3 right-0 w-1 rounded-l-full bg-brand" />
            <p className="text-[11px] text-muted">{kpi.label}</p>
            <p className="mt-1 font-mono text-[clamp(1.25rem,5vw,1.5rem)] font-semibold text-charcoal">
              {kpi.value}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {rooms.map((r) => (
          <div key={r.number} className="rounded-xl border border-line bg-paper px-3 py-3.5 text-center">
            <p className="font-mono text-xl font-medium text-charcoal">{r.number}</p>
            <p
              className={cn(
                "mt-2 text-[11px] font-medium uppercase",
                roomStatusMeta[r.status].className,
                "rounded-md px-2 py-1",
              )}
            >
              {roomStatusMeta[r.status].label}
            </p>
          </div>
        ))}
      </div>
    </MobileShell>
  );
}

export function MobileStatusChange({ from, to }: { from: string; to: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 py-2">
      <span
        className={cn(
          "rounded-lg border border-line px-4 py-2 text-[15px] text-muted transition-all duration-500",
          inView && !reduce && "opacity-50 line-through",
        )}
      >
        {from}
      </span>
      <span className="text-muted">↓</span>
      <motion.span
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={inView || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="rounded-lg bg-brand px-5 py-2.5 text-[15px] font-semibold text-white"
      >
        {to}
      </motion.span>
    </div>
  );
}

export function MobileJourneyArrow() {
  return (
    <div className="flex justify-center py-6 text-muted" aria-hidden>
      ↓
    </div>
  );
}

export function MobileHotelOverview() {
  return (
    <MobileShell>
      <div className="grid grid-cols-2 gap-3">
        <BigMetric value="78%" label="Occupancy" />
        <BigMetric value="12" label="Available" />
        <BigMetric value="34" label="Occupied" />
        <BigMetric value="8" label="Reserved" />
      </div>
    </MobileShell>
  );
}

export function MobileRoomCards() {
  const rooms = [
    { number: "101", status: "available" as const },
    { number: "102", status: "occupied" as const },
    { number: "103", status: "reserved" as const },
    { number: "104", status: "cleaning" as const },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {rooms.map((r) => (
        <div
          key={r.number}
          className="surface-card !p-5"
        >
          <p className="font-mono text-[clamp(1.75rem,7vw,2.25rem)] font-medium leading-none text-charcoal">
            {r.number}
          </p>
          <p
            className={cn(
              "mt-3 inline-block text-[12px] font-semibold uppercase",
              roomStatusMeta[r.status].className,
              "rounded-md px-2.5 py-1",
            )}
          >
            {roomStatusMeta[r.status].label}
          </p>
        </div>
      ))}
    </div>
  );
}

export function MobileArrivalsDepartures() {
  return (
    <MobileShell>
      <p className="text-[11px] font-medium tracking-[0.12em] text-muted uppercase">Today&apos;s Arrivals</p>
      <div className="mt-3 space-y-3">
        {[
          ["Michael Tan", "Room 305", "2:00 PM"],
          ["David Wong", "Room 408", "4:30 PM"],
        ].map(([name, room, time]) => (
          <div key={name} className="flex items-start justify-between gap-3 border-b border-line pb-3 text-[15px]">
            <div>
              <p className="font-medium text-charcoal">{name}</p>
              <p className="mt-0.5 text-[13px] text-muted">{room}</p>
            </div>
            <p className="shrink-0 font-mono text-[13px] text-muted">{time}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 text-[11px] font-medium tracking-[0.12em] text-muted uppercase">Today&apos;s Departures</p>
      <div className="mt-3 border-b border-line pb-3 text-[15px]">
        <p className="font-medium text-charcoal">Sarah Lim</p>
        <p className="mt-0.5 text-[13px] text-muted">Room 207</p>
      </div>
    </MobileShell>
  );
}

export function MobileFinanceSnapshot() {
  return (
    <MobileShell title="Today">
      <p className="font-mono text-[clamp(2rem,8vw,2.75rem)] font-medium leading-none text-brand">2.45M MMK</p>
      <dl className="mt-5 space-y-3 text-[15px]">
        {[
          ["Room Revenue", "1.9M"],
          ["Services", "350K"],
          ["Restaurant", "200K"],
          ["Expenses", "620K"],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between border-b border-line pb-2">
            <dt className="text-muted">{label}</dt>
            <dd className="font-mono font-medium text-charcoal">{value}</dd>
          </div>
        ))}
      </dl>
    </MobileShell>
  );
}
