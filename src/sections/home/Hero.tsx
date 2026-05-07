import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BookingBadge } from "@/sections/home/BookingBadge";
import { layout, splitGap, titleScale } from "@/lib/layout";
import { cn } from "@/lib/cn";

const HERO_BG =
  "linear-gradient(to bottom, var(--color-paper) 0%, var(--color-paper) 70%, " +
  "color-mix(in oklch, var(--color-paper) 50%, var(--color-paper-soft)) 100%)";

export function Hero() {
  return (
    <section
      className={cn("relative overflow-hidden", layout.hero)}
      style={{ background: HERO_BG }}
    >
      <Container>
        <div className={cn("grid items-center", splitGap, "lg:grid-cols-[1.05fr_1fr]")}>
          <div>
            <Eyebrow>Wellen Park · Venice, FL</Eyebrow>

            <h1
              className={cn(
                "mt-4 font-display leading-[1.05] tracking-[-0.025em] text-ink",
                titleScale.hero
              )}
            >
              Honest craftsmanship for the homes you actually live in.
            </h1>

            <p className="mt-6 max-w-[480px] text-base leading-[1.6] text-ink-soft md:mt-7 md:text-[18px]">
              Entertainment Centers, Accent Walls, Beams, and the dozen smaller upgrades that make a house
              feel finished. Built by Taylor — start to finish, no subcontracted shortcuts.
            </p>

            <p className="mt-5 font-display text-sm italic tracking-[0.01em] text-ink-soft/80 md:mt-[22px]">
              Licensed &amp; insured · based in Wellen Park, Venice FL
            </p>

            <div className="mt-6 flex flex-wrap gap-3 md:mt-7 md:gap-3.5">
              <Button as="a" href="/contact" variant="primary" size="lg">
                Get a quote <span aria-hidden>→</span>
              </Button>
              <Button as="a" href="/gallery" variant="ghost" size="lg">
                See the work
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl sm:aspect-[16/10] lg:aspect-[4/5]">
            <img
              src="/images/great-room.jpg"
              alt="Recent project — great room"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <BookingBadge label="Summer 2026" />
          </div>
        </div>
      </Container>
    </section>
  );
}
