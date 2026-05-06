/* global */
// ============================================================
// CONTENT — easy to edit text. Real Taylor data + reasonable
// placeholders for case-study details.
// ============================================================

const SERVICES = [
  {
    num: "01",
    title: "Kitchen Remodels",
    short: "Open layouts, cabinetry, counters, and lighting that change how you live.",
    detail: "From cosmetic refreshes to full gut renovations — cabinet replacements, countertop installs, backsplashes, lighting, and the trim work that ties it all together.",
    bullets: ["Custom cabinetry", "Quartz & stone counters", "Tile backsplashes", "Under-cabinet lighting"],
    icon: "kitchen",
  },
  {
    num: "02",
    title: "Bathroom Remodels",
    short: "Walk-in showers, vanities, and finish work that lasts in a humid Florida climate.",
    detail: "Tile showers, vanity replacements, fixture upgrades, lighting, and the waterproofing details most contractors skip.",
    bullets: ["Walk-in tile showers", "Vanity & fixtures", "Waterproofing", "Heated floors (optional)"],
    icon: "bath",
  },
  {
    num: "03",
    title: "Custom Cabinetry & Built-ins",
    short: "Storage that fits the room, not the other way around.",
    detail: "Closets, mudrooms, entertainment centers, office built-ins. Designed and built for your space, finished on-site.",
    bullets: ["Walk-in closets", "Built-in shelving", "Mudroom benches", "Custom millwork"],
    icon: "cabinet",
  },
  {
    num: "04",
    title: "Interior Painting & Trim",
    short: "Walls, ceilings, doors, and the moldings that make a room feel finished.",
    detail: "Full-room repaints, accent walls, trim and base, crown molding, doors. Clean lines, no overspray, careful prep.",
    bullets: ["Walls & ceilings", "Crown & base molding", "Door & trim painting", "Accent walls"],
    icon: "brush",
  },
  {
    num: "05",
    title: "Flooring",
    short: "Hardwood, LVP, and tile installed level and lasting.",
    detail: "Hardwood, engineered, luxury vinyl plank, and tile. Subfloor prep, transitions, and trim included — not an afterthought.",
    bullets: ["Hardwood & engineered", "Luxury vinyl plank", "Porcelain & ceramic tile", "Underlayment & prep"],
    icon: "floor",
  },
  {
    num: "06",
    title: "Tile Work",
    short: "Showers, backsplashes, floors, and accents — set straight, grouted clean.",
    detail: "Specialty showers, kitchen backsplashes, mudroom floors, fireplace surrounds. Includes layout planning and waterproofing.",
    bullets: ["Shower walls & pans", "Kitchen backsplashes", "Floor tile", "Mosaic & accent work"],
    icon: "tile",
  },
  {
    num: "07",
    title: "Handyman & Smaller Upgrades",
    short: "The list of things you've been meaning to get to. Done in a day.",
    detail: "Door installs, fixture swaps, drywall patches, ceiling fans, shelving, fence repairs. Small jobs welcome.",
    bullets: ["Drywall repair", "Fixture replacement", "Door & hardware", "Punch-list items"],
    icon: "wrench",
  },
];

const GALLERY = [
  { src: "assets/images/great-room.jpg",       cat: "Living",   label: "Great Room", size: "wide" },
  { src: "assets/images/kitchen-1.jpg",        cat: "Kitchen",  label: "Custom Kitchen", size: "tall" },
  { src: "assets/images/entry-hallway.jpg",    cat: "Living",   label: "Entry Hall" },
  { src: "assets/images/bath-1.jpg",           cat: "Bath",     label: "Primary Bath" },
  { src: "assets/images/closet.jpg",           cat: "Built-in", label: "Walk-in Closet" },
  { src: "assets/images/exterior-front.jpg",   cat: "Exterior", label: "Exterior" },
  { src: "assets/images/kitchen-2.jpg",        cat: "Kitchen",  label: "Kitchen Detail" },
  { src: "assets/images/bath-3.jpg",           cat: "Bath",     label: "Vanity", size: "tall" },
  { src: "assets/images/dining.jpg",           cat: "Living",   label: "Dining" },
  { src: "assets/images/living-2.jpg",         cat: "Living",   label: "Family Room", size: "wide" },
  { src: "assets/images/bedroom-1.jpg",        cat: "Bedroom",  label: "Primary Suite" },
  { src: "assets/images/foyer.jpg",            cat: "Living",   label: "Foyer" },
  { src: "assets/images/bath-4.jpg",           cat: "Bath",     label: "Guest Bath" },
  { src: "assets/images/kitchen-3.jpg",        cat: "Kitchen",  label: "Island Detail" },
  { src: "assets/images/outdoor-1.jpg",        cat: "Exterior", label: "Outdoor Living" },
  { src: "assets/images/bedroom-2.jpg",        cat: "Bedroom",  label: "Guest Room", size: "tall" },
  { src: "assets/images/bath-5.jpg",           cat: "Bath",     label: "Shower Tile" },
  { src: "assets/images/living-3.jpg",         cat: "Living",   label: "Sitting Area" },
  { src: "assets/images/kitchen-4.jpg",        cat: "Kitchen",  label: "Pantry View", size: "wide" },
  { src: "assets/images/exterior-aerial.jpg",  cat: "Exterior", label: "Aerial View" },
  { src: "assets/images/laundry.jpg",          cat: "Built-in", label: "Laundry" },
  { src: "assets/images/pantry.jpg",           cat: "Built-in", label: "Pantry" },
  { src: "assets/images/outdoor-2.jpg",        cat: "Exterior", label: "Patio" },
  { src: "assets/images/bath-2.jpg",           cat: "Bath",     label: "Soaking Tub" },
];

const PROCESS = [
  { num: "01", title: "Walkthrough", body: "We meet at your home, talk through what you want changed, and I take notes and measurements. No pressure, no upsell." },
  { num: "02", title: "Detailed quote", body: "A line-itemed estimate with materials, labor, and a real timeline. You see exactly what you're paying for." },
  { num: "03", title: "Build", body: "Daily updates, clean job site, and I show up when I say I will. Questions get answered the same day." },
  { num: "04", title: "Final walk", body: "We walk through the finished work together. Anything you flag gets fixed before final invoice." },
];

Object.assign(window, { SERVICES, GALLERY, PROCESS });
