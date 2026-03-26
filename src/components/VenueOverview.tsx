import { Users, Maximize, ArrowUp, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, SectionHeading, StatCard } from "@/components/ui/design-system";

const stats = [
  { icon: Users, value: "Up to 900", label: "Guests" },
  { icon: Maximize, value: "30,000", label: "Sq. Ft." },
  { icon: ArrowUp, value: "23 Ft", label: "Ceilings" },
  { icon: MapPin, value: "Prime", label: "Mississauga Location" },
];

const VenueOverview = () => {
  return (
    <AnimatedSection id="about" bg="background" topDivider>
      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] xl:gap-16">
        <div>
          <SectionHeading
            eyebrow="Venue Credibility"
            title="A Venue Designed to Feel Grand From the First Arrival"
            description="Situated in the heart of Mississauga, Palacio Event Centre combines elegant interiors, strong operational flexibility, and a polished guest experience that scales beautifully across celebration types."
            align="left"
          />
          <motion.div variants={fadeUpVariants} className="max-w-xl space-y-5 text-base text-muted-foreground font-sans sm:text-lg">
            <p>
              From statement weddings to executive galas, the venue is designed to carry atmosphere, movement, and service with ease.
            </p>
            <p>
              Soaring ceilings, generous square footage, and versatile space planning make Palacio an ideal canvas for events that need both presence and precision.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-5 md:gap-6">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              icon={<stat.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default VenueOverview;
