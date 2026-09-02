import { featureGroups } from "@/data/features";
import { Container } from "@/components/ui/Section";

export function FeatureModules() {
  return (
    <section className="border-t border-line bg-paper-2 py-14 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="section-kicker">Inside the system</p>
          <h2 className="section-title mt-2">What each module actually does.</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Sixteen connected pieces — from the front desk to finance — so a booking, a room, and a
            payment stay on the same guest stay.
          </p>
        </div>

        <div className="mt-8 card-grid grid-cols-1 sm:grid-cols-2">
          {featureGroups.map((g) => (
            <article key={g.id} className="surface-card flex h-full flex-col">
              <p className="section-label">{g.title}</p>
              <ul className="mt-3 flex-1 space-y-3">
                {g.items.map((item) => (
                  <li key={item.id} className="border-t border-line pt-3">
                    <p className="font-medium text-charcoal">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted">{item.benefit}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
