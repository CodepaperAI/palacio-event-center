import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, PageHero, SectionHeading, SiteCtaSection } from "@/components/ui/design-system";
import { resolvedBlogPosts as staticBlogPosts, type BlogPost } from "@/data/blogs";
import { fetchBlogPosts } from "@/lib/blogs-api";
import { ArrowRight, Calendar, Clock3, User } from "lucide-react";
import { format } from "date-fns";

import heroImg from "@/assets/Website Content/IMG_3670.jpg";

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
  const postLabel = post.category ?? "Article";

  return (
    <motion.article
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-24px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group bg-card rounded-2xl overflow-hidden border border-border/30 hover:border-gold/30 transition-all duration-500 hover:shadow-luxury"
    >
      {/* Image */}
      <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute top-4 left-4 bg-gold text-charcoal text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full font-sans">
          {postLabel}
        </span>
      </Link>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-sans">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {format(new Date(post.publishedAt), "MMMM d, yyyy")}
          </span>
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock3 className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
        </div>

        <Link to={`/blog/${post.slug}`}>
          <h3 className="font-sans text-[1.25rem] text-foreground mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-muted-foreground text-sm mb-4 font-sans line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-gold text-sm font-medium tracking-wide hover:gap-3 transition-all duration-300"
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
};

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  // Fetch blog posts from Uplift API
  const { data: apiPosts = [] } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetchBlogPosts,
  });

  // Combine: new API posts first, then existing static posts, sorted newest first
  const allPosts = useMemo(() => {
    return [...apiPosts, ...staticBlogPosts].sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }, [apiPosts]);

  const totalPages = Math.max(1, Math.ceil(allPosts.length / postsPerPage));
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return allPosts.slice(startIndex, startIndex + postsPerPage);
  }, [currentPage, allPosts]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Event Planning Blog | Palacio Event Centre Mississauga"
        description="Read event planning tips, venue inspiration, and celebration ideas from Palacio Event Centre in Mississauga."
        pathname="/blog"
        image={heroImg}
      />
      <Navbar />

      <PageHero
        eyebrow="Insights & Inspiration"
        title="Our Blog"
        image={heroImg}
        alt="Elegant Palacio Event Centre lobby interior in Mississauga used as the blog hero image"
        align="center"
      />

      {/* Blog Grid */}
      <AnimatedSection bg="background" topDivider>
        <SectionHeading
          eyebrow="Latest Articles"
          title="Event Planning Tips & Trends"
          description="Discover the latest event planning insights, venue inspiration, and celebration ideas for your next event."
        />

        <motion.div variants={fadeUpVariants} className="mb-10 text-center">
          <p className="text-sm text-muted-foreground font-sans">
            Showing {Math.min((currentPage - 1) * postsPerPage + 1, allPosts.length)}-
            {Math.min(currentPage * postsPerPage, allPosts.length)} of {allPosts.length} articles
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {paginatedPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {allPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No articles are available right now.
            </p>
          </div>
        )}

        {allPosts.length > postsPerPage && (
          <motion.div
            variants={fadeUpVariants}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            <button
              onClick={() => goToPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="rounded-full border border-border/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-all duration-300 hover:border-gold/40 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;

              return (
                <button
                  key={pageNumber}
                  onClick={() => goToPage(pageNumber)}
                  className={`h-11 min-w-11 rounded-full border px-4 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                    currentPage === pageNumber
                      ? "border-gold bg-gold text-charcoal"
                      : "border-border/50 text-muted-foreground hover:border-gold/40 hover:text-foreground"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full border border-border/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-all duration-300 hover:border-gold/40 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </motion.div>
        )}
      </AnimatedSection>

      <SiteCtaSection
        eyebrow="Plan With Confidence"
        title="Talk Through Your Event Vision"
        description="When the inspiration is there, our team can help turn it into a clear venue plan, menu direction, and guest experience."
        buttonLabel="Get in Touch"
        buttonTo="/contact"
      />

      <Footer />
    </div>
  );
};

export default Blog;
