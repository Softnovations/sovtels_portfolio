export const whyPoints = [
  {
    title: "One Connected System",
    body: "Manage hotel operations from one platform.",
  },
  {
    title: "Less Manual Work",
    body: "Reduce repetitive daily processes.",
  },
  {
    title: "Clearer Operations",
    body: "Know what's happening across rooms and departments.",
  },
  {
    title: "Built for Hospitality",
    body: "Designed around real hotel and motel workflows.",
  },
];

export const audiences = [
  { id: "hotel", title: "Hotel", image: "lobby" as const },
  { id: "motel", title: "Motel", image: "motel" as const },
  { id: "boutique", title: "Boutique Hotel", image: "bedroom" as const },
  { id: "guesthouse", title: "Guesthouse", image: "corridor" as const },
  { id: "resort", title: "Resort", image: "resort" as const },
  { id: "serviced", title: "Serviced Apartment", image: "suite" as const },
];

export const journeySteps = [
  {
    id: "reservation",
    title: "Reservation",
    body: "Guest books Room 305.",
  },
  {
    id: "assignment",
    title: "Room Assignment",
    body: "The stay is tied to an available room.",
  },
  {
    id: "checkin",
    title: "Check-In",
    body: "Reception confirms the guest and activates the room.",
  },
  {
    id: "services",
    title: "Guest Services",
    body: "Restaurant, laundry or other services can be charged to Room 305.",
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    body: "Cleaning status stays connected to the front desk.",
  },
  {
    id: "payment",
    title: "Payment",
    body: "Room and service charges collect on one folio.",
  },
  {
    id: "checkout",
    title: "Check-Out",
    body: "All room and service charges appear together.",
  },
  {
    id: "report",
    title: "Report",
    body: "Revenue and hotel reports update automatically.",
  },
];

export const demoProperty = {
  name: "The Aurelia",
  city: "Yangon",
  date: "12 Aug 2026",
  shift: "Morning · Reception",
};

export const sidebarNav = [
  { id: "dashboard", label: "Dashboard" },
  { id: "reservations", label: "Reservations" },
  { id: "rooms", label: "Rooms" },
  { id: "housekeeping", label: "Housekeeping" },
  { id: "finance", label: "Finance" },
  { id: "reports", label: "Reports" },
  { id: "staff", label: "Staff" },
] as const;
