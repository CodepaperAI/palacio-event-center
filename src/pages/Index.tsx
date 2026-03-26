import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VenueOverview from "@/components/VenueOverview";
import EventTypes from "@/components/EventTypes";
import VenueSpaces from "@/components/VenueSpaces";
import MenusPreview from "@/components/MenusPreview";
import GalleryPreview from "@/components/GalleryPreview";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroBg from "@/assets/Website Content/IMG_3666.jpg";
import { buildLocalBusinessSchema } from "@/lib/seo";

const Index = () => {
  const description =
    "Luxury event venue and banquet hall in Mississauga for weddings, corporate events, and private celebrations.";

  return (
    <div className="min-h-screen">
      <SEO
        title="Event Venue Mississauga | Palacio Event Centre"
        description={description}
        pathname="/"
        image={heroBg}
        schema={buildLocalBusinessSchema(description, heroBg)}
      />
      <Navbar />
      <HeroSection />
      <VenueSpaces />
      <MenusPreview />
      <GalleryPreview />
      <EventTypes />
      <VenueOverview />
      <CTASection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
