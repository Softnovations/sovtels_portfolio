export const moduleIds = [
  "dashboard",
  "reservations",
  "front-office",
  "room-management",
  "guest-management",
  "guest-report",
  "housekeeping",
  "finance",
  "hotel-services",
  "restaurant-kitchen",
  "hr-staff",
  "reports",
  "permissions",
] as const;

export type ModuleId = (typeof moduleIds)[number];

export interface HotelModule {
  id: ModuleId;
  name: string;
  short: string;
}

export const modules: HotelModule[] = [
  { id: "dashboard", name: "Dashboard", short: "Operations at a glance" },
  { id: "reservations", name: "Reservations", short: "Bookings from every channel" },
  { id: "front-office", name: "Front Office", short: "Check-in to check-out" },
  { id: "room-management", name: "Room Management", short: "Live room status" },
  { id: "guest-management", name: "Guest Management", short: "Stay history and notes" },
  { id: "guest-report", name: "Guest Report (GLIS)", short: "Government guest list export" },
  { id: "housekeeping", name: "Housekeeping", short: "Cleaning connected to reception" },
  { id: "finance", name: "Finance", short: "Revenue, expenses, closing" },
  { id: "hotel-services", name: "Hotel Services", short: "Charges tied to the stay" },
  { id: "restaurant-kitchen", name: "Restaurant & Kitchen", short: "Orders charged to room" },
  { id: "hr-staff", name: "HR & Staff", short: "Roles, shifts, access" },
  { id: "reports", name: "Reports", short: "Clear operational decisions" },
  { id: "permissions", name: "Permissions", short: "Staff see only what they need" },
];

export const moduleNames = modules.map((m) => m.name);

export function getModule(id: ModuleId) {
  const found = modules.find((m) => m.id === id);
  if (!found) throw new Error(`Unknown module: ${id}`);
  return found;
}
