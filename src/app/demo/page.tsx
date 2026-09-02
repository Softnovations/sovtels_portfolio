import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";
import { LeadForm } from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Request a Sovtels demo and see how Hotel & Motel Management can work for your property.",
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Demo"
        title="See Sovtels on your kind of property."
        kicker="Tell us about your rooms and departments. We'll walk through the system with you."
        showCtas={false}
      />
      <section className="pb-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <LeadForm intent="demo" />
          </div>
          <aside className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.18em] text-brand uppercase">What a demo covers</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {[
                "Reservation to check-out",
                "Live room status",
                "Housekeeping connection",
                "Charges to the guest bill",
                "Online and offline operation",
              ].map((t) => (
                <li key={t} className="border-b border-line pb-3 text-charcoal">
                  {t}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>
    </>
  );
}
