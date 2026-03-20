import MenuPageTemplate, { type MenuPageData } from "@/components/MenuPageTemplate";
import { Flame, UtensilsCrossed, IceCream } from "lucide-react";
import heroImg from "@/assets/menus-preview.jpg";

const data: MenuPageData = {
  title: "Caribbean Menu",
  eyebrow: "Island Vibes",
  heroImage: heroImg,
  heroAlt: "Caribbean cuisine at Palacio Event Centre",
  intro: {
    eyebrow: "Caribbean",
    heading: "Bold Flavours, Island Soul",
    paragraphs: [
      "Our Caribbean menu brings the vibrant energy of the islands to your celebration — bold jerk spices, tropical fruits, and slow-cooked favourites that fill the room with warmth and flavour.",
      "Whether it's a lively party or an elegant reception, Caribbean cuisine adds an unforgettable energy that gets guests talking.",
    ],
  },
  sections: [
    {
      title: "Starters",
      icon: Flame,
      items: [
        { name: "Jamaican Patties", description: "Flaky golden pastry with spiced beef or vegetable filling" },
        { name: "Jerk Chicken Wings", description: "Smoky, spiced wings with scotch bonnet glaze" },
        { name: "Saltfish Fritters", description: "Crispy codfish bites with pepper sauce" },
        { name: "Festival Dumplings", description: "Sweet fried cornmeal dumplings" },
        { name: "Plantain Chips", description: "Thinly sliced green plantain, lightly salted and crisp" },
      ],
    },
    {
      title: "Main Courses",
      icon: UtensilsCrossed,
      items: [
        { name: "Jerk Chicken", description: "Slow-grilled chicken marinated in traditional jerk spices" },
        { name: "Oxtail Stew", description: "Tender braised oxtail with butter beans in a rich gravy" },
        { name: "Curry Goat", description: "Bone-in goat simmered in Caribbean curry with potatoes" },
        { name: "Ackee & Saltfish", description: "Jamaica's national dish — ackee fruit with salted cod and peppers" },
        { name: "Brown Stew Fish", description: "Pan-fried snapper in a savoury brown sauce with peppers and onions" },
        { name: "Rice & Peas", description: "Coconut-infused rice with kidney beans and thyme" },
        { name: "Roti Wrap Platter", description: "Soft flatbread filled with curried chicken or vegetables" },
      ],
    },
    {
      title: "Desserts",
      icon: IceCream,
      items: [
        { name: "Rum Cake", description: "Moist, buttery cake soaked in Caribbean dark rum" },
        { name: "Sweet Potato Pudding", description: "Spiced sweet potato bake with coconut and nutmeg" },
        { name: "Tropical Fruit Platter", description: "Fresh mango, papaya, pineapple, and passion fruit" },
        { name: "Coconut Drops", description: "Chewy coconut candy with ginger and spices" },
      ],
    },
  ],
  note: "Caribbean menus can be tailored for Halal, vegetarian, and allergy-friendly requirements.",
  cta: {
    eyebrow: "Ready to Order",
    heading: "Request Your Caribbean Menu",
    description: "Bring island energy to your event with a custom Caribbean dining experience.",
  },
};

const CaribbeanMenu = () => <MenuPageTemplate data={data} />;
export default CaribbeanMenu;
