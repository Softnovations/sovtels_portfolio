import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BedDouble,
  CalendarDays,
  ClipboardList,
  CreditCard,
  FileSpreadsheet,
  LayoutDashboard,
  LogIn,
  Monitor,
  Receipt,
  Shield,
  Sparkles,
  Users,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";

export type HomepageFeatureGroup = {
  id: string;
  title: string;
  items: { label: string; icon: LucideIcon }[];
};

/** Compact feature map — shown early on homepage */
export const homepageFeatureGroups: HomepageFeatureGroup[] = [
  {
    id: "front-office",
    title: "Front Office",
    items: [
      { label: "Reservation", icon: CalendarDays },
      { label: "Check-In / Check-Out", icon: LogIn },
      { label: "Room Management", icon: BedDouble },
      { label: "Guest Management", icon: Users },
    ],
  },
  {
    id: "operations",
    title: "Operations",
    items: [
      { label: "Housekeeping", icon: Sparkles },
      { label: "Hotel Services", icon: ClipboardList },
      { label: "Restaurant & Kitchen", icon: UtensilsCrossed },
      { label: "Guest Requests", icon: Monitor },
    ],
  },
  {
    id: "finance",
    title: "Finance",
    items: [
      { label: "Income & Expense", icon: Wallet },
      { label: "Payments", icon: CreditCard },
      { label: "Revenue", icon: Receipt },
      { label: "Reports", icon: BarChart3 },
    ],
  },
  {
    id: "management",
    title: "Management",
    items: [
      { label: "HR & Staff", icon: Users },
      { label: "Roles & Permissions", icon: Shield },
      { label: "Dashboard", icon: LayoutDashboard },
      { label: "Guest Report (GLIS)", icon: FileSpreadsheet },
    ],
  },
];

export const bookingStorySteps = [
  {
    id: "book",
    title: "Book.",
    body: "Reservation enters Sovtels.",
  },
  {
    id: "checkin",
    title: "Check In.",
    body: "Guest and room are connected.",
  },
  {
    id: "stay",
    title: "Stay.",
    body: "Services are added to the guest account.",
  },
  {
    id: "checkout",
    title: "Check Out.",
    body: "Everything comes together in one bill.",
  },
] as const;

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
] as const;

export const financeMetrics = [
  { label: "Today Revenue", value: "2.45M MMK", accent: true },
  { label: "Room Revenue", value: "1.90M" },
  { label: "Services", value: "350K" },
  { label: "Restaurant", value: "200K" },
  { label: "Expenses", value: "620K" },
  { label: "Outstanding", value: "180K" },
] as const;

export const dashboardMetrics = [
  { label: "Occupancy", value: "78%" },
  { label: "Available Rooms", value: "12" },
  { label: "Occupied Rooms", value: "34" },
  { label: "Reserved Rooms", value: "8" },
  { label: "Check-Ins", value: "14" },
  { label: "Check-Outs", value: "9" },
  { label: "Today's Revenue", value: "2.45M MMK" },
] as const;

export const roomBoard = [
  { number: "101", status: "available" as const },
  { number: "102", status: "occupied" as const },
  { number: "103", status: "reserved" as const },
  { number: "104", status: "cleaning" as const },
  { number: "105", status: "maintenance" as const },
];

export const todayPanel = [
  { label: "Arrivals", value: "14 guests" },
  { label: "Departures", value: "9 guests" },
  { label: "Housekeeping", value: "6 rooms" },
  { label: "Outstanding Payments", value: "180K MMK" },
] as const;

export const housekeepingSteps = [
  { label: "Occupied", detail: "Guest in room" },
  { label: "Cleaning Required", detail: "Guest checks out" },
  { label: "Cleaning", detail: "Assigned to housekeeping" },
  { label: "Ready", detail: "Reception sees room available" },
] as const;
