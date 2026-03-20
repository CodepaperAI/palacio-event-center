import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";
import { AnimatedSection, SectionHeading } from "@/components/ui/design-system";
import { blogPosts, blogCategories, type BlogPost } from "@/data/blogs";
import { ArrowRight, Calendar, User } from "lucide-react";

import heroImg from "@/assets/hero-ballroom.jpg";

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
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
          {post.category}
        </span>
      </Link>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-sans">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            {post.author}
          </span>
        </div>

        <Link to={`/blog/${post.slug}`}>
          <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2 leading-tight">
            {post.title}
          </h3>
        </Link>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-sans line-clamp-3">
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
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* SEO: Page Title */}
      <title>Blog | Palacio Event Centre - Event Planning Tips & Trends</title>
      <meta
        name="description"
        content="Discover expert event planning tips, wedding trends, corporate event ideas, and celebration inspiration from Palacio Event Centre's professional event planners."
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Palacio Grand Ballroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/60 to-charcoal/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-charcoal/30" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-gold-light text-sm sm:text-base font-sans tracking-[0.35em] uppercase mb-6"
          >
            Insights & Inspiration
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-medium leading-[1.1]"
          >
            Our Blog
          </motion.h1>
        </div>
      </section>

      {/* Blog Grid */}
      <AnimatedSection bg="background" topDivider>
        <SectionHeading
          eyebrow="Latest Articles"
          title="Event Planning Tips & Trends"
          description="Expert advice, creative ideas, and insider tips for planning unforgettable events at Palacio."
        />

        {/* Category Filters */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase font-semibold font-sans border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold text-charcoal border-gold"
                  : "bg-transparent text-muted-foreground border-border/50 hover:border-gold/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No articles found in this category.
            </p>
          </div>
        )}
      </AnimatedSection>

      {/* Newsletter CTA */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(40 45% 60%) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-luxury text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">Stay Updated</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory mb-8">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-ivory/60 text-lg max-w-xl mx-auto mb-12 leading-relaxed font-sans">
              Get the latest event planning tips, trends, and exclusive offers delivered to your inbox.
            </p>
            <Link to="/contact">
              <Button
                variant="gold"
                size="xl"
                className="shadow-glow-gold"
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
