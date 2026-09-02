"use client";

import { audiences } from "@/data/content";
import { images } from "@/data/images";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

export function WhoFor() {
  return (
    <section id="who" className="bg-white py-14 md:py-20">
      <Container>
        <Reveal>
          <p className="section-kicker">Solutions</p>
          <h2 className="section-title mt-2">Built for hospitality businesses.</h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
            Hotels, motels, guesthouses, resorts and more — the same operational core.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {audiences.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.06}>
              <article className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-line">
                <Image
                  src={images[a.image]}
                  alt={a.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                <p className="absolute bottom-3 left-3 text-sm font-medium text-white">{a.title}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
