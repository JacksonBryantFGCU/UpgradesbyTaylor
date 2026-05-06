import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { gallery } from "@/data/gallery";
import { GalleryFilters } from "@/sections/gallery/GalleryFilters";
import { GalleryGrid } from "@/sections/gallery/GalleryGrid";
import { Lightbox } from "@/sections/gallery/Lightbox";
import { layout } from "@/lib/layout";

export function GalleryPage() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<number | null>(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(gallery.map((g) => g.cat)))],
    []
  );

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.cat === filter)),
    [filter]
  );

  const close = () => setActive(null);
  const prev = () =>
    setActive((a) => (a === null ? a : (a - 1 + items.length) % items.length));
  const next = () =>
    setActive((a) => (a === null ? a : (a + 1) % items.length));

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            The <em>finished</em> work.
          </>
        }
        sub="A collection of recent projects — ceilings, accent walls, trimwork, entertainment centers, pantries, offices, and other finished details. Click any image to see it full-size."
      >
        <GalleryFilters categories={categories} active={filter} onChange={setFilter} />
      </PageHero>

      <section className={layout.sectionAfterHero}>
        <Container>
          <GalleryGrid items={items} onOpen={setActive} />
        </Container>
      </section>

      {active !== null && (
        <Lightbox
          items={items}
          index={active}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
