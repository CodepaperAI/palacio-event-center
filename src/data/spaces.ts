import ibizaAGrandConfigImg from "@/assets/Website Content/20221027_150416_Original.jpg";
import ibizaGrandBallroomLeadImg from "@/assets/Website Content/IMG_3666.jpg";
import arribaLeadImg from "@/assets/Website Content/Palacio-20.jpg";
import weddingStageImg from "@/assets/Website Content/IMG_1955.jpg";
import floralDetailImg from "@/assets/Website Content/IMG_2245.jpg";
import corporateSetupImg from "@/assets/Website Content/IMG_3306.jpg";

export interface SpaceQuickFact {
  label: string;
  value: string;
}

export interface SpaceGalleryImage {
  src: string;
  alt: string;
}

export interface VenueSpace {
  slug: string;
  name: string;
  shortLabel: string;
  description: string;
  overview: string;
  capacity: string;
  image: string;
  alt: string;
  scale: "primary" | "configuration" | "intimate";
  eventScale: string;
  capability: string;
  supportingFact: string;
  quickFacts: SpaceQuickFact[];
  highlights: string[];
  idealFor: string[];
  galleryImages: SpaceGalleryImage[];
  relationshipNote?: string;
  parentVenue?: string;
}

export const venueSpaces: VenueSpace[] = [
  {
    slug: "ibiza-grand-ballroom",
    name: "Ibiza Grand Ballroom",
    shortLabel: "Flagship Venue",
    description:
      "A grand ballroom in Mississauga with a large adjoining foyer, 23-foot-high ceilings, and the scale to host luxury weddings, galas, and large corporate events.",
    overview:
      "Ibiza Grand Ballroom is Palacio's flagship space and one of the strongest options for a large event venue in Mississauga. A large adjoining foyer, 23-foot-high ceilings, and the ability to divide the ballroom into Ibiza A and Ibiza B make it the venue's most adaptable setting for elegant weddings, receptions, conferences, and grand celebrations.",
    capacity: "Up to 900 Guests",
    image: ibizaGrandBallroomLeadImg,
    alt: "Ibiza Grand Ballroom at Palacio Event Centre set for a large premium celebration",
    scale: "primary",
    eventScale: "Large-Scale",
    capability: "Divisible Ballroom",
    supportingFact:
      "Designed for weddings, receptions, exhibitions, corporate events, conferences, seminars, and product launches",
    quickFacts: [
      { label: "Banquet Capacity", value: "Up to 900 Guests" },
      { label: "Event Scale", value: "Large-Scale" },
      { label: "Capability", value: "Divisible into Ibiza A / Ibiza B" },
      { label: "Standout Detail", value: "23-Foot-High Ceilings" },
    ],
    highlights: [
      "Largest and most flexible venue",
      "Large adjoining foyer",
      "23-foot-high ceilings",
      "Designed for large-scale events",
    ],
    idealFor: [
      "Weddings",
      "Receptions",
      "Exhibitions",
      "Corporate events",
      "Conferences",
      "Seminars",
      "Product launches",
    ],
    galleryImages: [
      {
        src: ibizaGrandBallroomLeadImg,
        alt: "Wide Ibiza Grand Ballroom view dressed for a premium large-scale event",
      },
      {
        src: weddingStageImg,
        alt: "Floral wedding ceremony and reception aisle inside Ibiza Grand Ballroom",
      },
      {
        src: corporateSetupImg,
        alt: "Corporate gala-style event setup inside Ibiza Grand Ballroom",
      },
      {
        src: floralDetailImg,
        alt: "Wedding stage detail inside Ibiza Grand Ballroom at Palacio Event Centre",
      },
    ],
  },
  {
    slug: "ibiza-a",
    name: "Ibiza A",
    shortLabel: "Ballroom Configuration",
    description:
      "A divided configuration of Ibiza Grand Ballroom in Mississauga with the same contemporary design and high-ceiling feel for medium-to-large events.",
    overview:
      "Ibiza A is one configuration of Ibiza Grand Ballroom when the flagship venue is divided. It keeps the same contemporary design language and elevated ceiling feel while creating a more focused footprint for medium-to-large events.",
    capacity: "Up to 450 Guests",
    image: ibizaAGrandConfigImg,
    alt: "Ibiza A configuration with bright round-table setup inside Palacio Event Centre",
    scale: "configuration",
    eventScale: "Medium to Large",
    capability: "Part of Ibiza Grand Ballroom",
    supportingFact: "Best suited to medium-to-large events within the divisible ballroom system",
    quickFacts: [
      { label: "Banquet Capacity", value: "Up to 450 Guests" },
      { label: "Event Scale", value: "Medium to Large" },
      { label: "Capability", value: "Divided Ballroom Configuration" },
      { label: "Parent Venue", value: "Ibiza Grand Ballroom" },
    ],
    highlights: [
      "Part of Ibiza Grand Ballroom",
      "Same contemporary design",
      "Same high-ceiling atmosphere",
      "Suitable for medium-to-large events",
    ],
    idealFor: [
      "Medium-to-large weddings",
      "Focused receptions",
      "Corporate gatherings",
      "Private celebrations",
    ],
    galleryImages: [
      {
        src: ibizaAGrandConfigImg,
        alt: "Ibiza A styled with a bright, open ballroom setup",
      },
      {
        src: floralDetailImg,
        alt: "Decor detail supporting Ibiza A within the grand ballroom system",
      },
      {
        src: corporateSetupImg,
        alt: "Formal event layout that reflects Ibiza A's flexible configuration",
      },
    ],
    relationshipNote:
      "Ibiza A is not a separate primary venue. It is one side of Ibiza Grand Ballroom when the flagship ballroom is divided.",
    parentVenue: "Ibiza Grand Ballroom",
  },
  {
    slug: "ibiza-b",
    name: "Ibiza B",
    shortLabel: "Ballroom Configuration",
    description:
      "A second divided ballroom configuration in Mississauga that preserves the same contemporary design and elevated ceiling height for mid-size functions.",
    overview:
      "Ibiza B is the second configuration within Ibiza Grand Ballroom when the ballroom is divided. It preserves the same contemporary design and high-ceiling character while giving mid-size events a more tailored setting.",
    capacity: "Up to 300 Guests",
    image: floralDetailImg,
    alt: "Ibiza B configured for a refined decorated event at Palacio Event Centre",
    scale: "configuration",
    eventScale: "Mid-Size",
    capability: "Part of Ibiza Grand Ballroom",
    supportingFact: "Ideal for mid-size events when Ibiza Grand Ballroom is divided",
    quickFacts: [
      { label: "Banquet Capacity", value: "Up to 300 Guests" },
      { label: "Event Scale", value: "Mid-Size" },
      { label: "Capability", value: "Divided Ballroom Configuration" },
      { label: "Parent Venue", value: "Ibiza Grand Ballroom" },
    ],
    highlights: [
      "Part of Ibiza Grand Ballroom",
      "Same contemporary design",
      "Same high-ceiling atmosphere",
      "Suitable for mid-size events",
    ],
    idealFor: [
      "Mid-size receptions",
      "Private celebrations",
      "Corporate functions",
      "Social events",
    ],
    galleryImages: [
      {
        src: floralDetailImg,
        alt: "Ibiza B arranged for a polished decorated event at Palacio Event Centre",
      },
      {
        src: corporateSetupImg,
        alt: "Formal ballroom layout reflecting Ibiza B's adaptable event scale",
      },
      {
        src: floralDetailImg,
        alt: "Decor detail supporting Ibiza B within Palacio Event Centre",
      },
    ],
    relationshipNote:
      "Ibiza B is not a standalone primary venue. It is the second ballroom configuration available when Ibiza Grand Ballroom is divided.",
    parentVenue: "Ibiza Grand Ballroom",
  },
  {
    slug: "arriba",
    name: "Arriba",
    shortLabel: "Intimate Venue",
    description:
      "A small event venue in Mississauga on the second floor with panoramic views and abundant natural light for refined private events.",
    overview:
      "Arriba is Palacio's separate second-floor venue for intimate occasions and a strong fit for clients seeking a small event venue in Mississauga. Panoramic views and abundant natural light give the room a private, airy feel that contrasts beautifully with the scale of the grand ballroom below.",
    capacity: "Up to 140 Guests",
    image: arribaLeadImg,
    alt: "Arriba intimate second-floor venue with large windows and natural light",
    scale: "intimate",
    eventScale: "Intimate",
    capability: "Panoramic Views",
    supportingFact:
      "Ideal for business meetings, social functions, wedding receptions, and private events",
    quickFacts: [
      { label: "Banquet Capacity", value: "Up to 140 Guests" },
      { label: "Event Scale", value: "Intimate" },
      { label: "Setting", value: "Second Floor" },
      { label: "Standout Detail", value: "Panoramic Views" },
    ],
    highlights: [
      "Separate intimate venue",
      "Located on the second floor",
      "Panoramic views",
      "Abundant natural light",
    ],
    idealFor: [
      "Business meetings",
      "Social functions",
      "Wedding receptions",
      "Private events",
    ],
    galleryImages: [
      {
        src: arribaLeadImg,
        alt: "Arriba second-floor room prepared for an intimate event with blue table styling",
      },
    ],
  },
];

export const getVenueSpaceBySlug = (slug: string) =>
  venueSpaces.find((space) => space.slug === slug);
