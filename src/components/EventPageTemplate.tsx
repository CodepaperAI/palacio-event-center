import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, SectionHeading, FeatureCard } from "@/components/ui/design-system";
import { Link } from "react-router-dom";
import ibizaImg from "@/assets/ibiza-ballroom.jpg";
import arribaImg from "@/assets/arriba-room.jpg";
import type { LucideIcon } from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────── */
export interface EventPageData {
  /** Page title shown in hero */
  title: string;
  /** Eyebrow label above hero title */
  eyebrow: string;
  /** Hero background image */
  heroImage: string;
  /** Hero image alt text */
  heroAlt: string;
  /** Intro section */
  intro: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  /** Why this venue benefits */
  benefits: {
    eyebrow: string;
    heading: string;
    description: string;
    items: { icon: LucideIcon; title: string; description: string }[];
  };
  /** Experience section */
  experience: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    highlights: string[];
  };
  /** CTA */
  cta: {
    eyebrow: string;
    heading: string;
    description: string;
  };
}

/* ─── Spaces Data (shared) ──────────────────────────────────── */
const spaces = [
  {
    name: "IBIZA – Grand Ballroom",
    description:
      "Our flagship space for large-scale, elegant events. With towering ceilings, grand crystal chandeliers, and a flexible floor plan, IBIZA accommodates up to 900 guests in breathtaking style.",
    capacity: "Up to 900 Guests",
    image: ibizaImg,
    alt: "IBIZA Grand Ballroom with crystal chandeliers and soaring ceilings",
  },
  {
    name: "ARRIBA",
    description:
      "An intimate and refined setting for private celebrations, corporate dinners, and exclusive gatherings. ARRIBA offers warmth and sophistication in a more personal atmosphere.",
    capacity: "Intimate Events",
    image: arribaImg,
    alt: "ARRIBA intimate private dining room with elegant decor",
  },
];

/* ─── Template Component ────────────────────────────────────── */
const EventPageTemplate = ({ data }: { data: EventPageData }) => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.heroImage}
            alt={data.heroAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/60 to-charcoal/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-charcoal/30" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-gold-light text-sm sm:text-base font-sans tracking-[0.35em] uppercase mb-6"
          >
            {data.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-medium leading-[1.1]"
          >
            {data.title}
          </motion.h1>
        </div>
      </section>

      {/* ── Intro ───────────────────────────────────────── */}
      <AnimatedSection bg="background" topDivider>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading eyebrow={data.intro.eyebrow} title={data.intro.heading} />
          <motion.div variants={fadeUpVariants} className="space-y-6 text-muted-foreground text-lg leading-relaxed font-sans -mt-10">
            {data.intro.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── Why This Venue ──────────────────────────────── */}
      <AnimatedSection bg="secondary" topGradientFrom="background">
        <SectionHeading
          eyebrow={data.benefits.eyebrow}
          title={data.benefits.heading}
          description={data.benefits.description}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.benefits.items.map((item) => (
            <FeatureCard
              key={item.title}
              icon={<item.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </AnimatedSection>

      {/* ── Event Spaces ────────────────────────────────── */}
      <AnimatedSection bg="background" topGradientFrom="secondary">
        <SectionHeading
          eyebrow="Our Spaces"
          title="Spaces That Elevate Your Event"
          description="Choose from two distinctive venues, each designed for a different kind of occasion."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {spaces.map((space) => (
            <motion.div
              key={space.name}
              variants={fadeUpVariants}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="relative h-[28rem] md:h-[32rem]">
                <img
                  src={space.image}
                  alt={space.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10 group-hover:from-charcoal/95 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <span className="inline-block text-gold text-xs tracking-[0.25em] uppercase font-semibold mb-3 border border-gold/30 rounded-full px-4 py-1 font-sans">
                    {space.capacity}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-ivory mt-3 mb-4">
                    {space.name}
                  </h3>
                  <p className="text-ivory/70 text-sm leading-relaxed max-w-md group-hover:text-ivory/90 transition-colors duration-300 font-sans">
                    {space.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Experience ──────────────────────────────────── */}
      <AnimatedSection bg="secondary" topGradientFrom="background">
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow={data.experience.eyebrow} title={data.experience.heading} />
          <motion.div variants={fadeUpVariants} className="space-y-6 text-muted-foreground text-lg leading-relaxed font-sans -mt-10 text-center">
            {data.experience.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>
          {data.experience.highlights.length > 0 && (
            <motion.div variants={fadeUpVariants} className="mt-12 grid sm:grid-cols-2 gap-4">
              {data.experience.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 p-5 rounded-2xl bg-card border border-border/50">
                  <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-foreground text-sm font-sans">{h}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </AnimatedSection>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(40 45% 60%) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-luxury text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">{data.cta.eyebrow}</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory mb-8">
              {data.cta.heading}
            </h2>
            <p className="text-ivory/60 text-lg max-w-xl mx-auto mb-12 leading-relaxed font-sans">
              {data.cta.description}
            </p>
            <Link to="/#contact">
              <Button variant="gold" size="xl" className="shadow-glow-gold">
                Request a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventPageTemplate;
