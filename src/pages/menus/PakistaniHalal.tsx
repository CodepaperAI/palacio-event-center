import MenuPageTemplate, { type MenuPageData } from "@/components/MenuPageTemplate";
import { Flame, UtensilsCrossed, IceCream } from "lucide-react";
import heroImg from "@/assets/menus-preview.jpg";

const data: MenuPageData = {
  title: "Pakistani Halal Menu",
  eyebrow: "Certified Halal",
  heroImage: heroImg,
  heroAlt: "Pakistani Halal cuisine at Palacio Event Centre",
  intro: {
    eyebrow: "Pakistani Halal",
    heading: "Bold Flavours, Authentic Tradition",
    paragraphs: [
      "Our certified Halal menu brings the bold, aromatic flavours of Pakistan to your celebration — from succulent kebabs and fragrant biryanis to rich curries and decadent desserts, all prepared with the highest standards of Halal compliance.",
      "Every ingredient is sourced with care, and every dish reflects the warmth and generosity of Pakistani hospitality.",
    ],
  },
  sections: [
    {
      title: "Starters & Appetisers",
      icon: Flame,
      items: [
        { name: "Chicken Malai Boti", description: "Creamy marinated chicken pieces grilled to perfection" },
        { name: "Lamb Seekh Kebab", description: "Charcoal-grilled spiced minced lamb skewers" },
        { name: "Aloo Samosa", description: "Golden pastry filled with spiced potato and cumin" },
        { name: "Reshmi Kebab", description: "Silky smooth chicken kebabs with cashew and cream marinade" },
        { name: "Dahi Bhallay", description: "Lentil fritters in yoghurt with sweet and tangy chutneys" },
      ],
    },
    {
      title: "Main Courses",
      icon: UtensilsCrossed,
      items: [
        { name: "Chicken Karahi", description: "Wok-tossed chicken with tomatoes, green chillies, and ginger" },
        { name: "Lamb Nihari", description: "Overnight slow-cooked lamb shank in a rich spiced broth" },
        { name: "Beef Biryani", description: "Layered basmati rice with tender spiced beef and saffron" },
        { name: "Chicken Handi", description: "Creamy chicken curry finished in a traditional clay pot" },
        { name: "Mutton Paya", description: "Slow-simmered trotters in a hearty, gelatinous gravy" },
        { name: "Chapli Kebab Platter", description: "Peshawar-style flat kebabs with fresh salad and naan" },
        { name: "Haleem", description: "Rich, slow-cooked blend of wheat, lentils, and shredded meat" },
      ],
    },
    {
      title: "Desserts",
      icon: IceCream,
      items: [
        { name: "Shahi Tukray", description: "Fried bread soaked in sweetened milk with cardamom and nuts" },
        { name: "Zarda", description: "Sweet saffron rice with dried fruits, nuts, and silver leaf" },
        { name: "Gajar Ka Halwa", description: "Warm carrot pudding slow-cooked with milk and ghee" },
        { name: "Barfi Selection", description: "Assorted milk-based sweets with pistachios and almonds" },
      ],
    },
  ],
  note: "All dishes are certified Halal. Menus can be customised to accommodate dietary requirements and preferences.",
  cta: {
    eyebrow: "Ready to Order",
    heading: "Request Your Pakistani Halal Menu",
    description: "Let our team design an authentic Halal dining experience for your guests.",
  },
};

const PakistaniHalalMenu = () => <MenuPageTemplate data={data} />;
export default PakistaniHalalMenu;
