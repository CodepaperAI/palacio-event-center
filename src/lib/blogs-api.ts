import type { BlogPost } from "@/data/blogs";

const BLOGS_API_BASE_URL = import.meta.env.VITE_BLOGS_API_BASE_URL || "";
const BLOGS_API_TOKEN = import.meta.env.VITE_BLOGS_API_TOKEN || "";

// API response types
interface UpliftBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: string;
  publishDate: string;
  publishTime: string;
  featuredImage: string;
  categories: string[];
  tags: string[];
  seoScore: number;
  createdAt: string;
  updatedAt: string;
  meta: {
    seoTitle: string;
    seoDescription: string;
    focusKeyword: string;
    keywords: string[];
  };
  customFields: {
    readingTime: string;
    rating: number;
  };
}

interface UpliftListResponse {
  success: boolean;
  data: {
    blogs: UpliftBlogPost[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

interface UpliftSingleResponse {
  success: boolean;
  data: {
    blog: UpliftBlogPost;
  };
}

// Map Uplift API format to existing BlogPost interface
const mapUpliftPostToBlogPost = (post: UpliftBlogPost): BlogPost => ({
  id: post.id,
  slug: post.slug,
  title: post.title,
  seoTitle: post.meta?.seoTitle || post.title,
  excerpt: post.excerpt,
  metaDescription: post.meta?.seoDescription || post.excerpt,
  category: post.categories?.[0] || null,
  tags: post.tags || [],
  author: "Palacio Event Centre",
  publishedAt: `${post.publishDate} ${post.publishTime}`,
  readingTime: post.customFields?.readingTime || "5 min read",
  image: post.featuredImage || "",
  imageAlt: post.title,
  contentHtml: post.content,
  reviewFlags: [],
});

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  if (!BLOGS_API_BASE_URL || !BLOGS_API_TOKEN) {
    console.warn("Blog API not configured, using static data only");
    return [];
  }
  const endpoint = `${BLOGS_API_BASE_URL}/blogs/${BLOGS_API_TOKEN}`;
  const response = await fetch(endpoint);
  if (!response.ok) throw new Error("Failed to fetch blog posts");
  const data: UpliftListResponse = await response.json();
  if (!data.success || !data.data?.blogs) throw new Error("Invalid API response");
  return data.data.blogs
    .filter((post) => post.status === "published")
    .map(mapUpliftPostToBlogPost);
};

export const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
  if (!BLOGS_API_BASE_URL || !BLOGS_API_TOKEN) return null;
  const endpoint = `${BLOGS_API_BASE_URL}/blogs/${BLOGS_API_TOKEN}/${slug}`;
  const response = await fetch(endpoint);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Failed to fetch blog post");
  const data: UpliftSingleResponse = await response.json();
  if (!data.success || !data.data?.blog) throw new Error("Invalid API response");
  return mapUpliftPostToBlogPost(data.data.blog);
};
