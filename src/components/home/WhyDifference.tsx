import { Container } from "@/components/ui/Section";
import { WhyPointsGrid } from "@/components/home/Why";
import { cn } from "@/lib/utils";

const contrasts = [
  {
    label: "Without Sovtels",
    items: ["Paper and spreadsheets", "Status checks by phone", "Reports rebuilt by hand"],
    withSovtels: false,
  },
  {
    label: "With Sovtels",
    items: ["One connected system", "Live room and guest status", "Reports from real activity"],
    withSovtels: true,
  },
];

export function WhyDifference() {
  return (
    <section id="why" className="scroll-mt-24 border-t border-line bg-mesh-light py-14 md:py-20">
      <Container>
        <div className="mb-8 max-w-2xl md:mb-10">
          <p className="section-kicker">The difference</p>
          <h2 className="section-title mt-2">Less chasing. More control.</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Owners and staff see the same hotel in real time — rooms, guests, and revenue in one place.
          </p>
        </div>

        <div className="mb-10 card-grid grid-cols-1 sm:grid-cols-2">
          {contrasts.map((col) => (
            <div
              key={col.label}
              className={cn(
                "surface-card relative flex h-full flex-col overflow-hidden",
                col.withSovtels
                  ? "!border-brand/35 !bg-white shadow-[0_12px_36px_rgba(22,142,0,0.08)]"
                  : "bg-paper",
              )}
            >
              {col.withSovtels && (
                <div className="absolute inset-y-0 left-0 w-1 bg-brand" aria-hidden />
              )}
              <p
                className={cn(
                  "section-label",
                  col.withSovtels ? "!text-brand" : "!text-muted-2",
                )}
              >
                {col.label}
              </p>
              <ul className="mt-4 flex-1 space-y-3">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      "flex items-start gap-2.5 text-[15px]",
                      col.withSovtels ? "font-medium text-charcoal" : "text-muted",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                        col.withSovtels ? "bg-brand" : "bg-muted-2",
                      )}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <WhyPointsGrid />
      </Container>
    </section>
  );
}
