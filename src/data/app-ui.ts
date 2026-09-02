export type AppNavItem = {
  id: string;
  label: string;
};

export type AppNavSection = {
  title: string;
  items: AppNavItem[];
};

export const appHomeNav: AppNavItem = { id: "home", label: "Home page" };

export const appActionNav: AppNavSection = {
  title: "Action",
  items: [
    { id: "history", label: "History" },
    { id: "promotion", label: "Promotion" },
    { id: "maintenance", label: "Maintenance" },
    { id: "financial-report", label: "Financial Report" },
  ],
};

export const appManagementNav: AppNavSection = {
  title: "Management",
  items: [
    { id: "reservation", label: "Reservation" },
    { id: "building", label: "Building" },
    { id: "room", label: "Room" },
    { id: "room-type", label: "Room Type" },
    { id: "service", label: "Service" },
    { id: "item", label: "Item" },
    { id: "extra-bed", label: "Extra Bed" },
    { id: "package", label: "Package" },
    { id: "guest-report", label: "Guest Report" },
  ],
};

/** Map legacy preview ids to real app nav ids */
export function resolveActiveNav(active: string): string {
  const map: Record<string, string> = {
    dashboard: "home",
    reservations: "reservation",
    rooms: "room",
    guests: "guest-report",
    housekeeping: "maintenance",
    finance: "financial-report",
    reports: "financial-report",
    staff: "guest-report",
  };
  return map[active] ?? active;
}
