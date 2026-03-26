import {
  Globe,
  Leaf,
  PartyPopper,
  Salad,
  Sparkles,
  Truck,
  UtensilsCrossed,
  Wine,
  type LucideIcon,
} from "lucide-react";

export type MenuCollectionGroup = "Cuisine Menus" | "Services";

export interface MenuCollection {
  slug: string;
  title: string;
  route: string;
  pdfUrl: string;
  description: string;
  group: MenuCollectionGroup;
  icon: LucideIcon;
}

export const menuCollections: MenuCollection[] = [
  {
    slug: "south-asian",
    title: "South Asian",
    route: "/menus/south-asian",
    pdfUrl: "/menus/SOUTH-ASIAN-MENU-1.pdf",
    description:
      "Rich, aromatic dishes spanning traditional Indian, Bangladeshi, and Sri Lankan culinary traditions.",
    group: "Cuisine Menus",
    icon: UtensilsCrossed,
  },
  {
    slug: "pakistani-halal",
    title: "Pakistani Halal",
    route: "/menus/pakistani-halal",
    pdfUrl: "/menus/PAKISTANI-HALAL-MENU.pdf",
    description:
      "Certified Halal cuisine with bold Pakistani flavours, refined presentation, and celebration-ready service.",
    group: "Cuisine Menus",
    icon: Leaf,
  },
  {
    slug: "european",
    title: "European",
    route: "/menus/european",
    pdfUrl: "/menus/EUROPEAN-MENU-PACKAGE.pdf",
    description:
      "Classic Continental menus with polished plating and timeless crowd-pleasing dishes.",
    group: "Cuisine Menus",
    icon: Globe,
  },
  {
    slug: "gujarati",
    title: "Gujarati",
    route: "/menus/gujarati",
    pdfUrl: "/menus/GUJRATI-WEDDING-MENU.pdf",
    description:
      "Authentic vegetarian specialties celebrating the rich flavour and colour of Gujarati cuisine.",
    group: "Cuisine Menus",
    icon: Salad,
  },
  {
    slug: "caribbean",
    title: "Caribbean",
    route: "/menus/caribbean",
    pdfUrl: "/menus/WEST-INDIAN-CARIBBEAN-MENU.pdf",
    description:
      "Bold island flavours, vibrant spices, and energetic menus designed for joyful celebrations.",
    group: "Cuisine Menus",
    icon: Sparkles,
  },
  {
    slug: "bar-packages",
    title: "Bar Packages",
    route: "/menus/bar-packages",
    pdfUrl: "/menus/BAR-PACKAGES.pdf",
    description:
      "Curated beverage programs ranging from premium open bars to signature cocktail service.",
    group: "Services",
    icon: Wine,
  },
  {
    slug: "outside-catering",
    title: "Outside Catering",
    route: "/menus/outside-catering",
    pdfUrl: "/menus/CATERING-MENU.pdf",
    description:
      "Off-site catering packages that bring the Palacio culinary experience to your chosen venue.",
    group: "Services",
    icon: Truck,
  },
  {
    slug: "holiday-prom",
    title: "Holiday & Prom",
    route: "/menus/holiday-prom",
    pdfUrl: "/menus/HOLIDAY-MENU-PACKAGE-.pdf",
    description:
      "Seasonal and celebration-specific packages for holiday galas, proms, and festive gatherings.",
    group: "Services",
    icon: PartyPopper,
  },
];

export const cuisineMenuCollections = menuCollections.filter(
  (collection) => collection.group === "Cuisine Menus"
);

export const serviceMenuCollections = menuCollections.filter(
  (collection) => collection.group === "Services"
);

export const getMenuCollectionBySlug = (slug: string) =>
  menuCollections.find((collection) => collection.slug === slug);
