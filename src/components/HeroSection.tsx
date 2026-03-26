import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";
import heroPoster from "@/assets/Website Content/IMG_3666.jpg";
import weddingsHero from "@/assets/Website Content/IMG_1955.jpg";
import foyerHero from "@/assets/Website Content/IMG_3670.jpg";
import ibizaHero from "@/assets/Website Content/20221027_150416_Original.jpg";
import ballroomHero from "@/assets/Website Content/IMG_3306.jpg";
import wallDetailHero from "@/assets/Website Content/Palacio-15.jpg";
import { MediaHero } from "@/components/ui/design-system";

const phoneNumber = "905-949-0555";
const HERO_STILL_DURATION_MS = 5000;
const HERO_CROSSFADE_SECONDS = 1.2;

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/palacioeventcentre",
  facebook: "https://www.facebook.com/palacioeventcentre",
  email: "mailto:sales@palacioeventcentre.com",
};

type HeroMediaItem = {
  src: string;
  label: string;
  durationMs?: number;
};

const heroMedia: HeroMediaItem[] = [
  {
    src: heroPoster,
    label: "Ibiza Grand Ballroom reception setup",
    durationMs: HERO_STILL_DURATION_MS,
  },
  {
    src: weddingsHero,
    label: "Wedding ceremony runway at Palacio Event Centre",
    durationMs: HERO_STILL_DURATION_MS,
  },
  {
    src: wallDetailHero,
    label: "Elegant wall detail at Palacio Event Centre",
    durationMs: HERO_STILL_DURATION_MS,
  },
  {
    src: foyerHero,
    label: "Palacio Event Centre foyer and chandelier interior",
    durationMs: HERO_STILL_DURATION_MS,
  },
  {
    src: ballroomHero,
    label: "Palacio ballroom floral event setup",
    durationMs: HERO_STILL_DURATION_MS,
  },
  {
    src: ibizaHero,
    label: "Ibiza ballroom event configuration",
    durationMs: HERO_STILL_DURATION_MS,
  },
];

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
};

const HeroMediaRotator = ({ scrollY }: { scrollY: number }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const nextItem = heroMedia[(activeIndex + 1) % heroMedia.length];
    const image = new Image();
    image.src = nextItem.src;
  }, [activeIndex, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const activeItem = heroMedia[activeIndex];
    const timeoutId = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % heroMedia.length);
    }, activeItem.durationMs ?? HERO_STILL_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, prefersReducedMotion]);

  const activeItem = heroMedia[activeIndex];
  const motionStyle = {
    transform: `scale(1.1) translateY(${scrollY * 0.06}px)`,
  };

  return (
    <div className="h-full w-full">
      <AnimatePresence mode="sync">
        <motion.div
          key={activeItem.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: HERO_CROSSFADE_SECONDS, ease: "linear" }}
        >
          <motion.img
            src={activeItem.src}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            style={motionStyle}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            loading={activeItem.src === heroPoster ? "eager" : "lazy"}
            fetchPriority={activeItem.src === heroPoster ? "high" : "auto"}
            decoding="async"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MediaHero
      variant="home"
      align="left"
      media={<HeroMediaRotator scrollY={scrollY} />}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.7 }}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <Link to="/contact">
          <Button variant="gold" size="xl" className="w-full sm:w-auto">
            Book Consultation
          </Button>
        </Link>
        <Link to="/#spaces">
          <Button variant="ivoryOutline" size="xl" className="w-full sm:w-auto">
            Explore Spaces
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="mt-5 pl-1"
      >
        <a
          href={`tel:${phoneNumber}`}
          className="hero-meta-text inline-flex items-center gap-2 text-sm transition-colors duration-300 hover:text-gold-light font-sans sm:text-base"
        >
          <span className="hero-meta-text-soft">Call us directly:</span>
          <span>{phoneNumber}</span>
        </a>
      </motion.div>

      {/* Social Links - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.7 }}
        className="mt-4 pl-1 flex items-center gap-4"
      >
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ivory/70 transition-colors duration-300 hover:text-gold"
          aria-label="Follow us on Instagram"
        >
          <Instagram size={20} strokeWidth={1.5} />
        </a>
        <a
          href={SOCIAL_LINKS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ivory/70 transition-colors duration-300 hover:text-gold"
          aria-label="Follow us on Facebook"
        >
          <Facebook size={20} strokeWidth={1.5} />
        </a>
        <a
          href={SOCIAL_LINKS.email}
          className="text-ivory/70 transition-colors duration-300 hover:text-gold"
          aria-label="Send us an email"
        >
          <Mail size={20} strokeWidth={1.5} />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-ivory/20 p-1.5">
          <motion.div
            className="h-2 w-0.5 rounded-full bg-ivory/40"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </MediaHero>
  );
};

export default HeroSection;
