import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sovtels Co., Ltd. collects, uses, and protects information within the Sovtels Hotel & Motel Management system.",
};

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line pt-8 sm:pt-10">
      <h2 className="font-display text-[clamp(1.35rem,4.5vw,1.75rem)] leading-snug text-charcoal">
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-[15px] leading-[1.75] text-muted">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 marker:text-brand">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const dataTypes = [
  {
    title: "1. Guest Information",
    items: [
      "Name",
      "Contact details (phone, email if provided)",
      "Identification details (if required by law)",
      "Stay details (check-in/check-out dates, room assignment)",
    ],
  },
  {
    title: "2. Staff and User Data",
    items: ["Name", "Login credentials (stored securely)", "Roles and permissions within the system"],
  },
  {
    title: "3. Operational Data",
    items: [
      "Booking records",
      "Room management data",
      "Internal notes related to guest stays or operations",
    ],
  },
  {
    title: "4. Technical Data",
    items: [
      "Basic system-related information required to ensure functionality (e.g., device type, system access environment)",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        kicker="How Sovtels Co., Ltd. collects, uses, and protects information within the Hotel & Motel Management system."
        showCtas={false}
      />

      <section className="bg-paper pb-16 pt-4 md:pb-24 md:pt-6">
        <Container>
          <article className="mx-auto max-w-[40rem]">
            <div className="space-y-4 text-[15px] leading-[1.75] text-muted">
              <p>
                Sovtels Co., Ltd. developed Sovtels as a Motel and Hotel Management System. This Service
                is intended for use exclusively by authorized hotel owners and staff for internal business
                operations.
              </p>
              <p>This Privacy Policy explains how we collect, use, and protect information within the system.</p>
              <p>By using Sovtels, you agree to this Privacy Policy.</p>
            </div>

            <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
              <LegalSection title="Scope of Use">
                <p>Sovtels is a restricted internal system. Access is limited to:</p>
                <BulletList items={["Hotel owners", "Authorized staff", "System administrators"]} />
                <p>The system is not intended for public use.</p>
              </LegalSection>

              <LegalSection title="Information Collection and Use">
                <p>
                  Sovtels collects only the information necessary to manage hotel operations, including
                  reservations and guest records.
                </p>
              </LegalSection>

              <LegalSection title="Types of Data Collected">
                <div className="space-y-6">
                  {dataTypes.map((group) => (
                    <div key={group.title}>
                      <h3 className="text-[13px] font-medium tracking-[0.04em] text-charcoal">{group.title}</h3>
                      <div className="mt-2">
                        <BulletList items={group.items} />
                      </div>
                    </div>
                  ))}
                </div>
                <p>All collected data is used strictly for operational purposes.</p>
              </LegalSection>

              <LegalSection title="Purpose of Data Collection">
                <p>Data is collected and used to:</p>
                <BulletList
                  items={[
                    "Manage hotel reservations and room assignments",
                    "Maintain accurate guest records",
                    "Support daily hotel operations",
                    "Control user access and permissions",
                    "Ensure system functionality and security",
                    "Comply with applicable legal requirements",
                  ]}
                />
              </LegalSection>

              <LegalSection title="Third-Party Services">
                <p>Sovtels does not use or integrate with any third-party services, including:</p>
                <BulletList
                  items={["Payment gateways", "Notification systems", "External analytics tools"]}
                />
                <p>All data is handled internally within the system.</p>
              </LegalSection>

              <LegalSection title="Data Sharing and Disclosure">
                <p>We do not share, sell, or disclose data to external parties.</p>
                <p>Information may only be disclosed:</p>
                <BulletList
                  items={[
                    "If required by law or legal authority",
                    "To protect the security and integrity of the system",
                  ]}
                />
              </LegalSection>

              <LegalSection title="Authentication and Access Control">
                <p>Access to Sovtels is controlled through secure login credentials.</p>
                <BulletList
                  items={[
                    "Each user is assigned a role with specific permissions",
                    "Access is limited to authorized personnel only",
                    "Users are responsible for safeguarding their login credentials",
                  ]}
                />
              </LegalSection>

              <LegalSection title="Cookies and Tracking">
                <p>
                  Sovtels uses only essential session mechanisms required for system operation. No tracking,
                  advertising, or behavioral analytics are used.
                </p>
              </LegalSection>

              <LegalSection title="Data Security">
                <p>We implement appropriate security measures, including:</p>
                <BulletList
                  items={["Role-based access control", "Secure data storage", "Restricted internal access"]}
                />
                <p>Despite these measures, no system is completely secure.</p>
              </LegalSection>

              <LegalSection title="Data Retention">
                <p>Data is retained:</p>
                <BulletList
                  items={[
                    "As long as necessary for hotel operations",
                    "As required by applicable laws and regulations",
                  ]}
                />
                <p>Data that is no longer required will be securely deleted.</p>
              </LegalSection>

              <LegalSection title="User Responsibilities">
                <p>Users (hotel owners and staff) are responsible for:</p>
                <BulletList
                  items={[
                    "Maintaining confidentiality of login credentials",
                    "Using the system only for authorized business purposes",
                    "Ensuring that guest data is handled responsibly",
                  ]}
                />
              </LegalSection>

              <LegalSection title="Children’s Privacy">
                <p>
                  Sovtels is not intended for use by individuals under 18. The system does not knowingly
                  collect data directly from minors.
                </p>
              </LegalSection>

              <LegalSection title="Changes to This Privacy Policy">
                <p>
                  We may update this Privacy Policy from time to time. Updates will be posted within the
                  system.
                </p>
              </LegalSection>

              <LegalSection title="Contact Us">
                <p>For any questions regarding this Privacy Policy, please contact:</p>
                <address className="not-italic">
                  <p className="font-medium text-charcoal">{siteConfig.name} Co., Ltd.</p>
                  <ul className="mt-3 space-y-2">
                    {siteConfig.phones.map((phone) => (
                      <li key={phone.href}>
                        <span className="text-muted-2">Phone </span>
                        <a href={phone.href} className="font-mono text-charcoal break-all hover:text-brand">
                          {phone.label}
                        </a>
                      </li>
                    ))}
                    <li>
                      <span className="text-muted-2">Viber </span>
                      <a
                        href={siteConfig.viber.href}
                        className="font-mono text-charcoal break-all hover:text-brand"
                      >
                        {siteConfig.viber.label}
                      </a>
                    </li>
                    <li>
                      <span className="text-muted-2">Facebook </span>
                      <a
                        href={siteConfig.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all text-charcoal hover:text-brand"
                      >
                        facebook.com/sovtels
                      </a>
                    </li>
                  </ul>
                </address>
              </LegalSection>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
