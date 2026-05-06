// Layout class tokens — see LAYOUT.md for usage rules.
// All sections must use these instead of inline padding strings.

export const layout = {
  section: "py-16 md:py-24",
  sectionAfterHero: "pt-6 pb-16 md:pt-8 md:pb-24",
  hero: "pt-12 pb-16 md:pt-16 md:pb-24",
  pageHero: "pt-12 pb-8 md:pt-16 md:pb-12",
  band: "py-16 md:py-24",
} as const;

// Two-column split gap (full-bleed → grid stack)
export const splitGap = "gap-10 md:gap-12 lg:gap-20";

// Card grid gap
export const cardGap = "gap-6 lg:gap-8";

// Headline clamps — use as `[font-size:var(--clamp)]` via the helper class strings
export const titleScale = {
  hero: "[font-size:clamp(36px,6vw,84px)]",
  page: "[font-size:clamp(36px,7vw,96px)]",
  section: "[font-size:clamp(28px,4vw,56px)]",
  story: "[font-size:clamp(32px,4vw,48px)]",
  band: "[font-size:clamp(28px,4vw,52px)]",
} as const;
