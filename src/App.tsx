import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Weddings from "./pages/Weddings.tsx";
import SocialEvents from "./pages/SocialEvents.tsx";
import CorporateEvents from "./pages/CorporateEvents.tsx";
import Menus from "./pages/Menus.tsx";
import SouthAsianMenu from "./pages/menus/SouthAsian.tsx";
import PakistaniHalalMenu from "./pages/menus/PakistaniHalal.tsx";
import EuropeanMenu from "./pages/menus/European.tsx";
import MiddleEasternMenu from "./pages/menus/MiddleEastern.tsx";
import GujaratiMenu from "./pages/menus/Gujarati.tsx";
import CaribbeanMenu from "./pages/menus/Caribbean.tsx";
import BarPackagesMenu from "./pages/menus/BarPackages.tsx";
import OutsideCateringMenu from "./pages/menus/OutsideCatering.tsx";
import HolidayPromMenu from "./pages/menus/HolidayProm.tsx";
import Gallery from "./pages/Gallery.tsx";
import Blog from "./pages/Blog.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/social-events" element={<SocialEvents />} />
          <Route path="/corporate-events" element={<CorporateEvents />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/menus/south-asian" element={<SouthAsianMenu />} />
          <Route path="/menus/pakistani-halal" element={<PakistaniHalalMenu />} />
          <Route path="/menus/european" element={<EuropeanMenu />} />
          <Route path="/menus/middle-eastern" element={<MiddleEasternMenu />} />
          <Route path="/menus/gujarati" element={<GujaratiMenu />} />
          <Route path="/menus/caribbean" element={<CaribbeanMenu />} />
          <Route path="/menus/bar-packages" element={<BarPackagesMenu />} />
          <Route path="/menus/outside-catering" element={<OutsideCateringMenu />} />
          <Route path="/menus/holiday-prom" element={<HolidayPromMenu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
