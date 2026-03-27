import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const baseUrl = process.env.BLOGS_API_BASE_URL;
  const token = process.env.BLOGS_API_TOKEN;

  if (!baseUrl || !token) {
    return res.status(500).json({ error: "Blog API not configured" });
  }

  // Determine endpoint based on query params or slug
  const { slug } = req.query;
  let endpoint = `${baseUrl}/blogs/${token}`;
  if (slug) {
    endpoint = `${baseUrl}/blogs/${token}/${slug}`;
  }

  // Add cache headers for performance (1 hour cache)
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  const response = await fetch(endpoint);
  const data = await response.json();
  return res.status(200).json(data);
}
