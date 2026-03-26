import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useScrollAnimation, fadeUpVariants, staggerContainer } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "background" | "secondary" | "charcoal";
  topGradientFrom?: "background" | "secondary";
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
    <section id={id} className={cn("section-padding relative overflow-hidden", bgClass, className)}>
      {topGradientFrom && (
        <div
          className={cn(
            "absolute top-0 left-0 right-0 h-20 sm:h-24",
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
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="section-stack"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
  align?: "center" | "left";
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  light = false,
  className,
  align = "center",
}: SectionHeadingProps) => (
  <motion.div
    variants={fadeUpVariants}
    className={cn("mb-12 md:mb-14", align === "center" ? "text-center" : "text-left", className)}
  >
    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold font-sans">
      {eyebrow}
    </p>
    <h2
      className={cn(
        "font-sans text-[2.2rem] sm:text-[2.25rem] md:text-[3.25rem] lg:text-[3.8rem] mb-4",
        light ? "text-ivory" : "text-foreground"
      )}
    >
      {title}
    </h2>
    {description && (
      <p
        className={cn(
          "text-base sm:text-lg md:text-[1.0625rem]",
          align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl",
          light ? "text-ivory/68" : "text-muted-foreground"
        )}
      >
        {description}
      </p>
    )}
  </motion.div>
);

interface IconBoxProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const IconBox = ({ children, size = "md", className }: IconBoxProps) => {
  const sizeClasses = {
    sm: "h-11 w-11 rounded-2xl",
    md: "h-14 w-14 rounded-[1.1rem]",
    lg: "h-16 w-16 rounded-[1.2rem]",
  }[size];

  return (
    <div
      className={cn(
        sizeClasses,
        "flex items-center justify-center border border-gold/12 bg-gold/8 transition-all duration-300 group-hover:border-gold/20 group-hover:bg-gold/14",
        className
      )}
    >
      {children}
    </div>
  );
};

interface LuxuryCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "a";
  href?: string;
  onClick?: () => void;
}

export const LuxuryCard = ({
  children,
  className,
  hover = true,
  as = "div",
  href,
  onClick,
}: LuxuryCardProps) => {
  const Comp = as === "a" ? "a" : "div";

  return (
    <motion.div variants={fadeUpVariants}>
      <Comp
        href={href}
        onClick={onClick}
        className={cn(
          "card-panel transition-all duration-500",
          hover && "hover:-translate-y-1 hover:border-gold/22 hover:shadow-elegant",
          className
        )}
      >
        {children}
      </Comp>
    </motion.div>
  );
};

interface ImageCardProps {
  image: string;
  alt: string;
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
      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      loading="lazy"
    />
    <div
      className={cn(
        "absolute inset-0",
        overlay === "bottom"
          ? "bg-gradient-to-t from-charcoal/58 via-charcoal/10 to-transparent"
          : "bg-gradient-to-t from-charcoal/90 via-charcoal/38 to-charcoal/10 transition-all duration-500 group-hover:from-charcoal/95"
      )}
    />
    {children}
  </div>
);

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, ...props }, ref) => (
    <div>
      {label && (
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground font-sans">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={cn(
          "w-full rounded-[1.2rem] border border-border/80 bg-card px-5 py-4 text-sm text-foreground transition-all duration-300",
          "font-sans placeholder:text-muted-foreground/60 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/35",
          className
        )}
        {...props}
      />
    </div>
  )
);
FormInput.displayName = "FormInput";

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ className, label, children, ...props }, ref) => (
    <div>
      {label && (
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground font-sans">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={cn(
          "w-full rounded-[1.2rem] border border-border/80 bg-card px-5 py-4 text-sm text-foreground transition-all duration-300",
          "font-sans focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/35",
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

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, label, ...props }, ref) => (
    <div>
      {label && (
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground font-sans">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={cn(
          "w-full resize-none rounded-[1.2rem] border border-border/80 bg-card px-5 py-4 text-sm text-foreground transition-all duration-300",
          "font-sans placeholder:text-muted-foreground/60 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/35",
          className
        )}
        {...props}
      />
    </div>
  )
);
FormTextarea.displayName = "FormTextarea";

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const GalleryImage = ({ src, alt, className }: GalleryImageProps) => (
  <motion.div
    variants={fadeUpVariants}
    className={cn("group relative cursor-pointer overflow-hidden rounded-[1.6rem]", className)}
  >
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/26" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/80 bg-charcoal/20 backdrop-blur-sm">
        <svg className="h-5 w-5 text-ivory" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  </motion.div>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <LuxuryCard className="group p-8 md:p-9">
    <IconBox size="md" className="mb-6">
      {icon}
    </IconBox>
    <h3 className="mb-3 font-sans text-[1.75rem] text-foreground">{title}</h3>
    <p className="text-[15px] text-muted-foreground font-sans">{description}</p>
  </LuxuryCard>
);

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export const StatCard = ({ icon, value, label }: StatCardProps) => (
  <LuxuryCard className="group p-7 text-center md:p-8">
    <IconBox size="md" className="mx-auto mb-5">
      {icon}
    </IconBox>
    <div className="mb-1 font-sans text-[1.9rem] font-semibold text-foreground md:text-[2.15rem]">{value}</div>
    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-sans">{label}</div>
  </LuxuryCard>
);

interface MediaHeroProps {
  media: React.ReactNode;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "home" | "page" | "editorial";
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
}

export const MediaHero = ({
  media,
  eyebrow,
  title,
  description,
  align = "left",
  variant = "page",
  className,
  contentClassName,
  titleClassName,
  descriptionClassName,
  children,
}: MediaHeroProps) => {
  const sectionClassName = {
    home: "flex min-h-[100svh] items-center",
    page: "flex h-[60vh] min-h-[420px] items-center justify-center",
    editorial: "flex min-h-[62vh] items-end justify-center",
  }[variant];

  const contentContainerClassName = {
    home: "container-editorial",
    page: "container-luxury",
    editorial: "container-luxury",
  }[variant];

  const contentPaddingClassName = {
    home: "w-full px-5 pt-24 sm:px-8 sm:pt-28",
    page: "w-full px-4 sm:px-6",
    editorial: "w-full px-4 sm:px-6",
  }[variant];

  const contentInnerClassName = {
    home: "max-w-3xl py-8 sm:py-10 md:py-12",
    page: "mx-auto max-w-4xl py-10",
    editorial: "max-w-4xl pb-14 sm:pb-18 md:pb-22",
  }[variant];

  return (
    <section className={cn("relative overflow-hidden", sectionClassName, className)}>
      <div className="absolute inset-0">
        {media}
        {variant === "home" ? (
          <>
            <div className="absolute inset-0 bg-charcoal/28" />
            <div className="absolute inset-0 gradient-hero-bottom" />
            <div className="absolute inset-0 gradient-hero" />
            <div className="absolute inset-y-0 left-0 w-[80%] bg-gradient-to-r from-charcoal/94 via-charcoal/74 to-transparent md:w-[68%]" />
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-charcoal/60 to-transparent" />
          </>
        ) : variant === "editorial" ? (
          <>
            <div className="absolute inset-0 bg-charcoal/22" />
            <div className="absolute inset-0 gradient-hero-bottom" />
            <div className="absolute inset-0 gradient-hero" />
            <div className="absolute inset-y-0 left-0 w-[82%] bg-gradient-to-r from-charcoal/92 via-charcoal/70 to-transparent md:w-[66%]" />
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-charcoal/56 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/60 to-charcoal/82" />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-charcoal/30" />
          </>
        )}
      </div>

      <div className={cn("relative z-10", contentPaddingClassName)}>
        <div className={contentContainerClassName}>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              contentInnerClassName,
              align === "center" ? "mx-auto text-center" : "text-left",
              contentClassName
            )}
          >
            <p className="hero-kicker mb-5 text-[11px] uppercase tracking-[0.22em] font-sans sm:text-xs">
              {eyebrow}
            </p>
            <h1
              className={cn(
                "hero-display-text font-sans font-medium text-balance",
                variant === "home"
                  ? "mb-4 max-w-3xl text-[2.95rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.45rem]"
                  : variant === "editorial"
                    ? "mb-5 max-w-4xl text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.6rem]"
                    : "text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem]",
                titleClassName
              )}
            >
              {title}
            </h1>
            {description && (
              <p
                className={cn(
                  "hero-supporting-text font-sans text-base sm:text-lg md:text-[1.0625rem]",
                  align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
                  variant === "home" ? "mb-7" : "mt-5",
                  descriptionClassName
                )}
              >
                {description}
              </p>
            )}
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  alt: string;
  align?: "left" | "center";
  variant?: "page" | "editorial";
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
}

export const PageHero = ({
  image,
  alt,
  variant = "page",
  children,
  ...props
}: PageHeroProps) => (
  <MediaHero
    media={
      <img
        src={image}
        alt={alt}
        className="h-full w-full object-cover"
        fetchPriority="high"
      />
    }
    variant={variant}
    {...props}
  >
    {children}
  </MediaHero>
);

interface EditorialHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  alt: string;
  children?: React.ReactNode;
}

export const EditorialHero = ({
  eyebrow,
  title,
  description,
  image,
  alt,
  children,
}: EditorialHeroProps) => (
  <PageHero
    eyebrow={eyebrow}
    title={title}
    description={description}
    image={image}
    alt={alt}
    align="left"
    variant="editorial"
  >
    {children}
  </PageHero>
);

interface SiteCtaSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonTo: string;
}

export const SiteCtaSection = ({
  eyebrow,
  title,
  description,
  buttonLabel,
  buttonTo,
}: SiteCtaSectionProps) => (
  <section className="relative overflow-hidden bg-charcoal pt-12 pb-9 sm:pt-14 sm:pb-10 md:pt-16 md:pb-12 lg:pt-18 lg:pb-14">
    <div className="absolute inset-0 cta-surface-abstract" />
    <div className="absolute inset-y-0 left-0 w-[62%] bg-gradient-to-r from-charcoal/18 via-charcoal/6 to-transparent md:w-[54%]" />
    <div className="absolute right-[9%] top-[18%] h-52 w-52 rounded-full bg-gold-light/[0.09] blur-3xl" />
    <div className="absolute bottom-[12%] left-[14%] h-40 w-40 rounded-full bg-ivory/[0.08] blur-3xl" />
    <div
      className="absolute inset-0 opacity-[0.018]"
      style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(40 45% 60%) 1px, transparent 0)",
        backgroundSize: "46px 46px",
      }}
    />
    <div className="container-luxury relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-[52rem]"
      >
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="mb-4 max-w-[16ch] font-sans text-[2.2rem] text-ivory sm:text-[2.4rem] md:text-[3.15rem] lg:text-[3.6rem]">
          {title}
        </h2>
        <p className="mb-6 max-w-2xl text-base text-ivory font-sans [text-shadow:0_8px_22px_rgba(0,0,0,0.38)] sm:text-lg">
          {description}
        </p>
        <Button asChild variant="gold" size="xl">
          <Link to={buttonTo}>{buttonLabel}</Link>
        </Button>
      </motion.div>
    </div>
  </section>
);
