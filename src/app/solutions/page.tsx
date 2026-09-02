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
      <section className="pb-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {audiences.map((a) => (
              <article key={a.id} className="rounded-lg border border-line bg-white p-6">
                <h2 className="text-xl font-medium text-charcoal">{a.title}</h2>
                <p className="mt-2 text-sm text-muted">{extra[a.id]}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
