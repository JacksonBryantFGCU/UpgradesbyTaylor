export type GalleryCategory =
  | "Entertainment Centers"
  | "Ceilings"
  | "Accent Walls"
  | "Trimwork"
  | "Storage/Closets"
  | "Offices"
  | "Other";

export type GalleryItem = {
  src: string;
  cat: GalleryCategory;
  label: string;
  size?: "wide" | "tall";
};

// To add a photo: drop the file in /public/images and add one line to the
// matching category below. Use Other when the photo is a general room shot or
// the main project type is not clear from the image content.
type Entry = Omit<GalleryItem, "cat">;

const groups: Record<GalleryCategory, Entry[]> = {
  "Entertainment Centers": [
    { src: "/images/entertainment-09.jpg", label: "Stone Built-in", size: "wide" },

    { src: "/images/entertainment-12.jpg", label: "Family Room Media", size: "wide" },
    { src: "/images/entertainment-05.jpg", label: "Built-in Fireplace" },
    { src: "/images/entertainment-01.jpg", label: "Stone TV Wall", size: "wide" },
    { src: "/images/entertainment-03.jpg", label: "Slat Wall Media", size: "wide" },
    { src: "/images/entertainment-04.jpg", label: "Built-in Media Niche", size: "wide" },
    { src: "/images/entertainment-06.jpg", label: "Niches & Mantel" },
    { src: "/images/entertainment-07.jpg", label: "Shiplap Media", size: "wide" },
    { src: "/images/entertainment-10.jpg", label: "Floating Mantel", size: "wide" },
    { src: "/images/entertainment-13.jpg", label: "Niche Surround", size: "wide" },
  ],

  Ceilings: [
    { src: "/images/UBT pictures/20250327_164632.jpg", label: "Exterior Block Wall", size: "wide" },
    { src: "/images/ceiling-01.jpg", label: "Kitchen Beam" },
    { src: "/images/ceiling-02.jpg", label: "Dining Beams", size: "wide" },
    { src: "/images/ceiling-03.jpg", label: "Tray with Beams", size: "wide" },
    { src: "/images/ceiling-04.jpg", label: "Black Coffered", size: "wide" },
    { src: "/images/ceiling-05.jpg", label: "Coffered Detail" },
    { src: "/images/ceiling-06.jpg", label: "White Coffered", size: "wide" },
    { src: "/images/ceiling-07.jpg", label: "Stained Beams", size: "wide" },
    { src: "/images/ceiling-09.jpg", label: "Great Room Beam", size: "wide" },
    { src: "/images/ceiling-11.jpg", label: "Outdoor T&G", size: "wide" },
    { src: "/images/ceiling-12.jpg", label: "Lanai Wood", size: "wide" },
    { src: "/images/ceiling-13.jpg", label: "Cathedral Beams", size: "wide" },
  ],

  "Accent Walls": [
    { src: "/images/accent-wall-12.jpg", label: "Arched Wall Panel", size: "wide" },
    { src: "/images/accent-wall-02.jpg", label: "Board & Batten Bath", size: "tall" },
    { src: "/images/accent-wall-03.jpg", label: "Grid Bedroom", size: "wide" },
    { src: "/images/accent-wall-06.jpg", label: "Painted Brick Grid", size: "wide" },
    { src: "/images/accent-wall-07.jpg", label: "Venetian Plaster", size: "wide" },
    { src: "/images/accent-wall-08.jpg", label: "Brick Bedroom", size: "wide" },
    { src: "/images/accent-wall-11.jpg", label: "Slate Grid Bedroom", size: "wide" },
    { src: "/images/accent-wall-09.jpg", label: "Charcoal Grid" },
    { src: "/images/accent-wall-16.jpg", label: "Brick Bedroom", size: "wide" },
    { src: "/images/accent-wall-17.jpg", label: "Diamond Trim", size: "tall" },
    { src: "/images/accent-wall-18.jpg", label: "Stone Feature Wall", size: "wide" },
    { src: "/images/exterior-front.jpg", label: "Brick Bedroom Wall", size: "wide" },
    { src: "/images/ceiling-10.jpg", label: "Hallway Ceiling", size: "wide" },
    { src: "/images/accent-wall-10.jpg", label: "Pink Chevron Nursery", size: "wide" },
  ],

  Trimwork: [
    { src: "/images/accent-wall-01.jpg", label: "Tile & Trim Detail", size: "wide" },
    { src: "/images/detail-3.jpg", label: "Paneled Room Detail", size: "wide" },
    { src: "/images/entry-hallway.jpg", label: "Entry Trim Detail", size: "wide" },
    { src: "/images/hallway-2.jpg", label: "Hallway Trim Detail", size: "wide" },
    { src: "/images/living-1.jpg", label: "Kitchen Hood Trim", size: "wide" },
    { src: "/images/trimwork-01.jpg", label: "Wainscot Room", size: "wide" },
    { src: "/images/trimwork-02.jpg", label: "Dining Wainscot", size: "wide" },
    { src: "/images/trimwork-03.jpg", label: "Paneled Dining" },
    { src: "/images/trimwork-04.jpg", label: "Built-in Bunks", size: "wide" },
    { src: "/images/trimwork-06.jpg", label: "Foyer Shiplap", size: "wide" },
    { src: "/images/trimwork-09.jpg", label: "Bedroom Paneling", size: "wide" },
    { src: "/images/trimwork-10.jpg", label: "Shiplap Island", size: "wide" },
    { src: "/images/trimwork-11.jpg", label: "Entry Shiplap", size: "wide" },
    { src: "/images/trimwork-13.jpg", label: "Loft Bunk Frame", size: "wide" },
    { src: "/images/trimwork-15.jpg", label: "Door Trim Detail", size: "wide" },
    { src: "/images/bath-1.jpg", label: "Bath Trim Detail", size: "wide" },
    { src: "/images/landscape-2.jpg", label: "Vanity Detail", size: "tall" },
  ],
  
  "Storage/Closets": [
    { src: "/images/closet.jpg", label: "Custom Closet Storage", size: "wide" },
    { src: "/images/trimwork-05.jpg", label: "Built-in Headboard", size: "wide" },
    { src: "/images/trimwork-07.jpg", label: "Built-in Cubbies", size: "wide" },
    { src: "/images/trimwork-12.jpg", label: "Cubby Shelf", size: "wide" },
    { src: "/images/foyer.jpg", label: "Walk-in Storage", size: "tall" },
    { src: "/images/landscape-1.jpg", label: "Pantry Entry", size: "tall" },
    { src: "/images/laundry.jpg", label: "Laundry Storage", size: "wide" },
    { src: "/images/pantry-01.jpg", label: "Barn Door Pantry", size: "tall" },
    { src: "/images/pantry-02.jpg", label: "Utility Storage", size: "tall" },
    { src: "/images/trimwork-08.jpg", label: "Mudroom Lockers", size: "wide" },
    { src: "/images/pantry-03.jpg", label: "Floating Shelves", size: "tall" },
    { src: "/images/pantry-04.jpg", label: "Wood Shelving", size: "tall" },
    { src: "/images/pantry-05.jpg", label: "Tile Pantry", size: "tall" },
    { src: "/images/pantry-06.jpg", label: "Glass Door Pantry" },
    { src: "/images/pantry-07.jpg", label: "Laundry Cabinetry", size: "wide" },
    { src: "/images/pantry-08.jpg", label: "Black Glass Door", size: "wide" },
    { src: "/images/pantry-09.jpg", label: "Open Pantry Shelves", size: "wide" },
    { src: "/images/pantry-10.jpg", label: "Built-in Shelving", size: "wide" },
    { src: "/images/pantry.jpg", label: "Kitchen Pantry", size: "wide" },
    { src: "/images/trimwork-14.jpg", label: "Built-in Storage", size: "tall" },
    { src: "/images/office.jpg", label: "Office Cabinetry", size: "wide" },
    { src: "/images/UBT pictures/20240812_100614.jpg", label: "Garage Ceiling Storage", size: "wide" },
  ],

  Offices: [
    { src: "/images/detail-1.jpg", label: "Home Office Built-ins", size: "wide" },
    { src: "/images/detail-2.jpg", label: "Office Wall Detail", size: "wide" },
    { src: "/images/office-02.jpg", label: "Shiplap Studio", size: "wide" },
    { src: "/images/office-03.jpg", label: "Built-in Cabinets", size: "wide" },
    { src: "/images/office-04.jpg", label: "Office Desk Wall", size: "wide" },
    { src: "/images/office-05.jpg", label: "Vanity Office", size: "wide" },
    { src: "/images/office-06.jpg", label: "Arched Office Nook", size: "wide" },
  ],

  Other: [
    { src: "/images/UBT pictures/20260216_115739.jpg", label: "Outdoor Utility Area", size: "wide" },
    { src: "/images/bath-2.jpg", label: "Great Room Beams", size: "wide" },
    { src: "/images/bedroom-1.jpg", label: "Kitchen Beam Detail", size: "wide" },
    { src: "/images/bedroom-2.jpg", label: "Dining Beam Detail", size: "wide" },
    { src: "/images/dining.jpg", label: "Kitchen Beam View", size: "wide" },
    { src: "/images/great-room.jpg", label: "Living Room Beams", size: "wide" },
    { src: "/images/kitchen-1.jpg", label: "Kitchen Beams", size: "wide" },
    { src: "/images/kitchen-2.jpg", label: "Island Beam Detail", size: "wide" },
    { src: "/images/kitchen-3.jpg", label: "Kitchen Ceiling Detail", size: "wide" },
    { src: "/images/kitchen-4.jpg", label: "Kitchen Beam Seating", size: "wide" },
    { src: "/images/living-2.jpg", label: "Kitchen & Beam Detail", size: "wide" },
    { src: "/images/living-3.jpg", label: "Kitchen Beam Finish", size: "wide" },
  ],
};

export const gallery: GalleryItem[] = (
  Object.entries(groups) as [GalleryCategory, Entry[]][]
).flatMap(([cat, items]) => items.map((item) => ({ ...item, cat })));
