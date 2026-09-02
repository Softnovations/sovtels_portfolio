export type RoomStatus =
  | "available"
  | "occupied"
  | "reserved"
  | "cleaning"
  | "maintenance"
  | "ready";

export const roomStatusMeta: Record<
  RoomStatus,
  { label: string; className: string }
> = {
  available: { label: "Available", className: "status-available" },
  occupied: { label: "Occupied", className: "status-occupied" },
  reserved: { label: "Reserved", className: "status-reserved" },
  cleaning: { label: "Cleaning", className: "status-cleaning" },
  maintenance: { label: "Maintenance", className: "status-maintenance" },
  ready: { label: "Ready", className: "status-ready" },
};

export interface HotelRoom {
  number: string;
  floor: number;
  type: string;
  status: RoomStatus;
  guest?: string;
}

export const rooms: HotelRoom[] = [
  { number: "101", floor: 1, type: "Standard Twin", status: "available" },
  { number: "102", floor: 1, type: "Standard Twin", status: "occupied", guest: "Aung Min" },
  { number: "103", floor: 1, type: "Deluxe King", status: "reserved", guest: "John Smith" },
  { number: "104", floor: 1, type: "Deluxe King", status: "cleaning" },
  { number: "105", floor: 1, type: "Standard Twin", status: "maintenance" },
  { number: "201", floor: 2, type: "Deluxe King", status: "available" },
  { number: "202", floor: 2, type: "Deluxe King", status: "occupied", guest: "Michael Tan" },
  { number: "203", floor: 2, type: "Standard Twin", status: "reserved" },
  { number: "204", floor: 2, type: "Deluxe King", status: "cleaning" },
  { number: "301", floor: 3, type: "Deluxe King", status: "occupied", guest: "Hana Park" },
  { number: "302", floor: 3, type: "Deluxe King", status: "available" },
  { number: "305", floor: 3, type: "Standard Twin", status: "occupied", guest: "David Ng" },
];
