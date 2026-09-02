export type PreviewId =
  | "dashboard"
  | "reservations"
  | "checkin"
  | "rooms"
  | "guests"
  | "housekeeping"
  | "services"
  | "restaurant"
  | "requests"
  | "finance"
  | "reports"
  | "staff"
  | "permissions";

export interface FeatureItem {
  id: string;
  title: string;
  body: string;
  benefit: string;
  preview: PreviewId;
}

export interface FeatureGroup {
  id: string;
  title: string;
  items: FeatureItem[];
}

export const featureGroups: FeatureGroup[] = [
  {
    id: "front-office",
    title: "Front Office",
    items: [
      {
        id: "reservations",
        title: "Reservations",
        body: "Manage advance reservations, walk-ins, room assignments and booking status.",
        benefit: "Fewer booking mistakes and faster room assignments at reception.",
        preview: "reservations",
      },
      {
        id: "check-in",
        title: "Check-In / Check-Out",
        body: "Manage guest arrivals, stays, extensions, room changes and departures.",
        benefit: "One guest record from arrival to departure — no duplicate paperwork.",
        preview: "checkin",
      },
      {
        id: "rooms",
        title: "Room Management",
        body: "See available, occupied, reserved, cleaning and maintenance rooms.",
        benefit: "Reception and housekeeping always see the same live room status.",
        preview: "rooms",
      },
      {
        id: "guests",
        title: "Guest Management",
        body: "Maintain guest information and visit history.",
        benefit: "Return guests are recognized faster with their stay history in one place.",
        preview: "guests",
      },
    ],
  },
  {
    id: "operations",
    title: "Hotel Operations",
    items: [
      {
        id: "housekeeping",
        title: "Housekeeping",
        body: "Manage room cleaning, room readiness and housekeeping assignments.",
        benefit: "Rooms move from cleaning to available without calling the front desk.",
        preview: "housekeeping",
      },
      {
        id: "services",
        title: "Hotel Services",
        body: "Manage guest services and automatically connect service charges to the guest stay.",
        benefit: "Service charges post to the guest bill — no manual tracking at check-out.",
        preview: "services",
      },
      {
        id: "restaurant",
        title: "Restaurant & Kitchen",
        body: "Manage food orders, room service and restaurant operations.",
        benefit: "Room service orders connect to the guest stay instead of separate tickets.",
        preview: "restaurant",
      },
      {
        id: "requests",
        title: "Guest Requests",
        body: "Track requests and services during the guest stay.",
        benefit: "Every request is tied to the room — nothing gets lost between departments.",
        preview: "requests",
      },
    ],
  },
  {
    id: "money",
    title: "Money & Control",
    items: [
      {
        id: "income",
        title: "Income & Expense",
        body: "Track operational income and expenses.",
        benefit: "Daily hotel spending and income stay visible without separate ledgers.",
        preview: "finance",
      },
      {
        id: "payments",
        title: "Payments",
        body: "Manage guest payments and outstanding balances.",
        benefit: "Outstanding balances are clear before check-out — fewer payment disputes.",
        preview: "finance",
      },
      {
        id: "finance",
        title: "Finance",
        body: "Monitor hotel financial activity.",
        benefit: "Owners see revenue and hotel activity without waiting for manual reports.",
        preview: "finance",
      },
      {
        id: "reports",
        title: "Reports",
        body: "View revenue, occupancy and operational reports.",
        benefit: "Occupancy and revenue reports update from real hotel activity — not guesswork.",
        preview: "reports",
      },
    ],
  },
  {
    id: "team",
    title: "Team & Management",
    items: [
      {
        id: "hr",
        title: "HR & Staff",
        body: "Manage employees and hotel staff information.",
        benefit: "Staff records stay with the same system your hotel runs on every day.",
        preview: "staff",
      },
      {
        id: "permissions",
        title: "Roles & Permissions",
        body: "Control what different employees can access.",
        benefit: "Reception, housekeeping, and management each see only what they need.",
        preview: "permissions",
      },
      {
        id: "management",
        title: "Management Dashboard",
        body: "Give hotel management a clear overview of daily operations.",
        benefit: "Management gets today's picture — occupancy, revenue, arrivals — in one view.",
        preview: "dashboard",
      },
      {
        id: "guest-report",
        title: "Guest Report (GLIS)",
        body: "Export guest stay records for government reporting — name, identification, phone, check-in, check-out and room.",
        benefit: "Prepare GLIS / guest list reports for authorities without rebuilding data by hand.",
        preview: "guests",
      },
    ],
  },
];

export const allFeatureItems = featureGroups.flatMap((g) => g.items);
