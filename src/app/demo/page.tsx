import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";
import { FinalCTA } from "@/components/home/FinalCTA";
import { DemoContact } from "@/components/demo/DemoContact";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Request a Sovtels demo or contact the team about Hotel & Motel Management for your property.",
};

const demoCovers = [
  "Reservation to check-out",
  "Live room status",
  "Charges to the guest bill",
  "Guest Report (GLIS)",
  "Online and offline operation",
];

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Demo & Contact"
        title="See Sovtels on your kind of property."
        kicker="Call, Viber, or message us on Facebook. We’ll walk through the system with you — or answer questions about fit and setup."
        showCtas={false}
      />

      <section className="bg-mesh-light py-14 md:py-20">
        <Container>
          <div className="grid items-stretch gap-8 xl:grid-cols-12 xl:items-start">
            <div className="min-w-0 xl:col-span-7">
              <p className="section-kicker">Contact Sovtels</p>
              <h2 className="section-title mt-2">Talk to the team.</h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                Prefer a quick call or chat? Use any channel below — demo requests and general questions
                go to the same place.
              </p>

              <div className="mt-8">
                <DemoContact />
              </div>
            </div>

            <aside className="min-w-0 xl:col-span-5">
              <div className="surface-card !p-6">
                <p className="section-label">What a demo covers</p>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  A focused walkthrough of the workflows that matter on the floor.
                </p>
                <ul className="mt-5 space-y-3">
                  {demoCovers.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-charcoal">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                        <Check className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 card-grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1">
                <div className="surface-card flex h-full flex-col">
                  <p className="section-label">For</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    Hotel owners, managers, and operators evaluating a connected property system.
                  </p>
                </div>
                <div className="surface-card flex h-full flex-col">
                  <p className="section-label">Focus</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    Markets where internet reliability and practical daily operations matter.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
