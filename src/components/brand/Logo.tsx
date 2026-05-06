import { cn } from "@/lib/cn";
import logoMark from "@/assets/logo-mark.svg";
import logoMarkMono from "@/assets/logo-mark-mono.svg";

type LogoProps = {
  mono?: boolean;
  showWordmark?: boolean;
  className?: string;
};

export function Logo({ mono = false, showWordmark = true, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 sm:gap-3", className)}>
      <img
        src={mono ? logoMarkMono : logoMark}
        alt="Upgrades by Taylor"
        className="h-7 w-auto shrink-0 sm:h-8 lg:h-9"
        width={64}
        height={56}
      />
      {showWordmark && (
        <span
          className={cn(
            "inline-flex items-baseline gap-1.5 font-display text-base font-semibold leading-none sm:text-lg",
            mono ? "text-brand-ink" : "text-ink"
          )}
          aria-hidden
        >
          <span>Upgrades</span>
          <em
            className={cn(
              "font-normal italic",
              mono ? "text-accent-soft" : "text-accent"
            )}
          >
            by Taylor
          </em>
        </span>
      )}
    </span>
  );
}
