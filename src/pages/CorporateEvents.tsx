import EventPageTemplate, { type EventPageData } from "@/components/EventPageTemplate";
import { Building2, Presentation, UtensilsCrossed, Users, Wifi, Shield } from "lucide-react";
import corporateImg from "@/assets/corporate-event.jpg";

const corporateData: EventPageData = {
  title: "Corporate Events at Palacio",
  eyebrow: "Professional. Prestigious. Polished.",
  heroImage: corporateImg,
  heroAlt: "Corporate gala event in luxury ballroom at Palacio Event Centre",
  intro: {
    eyebrow: "Corporate Events",
    heading: "Elevate Your Business Events",
    paragraphs: [
      "When your corporate event needs to make an impression, Palacio Event Centre delivers. Our sophisticated venue provides the ideal environment for conferences, galas, product launches, award ceremonies, and executive retreats that reflect the prestige of your organization.",
      "With flexible layouts, state-of-the-art facilities, and a professional coordination team, we ensure your corporate function runs seamlessly from start to finish — allowing you to focus on what matters most.",
    ],
  },
  benefits: {
    eyebrow: "Why Palacio",
    heading: "A Venue That Means Business",
    description: "Impress clients, engage teams, and host events that reinforce your brand's reputation.",
    items: [
      { icon: Building2, title: "Professional Setting", description: "Our refined interiors project sophistication and credibility — the perfect reflection of your organization's standards." },
      { icon: Presentation, title: "AV & Tech Ready", description: "Built-in audio-visual systems, staging areas, and presentation facilities for conferences and product launches." },
      { icon: UtensilsCrossed, title: "Premium Catering", description: "Impress your guests with diverse, high-quality catering options from multiple culinary traditions." },
      { icon: Users, title: "Scalable Capacity", description: "Host 50-person board meetings in ARRIBA or 900-guest galas in our Grand Ballroom — we scale to your needs." },
      { icon: Wifi, title: "Modern Amenities", description: "High-speed connectivity, climate control, and modern facilities ensure a comfortable, productive environment." },
      { icon: Shield, title: "Dedicated Support", description: "A professional coordination team manages logistics so your team can focus on delivering a successful event." },
    ],
  },
  experience: {
    eyebrow: "The Experience",
    heading: "Where Business Meets Elegance",
    paragraphs: [
      "Corporate events at Palacio strike the perfect balance between professional functionality and luxurious ambiance. Whether you're hosting an industry conference or a company holiday gala, the venue itself becomes a statement about your brand's commitment to excellence.",
      "Our experienced team understands the unique demands of corporate functions — from precise scheduling and technical requirements to VIP hospitality and brand-aligned décor. Every detail is managed with the professionalism your event demands.",
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
