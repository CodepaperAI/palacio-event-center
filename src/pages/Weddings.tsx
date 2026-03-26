import EventPageTemplate, { type EventPageData } from "@/components/EventPageTemplate";
import { Heart, Sparkles, UtensilsCrossed, Camera, Music, Users } from "lucide-react";
import weddingImg from "@/assets/Website Content/IMG_1955.jpg";
import { buildServiceSchema } from "@/lib/seo";

const weddingData: EventPageData = {
  seo: {
    title: "Wedding Venue Mississauga | Palacio Event Centre",
    description:
      "Luxury wedding venue in Mississauga for ceremonies, receptions, and elegant celebrations at Palacio Event Centre.",
    schema: buildServiceSchema({
      name: "Wedding Venue in Mississauga",
      description:
        "Luxury wedding venue in Mississauga for ceremonies, receptions, and elegant celebrations at Palacio Event Centre.",
      pathname: "/weddings",
      image: weddingImg,
    }),
  },
  title: "Wedding Venue in Mississauga",
  eyebrow: "Your Dream Wedding Awaits",
  heroImage: weddingImg,
  heroAlt: "Wedding reception setup at Palacio Event Centre in Mississauga with a floral stage and reflective aisle",
  intro: {
    eyebrow: "Weddings",
    heading: "A Venue Worthy of Your Love Story",
    paragraphs: [
      "Palacio Event Centre offers a wedding venue in Mississauga that feels polished, romantic, and deeply memorable from the first arrival to the final dance. Elegant interiors, soaring ceilings, and warm hospitality create a setting worthy of a once-in-a-lifetime celebration.",
      "From refined ceremonies to lavish wedding receptions, our spaces adapt beautifully to guest count, culture, and style while our team helps shape a day that feels personal, elevated, and seamless.",
    ],
  },
  benefits: {
    eyebrow: "Why Palacio",
    heading: "The Perfect Wedding Venue",
    description: "Everything you need to create a wedding day that exceeds every expectation.",
    items: [
      { icon: Heart, title: "Romantic Ambiance", description: "Crystal chandeliers, warm lighting, and elegant finishes create a naturally romantic atmosphere for your ceremony and reception." },
      { icon: Sparkles, title: "Customizable Decor", description: "Our flexible spaces serve as a beautiful canvas, easily tailored to match any wedding theme, colour palette, or cultural tradition." },
      { icon: UtensilsCrossed, title: "World-Class Catering", description: "Choose from South Asian, European, Middle Eastern, Caribbean, and more - crafted by experienced chefs to delight every guest." },
      { icon: Users, title: "Up to 900 Guests", description: "Host celebrations of any size in our expansive Grand Ballroom or intimate gatherings in our Arriba space." },
      { icon: Camera, title: "Photo-Ready Interiors", description: "Every corner of Palacio is designed to feel visually timeless, giving you stunning backdrops for lifelong memories." },
      { icon: Music, title: "Full Entertainment Support", description: "Integrated sound systems, stage areas, and lighting setups ready for DJs, live bands, and entertainment." },
    ],
  },
  experience: {
    eyebrow: "The Experience",
    heading: "What Makes a Palacio Wedding Special",
    paragraphs: [
      "A Palacio wedding is more than an event - it is an immersive experience. From the moment your guests arrive, they are welcomed into an atmosphere of elegance and warmth that sets the tone for an extraordinary celebration.",
      "Our team handles the details so you can be fully present for every moment. Whether it is a traditional South Asian wedding spanning multiple events or a contemporary Western ceremony, we bring your vision to life with precision and heart.",
    ],
    highlights: [
      "Dedicated wedding coordinator assigned to your event",
      "Flexible ceremony and reception layouts",
      "Diverse menu options for all cultural traditions",
      "Complimentary bridal suite for day-of preparations",
      "Valet parking and guest concierge services",
      "Custom lighting and decor packages available",
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
