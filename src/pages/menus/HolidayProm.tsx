import MenuPageTemplate, { type MenuPageData } from "@/components/MenuPageTemplate";
import { PartyPopper, Sparkles, Gift } from "lucide-react";
import heroImg from "@/assets/menus-preview.jpg";

const data: MenuPageData = {
  title: "Holiday & Prom Packages",
  eyebrow: "Seasonal Celebrations",
  heroImage: heroImg,
  heroAlt: "Holiday gala event at Palacio Event Centre",
  intro: {
    eyebrow: "Holiday & Prom",
    heading: "Packages for Every Occasion",
    paragraphs: [
      "From glittering holiday galas to unforgettable prom nights, our seasonal packages are designed to deliver a turnkey celebration with the full Palacio experience — premium dining, elegant décor, and seamless coordination.",
      "Each package is fully customisable, so your event feels uniquely yours while we handle every detail.",
    ],
  },
  sections: [
    {
      title: "Holiday Gala Packages",
      icon: Sparkles,
      items: [
        { name: "Winter Wonderland", description: "Elegant holiday dinner with seasonal décor, champagne reception, and live music" },
        { name: "New Year's Eve Spectacular", description: "Black-tie dinner, midnight countdown, premium bar, and DJ entertainment" },
        { name: "Corporate Holiday Party", description: "Festive team celebration with buffet, awards ceremony setup, and entertainment" },
        { name: "Diwali Celebration", description: "Traditional dinner with festive lighting, rangoli, and cultural entertainment" },
        { name: "Eid Banquet", description: "Premium Halal feast with elegant décor and family-friendly entertainment" },
      ],
    },
    {
      title: "Prom Packages",
      icon: PartyPopper,
      items: [
        { name: "Classic Prom", description: "Three-course dinner, DJ, dance floor, and photo booth setup" },
        { name: "Premium Prom", description: "Four-course dinner, live entertainment, red carpet arrival, and professional photography" },
        { name: "After-Prom Party", description: "Late-night snacks, music, and a relaxed social atmosphere until midnight" },
        { name: "Custom Prom Theme", description: "Fully themed décor and coordination to match your school's chosen aesthetic" },
      ],
    },
    {
      title: "Add-On Experiences",
      icon: Gift,
      items: [
        { name: "Photo Booth", description: "Professional photo booth with props, instant prints, and digital gallery" },
        { name: "Red Carpet Arrival", description: "VIP entrance with photographer and step-and-repeat backdrop" },
        { name: "Dessert Bar", description: "Curated sweet station with mini pastries, chocolate fountain, and candy display" },
        { name: "Live Entertainment", description: "DJ, live band, or cultural performers to elevate the atmosphere" },
      ],
    },
  ],
  note: "All packages include a dedicated event coordinator. Early booking is recommended for peak holiday dates.",
  cta: {
    eyebrow: "Ready to Celebrate",
    heading: "Book Your Seasonal Event",
    description: "Make your holiday party or prom night unforgettable. Contact us for package details and availability.",
  },
};

const HolidayPromMenu = () => <MenuPageTemplate data={data} />;
export default HolidayPromMenu;
