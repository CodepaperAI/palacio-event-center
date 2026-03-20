import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, SectionHeading, LuxuryCard, IconBox } from "@/components/ui/design-system";
import { Link } from "react-router-dom";
import { Utensils, Wine, Globe, Flame, Leaf, Palmtree, GlassWater, ChefHat, PartyPopper } from "lucide-react";

const menuCategories = [
  { name: "South Asian", icon: Flame, href: "/menus/south-asian" },
  { name: "Pakistani Halal", icon: Utensils, href: "/menus/pakistani-halal" },
  { name: "European", icon: Globe, href: "/menus/european" },
  { name: "Middle Eastern", icon: ChefHat, href: "/menus/middle-eastern" },
  { name: "Gujarati", icon: Leaf, href: "/menus/gujarati" },
  { name: "Caribbean", icon: Palmtree, href: "/menus/caribbean" },
  { name: "Bar Packages", icon: Wine, href: "/menus/bar-packages" },
  { name: "Outside Catering", icon: GlassWater, href: "/menus/outside-catering" },
  { name: "Holiday / Prom", icon: PartyPopper, href: "/menus/holiday-prom" },
];

const MenusPreview = () => {
  return (
    <AnimatedSection id="menus" bg="background" topGradientFrom="secondary">
      <SectionHeading
        eyebrow="Catering"
        title="Menus for Every Celebration"
        description="From traditional cuisines to contemporary bar packages, we cater to every taste."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
        {menuCategories.map((category) => (
          <Link key={category.name} to={category.href}>
            <LuxuryCard className="group p-6 md:p-8 text-center relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-gold/0 transition-all duration-500" />
              <div className="relative">
                <IconBox size="sm" className="mx-auto mb-4">
                  <category.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </IconBox>
                <span className="font-serif text-base lg:text-lg text-foreground group-hover:text-gold transition-colors duration-300">
                  {category.name}
                </span>
              </div>
            </LuxuryCard>
          </Link>
        ))}
      </div>

      <motion.div variants={fadeUpVariants} className="text-center mt-12">
        <Link to="/menus">
          <span className="inline-flex items-center text-gold text-xs tracking-[0.2em] uppercase font-semibold font-sans hover:tracking-[0.3em] transition-all duration-300">
            View All Menus
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link>
      </motion.div>
    </AnimatedSection>
  );
};

export default MenusPreview;
