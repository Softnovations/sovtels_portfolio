import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";
import { siteConfig } from "@/lib/seo";
import { Phone } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.09 16.06 2 14.79 2 12.15 2 10 3.66 10 6.7V9.5H7.5v4H10V22h4z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Request a Sovtels demo or contact the team about Hotel & Motel Management for your property.",
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Demo & Contact"
        title="See Sovtels on your kind of property."
        kicker="Reach out to walk through the system with us — or ask about fit, setup, and how it works on the floor."
        showCtas={false}
      />
      <section className="pb-20 md:pb-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="section-kicker">Contact Sovtels</p>
            <div className="mt-5 space-y-4">
              <div className="surface-card">
                <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] text-muted uppercase">
                  <Phone className="h-3.5 w-3.5 text-brand" />
                  Phone
                </p>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="font-mono text-[17px] font-medium text-charcoal hover:text-brand"
                    >
                      {phone.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="surface-card">
                <p className="text-[11px] font-medium tracking-[0.14em] text-muted uppercase">Viber</p>
                <a
                  href={siteConfig.viber.href}
                  className="mt-3 inline-block font-mono text-[17px] font-medium text-charcoal hover:text-brand"
                >
                  {siteConfig.viber.label}
                </a>
              </div>

              <div className="surface-card">
                <p className="text-[11px] font-medium tracking-[0.14em] text-muted uppercase">Facebook</p>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-[16px] font-medium text-charcoal hover:text-brand"
                >
                  <FacebookIcon className="h-5 w-5 text-brand" />
                  facebook.com/sovtels
                </a>
              </div>
            </div>

            <p className="section-kicker mt-10">What a demo covers</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {[
                "Reservation to check-out",
                "Live room status",
                "Housekeeping connection",
                "Charges to the guest bill",
                "Guest Report (GLIS) for government",
                "Online and offline operation",
              ].map((t) => (
                <li key={t} className="border-b border-line pb-3 text-charcoal">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-4 lg:col-span-5">
            <div className="surface-card">
              <p className="section-label">For</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Hotel owners, managers, and operators evaluating a connected property system.
              </p>
            </div>
            <div className="surface-card">
              <p className="section-label">Focus</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
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
