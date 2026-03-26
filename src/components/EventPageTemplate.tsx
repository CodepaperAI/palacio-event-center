import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import {
  AnimatedSection,
  FeatureCard,
  PageHero,
  SectionHeading,
  SiteCtaSection,
} from "@/components/ui/design-system";
import arribaImg from "@/assets/Website Content/Palacio-20.jpg";
import ibizaImg from "@/assets/Website Content/IMG_3666.jpg";

export interface EventPageData {
  seo: {
    title: string;
    description: string;
    schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  };
  title: string;
  eyebrow: string;
  heroImage: string;
  heroAlt: string;
  intro: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  benefits: {
    eyebrow: string;
    heading: string;
    description: string;
    items: { icon: LucideIcon; title: string; description: string }[];
  };
  experience: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    highlights: string[];
  };
  cta: {
    eyebrow: string;
    heading: string;
    description: string;
  };
}

const spaces = [
  {
    name: "Ibiza Grand Ballroom",
    description:
      "The flagship ballroom for large-scale weddings, galas, and polished corporate occasions with scale, ceiling height, and visual presence.",
    capacity: "Up to 900 Guests",
    image: ibizaImg,
    alt: "Ibiza Grand Ballroom dressed for a premium event at Palacio Event Centre",
    href: "/spaces/ibiza-grand-ballroom",
  },
  {
    name: "Arriba",
    description:
      "An intimate second-floor setting for private dinners, boardroom-style gatherings, and smaller celebrations with a more personal atmosphere.",
    capacity: "Up to 140 Guests",
    image: arribaImg,
    alt: "Arriba second-floor event room with natural light and blue table styling at Palacio Event Centre",
    href: "/spaces/arriba",
  },
];

const EventPageTemplate = ({ data }: { data: EventPageData }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <SEO
        title={data.seo.title}
        description={data.seo.description}
        pathname={location.pathname}
        image={data.heroImage}
        schema={data.seo.schema}
      />
      <Navbar />

      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        image={data.heroImage}
        alt={data.heroAlt}
        align="center"
      />

      <AnimatedSection bg="background" topDivider>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading eyebrow={data.intro.eyebrow} title={data.intro.heading} />
          <motion.div variants={fadeUpVariants} className="space-y-6 text-base text-muted-foreground font-sans sm:text-lg">
            {data.intro.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection bg="secondary" topGradientFrom="background">
        <SectionHeading
          eyebrow={data.benefits.eyebrow}
          title={data.benefits.heading}
          description={data.benefits.description}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {data.benefits.items.map((item) => (
            <FeatureCard
              key={item.title}
              icon={<item.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection bg="background" topGradientFrom="secondary">
        <SectionHeading
          eyebrow="Our Spaces"
          title="Spaces That Support the Event Experience"
          description="Ibiza Grand Ballroom anchors Palacio for large-scale occasions, while Arriba offers a more intimate alternative when the guest count or mood calls for something smaller."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {spaces.map((space) => (
            <motion.div key={space.name} variants={fadeUpVariants}>
              <Link
                to={space.href}
                className="group block overflow-hidden rounded-[1.9rem] shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                <div className="relative h-[26rem] md:h-[31rem]">
                  <img
                    src={space.image}
                    alt={space.alt}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/38 to-charcoal/10 transition-all duration-500 group-hover:from-charcoal/95" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                    <span className="pill-label border-gold/30 text-gold">{space.capacity}</span>
                    <h3 className="mt-4 mb-3 font-sans text-[2rem] text-ivory md:text-[2.5rem]">
                      {space.name}
                    </h3>
                    <p className="max-w-md text-sm text-ivory/74 transition-colors duration-300 group-hover:text-ivory/88 font-sans">
                      {space.description}
                    </p>
                    <span className="editorial-link mt-5 text-gold-light group-hover:text-gold">
                      View Space
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection bg="secondary" topGradientFrom="background">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow={data.experience.eyebrow} title={data.experience.heading} />
          <motion.div variants={fadeUpVariants} className="space-y-6 text-center text-base text-muted-foreground font-sans sm:text-lg">
            {data.experience.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
          {data.experience.highlights.length > 0 && (
            <motion.div variants={fadeUpVariants} className="mt-10 grid gap-4 sm:grid-cols-2">
              {data.experience.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="card-panel flex items-center gap-3 px-5 py-4 text-muted-foreground"
                >
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                  <span className="text-sm font-sans">{highlight}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </AnimatedSection>

      <SiteCtaSection
        eyebrow={data.cta.eyebrow}
        title={data.cta.heading}
        description={data.cta.description}
        buttonLabel="Request a Quote"
        buttonTo="/contact"
      />

      <Footer />
    </div>
  );
};

export default EventPageTemplate;
