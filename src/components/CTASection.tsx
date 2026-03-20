import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation, fadeUpVariants, staggerContainer } from "@/hooks/useScrollAnimation";
import { SectionHeading } from "@/components/ui/design-system";

const CTASection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(40 45% 60%) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="container-luxury text-center relative z-10"
      >
        <SectionHeading
          eyebrow="Get Started"
          title="Plan Your Perfect Event Today"
          description="Let our team help you create a seamless and memorable experience."
          light
        />
        <motion.div variants={fadeUpVariants}>
          <Link to="/contact">
            <Button variant="gold" size="xl" className="shadow-glow-gold">
              Request a Quote
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
