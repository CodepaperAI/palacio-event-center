import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, SectionHeading } from "@/components/ui/design-system";
import ibizaImg from "@/assets/ibiza-ballroom.jpg";
import arribaImg from "@/assets/arriba-room.jpg";

const spaces = [
  {
    name: "IBIZA – Grand Ballroom",
    description: "Our flagship space for large-scale, elegant events. With towering ceilings, grand crystal chandeliers, and a flexible floor plan, IBIZA accommodates up to 900 guests in breathtaking style.",
    capacity: "Up to 900 Guests",
    image: ibizaImg,
    alt: "IBIZA Grand Ballroom with crystal chandeliers and soaring ceilings",
  },
  {
    name: "ARRIBA",
    description: "An intimate and refined setting for private celebrations, corporate dinners, and exclusive gatherings. ARRIBA offers warmth and sophistication in a more personal atmosphere.",
    capacity: "Intimate Events",
    image: arribaImg,
    alt: "ARRIBA intimate private dining room with elegant decor",
  },
];

const VenueSpaces = () => {
  return (
    <AnimatedSection bg="background" topGradientFrom="secondary">
      <SectionHeading
        eyebrow="Our Spaces"
        title="Our Event Spaces"
        description="Two distinctive spaces, each crafted to create the perfect ambiance."
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {spaces.map((space) => (
          <motion.div
            key={space.name}
            variants={fadeUpVariants}
            className="group relative rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="relative h-[24rem] sm:h-[28rem] md:h-[32rem]">
              <img
                src={space.image}
                alt={space.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10 group-hover:from-charcoal/95 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                <span className="inline-block text-gold text-[10px] tracking-[0.25em] uppercase font-semibold mb-3 border border-gold/30 rounded-full px-4 py-1 font-sans">
                  {space.capacity}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-ivory mt-3 mb-3">
                  {space.name}
                </h3>
                <p className="text-ivory/60 text-sm leading-relaxed max-w-md group-hover:text-ivory/80 transition-colors duration-300 font-sans">
                  {space.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeUpVariants} className="text-center mt-12">
        <Link to="/contact">
          <Button variant="gold" size="lg">
            Book a Tour
          </Button>
        </Link>
      </motion.div>
    </AnimatedSection>
  );
};

export default VenueSpaces;
