import { Link } from "react-router-dom";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Factory, Megaphone, Package, ShoppingBag, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollEffects";

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
  const headerRef = useScrollReveal(0.1);
  const gridRef = useScrollReveal(0.05);

  return (
    <Section variant="default" size="lg">
      <div ref={headerRef as React.RefObject<HTMLDivElement>} className="reveal-container">
        <div data-reveal-child>
          <SectionHeader
            subtitle="Sectores"
            title="Expertos en tu industria"
            description="Conocemos las necesidades específicas de cada sector. Hablamos tu idioma."
            italic
          />
        </div>
      </div>

      <div
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className="reveal-container grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {sectors.map((sector, i) => (
          <Link
            key={i}
            to={sector.href}
            data-reveal-child
            className="sector-card group flex flex-col items-center text-center p-7 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))]"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-220"
              style={{ background: "hsl(var(--secondary))" }}
            >
              <sector.icon
                className="transition-colors duration-220"
                style={{ width: 24, height: 24, color: "hsl(var(--primary))" }}
              />
            </div>
            <h3 className="font-display text-base mb-2 text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
              {sector.title}
            </h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed font-sans">
              {sector.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/sectores"
          className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[hsl(var(--accent))] hover:text-[hsl(20_92%_40%)] transition-colors group"
        >
          Ver todos los sectores
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
        </Link>
      </div>
    </Section>
  );
}
