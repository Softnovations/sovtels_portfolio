import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";
import { LeadForm } from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the Sovtels team about hotel and motel operations software for your property.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Sovtels."
        kicker="Questions about fit, setup, or how the system works on the floor — start here."
        showCtas={false}
      />
      <section className="pb-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <LeadForm intent="contact" />
          </div>
          <aside className="space-y-4 lg:col-span-5">
            <div className="rounded-lg border border-line bg-white p-6">
              <p className="text-[11px] tracking-[0.16em] text-brand uppercase">For</p>
              <p className="mt-2 text-sm text-muted">
                Hotel owners, managers, and operators evaluating a connected property system.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-white p-6">
              <p className="text-[11px] tracking-[0.16em] text-brand uppercase">Focus</p>
              <p className="mt-2 text-sm text-muted">
                Myanmar and similar markets where internet reliability and practical daily operations
                matter.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
