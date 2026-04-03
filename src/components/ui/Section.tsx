import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "primary" | "accent" | "ivory";
  size?: "sm" | "md" | "lg" | "xl";
  id?: string;
}

const variantStyles: Record<string, string> = {
  default:   "bg-[hsl(var(--background))]",
  secondary: "bg-[hsl(var(--secondary))]",
  ivory:     "bg-[hsl(40_20%_97%)]",
  primary:   "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]",
  accent:    "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]",
};

const sizeStyles: Record<string, string> = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-28",
  xl: "py-24 md:py-36",
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
      <div className="container mx-auto px-6 lg:px-8">{children}</div>
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
        align === "center" && "text-center max-w-2xl mx-auto",
        className
      )}
    >
      {/* Eyebrow */}
      {subtitle && (
        <div className={cn("mb-3", align === "center" && "flex justify-center")}>
          <span className="accent-line inline-flex items-center text-[hsl(var(--accent))] font-semibold text-xs uppercase tracking-[0.12em]">
            {subtitle}
          </span>
        </div>
      )}

      {/* Title — Sora Bold, tight */}
      <h2
        className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold mb-4 text-balance"
        style={{ letterSpacing: "-0.03em", lineHeight: 1.12 }}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className="text-base md:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed font-light"
        >
          {description}
        </p>
      )}
    </div>
  );
}
