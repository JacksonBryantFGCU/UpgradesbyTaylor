export const site = {
  name: "Upgrades by Taylor",
  legalName: "Upgrades by Taylor LLC",
  region: "Venice, FL",
  serviceArea: "Wellen Park in Venice, FL",
  phone: "(443) 994-7770",
  phoneHref: "tel:+14439947770",
  email: "upgradesbytaylor@gmail.com",
  emailHref: "mailto:upgradesbytaylor@gmail.com",
  license: "Licensed & insured · FL",
  tagline: "Quality craftsmanship for the homes of Venice and the surrounding Gulf coast.",
};

export type NavLinkItem = { to: string; label: string; kind: "route" | "hash" };

export const primaryNav: NavLinkItem[] = [
  { to: "/", label: "Home", kind: "route" },
  { to: "/#services", label: "Services", kind: "hash" },
  { to: "/gallery", label: "Gallery", kind: "route" },
  { to: "/#about", label: "About", kind: "hash" },
];
