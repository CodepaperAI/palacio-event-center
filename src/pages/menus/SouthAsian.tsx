import MenuPageTemplate, { type MenuPageData } from "@/components/MenuPageTemplate";
import { Flame, UtensilsCrossed, IceCream } from "lucide-react";
import heroImg from "@/assets/menus-preview.jpg";

const data: MenuPageData = {
  title: "South Asian Menu",
  eyebrow: "Authentic Flavours",
  heroImage: heroImg,
  heroAlt: "South Asian cuisine elegantly plated at Palacio Event Centre",
  intro: {
    eyebrow: "South Asian",
    heading: "A Feast of Tradition & Flavour",
    paragraphs: [
      "Our South Asian menu celebrates the rich culinary heritage of India, Bangladesh, and Sri Lanka — bringing together aromatic spices, time-honoured recipes, and refined presentation worthy of your most important occasions.",
      "Every dish is prepared by experienced chefs who understand the depth and nuance of South Asian cuisine, ensuring authentic flavour in every bite.",
    ],
  },
  sections: [
    {
      title: "Starters & Appetisers",
      icon: Flame,
      items: [
        { name: "Paneer Tikka", description: "Marinated cottage cheese grilled in tandoor with bell peppers and onions" },
        { name: "Chicken Seekh Kebab", description: "Spiced minced chicken skewers cooked over charcoal" },
        { name: "Vegetable Samosas", description: "Crispy pastry parcels filled with spiced potatoes and peas" },
        { name: "Fish Amritsari", description: "Battered and fried fish with carom seeds and chaat masala" },
        { name: "Aloo Tikki Chaat", description: "Potato patties topped with yoghurt, tamarind, and chutneys" },
        { name: "Lamb Chapli Kebab", description: "Flat minced lamb patties with fresh herbs and pomegranate" },
      ],
    },
    {
      title: "Main Courses",
      icon: UtensilsCrossed,
      items: [
        { name: "Butter Chicken", description: "Tender chicken in a rich, creamy tomato-butter sauce" },
        { name: "Lamb Rogan Josh", description: "Slow-cooked lamb in aromatic Kashmiri spices" },
        { name: "Chicken Biryani", description: "Fragrant basmati rice layered with spiced chicken and saffron" },
        { name: "Palak Paneer", description: "Cottage cheese in a velvety spinach and cream gravy" },
        { name: "Goat Curry", description: "Traditional bone-in goat simmered in a rich onion-tomato masala" },
        { name: "Dal Makhani", description: "Slow-simmered black lentils finished with cream and butter" },
        { name: "Tandoori Mixed Grill", description: "Assortment of tandoor-cooked meats and vegetables" },
        { name: "Prawn Masala", description: "Jumbo prawns in a spiced coconut and tomato curry" },
      ],
    },
    {
      title: "Desserts",
      icon: IceCream,
      items: [
        { name: "Gulab Jamun", description: "Soft milk-solid dumplings soaked in rose-cardamom syrup" },
        { name: "Ras Malai", description: "Spongy milk patties in sweetened, saffron-infused cream" },
        { name: "Kheer", description: "Creamy rice pudding with cardamom, pistachios, and almonds" },
        { name: "Jalebi", description: "Crispy, saffron-soaked spiral sweets served warm" },
        { name: "Mango Kulfi", description: "Traditional Indian ice cream with Alphonso mango" },
      ],
    },
  ],
  note: "All menus are fully customizable. Speak with our culinary team to create a bespoke menu tailored to your event.",
  cta: {
    eyebrow: "Ready to Order",
    heading: "Request Your South Asian Menu",
    description: "Let our chefs craft a bespoke South Asian dining experience for your celebration.",
  },
};

const SouthAsianMenu = () => <MenuPageTemplate data={data} />;
export default SouthAsianMenu;
