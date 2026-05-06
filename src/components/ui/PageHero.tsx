import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { layout, titleScale } from "@/lib/layout";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, sub, children }: PageHeroProps) {
  return (
    <section className={cn("border-b border-line", layout.pageHero)}>
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1
          className={cn(
            "mt-4 font-display tracking-[-0.03em] text-ink leading-[1.05]",
            "[&_em]:font-normal [&_em]:italic [&_em]:text-brand",
            titleScale.page
          )}
        >
          {title}
        </h1>
        {sub && (
          <p className="mt-4 max-w-[620px] text-base leading-[1.6] text-ink-soft md:mt-5 md:text-[18px]">
            {sub}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
