import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Factory, Megaphone, Package, ShoppingBag, CheckCircle } from "lucide-react";

const sectors = [
  {
    id: "industrial",
    icon: Factory,
    title: "Empresas industriales",
    description: "Fabricantes, distribuidoras y empresas del sector industrial que necesitan materiales técnicos y corporativos.",
    needs: [
      "Documentación técnica y manuales",
      "Etiquetado y señalética industrial",
      "Packaging para componentes",
      "Material corporativo y comercial",
    ],
    howWeHelp: "Entendemos los requerimientos técnicos del sector industrial: tolerancias, normativas de etiquetado, materiales resistentes y plazos de producción ajustados a ciclos de fabricación.",
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing y comunicación",
    description: "Agencias, departamentos de marketing y equipos creativos que ejecutan campañas y comunicación de marca.",
    needs: [
      "Materiales para campañas multicanal",
      "PLV y displays para punto de venta",
      "Catálogos y folletos comerciales",
      "Merchandising y regalos promocionales",
    ],
    howWeHelp: "Hablamos el idioma del marketing: plazos de campaña, coherencia de marca, calidad de impresión y flexibilidad para adaptarnos a cambios de última hora.",
  },
  {
    id: "packaging",
    icon: Package,
    title: "Packaging y producto",
    description: "Empresas de producto que necesitan packaging funcional y atractivo que refuerce su propuesta de valor.",
    needs: [
      "Cajas y estuches a medida",
      "Embalajes protectores",
      "Presentación premium de producto",
      "Packaging sostenible",
    ],
    howWeHelp: "Combinamos diseño estructural con experiencia en materiales para crear packaging que protege, comunica y diferencia. Trabajamos con materiales certificados y opciones sostenibles.",
  },
  {
    id: "retail",
    icon: ShoppingBag,
    title: "Retail y marcas",
    description: "Cadenas de retail, franquicias y marcas con presencia física que necesitan comunicación efectiva en tienda.",
    needs: [
      "Señalética y comunicación en tienda",
      "Displays y expositores",
      "Materiales para puntos de venta",
      "Packaging para experiencia de marca",
    ],
    howWeHelp: "Conocemos las exigencias del retail: tiempos de implantación, coherencia entre puntos de venta, materiales duraderos y producción escalable para redes de tiendas.",
  },
];

const SectoresPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <Section variant="primary" size="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border-2 border-accent rounded-full" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Sectores
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Expertos en tu industria
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Más de 25 años trabajando con empresas de diferentes sectores nos han dado 
            un conocimiento profundo de las necesidades específicas de cada industria.
          </p>
        </div>
      </Section>

      {/* Sectors */}
      {sectors.map((sector, index) => (
        <Section
          key={sector.id}
          id={sector.id}
          variant={index % 2 === 0 ? "default" : "secondary"}
          size="lg"
        >
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Header */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                  <sector.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl">
                  {sector.title}
                </h2>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                {sector.description}
              </p>
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <h4 className="font-semibold mb-3">Cómo ayudamos</h4>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  {sector.howWeHelp}
                </p>
              </div>
            </div>

            {/* Right: Needs */}
            <div className="lg:col-span-3">
              <h3 className="font-display font-semibold text-lg mb-6">
                Necesidades habituales
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {sector.needs.map((need, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-xl p-5 shadow-sm border border-border flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-medium">{need}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section variant="primary" size="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            ¿No ves tu sector?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Trabajamos con empresas de todos los sectores. Cuéntanos tu caso 
            y veremos cómo podemos ayudarte.
          </p>
          <Button variant="hero" size="xxl" asChild>
            <Link to="/contacto">
              Contactar ahora
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default SectoresPage;
