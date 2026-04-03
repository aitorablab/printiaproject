import { Link } from "react-router-dom";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Factory, Megaphone, Package, ShoppingBag, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const sectors = [
  {
    icon: Factory,
    title: "Empresas industriales",
    description: "Documentación técnica, etiquetado y packaging industrial.",
    href: "/sectores#industrial",
    color: "group-hover:text-blue-600",
    bg: "group-hover:bg-blue-50",
  },
  {
    icon: Megaphone,
    title: "Marketing y comunicación",
    description: "Materiales promocionales, PLV y campañas multicanal.",
    href: "/sectores#marketing",
    color: "group-hover:text-orange-500",
    bg: "group-hover:bg-orange-50",
  },
  {
    icon: Package,
    title: "Packaging y producto",
    description: "Embalajes, cajas y presentación de producto a medida.",
    href: "/sectores#packaging",
    color: "group-hover:text-blue-600",
    bg: "group-hover:bg-blue-50",
  },
  {
    icon: ShoppingBag,
    title: "Retail y marcas",
    description: "Señalética, displays y comunicación en punto de venta.",
    href: "/sectores#retail",
    color: "group-hover:text-orange-500",
    bg: "group-hover:bg-orange-50",
  },
];

export function SectorsPreview() {
  return (
    <Section variant="secondary" size="lg">
      <SectionHeader
        subtitle="Sectores"
        title="Expertos en tu industria"
        description="Conocemos las necesidades específicas de cada sector. Hablamos tu idioma."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sectors.map((sector, index) => (
          <Link
            key={index}
            to={sector.href}
            className={cn(
              "group bg-card rounded-2xl p-6 border border-border text-center",
              "transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-1 hover:border-accent/20"
            )}
          >
            {/* Icon container */}
            <div
              className={cn(
                "w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-4",
                "transition-all duration-300",
                sector.bg
              )}
            >
              <sector.icon
                className={cn(
                  "w-6 h-6 text-primary transition-colors duration-300",
                  sector.color
                )}
              />
            </div>

            <h3
              className={cn(
                "font-display font-semibold text-sm mb-2 transition-colors duration-200",
                "group-hover:text-accent"
              )}
            >
              {sector.title}
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed mb-4">
              {sector.description}
            </p>

            {/* Arrow */}
            <span className="inline-flex items-center gap-1 text-xs font-medium text-accent/0 group-hover:text-accent transition-all duration-200">
              Ver más
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/sectores"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors group"
        >
          Ver todos los sectores
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </Section>
  );
}
