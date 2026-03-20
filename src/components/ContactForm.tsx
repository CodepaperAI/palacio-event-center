import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, SectionHeading, IconBox, FormInput, FormSelect, FormTextarea } from "@/components/ui/design-system";

const eventTypes = ["Wedding", "Social Event", "Corporate Event", "Birthday / Anniversary", "Other"];

const contactItems = [
  { icon: MapPin, label: "Address", value: "3410 Semenyk Ct, Mississauga, ON L5C 4P8" },
  { icon: Phone, label: "Phone", value: "905-949-0555", href: "tel:905-949-0555" },
  { icon: Mail, label: "Email", value: "Sales@Palacioeventcentre.com", href: "mailto:Sales@Palacioeventcentre.com" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", eventType: "", guestCount: "", eventDate: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <AnimatedSection id="contact" bg="background" topDivider>
      <SectionHeading
        eyebrow="Contact"
        title="Get in Touch"
        description="Ready to start planning? Reach out and we'll get back to you promptly."
      />

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Form */}
        <motion.div variants={fadeUpVariants} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <FormInput name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              <FormInput type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <FormInput type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
              <FormSelect name="eventType" value={formData.eventType} onChange={handleChange} required>
                <option value="">Event Type</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </FormSelect>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <FormInput type="number" name="guestCount" placeholder="Estimated Guest Count" value={formData.guestCount} onChange={handleChange} />
              <FormInput type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
            </div>
            <FormTextarea name="message" placeholder="Tell us about your event..." rows={5} value={formData.message} onChange={handleChange} />
            <Button variant="gold" size="lg" type="submit" className="w-full sm:w-auto">
              Send Inquiry
            </Button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={fadeUpVariants} className="lg:col-span-2">
          <div className="p-8 md:p-10 rounded-2xl bg-card border border-border/50">
            <h3 className="font-serif text-2xl text-foreground mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactItems.map((item) => (
                <div key={item.label} className="flex gap-4 group">
                  <IconBox size="sm">
                    <item.icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </IconBox>
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1 font-sans">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-foreground hover:text-gold transition-colors font-sans">{item.value}</a>
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
