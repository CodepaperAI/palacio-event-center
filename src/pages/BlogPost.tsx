import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Calendar, Clock3, User } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { resolvedBlogPosts, getRelatedBlogPosts } from "@/data/blogs";
import { fetchBlogPost } from "@/lib/blogs-api";
import NotFound from "@/pages/NotFound";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  PageHero,
  SiteCtaSection,
} from "@/components/ui/design-system";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { buildArticleSchema } from "@/lib/seo";
import { normalizeWordPressContent } from "@/lib/blogContent";
import { format } from "date-fns";

const BlogPost = () => {
  const { slug } = useParams();

  // Try fetching from API first, fall back to local data
  const { data: apiPost } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: () => fetchBlogPost(slug!),
    enabled: !!slug,
  });

  // Use API post if found, otherwise fall back to local blogPosts
  const post = apiPost ?? resolvedBlogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  // For related posts, only use local blogPosts (avoid mixing API and local)
  const relatedPosts = getRelatedBlogPosts(post);
  const renderedContent = normalizeWordPressContent(post.contentHtml) || post.contentHtml;
  const postLabel = post.category ?? "Blog";

  return (
    <div className="min-h-screen">
      <SEO
        title={post.seoTitle || `${post.title} | Palacio Event Centre`}
        description={post.metaDescription}
        pathname={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        schema={buildArticleSchema(post, `/blog/${post.slug}`)}
      />
      <Navbar />

      <PageHero
        eyebrow={postLabel}
        title={post.title}
        image={post.image}
        alt={post.imageAlt}
        align="center"
      />

      <AnimatedSection bg="background" topDivider>
        <div className="mx-auto max-w-5xl">
          <motion.div variants={fadeUpVariants}>
            <div className="card-panel-strong mb-10 overflow-hidden">
              <div className="border-b border-border/60 bg-secondary/55 px-6 py-5 sm:px-8">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="pill-label border-gold/30 bg-gold/8 text-gold">
                    {postLabel}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground font-sans">
                    Article
                  </span>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans">
                  <p className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" />
                    {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                  </p>
                  <p className="flex items-center gap-2">
                    <User className="h-3.5 w-3.5" />
                    {post.author}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock3 className="h-3.5 w-3.5" />
                    {post.readingTime}
                  </p>
                </div>

                {post.excerpt && (
                  <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-[1.05rem]">
                    {post.excerpt}
                  </p>
                )}
              </div>

              <div className="px-6 py-8 sm:px-8 md:px-10 md:py-10">
                <article
                  className="blog-article-content"
                  dangerouslySetInnerHTML={{ __html: renderedContent }}
                />
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="goldOutline" size="lg">
                <Link to="/blog">Back to Blog</Link>
              </Button>
              <Button asChild variant="gold" size="lg">
                <Link to="/contact">Plan Your Event</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {relatedPosts.length > 0 && (
        <AnimatedSection bg="secondary" topGradientFrom="background">
          <div className="mx-auto max-w-6xl">
            <motion.div variants={fadeUpVariants} className="mb-10 text-center">
              <p className="eyebrow">Continue Reading</p>
              <h2 className="font-sans text-[2rem] text-foreground md:text-[2.6rem]">
                Related Articles
              </h2>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <motion.article
                  key={relatedPost.slug}
                  variants={fadeUpVariants}
                  className="card-panel overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold/25 hover:shadow-elegant"
                >
                  <Link to={`/blog/${relatedPost.slug}`} className="block aspect-[16/10] overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-6">
                    <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-gold font-sans">
                      {relatedPost.category ?? "Article"}
                    </p>
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <h3 className="mb-3 font-sans text-[1.35rem] text-foreground transition-colors duration-300 hover:text-gold">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <p className="mb-5 text-sm text-muted-foreground font-sans">{relatedPost.excerpt}</p>
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="editorial-link text-xs tracking-[0.18em]"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      <SiteCtaSection
        eyebrow="Planning Next?"
        title="Bring The Inspiration Into A Real Event Plan"
        description="If this article helped clarify the direction, our team can help you translate it into the right venue, menu, and guest experience."
        buttonLabel="Book Consultation"
        buttonTo="/contact"
      />

      <Footer />
    </div>
  );
};

export default BlogPost;
