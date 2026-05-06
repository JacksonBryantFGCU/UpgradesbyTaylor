import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { layout, splitGap, titleScale } from "@/lib/layout";
import { cn } from "@/lib/cn";

const TAGS = [
  "Entertainment Centers",
  "Ceilings",
  "Accent Walls",
  "Trimwork",
  "Storage/Closets",
  "Offices",
  "Other",
];

export function ServicesPreview() {
  return (
    <section id="services" className={cn("scroll-mt-24 bg-paper-soft", layout.section)}>
      <Container>
        <div className={cn("grid items-end", splitGap, "lg:grid-cols-[1.5fr_1fr]")}>
          <div>
            <Eyebrow>The kind of work</Eyebrow>
            <h2
              className={cn(
                "mt-3.5 font-display tracking-[-0.02em] text-ink leading-[1.1]",
                "[&_em]:font-normal [&_em]:italic [&_em]:text-brand",
                titleScale.section
              )}
            >
              If it makes your house feel <em>more like home</em>, I probably do it.
            </h2>
          </div>
          <p className="text-[16px] leading-[1.6] text-ink-soft">
            Entertainment centers, ceilings, accent walls, trimwork, storage and closets,
            home offices — the finish-level work that changes how a room feels day to day.
            If it's not on the list, ask anyway.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-transparent px-4 py-2 text-[13px] text-ink"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button as="a" href="/contact" variant="ghost" size="lg">
            Tell me about your project <span aria-hidden>→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
