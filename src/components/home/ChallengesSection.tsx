import { Section, SectionHeader } from "@/components/ui/Section";
import { AlertCircle, RefreshCw, Users, Timer } from "lucide-react";
import { cn } from "@/lib/utils";

const challenges = [
  {
    icon: AlertCircle,
    challenge: "Complejidad de pedidos",
    description:
      "Cada proyecto tiene especificaciones únicas que requieren atención al detalle.",
  },
  {
    icon: RefreshCw,
    challenge: "Cambios de última hora",
    description:
      "Las modificaciones son inevitables. Necesitas un partner que se adapte rápido.",
  },
  {
    icon: Users,
    challenge: "Coordinación interna",
    description:
      "Marketing, ventas, producción... Muchos departamentos, un solo resultado.",
  },
  {
    icon: Timer,
    challenge: "Cumplimiento de plazos",
    description:
      "Las fechas de entrega son críticas. No hay margen para retrasos.",
  },
];

const responses = [
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
];

export function ChallengesSection() {
  return (
    <Section variant="default" size="lg">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: Retos ── */}
        <div>
          <SectionHeader
            subtitle="Entendemos tus retos"
            title="Los desafíos de la impresión B2B"
            align="left"
          />
          <div className="space-y-5">
            {challenges.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "group flex gap-4 p-4 rounded-xl border border-transparent",
                  "transition-all duration-200 hover:border-border hover:bg-secondary/60"
                )}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-200">
                  <item.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{item.challenge}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Respuesta PrintIA ── */}
        <div className="relative">
          {/* Glow de fondo */}
          <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl" />

          <div className="relative bg-primary rounded-2xl p-8 md:p-10 shadow-primary overflow-hidden">
            {/* Textura dot pattern */}
            <div className="absolute inset-0 dot-pattern opacity-20" />
            {/* Orb decorativo */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent/15 blur-2xl" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-5">
                <span className="w-5 h-px bg-accent rounded-full" />
                Nuestra respuesta
              </span>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-8 leading-tight">
                Cómo responde PrintIA
              </h3>

              <ul className="space-y-5">
                {responses.map((item, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    {/* Número */}
                    <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5 shadow-accent">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-primary-foreground text-sm">
                        {item.title}:{" "}
                      </span>
                      <span className="text-primary-foreground/65 text-sm leading-relaxed">
                        {item.text}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
