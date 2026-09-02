import type { Metadata } from "next";
import type { ProductScreenshotKey } from "@/data/product-screenshots";
import { ProductScreenImage } from "@/components/product/DashboardImage";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "The Sovtels System",
  description:
    "Sovtels Hotel & Motel Management connects reservations, rooms, housekeeping, finance, staff, and daily operations.",
};

const productGallery: { screen: ProductScreenshotKey; label: string }[] = [
  { screen: "dashboard", label: "Dashboard" },
  { screen: "reservation", label: "Reservation Management" },
  { screen: "checkIn", label: "Check-In" },
  { screen: "stay", label: "Stay" },
  { screen: "checkout", label: "Check-Out" },
  { screen: "guestReport", label: "Guest Report (GLIS)" },
  { screen: "financialReport", label: "Financial Report" },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="One system to manage your entire hotel."
        kicker="Reservations, rooms, guests, housekeeping, finance, services, staff and reports — connected through Sovtels."
      />
      <section className="py-14 md:py-20">
        <Container>
          <div className="card-grid grid-cols-1 md:grid-cols-2">
            {productGallery.map(({ screen, label }) => (
              <div key={screen} className="min-w-0">
                <p className="section-label mb-3">{label}</p>
                <ProductScreenImage screen={screen} priority={screen === "dashboard"} />
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-xl border border-line bg-paper-2 px-5 py-5 sm:flex-row sm:items-center sm:px-6">
            <div className="min-w-0 max-w-xl">
              <p className="font-display text-[clamp(1.25rem,2.5vw,1.6rem)] text-charcoal">
                Want the full module list?
              </p>
              <p className="mt-1 text-[14px] text-muted">
                Front office, operations, finance, and management — with what each piece does for the
                hotel.
              </p>
            </div>
            <Button href="/why-sovtels" variant="secondary" size="lg" className="w-full shrink-0 sm:w-auto">
              Why Sovtels
            </Button>
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
