import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>{children}</div>
  );
}

export function Section({
  id,
  children,
  className,
  eyebrow,
  title,
  kicker,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  kicker?: string;
}) {
  return (
    <section id={id} className={cn("relative py-14 md:py-20", className)}>
      <Container>
        {(eyebrow || title) && (
          <header className="mb-8 max-w-2xl md:mb-10">
            {eyebrow && <p className="section-kicker">{eyebrow}</p>}
            {title && <h2 className="section-title mt-2">{title}</h2>}
            {kicker && <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{kicker}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
