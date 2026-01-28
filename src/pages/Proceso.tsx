import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, FileText, Calendar, Factory, CheckSquare, Truck, Receipt } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Contacto y entendimiento",
    description: "Analizamos tu proyecto en profundidad: objetivos, plazos, especificaciones técnicas y cualquier requisito especial.",
    details: [
      "Reunión inicial (presencial o remota)",
      "Análisis de necesidades y expectativas",
      "Revisión de materiales de referencia",
      "Identificación de restricciones y prioridades",
    ],
  },
  {
    number: "02",
    icon: FileText,
    title: "Presupuesto a medida",
    description: "Preparamos una propuesta detallada con opciones claras, recomendaciones técnicas y calendario preliminar.",
    details: [
      "Propuesta económica desglosada",
      "Opciones de materiales y acabados",
      "Calendario de producción estimado",
      "Condiciones y forma de pago",
    ],
  },
  {
    number: "03",
    icon: Calendar,
    title: "Planificación y preparación",
    description: "Definimos hitos de validación, preparamos archivos y coordinamos todos los elementos necesarios.",
    details: [
      "Cronograma detallado con hitos",
      "Revisión técnica de archivos",
      "Pruebas de color si es necesario",
      "Confirmación de materiales y fechas",
    ],
  },
  {
    number: "04",
    icon: Factory,
    title: "Producción",
    description: "Fabricación con control de calidad en cada fase. Te mantenemos informado del progreso en todo momento.",
    details: [
      "Producción con controles de calidad",
      "Informes de estado periódicos",
      "Gestión de incidencias en tiempo real",
      "Muestras de producción cuando aplica",
    ],
  },
  {
    number: "05",
    icon: CheckSquare,
    title: "Validación",
    description: "Verificamos que el resultado cumple con todas las especificaciones antes de dar luz verde a la entrega.",
    details: [
      "Control de calidad final",
      "Verificación de cantidades",
      "Documentación fotográfica",
      "Aprobación para envío",
    ],
  },
  {
    number: "06",
    icon: Truck,
    title: "Logística y entrega",
    description: "Coordinamos el transporte para que el material llegue donde y cuando lo necesitas.",
    details: [
      "Embalaje protector adecuado",
      "Gestión de transporte",
      "Entregas parciales si es necesario",
      "Seguimiento en tiempo real",
    ],
  },
  {
    number: "07",
    icon: Receipt,
    title: "Facturación y postventa",
    description: "Cerramos el proyecto con documentación completa y soporte continuo para futuras necesidades.",
    details: [
      "Facturación según lo acordado",
      "Documentación del proyecto",
      "Evaluación de satisfacción",
      "Soporte postventa",
    ],
  },
];

const ProcesoPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <Section variant="primary" size="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border-2 border-accent rounded-full" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Cómo trabajamos
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            El proceso PrintIA
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Un flujo de trabajo diseñado para minimizar sorpresas, maximizar la eficiencia 
            y garantizar resultados predecibles en cada proyecto.
          </p>
        </div>
      </Section>

      {/* Intro */}
      <Section variant="secondary" size="md">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Acompañamiento de principio a fin
          </h2>
          <p className="text-lg text-muted-foreground">
            No somos solo una imprenta. Somos tu partner de producción. Eso significa que 
            nos involucramos en cada fase del proyecto para asegurar que todo sale según lo previsto.
          </p>
        </div>
      </Section>

      {/* Steps */}
      <Section variant="default" size="lg">
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative grid lg:grid-cols-2 gap-8 py-12 border-b border-border last:border-0"
            >
              {/* Left: Number and Title */}
              <div className={`flex gap-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-display font-bold text-xl">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-5 h-5 text-accent" />
                    <h3 className="font-display font-bold text-xl md:text-2xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Right: Details */}
              <div className={`bg-secondary rounded-xl p-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Qué incluye esta fase
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="primary" size="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Cuéntanos tu proyecto y te guiaremos paso a paso hasta el resultado final.
          </p>
          <Button variant="hero" size="xxl" asChild>
            <Link to="/contacto">
              Iniciar proyecto
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default ProcesoPage;
