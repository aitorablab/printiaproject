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
  default: "bg-background",
  secondary: "bg-secondary",
  primary: "bg-primary text-primary-foreground",
  accent: "bg-accent text-accent-foreground",
};

const sizeStyles = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
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
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center max-w-3xl mx-auto",
        className
      )}
    >
      {subtitle && (
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
