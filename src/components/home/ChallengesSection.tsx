import { Section, SectionHeader } from "@/components/ui/Section";
import { AlertCircle, RefreshCw, Users, Timer } from "lucide-react";

const challenges = [
  {
    icon: AlertCircle,
    challenge: "Complejidad de pedidos",
    description: "Cada proyecto tiene especificaciones únicas que requieren atención al detalle.",
  },
  {
    icon: RefreshCw,
    challenge: "Cambios de última hora",
    description: "Las modificaciones son inevitables. Necesitas un partner que se adapte rápido.",
  },
  {
    icon: Users,
    challenge: "Coordinación interna",
    description: "Marketing, ventas, producción... Muchos departamentos, un solo resultado.",
  },
  {
    icon: Timer,
    challenge: "Cumplimiento de plazos",
    description: "Las fechas de entrega son críticas. No hay margen para retrasos.",
  },
];

export function ChallengesSection() {
  return (
    <Section variant="default" size="lg">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Challenges */}
        <div>
          <SectionHeader
            subtitle="Entendemos tus retos"
            title="Los desafíos de la impresión B2B"
            align="left"
          />
          <div className="space-y-6">
            {challenges.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{item.challenge}</h4>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: How PrintIA Responds */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestra respuesta
          </span>
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-6">
            Cómo responde PrintIA
          </h3>
          <ul className="space-y-4">
            {[
              {
                title: "Enfoque a procesos",
                text: "Metodología probada que minimiza errores y optimiza tiempos.",
              },
              {
                title: "Flexibilidad operativa",
                text: "Nos adaptamos a cambios sin perder el control del proyecto.",
              },
              {
                title: "Control de principio a fin",
                text: "Un único interlocutor que gestiona todo: desde presupuesto hasta entrega.",
              },
              {
                title: "Comunicación proactiva",
                text: "Te mantenemos informado en cada fase. Sin sorpresas.",
              },
            ].map((item, index) => (
              <li key={index} className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-accent-foreground text-xs font-bold">{index + 1}</span>
                </div>
                <div>
                  <span className="font-semibold">{item.title}:</span>{" "}
                  <span className="text-primary-foreground/80">{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
