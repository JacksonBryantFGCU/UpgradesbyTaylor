import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { ServiceRow } from "@/sections/services/ServiceRow";
import { layout } from "@/lib/layout";

export function ServicesList() {
  return (
    <section className={layout.sectionAfterHero}>
      <Container>
        <div className="mt-4 md:mt-8">
          {services.map((s, i) => (
            <ServiceRow
              key={s.num}
              service={s}
              total={services.length}
              isLast={i === services.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
