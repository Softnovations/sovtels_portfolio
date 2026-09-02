import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export function PageHero({
  eyebrow,
  title,
  kicker,
  showCtas = true,
}: {
  eyebrow: string;
  title: string;
  kicker?: string;
  showCtas?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-mesh-hero pt-32 pb-12 md:pt-36 md:pb-14">
      <Container>
        <p className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase">{eyebrow}</p>
        <h1 className="font-display mt-3 max-w-3xl text-[clamp(2.2rem,4.8vw,4rem)] leading-[1.05] text-charcoal">
          {title}
        </h1>
        {kicker && <p className="mt-4 max-w-xl text-[15px] text-muted">{kicker}</p>}
        {showCtas && (
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/demo">Request a Demo</Button>
          </div>
        )}
      </Container>
    </section>
  );
}
