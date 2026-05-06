export function AboutPortrait() {
  return (
    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-paper-3">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--color-paper-3) 0, var(--color-paper-3) 12px, var(--color-paper-soft) 12px, var(--color-paper-soft) 24px)",
        }}
      />
      <span className="relative z-10 rounded-[4px] bg-paper px-2.5 py-1.5 font-mono text-[12px] tracking-[0.1em] text-ink-soft/70">
        PORTRAIT_OF_TAYLOR.JPG
      </span>
    </div>
  );
}
