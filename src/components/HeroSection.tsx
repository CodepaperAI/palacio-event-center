import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-ballroom.jpg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt="Palacio Event Centre grand ballroom with crystal chandeliers and elegant table settings"
          className="w-full h-full object-cover"
          style={{ transform: `scale(1.1) translateY(${scrollY * 0.12}px)` }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/50 to-charcoal/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/20 via-transparent to-charcoal/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-8 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-gold-light text-[11px] sm:text-xs font-sans tracking-[0.4em] uppercase mb-8"
        >
          Featuring IBIZA – Grand Ballroom & ARRIBA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-ivory font-medium leading-[1.08] mb-8"
        >
          Create Unforgettable
          <br />
          <span className="text-gold-light">Events</span> in Mississauga
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-ivory/60 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light font-sans"
        >
          Host weddings, corporate functions, and social celebrations in a refined venue designed for elegance and flexibility.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/contact">
            <Button variant="gold" size="xl" className="rounded-full px-12 text-base shadow-glow-gold">
              Request a Quote
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="ivoryOutline" size="xl" className="rounded-full px-12 text-base">
              Explore Our Spaces
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-9 border border-ivory/20 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            className="w-0.5 h-2 bg-ivory/40 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
