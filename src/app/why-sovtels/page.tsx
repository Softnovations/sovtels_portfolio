import type { Metadata } from "next";
import { whyPoints } from "@/data/content";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";
import { Offline } from "@/components/home/Offline";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Why Sovtels",
  description:
    "Sovtels is built for daily hotel operations — simpler workflows, better visibility, and less manual work.",
};

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Sovtels"
        title="Run Better, Spend Less."
        kicker="Not generic business software adapted for hotels. An operational platform for rooms, guests, staff, and revenue."
      />
      <section className="pb-8">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {whyPoints.map((p) => (
              <article key={p.title} className="border-t border-line pt-5">
                <h2 className="text-xl font-medium text-charcoal">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <Offline />
      <FinalCTA />
    </>
  );
}
