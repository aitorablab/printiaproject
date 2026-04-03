import { Link } from "react-router-dom";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  return (
    <Section variant="default" size="lg">
      <SectionHeader
        subtitle="Cómo trabajamos"
        title="Un proceso diseñado para ti"
        description="De principio a fin, te acompañamos en cada fase del proyecto."
      />

      <div className="relative">
        {/* ── Línea conectora desktop ── */}
        <div
          className="hidden lg:block absolute top-7 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent 4%, hsl(var(--border)) 4%, hsl(var(--border)) 96%, transparent 96%)",
          }}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "group relative bg-card rounded-2xl p-6 border border-border",
                "transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-1 hover:border-accent/20"
              )}
            >
              {/* Número — posicionado en el top como chip */}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-5 shadow-primary group-hover:bg-accent group-hover:shadow-accent transition-all duration-300">
                <span className="font-display font-bold text-base text-primary-foreground leading-none">
                  {step.number}
                </span>
              </div>

              <h3 className="font-display font-semibold text-base mb-2 group-hover:text-accent transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Flecha entre steps (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-7 w-6 h-6 items-center justify-center z-20 bg-background rounded-full border border-border">
                  <ArrowRight className="w-3 h-3 text-muted-foreground/60" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/proceso"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors group"
        >
          Ver proceso completo
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </Section>
  );
}
