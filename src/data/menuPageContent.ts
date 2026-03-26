import heroImg from "@/assets/Website Content/20221027_150416_Original.jpg";
import type { MenuPageData } from "@/components/MenuPageTemplate";

type MenuPageContentMap = Record<string, MenuPageData>;

export const menuPageContent: MenuPageContentMap = {
  "south-asian": {
    slug: "south-asian",
    title: "South Asian Menu",
    eyebrow: "Authentic Flavours",
    heroImage: heroImg,
    heroAlt: "Official South Asian menu at Palacio Event Centre",
    seo: {
      description:
        "View the official South Asian menu PDF from Palacio Event Centre in Mississauga.",
    },
  },
  "pakistani-halal": {
    slug: "pakistani-halal",
    title: "Pakistani Halal Menu",
    eyebrow: "Certified Halal",
    heroImage: heroImg,
    heroAlt: "Official Pakistani Halal menu at Palacio Event Centre",
    seo: {
      description:
        "View the official Pakistani Halal menu PDF from Palacio Event Centre in Mississauga.",
    },
  },
  european: {
    slug: "european",
    title: "European Menu",
    eyebrow: "Continental Elegance",
    heroImage: heroImg,
    heroAlt: "Official European menu at Palacio Event Centre",
    seo: {
      description:
        "View the official European menu PDF from Palacio Event Centre in Mississauga.",
    },
  },
  "middle-eastern": {
    slug: "middle-eastern",
    title: "Middle Eastern Menu",
    eyebrow: "Warm & Generous",
    heroImage: heroImg,
    heroAlt: "Official Middle Eastern menu at Palacio Event Centre",
    seo: {
      description:
        "View the official Middle Eastern menu PDF from Palacio Event Centre in Mississauga.",
    },
  },
  gujarati: {
    slug: "gujarati",
    title: "Gujarati Menu",
    eyebrow: "Pure Vegetarian",
    heroImage: heroImg,
    heroAlt: "Official Gujarati menu at Palacio Event Centre",
    seo: {
      description:
        "View the official Gujarati menu PDF from Palacio Event Centre in Mississauga.",
    },
  },
  caribbean: {
    slug: "caribbean",
    title: "Caribbean Menu",
    eyebrow: "Island Flavours",
    heroImage: heroImg,
    heroAlt: "Official Caribbean menu at Palacio Event Centre",
    seo: {
      description:
        "View the official Caribbean menu PDF from Palacio Event Centre in Mississauga.",
    },
  },
  "bar-packages": {
    slug: "bar-packages",
    title: "Bar Packages",
    eyebrow: "Curated Beverages",
    heroImage: heroImg,
    heroAlt: "Official bar packages PDF at Palacio Event Centre",
    seo: {
      description:
        "View the official bar packages PDF from Palacio Event Centre in Mississauga.",
    },
  },
  "outside-catering": {
    slug: "outside-catering",
    title: "Outside Catering",
    eyebrow: "We Come to You",
    heroImage: heroImg,
    heroAlt: "Official outside catering menu PDF at Palacio Event Centre",
    seo: {
      description:
        "View the official outside catering PDF from Palacio Event Centre in Mississauga.",
    },
  },
  "holiday-prom": {
    slug: "holiday-prom",
    title: "Holiday & Prom Packages",
    eyebrow: "Seasonal Celebrations",
    heroImage: heroImg,
    heroAlt: "Official holiday and prom packages PDF at Palacio Event Centre",
    seo: {
      description:
        "View the official holiday and prom packages PDF from Palacio Event Centre in Mississauga.",
    },
  },
};
