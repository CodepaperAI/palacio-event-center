import MenuPageTemplate, { type MenuPageData } from "@/components/MenuPageTemplate";
import { Flame, UtensilsCrossed, IceCream } from "lucide-react";
import heroImg from "@/assets/menus-preview.jpg";

const data: MenuPageData = {
  title: "European Menu",
  eyebrow: "Continental Elegance",
  heroImage: heroImg,
  heroAlt: "European fine dining at Palacio Event Centre",
  intro: {
    eyebrow: "European",
    heading: "Timeless Sophistication on Every Plate",
    paragraphs: [
      "Our European menu draws from the finest Continental traditions — French finesse, Italian warmth, and British classicism — delivering courses that are as visually stunning as they are delicious.",
      "Perfectly suited for formal galas, weddings, and corporate events where refined dining sets the tone for an exceptional evening.",
    ],
  },
  sections: [
    {
      title: "Starters & Canapés",
      icon: Flame,
      items: [
        { name: "Smoked Salmon Blini", description: "Delicate buckwheat blini with crème fraîche and dill" },
        { name: "Caprese Crostini", description: "Fresh mozzarella, heirloom tomato, and basil on toasted ciabatta" },
        { name: "French Onion Soup", description: "Rich caramelised onion broth with Gruyère crouton" },
        { name: "Prawn Cocktail", description: "Poached prawns with Marie Rose sauce and micro herbs" },
        { name: "Wild Mushroom Vol-au-Vent", description: "Crispy puff pastry filled with creamy forest mushrooms" },
      ],
    },
    {
      title: "Main Courses",
      icon: UtensilsCrossed,
      items: [
        { name: "Beef Wellington", description: "Prime beef fillet wrapped in mushroom duxelles and golden puff pastry" },
        { name: "Pan-Seared Sea Bass", description: "Crispy-skinned sea bass with saffron risotto and beurre blanc" },
        { name: "Chicken Milanese", description: "Herb-crusted chicken breast with arugula and cherry tomatoes" },
        { name: "Lamb Rack", description: "Herb-crusted rack of lamb with roasted root vegetables and jus" },
        { name: "Mushroom Risotto", description: "Creamy Arborio rice with porcini, truffle oil, and Parmesan" },
        { name: "Duck Confit", description: "Slow-cooked duck leg with Dauphinoise potatoes and red wine reduction" },
      ],
    },
    {
      title: "Desserts",
      icon: IceCream,
      items: [
        { name: "Crème Brûlée", description: "Classic vanilla custard with a caramelised sugar crust" },
        { name: "Tiramisu", description: "Espresso-soaked ladyfingers with mascarpone cream and cocoa" },
        { name: "Panna Cotta", description: "Silky Italian cream dessert with berry compote" },
        { name: "Chocolate Fondant", description: "Warm chocolate cake with a molten centre and vanilla ice cream" },
        { name: "Lemon Tart", description: "Tangy lemon curd in a buttery shortcrust pastry shell" },
      ],
    },
  ],
  note: "European menus can be adapted for dietary requirements including vegetarian, vegan, and gluten-free options.",
  cta: {
    eyebrow: "Ready to Order",
    heading: "Request Your European Menu",
    description: "Our chefs will craft a refined Continental dining experience for your celebration.",
  },
};

const EuropeanMenu = () => <MenuPageTemplate data={data} />;
export default EuropeanMenu;
