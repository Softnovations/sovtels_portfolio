import type { Metadata } from "next";
import { featureGroups } from "@/data/features";
import type { ProductScreenshotKey } from "@/data/product-screenshots";
import { ProductScreenImage } from "@/components/product/DashboardImage";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";
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

          <div className="mt-16 card-grid grid-cols-1 sm:grid-cols-2">
            {featureGroups.map((g) => (
              <div key={g.id} className="surface-card flex h-full flex-col">
                <p className="section-label">{g.title}</p>
                <ul className="mt-3 flex-1 space-y-3">
                  {g.items.map((item) => (
                    <li key={item.id} className="border-t border-line pt-3">
                      <p className="font-medium text-charcoal">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
