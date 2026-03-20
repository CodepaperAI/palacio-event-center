import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Maximize, ArrowUp, MapPin, Sparkles, LayoutGrid, UtensilsCrossed, Building2, Heart } from "lucide-react";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import {
  AnimatedSection,
  SectionHeading,
  StatCard,
  FeatureCard,
} from "@/components/ui/design-system";
import heroBg from "@/assets/hero-ballroom.jpg";
import ibizaImg from "@/assets/ibiza-ballroom.jpg";
import arribaImg from "@/assets/arriba-room.jpg";

/* ─── Data ──────────────────────────────────────────────────── */
const stats = [
  { icon: Users, value: "Up to 900", label: "Guests" },
  { icon: Maximize, value: "30,000", label: "Sq. Ft." },
  { icon: ArrowUp, value: "23 Ft", label: "Ceilings" },
  { icon: MapPin, value: "Prime", label: "Mississauga Location" },
];

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

const features = [
  { icon: Sparkles, title: "Elegant Interiors", description: "Crystal chandeliers, refined finishes, and a sophisticated ambiance throughout every space." },
  { icon: LayoutGrid, title: "Flexible Layouts", description: "Customizable floor plans that adapt seamlessly to your event size, theme, and style." },
  { icon: UtensilsCrossed, title: "Diverse Menu Options", description: "A wide range of culinary traditions curated to suit every palate and occasion." },
  { icon: Building2, title: "Professional Coordination", description: "Dedicated event coordinators ensure a seamless, stress-free experience from start to finish." },
  { icon: MapPin, title: "Convenient Location", description: "Centrally located in Mississauga with easy highway access and ample guest parking." },
  { icon: Heart, title: "Guest-Friendly Experience", description: "Thoughtful amenities and attentive service that keep every guest comfortable and engaged." },
];

/* ─── Page ──────────────────────────────────────────────────── */
const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero Banner ───────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Palacio Event Centre grand ballroom interior"
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
            Mississauga's Premier Luxury Venue
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-medium leading-[1.1]"
          >
            About Palacio Event Centre
          </motion.h1>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────── */}
      <AnimatedSection bg="background" topDivider>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            eyebrow="Our Story"
            title="Where Elegance Meets Flexibility"
          />
          <motion.div variants={fadeUpVariants} className="space-y-6 text-muted-foreground text-lg leading-relaxed font-sans -mt-10">
            <p>
              Located in the heart of Mississauga, Ontario, Palacio Event Centre has established
              itself as the region's most distinguished luxury event venue. Our 30,000 square-foot
              facility features soaring 23-foot ceilings, grand crystal chandeliers, and
              meticulously designed interiors that create an atmosphere of timeless sophistication.
            </p>
            <p>
              From intimate gatherings to grand celebrations hosting up to 900 guests, our
              versatile spaces adapt seamlessly to every vision. Whether you're planning an
              elegant wedding, a milestone celebration, or a prestigious corporate function,
              our dedicated team ensures every detail is executed with precision and care.
            </p>
            <p>
              With diverse culinary offerings spanning South Asian, European, Middle Eastern,
              Caribbean, and more, we bring your event to life with flavours as memorable
              as the occasion itself.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── Venue Highlights (Stats) ──────────────────────── */}
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

      {/* ── Event Spaces ──────────────────────────────────── */}
      <AnimatedSection bg="background" topGradientFrom="secondary">
        <SectionHeading
          eyebrow="Our Spaces"
          title="Two Distinctive Event Spaces"
          description="Each crafted to create the perfect ambiance for your occasion."
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

      {/* ── Why Choose Us ─────────────────────────────────── */}
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

      {/* ── CTA ───────────────────────────────────────────── */}
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
            <p className="eyebrow">Let's Begin</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory mb-8">
              Plan Your Event With Us
            </h2>
            <p className="text-ivory/60 text-lg max-w-xl mx-auto mb-12 leading-relaxed font-sans">
              Our dedicated team is ready to bring your vision to life. Start the conversation today.
            </p>
            <a href="/#contact">
              <Button variant="gold" size="xl" className="shadow-glow-gold">
                Request a Quote
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
