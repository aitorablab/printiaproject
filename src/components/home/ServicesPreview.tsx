import { Link } from "react-router-dom";
import { ArrowRight, Printer, Package, Layers, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { useScrollReveal } from "@/hooks/useScrollEffects";

const services = [
  {
    icon: Printer,
    title: "Impresión comercial",
    description: "Catálogos, folletos, PLV y materiales promocionales con la calidad que tu marca necesita.",
    ideal: "Marketing y comunicación",
    href: "/servicios#comercial",
  },
  {
    icon: Package,
    title: "Packaging personalizado",
    description: "Cajas, estuches y embalajes que protegen tu producto y refuerzan tu identidad de marca.",
    ideal: "Producto y retail",
    href: "/servicios#packaging",
  },
  {
    icon: Layers,
    title: "Tiradas cortas",
    description: "Producciones limitadas con la misma calidad que grandes tiradas. Ideal para tests y lanzamientos.",
    ideal: "Startups y tests de mercado",
    href: "/servicios#tiradas-cortas",
  },
  {
    icon: Sparkles,
    title: "Proyectos especiales",
    description: "Acabados premium, materiales especiales y soluciones a medida para proyectos únicos.",
    ideal: "Marcas premium y lujo",
    href: "/servicios#especiales",
  },
];

export function ServicesPreview() {
  const headerRef = useScrollReveal(0.1);
  const gridRef = useScrollReveal(0.05);

  return (
    <Section variant="default" size="lg">
      <div ref={headerRef as React.RefObject<HTMLDivElement>} className="reveal-container">
        <div data-reveal-child>
          <SectionHeader
            subtitle="Servicios"
            title="Soluciones para cada necesidad"
            description="Desde impresión comercial hasta packaging personalizado. Capacidades completas para proyectos B2B exigentes."
            italic
          />
        </div>
      </div>

      <div
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className="reveal-container grid md:grid-cols-2 gap-4"
      >
        {services.map((service, i) => (
          <Link
            key={i}
            to={service.href}
            data-reveal-child
            className="service-card group relative flex gap-5 p-6 bg-[hsl(var(--card))] rounded-2xl border border-[hsl(var(--border))] overflow-hidden"
          >
            {/* Accent left stripe on hover */}
            <span
              className="absolute left-0 top-4 bottom-4 w-0.5 rounded-r-full bg-[hsl(var(--accent))] opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:top-3 group-hover:bottom-3"
            />

            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200"
              style={{ background: "hsl(var(--primary))" }}
              // on group hover, this is handled via group-hover in child
            >
              <service.icon className="w-6 h-6 text-white" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-display text-lg text-[hsl(var(--foreground))] mb-2 group-hover:text-[hsl(var(--primary))] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3.5 leading-relaxed font-sans">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[hsl(var(--accent))]">
                <span className="w-1 h-1 rounded-full bg-[hsl(var(--accent))]" />
                Ideal para: {service.ideal}
              </span>
            </div>

            <ArrowRight
              className="w-4 h-4 text-[hsl(var(--muted-foreground))] shrink-0 self-start mt-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
            />
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/servicios"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-[hsl(var(--primary)/0.28)] text-[hsl(var(--primary))] font-sans font-semibold text-sm hover:bg-[hsl(var(--primary))] hover:text-white hover:border-[hsl(var(--primary))] transition-all duration-200 group"
        >
          Ver todos los servicios
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
        </Link>
      </div>
    </Section>
  );
}
