import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-semibold tracking-[0.12em] ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "rounded-full bg-primary text-primary-foreground shadow-soft hover:bg-primary/92 hover:shadow-elegant",
        destructive: "rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "rounded-full border border-border bg-background/80 text-foreground hover:border-gold/30 hover:bg-secondary/60",
        secondary: "rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/85",
        ghost: "rounded-full text-foreground/80 hover:bg-foreground/[0.04] hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gold: "rounded-full bg-gold text-charcoal shadow-elegant hover:bg-gold-dark hover:shadow-luxury",
        goldOutline: "rounded-full border border-gold/70 bg-transparent text-gold shadow-none hover:border-gold hover:bg-gold/8 hover:text-gold-light",
        luxury: "rounded-full bg-charcoal text-ivory shadow-elegant hover:bg-charcoal-light",
        ivoryOutline: "rounded-full border border-ivory/75 bg-transparent text-ivory shadow-none hover:border-ivory hover:bg-ivory/10",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-10 px-5 text-[12px]",
        lg: "h-12 px-8 text-[13px]",
        xl: "h-14 px-10 text-sm sm:px-12",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
