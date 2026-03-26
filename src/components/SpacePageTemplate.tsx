import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import {
  AnimatedSection,
  EditorialHero,
  SectionHeading,
  SiteCtaSection,
  StatCard,
} from "@/components/ui/design-system";
import { VenueSpace } from "@/data/spaces";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { Building2, Layers3, MoveRight, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { buildServiceSchema } from "@/lib/seo";

interface SpacePageTemplateProps {
  space: VenueSpace;
  relatedSpaces: VenueSpace[];
  seo: {
    title: string;
    description: string;
  };
  heroTitle?: string;
}

const factIcons = [Users, Layers3, Building2, Sparkles];

const SpacePageTemplate = ({ space, relatedSpaces, seo, heroTitle }: SpacePageTemplateProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seo.title}
        description={seo.description}
        pathname={location.pathname}
        image={space.image}
        schema={buildServiceSchema({
          name: space.name,
          description: seo.description,
          pathname: location.pathname,
          image: space.image,
        })}
      />
      <Navbar />

      <EditorialHero
        eyebrow={space.shortLabel}
        title={heroTitle ?? space.name}
        description={space.description}
        image={space.image}
        alt={space.alt}
      />

      <AnimatedSection bg="background" topDivider>
        <SectionHeading
          eyebrow="Quick Facts"
          title="At a Glance"
          description="Key space details curated for fast venue review."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {space.quickFacts.map((fact, index) => {
            const Icon = factIcons[index % factIcons.length];

            return (
              <StatCard
                key={fact.label}
                icon={<Icon className="w-7 h-7 text-gold" strokeWidth={1.5} />}
                value={fact.value}
                label={fact.label}
              />
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection bg="secondary" topGradientFrom="background">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Space Overview"
              title={`Inside ${space.name}`}
              description={space.overview}
              align="left"
              className="mb-10"
            />
            {space.relationshipNote && (
              <motion.div variants={fadeUpVariants} className="rounded-[1.75rem] border border-gold/20 bg-gold/5 p-6 md:p-8">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-3 font-sans">
                  Ballroom Relationship
                </p>
                <p className="text-muted-foreground text-base font-sans">
                  {space.relationshipNote}
                </p>
              </motion.div>
            )}
          </div>

          <motion.div variants={fadeUpVariants} className="card-panel overflow-hidden">
            <div className="relative h-[22rem] sm:h-[24rem]">
              <img src={space.image} alt={space.alt} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/94 via-charcoal/44 to-charcoal/10" />
              <div className="absolute inset-y-0 left-0 w-[78%] bg-gradient-to-r from-charcoal/72 via-charcoal/34 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="hero-kicker mb-3 text-[11px] uppercase tracking-[0.28em] font-sans">
                  {space.capacity}
                </p>
                <h2 className="hero-display-text mb-2 font-sans text-[1.875rem] sm:text-[2.25rem]">
                  {space.name}
                </h2>
                <p className="hero-supporting-text text-sm font-sans sm:text-base">
                  {space.capability}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {space.galleryImages.length > 0 && (
        <AnimatedSection bg="background" topGradientFrom="secondary">
          <SectionHeading
            eyebrow="Space Photos"
            title={`A Closer Look at ${space.name}`}
            description="Additional venue views to help visitors review the layout and atmosphere more easily."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {space.galleryImages.map((image) => (
              <motion.div
                key={image.alt}
                variants={fadeUpVariants}
                className="card-panel overflow-hidden"
              >
                <div className="relative h-64 sm:h-72">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection bg="background" topGradientFrom="secondary">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Highlights"
              title="What Defines This Space"
              align="left"
              className="mb-8"
            />
            <div className="grid gap-4">
              {space.highlights.map((highlight) => (
                <motion.div
                  key={highlight}
                  variants={fadeUpVariants}
                  className="card-panel rounded-2xl px-5 py-4 text-muted-foreground font-sans"
                >
                  {highlight}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Ideal For"
              title="Events This Space Supports Beautifully"
              align="left"
              className="mb-8"
            />
            <div className="flex flex-wrap gap-3">
              {space.idealFor.map((useCase) => (
                <motion.span
                  key={useCase}
                  variants={fadeUpVariants}
                  className="inline-flex min-h-11 items-center rounded-full border border-gold/20 bg-gold/5 px-5 py-3 text-sm text-foreground font-sans"
                >
                  {useCase}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {relatedSpaces.length > 0 && (
        <AnimatedSection bg="secondary" topGradientFrom="background">
          <SectionHeading
            eyebrow="Related Spaces"
            title="Explore the Rest of the Venue"
            description="Review the connected spaces within Palacio while keeping the venue hierarchy clear."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedSpaces.map((relatedSpace) => (
              <motion.div
                key={relatedSpace.slug}
                variants={fadeUpVariants}
                className="card-panel overflow-hidden"
              >
                <div className="relative h-60">
                  <img
                    src={relatedSpace.image}
                    alt={relatedSpace.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/42 to-charcoal/8" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="hero-kicker mb-2 text-[10px] uppercase tracking-[0.25em] font-sans">
                      {relatedSpace.shortLabel}
                    </p>
                    <h3 className="hero-display-text font-sans text-2xl">
                      {relatedSpace.name}
                    </h3>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="mb-3 flex flex-wrap gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.22em] font-sans">
                    <p className="text-gold">{relatedSpace.capacity}</p>
                    <p className="text-muted-foreground">{relatedSpace.eventScale}</p>
                  </div>
                  <p className="mb-5 text-sm text-muted-foreground font-sans">
                    {relatedSpace.description}
                  </p>
                  <Link
                    to={`/spaces/${relatedSpace.slug}`}
                    className="editorial-link gap-2"
                  >
                    View Details
                    <MoveRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      )}

      <SiteCtaSection
        eyebrow="Plan With Palacio"
        title="Book a Tour or Start Your Event Conversation"
        description="See the space in person, review layout possibilities, and let our team help you choose the setting that best fits your guest count and event style."
        buttonLabel="Book Consultation"
        buttonTo="/contact"
      />

      <Footer />
    </div>
  );
};

export default SpacePageTemplate;
