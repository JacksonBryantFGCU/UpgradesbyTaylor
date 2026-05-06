import type { GalleryItem as GalleryItemType } from "@/data/gallery";

type GalleryItemProps = {
  item: GalleryItemType;
  onClick: () => void;
};

export function GalleryItem({ item, onClick }: GalleryItemProps) {
  const alt = `${item.cat} — ${item.label}`;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={alt}
      className="group relative mb-4 block w-full overflow-hidden rounded-lg bg-paper-soft text-left [break-inside:avoid]"
    >
      <img
        src={item.src}
        alt={alt}
        loading="lazy"
        className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <span className="pointer-events-none absolute bottom-3 left-3.5 translate-y-1 rounded-md bg-paper/90 px-2.5 py-1.5 text-[12px] uppercase tracking-[0.06em] text-ink opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
        {item.label}
      </span>
    </button>
  );
}
