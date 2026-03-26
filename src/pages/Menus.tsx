import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import {
  AnimatedSection,
  PageHero,
  SectionHeading,
  SiteCtaSection,
} from "@/components/ui/design-system";
import { Link } from "react-router-dom";
import heroImg from "@/assets/Website Content/20221027_150416_Original.jpg";
import { menuCollections } from "@/data/menuCollections";

const Menus = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Event Catering Menus | Palacio Event Centre Mississauga"
        description="Explore event catering menus at Palacio Event Centre in Mississauga, including South Asian, European, Middle Eastern, Caribbean, and specialty services."
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
              Browse the official Palacio menu PDFs directly on-site so guests can review the real
              package details, cuisine options, and service offerings without relying on shortened
              summaries.
            </p>
            <p>
              Choose the menu collection that fits your event and view the full PDF right inside the
              website, with download and new-tab options available whenever you need them.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection bg="secondary" topGradientFrom="background">
        <SectionHeading
          eyebrow="Explore"
          title="Our Menu Collections"
          description="Open any collection to view the official Palacio menu PDF directly in the website."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {menuCollections.map((collection) => (
            <motion.div
              key={collection.slug}
              variants={fadeUpVariants}
              className="card-panel group relative flex h-full flex-col p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/20 hover:shadow-elegant md:p-10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                <collection.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
              </div>
              <h2 className="mb-3 font-sans text-xl text-foreground md:text-2xl">{collection.title}</h2>
              <p className="mb-8 flex-1 text-sm text-muted-foreground font-sans">{collection.description}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="gold" size="lg" className="sm:flex-1">
                  <Link to={collection.route}>View Official Menu</Link>
                </Button>
                <Button asChild variant="goldOutline" size="lg" className="sm:flex-1">
                  <a href={collection.pdfUrl} target="_blank" rel="noopener noreferrer">
                    Download PDF
                  </a>
                </Button>
              </div>
            </motion.div>
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
