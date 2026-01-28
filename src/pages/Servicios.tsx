import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Printer, Package, Layers, Sparkles, CheckCircle } from "lucide-react";

const services = [
  {
    id: "comercial",
    icon: Printer,
    title: "Impresión comercial",
    tagline: "Materiales que representan tu marca",
    problem: "Necesitas materiales impresos de alta calidad que transmitan profesionalidad y refuercen tu imagen de marca.",
    solution: "Producimos catálogos, folletos, PLV y materiales promocionales con control de color profesional y acabados premium.",
    benefits: [
      "Control de color Pantone y CMYK certificado",
      "Amplia variedad de papeles y acabados",
      "Tiradas desde 100 hasta millones de unidades",
      "Entrega en plazos ajustados",
    ],
    ideal: "Departamentos de marketing, agencias de comunicación, equipos comerciales",
  },
  {
    id: "packaging",
    icon: Package,
    title: "Packaging personalizado",
    tagline: "El envase como extensión de tu marca",
    problem: "Tu producto necesita un embalaje que proteja, comunique valor y destaque en el punto de venta.",
    solution: "Diseñamos y fabricamos cajas, estuches y embalajes a medida con materiales sostenibles y acabados de alta gama.",
    benefits: [
      "Diseño estructural personalizado",
      "Materiales certificados y sostenibles",
      "Acabados especiales: stamping, relieve, barnices",
      "Prototipos rápidos para validación",
    ],
    ideal: "Marcas de producto, retail, cosmética, alimentación, tecnología",
  },
  {
    id: "tiradas-cortas",
    icon: Layers,
    title: "Tiradas cortas",
    tagline: "Flexibilidad sin comprometer calidad",
    problem: "Necesitas producciones limitadas con la misma calidad que grandes tiradas, sin costes prohibitivos.",
    solution: "Tecnología de impresión digital de última generación que permite producciones desde 1 unidad con acabados profesionales.",
    benefits: [
      "Costes optimizados para pequeñas cantidades",
      "Misma calidad que offset en tiradas cortas",
      "Personalización variable posible",
      "Entregas en 24-48 horas",
    ],
    ideal: "Startups, tests de mercado, ediciones limitadas, personalización",
  },
  {
    id: "especiales",
    icon: Sparkles,
    title: "Proyectos especiales",
    tagline: "Cuando lo estándar no es suficiente",
    problem: "Tu proyecto requiere materiales, formatos o acabados que van más allá de lo convencional.",
    solution: "Recursos técnicos y experiencia para proyectos únicos: materiales especiales, acabados artesanales, formatos inusuales.",
    benefits: [
      "Materiales premium y sostenibles",
      "Acabados artesanales y de alta gama",
      "Formatos especiales y troquelados complejos",
      "Asesoramiento técnico especializado",
    ],
    ideal: "Marcas de lujo, packaging premium, proyectos de diseño, ediciones de coleccionista",
  },
];

const ServiciosPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <Section variant="primary" size="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border-2 border-accent rounded-full" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Servicios
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Capacidades completas para proyectos exigentes
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Desde impresión comercial hasta packaging premium. Soluciones integrales 
            adaptadas a las necesidades reales de empresas B2B.
          </p>
        </div>
      </Section>

      {/* Services */}
      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          variant={index % 2 === 0 ? "default" : "secondary"}
          size="lg"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="text-accent font-medium">{service.tagline}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">El reto</h3>
                  <p className="text-muted-foreground">{service.problem}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Nuestra solución</h3>
                  <p className="text-foreground">{service.solution}</p>
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className={`bg-card rounded-2xl p-8 shadow-lg border border-border ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <h3 className="font-display font-semibold text-lg mb-6">Qué incluye</h3>
              <ul className="space-y-4 mb-8">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-border">
                <span className="text-sm text-muted-foreground">Ideal para:</span>
                <p className="font-medium mt-1">{service.ideal}</p>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section variant="primary" size="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Cuéntanos qué necesitas y te preparamos una propuesta a medida.
          </p>
          <Button variant="hero" size="xxl" asChild>
            <Link to="/contacto">
              Solicitar presupuesto
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default ServiciosPage;
