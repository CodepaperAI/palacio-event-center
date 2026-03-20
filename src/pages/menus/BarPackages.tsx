import MenuPageTemplate, { type MenuPageData } from "@/components/MenuPageTemplate";
import { Wine, GlassWater, Martini } from "lucide-react";
import heroImg from "@/assets/menus-preview.jpg";

const data: MenuPageData = {
  title: "Bar Packages",
  eyebrow: "Curated Beverages",
  heroImage: heroImg,
  heroAlt: "Premium bar setup at Palacio Event Centre",
  intro: {
    eyebrow: "Bar Packages",
    heading: "Elevate Every Toast",
    paragraphs: [
      "From premium open bars to bespoke cocktail menus, our bar packages are designed to complement your cuisine and enhance the mood of your celebration.",
      "Our experienced bartenders craft each drink with precision, ensuring your guests enjoy a seamless and sophisticated beverage experience throughout the evening.",
    ],
  },
  sections: [
    {
      title: "Premium Open Bar",
      icon: Wine,
      items: [
        { name: "Full Premium Package", description: "Unlimited premium spirits, wines, beers, and soft drinks for the duration of your event" },
        { name: "Wine & Beer Package", description: "Curated selection of red, white, and sparkling wines with craft and domestic beers" },
        { name: "Champagne Reception", description: "Welcome drinks with premium champagne or prosecco on arrival" },
        { name: "Extended Hours Add-On", description: "Extend your open bar package with additional hourly service" },
      ],
    },
    {
      title: "Signature Cocktails",
      icon: Martini,
      items: [
        { name: "Custom Cocktail Menu", description: "Two to four bespoke cocktails designed around your event theme and colour palette" },
        { name: "Mocktail Bar", description: "Premium non-alcoholic cocktails with fresh juices, herbs, and artisan syrups" },
        { name: "Late-Night Cocktail Hour", description: "Special craft cocktails served during the after-party" },
        { name: "Interactive Cocktail Station", description: "Live mixology station where guests watch their drinks being crafted" },
      ],
    },
    {
      title: "Non-Alcoholic & Refreshments",
      icon: GlassWater,
      items: [
        { name: "Artisan Juice Bar", description: "Fresh-pressed seasonal juices and smoothie stations" },
        { name: "Hot Beverage Station", description: "Premium coffee, chai, and herbal tea service" },
        { name: "Infused Water Station", description: "Cucumber-mint, citrus, and berry-infused water displays" },
        { name: "Lassi & Traditional Drinks", description: "Mango lassi, rose sherbet, and nimbu pani" },
      ],
    },
  ],
  note: "All bar packages can be customised. Non-alcoholic events are fully supported with premium alternatives.",
  cta: {
    eyebrow: "Ready to Order",
    heading: "Design Your Bar Package",
    description: "Work with our team to create the perfect beverage program for your celebration.",
  },
};

const BarPackagesMenu = () => <MenuPageTemplate data={data} />;
export default BarPackagesMenu;
