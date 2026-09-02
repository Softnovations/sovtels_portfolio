import type { Metadata } from "next";
import { audiences } from "@/data/content";
import { WhoFor } from "@/components/home/WhoFor";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Sovtels is built for hotels, motels, boutique hotels, guesthouses, resorts, and serviced apartments.",
};

const extra: Record<string, string> = {
  hotel: "Daily operations across reception, rooms, and services in one place.",
  motel: "Simple operations without unnecessary complexity.",
  boutique: "Reservations, guests, rooms, housekeeping, and services.",
  guesthouse: "Clear rooms and stays without extra software overhead.",
  resort: "Coordinate accommodation and guest services.",
  serviced: "Manage longer stays, rooms, guests, and payments.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Built for hospitality businesses of different sizes."
        kicker="The same operational core — scaled to how your property actually works."
      />
      <WhoFor />
      <section className="border-t border-line bg-paper-2 py-14 md:py-20">
        <Container>
          <p className="section-kicker">Property types</p>
          <h2 className="section-title mt-2">How Sovtels fits each property.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {audiences.map((a) => (
              <article key={a.id} className="surface-card">
                <h3 className="text-lg font-medium text-charcoal">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{extra[a.id]}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
