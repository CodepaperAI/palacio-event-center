import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, SectionHeading, LuxuryCard, ImageCard } from "@/components/ui/design-system";
import { Link } from "react-router-dom";
import weddingImg from "@/assets/wedding-event.jpg";
import socialImg from "@/assets/social-event.jpg";
import corporateImg from "@/assets/corporate-event.jpg";

const events = [
  {
    title: "Weddings",
    description: "Elegant ceremonies and receptions that reflect your unique love story, from grand celebrations to intimate vows.",
    image: weddingImg,
    alt: "Luxury wedding ceremony setup with floral aisle decorations",
    href: "/weddings",
  },
  {
    title: "Social Events",
    description: "Birthdays, anniversaries, and private celebrations brought to life in a stunning setting with personalized service.",
    image: socialImg,
    alt: "Elegant social celebration in luxury banquet hall",
    href: "/social-events",
  },
  {
    title: "Corporate Events",
    description: "Conferences, galas, and business events executed with precision in a professional, sophisticated environment.",
    image: corporateImg,
    alt: "Corporate gala event in luxury ballroom",
    href: "/corporate-events",
  },
];

const EventTypes = () => {
  return (
    <AnimatedSection id="events" bg="secondary" topGradientFrom="background">
      <SectionHeading
        eyebrow="What We Host"
        title="Events We Host"
        description="Every celebration deserves a space that matches its significance."
      />

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {events.map((event) => (
          <Link key={event.title} to={event.href}>
            <LuxuryCard className="group overflow-hidden hover:-translate-y-2 h-full">
              <ImageCard image={event.image} alt={event.alt}>
                {null}
              </ImageCard>
              <div className="p-7 lg:p-8">
                <h3 className="font-serif text-2xl text-foreground mb-3">{event.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 font-sans">{event.description}</p>
                <span className="inline-flex items-center text-gold text-xs tracking-[0.15em] uppercase font-semibold font-sans group-hover:tracking-[0.2em] transition-all duration-300">
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
