import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import {
  AnimatedSection,
  PageHero,
  SectionHeading,
  SiteCtaSection,
} from "@/components/ui/design-system";
import { getMenuCollectionBySlug } from "@/data/menuCollections";
import { buildServiceSchema } from "@/lib/seo";

export interface MenuPageData {
  seo?: {
    title?: string;
    description?: string;
  };
  slug: string;
  title: string;
  eyebrow: string;
  heroImage: string;
  heroAlt: string;
  viewer?: {
    eyebrow?: string;
    heading?: string;
    description?: string;
  };
  cta?: {
    eyebrow?: string;
    heading?: string;
    description?: string;
  };
}

const MenuPageTemplate = ({ data }: { data: MenuPageData }) => {
  const location = useLocation();
  const activeCollection = getMenuCollectionBySlug(data.slug);
  const title = data.seo?.title ?? `${data.title} | Palacio Event Centre`;
  const description =
    data.seo?.description ??
    `View the official ${data.title.toLowerCase()} PDF from Palacio Event Centre.`;

  const viewerEyebrow = data.viewer?.eyebrow ?? "Official Menu";
  const viewerHeading = data.viewer?.heading ?? `View the ${data.title} PDF`;
  const viewerDescription =
    data.viewer?.description ??
    "This page shows the official Palacio menu PDF so guests can review the real package content directly.";

  const ctaEyebrow = data.cta?.eyebrow ?? "Need Help Choosing?";
  const ctaHeading = data.cta?.heading ?? `Let's Plan Your ${data.title}`;
  const ctaDescription =
    data.cta?.description ??
    "Talk with our team about guest count, service style, and the right menu fit for your event.";

  return (
    <div className="min-h-screen">
      <SEO
        title={title}
        description={description}
        pathname={location.pathname}
        image={data.heroImage}
        schema={buildServiceSchema({
          name: data.title,
          description,
          pathname: location.pathname,
          image: data.heroImage,
        })}
      />
      <Navbar />

      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        image={data.heroImage}
        alt={data.heroAlt}
        align="center"
      />

      <AnimatedSection bg="background" topDivider>
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow={viewerEyebrow}
              title={viewerHeading}
              description={viewerDescription}
            />
          </div>

          <motion.div
            variants={fadeUpVariants}
            className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {activeCollection?.pdfUrl && (
              <>
                <Button asChild variant="gold" size="lg">
                  <a href={activeCollection.pdfUrl} target="_blank" rel="noopener noreferrer">
                    Open PDF in New Tab
                  </a>
                </Button>
                <Button asChild variant="goldOutline" size="lg">
                  <a href={activeCollection.pdfUrl} target="_blank" rel="noopener noreferrer">
                    Download PDF
                  </a>
                </Button>
              </>
            )}
            <Button asChild variant="goldOutline" size="lg">
              <Link to="/contact">Ask About This Menu</Link>
            </Button>
          </motion.div>

          {activeCollection?.pdfUrl ? (
            <motion.div
              variants={fadeUpVariants}
              className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-elegant"
            >
              <iframe
                title={`${data.title} official PDF menu`}
                src={activeCollection.pdfUrl}
                className="h-[75vh] min-h-[900px] w-full bg-white"
                loading="lazy"
              />
              <div className="border-t border-border/50 bg-secondary/60 px-6 py-5 text-center text-sm text-muted-foreground font-sans">
                If the PDF does not display in your browser, use{" "}
                <a
                  href={activeCollection.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gold transition-colors hover:text-gold-dark"
                >
                  Open PDF in New Tab
                </a>{" "}
                or{" "}
                <a
                  href={activeCollection.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gold transition-colors hover:text-gold-dark"
                >
                  Download PDF
                </a>
                .
              </div>
            </motion.div>
          ) : (
            <motion.div
              variants={fadeUpVariants}
              className="mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-8 py-12 text-center shadow-soft"
            >
              <p className="text-base text-muted-foreground font-sans sm:text-lg">
                The official PDF is not available right now. Please contact our team and we will
                send the latest menu directly.
              </p>
              <div className="mt-6">
                <Button asChild variant="gold" size="lg">
                  <Link to="/contact">Request This Menu</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </AnimatedSection>

      <SiteCtaSection
        eyebrow={ctaEyebrow}
        title={ctaHeading}
        description={ctaDescription}
        buttonLabel="Request a Quote"
        buttonTo="/contact"
      />

      <Footer />
    </div>
  );
};

export default MenuPageTemplate;
