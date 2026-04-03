import { Link } from "react-router-dom";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollEffects";

const steps = [
  {
    number: "01",
    title: "Contacto y entendimiento",
    description: "Analizamos tu proyecto, plazos y necesidades específicas.",
  },
  {
    number: "02",
    title: "Presupuesto a medida",
    description: "Propuesta detallada con opciones y recomendaciones claras.",
  },
  {
    number: "03",
    title: "Planificación",
    description: "Definimos hitos, validaciones y calendario de producción.",
  },
  {
    number: "04",
    title: "Producción y entrega",
    description: "Fabricación controlada y logística puntual hasta tu destino.",
  },
];

export function ProcessPreview() {
  const headerRef = useScrollReveal(0.1);
  const stepsRef = useScrollReveal(0.05);

  return (
    <Section variant="secondary" size="lg">
      <div ref={headerRef as React.RefObject<HTMLDivElement>} className="reveal-container">
        <div data-reveal-child>
          <SectionHeader
            subtitle="Cómo trabajamos"
            title="Un proceso diseñado para ti"
            description="De principio a fin, te acompañamos en cada fase del proyecto."
            italic
          />
        </div>
      </div>

      <div className="relative">
        {/* Dashed connector line — desktop only */}
        <div
          className="hidden lg:block absolute z-0"
          style={{
            top: "1.5rem",
            left: "calc(12.5% + 24px)",
            right: "calc(12.5% + 24px)",
            height: "1px",
            background: "repeating-linear-gradient(90deg, hsl(213 18% 82%) 0px, hsl(213 18% 82%) 6px, transparent 6px, transparent 16px)",
          }}
        />

        <div
          ref={stepsRef as React.RefObject<HTMLDivElement>}
          className="reveal-container grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10"
        >
          {steps.map((step, i) => (
            <div key={i} data-reveal-child className="flex flex-col">
              {/* Number bubble */}
              <div
                className="relative w-12 h-12 rounded-full flex items-center justify-center mb-5"
                style={{
                  background: "hsl(var(--primary))",
                  boxShadow: "var(--shadow-md)",
                  outline: "4px solid hsl(var(--secondary))",
                }}
              >
                <span className="font-sans font-bold text-white text-xs tracking-wide">
                  {step.number}
                </span>
                {/* Accent dot on first step */}
                {i === 0 && (
                  <span
                    className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full"
                    style={{
                      background: "hsl(var(--accent))",
                      boxShadow: "0 0 8px hsl(20 92% 52% / 0.6)",
                      outline: "2px solid hsl(var(--secondary))",
                    }}
                  />
                )}
              </div>

              {/* Card */}
              <div
                className="flex-1 bg-[hsl(var(--card))] rounded-2xl p-6 border border-[hsl(var(--border))] process-step-card"
              >
                <h3 className="font-display text-lg mb-2 text-[hsl(var(--foreground))]">
                  {step.title}
                </h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <Link
          to="/proceso"
          className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[hsl(var(--accent))] hover:text-[hsl(20_92%_40%)] transition-colors group"
        >
          Ver proceso completo
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
        </Link>
      </div>
    </Section>
  );
}
