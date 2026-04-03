import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Printer, Package, Layers, Sparkles, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "comercial",
    icon: Printer,
    title: "Impresión comercial",
    tagline: "Materiales que representan tu marca",
    problem:
      "Necesitas materiales impresos de alta calidad que transmitan profesionalidad y refuercen tu imagen de marca.",
    solution:
      "Producimos catálogos, folletos, PLV y materiales promocionales con control de color profesional y acabados premium.",
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
    problem:
      "Tu producto necesita un embalaje que proteja, comunique valor y destaque en el punto de venta.",
    solution:
      "Diseñamos y fabricamos cajas, estuches y embalajes a medida con materiales sostenibles y acabados de alta gama.",
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
    problem:
      "Necesitas producciones limitadas con la misma calidad que grandes tiradas, sin costes prohibitivos.",
    solution:
      "Tecnología de impresión digital de última generación que permite producciones desde 1 unidad con acabados profesionales.",
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
    problem:
      "Tu proyecto requiere materiales, formatos o acabados que van más allá de lo convencional.",
    solution:
      "Recursos técnicos y experiencia para proyectos únicos: materiales especiales, acabados artesanales, formatos inusuales.",
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

      {/* ── Hero ── */}
      <Section variant="primary" size="lg" className="relative overflow-hidden">
        {/* Texturas */}
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-48 bg-primary-foreground/3 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-6 h-px bg-accent rounded-full" />
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.14em]">
              Servicios
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-primary-foreground leading-[1.05] tracking-tight mb-6">
            Capacidades completas para{" "}
            <span className="text-accent">proyectos exigentes</span>
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-xl">
            Desde impresión comercial hasta packaging premium. Soluciones integrales
            adaptadas a las necesidades reales de empresas B2B.
          </p>
        </div>
      </Section>

      {/* ── Service sections ── */}
      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          variant={index % 2 === 0 ? "default" : "secondary"}
          size="lg"
        >
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* ── Content ── */}
            <div className={cn(index % 2 === 1 && "lg:order-2")}>
              {/* Icon + heading */}
              <div className="flex items-start gap-4 mb-7">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shadow-accent shrink-0">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-accent font-medium text-sm mt-1">{service.tagline}</p>
                </div>
              </div>

              <div className="space-y-7">
                {/* El reto */}
                <div className="pl-4 border-l-2 border-border">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    El reto
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.problem}
                  </p>
                </div>

                {/* Nuestra solución */}
                <div className="pl-4 border-l-2 border-accent">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-accent mb-2">
                    Nuestra solución
                  </h3>
                  <p className="text-foreground text-sm leading-relaxed">
                    {service.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* ── Benefits Card ── */}
            <div
              className={cn(
                "bg-card rounded-2xl p-8 shadow-premium-lg border border-border",
                index % 2 === 1 && "lg:order-1"
              )}
            >
              <h3 className="font-display font-semibold text-base mb-6 flex items-center gap-2">
                <span className="w-5 h-px bg-accent rounded-full" />
                Qué incluye
              </h3>

              <ul className="space-y-4 mb-8">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-3 items-start group">
                    <CheckCircle className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border bg-secondary/50 -mx-8 -mb-8 px-8 pb-8 rounded-b-2xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Ideal para
                </span>
                <p className="font-medium text-sm mt-1.5 text-foreground">{service.ideal}</p>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* ── CTA ── */}
      <Section variant="primary" size="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-5 leading-tight">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/70 mb-9">
            Cuéntanos qué necesitas y te preparamos una propuesta a medida.
          </p>
          <Button variant="hero" size="xxl" asChild className="shadow-accent-lg">
            <Link to="/contacto">
              Solicitar presupuesto
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default ServiciosPage;
