import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";

export function MidPageCTA() {
  return (
    <section className="relative overflow-hidden py-14 md:py-16">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#168e00_0%,#0f6a00_50%,#1a1f1c_100%)]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_50%,#2ac10f55,transparent_50%)]" />
      <Container className="relative">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-[11px] tracking-[0.2em] text-white/70 uppercase">See it on your property</p>
              <p className="font-display mt-2 text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-white">
                Ready to see Sovtels in action?
              </p>
              <p className="mt-2 max-w-md text-[15px] text-white/75">
                Walk through reservations, rooms, housekeeping and finance with our team — on your kind of
                hotel.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button href="/demo" size="lg" className="bg-white text-brand hover:bg-white/90">
                Request a Demo
              </Button>
              <Button
                href="/product"
                variant="onDark"
                size="lg"
                className="border-white/40"
              >
                View the System
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
