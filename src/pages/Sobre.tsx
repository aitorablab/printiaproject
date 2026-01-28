import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Award, Clock, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Orientación al cliente",
    description: "Cada proyecto es único. Escuchamos, entendemos y adaptamos nuestra respuesta a tus necesidades reales.",
  },
  {
    icon: Users,
    title: "Trabajo en equipo",
    description: "Creemos en las relaciones a largo plazo. No somos proveedores, somos partners de nuestros clientes.",
  },
  {
    icon: Award,
    title: "Excelencia técnica",
    description: "Inversión continua en tecnología y formación para ofrecer la mejor calidad en cada proyecto.",
  },
  {
    icon: Clock,
    title: "Compromiso con plazos",
    description: "Sabemos que los plazos son críticos. Nuestra palabra es nuestro compromiso.",
  },
];

const milestones = [
  { year: "1998", title: "Fundación", description: "Inicio de actividad como pequeña imprenta local." },
  { year: "2005", title: "Expansión", description: "Ampliación de instalaciones y entrada en packaging." },
  { year: "2012", title: "Digitalización", description: "Incorporación de tecnología digital de última generación." },
  { year: "2018", title: "Especialización B2B", description: "Enfoque estratégico en clientes industriales y corporativos." },
  { year: "2023", title: "Certificaciones", description: "ISO 9001, FSC y cadena de custodia certificada." },
];

const SobrePage = () => {
  return (
    <Layout>
      {/* Hero */}
      <Section variant="primary" size="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border-2 border-accent rounded-full" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Sobre PrintIA
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Más de 25 años haciendo realidad proyectos
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Somos una empresa de impresión industrial especializada en proyectos B2B 
            que requieren precisión, flexibilidad y cumplimiento de plazos exigentes.
          </p>
        </div>
      </Section>

      {/* Story */}
      <Section variant="default" size="lg">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              subtitle="Nuestra historia"
              title="De imprenta local a partner industrial"
              align="left"
            />
            <div className="space-y-4 text-muted-foreground">
              <p>
                PrintIA nació en 1998 como una pequeña imprenta familiar con una visión clara: 
                ofrecer un servicio de calidad basado en la cercanía y el compromiso con el cliente.
              </p>
              <p>
                A lo largo de los años, hemos crecido y evolucionado, pero esos valores fundacionales 
                siguen siendo el núcleo de todo lo que hacemos. Hoy somos un equipo de más de 50 
                profesionales que trabajan cada día para hacer realidad los proyectos de nuestros clientes.
              </p>
              <p>
                Nuestra especialización en el sector B2B nos ha permitido desarrollar un conocimiento 
                profundo de las necesidades de empresas industriales, agencias de marketing y marcas 
                que demandan soluciones de impresión y packaging a la altura de sus exigencias.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-secondary rounded-2xl p-8">
            <h3 className="font-display font-semibold text-lg mb-6">Nuestra trayectoria</h3>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-16 shrink-0">
                    <span className="text-accent font-display font-bold">{milestone.year}</span>
                  </div>
                  <div className="border-l-2 border-accent pl-4 pb-4">
                    <h4 className="font-semibold mb-1">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="secondary" size="lg">
        <SectionHeader
          subtitle="Nuestros valores"
          title="Lo que nos define"
          description="Más allá de la tecnología y las capacidades técnicas, son nuestros valores los que marcan la diferencia."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Commitment */}
      <Section variant="default" size="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            subtitle="Nuestro compromiso"
            title="Calidad y responsabilidad"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-md border border-border">
              <h3 className="font-display font-semibold text-lg mb-4">Certificaciones</h3>
              <ul className="space-y-3">
                {[
                  "ISO 9001 - Sistema de gestión de calidad",
                  "FSC - Cadena de custodia certificada",
                  "ISO 14001 - Gestión ambiental",
                  "Impresión climáticamente neutra",
                ].map((cert, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-md border border-border">
              <h3 className="font-display font-semibold text-lg mb-4">Sostenibilidad</h3>
              <ul className="space-y-3">
                {[
                  "Tintas de base vegetal",
                  "Papeles certificados y reciclados",
                  "Energía 100% renovable en instalaciones",
                  "Programa de reducción de residuos",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="primary" size="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            ¿Quieres conocernos mejor?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Visita nuestras instalaciones o hablemos de tu próximo proyecto.
          </p>
          <Button variant="hero" size="xxl" asChild>
            <Link to="/contacto">
              Contactar
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default SobrePage;
