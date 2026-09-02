export type ReservationRoomStatus = "available" | "unavailable" | "booked";

export type ReservationRoom = {
  number: string;
  status: ReservationRoomStatus;
};

export type ReservationFloor = {
  id: string;
  label: string;
  rooms: ReservationRoom[];
};

export const reservationFloors: ReservationFloor[] = [
  {
    id: "f5",
    label: "F5",
    rooms: [
      { number: "101", status: "available" },
      { number: "102", status: "available" },
      { number: "103", status: "available" },
      { number: "105", status: "available" },
      { number: "108", status: "available" },
      { number: "112", status: "available" },
      { number: "113", status: "available" },
      { number: "114", status: "available" },
      { number: "119", status: "available" },
      { number: "130", status: "available" },
    ],
  },
  {
    id: "f1",
    label: "F1",
    rooms: [
      { number: "104", status: "available" },
      { number: "115", status: "available" },
      { number: "116", status: "available" },
      { number: "117", status: "available" },
      { number: "118", status: "available" },
      { number: "120", status: "available" },
      { number: "121", status: "available" },
      { number: "122", status: "available" },
      { number: "123", status: "available" },
      { number: "124", status: "available" },
      { number: "125", status: "available" },
      { number: "126", status: "available" },
      { number: "127", status: "available" },
      { number: "128", status: "available" },
      { number: "132", status: "available" },
      { number: "133", status: "available" },
    ],
  },
];

export function floorStatusCounts(rooms: ReservationRoom[]) {
  return rooms.reduce(
    (acc, room) => {
      if (room.status === "available") acc.available += 1;
      else if (room.status === "unavailable") acc.unavailable += 1;
      else acc.booked += 1;
      return acc;
    },
    { available: 0, unavailable: 0, booked: 0 },
  );
}
