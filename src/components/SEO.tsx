import { Helmet } from "react-helmet-async";
import { buildCanonicalUrl, buildImageUrl } from "@/lib/seo";

interface SEOProps {
  title: string;
  description: string;
  pathname: string;
  image?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  type?: "website" | "article";
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  pathname,
  image,
  schema,
  type = "website",
  noindex = false,
}: SEOProps) => {
  const canonicalUrl = buildCanonicalUrl(pathname);
  const ogImage = buildImageUrl(image);
  const schemaItems = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const robotsContent = noindex ? "noindex, nofollow" : "index, follow";

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content="Palacio Event Centre" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_CA" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {schemaItems.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
