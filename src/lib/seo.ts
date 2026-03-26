import type { BlogPost } from "@/data/blogs";

export const SITE_URL = "https://palacioeventcentre.com";
export const BUSINESS_NAME = "Palacio Event Centre";
export const BUSINESS_PHONE = "905-949-0555";
export const BUSINESS_EMAIL = "sales@palacioeventcentre.com";
export const BUSINESS_ADDRESS = {
  streetAddress: "3410 Semenyk Ct",
  addressLocality: "Mississauga",
  addressRegion: "ON",
  postalCode: "L5C 4P8",
  addressCountry: "CA",
};

export const buildCanonicalUrl = (pathname: string) => {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return new URL(normalizedPath, SITE_URL).toString();
};

export const buildImageUrl = (imagePath?: string) => {
  if (!imagePath) return undefined;
  return imagePath.startsWith("http") ? imagePath : new URL(imagePath, SITE_URL).toString();
};

export const buildLocalBusinessSchema = (description: string, image?: string) => ({
  "@context": "https://schema.org",
  "@type": ["EventVenue", "LocalBusiness"],
  name: BUSINESS_NAME,
  url: SITE_URL,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  description,
  image: buildImageUrl(image),
  address: {
    "@type": "PostalAddress",
    ...BUSINESS_ADDRESS,
  },
  areaServed: "Mississauga, Ontario",
});

export const buildServiceSchema = ({
  name,
  description,
  pathname,
  image,
}: {
  name: string;
  description: string;
  pathname: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: name,
  name,
  description,
  provider: {
    "@type": ["EventVenue", "LocalBusiness"],
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: BUSINESS_PHONE,
  },
  areaServed: "Mississauga, Ontario",
  url: buildCanonicalUrl(pathname),
  image: buildImageUrl(image),
});

export const buildArticleSchema = (post: BlogPost, pathname: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.metaDescription,
  image: buildImageUrl(post.image),
  datePublished: new Date(post.publishedAt).toISOString(),
  dateModified: new Date(post.publishedAt).toISOString(),
  author: {
    "@type": "Organization",
    name: post.author,
  },
  publisher: {
    "@type": "Organization",
    name: BUSINESS_NAME,
    url: SITE_URL,
  },
  mainEntityOfPage: buildCanonicalUrl(pathname),
  articleSection: post.category ?? "Blog",
});
