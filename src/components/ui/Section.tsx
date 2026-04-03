import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "primary" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
  id?: string;
}

const variantStyles = {
  default:   "bg-background",
  secondary: "bg-secondary stripe-pattern",
  primary:   "bg-primary text-primary-foreground",
  accent:    "bg-accent text-accent-foreground",
};

const sizeStyles = {
  sm: "py-14 md:py-20",
  md: "py-20 md:py-28",
  lg: "py-24 md:py-36",
  xl: "py-28 md:py-44",
};

export function Section({
  children,
  className,
  variant = "default",
  size = "md",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(variantStyles[variant], sizeStyles[size], className)}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Inverse = texto claro sobre fondo oscuro */
  inverse?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className,
  inverse = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-20",
        align === "center" && "text-center max-w-2xl mx-auto",
        className
      )}
    >
      {subtitle && (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] mb-4",
            inverse ? "text-accent" : "text-accent"
          )}
        >
          <span className="w-6 h-px bg-accent rounded-full" />
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold leading-[1.1] mb-5 text-balance",
          inverse ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed",
            inverse ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
