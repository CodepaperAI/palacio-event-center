import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, SectionHeading, GalleryImage } from "@/components/ui/design-system";
import { Link } from "react-router-dom";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Elegant table setting with floral centerpiece", tall: true },
  { src: gallery2, alt: "Crystal chandelier in luxury ballroom", tall: false },
  { src: gallery3, alt: "Wedding reception dance floor", tall: false },
  { src: gallery4, alt: "Fine dining plated cuisine", tall: false },
  { src: gallery5, alt: "Grand staircase and lobby entrance", tall: false },
  { src: gallery6, alt: "White rose arrangement on event table", tall: true },
];

const GalleryPreview = () => {
  return (
    <AnimatedSection id="gallery" bg="secondary" topGradientFrom="background">
      <SectionHeading
        eyebrow="Gallery"
        title="A Glimpse Into the Experience"
        description="See the elegance that awaits your next event."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((image, index) => (
          <GalleryImage
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.tall ? "row-span-2 aspect-[3/4]" : "aspect-square"}
          />
        ))}
      </div>

      <motion.div variants={fadeUpVariants} className="text-center mt-12">
        <Link to="/gallery">
          <span className="inline-flex items-center text-gold text-xs tracking-[0.2em] uppercase font-semibold font-sans hover:tracking-[0.3em] transition-all duration-300">
            View Full Gallery
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link>
      </motion.div>
    </AnimatedSection>
  );
};

export default GalleryPreview;
