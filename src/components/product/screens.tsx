import { rooms, roomStatusMeta } from "@/data/rooms";
import {
  floorStatusCounts,
  reservationFloors,
  type ReservationRoom,
  type ReservationRoomStatus,
} from "@/data/reservation-board";
import type { PreviewId } from "@/data/features";
import { formatMmk, cn } from "@/lib/utils";
import { BedDouble, Calendar, Clock, Download, Pencil, Plus } from "lucide-react";
import { AppShell, StatusDot } from "./AppShell";

export function ProductScreen({ id }: { id: PreviewId }) {
  switch (id) {
    case "reservations":
      return <ReservationsScreen />;
    case "checkin":
      return <CheckinScreen />;
    case "rooms":
      return <RoomsScreen />;
    case "guests":
      return <GuestReportScreen />;
    case "housekeeping":
      return <HousekeepingScreen />;
    case "services":
    case "requests":
      return <ServicesScreen />;
    case "restaurant":
      return <RestaurantScreen />;
    case "finance":
      return <FinanceScreen />;
    case "reports":
      return <ReportsScreen />;
    case "staff":
      return <StaffScreen />;
    case "permissions":
      return <PermissionsScreen />;
    default:
      return <DashboardScreen />;
  }
}

export function DashboardScreen() {
  const kpis = [
    { label: "Total Revenue", value: "2,450,000 Ks" },
    { label: "Total Bookings", value: "48" },
    { label: "Avg. Revenue", value: "51,042 Ks" },
    { label: "Booking Rate", value: "78%" },
  ];

  const chartBars = [32, 48, 40, 62, 55, 70, 58];

  return (
    <AppShell active="dashboard" title="Dashboard">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="relative overflow-hidden rounded-xl border border-[#e8ece6] bg-white p-4 shadow-sm"
          >
            <div className="absolute inset-y-3 right-0 w-1 rounded-l-full bg-brand" />
            <p className="text-[12px] text-muted">{kpi.label}</p>
            <p className="mt-2 text-xl font-semibold text-charcoal">{kpi.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        {[
          { title: "Ranking Room Type (Bookings)", value: 72 },
          { title: "Top Room (Bookings)", value: 58 },
        ].map((card) => (
          <div key={card.title} className="rounded-xl border border-[#e8ece6] bg-white p-4 shadow-sm">
            <p className="text-[13px] font-medium text-charcoal">{card.title}</p>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#eef2ed]">
              <div className="h-full rounded-full bg-brand" style={{ width: `${card.value}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-[#e8ece6] bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="text-[15px] font-semibold text-charcoal">Sale report</p>
            <p className="text-[12px] text-muted">Amount of rent hotel room</p>
          </div>
          <span className="rounded-lg border border-line bg-[#f8faf7] px-2.5 py-1.5 text-[10px] text-muted">
            Weekly · 31-08-2026 to 06-09-2026
          </span>
        </div>
        <div className="mt-5 flex h-36 items-end gap-2 border-b border-l border-[#e8ece6] pl-2 pb-2">
          {chartBars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div className="w-full rounded-t-sm bg-brand/80" style={{ height: `${h}%` }} />
              <span className="text-[9px] text-muted">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

const reservationRoomStyles: Record<ReservationRoomStatus, string> = {
  available: "bg-[#18a02e] text-white hover:bg-[#159028]",
  unavailable: "bg-[#e53935] text-white",
  booked: "bg-[#f59e0b] text-white",
};

function ReservationLegend({
  label,
  count,
  color,
}: {
  label: string;
  count: number;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2 text-[11px] text-charcoal/80">
      <span className={cn("h-3 w-3 shrink-0 rounded-sm", color)} />
      <span>
        {label} <span className="font-medium text-charcoal">{count}</span>
      </span>
    </div>
  );
}

function ReservationFloorCard({ floor }: { floor: (typeof reservationFloors)[number] }) {
  const counts = floorStatusCounts(floor.rooms);

  return (
    <div className="rounded-xl border border-[#e8ece6] bg-white p-4 shadow-sm">
      <div className="flex gap-4">
        <div className="flex w-[88px] shrink-0 flex-col">
          <p className="text-[11px] text-muted">Floor</p>
          <span className="mt-1 inline-flex w-fit rounded-md bg-brand px-2.5 py-1 text-[12px] font-semibold text-white">
            {floor.label}
          </span>

          <div className="mt-4 space-y-2">
            <ReservationLegend label="Available" count={counts.available} color="bg-[#18a02e]" />
            <ReservationLegend label="Not Available" count={counts.unavailable} color="bg-[#e53935]" />
            <ReservationLegend label="Booked" count={counts.booked} color="bg-[#f59e0b]" />
          </div>

          <button
            type="button"
            className="mt-4 flex h-8 w-8 items-center justify-center rounded-lg border border-[#e8ece6] bg-[#f8faf7] text-muted"
            aria-label="Edit floor"
          >
            <Pencil className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-2">
            {floor.rooms.map((room) => (
              <ReservationRoomButton key={room.number} room={room} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReservationRoomButton({ room }: { room: ReservationRoom }) {
  return (
    <button
      type="button"
      className={cn(
        "min-w-[52px] rounded-lg px-3 py-2.5 text-[13px] font-medium transition-colors",
        reservationRoomStyles[room.status],
      )}
    >
      {room.number}
    </button>
  );
}

export function ReservationManagementScreen() {
  return (
    <AppShell active="reservation" title="Reservation Management">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[15px] font-semibold text-charcoal">Main Building</p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#e8ece6] bg-white px-2.5 py-1.5 text-[11px] text-charcoal">
            <Calendar className="h-3.5 w-3.5 text-muted" />
            02/09/2026
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#e8ece6] bg-white px-2.5 py-1.5 text-[11px] text-charcoal">
            <Clock className="h-3.5 w-3.5 text-muted" />
            09:23:21 PM
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-lg bg-brand px-3 py-1.5 text-[11px] font-medium text-white"
          >
            <Plus className="h-3.5 w-3.5" />
            Add floor
          </button>
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_180px]">
        <div className="space-y-3">
          {reservationFloors.map((floor) => (
            <ReservationFloorCard key={floor.id} floor={floor} />
          ))}
        </div>

        <div className="hidden rounded-xl border border-[#e8ece6] bg-white p-4 shadow-sm lg:flex lg:flex-col lg:items-center lg:justify-center">
          <div className="flex h-full min-h-[220px] flex-col items-center justify-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3f5f2] text-muted">
              <BedDouble className="h-7 w-7" strokeWidth={1.5} />
            </span>
            <p className="mt-4 text-[13px] font-medium text-charcoal">Select a Room</p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

export function ReservationsScreen() {
  const rows = [
    ["John Smith", "305", "12 Aug", "15 Aug", "Confirmed"],
    ["Su Su Hlaing", "206", "12 Aug", "14 Aug", "Confirmed"],
    ["Elena Rossi", "502", "13 Aug", "16 Aug", "Pending"],
    ["Aung Min", "102", "11 Aug", "13 Aug", "In-house"],
  ];
  return (
    <AppShell active="reservations" title="Reservation">
      <table className="w-full text-left text-[11px]">
        <thead className="text-[10px] tracking-wide text-muted uppercase">
          <tr>
            {["Guest", "Room", "Arrival", "Departure", "Status"].map((h) => (
              <th key={h} className="pb-2 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-line">
              {row.map((c, i) => (
                <td key={i} className="py-2 text-charcoal">
                  {i === 4 ? (
                    <span className={c === "Pending" ? "status-reserved rounded-sm px-1.5 py-0.5" : "status-available rounded-sm px-1.5 py-0.5"}>
                      {c}
                    </span>
                  ) : (
                    c
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </AppShell>
  );
}

export function CheckinScreen() {
  return (
    <AppShell active="reservations" title="Front Desk · Stay 305">
      <div className="grid gap-3 sm:grid-cols-2">
        <dl className="space-y-2 text-[12px]">
          {[
            ["Guest", "John Smith"],
            ["Room", "Deluxe King — 305"],
            ["Stay", "12 Aug → 15 Aug"],
            ["Status", "Checked in"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between border-b border-line pb-1.5">
              <dt className="text-muted">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <div className="rounded-md border border-line bg-paper p-3 text-[12px]">
          <p className="text-[10px] tracking-wide text-muted uppercase">Folio</p>
          <p className="mt-2 flex justify-between">
            <span>Room · 3 nights</span>
            <span className="font-mono">270,000</span>
          </p>
          <p className="mt-1 flex justify-between">
            <span>Restaurant</span>
            <span className="font-mono">28,000</span>
          </p>
          <p className="mt-3 flex justify-between font-medium">
            <span>Balance</span>
            <span className="font-mono text-brand">298,000 MMK</span>
          </p>
        </div>
      </div>
    </AppShell>
  );
}

export function RoomsScreen() {
  return (
    <AppShell active="rooms" title="Room">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {rooms.slice(0, 10).map((r) => (
          <div key={r.number} className="rounded-md border border-line bg-paper p-2.5">
            <p className="font-mono text-sm text-charcoal">{r.number}</p>
            <p className="mt-1 text-[10px] text-muted">{r.type}</p>
            <div className="mt-2">
              <span className={`${roomStatusMeta[r.status].className} rounded-sm px-1.5 py-0.5 text-[9px] uppercase`}>
                {roomStatusMeta[r.status].label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}

export function GuestReportScreen() {
  const rows = [
    {
      name: "Solomon",
      id: "NRC",
      phone: "0911111111",
      checkIn: "2026-09-02 21:30:00",
      checkOut: "2026-09-09 21:30:00",
      room: "102",
    },
    {
      name: "Su Su Hlaing",
      id: "NRC",
      phone: "09421880112",
      checkIn: "2026-09-01 14:00:00",
      checkOut: "2026-09-04 12:00:00",
      room: "206",
    },
    {
      name: "Michael Tan",
      id: "Passport",
      phone: "+65 9123 4567",
      checkIn: "2026-08-30 16:20:00",
      checkOut: "2026-09-03 11:00:00",
      room: "305",
    },
  ];

  return (
    <AppShell active="guest-report" title="Dashboard">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[18px] font-semibold text-charcoal">Guest Report</p>
          <p className="mt-0.5 text-[12px] text-muted">List of guest reports in Hotel</p>
        </div>
      </div>

      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3.5 py-2 text-[12px] font-medium text-white"
        >
          <Download className="h-3.5 w-3.5" />
          Export Excel
        </button>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#e8ece6] bg-white px-2.5 py-1.5 text-[11px] text-charcoal">
          <Calendar className="h-3.5 w-3.5 text-muted" />
          02/09/2026
        </span>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#e8ece6] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-[11px]">
            <thead className="border-b border-[#e8ece6] bg-[#f8faf7] text-[10px] tracking-wide text-muted uppercase">
              <tr>
                {["Guest Name", "Identification", "Phone", "Check In", "Check Out", "Room No"].map(
                  (h) => (
                    <th key={h} className="px-3 py-3 font-medium whitespace-nowrap">
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={`${row.name}-${row.room}`} className="border-t border-[#e8ece6]">
                  <td className="px-3 py-3 font-medium whitespace-nowrap text-charcoal">{row.name}</td>
                  <td className="px-3 py-3 text-muted">{row.id}</td>
                  <td className="px-3 py-3 font-mono whitespace-nowrap text-charcoal">{row.phone}</td>
                  <td className="px-3 py-3 font-mono whitespace-nowrap text-muted">{row.checkIn}</td>
                  <td className="px-3 py-3 font-mono whitespace-nowrap text-muted">{row.checkOut}</td>
                  <td className="px-3 py-3 font-mono font-medium text-charcoal">{row.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}

export function GuestsScreen() {
  return (
    <AppShell active="reservations" title="Guest · Michael Tan">
      <p className="text-lg font-medium">Michael Tan</p>
      <p className="text-[12px] text-muted">7 stays · Preferred Deluxe King</p>
      <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-[12px]">
        {[
          ["Phone", "+95 9 421 880 112"],
          ["Last visit", "14 July"],
          ["Total spending", "4.28M MMK"],
          ["Note", "Late check-in preferred"],
        ].map(([k, v]) => (
          <div key={k}>
            <dt className="text-[10px] text-muted">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </AppShell>
  );
}

export function HousekeepingScreen() {
  const queue = [
    ["205", "Cleaning", "May"],
    ["104", "Cleaning", "Thiri"],
    ["304", "Ready", "Su Su"],
    ["105", "Inspection", "Ko Myo"],
  ];
  return (
    <AppShell active="housekeeping" title="Maintenance">
      <ul className="space-y-2">
        {queue.map(([room, status, staff]) => (
          <li
            key={room}
            className="flex items-center justify-between rounded-md border border-line bg-paper px-3 py-2 text-[12px]"
          >
            <span className="font-mono">Room {room}</span>
            <span className="text-muted">Assigned: {staff}</span>
            <StatusDot status={status === "Ready" ? "ready" : status === "Inspection" ? "maintenance" : "cleaning"} />
          </li>
        ))}
      </ul>
    </AppShell>
  );
}

export function ServicesScreen() {
  return (
    <AppShell active="dashboard" title="Guest Services · 305">
      <ol className="grid grid-cols-2 gap-2 text-[12px] sm:grid-cols-4">
        {[
          ["01", "Room 305", "Orders room service"],
          ["02", "Restaurant", "Receives request"],
          ["03", "Charge", "Posted to stay"],
          ["04", "Bill", "Included at check-out"],
        ].map(([n, t, d]) => (
          <li key={n} className="rounded-md border border-line bg-paper p-3">
            <p className="font-mono text-[10px] text-brand">{n}</p>
            <p className="mt-1 font-medium">{t}</p>
            <p className="text-[11px] text-muted">{d}</p>
          </li>
        ))}
      </ol>
    </AppShell>
  );
}

export function RestaurantScreen() {
  return (
    <AppShell active="dashboard" title="Kitchen · Room 402">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-line bg-paper p-3 text-[12px]">
          <p className="text-[10px] text-muted uppercase">Ticket #1842</p>
          <p className="mt-2">Fried Rice × 1</p>
          <p>Coffee × 2</p>
          <p className="mt-3 font-medium text-brand">Total {formatMmk(28_000)}</p>
          <p className="mt-2 rounded-md bg-brand px-3 py-1.5 text-center text-[10px] tracking-wide text-white uppercase">
            Charge to Room
          </p>
        </div>
        <div className="rounded-md border border-line bg-paper p-3 text-[12px]">
          <p className="text-[10px] text-muted uppercase">Guest bill</p>
          <p className="mt-2 flex justify-between">
            <span>Room</span>
            <span className="font-mono">180,000</span>
          </p>
          <p className="mt-1 flex justify-between">
            <span>This order</span>
            <span className="font-mono">28,000</span>
          </p>
        </div>
      </div>
    </AppShell>
  );
}

export function FinanceScreen() {
  const kpis = [
    { label: "Revenue", value: "2,450,000 MMK", hint: "48 invoices", tone: "brand" as const },
    { label: "Salary Cost", value: "620,000 MMK", hint: "12 approved payrolls", tone: "cost" as const },
    { label: "Maintenance Cost", value: "180,000 MMK", hint: "6 records", tone: "cost" as const },
    { label: "Profit", value: "1,650,000 MMK", hint: "Revenue minus costs", tone: "brand" as const },
  ];

  const income = [
    ["Actual invoice revenue", "2,450,000 MMK"],
    ["Booking total", "1,980,000 MMK"],
    ["Reservation total", "1,720,000 MMK"],
    ["Check-in total", "2,100,000 MMK"],
    ["Deposit total", "350,000 MMK"],
  ];

  const costs = [
    ["Approved salary", "620,000 MMK"],
    ["Maintenance", "180,000 MMK"],
    ["Total cost", "800,000 MMK"],
  ];

  const daily = [
    ["02 Sep", "420,000", "90,000", "25,000", "115,000", "305,000", "12,000"],
    ["01 Sep", "380,000", "85,000", "18,000", "103,000", "277,000", "10,000"],
    ["31 Aug", "510,000", "110,000", "40,000", "150,000", "360,000", "15,000"],
  ];
  const dailyHead = ["Period", "Revenue", "Salary", "Maintenance", "Total Cost", "Profit", "Booking Fee"];

  return (
    <AppShell active="financial-report" title="Financial Report">
      <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-[16px] font-semibold text-charcoal sm:text-[18px]">Financial Report</p>
          <p className="mt-0.5 text-[12px] leading-relaxed text-muted">
            Actual revenue from checkout invoices minus approved payroll and maintenance costs.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex w-full shrink-0 items-center justify-center gap-1.5 rounded-lg bg-brand px-3.5 py-2 text-[12px] font-medium text-white sm:w-auto"
        >
          <Download className="h-3.5 w-3.5" />
          Export CSV
        </button>
      </div>

      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-end">
        <label className="min-w-0 w-full sm:min-w-[120px] sm:flex-1">
          <span className="mb-1 block text-[10px] text-muted">From</span>
          <span className="inline-flex w-full items-center gap-1.5 rounded-lg border border-[#e8ece6] bg-white px-2.5 py-1.5 text-[11px] text-charcoal">
            <Calendar className="h-3.5 w-3.5 shrink-0 text-muted" />
            31/08/2026
          </span>
        </label>
        <label className="min-w-0 w-full sm:min-w-[120px] sm:flex-1">
          <span className="mb-1 block text-[10px] text-muted">To</span>
          <span className="inline-flex w-full items-center gap-1.5 rounded-lg border border-[#e8ece6] bg-white px-2.5 py-1.5 text-[11px] text-charcoal">
            <Calendar className="h-3.5 w-3.5 shrink-0 text-muted" />
            02/09/2026
          </span>
        </label>
        <button
          type="button"
          className="w-full rounded-lg bg-brand px-4 py-1.5 text-[12px] font-medium text-white sm:w-auto"
        >
          Filter
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="min-w-0 rounded-xl border border-[#e8ece6] bg-white p-2.5 shadow-sm sm:p-3"
          >
            <p className="text-[10px] text-muted sm:text-[11px]">{kpi.label}</p>
            <p
              className={cn(
                "mt-1.5 text-[12px] font-semibold leading-snug break-words sm:text-[15px]",
                kpi.tone === "cost" ? "text-[#e53935]" : "text-brand",
              )}
            >
              {kpi.value}
            </p>
            <p className="mt-0.5 text-[10px] text-muted">{kpi.hint}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 grid min-w-0 gap-2 lg:grid-cols-2">
        <div className="min-w-0 rounded-xl border border-[#e8ece6] bg-white p-3 shadow-sm">
          <p className="text-[13px] font-semibold text-charcoal">Income Reference</p>
          <dl className="mt-2 space-y-1.5 text-[11px]">
            {income.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-3 border-b border-[#e8ece6] pb-1.5 last:border-0">
                <dt className="min-w-0 text-muted">{label}</dt>
                <dd className="shrink-0 font-mono text-charcoal">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="min-w-0 rounded-xl border border-[#e8ece6] bg-white p-3 shadow-sm">
          <p className="text-[13px] font-semibold text-charcoal">Cost Summary</p>
          <dl className="mt-2 space-y-1.5 text-[11px]">
            {costs.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-3 border-b border-[#e8ece6] pb-1.5 last:border-0">
                <dt className="min-w-0 text-muted">{label}</dt>
                <dd className="shrink-0 font-mono text-charcoal">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-3 min-w-0 overflow-hidden rounded-xl border border-[#e8ece6] bg-white shadow-sm">
        <p className="border-b border-[#e8ece6] bg-[#f8faf7] px-3 py-2 text-[12px] font-semibold text-charcoal">
          Daily Breakdown
        </p>
        <div className="space-y-2 p-2 lg:hidden">
          {daily.map((row) => (
            <div key={row[0]} className="min-w-0 rounded-lg border border-[#e8ece6] bg-[#fbfbfa] p-2.5 sm:p-3">
              <p className="text-[12px] font-semibold text-charcoal">{row[0]}</p>
              <dl className="mt-2 grid grid-cols-1 gap-y-1.5 text-[11px] min-[380px]:grid-cols-2 min-[380px]:gap-x-3 min-[380px]:gap-y-2">
                {[
                  { label: "Revenue", value: row[1] },
                  { label: "Profit", value: row[5], accent: true },
                  { label: "Salary", value: row[2] },
                  { label: "Maintenance", value: row[3] },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex min-w-0 items-baseline justify-between gap-2 min-[380px]:flex-col min-[380px]:items-start min-[380px]:justify-start min-[380px]:gap-0.5"
                  >
                    <dt className="shrink-0 text-muted">{item.label}</dt>
                    <dd
                      className={cn(
                        "min-w-0 text-right font-mono tabular-nums tracking-tight min-[380px]:text-left",
                        item.accent ? "font-medium text-brand" : "text-charcoal",
                      )}
                    >
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <div className="hidden min-w-0 overflow-x-auto lg:block">
          <table className="w-full min-w-[520px] text-left text-[10px]">
            <thead className="text-[9px] tracking-wide text-muted uppercase">
              <tr>
                {dailyHead.map((h) => (
                  <th key={h} className="px-3 py-2 font-medium whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {daily.map((row) => (
                <tr key={row[0]} className="border-t border-[#e8ece6]">
                  {row.map((cell, i) => (
                    <td
                      key={`${row[0]}-${i}`}
                      className={cn(
                        "px-3 py-2 whitespace-nowrap",
                        i === 0 ? "font-medium text-charcoal" : "font-mono text-muted",
                        i === 5 && "font-medium text-brand",
                      )}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}

export function ReportsScreen() {
  const cards = ["Daily Revenue", "Occupancy", "Reservations", "Check-In / Out", "Guest", "Room Performance"];
  return (
    <AppShell active="reports" title="Financial Report">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {cards.map((c) => (
          <div key={c} className="rounded-md border border-line bg-paper p-3">
            <p className="text-[12px] font-medium">{c}</p>
            <div className="mt-3 flex h-8 items-end gap-1">
              {[40, 70, 55, 80, 62, 75].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-brand/70" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}

export function StaffScreen() {
  return (
    <AppShell active="staff" title="Staff Directory">
      <table className="w-full text-left text-[12px]">
        <thead className="text-[10px] text-muted uppercase">
          <tr>
            <th className="pb-2 font-medium">Staff</th>
            <th className="pb-2 font-medium">Department</th>
            <th className="pb-2 font-medium">Role</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Aye Chan", "Reception", "Receptionist"],
            ["May", "Housekeeping", "Supervisor"],
            ["Ko Myo", "Finance", "Cashier"],
            ["Hlaing", "Kitchen", "Chef"],
          ].map((r) => (
            <tr key={r[0]} className="border-t border-line">
              {r.map((c) => (
                <td key={c} className="py-2">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </AppShell>
  );
}

export function PermissionsScreen() {
  return (
    <AppShell active="staff" title="Roles & Permissions">
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="rounded-md border border-line bg-paper p-3 text-[12px]">
          <p className="text-[10px] font-medium tracking-wide text-brand uppercase">Receptionist can</p>
          <ul className="mt-2 space-y-1 text-muted">
            <li>Reservation</li>
            <li>Check-In</li>
            <li>Check-Out</li>
          </ul>
        </div>
        <div className="rounded-md border border-line bg-paper p-3 text-[12px]">
          <p className="text-[10px] font-medium tracking-wide text-amber uppercase">Cannot</p>
          <ul className="mt-2 space-y-1 text-muted">
            <li>View owner financial reports</li>
            <li>Modify system settings</li>
          </ul>
        </div>
      </div>
    </AppShell>
  );
}

function Metric({
  label,
  value,
  hint,
  accent,
}: {
  label: string;
  value: string;
  hint?: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-md border border-line bg-paper p-2.5">
      <p className="text-[10px] tracking-wide text-muted uppercase">{label}</p>
      <p className={`mt-1 font-mono text-sm ${accent ? "text-brand" : "text-charcoal"}`}>{value}</p>
      {hint && <p className="text-[10px] text-muted-2">{hint}</p>}
    </div>
  );
}
