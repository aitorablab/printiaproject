import { Section, SectionHeader } from "@/components/ui/Section";
import { AlertCircle, RefreshCw, Users, Timer } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollEffects";

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

const responses = [
  { title: "Enfoque a procesos", text: "Metodología probada que minimiza errores y optimiza tiempos." },
  { title: "Flexibilidad operativa", text: "Nos adaptamos a cambios sin perder el control del proyecto." },
  { title: "Control de principio a fin", text: "Un único interlocutor gestiona todo: desde presupuesto hasta entrega." },
  { title: "Comunicación proactiva", text: "Te mantenemos informado en cada fase. Sin sorpresas." },
];

export function ChallengesSection() {
  const leftRef = useScrollReveal(0.1);
  const rightRef = useScrollReveal(0.1);

  return (
    <Section variant="secondary" size="lg">
      <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

        {/* Left */}
        <div ref={leftRef as React.RefObject<HTMLDivElement>} className="reveal-container">
          <div data-reveal-child>
            <SectionHeader
              subtitle="Entendemos tus retos"
              title="Los desafíos de la impresión B2B"
              align="left"
            />
          </div>
          <div className="space-y-4">
            {challenges.map((item, i) => (
              <div
                key={i}
                data-reveal-child
                className="flex gap-4 p-5 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] challenge-card"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "hsl(var(--primary) / 0.07)" }}
                >
                  <item.icon className="text-[hsl(var(--primary))]" style={{ width: 17, height: 17 }} />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-[hsl(var(--foreground))] mb-1 text-sm">
                    {item.challenge}
                  </h4>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — dark premium panel */}
        <div ref={rightRef as React.RefObject<HTMLDivElement>} className="reveal-container">
          <div
            data-reveal-child
            className="relative bg-[hsl(var(--primary))] rounded-2xl p-8 md:p-10 overflow-hidden"
          >
            {/* Decorative elements */}
            <div
              className="absolute -top-12 -right-12 w-56 h-56 rounded-full border border-white/6 pointer-events-none"
            />
            <div
              className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border border-white/4 pointer-events-none"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                opacity: 0.035,
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-0.5 bg-[hsl(var(--accent))] rounded-full" />
                <span className="text-[hsl(var(--accent))] font-sans font-semibold text-xs uppercase tracking-[0.14em]">
                  Nuestra respuesta
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-white mb-8 italic">
                Cómo responde PrintIA
              </h3>
              <ul className="space-y-5">
                {responses.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "hsl(var(--accent))" }}
                    >
                      <span className="text-white text-xs font-sans font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <span className="font-sans font-semibold text-white text-sm">{item.title}: </span>
                      <span className="text-white/62 text-sm font-sans">{item.text}</span>
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
