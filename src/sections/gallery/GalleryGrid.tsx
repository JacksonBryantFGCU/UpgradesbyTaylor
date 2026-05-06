import type { GalleryItem as GalleryItemType } from "@/data/gallery";
import { GalleryItem } from "@/sections/gallery/GalleryItem";

type Props = {
  items: GalleryItemType[];
  onOpen: (index: number) => void;
};

export function GalleryGrid({ items, onOpen }: Props) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {items.map((item, i) => (
        <GalleryItem key={item.src} item={item} onClick={() => onOpen(i)} />
      ))}
    </div>
  );
}
