import EventPageTemplate, { type EventPageData } from "@/components/EventPageTemplate";
import { Heart, Sparkles, UtensilsCrossed, Camera, Music, Users } from "lucide-react";
import weddingImg from "@/assets/wedding-event.jpg";

const weddingData: EventPageData = {
  title: "Weddings at Palacio",
  eyebrow: "Your Dream Wedding Awaits",
  heroImage: weddingImg,
  heroAlt: "Luxury wedding ceremony setup with floral aisle decorations at Palacio Event Centre",
  intro: {
    eyebrow: "Weddings",
    heading: "A Venue Worthy of Your Love Story",
    paragraphs: [
      "Your wedding day deserves a setting as extraordinary as your love story. At Palacio Event Centre, we offer a breathtaking backdrop of crystal chandeliers, soaring ceilings, and refined interiors that transform your celebration into an unforgettable experience.",
      "From intimate ceremonies to grand receptions hosting up to 900 guests, our versatile spaces adapt to your vision. Our dedicated coordination team works alongside you to ensure every detail — from floral arrangements to table settings — reflects your personal style.",
    ],
  },
  benefits: {
    eyebrow: "Why Palacio",
    heading: "The Perfect Wedding Venue",
    description: "Everything you need to create a wedding day that exceeds every expectation.",
    items: [
      { icon: Heart, title: "Romantic Ambiance", description: "Crystal chandeliers, warm lighting, and elegant finishes create a naturally romantic atmosphere for your ceremony and reception." },
      { icon: Sparkles, title: "Customizable Décor", description: "Our flexible spaces serve as a beautiful canvas, easily tailored to match any wedding theme, colour palette, or cultural tradition." },
      { icon: UtensilsCrossed, title: "World-Class Catering", description: "Choose from South Asian, European, Middle Eastern, Caribbean, and more — crafted by experienced chefs to delight every guest." },
      { icon: Users, title: "Up to 900 Guests", description: "Host celebrations of any size in our expansive Grand Ballroom or intimate gatherings in our ARRIBA space." },
      { icon: Camera, title: "Photo-Ready Interiors", description: "Every corner of Palacio is designed to be Instagram-worthy — giving you stunning backdrops for lifelong memories." },
      { icon: Music, title: "Full Entertainment Support", description: "Integrated sound systems, stage areas, and lighting setups ready for DJs, live bands, and entertainment." },
    ],
  },
  experience: {
    eyebrow: "The Experience",
    heading: "What Makes a Palacio Wedding Special",
    paragraphs: [
      "A Palacio wedding is more than an event — it's an immersive experience. From the moment your guests arrive, they're enveloped in an atmosphere of elegance and warmth that sets the tone for an extraordinary celebration.",
      "Our team handles the details so you can be fully present for every moment. Whether it's a traditional South Asian wedding spanning multiple events or a contemporary Western ceremony, we bring your vision to life with precision and heart.",
    ],
    highlights: [
      "Dedicated wedding coordinator assigned to your event",
      "Flexible ceremony and reception layouts",
      "Diverse menu options for all cultural traditions",
      "Complimentary bridal suite for day-of preparations",
      "Valet parking and guest concierge services",
      "Custom lighting and décor packages available",
    ],
  },
  cta: {
    eyebrow: "Start Planning",
    heading: "Begin Your Wedding Journey",
    description: "Let our team help you plan the wedding of your dreams. Reach out for a personalized consultation and venue tour.",
  },
};

const Weddings = () => <EventPageTemplate data={weddingData} />;

export default Weddings;
