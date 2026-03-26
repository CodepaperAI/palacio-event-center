import ibizaGrandBallroomImg from "@/assets/Website Content/IMG_3666.jpg";
import weddingCeremonyImg from "@/assets/Website Content/IMG_1955.jpg";
import floralStageImg from "@/assets/Website Content/IMG_2245.jpg";
import ibizaASetupImg from "@/assets/Website Content/20221027_150416_Original.jpg";
import venueExteriorNightImg from "@/assets/Website Content/IMG_0719 (1).jpg";
import foyerInteriorImg from "@/assets/Website Content/IMG_3670.jpg";
import corporateGalaImg from "@/assets/Website Content/IMG_3306.jpg";
import venueWallDetailImg from "@/assets/Website Content/Palacio-15.jpg";
import privateEventBlackLinenImg from "@/assets/Website Content/unnamed (1).jpg";
import venueCeilingWideImg from "@/assets/Website Content/PHOTO-2026-02-02-08-07-06.jpg";
import venueCeilingRoundImg from "@/assets/Website Content/PHOTO-2026-02-02-08-07-06 (1).jpg";
import venueCeilingWalkthroughImg from "@/assets/Website Content/PHOTO-2026-02-02-08-07-05.jpg";
import venueCeilingCornerImg from "@/assets/Website Content/PHOTO-2026-02-02-08-07-05 (1).jpg";
import lobbyWaveCeilingImg from "@/assets/Website Content/PHOTO-2026-01-19-11-54-29.jpg";
import lobbyGrandPianoImg from "@/assets/Website Content/PHOTO-2026-01-19-11-54-29 (1).jpg";
import lobbyMirrorWallImg from "@/assets/Website Content/PHOTO-2026-01-19-11-54-29 (2).jpg";
import lobbyCorridorImg from "@/assets/Website Content/PHOTO-2026-01-19-11-54-28.jpg";
import diningPlatedImg1 from "@/assets/Website Content/IMG_4360.jpeg";
import diningPlatedImg2 from "@/assets/Website Content/IMG_4362.jpeg";
import diningPlatedImg3 from "@/assets/Website Content/IMG_4363.jpeg";
import diningPlatedImg4 from "@/assets/Website Content/IMG_4364.jpeg";
import diningPlatedImg5 from "@/assets/Website Content/IMG_4365.jpeg";
import venueGalleryVideo from "@/assets/Website Content/DAD1E64F-D521-4AAB-8320-8CD7AF21CCA1.MP4";
import weddingGalleryVideo from "@/assets/Website Content/IMG_1959.mov";
import corporateGalleryVideo from "@/assets/Website Content/IMG_3668.mov";
import privateEventsGalleryVideo from "@/assets/Website Content/IMG_2047.mov";
import diningGalleryVideo from "@/assets/Website Content/IMG_2457.mov";

export interface GalleryImageItem {
  src: string;
  alt: string;
  category: "Venue" | "Weddings" | "Corporate" | "Private Events" | "Dining";
  type?: "image" | "video";
  poster?: string;
}

export const galleryImages: GalleryImageItem[] = [
  {
    src: ibizaGrandBallroomImg,
    alt: "Wide ballroom celebration setup inside Palacio Event Centre",
    category: "Venue",
  },
  {
    src: floralStageImg,
    alt: "Elegant floral table arrangement at Palacio Event Centre",
    category: "Venue",
  },
  {
    src: foyerInteriorImg,
    alt: "Front foyer interior at Palacio Event Centre with reflective flooring and statement lighting",
    category: "Venue",
  },
  {
    src: venueWallDetailImg,
    alt: "Warm wood and lighting detail inside Palacio Event Centre",
    category: "Venue",
  },
  {
    src: venueCeilingWideImg,
    alt: "Open ballroom view with sculptural ceiling lighting at Palacio Event Centre",
    category: "Venue",
  },
  {
    src: venueCeilingRoundImg,
    alt: "Round table arrangement beneath sculptural ceiling lighting at Palacio Event Centre",
    category: "Venue",
  },
  {
    src: venueCeilingWalkthroughImg,
    alt: "Modern ballroom floor layout with illuminated wall detailing at Palacio Event Centre",
    category: "Venue",
  },
  {
    src: venueCeilingCornerImg,
    alt: "Corner ballroom view highlighting ceiling lighting and room scale at Palacio Event Centre",
    category: "Venue",
  },
  {
    src: lobbyWaveCeilingImg,
    alt: "Bright foyer lounge with wave-style chandeliers inside Palacio Event Centre",
    category: "Venue",
  },
  {
    src: lobbyGrandPianoImg,
    alt: "Foyer view with lounge seating and grand piano inside Palacio Event Centre",
    category: "Venue",
  },
  {
    src: lobbyMirrorWallImg,
    alt: "Mirror wall and chandelier detail in the Palacio Event Centre foyer",
    category: "Venue",
  },
  {
    src: lobbyCorridorImg,
    alt: "Polished corridor view inside Palacio Event Centre with reflective flooring",
    category: "Venue",
  },
  {
    src: venueExteriorNightImg,
    alt: "Night exterior view of Palacio Event Centre in Mississauga",
    category: "Venue",
  },
  {
    src: weddingCeremonyImg,
    alt: "Floral wedding ceremony and reception aisle setup at Palacio Event Centre",
    category: "Weddings",
  },
  {
    src: floralStageImg,
    alt: "White floral wedding stage and sweetheart table detail at Palacio Event Centre",
    category: "Weddings",
  },
  {
    src: corporateGalaImg,
    alt: "Corporate gala-style room setup with black linens and statement stage decor at Palacio Event Centre",
    category: "Corporate",
  },
  {
    src: ibizaASetupImg,
    alt: "Refined round-table setup inside Palacio Event Centre suited to business and formal events",
    category: "Corporate",
  },
  {
    src: venueCeilingRoundImg,
    alt: "Ballroom floor layout ready for conferences and corporate banquets at Palacio Event Centre",
    category: "Corporate",
  },
  {
    src: privateEventBlackLinenImg,
    alt: "Private celebration setup with black linens and candlelit decor at Palacio Event Centre",
    category: "Private Events",
  },
  {
    src: ibizaGrandBallroomImg,
    alt: "Statement social event setup with immersive decor inside Palacio Event Centre",
    category: "Private Events",
  },
  {
    src: corporateGalaImg,
    alt: "Formal private gala setup with dramatic florals at Palacio Event Centre",
    category: "Private Events",
  },
  {
    src: ibizaASetupImg,
    alt: "Intimate private celebration dining setup inside Palacio Event Centre",
    category: "Private Events",
  },
  {
    src: venueGalleryVideo,
    alt: "Venue walkthrough video inside Palacio Event Centre showcasing room scale and lighting",
    category: "Venue",
    type: "video",
    poster: ibizaGrandBallroomImg,
  },
  {
    src: weddingGalleryVideo,
    alt: "Wedding celebration video from Palacio Event Centre with ceremony and reception atmosphere",
    category: "Weddings",
    type: "video",
    poster: weddingCeremonyImg,
  },
  {
    src: corporateGalleryVideo,
    alt: "Corporate event video inside Palacio Event Centre showing ballroom setup and event flow",
    category: "Corporate",
    type: "video",
    poster: corporateGalaImg,
  },
  {
    src: privateEventsGalleryVideo,
    alt: "Private event celebration video inside Palacio Event Centre with social atmosphere and room styling",
    category: "Private Events",
    type: "video",
    poster: privateEventBlackLinenImg,
  },
  {
    src: diningGalleryVideo,
    alt: "Dining and catering video at Palacio Event Centre highlighting food presentation and service",
    category: "Dining",
    type: "video",
    poster: corporateGalaImg,
  },
  {
    src: diningPlatedImg1,
    alt: "Elegantly plated fine dining appetizer at Palacio Event Centre",
    category: "Dining",
  },
  {
    src: diningPlatedImg2,
    alt: "Chef-crafted main course presentation at Palacio Event Centre",
    category: "Dining",
  },
  {
    src: diningPlatedImg3,
    alt: "Gourmet plated dessert with artistic presentation at Palacio Event Centre",
    category: "Dining",
  },
  {
    src: diningPlatedImg4,
    alt: "Signature dish presentation at Palacio Event Centre",
    category: "Dining",
  },
  {
    src: diningPlatedImg5,
    alt: "Beautifully presented multi-course meal at Palacio Event Centre",
    category: "Dining",
  },
];

export const galleryCategories = ["All", "Venue", "Weddings", "Corporate", "Private Events", "Dining"];

export const featuredGalleryImages: GalleryImageItem[] = [
  galleryImages[0],
  galleryImages[4],
  galleryImages[8],
  galleryImages[10],
  galleryImages[14],
  galleryImages[1],
  galleryImages[3],
  galleryImages[2],
  galleryImages[21],
];

