"use client";

import { audiences } from "@/data/content";
import { images } from "@/data/images";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

export function WhoFor() {
  return (
    <section id="who" className="bg-white py-16 md:py-24">
      <Container>
        <Reveal>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] text-charcoal">
            Built for hospitality businesses.
          </h2>
          <p className="mt-2 text-[15px] text-muted">
            Hotels, motels, guesthouses, resorts and more — the same operational core.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {audiences.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.06}>
              <article className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <Image
                  src={images[a.image]}
                  alt={a.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent transition-opacity group-hover:from-charcoal/95" />
                <p className="absolute bottom-3 left-3 text-sm font-medium text-white">{a.title}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
