import { SiteCtaSection } from "@/components/ui/design-system";

const CTASection = () => {
  return (
    <SiteCtaSection
      eyebrow="Consultation"
      title="Plan an Event that Feels Distinctly Yours"
      description="Our team will help you explore the right space, shape the guest experience, and bring the event together with clarity and elegance."
      buttonLabel="Request a Quote"
      buttonTo="/contact"
    />
  );
};

export default CTASection;
