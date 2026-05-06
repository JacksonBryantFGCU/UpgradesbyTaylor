import { useEffect } from "react";
import type { MouseEvent, ReactNode } from "react";
import type { GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/cn";

type LightboxProps = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ items, index, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  const current = items[index];

  const stop =
    (handler: () => void) => (e: MouseEvent<HTMLButtonElement | HTMLImageElement>) => {
      e.stopPropagation();
      handler();
    };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      style={{ background: "oklch(15% 0.01 240 / 0.94)" }}
    >
      <img
        src={current.src}
        alt={`${current.cat} — ${current.label}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[80vh] max-w-[95vw] rounded-md object-contain sm:max-h-[90vh]"
      />

      <LightboxButton
        ariaLabel="Close"
        onClick={stop(onClose)}
        className="top-3 right-3 sm:top-6 sm:right-6"
      >
        ✕
      </LightboxButton>

      <LightboxButton
        ariaLabel="Previous image"
        onClick={stop(onPrev)}
        className="bottom-20 left-3 sm:top-1/2 sm:left-6 sm:bottom-auto sm:-translate-y-1/2"
      >
        ‹
      </LightboxButton>

      <LightboxButton
        ariaLabel="Next image"
        onClick={stop(onNext)}
        className="bottom-20 right-3 sm:top-1/2 sm:right-6 sm:bottom-auto sm:-translate-y-1/2"
      >
        ›
      </LightboxButton>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 text-center text-[11px] uppercase tracking-[0.08em] text-white/85 sm:bottom-6 sm:text-[13px]">
        {current.cat} · {current.label} — {index + 1} / {items.length}
      </div>
    </div>
  );
}

type LightboxButtonProps = {
  ariaLabel: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: ReactNode;
};

function LightboxButton({ ariaLabel, onClick, className, children }: LightboxButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={cn(
        "absolute flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-white transition-colors hover:bg-white/20",
        "sm:h-12 sm:w-12 sm:text-xl",
        className
      )}
    >
      {children}
    </button>
  );
}
