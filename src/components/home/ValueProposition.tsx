import { Package, Clock, Users, ShieldCheck } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const values = [
  {
    icon: Package,
    title: "Proyectos personalizados",
    description:
      "Cada pedido es único. Adaptamos formatos, materiales y acabados a tus necesidades específicas sin comprometer calidad ni plazos.",
  },
  {
    icon: Clock,
    title: "Plazos ajustados",
    description:
      "Entendemos la urgencia del mercado. Planificamos y ejecutamos para cumplir fechas exigentes sin sorpresas.",
  },
  {
    icon: Users,
    title: "Acompañamiento completo",
    description:
      "Desde el primer contacto hasta la entrega final. Un interlocutor único que coordina todo el proceso por ti.",
  },
  {
    icon: ShieldCheck,
    title: "Experiencia industrial",
    description:
      "Más de 25 años resolviendo proyectos complejos. Conocemos los retos reales de la producción B2B.",
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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <value.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">
              {value.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
