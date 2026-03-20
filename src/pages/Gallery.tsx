import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, SectionHeading } from "@/components/ui/design-system";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

import heroImg from "@/assets/hero-ballroom.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import ibizaImg from "@/assets/ibiza-ballroom.jpg";
import arribaImg from "@/assets/arriba-room.jpg";
import weddingImg from "@/assets/wedding-event.jpg";
import socialImg from "@/assets/social-event.jpg";
import corporateImg from "@/assets/corporate-event.jpg";
import menusImg from "@/assets/menus-preview.jpg";

const images = [
  { src: ibizaImg, alt: "IBIZA Grand Ballroom with crystal chandeliers", category: "Venue" },
  { src: weddingImg, alt: "Luxury wedding ceremony at Palacio", category: "Weddings" },
  { src: gallery1, alt: "Elegant event setup at Palacio", category: "Events" },
  { src: arribaImg, alt: "ARRIBA intimate dining room", category: "Venue" },
  { src: corporateImg, alt: "Corporate gala in the Grand Ballroom", category: "Corporate" },
  { src: gallery2, alt: "Beautifully decorated reception hall", category: "Events" },
  { src: menusImg, alt: "Premium cuisine presentation", category: "Dining" },
  { src: socialImg, alt: "Social celebration at Palacio", category: "Events" },
  { src: gallery3, alt: "Grand chandelier and ceiling detail", category: "Venue" },
  { src: gallery4, alt: "Table setting with floral centrepiece", category: "Weddings" },
  { src: gallery5, alt: "Evening event ambiance with warm lighting", category: "Events" },
  { src: gallery6, alt: "Venue exterior and entrance", category: "Venue" },
];

const categories = ["All", "Venue", "Weddings", "Events", "Corporate", "Dining"];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? images : images.filter((img) => img.category === activeFilter);

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
            Visual Showcase
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-medium leading-[1.1]"
          >
            Our Gallery
          </motion.h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <AnimatedSection bg="background" topDivider>
        <SectionHeading
          eyebrow="Explore"
          title="A Glimpse Into Palacio"
          description="Browse our venue, events, and dining to envision your celebration."
        />

        {/* Filters */}
        <motion.div variants={fadeUpVariants} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase font-semibold font-sans border transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-gold text-charcoal border-gold"
                  : "bg-transparent text-muted-foreground border-border/50 hover:border-gold/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
                onClick={() => setLightboxIndex(images.indexOf(img))}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <span className="inline-block text-gold text-xs tracking-[0.25em] uppercase font-semibold border border-gold/30 rounded-full px-3 py-1 font-sans mb-2">
                      {img.category}
                    </span>
                    <p className="text-ivory text-sm font-sans leading-relaxed">{img.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatedSection>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-ivory/60 hover:text-ivory transition-colors"
              onClick={() => setLightboxIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Nav arrows */}
            <button
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center text-ivory transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + images.length) % images.length); }}
            >
              ‹
            </button>
            <button
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center text-ivory transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % images.length); }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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
            <p className="eyebrow">Inspired?</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory mb-8">
              See Yourself Here
            </h2>
            <p className="text-ivory/60 text-lg max-w-xl mx-auto mb-12 leading-relaxed font-sans">
              Ready to host your celebration at Palacio? Get in touch and let's make it happen.
            </p>
            <Link to="/#contact">
              <Button variant="gold" size="xl" className="shadow-glow-gold">
                Request a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
