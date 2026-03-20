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
      <div className="max-w-3xl mx-auto text-center mb-20">
        <SectionHeading
          eyebrow="About the Venue"
          title="A Venue Designed for Memorable Celebrations"
          description="Situated in the heart of Mississauga, Palacio Event Centre combines elegant interiors with versatile, flexible spaces that adapt to your vision. Whether you're planning an intimate gathering or a grand celebration for hundreds, our 30,000 sq. ft. venue with soaring 23-foot ceilings provides the ideal canvas for any occasion."
        />
      </div>

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
  );
};

export default VenueOverview;
