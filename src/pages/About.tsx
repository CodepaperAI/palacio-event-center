import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Users, Maximize, ArrowUp, MapPin, Sparkles, LayoutGrid, UtensilsCrossed, Building2, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import {
  AnimatedSection,
  PageHero,
  SectionHeading,
  StatCard,
  FeatureCard,
  SiteCtaSection,
} from "@/components/ui/design-system";
import heroBg from "@/assets/Website Content/IMG_3670.jpg";
import { venueSpaces } from "@/data/spaces";

const stats = [
  { icon: Users, value: "Up to 900", label: "Guests" },
  { icon: Maximize, value: "30,000", label: "Sq. Ft." },
  { icon: ArrowUp, value: "23 Ft", label: "Ceilings" },
  { icon: MapPin, value: "Prime", label: "Mississauga Location" },
];

const features = [
  { icon: Sparkles, title: "Elegant Interiors", description: "Crystal chandeliers, refined finishes, and a sophisticated ambiance throughout every space." },
  { icon: LayoutGrid, title: "Flexible Layouts", description: "Customizable floor plans that adapt seamlessly to your event size, theme, and style." },
  { icon: UtensilsCrossed, title: "Diverse Menu Options", description: "A wide range of culinary traditions curated to suit every palate and occasion." },
  { icon: Building2, title: "Professional Coordination", description: "Dedicated event coordinators ensure a seamless, stress-free experience from start to finish." },
  { icon: MapPin, title: "Convenient Location", description: "Centrally located in Mississauga with easy highway access and ample guest parking." },
  { icon: Heart, title: "Guest-Friendly Experience", description: "Thoughtful amenities and attentive service that keep every guest comfortable and engaged." },
];

const About = () => {
  const primarySpace = venueSpaces.find((space) => space.scale === "primary");
  const configurationSpaces = venueSpaces.filter((space) => space.scale === "configuration");
  const intimateSpace = venueSpaces.find((space) => space.scale === "intimate");

  return (
    <div className="min-h-screen">
      <SEO
        title="About Palacio Event Centre | Banquet Hall in Mississauga"
        description="Learn about Palacio Event Centre, a luxury banquet hall and event venue in Mississauga with Ibiza Grand Ballroom and Arriba."
        pathname="/about"
        image={heroBg}
      />
      <Navbar />

      <PageHero
        eyebrow="Mississauga's Premier Luxury Venue"
        title="About Palacio Event Centre"
        image={heroBg}
        alt="Palacio Event Centre grand ballroom interior in Mississauga"
        align="center"
      />

      <AnimatedSection bg="background" topDivider>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            eyebrow="Our Story"
            title="Where Elegance Meets Flexibility"
          />
          <motion.div variants={fadeUpVariants} className="space-y-6 text-base text-muted-foreground font-sans sm:text-lg">
            <p>
              Located in the heart of Mississauga, Ontario, Palacio Event Centre has established
              itself as the region's most distinguished luxury event venue. Our 30,000 square-foot
              facility features soaring 23-foot ceilings, grand crystal chandeliers, and
              meticulously designed interiors that create an atmosphere of timeless sophistication.
            </p>
            <p>
              Ibiza Grand Ballroom anchors the venue as our flagship event space, complete with
              a large adjoining foyer and a divisible ballroom layout that supports both grand
              celebrations and more focused configurations.
            </p>
            <p>
              Arriba offers the intimate counterpart on the second floor, where panoramic views,
              abundant natural light, and a more private atmosphere make smaller events feel elevated.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection bg="secondary" topGradientFrom="background">
        <SectionHeading
          eyebrow="By the Numbers"
          title="A Venue Built for Grand Celebrations"
          description="Our numbers speak to the scale and quality of the Palacio experience."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              icon={<stat.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection bg="background" topGradientFrom="secondary">
        <SectionHeading
          eyebrow="Our Spaces"
          title="One Flagship Ballroom, Supported by Focused Configurations"
          description="Palacio is led by Ibiza Grand Ballroom, with divisible ballroom configurations and Arriba as the intimate second-floor venue."
        />

        {primarySpace && (
          <motion.div
            variants={fadeUpVariants}
            className="mb-6 md:mb-8"
          >
            <Link
              to={`/spaces/${primarySpace.slug}`}
              className="group block relative overflow-hidden rounded-[1.9rem] shadow-elegant focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
            >
              <div className="relative h-[28rem] md:h-[34rem]">
                <img
                  src={primarySpace.image}
                  alt={primarySpace.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10 group-hover:from-charcoal/95 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <span className="pill-label mb-3 border-gold/30 text-gold">
                    {primarySpace.shortLabel}
                  </span>
                  <h3 className="mt-3 mb-4 font-sans text-[1.5rem] text-ivory md:text-[2.25rem] lg:text-[3rem]">
                    {primarySpace.name}
                  </h3>
                  <div className="mb-4 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.24em] font-sans">
                    <p className="text-gold-light">{primarySpace.capacity}</p>
                    <p className="text-ivory/70">{primarySpace.capability}</p>
                  </div>
                  <p className="mb-3 max-w-3xl text-sm text-ivory/74 font-sans md:text-base">
                    {primarySpace.description}
                  </p>
                  <p className="max-w-3xl text-xs text-ivory/58 font-sans md:text-sm">
                    {primarySpace.supportingFact}
                  </p>
                  <span className="editorial-link mt-5 text-gold-light group-hover:text-gold">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            variants={fadeUpVariants}
            className="card-panel p-6 md:p-8"
          >
            <span className="pill-label mb-3 border-gold/30 text-gold">
              Divided Ballroom
            </span>
            <h3 className="mb-4 font-sans text-[1.5rem] text-foreground md:text-[1.875rem]">
              Ibiza Grand Ballroom
              <span className="block text-base md:text-lg text-muted-foreground mt-2 font-sans tracking-normal">
                Configured as Ibiza A / Ibiza B
              </span>
            </h3>
            <div className="grid gap-4">
              {configurationSpaces.map((space) => (
                <div key={space.name} className="rounded-[1.45rem] border border-border/50 bg-background p-5">
                  <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h4 className="font-sans text-xl text-foreground">{space.name}</h4>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-gold-light font-sans">
                      {space.capacity}
                    </span>
                  </div>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold font-sans">
                    {space.capability}
                  </p>
                  <p className="mb-2 text-sm text-muted-foreground font-sans">
                    {space.description}
                  </p>
                  <p className="text-xs text-muted-foreground/85 font-sans">
                    {space.supportingFact}
                  </p>
                  <Link
                    to={`/spaces/${space.slug}`}
                    className="editorial-link mt-4"
                  >
                    View Details
                  </Link>
                </div>
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
                <div className="relative h-[28rem] md:h-[32rem]">
                  <img
                    src={intimateSpace.image}
                    alt={intimateSpace.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10 group-hover:from-charcoal/95 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <span className="pill-label mb-3 border-gold/30 text-gold">
                      {intimateSpace.shortLabel}
                    </span>
                    <h3 className="mt-3 mb-4 font-sans text-[1.5rem] text-ivory md:text-[1.875rem] lg:text-[2.25rem]">
                      {intimateSpace.name}
                    </h3>
                    <div className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.24em] font-sans">
                      <p className="text-gold-light">{intimateSpace.capacity}</p>
                      <p className="text-ivory/70">{intimateSpace.capability}</p>
                    </div>
                    <p className="mb-3 max-w-md text-sm text-ivory/72 transition-colors duration-300 group-hover:text-ivory/90 font-sans">
                      {intimateSpace.description}
                    </p>
                    <p className="max-w-md text-xs text-ivory/55 font-sans sm:text-sm">
                      {intimateSpace.supportingFact}
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
      </AnimatedSection>

      <AnimatedSection bg="secondary" topGradientFrom="background">
        <SectionHeading
          eyebrow="Why Palacio"
          title="What Sets Us Apart"
          description="Every element of the Palacio experience is designed to exceed expectations."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={<feature.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </AnimatedSection>

      <SiteCtaSection
        eyebrow="Let's Begin"
        title="Plan Your Event With Us"
        description="Our dedicated team is ready to bring your vision to life. Start the conversation today."
        buttonLabel="Request a Quote"
        buttonTo="/contact"
      />

      <Footer />
    </div>
  );
};

export default About;
