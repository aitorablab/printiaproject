import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, AlertCircle, Clock, Users, RefreshCw, CheckCircle, Target, Shield, Zap } from "lucide-react";

const challenges = [
  {
    icon: AlertCircle,
    title: "Cada pedido es diferente",
    problem: "Especificaciones únicas, materiales variados, formatos especiales. La personalización es la norma, no la excepción.",
    solution: "Presupuestos a medida con análisis detallado de cada proyecto. Sin plantillas genéricas.",
  },
  {
    icon: Clock,
    title: "Plazos exigentes",
    problem: "Fechas inamovibles, campañas con calendario cerrado, lanzamientos que no pueden esperar.",
    solution: "Planificación rigurosa y control de producción para garantizar entregas puntuales.",
  },
  {
    icon: RefreshCw,
    title: "Validaciones del cliente",
    problem: "Aprobaciones que se retrasan, cambios de última hora, múltiples revisiones.",
    solution: "Procesos claros de validación con hitos definidos y comunicación proactiva.",
  },
  {
    icon: Users,
    title: "Coordinación interna",
    problem: "Marketing, compras, producción, logística... Muchos departamentos involucrados en cada proyecto.",
    solution: "Interlocutor único que centraliza la comunicación y gestiona todas las fases.",
  },
];

const responses = [
  {
    icon: Target,
    title: "Enfoque a procesos",
    description: "Metodología probada que minimiza errores, optimiza tiempos y asegura resultados predecibles.",
  },
  {
    icon: Zap,
    title: "Flexibilidad operativa",
    description: "Capacidad de adaptación a cambios sin comprometer calidad ni plazos establecidos.",
  },
  {
    icon: Shield,
    title: "Control integral",
    description: "Supervisión de cada fase del proyecto: desde el diseño inicial hasta la entrega final.",
  },
  {
    icon: CheckCircle,
    title: "Comunicación proactiva",
    description: "Informes de estado, alertas tempranas y transparencia total durante todo el proceso.",
  },
];

const RetosPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <Section variant="primary" size="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border-2 border-accent rounded-full" />
          <div className="absolute bottom-10 left-10 w-40 h-40 border border-primary-foreground/30 rounded-full" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Retos y soluciones
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Entendemos los retos de la impresión B2B
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Sabemos que cada proyecto trae sus propios desafíos. Por eso hemos diseñado 
            nuestra forma de trabajar para anticiparnos a los problemas y resolverlos antes de que ocurran.
          </p>
        </div>
      </Section>

      {/* Challenges Grid */}
      <Section variant="secondary" size="lg">
        <SectionHeader
          subtitle="Los desafíos"
          title="Retos habituales que conocemos bien"
          description="Después de más de 25 años trabajando con empresas B2B, hemos visto y resuelto prácticamente todo."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((item, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.problem}</p>
                </div>
              </div>
              <div className="pl-16 border-l-2 border-accent">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Solución PrintIA</span>
                <p className="text-foreground mt-2">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Response */}
      <Section variant="default" size="lg">
        <SectionHeader
          subtitle="Nuestra respuesta"
          title="Cómo respondemos a estos retos"
          description="No solo identificamos problemas: los anticipamos y prevenimos con procesos probados."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {responses.map((item, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Partner CTA */}
      <Section variant="primary" size="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            PrintIA: tu partner operativo
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Más que un proveedor de impresión, somos un aliado que entiende tu negocio 
            y trabaja contigo para hacer realidad cada proyecto.
          </p>
          <Button variant="hero" size="xxl" asChild>
            <Link to="/contacto">
              Hablemos de tu proyecto
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default RetosPage;
