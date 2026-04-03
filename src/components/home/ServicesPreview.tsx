import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Printer, Package, Layers, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Printer,
    title: "Impresión comercial",
    description:
      "Catálogos, folletos, PLV y materiales promocionales con la calidad que tu marca necesita.",
    ideal: "Marketing y comunicación",
    href: "/servicios#comercial",
    accent: false,
  },
  {
    icon: Package,
    title: "Packaging personalizado",
    description:
      "Cajas, estuches y embalajes que protegen tu producto y refuerzan tu identidad de marca.",
    ideal: "Producto y retail",
    href: "/servicios#packaging",
    accent: true,
  },
  {
    icon: Layers,
    title: "Tiradas cortas",
    description:
      "Producciones limitadas con la misma calidad que grandes tiradas. Ideal para tests y lanzamientos.",
    ideal: "Startups y tests de mercado",
    href: "/servicios#tiradas-cortas",
    accent: false,
  },
  {
    icon: Sparkles,
    title: "Proyectos especiales",
    description:
      "Acabados premium, materiales especiales y soluciones a medida para proyectos únicos.",
    ideal: "Marcas premium y lujo",
    href: "/servicios#especiales",
    accent: false,
  },
];

export function ServicesPreview() {
  return (
    <Section variant="secondary" size="lg">
      <SectionHeader
        subtitle="Servicios"
        title="Soluciones para cada necesidad"
        description="Desde impresión comercial hasta packaging personalizado. Capacidades completas para proyectos B2B exigentes."
      />

      <div className="grid md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.href}
            className={cn(
              "group relative bg-card rounded-2xl p-6 border transition-all duration-300",
              "hover:shadow-premium-lg hover:-translate-y-0.5",
              service.accent
                ? "border-accent/30 shadow-accent"
                : "border-border hover:border-accent/25"
            )}
          >
            {/* Featured badge */}
            {service.accent && (
              <span className="absolute top-4 right-4 badge-accent text-[10px]">
                Popular
              </span>
            )}

            <div className="flex gap-5 items-start">
              {/* Icon */}
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300",
                  service.accent
                    ? "bg-accent shadow-accent"
                    : "bg-primary group-hover:bg-accent group-hover:shadow-accent"
                )}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-semibold text-base group-hover:text-accent transition-colors duration-200">
                    {service.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm mb-3.5 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Ideal para: {service.ideal}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outlinePrimary" size="lg" asChild>
          <Link to="/servicios">
            Ver todos los servicios
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
