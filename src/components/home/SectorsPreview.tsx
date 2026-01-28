import { Link } from "react-router-dom";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Factory, Megaphone, Package, ShoppingBag, ArrowRight } from "lucide-react";

const sectors = [
  {
    icon: Factory,
    title: "Empresas industriales",
    description: "Documentación técnica, etiquetado y packaging industrial.",
    href: "/sectores#industrial",
  },
  {
    icon: Megaphone,
    title: "Marketing y comunicación",
    description: "Materiales promocionales, PLV y campañas multicanal.",
    href: "/sectores#marketing",
  },
  {
    icon: Package,
    title: "Packaging y producto",
    description: "Embalajes, cajas y presentación de producto a medida.",
    href: "/sectores#packaging",
  },
  {
    icon: ShoppingBag,
    title: "Retail y marcas",
    description: "Señalética, displays y comunicación en punto de venta.",
    href: "/sectores#retail",
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectors.map((sector, index) => (
          <Link
            key={index}
            to={sector.href}
            className="group bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center border border-transparent hover:border-accent/20"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <sector.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
              {sector.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {sector.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/sectores"
          className="inline-flex items-center text-accent font-semibold hover:underline"
        >
          Ver todos los sectores
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}
