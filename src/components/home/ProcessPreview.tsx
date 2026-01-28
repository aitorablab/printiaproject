import { Link } from "react-router-dom";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

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
        {/* Connection line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step card */}
              <div className="bg-card rounded-xl p-6 shadow-md border border-border relative z-10 h-full">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="text-primary-foreground font-display font-bold text-sm">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/proceso"
          className="inline-flex items-center text-accent font-semibold hover:underline"
        >
          Ver proceso completo
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}
