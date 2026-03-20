import MenuPageTemplate, { type MenuPageData } from "@/components/MenuPageTemplate";
import { Truck, ChefHat, Users } from "lucide-react";
import heroImg from "@/assets/menus-preview.jpg";

const data: MenuPageData = {
  title: "Outside Catering",
  eyebrow: "We Come to You",
  heroImage: heroImg,
  heroAlt: "Palacio outside catering service setup",
  intro: {
    eyebrow: "Outside Catering",
    heading: "The Palacio Experience, Anywhere",
    paragraphs: [
      "Bring the elegance and quality of Palacio Event Centre to any location. Our full-service outside catering delivers the same premium cuisine, professional staff, and impeccable presentation — wherever your event takes place.",
      "From private residences to corporate offices and outdoor venues, we handle every detail so you can focus on your guests.",
    ],
  },
  sections: [
    {
      title: "Catering Packages",
      icon: ChefHat,
      items: [
        { name: "Full-Service Banquet", description: "Complete sit-down dinner service with dedicated wait staff and tableware" },
        { name: "Buffet Service", description: "Elegant buffet stations with chafing dishes, live counters, and attendants" },
        { name: "Cocktail Reception", description: "Passed canapés, small plates, and beverage service for standing events" },
        { name: "Family-Style Service", description: "Shared platters served to each table for a warm, communal dining experience" },
      ],
    },
    {
      title: "What's Included",
      icon: Truck,
      items: [
        { name: "Professional Staff", description: "Trained servers, chefs, and event coordinators on-site" },
        { name: "Equipment & Setup", description: "Chafing dishes, serving ware, linens, and buffet displays provided" },
        { name: "Menu Customisation", description: "Full access to all Palacio menus — South Asian, European, Middle Eastern, and more" },
        { name: "Delivery & Breakdown", description: "Timely delivery, setup, and complete post-event cleanup" },
      ],
    },
    {
      title: "Event Types We Serve",
      icon: Users,
      items: [
        { name: "Private Home Events", description: "Birthdays, anniversaries, and intimate gatherings at your residence" },
        { name: "Corporate Functions", description: "Office lunches, team events, product launches, and conferences" },
        { name: "Outdoor & Tent Events", description: "Garden parties, outdoor receptions, and festival-style celebrations" },
        { name: "Religious & Community Events", description: "Masjid gatherings, temple functions, and community celebrations" },
      ],
    },
  ],
  note: "Outside catering is available across the Greater Toronto Area. Minimum guest counts may apply for certain packages.",
  cta: {
    eyebrow: "Ready to Order",
    heading: "Book Outside Catering",
    description: "Bring Palacio's culinary excellence to your venue. Contact us for a custom catering proposal.",
  },
};

const OutsideCateringMenu = () => <MenuPageTemplate data={data} />;
export default OutsideCateringMenu;
