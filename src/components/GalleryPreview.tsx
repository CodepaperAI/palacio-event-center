import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, SectionHeading, GalleryImage } from "@/components/ui/design-system";
import { Link } from "react-router-dom";
import { featuredGalleryImages } from "@/data/gallery";

const GalleryPreview = () => {
  return (
    <AnimatedSection id="gallery" bg="secondary" topGradientFrom="background">
      <div className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr] xl:gap-14">
        <div>
          <SectionHeading
            eyebrow="Gallery"
            title="A Visual Preview of the Palacio Experience"
            description="Spaces, details, lighting, and atmosphere come together here before your guests ever walk through the door."
            align="left"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {featuredGalleryImages.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              className={index === 0 ? "col-span-2 md:col-span-2 aspect-[1.5/1]" : "aspect-[0.9/1.05]"}
            />
          ))}
        </div>
      </div>

      <motion.div variants={fadeUpVariants} className="mt-10 text-center">
        <Link to="/gallery">
          <span className="editorial-link text-xs tracking-[0.2em] hover:tracking-[0.24em]">
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
