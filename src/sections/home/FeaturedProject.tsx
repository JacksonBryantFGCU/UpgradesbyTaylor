import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { featuredProject } from "@/data/featured";
import { layout, titleScale } from "@/lib/layout";
import { cn } from "@/lib/cn";

export function FeaturedProject() {
  const [activeIdx, setActiveIdx] = useState(0);
  const { eyebrow, title, body, images, stats } = featuredProject;
  const active = images[activeIdx];

  return (
    <section id="featured" className={cn("scroll-mt-24 bg-paper", layout.section)}>
      <Container>
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="relative min-h-[380px] overflow-hidden rounded-2xl lg:min-h-[520px]">
            <img
              key={active.src}
              src={active.src}
              alt={active.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute right-[18px] bottom-[18px] left-[18px] flex gap-2.5">
              {images.map((img, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Show ${img.alt}`}
                    aria-pressed={isActive}
                    className={cn(
                      "aspect-square flex-1 overflow-hidden rounded-lg border-2 bg-paper-soft transition-colors",
                      isActive ? "border-paper ring-1 ring-brand" : "border-transparent"
                    )}
                  >
                    <img
                      src={img.src}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2
              className={cn(
                "mt-3.5 mb-4 font-display tracking-[-0.02em] text-ink leading-[1.1]",
                titleScale.story
              )}
            >
              {title}
            </h2>
            <p className="text-[17px] leading-[1.65] text-ink-soft">{body}</p>

            <dl className="my-8 grid grid-cols-2 gap-6 border-y border-line py-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-ink-soft/70">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-display text-[22px] text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>

            <div>
              <Button as="a" href="/gallery" variant="ghost" size="lg">
                View the full gallery <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
