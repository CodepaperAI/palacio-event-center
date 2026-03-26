import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, SectionHeading } from "@/components/ui/design-system";
import { venueSpaces } from "@/data/spaces";

const VenueSpaces = () => {
  const primarySpace = venueSpaces.find((space) => space.scale === "primary");
  const configurationSpaces = venueSpaces.filter((space) => space.scale === "configuration");
  const intimateSpace = venueSpaces.find((space) => space.scale === "intimate");

  return (
    <AnimatedSection id="spaces" bg="background" topGradientFrom="secondary">
      <SectionHeading
        eyebrow="Our Spaces"
        title="One Flagship Ballroom, Supported by Focused Configurations"
        description="Discover Ibiza Grand Ballroom as the primary venue, with divisible ballroom configurations and Arriba as the intimate second-floor option."
      />

      {primarySpace && (
        <motion.div
          variants={fadeUpVariants}
          className="mb-6 lg:mb-8"
        >
          <Link
            to={`/spaces/${primarySpace.slug}`}
            className="group block relative overflow-hidden rounded-[1.9rem] shadow-elegant focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            <div className="relative h-[28rem] sm:h-[32rem] lg:h-[38rem]">
              <img
                src={primarySpace.image}
                alt={primarySpace.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/64 to-charcoal/18 group-hover:from-charcoal/97 transition-all duration-500" />
                <div className="absolute inset-y-0 left-0 w-[74%] bg-gradient-to-r from-charcoal/80 via-charcoal/42 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                  <span className="pill-label mb-3 border-gold/30 text-gold">
                    {primarySpace.shortLabel}
                  </span>
                  <h3 className="hero-display-text mt-3 mb-3 font-sans text-[1.875rem] md:text-[2.25rem] lg:text-[3.4rem]">
                    {primarySpace.name}
                  </h3>
                  <div className="hero-meta-text mb-4 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.24em] font-sans">
                    <p className="text-gold-light">{primarySpace.capacity}</p>
                    <p className="text-ivory/92">{primarySpace.capability}</p>
                  </div>
                  <p className="hero-supporting-text max-w-2xl text-sm transition-colors duration-300 group-hover:text-ivory font-sans sm:text-base">
                    {primarySpace.description}
                  </p>
                  <span className="editorial-link mt-5 text-gold-light group-hover:text-gold">
                    View Details
                  </span>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        <motion.div
          variants={fadeUpVariants}
          className="card-panel p-6 md:p-8"
        >
          <div className="mb-6">
            <span className="pill-label mb-3 border-gold/30 text-gold">
              Ibiza Configurations
            </span>
            <h3 className="font-sans text-[1.5rem] text-foreground md:text-[1.875rem]">
              Ibiza Grand Ballroom
              <span className="block text-base md:text-lg text-muted-foreground mt-2 font-sans tracking-normal">
                Configured as Ibiza A / Ibiza B
              </span>
            </h3>
          </div>

          <div className="grid gap-4">
            {configurationSpaces.map((space) => (
              <Link
                key={space.name}
                to={`/spaces/${space.slug}`}
                className="group block overflow-hidden rounded-[1.45rem] border border-border/50 bg-background transition-all duration-300 hover:border-gold/25 hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                {space.galleryImages.length > 0 && (
                  <div className="relative h-44">
                    <img
                      src={space.galleryImages[0].src}
                      alt={space.galleryImages[0].alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-charcoal/10 to-transparent" />
                  </div>
                )}
                <div className="p-5 md:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h4 className="font-sans text-[1.5rem] text-foreground">{space.name}</h4>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-gold-light font-sans">
                      {space.capacity}
                    </span>
                  </div>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold font-sans">
                    {space.capability}
                  </p>
                  <p className="text-sm text-muted-foreground font-sans">
                    {space.description}
                  </p>
                  <span className="editorial-link mt-4">
                    View Details
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {intimateSpace && (
          <motion.div
            variants={fadeUpVariants}
            className=""
          >
            <Link
              to={`/spaces/${intimateSpace.slug}`}
              className="group block relative overflow-hidden rounded-[1.9rem] shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
            >
              <div className="relative h-[24rem] sm:h-[28rem] md:h-[32rem]">
                <img
                  src={intimateSpace.image}
                  alt={intimateSpace.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/66 to-charcoal/16 group-hover:from-charcoal/97 transition-all duration-500" />
                <div className="absolute inset-y-0 left-0 w-[76%] bg-gradient-to-r from-charcoal/82 via-charcoal/44 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                  <span className="pill-label mb-3 border-gold/30 text-gold">
                    {intimateSpace.shortLabel}
                  </span>
                  <h3 className="hero-display-text mt-3 mb-3 font-sans text-[1.5rem] md:text-[1.875rem] lg:text-[3rem]">
                    {intimateSpace.name}
                  </h3>
                  <div className="hero-meta-text mb-4 flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.24em] font-sans">
                    <p className="text-gold-light">{intimateSpace.capacity}</p>
                    <p className="text-ivory/92">{intimateSpace.capability}</p>
                  </div>
                  <p className="hero-supporting-text max-w-md text-sm transition-colors duration-300 group-hover:text-ivory font-sans">
                    {intimateSpace.description}
                  </p>
                  <span className="editorial-link mt-5 text-gold-light group-hover:text-gold">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}
      </div>

      <motion.div variants={fadeUpVariants} className="mt-10 text-center">
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
