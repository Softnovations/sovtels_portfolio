import type { Metadata } from "next";
import { FeatureOverview } from "@/components/home/FeatureOverview";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Sovtels: reservations, rooms, housekeeping, finance, restaurant, staff, and reports — one hotel management system.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything your hotel needs."
        kicker="Every Sovtels module — connected in one system."
      />
      <FeatureOverview hideHeader />
      <FinalCTA />
    </>
  );
}
