import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, SectionHeading } from "@/components/ui/design-system";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────── */
export interface MenuItem {
  name: string;
  description?: string;
}

export interface MenuSection {
  title: string;
  icon?: LucideIcon;
  items: MenuItem[];
}

export interface MenuPageData {
  title: string;
  eyebrow: string;
  heroImage: string;
  heroAlt: string;
  intro: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  sections: MenuSection[];
  note?: string;
  cta: {
    eyebrow: string;
    heading: string;
    description: string;
  };
}

/* ─── Template ──────────────────────────────────────────────── */
const MenuPageTemplate = ({ data }: { data: MenuPageData }) => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.heroImage} alt={data.heroAlt} className="w-full h-full object-cover" />
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

      {/* ── Intro ─────────────────────────────────────── */}
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

      {/* ── Menu Sections ─────────────────────────────── */}
      {data.sections.map((section, sIdx) => (
        <AnimatedSection
          key={section.title}
          bg={sIdx % 2 === 0 ? "secondary" : "background"}
          topGradientFrom={sIdx % 2 === 0 ? "background" : "secondary"}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              {section.icon && (
                <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
              )}
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">{section.title}</h2>
            </div>

            <div className="grid gap-4">
              {section.items.map((item) => (
                <motion.div
                  key={item.name}
                  variants={fadeUpVariants}
                  className="group flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-card border border-border/50 hover:border-gold/20 hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg text-foreground group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed font-sans mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      ))}

      {/* ── Note ──────────────────────────────────────── */}
      {data.note && (
        <AnimatedSection bg={data.sections.length % 2 === 0 ? "secondary" : "background"}>
          <motion.div variants={fadeUpVariants} className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-sm leading-relaxed font-sans italic border border-border/50 rounded-2xl p-6 bg-card">
              {data.note}
            </p>
          </motion.div>
        </AnimatedSection>
      )}

      {/* ── CTA ───────────────────────────────────────── */}
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

export default MenuPageTemplate;
