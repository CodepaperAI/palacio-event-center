import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, SectionHeading } from "@/components/ui/design-system";
import { Link, useNavigate } from "react-router-dom";
import {
  UtensilsCrossed,
  Leaf,
  Globe,
  Lamp,
  Salad,
  Wine,
  Truck,
  PartyPopper,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/menus-preview.jpg";

/* ─── Menu category data ────────────────────────────────────── */
const categories = [
  { title: "South Asian", href: "/menus/south-asian", description: "Rich, aromatic dishes spanning traditional Indian, Bangladeshi, and Sri Lankan culinary traditions — crafted with authentic spices and refined presentation.", icon: UtensilsCrossed },
  { title: "Pakistani Halal", href: "/menus/pakistani-halal", description: "Certified Halal cuisine featuring bold Pakistani flavours — from succulent kebabs and biryanis to decadent desserts prepared with care and authenticity.", icon: Leaf },
  { title: "European", href: "/menus/european", description: "Classic Continental elegance — from French-inspired canapés to Italian pastas and British roasts, bringing timeless sophistication to your event.", icon: Globe },
  { title: "Middle Eastern", href: "/menus/middle-eastern", description: "Vibrant mezze platters, tender grilled meats, and fragrant rice dishes that capture the warmth and generosity of Middle Eastern hospitality.", icon: Lamp },
  { title: "Gujarati", href: "/menus/gujarati", description: "Authentic vegetarian specialities celebrating the rich culinary heritage of Gujarat — colourful, flavourful, and beautifully presented.", icon: Salad },
  { title: "Caribbean", href: "/menus/caribbean", description: "Bold, sun-kissed flavours — jerk-spiced proteins, tropical sides, and vibrant sauces that bring island energy to every celebration.", icon: Sparkles },
  { title: "Bar Packages", href: "/menus/bar-packages", description: "Curated beverage programs from premium open bars to bespoke cocktail menus — expertly paired with your event theme and cuisine.", icon: Wine },
  { title: "Outside Catering", href: "/menus/outside-catering", description: "Bring the Palacio culinary experience to any venue. Full-service off-site catering with the same quality and presentation you expect.", icon: Truck },
  { title: "Holiday & Prom", href: "/menus/holiday-prom", description: "Seasonal and celebration-specific packages for proms, holiday galas, and festive gatherings — designed to impress from first course to last.", icon: PartyPopper },
];

/* ─── Page Component ────────────────────────────────────────── */
const Menus = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Elegantly plated cuisine at Palacio Event Centre"
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
            Culinary Excellence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-medium leading-[1.1]"
          >
            Menus for Every Celebration
          </motion.h1>
        </div>
      </section>

      {/* ── Intro ───────────────────────────────────────── */}
      <AnimatedSection bg="background" topDivider>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            eyebrow="Our Menus"
            title="A World of Flavour, Curated for You"
          />
          <motion.div
            variants={fadeUpVariants}
            className="space-y-6 text-muted-foreground text-lg leading-relaxed font-sans -mt-10"
          >
            <p>
              At Palacio Event Centre, dining is never an afterthought — it's a
              centrepiece. Our culinary team crafts menus spanning global
              traditions, ensuring every palate is honoured and every course
              leaves a lasting impression.
            </p>
            <p>
              Whether your celebration calls for authentic South Asian feasts,
              refined European plating, or vibrant Caribbean energy, our chefs
              deliver with precision, passion, and elegance.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── Menu Categories Grid ────────────────────────── */}
      <AnimatedSection bg="secondary" topGradientFrom="background">
        <SectionHeading
          eyebrow="Explore"
          title="Our Menu Collections"
          description="Nine curated culinary experiences — each designed to elevate your event with world-class flavour and presentation."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <Link key={cat.title} to={cat.href}>
              <motion.div
                variants={fadeUpVariants}
                className="group relative rounded-2xl bg-card border border-border/50 p-8 md:p-10 transition-all duration-500 hover:shadow-elegant hover:border-gold/20 hover:-translate-y-1 h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <cat.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{cat.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans mb-6">{cat.description}</p>
                <span className="inline-flex items-center text-gold text-xs tracking-[0.2em] uppercase font-semibold font-sans group-hover:tracking-[0.3em] transition-all duration-300">
                  Explore Menu
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(40 45% 60%) 1px, transparent 0)",
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
            <p className="eyebrow">Let's Talk Menus</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory mb-8">
              Ready to Curate Your Menu?
            </h2>
            <p className="text-ivory/60 text-lg max-w-xl mx-auto mb-12 leading-relaxed font-sans">
              Our culinary team is ready to craft a bespoke dining experience for
              your event. Reach out to start the conversation.
            </p>
            <Link to="/#contact">
              <Button variant="gold" size="xl" className="shadow-glow-gold">
                Request a Tasting
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menus;
