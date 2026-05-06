import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] text-accent",
        "before:inline-block before:h-px before:w-[22px] before:bg-current",
        className
      )}
    >
      {children}
    </span>
  );
}
