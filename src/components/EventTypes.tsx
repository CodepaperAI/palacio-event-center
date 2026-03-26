import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, SectionHeading, LuxuryCard, ImageCard } from "@/components/ui/design-system";
import { Link } from "react-router-dom";
import weddingCardImg from "@/assets/Website Content/IMG_1955.jpg";
import socialCardImg from "@/assets/Website Content/IMG_3666.jpg";
import corporateCardImg from "@/assets/Website Content/IMG_3306.jpg";

const events = [
  {
    title: "Weddings",
    description: "Elegant ceremonies and receptions that reflect your unique love story, from grand celebrations to intimate vows.",
    image: weddingCardImg,
    alt: "Floral wedding ceremony and reception setup at Palacio Event Centre",
    href: "/weddings",
  },
  {
    title: "Social Events",
    description: "Birthdays, anniversaries, and private celebrations brought to life in a stunning setting with personalized service.",
    image: socialCardImg,
    alt: "Large private celebration setup inside Palacio Event Centre with immersive decor",
    href: "/social-events",
  },
  {
    title: "Corporate Events",
    description: "Conferences, galas, and business events executed with precision in a professional, sophisticated environment.",
    image: corporateCardImg,
    alt: "Corporate gala-style event setup at Palacio Event Centre with elegant tables and stage decor",
    href: "/corporate-events",
  },
];

const EventTypes = () => {
  return (
    <AnimatedSection id="events" bg="secondary" topGradientFrom="background">
      <SectionHeading
        eyebrow="What We Host"
        title="Celebrations, Galas, and Gatherings with Presence"
        description="Palacio is designed to host milestone moments with a stronger sense of atmosphere, flow, and occasion."
      />

      <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
        {events.map((event) => (
          <Link key={event.title} to={event.href}>
            <LuxuryCard className="group overflow-hidden hover:-translate-y-2 h-full">
              <ImageCard image={event.image} alt={event.alt} imageHeight="h-[19rem] sm:h-80">
                {null}
              </ImageCard>
              <div className="p-7 lg:p-8">
                <h3 className="mb-3 font-sans text-[1.85rem] text-foreground">{event.title}</h3>
                <p className="mb-5 text-[15px] text-muted-foreground font-sans">{event.description}</p>
                <span className="editorial-link text-xs tracking-[0.15em] group-hover:tracking-[0.18em]">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </LuxuryCard>
          </Link>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default EventTypes;
