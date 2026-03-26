import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, SectionHeading, LuxuryCard, IconBox } from "@/components/ui/design-system";
import { menuCollections } from "@/data/menuCollections";

const MenusPreview = () => {
  return (
    <AnimatedSection id="menus" bg="background" topGradientFrom="secondary">
      <SectionHeading
        eyebrow="Cuisine & Services"
        title="Curated Menus that Support the Venue Experience"
        description="Cuisine remains an important Palacio differentiator, presented here as a supporting layer to the venue itself."
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-5">
        {menuCollections.map((category) => (
          <a
            key={category.title}
            href={category.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuxuryCard className="group relative h-full overflow-hidden p-6 text-center md:p-8">
              <div className="absolute inset-0 bg-gradient-to-b from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-gold/0 transition-all duration-500" />
              <div className="relative">
                <IconBox size="sm" className="mx-auto mb-4">
                  <category.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </IconBox>
                <span className="font-sans text-[1.12rem] text-foreground transition-colors duration-300 group-hover:text-gold lg:text-[1.2rem]">
                  {category.title}
                </span>
              </div>
            </LuxuryCard>
          </a>
        ))}
      </div>

      <motion.div variants={fadeUpVariants} className="mt-10 text-center">
        <a href="/menus" className="editorial-link text-xs tracking-[0.2em] hover:tracking-[0.24em]">
          View All Menus
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </AnimatedSection>
  );
};

export default MenusPreview;
