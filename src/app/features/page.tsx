import type { Metadata } from "next";
import { FeatureOverview } from "@/components/home/FeatureOverview";
import { FeatureModules } from "@/components/home/FeatureModules";
import { WhyDifference } from "@/components/home/WhyDifference";
import { Offline } from "@/components/home/Offline";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollToHash } from "@/components/ui/ScrollToHash";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Sovtels modules — reservations, rooms, housekeeping, finance, restaurant, staff, and reports — plus why hotels run the whole operation in one system.",
};

export default function FeaturesPage() {
  return (
    <>
      <ScrollToHash />
      <PageHero
        eyebrow="Features"
        title="Everything your hotel needs — in one system."
        kicker="Sixteen modules across the front desk, operations, money, and management. Built so staff stop chasing status and owners see the hotel as it actually is."
      />
      <FeatureOverview hideHeader />
      <FeatureModules />
      <WhyDifference />
      <Offline />
      <FinalCTA />
    </>
  );
}
