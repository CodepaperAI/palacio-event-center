import ibizaGrandBallroomImg from "@/assets/Website Content/IMG_3666.jpg";
import weddingCeremonyImg from "@/assets/Website Content/IMG_1955.jpg";
import arribaRoomImg from "@/assets/Website Content/Palacio-20.jpg";
import ibizaASetupImg from "@/assets/Website Content/20221027_150416_Original.jpg";
import venueExteriorNightImg from "@/assets/Website Content/IMG_0719 (1).jpg";
import foyerInteriorImg from "@/assets/Website Content/IMG_3670.jpg";
import floralStageImg from "@/assets/Website Content/IMG_2245.jpg";
import corporateGalaImg from "@/assets/Website Content/IMG_3306.jpg";
import venueWallDetailImg from "@/assets/Website Content/Palacio-15.jpg";
import venueLobbyImg from "@/assets/Website Content/EP6_0001.JPG";
import privateEventBlackLinenImg from "@/assets/Website Content/unnamed (1).jpg";
import venueCeilingWideImg from "@/assets/Website Content/PHOTO-2026-02-02-08-07-06.jpg";
import venueCeilingRoundImg from "@/assets/Website Content/PHOTO-2026-02-02-08-07-06 (1).jpg";
import venueCeilingWalkthroughImg from "@/assets/Website Content/PHOTO-2026-02-02-08-07-05.jpg";
import venueCeilingCornerImg from "@/assets/Website Content/PHOTO-2026-02-02-08-07-05 (1).jpg";
import lobbyWaveCeilingImg from "@/assets/Website Content/PHOTO-2026-01-19-11-54-29.jpg";
import lobbyGrandPianoImg from "@/assets/Website Content/PHOTO-2026-01-19-11-54-29 (1).jpg";
import lobbyMirrorWallImg from "@/assets/Website Content/PHOTO-2026-01-19-11-54-29 (2).jpg";
import lobbyCorridorImg from "@/assets/Website Content/PHOTO-2026-01-19-11-54-28.jpg";
import bridalPortraitBlurImg from "@/assets/Website Content/Palacio-68.jpg";
import bridalPortraitPoseImg from "@/assets/Website Content/Palacio-70.jpg";
import bridalChandelierImg from "@/assets/Website Content/Palacio-71.jpg";
import bridalSpinImg from "@/assets/Website Content/Palacio-77.jpg";
import bridalMotionImg from "@/assets/Website Content/Palacio-79.jpg";
import bridalBarPortraitImg from "@/assets/Website Content/Palacio-82.jpg";
import bridalBarReclineImg from "@/assets/Website Content/Palacio-86.jpg";
import bridalReflectionPortraitImg from "@/assets/Website Content/Palacio-87.jpg";
import bridalTwirlImg from "@/assets/Website Content/Palacio-103.jpg";
import charcuterieTableImg from "@/assets/Website Content/IMG_4365.jpeg";
import grazingTableWideImg from "@/assets/Website Content/IMG_4364.jpeg";
import buffetDisplayImg from "@/assets/Website Content/IMG_4363.jpeg";
import grazingTableFrontImg from "@/assets/Website Content/IMG_4362.jpeg";
import cateringSpreadImg from "@/assets/Website Content/IMG_4360.jpeg";
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
    src: arribaRoomImg,
    alt: "Arriba second-floor event room with natural light and blue table styling",
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
    src: venueLobbyImg,
    alt: "Grand interior lobby at Palacio Event Centre with reflective floors and statement lighting",
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
    src: bridalPortraitBlurImg,
    alt: "Bride portrait beneath a chandelier with guests moving through the frame at Palacio Event Centre",
    category: "Weddings",
  },
  {
    src: bridalPortraitPoseImg,
    alt: "Bride portrait under crystal chandelier lighting at Palacio Event Centre",
    category: "Weddings",
  },
  {
    src: bridalChandelierImg,
    alt: "Bride dancing beneath a grand chandelier at Palacio Event Centre",
    category: "Weddings",
  },
  {
    src: bridalSpinImg,
    alt: "Bride in motion beneath chandelier lighting at Palacio Event Centre",
    category: "Weddings",
  },
  {
    src: bridalMotionImg,
    alt: "Wedding portrait with motion blur and chandelier detail at Palacio Event Centre",
    category: "Weddings",
  },
  {
    src: bridalBarPortraitImg,
    alt: "Bride portrait at the Palacio lounge bar with illuminated signage",
    category: "Weddings",
  },
  {
    src: bridalBarReclineImg,
    alt: "Bride portrait posed at the Palacio bar with neon-lit backdrop",
    category: "Weddings",
  },
  {
    src: bridalReflectionPortraitImg,
    alt: "Bride portrait with reflected lighting and warm wall detail at Palacio Event Centre",
    category: "Weddings",
  },
  {
    src: bridalTwirlImg,
    alt: "Bride twirling beneath chandelier lighting at Palacio Event Centre",
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
    src: charcuterieTableImg,
    alt: "Charcuterie and grazing display prepared for guests at Palacio Event Centre",
    category: "Dining",
  },
  {
    src: grazingTableWideImg,
    alt: "Wide grazing table display with cheeses, meats, and appetizers at Palacio Event Centre",
    category: "Dining",
  },
  {
    src: buffetDisplayImg,
    alt: "Buffet presentation with platters, charcuterie, and appetizers at Palacio Event Centre",
    category: "Dining",
  },
  {
    src: grazingTableFrontImg,
    alt: "Front-facing grazing table with cheeses, cured meats, and canapes at Palacio Event Centre",
    category: "Dining",
  },
  {
    src: cateringSpreadImg,
    alt: "Catering spread with seafood, charcuterie, dips, and appetizers at Palacio Event Centre",
    category: "Dining",
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
    poster: grazingTableWideImg,
  },
];

export const galleryCategories = ["All", "Venue", "Weddings", "Corporate", "Private Events", "Dining"];

export const featuredGalleryImages: GalleryImageItem[] = [
  galleryImages[0],
  galleryImages[14],
  galleryImages[28],
  galleryImages[25],
  galleryImages[32],
  galleryImages[1],
  galleryImages[4],
  galleryImages[2],
];

