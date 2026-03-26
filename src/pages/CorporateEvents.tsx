import EventPageTemplate, { type EventPageData } from "@/components/EventPageTemplate";
import { Building2, Presentation, UtensilsCrossed, Users, Wifi, Shield } from "lucide-react";
import corporateImg from "@/assets/Website Content/IMG_3306.jpg";
import { buildServiceSchema } from "@/lib/seo";

const corporateData: EventPageData = {
  seo: {
    title: "Corporate Event Venue Mississauga | Palacio Event Centre",
    description:
      "Corporate event venue in Mississauga for conferences, galas, meetings, and professional functions at Palacio Event Centre.",
    schema: buildServiceSchema({
      name: "Corporate Event Venue in Mississauga",
      description:
        "Corporate event venue in Mississauga for conferences, galas, meetings, and professional functions at Palacio Event Centre.",
      pathname: "/corporate-events",
      image: corporateImg,
    }),
  },
  title: "Corporate Event Venue in Mississauga",
  eyebrow: "Professional. Prestigious. Polished.",
  heroImage: corporateImg,
  heroAlt: "Corporate gala setup at Palacio Event Centre in Mississauga with stage screens and banquet tables",
  intro: {
    eyebrow: "Corporate Events",
    heading: "Elevate Your Business Events",
    paragraphs: [
      "Palacio Event Centre offers a corporate event venue in Mississauga designed for organizations that need a polished environment, flexible layouts, and a professional guest experience. It is an ideal setting for conferences, galas, product launches, executive meetings, and company celebrations.",
      "From room flow to catering and event coordination, our team supports corporate functions with the professionalism, clarity, and elevated presentation expected from a premium business venue.",
    ],
  },
  benefits: {
    eyebrow: "Why Palacio",
    heading: "A Venue That Means Business",
    description: "Impress clients, engage teams, and host events that reinforce your brand's reputation.",
    items: [
      { icon: Building2, title: "Professional Setting", description: "Our refined interiors project sophistication and credibility - the perfect reflection of your organization's standards." },
      { icon: Presentation, title: "AV & Tech Ready", description: "Built-in audio-visual systems, staging areas, and presentation facilities for conferences and product launches." },
      { icon: UtensilsCrossed, title: "Premium Catering", description: "Impress your guests with diverse, high-quality catering options from multiple culinary traditions." },
      { icon: Users, title: "Scalable Capacity", description: "Host 50-person board meetings in Arriba or 900-guest galas in our Grand Ballroom - we scale to your needs." },
      { icon: Wifi, title: "Modern Amenities", description: "High-speed connectivity, climate control, and modern facilities ensure a comfortable, productive environment." },
      { icon: Shield, title: "Dedicated Support", description: "A professional coordination team manages logistics so your team can focus on delivering a successful event." },
    ],
  },
  experience: {
    eyebrow: "The Experience",
    heading: "Where Business Meets Elegance",
    paragraphs: [
      "Corporate events at Palacio strike the right balance between professional functionality and luxurious ambiance. Whether you are hosting an industry conference or a company holiday gala, the venue itself becomes a statement about your brand's standards.",
      "Our experienced team understands the demands of corporate functions - from precise scheduling and technical requirements to VIP hospitality and brand-aligned decor. Every detail is managed with the professionalism your event demands.",
    ],
    highlights: [
      "Fully customizable stage and presentation setups",
      "Breakout areas for networking and workshops",
      "Corporate branding and signage support",
      "VIP reception and cocktail areas",
      "Valet parking and guest management",
      "Post-event reporting and feedback coordination",
    ],
  },
  cta: {
    eyebrow: "Get Started",
    heading: "Plan Your Corporate Event",
    description: "Ready to elevate your next business function? Contact our corporate events team for a personalized proposal.",
  },
};

const CorporateEvents = () => <EventPageTemplate data={corporateData} />;

export default CorporateEvents;
