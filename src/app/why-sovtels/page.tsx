import type { Metadata } from "next";
import { whyPoints } from "@/data/content";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";
import { Offline } from "@/components/home/Offline";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Eye, Layers, Sparkles, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Sovtels",
  description:
    "Sovtels is built for daily hotel operations — simpler workflows, better visibility, and less manual work.",
};

const icons = [Workflow, Sparkles, Eye, Layers];

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Sovtels"
        title="Run Better, Spend Less."
        kicker="Not generic business software adapted for hotels. An operational platform for rooms, guests, staff, and revenue."
      />
      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {whyPoints.map((p, i) => {
              const Icon = icons[i] ?? Workflow;
              return (
                <article key={p.title} className="surface-card">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <h2 className="text-lg font-semibold text-charcoal">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      <Offline />
      <FinalCTA />
    </>
  );
}
