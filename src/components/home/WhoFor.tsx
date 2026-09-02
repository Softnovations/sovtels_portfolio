"use client";

import { audiences } from "@/data/content";
import { images } from "@/data/images";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

export function WhoFor({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="who" className="bg-white py-14 md:py-20">
      <Container>
        {!hideHeader && (
          <Reveal>
            <p className="section-kicker">Solutions</p>
            <h2 className="section-title mt-2">Built for hospitality businesses.</h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
              Hotels, motels, guesthouses, resorts and more — the same operational core.
            </p>
          </Reveal>
        )}
        <div
          className={
            hideHeader
              ? "card-grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6"
              : "card-grid mt-8 grid-cols-2 md:grid-cols-3 xl:grid-cols-6"
          }
        >
          {audiences.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.06} className="h-full min-h-0">
              <article className="group relative aspect-[4/5] h-full overflow-hidden rounded-xl border border-line sm:aspect-[3/4]">
                <Image
                  src={images[a.image]}
                  alt={a.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 180px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-2.5 text-[12px] font-medium leading-snug text-white sm:p-3 sm:text-[13px] xl:text-sm">
                  {a.title}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
