import { Package, Clock, Users, ShieldCheck } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Package,
    title: "Proyectos personalizados",
    description:
      "Cada pedido es único. Adaptamos formatos, materiales y acabados a tus necesidades específicas sin comprometer calidad ni plazos.",
    color: "from-orange-500/10 to-orange-500/5",
  },
  {
    icon: Clock,
    title: "Plazos ajustados",
    description:
      "Entendemos la urgencia del mercado. Planificamos y ejecutamos para cumplir fechas exigentes sin sorpresas.",
    color: "from-blue-600/10 to-blue-600/5",
  },
  {
    icon: Users,
    title: "Acompañamiento completo",
    description:
      "Desde el primer contacto hasta la entrega final. Un interlocutor único que coordina todo el proceso por ti.",
    color: "from-orange-500/10 to-orange-500/5",
  },
  {
    icon: ShieldCheck,
    title: "Experiencia industrial",
    description:
      "Más de 25 años resolviendo proyectos complejos. Conocemos los retos reales de la producción B2B.",
    color: "from-blue-600/10 to-blue-600/5",
  },
];

export function ValueProposition() {
  return (
    <Section variant="secondary" size="lg">
      <SectionHeader
        subtitle="Por qué PrintIA"
        title="El partner que tu producción necesita"
        description="No solo imprimimos. Gestionamos, planificamos y resolvemos para que cada proyecto llegue a tiempo y sin complicaciones."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {values.map((value, index) => (
          <div
            key={index}
            className={cn(
              "group relative bg-card rounded-2xl p-7 border border-border",
              "transition-all duration-300 ease-out",
              "hover:shadow-premium-lg hover:-translate-y-1 hover:border-accent/20"
            )}
          >
            {/* Gradient de fondo sutil */}
            <div
              className={cn(
                "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                value.color
              )}
            />

            {/* Borde izquierdo accent — marca de premium */}
            <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:shadow-accent transition-all duration-300">
                <value.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="font-display font-semibold text-base mb-2.5 group-hover:text-accent transition-colors duration-200">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
