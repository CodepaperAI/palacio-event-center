import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import {
  AnimatedSection,
  IconBox,
  SectionHeading,
} from "@/components/ui/design-system";
import InquiryForm from "@/components/InquiryForm";

const contactItems = [
  { icon: MapPin, label: "Address", value: "3410 Semenyk Ct, Mississauga, ON L5C 4P8" },
  { icon: Phone, label: "Phone", value: "905-949-0555", href: "tel:905-949-0555" },
  { icon: Mail, label: "Email", value: "Sales@Palacioeventcentre.com", href: "mailto:Sales@Palacioeventcentre.com" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

const ContactForm = () => {
  return (
    <AnimatedSection id="contact" bg="background" topDivider>
      <SectionHeading
        eyebrow="Contact"
        title="Begin the Conversation"
        description="Share the event vision, guest count, and timing. We'll help shape the next step quickly and clearly."
      />

      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <motion.div variants={fadeUpVariants} className="lg:col-span-3">
          <div className="card-panel p-6 sm:p-8 md:p-9">
            <InquiryForm source="homepage" submitLabel="Send Inquiry" />
          </div>
        </motion.div>

        <motion.div variants={fadeUpVariants} className="lg:col-span-2">
          <div className="card-panel p-8 md:p-10">
            <h3 className="mb-8 font-sans text-[1.9rem] text-foreground">Contact Information</h3>
            <div className="space-y-6">
              {contactItems.map((item) => (
                <div key={item.label} className="group flex gap-4">
                  <IconBox size="sm">
                    <item.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  </IconBox>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground font-sans">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-foreground transition-colors hover:text-gold font-sans">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground font-sans">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ContactForm;
