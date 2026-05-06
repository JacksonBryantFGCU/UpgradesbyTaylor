import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AboutValues } from "@/sections/about/AboutValues";
import { layout, titleScale } from "@/lib/layout";
import { cn } from "@/lib/cn";

export function AboutStory() {
  return (
    <section className={layout.section}>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div>
            <Eyebrow>The story</Eyebrow>
            <h2
              className={cn(
                "mt-3.5 mb-6 font-display tracking-[-0.02em] text-ink leading-[1.1]",
                titleScale.story
              )}
            >
              An owner-operated remodeler in Venice, FL.
            </h2>

            <div className="space-y-4 text-[16px] leading-[1.7] text-ink-soft">
              <p>
                I've been working in homes for years for 35+ years. First as part of larger crews, then on
                my own. What I learned is simple: most clients don't need a slick sales process
                or a dozen subcontractors juggling schedules. They need one person who shows up,
                communicates clearly, and does the work the way they'd do it in their own home.
              </p>
              <p>
                That's what Upgrades by Taylor is. I'm on every job, every day. I plan the
                scope with you, source the materials, do the work, and walk you through the
                result. The buck stops with me — which is exactly the way I like it.
              </p>
              <p>
                I focus on the kind of work that makes a real difference in how a house feels:
                kitchens, baths, custom built-ins, paint and trim, flooring, tile. Smaller
                upgrades too — if it lives in your home and needs fixing or finishing, ask.
              </p>
            </div>

            <div className="mt-8 font-display text-[28px] italic text-brand">— Taylor</div>
          </div>
        </div>

        <AboutValues />
      </Container>
    </section>
  );
}
