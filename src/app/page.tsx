import { Hero } from "@/components/home/Hero";
import { FeatureOverview } from "@/components/home/FeatureOverview";
import { BookingStory } from "@/components/home/BookingStory";
import { HotelOverview } from "@/components/home/HotelOverview";
import { HousekeepingFlow } from "@/components/home/HousekeepingFlow";
import { FinanceSnapshot } from "@/components/home/FinanceSnapshot";
import { Offline } from "@/components/home/Offline";
import { Why } from "@/components/home/Why";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureOverview />
      <BookingStory />
      <HotelOverview />
      <HousekeepingFlow />
      <FinanceSnapshot />
      <Offline />
      <Why />
      <FinalCTA />
    </>
  );
}
