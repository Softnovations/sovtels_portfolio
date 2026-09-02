"use client";

import { AppShell } from "@/components/product/AppShell";
import {
  focusRoom,
  roomPanelStatusForStep,
  roomStatusForStep,
  type FlowRoomStatus,
} from "@/data/housekeeping-flow";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Users } from "lucide-react";

/** Compact room set — keeps the story readable at smaller widths */
const storyRooms = ["101", "102", "103", "104", "105", "108"] as const;

const roomStyles: Record<FlowRoomStatus, string> = {
  available: "bg-[#18a02e] text-white",
  unavailable: "bg-[#e53935] text-white",
  booked: "bg-[#f59e0b] text-white",
};

function StoryRoomButton({
  number,
  status,
  highlight,
}: {
  number: string;
  status: FlowRoomStatus;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex min-w-[48px] items-center justify-center rounded-lg px-2.5 py-2 text-[12px] font-medium transition-colors duration-700 ease-out",
        roomStyles[status],
        highlight && "ring-2 ring-charcoal/25 ring-offset-1",
      )}
    >
      {number}
    </div>
  );
}

function StoryFloorGrid({ step }: { step: number }) {
  const focusStatus = roomStatusForStep(step);
  const counts = storyRooms.reduce(
    (acc, number) => {
      const status = number === focusRoom.number ? focusStatus : "available";
      if (status === "available") acc.available += 1;
      else if (status === "unavailable") acc.unavailable += 1;
      else acc.booked += 1;
      return acc;
    },
    { available: 0, unavailable: 0, booked: 0 },
  );

  return (
    <div className="rounded-xl border border-[#e8ece6] bg-white p-3.5 shadow-sm">
      <div className="flex gap-3">
        <div className="flex w-[76px] shrink-0 flex-col">
          <p className="text-[10px] text-muted">Floor</p>
          <span className="mt-1 inline-flex w-fit rounded-md bg-brand px-2 py-0.5 text-[11px] font-semibold text-white">
            F1
          </span>
          <div className="mt-3 space-y-1.5 text-[10px] text-charcoal/80">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-[#18a02e]" />
              Avail. {counts.available}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-[#e53935]" />
              N/A {counts.unavailable}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-[#f59e0b]" />
              Booked {counts.booked}
            </div>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-1.5 sm:grid-cols-3">
          {storyRooms.map((number) => {
            const status = number === focusRoom.number ? focusStatus : "available";
            return (
              <StoryRoomButton
                key={number}
                number={number}
                status={status}
                highlight={number === focusRoom.number}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function PanelBlock({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function RoomDetailPanel({ step }: { step: number }) {
  const status = roomPanelStatusForStep(step);

  return (
    <div className="flex min-h-[248px] flex-col rounded-xl border border-[#e8ece6] bg-white p-3.5 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[12px] font-semibold text-charcoal">Room No - {focusRoom.number}</p>
        <span
          className={cn(
            "rounded-md px-2 py-0.5 text-[9px] font-semibold uppercase transition-colors duration-700",
            status.className,
          )}
        >
          {status.label}
        </span>
      </div>

      <div className="relative mt-3 flex-1">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <PanelBlock key="occupied">
              <dl className="space-y-1.5 text-[10px]">
                <div className="flex justify-between gap-2">
                  <dt className="text-muted">Guest</dt>
                  <dd className="font-medium text-charcoal">{focusRoom.guest}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-muted">Check In</dt>
                  <dd>{focusRoom.checkIn}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-muted">Stay</dt>
                  <dd>{focusRoom.stayType}</dd>
                </div>
              </dl>
              <div className="mt-4 rounded-lg bg-[#e53935] py-2 text-center text-[11px] font-medium text-white">
                Check Out
              </div>
            </PanelBlock>
          )}

          {step === 1 && (
            <PanelBlock key="required">
              <p className="text-[11px] leading-relaxed text-muted">
                Guest checked out. Room marked not available.
              </p>
              <div className="mt-3 rounded-lg bg-[#fff8e6] px-3 py-2.5 text-[10px] text-charcoal">
                Housekeeping task created automatically.
              </div>
              <dl className="mt-3 space-y-1.5 border-t border-[#e8ece6] pt-3 text-[10px]">
                <div className="flex justify-between">
                  <dt className="text-muted">Check Out</dt>
                  <dd>{focusRoom.checkOut}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Reference</dt>
                  <dd>{focusRoom.reference}</dd>
                </div>
              </dl>
            </PanelBlock>
          )}

          {step === 2 && (
            <PanelBlock key="cleaning">
              <p className="text-[10px] font-medium tracking-wide text-muted uppercase">Housekeeping</p>
              <p className="mt-2 text-[12px] font-medium text-charcoal">Post check-out cleaning</p>
              <p className="mt-1 text-[10px] text-muted">
                Assigned to <span className="font-medium text-charcoal">{focusRoom.cleaner}</span>
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#eef2ed]">
                <motion.div
                  className="h-full rounded-full bg-[#f59e0b]"
                  initial={{ width: "30%" }}
                  animate={{ width: "68%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <p className="mt-2 text-[10px] text-muted">In progress · ETA 45 min</p>
            </PanelBlock>
          )}

          {step >= 3 && (
            <PanelBlock key="ready">
              <p className="text-[11px] text-muted">{focusRoom.type}</p>
              <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-muted">
                <span className="rounded-md bg-[#f3f5f2] px-2 py-0.5">{focusRoom.beds}</span>
                <span className="inline-flex items-center gap-1 rounded-md bg-[#f3f5f2] px-2 py-0.5">
                  <Users className="h-3 w-3" />
                  {focusRoom.capacity}
                </span>
              </div>
              <p className="mt-3 text-[11px] text-brand">Reception can assign this room now.</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-brand py-2 text-center text-[10px] font-medium text-white">
                  Check In
                </div>
                <div className="rounded-lg bg-[#0d5c18] py-2 text-center text-[10px] font-medium text-white">
                  Reservation
                </div>
              </div>
            </PanelBlock>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/** Single reservation view — only room 102 and the panel change per step */
export function HousekeepingOperationsScreen({ step }: { step: number }) {
  return (
    <AppShell active="reservation" title="Reservation Management" compact>
      <p className="mb-2.5 text-[13px] font-semibold text-charcoal">Main Building</p>
      <div className="grid gap-2.5 lg:grid-cols-[minmax(0,1fr)_190px]">
        <StoryFloorGrid step={step} />
        <RoomDetailPanel step={step} />
      </div>
    </AppShell>
  );
}

/** Lightweight mobile card — no full app shell */
export function HousekeepingStepCard({ step }: { step: number }) {
  const status = roomPanelStatusForStep(step);
  const roomStatus = roomStatusForStep(step);

  return (
    <div className="surface-card overflow-hidden !p-0">
      <div className="border-b border-line bg-[#f8faf7] px-4 py-3">
        <p className="text-[10px] font-medium tracking-[0.12em] text-brand uppercase">Sovtels · Room {focusRoom.number}</p>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <span
            className={cn(
              "font-mono text-[clamp(2rem,8vw,2.5rem)] font-medium leading-none transition-colors duration-700",
              roomStatus === "available" ? "text-brand" : "text-charcoal",
            )}
          >
            {focusRoom.number}
          </span>
          <span className={cn("rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase", status.className)}>
            {status.label}
          </span>
        </div>
        <div className="mt-4 min-h-[72px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={step}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
              className="text-[14px] leading-relaxed text-muted"
            >
              {step === 0 && "Guest in-house. Front desk can check out when they leave."}
              {step === 1 && "Guest checked out. Housekeeping notified automatically."}
              {step === 2 && `Cleaning assigned to ${focusRoom.cleaner}. Room not available yet.`}
              {step >= 3 && "Room is ready. Reception sees it as available."}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
