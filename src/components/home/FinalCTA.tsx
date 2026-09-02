import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export function FinalCTA() {
  return (
    <section className="bg-charcoal py-20 text-white pb-28 md:py-24 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker-bright">Sovtels Hotel & Motel Management</p>
          <h2 className="font-display mt-5 text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95]">
            Your Hotel.
            <br />
            Under Control.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/70 md:mt-6">
            Reservations, rooms, guests, housekeeping and revenue — connected through one system.
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href="/demo" size="lg" className="w-full sm:w-auto">
              Request Demo
            </Button>
            <Button href="/product" variant="onDark" size="lg" className="w-full sm:w-auto">
              View the System
            </Button>
          </div>
          <p className="font-display mt-10 text-[clamp(1.25rem,3vw,1.6rem)] text-brand-bright/90">
            Run Better, Spend Less.
          </p>
        </div>
      </Container>
    </section>
  );
}
