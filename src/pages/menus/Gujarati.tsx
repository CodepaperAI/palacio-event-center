import MenuPageTemplate, { type MenuPageData } from "@/components/MenuPageTemplate";
import { Flame, UtensilsCrossed, IceCream } from "lucide-react";
import heroImg from "@/assets/menus-preview.jpg";

const data: MenuPageData = {
  title: "Gujarati Menu",
  eyebrow: "Pure Vegetarian",
  heroImage: heroImg,
  heroAlt: "Gujarati vegetarian cuisine at Palacio Event Centre",
  intro: {
    eyebrow: "Gujarati",
    heading: "A Celebration of Vegetarian Excellence",
    paragraphs: [
      "Our Gujarati menu is a vibrant tribute to one of the world's most colourful vegetarian culinary traditions — featuring sweet, savoury, and spiced dishes that burst with flavour and artistry.",
      "Perfect for celebrations that honour tradition, every dish is prepared with authentic techniques and presented with the elegance your event deserves.",
    ],
  },
  sections: [
    {
      title: "Starters & Farsan",
      icon: Flame,
      items: [
        { name: "Dhokla", description: "Steamed gram flour cake with mustard seed tempering and green chutney" },
        { name: "Khandvi", description: "Delicate rolled gram flour sheets seasoned with coconut and mustard" },
        { name: "Patra", description: "Colocasia leaf rolls with spiced gram flour, steamed and tempered" },
        { name: "Methi Gota", description: "Fenugreek fritters, crispy outside and soft within" },
        { name: "Sev Khamani", description: "Crumbled dhokla topped with sev, pomegranate, and chutneys" },
      ],
    },
    {
      title: "Main Courses",
      icon: UtensilsCrossed,
      items: [
        { name: "Undhiyu", description: "Traditional winter mixed vegetable casserole with fenugreek dumplings" },
        { name: "Gujarati Dal", description: "Sweet and tangy lentil soup with jaggery and kokum" },
        { name: "Ringan Bateta Nu Shaak", description: "Aubergine and potato curry in a spiced tomato gravy" },
        { name: "Sev Tameta Nu Shaak", description: "Tomato curry topped with crispy sev noodles" },
        { name: "Paneer Bhurji", description: "Scrambled cottage cheese with peppers, onions, and spices" },
        { name: "Bajra Rotla with White Butter", description: "Traditional millet flatbread served with fresh butter" },
        { name: "Kadhi", description: "Yoghurt-based curry with gram flour dumplings" },
      ],
    },
    {
      title: "Desserts",
      icon: IceCream,
      items: [
        { name: "Mohanthal", description: "Rich gram flour fudge with saffron, cardamom, and pistachios" },
        { name: "Basundi", description: "Thickened sweetened milk with cardamom and nuts" },
        { name: "Shrikhand", description: "Strained yoghurt dessert with saffron and crushed pistachios" },
        { name: "Puran Poli", description: "Sweet stuffed flatbread with lentil and jaggery filling" },
        { name: "Dry Fruit Ladoo", description: "Energy-rich sweet balls made with dates, nuts, and ghee" },
      ],
    },
  ],
  note: "Our entire Gujarati menu is 100% vegetarian. Jain-friendly options are available upon request.",
  cta: {
    eyebrow: "Ready to Order",
    heading: "Request Your Gujarati Menu",
    description: "Celebrate with an authentic, pure-vegetarian Gujarati feast crafted by our chefs.",
  },
};

const GujaratiMenu = () => <MenuPageTemplate data={data} />;
export default GujaratiMenu;
