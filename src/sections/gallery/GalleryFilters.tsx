import { cn } from "@/lib/cn";

type GalleryFiltersProps = {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
};

export function GalleryFilters({ categories, active, onChange }: GalleryFiltersProps) {
  return (
    <div className="mt-8 mb-10 flex flex-wrap gap-2">
      {categories.map((c) => {
        const isActive = c === active;
        return (
          <button
            key={c}
            type="button"
            onClick={() => onChange(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-[13px] transition-colors",
              isActive
                ? "border-ink bg-ink text-paper"
                : "border-line bg-transparent text-ink-soft hover:border-ink hover:text-ink"
            )}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}
