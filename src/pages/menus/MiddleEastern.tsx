import MenuPageTemplate, { type MenuPageData } from "@/components/MenuPageTemplate";
import { Flame, UtensilsCrossed, IceCream } from "lucide-react";
import heroImg from "@/assets/menus-preview.jpg";

const data: MenuPageData = {
  title: "Middle Eastern Menu",
  eyebrow: "Warm & Generous",
  heroImage: heroImg,
  heroAlt: "Middle Eastern cuisine at Palacio Event Centre",
  intro: {
    eyebrow: "Middle Eastern",
    heading: "The Art of Generous Dining",
    paragraphs: [
      "Our Middle Eastern menu captures the warmth, colour, and generosity of the region's culinary traditions — vibrant mezze platters, succulent grilled meats, fragrant rice dishes, and delicate pastries that invite sharing and celebration.",
      "Every dish is prepared with traditional techniques and the finest ingredients, creating a feast that brings people together.",
    ],
  },
  sections: [
    {
      title: "Mezze & Starters",
      icon: Flame,
      items: [
        { name: "Hummus", description: "Silky chickpea dip with tahini, lemon, and extra-virgin olive oil" },
        { name: "Baba Ganoush", description: "Smoky roasted aubergine dip with garlic and pomegranate" },
        { name: "Fattoush Salad", description: "Crispy pita, fresh vegetables, sumac, and pomegranate dressing" },
        { name: "Kibbeh", description: "Crispy bulgur wheat shells filled with spiced lamb and pine nuts" },
        { name: "Falafel", description: "Herb-packed chickpea fritters with tahini sauce" },
        { name: "Halloumi Platter", description: "Grilled halloumi with za'atar, honey, and fresh mint" },
      ],
    },
    {
      title: "Main Courses",
      icon: UtensilsCrossed,
      items: [
        { name: "Lamb Shawarma", description: "Slow-roasted spiced lamb carved tableside with garlic sauce" },
        { name: "Chicken Shish Tawook", description: "Marinated chicken skewers with garlic cream and pickled turnip" },
        { name: "Mixed Grill Platter", description: "Assorted kebabs — lamb kofta, chicken, and koobideh" },
        { name: "Mansaf", description: "Tender lamb over saffron rice with dried yoghurt sauce" },
        { name: "Vegetable Tagine", description: "Slow-cooked seasonal vegetables with preserved lemon and olives" },
        { name: "Ouzi Rice", description: "Spiced rice with lamb, peas, carrots, and toasted nuts" },
      ],
    },
    {
      title: "Desserts",
      icon: IceCream,
      items: [
        { name: "Baklava", description: "Layered filo pastry with pistachios and rose-scented honey syrup" },
        { name: "Kunafa", description: "Warm shredded pastry with molten cheese and orange blossom syrup" },
        { name: "Maamoul", description: "Date-filled semolina cookies dusted with powdered sugar" },
        { name: "Turkish Delight Selection", description: "Rose, pistachio, and pomegranate lokum" },
      ],
    },
  ],
  note: "Many dishes are naturally gluten-free and can be adapted for vegan or vegetarian preferences.",
  cta: {
    eyebrow: "Ready to Order",
    heading: "Request Your Middle Eastern Menu",
    description: "Let us design a generous Middle Eastern feast for your celebration.",
  },
};

const MiddleEasternMenu = () => <MenuPageTemplate data={data} />;
export default MiddleEasternMenu;
