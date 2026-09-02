export type HousekeepingFlowStep = 0 | 1 | 2 | 3;

export const focusRoom = {
  number: "102",
  type: "Standard D",
  beds: "Twin Beds",
  capacity: "5 guests",
  guest: "Solomon",
  phone: "09xxxxxxxxx",
  stayType: "Room Package",
  guests: "1 Guest",
  checkIn: "02-09-2026, 14:00:00",
  checkOut: "02-09-2026, 21:29:59",
  reference: "REF-102-0926",
  cleaner: "May",
} as const;

export type FlowRoomStatus = "available" | "unavailable" | "booked";

export function roomStatusForStep(step: number): FlowRoomStatus {
  if (step >= 3) return "available";
  if (step >= 1) return "unavailable";
  return "booked";
}

export function roomPanelStatusForStep(step: number): {
  label: string;
  className: string;
} {
  if (step >= 3) return { label: "Available", className: "bg-[#18a02e] text-white" };
  if (step === 2) return { label: "Cleaning", className: "bg-[#f59e0b] text-white" };
  if (step === 1) return { label: "Not Available", className: "bg-[#e53935] text-white" };
  return { label: "Booked", className: "bg-[#f59e0b] text-white" };
}
