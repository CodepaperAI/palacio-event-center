import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, SectionHeading, IconBox, FormInput, FormSelect, FormTextarea } from "@/components/ui/design-system";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import heroImg from "@/assets/hero-ballroom.jpg";

const eventTypes = ["Wedding", "Social Event", "Corporate Event", "Birthday / Anniversary", "Other"];

const contactItems = [
  { icon: MapPin, label: "Address", value: "3410 Semenyk Ct, Mississauga, ON L5C 4P8" },
  { icon: Phone, label: "Phone", value: "905-949-0555", href: "tel:905-949-0555" },
  { icon: Mail, label: "Email", value: "Sales@Palacioeventcentre.com", href: "mailto:Sales@Palacioeventcentre.com" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 10 AM – 8 PM" },
];

const Contact = () => {
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
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Palacio Event Centre Grand Ballroom" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/60 to-charcoal/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-charcoal/30" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-gold-light text-sm sm:text-base font-sans tracking-[0.35em] uppercase mb-6"
          >
            We'd Love to Hear From You
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-medium leading-[1.1]"
          >
            Get in Touch
          </motion.h1>
        </div>
      </section>

      {/* Contact Info Cards */}
      <AnimatedSection bg="background" topDivider>
        <SectionHeading
          eyebrow="Reach Us"
          title="Contact Information"
          description="Visit our venue, call us directly, or send us a message — we're here to help."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUpVariants}
              className="group rounded-2xl bg-card border border-border/50 p-6 md:p-8 text-center hover:border-gold/20 hover:shadow-soft transition-all duration-300"
            >
              <IconBox className="mx-auto mb-4"><item.icon className="w-5 h-5 text-gold" strokeWidth={1.5} /></IconBox>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-2">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-foreground font-sans text-sm hover:text-gold transition-colors duration-300">
                  {item.value}
                </a>
              ) : (
                <p className="text-foreground font-sans text-sm">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Form Section */}
      <AnimatedSection bg="secondary" topGradientFrom="background">
        <SectionHeading
          eyebrow="Inquiry"
          title="Send Us a Message"
          description="Fill out the form below and our team will respond within 24 hours."
        />
        <div className="max-w-3xl mx-auto">
          <motion.form variants={fadeUpVariants} onSubmit={handleSubmit} className="space-y-5">
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
            <div className="text-center pt-2">
              <Button variant="gold" size="xl" type="submit" className="shadow-glow-gold">
                Submit Inquiry
              </Button>
            </div>
          </motion.form>
        </div>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection bg="background" topGradientFrom="secondary">
        <SectionHeading eyebrow="Location" title="Find Us" />
        <motion.div variants={fadeUpVariants} className="rounded-2xl overflow-hidden border border-border/50 -mt-6">
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

      {/* CTA */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(40 45% 60%) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-luxury text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">Prefer to Call?</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory mb-8">
              Speak With Our Team
            </h2>
            <p className="text-ivory/60 text-lg max-w-xl mx-auto mb-12 leading-relaxed font-sans">
              Our event specialists are available to answer questions and help you plan your perfect event.
            </p>
            <a href="tel:905-949-0555">
              <Button variant="gold" size="xl" className="shadow-glow-gold">
                Call 905-949-0555
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
