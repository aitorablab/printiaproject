import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Printer, Package, Layers, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const services = [
  {
    icon: Printer,
    title: "Impresión comercial",
    description:
      "Catálogos, folletos, PLV y materiales promocionales con la calidad que tu marca necesita.",
    ideal: "Marketing y comunicación",
    href: "/servicios#comercial",
  },
  {
    icon: Package,
    title: "Packaging personalizado",
    description:
      "Cajas, estuches y embalajes que protegen tu producto y refuerzan tu identidad de marca.",
    ideal: "Producto y retail",
    href: "/servicios#packaging",
  },
  {
    icon: Layers,
    title: "Tiradas cortas",
    description:
      "Producciones limitadas con la misma calidad que grandes tiradas. Ideal para tests y lanzamientos.",
    ideal: "Startups y tests de mercado",
    href: "/servicios#tiradas-cortas",
  },
  {
    icon: Sparkles,
    title: "Proyectos especiales",
    description:
      "Acabados premium, materiales especiales y soluciones a medida para proyectos únicos.",
    ideal: "Marcas premium y lujo",
    href: "/servicios#especiales",
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

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.href}
            className="group bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-transparent hover:border-accent/20"
          >
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-xs font-medium text-accent">
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
