# Layout & Spacing Rules

Single source of truth for vertical rhythm, container widths, and alignment. All sections must use these tokens — do not hand-roll padding.

The runtime constants live in `src/lib/layout.ts`. Import and use them; don't copy class strings.

## 1. Container

All page content goes through `<Container>` (`src/components/ui/Container.tsx`):

- `max-w-screen-xl` (1280px) — every section aligns to the same max width.
- Gutters: `px-5 sm:px-6 lg:px-8` (20 / 24 / 32px).
- One container per `<section>`; never nest containers.

## 2. Vertical rhythm

Two breakpoints only — `base` (mobile) and `md` (≥768px). No `lg` tier on padding; the design's design intent doesn't justify a third step and it tends to cause inconsistency.

| Token | Use | Class |
|---|---|---|
| `layout.section` | Standard full section | `py-16 md:py-24` |
| `layout.sectionAfterHero` | List/grid that follows a PageHero (top is short, bottom is normal) | `pt-6 pb-16 md:pt-8 md:pb-24` |
| `layout.hero` | Home Hero — slight asymmetric start | `pt-12 pb-16 md:pt-16 md:pb-24` |
| `layout.pageHero` | Inner-page hero (smaller, bordered) | `pt-12 pb-8 md:pt-16 md:pb-12` |
| `layout.band` | CtaBand and other full-bleed colored bands | `py-16 md:py-24` |

Numbers: 64 → 96px on a section. Half on a PageHero bottom (32 → 48px) so the next section reads as a continuation.

## 3. Alignment

- Default text alignment is **left**, including headlines.
- Two-column splits collapse to a single column at `< lg`, never at `< md`.
- Two-column gaps: `gap-10 md:gap-12 lg:gap-20` (split layouts).
- Grid item gaps (cards): `gap-6` mobile → `lg:gap-8` for tighter dense grids.
- Action rows (`Button` groups) are always `flex flex-wrap gap-3`. CtaBand-style: left on mobile, `lg:justify-self-end` on desktop.

## 4. Visual hierarchy — type scale

All section headlines use `clamp()` so they fluid-scale. Each role has one canonical clamp:

| Role | Clamp | Where |
|---|---|---|
| Hero H1 | `clamp(36px, 6vw, 84px)` | Home Hero only |
| PageHero H1 | `clamp(36px, 7vw, 96px)` | All `/services`, `/gallery`, `/contact` page heroes |
| Section H2 (preview/teaser) | `clamp(28px, 4vw, 56px)` | ServicesPreview |
| Section H2 (story) | `clamp(32px, 4vw, 48px)` | AboutStory |
| Band H2 | `clamp(28px, 4vw, 52px)` | CtaBand |

Body copy: `text-base md:text-[18px]` for lede paragraphs; `text-[16px]` for body; `text-[14px]` for meta/labels.

Eyebrows are always 12px uppercase tracking-[0.18em] accent — render via `<Eyebrow>`.

## 5. Order of utility classes

When listing classes on an element, follow this order so diffs stay readable:

`layout` → `display` → `position` → `sizing` → `spacing` → `typography` → `color` → `border/shadow` → `state (hover/focus)` → `responsive prefixes`.

## 6. Don'ts

- Don't add `lg:py-32` / `lg:py-[88px]` to a section. Use `py-16 md:py-24`.
- Don't put raw `max-w-*` outside of `Container`.
- Don't set explicit `text-[Npx]` on a headline — use a clamp from §4.
- Don't add `mt-*` between sections to "create space". Sections own their own padding.
