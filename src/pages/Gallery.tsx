import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, PageHero, SectionHeading, SiteCtaSection } from "@/components/ui/design-system";
import { galleryCategories, galleryImages } from "@/data/gallery";
import heroImg from "@/assets/Website Content/IMG_3666.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  useEffect(() => {
    if (lightboxIndex !== null && lightboxIndex >= filtered.length) {
      setLightboxIndex(filtered.length > 0 ? 0 : null);
    }
  }, [filtered.length, lightboxIndex]);

  const activeLightboxItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div className="min-h-screen">
      <SEO
        title="Gallery | Palacio Event Centre Mississauga"
        description="Browse photos of Palacio Event Centre in Mississauga, including weddings, corporate events, venue details, and elegant event setups."
        pathname="/gallery"
        image={galleryImages[0].src}
      />
      <Navbar />

      <PageHero
        eyebrow="Visual Showcase"
        title="Our Gallery"
        image={heroImg}
        alt="Grand ballroom showcase at Palacio Event Centre in Mississauga prepared for a luxury celebration"
        align="center"
      />

      <AnimatedSection bg="background" topDivider>
        <SectionHeading
          eyebrow="Explore"
          title="A Glimpse Into Palacio"
          description="Browse a curated mix of ballroom views, intimate setups, event styling, and dining details from Palacio."
        />

        <motion.div variants={fadeUpVariants} className="mb-12 flex flex-wrap justify-center gap-3">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] font-sans transition-all duration-300 ${
                activeFilter === cat
                  ? "border-gold bg-gold text-charcoal"
                  : "border-border/50 bg-transparent text-muted-foreground hover:border-gold/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, index) => (
              <motion.div
                key={`${img.src}-${img.alt}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => setLightboxIndex(index)}
              >
                {img.type === "video" ? (
                  <video
                    src={img.src}
                    poster={img.poster}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/40" />
                {img.type === "video" && (
                  <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-ivory/20 bg-charcoal/55 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory">
                    <Play className="h-3.5 w-3.5 fill-current" />
                    Video
                  </div>
                )}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div>
                    <span className="mb-2 inline-block rounded-full border border-gold/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-gold font-sans">
                      {img.category}
                    </span>
                    <p className="text-sm text-ivory font-sans">{img.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatedSection>

      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute right-6 top-6 text-ivory/60 transition-colors hover:text-ivory"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close gallery image"
            >
              <X className="h-8 w-8" />
            </button>

            {activeLightboxItem.type === "video" ? (
              <motion.video
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                src={activeLightboxItem.src}
                poster={activeLightboxItem.poster}
                className="max-h-[85vh] max-w-full rounded-2xl object-contain"
                controls
                autoPlay
                playsInline
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                src={activeLightboxItem.src}
                alt={activeLightboxItem.alt}
                className="max-h-[85vh] max-w-full rounded-2xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            )}

            <button
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/20 sm:left-8"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
              }}
              aria-label="Previous gallery image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/20 sm:right-8"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % filtered.length);
              }}
              aria-label="Next gallery image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <SiteCtaSection
        eyebrow="Inspired?"
        title="See Yourself Here"
        description="Ready to host your celebration at Palacio? Get in touch and let's make it happen."
        buttonLabel="Request a Quote"
        buttonTo="/contact"
      />

      <Footer />
    </div>
  );
};

export default Gallery;
