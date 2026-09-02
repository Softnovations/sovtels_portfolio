"use client";

import { AppShell } from "./AppShell";
import { cn } from "@/lib/utils";
import { formatMmk } from "@/lib/utils";

function StatusChange({ from, to }: { from: string; to: string }) {
  return (
    <div className="flex items-center gap-3 text-[13px]">
      <span className="rounded-md border border-line bg-paper px-3 py-1.5 text-muted line-through decoration-muted/50">
        {from}
      </span>
      <span className="text-muted">↓</span>
      <span className="rounded-md bg-brand px-3 py-1.5 font-medium text-white">{to}</span>
    </div>
  );
}

export function JourneyReservationScene({ visible }: { visible: boolean }) {
  return (
    <AppShell active="reservations" title="Reservation">
      <div
        className={cn(
          "rounded-lg border border-line bg-paper p-4 transition-all duration-700",
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        )}
      >
        <p className="text-[10px] tracking-[0.14em] text-brand uppercase">New Reservation</p>
        <dl className="mt-3 grid gap-2 text-[13px] sm:grid-cols-2">
          {[
            ["Guest", "Michael Tan"],
            ["Room", "Deluxe — 305"],
            ["Check-In", "12 Sep"],
            ["Check-Out", "15 Sep"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between border-b border-line pb-2">
              <dt className="text-muted">{k}</dt>
              <dd className="font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4">
          <span className="status-available rounded-sm px-2 py-1 text-[12px] font-medium">Confirmed</span>
        </p>
      </div>
    </AppShell>
  );
}

export function JourneyRoomScene({ phase }: { phase: 0 | 1 }) {
  return (
    <AppShell active="rooms" title="Room">
      <div className="mx-auto max-w-xs">
        <div className="rounded-xl border-2 border-line bg-paper p-6 text-center transition-all duration-700">
          <p className="font-mono text-3xl text-charcoal">305</p>
          <p className="mt-1 text-[12px] text-muted">Deluxe King</p>
          <div className="mt-4 flex justify-center">
            {phase === 0 ? (
              <span className="status-available rounded-sm px-3 py-1.5 text-[12px] font-medium uppercase">
                Available
              </span>
            ) : (
              <StatusChange from="Available" to="Reserved" />
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

export function JourneyCheckInScene({ phase }: { phase: 0 | 1 }) {
  return (
    <AppShell active="reservations" title="Reservation">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-line bg-paper p-4">
          <p className="text-[10px] text-muted uppercase">Reservation</p>
          <p className="mt-2 font-medium">Michael Tan</p>
          <div className="mt-3">
            {phase === 0 ? (
              <span className="status-reserved rounded-sm px-2 py-1 text-[12px]">Confirmed</span>
            ) : (
              <StatusChange from="Confirmed" to="Checked In" />
            )}
          </div>
        </div>
        <div className="rounded-lg border border-line bg-paper p-4">
          <p className="text-[10px] text-muted uppercase">Room 305</p>
          <div className="mt-3">
            {phase === 0 ? (
              <span className="status-reserved rounded-sm px-2 py-1 text-[12px] uppercase">Reserved</span>
            ) : (
              <StatusChange from="Reserved" to="Occupied" />
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

export function JourneyServicesScene({ phase }: { phase: 0 | 1 }) {
  return (
    <AppShell active="service" title="Service">
      <div className="grid gap-3 sm:grid-cols-2">
        <div
          className={cn(
            "rounded-lg border border-line bg-paper p-4 transition-all duration-700",
            phase >= 0 ? "opacity-100" : "opacity-0",
          )}
        >
          <p className="text-[10px] text-muted uppercase">Room 305</p>
          <p className="mt-2 text-[13px]">Fried Rice × 1</p>
          <p className="text-[13px]">Coffee × 2</p>
          <p className="mt-3 font-mono text-sm font-medium">{formatMmk(28_000)}</p>
          <p className="mt-3 rounded-md bg-brand py-2 text-center text-[11px] font-medium tracking-wide text-white uppercase">
            Add to Room
          </p>
        </div>
        <div
          className={cn(
            "rounded-lg border border-line bg-paper p-4 transition-all duration-700",
            phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          )}
        >
          <p className="text-[10px] text-muted uppercase">Guest Bill</p>
          <p className="mt-3 flex justify-between text-[13px]">
            <span>Room service</span>
            <span className="font-mono text-brand">+{formatMmk(28_000)}</span>
          </p>
        </div>
      </div>
    </AppShell>
  );
}

export function JourneyCheckoutScene({ phase }: { phase: 0 | 1 }) {
  return (
    <AppShell active="financial-report" title="Financial Report">
      <div className="mx-auto max-w-sm space-y-2 text-[13px]">
        {[
          ["Room Charge", "450,000 MMK"],
          ["Restaurant", "28,000 MMK"],
          ["Laundry", "15,000 MMK"],
        ].map(([label, amount]) => (
          <div key={label} className="flex justify-between border-b border-line pb-2">
            <span className="text-muted">{label}</span>
            <span className="font-mono">{amount}</span>
          </div>
        ))}
        <div className="flex justify-between pt-2 text-base font-medium">
          <span>Total</span>
          <span className="font-mono">493,000 MMK</span>
        </div>
        <p
          className={cn(
            "mt-4 rounded-md bg-brand py-2.5 text-center text-[12px] font-medium tracking-wide text-white uppercase transition-all duration-700",
            phase >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-95",
          )}
        >
          Payment Completed
        </p>
      </div>
    </AppShell>
  );
}

export function JourneyHousekeepingScene({ phase }: { phase: 0 | 1 }) {
  return (
    <AppShell active="maintenance" title="Maintenance">
      <div className="mx-auto max-w-sm">
        <div className="mb-4 flex justify-center">
          {phase === 0 ? (
            <StatusChange from="Occupied" to="Cleaning" />
          ) : (
            <StatusChange from="Cleaning" to="Ready" />
          )}
        </div>
        <div className="rounded-lg border border-line bg-paper p-4 text-[13px]">
          <div className="flex justify-between">
            <span className="text-muted">Room</span>
            <span className="font-mono font-medium">305</span>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-muted">Assigned to</span>
            <span>May</span>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-muted">Status</span>
            <span className={phase === 0 ? "text-amber" : "text-brand"}>
              {phase === 0 ? "Cleaning" : "Ready"}
            </span>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

export function JourneyConnectedScene() {
  const nodes = ["Reservation", "Guest", "Room", "Restaurant", "Payment", "Housekeeping", "Report"];
  return (
    <div className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-line bg-white p-8">
      <div className="flex flex-wrap justify-center gap-2">
        {nodes.map((n) => (
          <span
            key={n}
            className="rounded-full border border-line bg-paper px-3 py-1.5 text-[11px] font-medium text-charcoal"
          >
            {n}
          </span>
        ))}
      </div>
      <p className="my-6 text-2xl text-muted">↓</p>
      <p className="font-display text-4xl text-brand">SOVTELS</p>
    </div>
  );
}
