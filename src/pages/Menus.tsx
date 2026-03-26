import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import {
  AnimatedSection,
  PageHero,
  SectionHeading,
  SiteCtaSection,
} from "@/components/ui/design-system";
import heroImg from "@/assets/Website Content/20221027_150416_Original.jpg";
import { menuCollections } from "@/data/menuCollections";

const Menus = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Event Catering Menus | Palacio Event Centre Mississauga"
        description="Explore event catering menus at Palacio Event Centre in Mississauga, including South Asian, European, Caribbean, and specialty services."
        pathname="/menus"
        image={heroImg}
      />
      <Navbar />

      <PageHero
        eyebrow="Culinary Excellence"
        title="Menus for Every Celebration"
        image={heroImg}
        alt="Elegantly plated cuisine at Palacio Event Centre in Mississauga"
        align="center"
      />

      <AnimatedSection bg="background" topDivider>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading eyebrow="Our Menus" title="A World of Flavour, Curated for You" />
          <motion.div variants={fadeUpVariants} className="space-y-6 text-base text-muted-foreground font-sans sm:text-lg">
            <p>
              Browse our official menu PDFs below. Click on any menu to view the full details,
              cuisine options, and pricing in a new tab.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection bg="secondary" topGradientFrom="background">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menuCollections.map((collection) => (
            <motion.a
              key={collection.slug}
              href={collection.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUpVariants}
              className="card-panel group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-elegant sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                <collection.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
              </div>
              <h2 className="mb-3 font-sans text-lg font-medium text-foreground sm:text-xl">
                {collection.title} Menu
              </h2>
              <p className="mb-6 text-sm text-muted-foreground font-sans line-clamp-2">
                {collection.description}
              </p>
              <div className="mt-auto flex items-center gap-2 text-sm font-medium text-gold">
                <span>View Menu PDF</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </AnimatedSection>

      <SiteCtaSection
        eyebrow="Let's Talk Menus"
        title="Ready to Curate Your Menu?"
        description="Our culinary team is ready to shape a dining experience that fits your event style, guest mix, and service flow."
        buttonLabel="Request a Tasting"
        buttonTo="/contact"
      />

      <Footer />
    </div>
  );
};

export default Menus;