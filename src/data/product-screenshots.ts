export const productScreenshots = {
  dashboard: {
    src: "/images/product/dashboard.png",
    alt: "Sovtels dashboard with revenue, bookings and sale report",
    width: 1440,
    height: 900,
  },
  reservation: {
    src: "/images/product/reservation.png",
    alt: "Sovtels reservation management with room availability by floor",
    width: 1440,
    height: 900,
  },
  checkIn: {
    src: "/images/product/check-in.png",
    alt: "Sovtels check-in flow with guest information",
    width: 1440,
    height: 900,
  },
  stay: {
    src: "/images/product/stay.png",
    alt: "Sovtels stay view with occupied room and guest details",
    width: 1440,
    height: 900,
  },
  checkout: {
    src: "/images/product/checkout.png",
    alt: "Sovtels check-out receipt with payment summary",
    width: 1440,
    height: 900,
  },
  financialReport: {
    src: "/images/product/financial-report.png",
    alt: "Sovtels financial report with revenue, costs and profit",
    width: 1440,
    height: 900,
  },
  guestReport: {
    src: "/images/product/guest-report.png",
    alt: "Sovtels Guest Report (GLIS) with guest list for government reporting",
    width: 1440,
    height: 900,
  },
} as const;

export type ProductScreenshotKey = keyof typeof productScreenshots;
