import { motion, type Variants } from "framer-motion";
import { useScrollAnimation, fadeUpVariants, staggerContainer } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import React from "react";

/* ─── Animated Section Wrapper ───────────────────────────────── */
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Background style: alternates between background and secondary */
  bg?: "background" | "secondary" | "charcoal";
  /** Show gradient transition at top */
  topGradientFrom?: "background" | "secondary";
  /** Show thin top divider line */
  topDivider?: boolean;
}

export const AnimatedSection = ({
  children,
  className,
  id,
  bg = "background",
  topGradientFrom,
  topDivider = false,
}: AnimatedSectionProps) => {
  const { ref, controls } = useScrollAnimation();

  const bgClass = {
    background: "bg-background",
    secondary: "bg-secondary",
    charcoal: "bg-charcoal",
  }[bg];

  return (
    <section id={id} className={cn("section-padding relative", bgClass, className)}>
      {topGradientFrom && (
        <div
          className={cn(
            "absolute top-0 left-0 right-0 h-24",
            topGradientFrom === "background"
              ? "bg-gradient-to-b from-background to-transparent"
              : "bg-gradient-to-b from-secondary to-transparent"
          )}
        />
      )}
      {topDivider && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      )}
      <div className="container-luxury">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={staggerContainer}>
          {children}
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Section Heading ────────────────────────────────────────── */
interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** Light text for dark backgrounds */
  light?: boolean;
  className?: string;
}

export const SectionHeading = ({ eyebrow, title, description, light = false, className }: SectionHeadingProps) => (
  <motion.div variants={fadeUpVariants} className={cn("text-center mb-20", className)}>
    <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold mb-4 font-sans">
      {eyebrow}
    </p>
    <h2
      className={cn(
        "font-serif text-3xl sm:text-4xl md:text-5xl mb-4",
        light ? "text-ivory" : "text-foreground"
      )}
    >
      {title}
    </h2>
    {description && (
      <p
        className={cn(
          "text-lg max-w-xl mx-auto leading-relaxed",
          light ? "text-ivory/60" : "text-muted-foreground"
        )}
      >
        {description}
      </p>
    )}
  </motion.div>
);

/* ─── Icon Box (consistent icon container) ───────────────────── */
interface IconBoxProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const IconBox = ({ children, size = "md", className }: IconBoxProps) => {
  const sizeClasses = {
    sm: "w-10 h-10 rounded-xl",
    md: "w-14 h-14 rounded-2xl",
    lg: "w-16 h-16 rounded-2xl",
  }[size];

  return (
    <div
      className={cn(
        sizeClasses,
        "bg-gold/8 flex items-center justify-center group-hover:bg-gold/15 group-hover:scale-110 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

/* ─── Luxury Card ────────────────────────────────────────────── */
interface LuxuryCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "a";
  href?: string;
  onClick?: () => void;
}

export const LuxuryCard = ({ children, className, hover = true, as = "div", href, onClick }: LuxuryCardProps) => {
  const Comp = as === "a" ? "a" : "div";
  return (
    <motion.div variants={fadeUpVariants}>
      <Comp
        href={href}
        onClick={onClick}
        className={cn(
          "rounded-2xl bg-card border border-border/50 transition-all duration-500",
          hover && "hover:border-gold/20 hover:shadow-elegant hover:-translate-y-1",
          className
        )}
      >
        {children}
      </Comp>
    </motion.div>
  );
};

/* ─── Image Card (for event cards, venue spaces) ─────────────── */
interface ImageCardProps {
  image: string;
  alt: string;
  /** Overlay style */
  overlay?: "bottom" | "full";
  children: React.ReactNode;
  imageHeight?: string;
  className?: string;
}

export const ImageCard = ({
  image,
  alt,
  overlay = "bottom",
  children,
  imageHeight = "h-72",
  className,
}: ImageCardProps) => (
  <div className={cn("relative overflow-hidden", imageHeight, className)}>
    <img
      src={image}
      alt={alt}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      loading="lazy"
    />
    <div
      className={cn(
        "absolute inset-0",
        overlay === "bottom"
          ? "bg-gradient-to-t from-charcoal/50 via-charcoal/10 to-transparent"
          : "bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10 group-hover:from-charcoal/95 transition-all duration-500"
      )}
    />
    {children}
  </div>
);

/* ─── Form Input (standardised input styling) ────────────────── */
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, ...props }, ref) => (
    <div>
      {label && (
        <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2 font-sans">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={cn(
          "w-full px-5 py-4 rounded-2xl border border-border/80 bg-card text-foreground",
          "placeholder:text-muted-foreground/60 text-sm font-sans",
          "focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/60",
          "transition-all duration-300",
          className
        )}
        {...props}
      />
    </div>
  )
);
FormInput.displayName = "FormInput";

/* ─── Form Select ────────────────────────────────────────────── */
interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ className, label, children, ...props }, ref) => (
    <div>
      {label && (
        <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2 font-sans">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={cn(
          "w-full px-5 py-4 rounded-2xl border border-border/80 bg-card text-foreground",
          "text-sm font-sans",
          "focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/60",
          "transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
      </select>
    </div>
  )
);
FormSelect.displayName = "FormSelect";

/* ─── Form Textarea ──────────────────────────────────────────── */
interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, label, ...props }, ref) => (
    <div>
      {label && (
        <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2 font-sans">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={cn(
          "w-full px-5 py-4 rounded-2xl border border-border/80 bg-card text-foreground",
          "placeholder:text-muted-foreground/60 text-sm font-sans resize-none",
          "focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/60",
          "transition-all duration-300",
          className
        )}
        {...props}
      />
    </div>
  )
);
FormTextarea.displayName = "FormTextarea";

/* ─── Gallery Image ──────────────────────────────────────────── */
interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const GalleryImage = ({ src, alt, className }: GalleryImageProps) => (
  <motion.div
    variants={fadeUpVariants}
    className={cn("group relative overflow-hidden rounded-2xl cursor-pointer", className)}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="w-12 h-12 rounded-full border-2 border-ivory/80 flex items-center justify-center backdrop-blur-sm bg-charcoal/20">
        <svg className="w-5 h-5 text-ivory" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
    </div>
  </motion.div>
);

/* ─── Feature Card (Why Choose Us style) ─────────────────────── */
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <LuxuryCard className="group p-8">
    <IconBox size="md" className="mb-6">
      {icon}
    </IconBox>
    <h3 className="font-serif text-xl text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed font-sans">{description}</p>
  </LuxuryCard>
);

/* ─── Stat Card ──────────────────────────────────────────────── */
interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export const StatCard = ({ icon, value, label }: StatCardProps) => (
  <LuxuryCard className="group text-center p-8 md:p-10">
    <IconBox size="md" className="mx-auto mb-5">
      {icon}
    </IconBox>
    <div className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-1">{value}</div>
    <div className="text-xs text-muted-foreground tracking-[0.15em] uppercase font-sans">{label}</div>
  </LuxuryCard>
);
