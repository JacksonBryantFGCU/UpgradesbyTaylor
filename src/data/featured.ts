export type FeaturedImage = { src: string; alt: string };
export type FeaturedStat = { label: string; value: string };

export const featuredProject = {
  eyebrow: "Featured project",
  title: "Talamore Drive — full home refresh.",
  body:
    "A top-to-bottom upgrade: kitchen reconfiguration, primary bath renovation, custom built-ins throughout, and trim & paint across the entire interior. Wood-look floors tying every room together.",
  images: [
    { src: "/images/great-room.jpg", alt: "Great room" },
    { src: "/images/UBT pictures/20220223_112100.jpg", alt: "Before — house exterior" },
    { src: "/images/kitchen-1.jpg", alt: "Kitchen" },
    { src: "/images/bath-1.jpg", alt: "Primary bath" },
    { src: "/images/closet.jpg", alt: "Walk-in closet" },
  ] satisfies FeaturedImage[],
  stats: [
    { label: "Scope", value: "3,400 sq ft" },
    { label: "Timeline", value: "14 weeks" },
    { label: "Rooms touched", value: "11" },
    { label: "Year", value: "2025" },
  ] satisfies FeaturedStat[],
};
