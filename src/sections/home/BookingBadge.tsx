export function BookingBadge({ label = "Summer 2026" }: { label?: string }) {
  return (
    <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-[10px] bg-paper px-[18px] py-[14px] shadow-md">
      <span
        className="block h-2 w-2 rounded-full bg-[oklch(60%_0.15_145)]"
        style={{ boxShadow: "0 0 0 4px color-mix(in oklch, oklch(60% 0.15 145) 25%, transparent)" }}
        aria-hidden
      />
      <div className="leading-tight">
        <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
          Now booking
        </div>
        <div className="mt-0.5 text-sm font-medium text-ink">{label}</div>
      </div>
    </div>
  );
}
