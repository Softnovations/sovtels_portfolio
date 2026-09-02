import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/seo";
import { Container } from "@/components/ui/Section";
import { Logo } from "@/components/ui/Logo";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.09 16.06 2 14.79 2 12.15 2 10 3.66 10 6.7V9.5H7.5v4H10V22h4z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-white pt-14 pb-8">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Reservations, rooms, guests, housekeeping, finance, services, staff and reports — connected.
            </p>
            <p className="font-display mt-5 text-2xl text-brand">Run Better, Spend Less.</p>
            <div className="mt-5 space-y-2 text-sm text-muted">
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {siteConfig.phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className="font-mono hover:text-charcoal">
                    {phone.label}
                  </a>
                ))}
              </div>
              <p>
                Viber{" "}
                <a href={siteConfig.viber.href} className="font-mono hover:text-charcoal">
                  {siteConfig.viber.label}
                </a>
              </p>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-charcoal"
              >
                <FacebookIcon className="h-4 w-4 text-brand" />
                Facebook
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="mb-3 text-[11px] tracking-[0.18em] text-brand uppercase">Product</p>
            <ul className="space-y-2 text-sm text-muted">
              {footerLinks.product.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-charcoal">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="mb-3 text-[11px] tracking-[0.18em] text-brand uppercase">Company</p>
            <ul className="space-y-2 text-sm text-muted">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-charcoal">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-muted-2">
            © {new Date().getFullYear()} Sovtels. Hotel & Motel Management.
          </p>
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-charcoal">
            <Image
              src="/images/mascot.jpg"
              alt="Sovtels mascot"
              fill
              className="scale-110 object-cover"
              sizes="40px"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
