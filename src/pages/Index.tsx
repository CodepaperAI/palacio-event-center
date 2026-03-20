import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VenueOverview from "@/components/VenueOverview";
import EventTypes from "@/components/EventTypes";
import VenueSpaces from "@/components/VenueSpaces";
import WhyChooseUs from "@/components/WhyChooseUs";
import MenusPreview from "@/components/MenusPreview";
import GalleryPreview from "@/components/GalleryPreview";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VenueOverview />
      <EventTypes />
      <VenueSpaces />
      <WhyChooseUs />
      <MenusPreview />
      <GalleryPreview />
      <CTASection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
