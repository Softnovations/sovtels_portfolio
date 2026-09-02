import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WhyDifference } from "@/components/home/WhyDifference";
import { FeatureOverview } from "@/components/home/FeatureOverview";
import { FeatureModules } from "@/components/home/FeatureModules";
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
        title="Built for how hotels actually run."
        kicker="Not generic business software adapted for hotels. An operational platform for rooms, guests, staff, and revenue."
      />
      <WhyDifference />
      <FeatureOverview />
      <FeatureModules />
      <Offline />
      <FinalCTA />
    </>
  );
}
