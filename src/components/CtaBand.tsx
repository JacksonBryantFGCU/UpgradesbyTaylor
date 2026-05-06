import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { layout, splitGap, titleScale } from "@/lib/layout";
import { cn } from "@/lib/cn";

type CtaBandProps = {
  title: ReactNode;
  body?: ReactNode;
  primary?: { label: ReactNode; href: string };
  secondary?: { label: ReactNode; href: string };
};

export function CtaBand({ title, body, primary, secondary }: CtaBandProps) {
  return (
    <section className={cn("relative overflow-hidden bg-brand text-brand-ink", layout.band)}>
      <Container>
        <div className={cn("grid items-start md:items-center", splitGap, "lg:grid-cols-[1.2fr_1fr]")}>
          <div>
            <h2
              className={cn(
                "font-display text-brand-ink leading-[1.1]",
                "[&_em]:font-normal [&_em]:italic [&_em]:text-accent",
                titleScale.band
              )}
            >
              {title}
            </h2>
            {body && (
              <p className="mt-4 max-w-[520px] text-base text-brand-ink/80 md:text-[17px]">
                {body}
              </p>
            )}
          </div>
          {(primary || secondary) && (
            <div className="flex flex-wrap gap-3 lg:justify-self-end">
              {primary && (
                <Button as="a" href={primary.href} variant="accent" size="lg">
                  {primary.label} <span aria-hidden>→</span>
                </Button>
              )}
              {secondary && (
                <Button as="a" href={secondary.href} variant="ghost-on-dark" size="lg">
                  {secondary.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
