import weddingImg from "@/assets/wedding-event.jpg";
import socialImg from "@/assets/social-event.jpg";
import corporateImg from "@/assets/corporate-event.jpg";
import menusImg from "@/assets/menus-preview.jpg";
import ibizaImg from "@/assets/ibiza-ballroom.jpg";
import galleryImg from "@/assets/gallery-1.jpg";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  imageAlt: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "luxury-wedding-trends-2026",
    title: "Luxury Wedding Trends to Watch in 2026",
    excerpt: "Discover the most elegant wedding trends shaping this year's celebrations, from intimate destination ceremonies to grand ballroom receptions at premium venues.",
    category: "Weddings",
    author: "Palacio Events Team",
    date: "March 15, 2026",
    image: weddingImg,
    imageAlt: "Luxury wedding reception at Palacio Grand Ballroom",
  },
  {
    id: "2",
    slug: "planning-corporate-gala-success",
    title: "The Ultimate Guide to Planning a Successful Corporate Gala",
    excerpt: "Learn the essential steps to host an unforgettable corporate event, from venue selection and catering to entertainment and guest experience.",
    category: "Corporate Events",
    author: "Palacio Events Team",
    date: "March 10, 2026",
    image: corporateImg,
    imageAlt: "Elegant corporate gala setup in Grand Ballroom",
  },
  {
    id: "3",
    slug: "milestone-birthday-celebration-ideas",
    title: "Creative Milestone Birthday Celebration Ideas",
    excerpt: "From sweet sixteen to golden anniversaries, explore unique themes and decor ideas to make milestone birthdays truly memorable.",
    category: "Social Events",
    author: "Palacio Events Team",
    date: "March 5, 2026",
    image: socialImg,
    imageAlt: "Beautiful birthday celebration with floral decorations",
  },
  {
    id: "4",
    slug: "event-decor-transform-venue",
    title: "How Professional Event Decor Can Transform Your Venue",
    excerpt: "Explore how lighting, florals, and thematic decorations can completely transform any space into a magical setting for your special occasion.",
    category: "Event Decor",
    author: "Palacio Events Team",
    date: "February 28, 2026",
    image: ibizaImg,
    imageAlt: "Stunning venue transformation with chandeliers and florals",
  },
  {
    id: "5",
    slug: "menu-planning-guide-events",
    title: "A Complete Guide to Menu Planning for Special Events",
    excerpt: "Navigate the art of event catering with our comprehensive guide to menu selection, dietary accommodations, and creating memorable culinary experiences.",
    category: "Event Catering",
    author: "Palacio Events Team",
    date: "February 20, 2026",
    image: menusImg,
    imageAlt: "Premium catering presentation at Palacio event",
  },
  {
    id: "6",
    slug: "event-planning-tips-2026",
    title: "10 Essential Event Planning Tips for 2026",
    excerpt: "Stay ahead with our expert tips on planning flawless events, from budgeting and timelines to vendor selection and guest experience optimization.",
    category: "Event Trends",
    author: "Palacio Events Team",
    date: "February 15, 2026",
    image: galleryImg,
    imageAlt: "Professional event planning consultation at Palacio",
  },
];

export const blogCategories = [
  "All",
  "Weddings",
  "Corporate Events",
  "Social Events",
  "Event Decor",
  "Event Catering",
  "Event Trends",
];

// Future API integration point
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  // TODO: Replace with actual API call
  // const response = await fetch('/api/blogs');
  // return response.json();
  return blogPosts;
};

export const fetchBlogPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  // TODO: Replace with actual API call
  // const response = await fetch(`/api/blogs/${slug}`);
  // return response.json();
  return blogPosts.find((post) => post.slug === slug);
};
