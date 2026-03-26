import EventPageTemplate, { type EventPageData } from "@/components/EventPageTemplate";
import { PartyPopper, Sparkles, UtensilsCrossed, Music, Camera, Heart } from "lucide-react";
import socialImg from "@/assets/Website Content/IMG_3666.jpg";
import { buildServiceSchema } from "@/lib/seo";

const socialData: EventPageData = {
  seo: {
    title: "Party Venue Mississauga | Palacio Event Centre",
    description:
      "Luxury party venue in Mississauga for milestone celebrations, anniversaries, private events, and social gatherings at Palacio Event Centre.",
    schema: buildServiceSchema({
      name: "Party Venue in Mississauga",
      description:
        "Luxury party venue in Mississauga for milestone celebrations, anniversaries, private events, and social gatherings at Palacio Event Centre.",
      pathname: "/social-events",
      image: socialImg,
    }),
  },
  title: "Social Events at Palacio",
  eyebrow: "Celebrate Life's Best Moments",
  heroImage: socialImg,
  heroAlt: "Grand social celebration setup at Palacio Event Centre in Mississauga with statement decor and banquet tables",
  intro: {
    eyebrow: "Social Events",
    heading: "Make Every Milestone Unforgettable",
    paragraphs: [
      "Life's most meaningful moments deserve an exceptional setting. Whether you are celebrating a milestone birthday, a golden anniversary, a graduation, or a special family gathering, Palacio Event Centre provides the luxurious backdrop that transforms any occasion into a treasured memory.",
      "Our elegant spaces and attentive service ensure your celebration feels personal, polished, and truly special - no matter the size of your guest list.",
    ],
  },
  benefits: {
    eyebrow: "Why Palacio",
    heading: "The Ideal Social Event Venue",
    description: "From intimate dinners to lavish parties, we deliver an experience your guests will talk about for years.",
    items: [
      { icon: PartyPopper, title: "Celebration-Ready Spaces", description: "Our venues are designed for joyful gatherings - with built-in stage areas, dance floors, and flexible seating arrangements." },
      { icon: Sparkles, title: "Elegant Atmosphere", description: "Crystal chandeliers, refined finishes, and warm lighting set the perfect mood for birthdays, anniversaries, and more." },
      { icon: UtensilsCrossed, title: "Diverse Menus", description: "Delight your guests with cuisine from South Asian, European, Middle Eastern, Caribbean, and other culinary traditions." },
      { icon: Music, title: "Entertainment Ready", description: "Full audio-visual support for DJs, live performers, photo booths, and multimedia presentations." },
      { icon: Camera, title: "Memorable Settings", description: "Every space at Palacio offers beautiful photo opportunities that capture the joy of your celebration." },
      { icon: Heart, title: "Personal Touch", description: "Our coordination team ensures every detail reflects your personality and the spirit of your occasion." },
    ],
  },
  experience: {
    eyebrow: "The Experience",
    heading: "Creating Moments That Last a Lifetime",
    paragraphs: [
      "At Palacio, we understand that social events are deeply personal. Every birthday toast, every anniversary dance, and every family reunion carries its own story - and we are here to make sure that story unfolds beautifully.",
      "From custom decor to curated menus, our team collaborates with you to design an event that feels authentically yours. The result is a celebration that your guests experience as effortless, elegant, and genuinely joyful.",
    ],
    highlights: [
      "Flexible layouts for 50 to 900 guests",
      "Custom theme and decor coordination",
      "Kids-friendly arrangements available",
      "Multiple cuisine options and bar packages",
      "Professional event planning assistance",
      "Convenient Mississauga location with ample parking",
    ],
  },
  cta: {
    eyebrow: "Plan Your Celebration",
    heading: "Host Your Next Social Event Here",
    description: "Ready to celebrate? Contact us for a personalized consultation and let's bring your vision to life.",
  },
};

const SocialEvents = () => <EventPageTemplate data={socialData} />;

export default SocialEvents;
