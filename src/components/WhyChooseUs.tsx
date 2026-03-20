import { Sparkles, LayoutGrid, UtensilsCrossed, Building2, MapPin, Heart } from "lucide-react";
import { AnimatedSection, SectionHeading, FeatureCard } from "@/components/ui/design-system";

const features = [
  { icon: Sparkles, title: "Elegant Interiors", description: "Crystal chandeliers, refined finishes, and a sophisticated ambiance throughout." },
  { icon: LayoutGrid, title: "Flexible Layouts", description: "Customizable floor plans that adapt to your event size and style." },
  { icon: UtensilsCrossed, title: "Diverse Menu Options", description: "A wide range of culinary traditions to suit every palate and occasion." },
  { icon: Building2, title: "Professional Environment", description: "Dedicated event coordination to ensure a seamless, stress-free experience." },
  { icon: MapPin, title: "Convenient Location", description: "Easy access in Mississauga with ample parking for all your guests." },
  { icon: Heart, title: "Guest-Friendly Experience", description: "Thoughtful amenities and attentive service that keep guests comfortable." },
];

const WhyChooseUs = () => {
  return (
    <AnimatedSection bg="secondary" topGradientFrom="background">
      <SectionHeading
        eyebrow="Why Us"
        title="Why Choose Palacio"
        description="Every detail is designed to exceed your expectations."
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
  );
};

export default WhyChooseUs;
