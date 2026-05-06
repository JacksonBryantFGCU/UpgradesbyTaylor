export type Service = {
  num: string;
  title: string;
  short: string;
  detail: string;
  bullets: string[];
  icon: "kitchen" | "bath" | "cabinet" | "brush" | "floor" | "tile" | "wrench";
};

export const services: Service[] = [
  {
    num: "01",
    title: "Kitchen Remodels",
    short: "Open layouts, cabinetry, counters, and lighting that change how you live.",
    detail:
      "From cosmetic refreshes to full gut renovations — cabinet replacements, countertop installs, backsplashes, lighting, and the trim work that ties it all together.",
    bullets: [
      "Custom cabinetry",
      "Quartz & stone counters",
      "Tile backsplashes",
      "Under-cabinet lighting",
    ],
    icon: "kitchen",
  },
  {
    num: "02",
    title: "Bathroom Remodels",
    short:
      "Walk-in showers, vanities, and finish work that lasts in a humid Florida climate.",
    detail:
      "Tile showers, vanity replacements, fixture upgrades, lighting, and the waterproofing details most contractors skip.",
    bullets: [
      "Walk-in tile showers",
      "Vanity & fixtures",
      "Waterproofing",
      "Heated floors (optional)",
    ],
    icon: "bath",
  },
  {
    num: "03",
    title: "Custom Cabinetry & Built-ins",
    short: "Storage that fits the room, not the other way around.",
    detail:
      "Closets, mudrooms, entertainment centers, office built-ins. Designed and built for your space, finished on-site.",
    bullets: [
      "Walk-in closets",
      "Built-in shelving",
      "Mudroom benches",
      "Custom millwork",
    ],
    icon: "cabinet",
  },
  {
    num: "04",
    title: "Interior Painting & Trim",
    short:
      "Walls, ceilings, doors, and the moldings that make a room feel finished.",
    detail:
      "Full-room repaints, accent walls, trim and base, crown molding, doors. Clean lines, no overspray, careful prep.",
    bullets: [
      "Walls & ceilings",
      "Crown & base molding",
      "Door & trim painting",
      "Accent walls",
    ],
    icon: "brush",
  },
  {
    num: "05",
    title: "Flooring",
    short: "Hardwood, LVP, and tile installed level and lasting.",
    detail:
      "Hardwood, engineered, luxury vinyl plank, and tile. Subfloor prep, transitions, and trim included — not an afterthought.",
    bullets: [
      "Hardwood & engineered",
      "Luxury vinyl plank",
      "Porcelain & ceramic tile",
      "Underlayment & prep",
    ],
    icon: "floor",
  },
  {
    num: "06",
    title: "Tile Work",
    short:
      "Showers, backsplashes, floors, and accents — set straight, grouted clean.",
    detail:
      "Specialty showers, kitchen backsplashes, mudroom floors, fireplace surrounds. Includes layout planning and waterproofing.",
    bullets: [
      "Shower walls & pans",
      "Kitchen backsplashes",
      "Floor tile",
      "Mosaic & accent work",
    ],
    icon: "tile",
  },
  {
    num: "07",
    title: "Handyman & Smaller Upgrades",
    short:
      "The list of things you've been meaning to get to. Done in a day.",
    detail:
      "Door installs, fixture swaps, drywall patches, ceiling fans, shelving, fence repairs. Small jobs welcome.",
    bullets: [
      "Drywall repair",
      "Fixture replacement",
      "Door & hardware",
      "Punch-list items",
    ],
    icon: "wrench",
  },
];
