import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import {
  AnimatedSection,
  IconBox,
  PageHero,
  SectionHeading,
} from "@/components/ui/design-system";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import heroImg from "@/assets/Website Content/Palacio-15.jpg";
import { buildLocalBusinessSchema } from "@/lib/seo";
import InquiryForm from "@/components/InquiryForm";

const contactItems = [
  { icon: MapPin, label: "Address", value: "3410 Semenyk Ct, Mississauga, ON L5C 4P8" },
  { icon: Phone, label: "Phone", value: "905-949-0555", href: "tel:905-949-0555" },
  { icon: Mail, label: "Email", value: "Sales@Palacioeventcentre.com", href: "mailto:Sales@Palacioeventcentre.com" },
  { icon: Clock, label: "Hours", value: "Mon-Sat: 10 AM - 8 PM" },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Palacio Event Centre | Event Venue Mississauga"
        description="Contact Palacio Event Centre, a luxury event venue in Mississauga, for weddings, corporate events, and private celebrations."
        pathname="/contact"
        image={heroImg}
        schema={buildLocalBusinessSchema(
          "Luxury event venue and banquet hall in Mississauga for weddings, corporate events, and private celebrations.",
          heroImg
        )}
      />
      <Navbar />

      <PageHero
        eyebrow="We'd Love to Hear From You"
        title="Event Venue in Mississauga - Contact Us"
        image={heroImg}
        alt="Exterior view of Palacio Event Centre in Mississauga at night"
        align="center"
      />

      <AnimatedSection bg="background" topDivider>
        <SectionHeading
          eyebrow="Reach Us"
          title="Contact Information"
          description="Visit our Mississauga venue, call us directly, or send us a message and our team will reply with the right next step."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUpVariants}
              className="card-panel group p-6 text-center transition-all duration-300 hover:border-gold/20 md:p-8"
            >
              <IconBox className="mx-auto mb-4">
                <item.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
              </IconBox>
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm text-foreground transition-colors duration-300 hover:text-gold font-sans"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-foreground font-sans">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection bg="secondary" topGradientFrom="background">
        <SectionHeading
          eyebrow="Inquiry"
          title="Send Us a Message"
          description="Share the event vision, guest count, and timing. Our team will help shape the next step quickly and clearly."
        />
        <div className="mx-auto max-w-3xl">
          <motion.div variants={fadeUpVariants} className="card-panel p-6 sm:p-8 md:p-9">
            <InquiryForm source="contact-page" submitLabel="Submit Inquiry" align="center" />
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection bg="background" topGradientFrom="secondary">
        <SectionHeading eyebrow="Location" title="Find Us" />
        <motion.div variants={fadeUpVariants} className="-mt-4 overflow-hidden rounded-[1.75rem] border border-border/50 shadow-soft">
          <iframe
            title="Palacio Event Centre Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.123456789!2d-79.6234567!3d43.5654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47a0a0a0a0a0%3A0x0!2s3410+Semenyk+Ct%2C+Mississauga%2C+ON+L5C+4P8!5e0!3m2!1sen!2sca!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Contact;
