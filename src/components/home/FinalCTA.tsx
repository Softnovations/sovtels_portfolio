import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export function FinalCTA() {
  return (
    <section className="bg-charcoal py-20 text-white md:py-24 pb-28 md:pb-24">
      <Container className="text-center">
        <p className="text-[11px] tracking-[0.22em] text-brand-bright uppercase">
          Sovtels Hotel & Motel Management
        </p>
        <h2 className="font-display mt-5 text-[clamp(2.5rem,10vw,5rem)] leading-[0.95]">
          Your Hotel.
          <br />
          Under Control.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[15px] text-white/70 md:mt-6">
          Reservations, rooms, guests, housekeeping and revenue — connected through one system.
        </p>
        <p className="font-display mt-8 text-[clamp(1.75rem,7vw,2.5rem)] text-brand-bright">
          Run Better,
          <br />
          Spend Less.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/demo" size="lg" className="w-full sm:w-auto">
            Request Demo
          </Button>
          <Button href="/contact" variant="onDark" size="lg" className="w-full sm:w-auto">
            Contact Sovtels
          </Button>
        </div>
      </Container>
    </section>
  );
}
