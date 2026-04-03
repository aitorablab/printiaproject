import { Package, Clock, Users, ShieldCheck } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { useScrollReveal } from "@/hooks/useScrollEffects";

const values = [
  {
    icon: Package,
    title: "Proyectos personalizados",
    description:
      "Cada pedido es único. Adaptamos formatos, materiales y acabados a tus necesidades sin comprometer calidad ni plazos.",
    number: "01",
  },
  {
    icon: Clock,
    title: "Plazos ajustados",
    description:
      "Entendemos la urgencia del mercado. Planificamos y ejecutamos para cumplir fechas exigentes sin sorpresas.",
    number: "02",
  },
  {
    icon: Users,
    title: "Acompañamiento completo",
    description:
      "Desde el primer contacto hasta la entrega final. Un interlocutor único que coordina todo el proceso por ti.",
    number: "03",
  },
  {
    icon: ShieldCheck,
    title: "Experiencia industrial",
    description:
      "Más de 25 años resolviendo proyectos complejos. Conocemos los retos reales de la producción B2B.",
    number: "04",
  },
];

export function ValueProposition() {
  const headerRef = useScrollReveal(0.1);
  const gridRef = useScrollReveal(0.08);

  return (
    <Section variant="default" size="lg">
      <div ref={headerRef as React.RefObject<HTMLDivElement>} className="reveal-container">
        <div data-reveal-child>
          <SectionHeader
            subtitle="Por qué PrintIA"
            title="El partner que tu producción necesita"
            description="No solo imprimimos. Gestionamos, planificamos y resolvemos para que cada proyecto llegue a tiempo y sin complicaciones."
            italic
          />
        </div>
      </div>

      <div
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className="reveal-container grid md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {values.map((value) => (
          <div
            key={value.number}
            data-reveal-child
            className="value-card relative bg-[hsl(var(--card))] rounded-2xl p-7 border border-[hsl(var(--border))] overflow-hidden h-full"
          >
            {/* Ghost number */}
            <span
              className="absolute top-3 right-4 font-display leading-none select-none pointer-events-none"
              style={{ fontSize: "5rem", color: "hsl(var(--primary) / 0.042)" }}
            >
              {value.number}
            </span>

            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "hsl(var(--secondary))" }}
            >
              <value.icon className="w-5 h-5 text-[hsl(var(--accent))]" />
            </div>

            <h3 className="font-display text-lg mb-2.5 text-[hsl(var(--foreground))]">
              {value.title}
            </h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed font-sans">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
