import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Clock, Users, Factory } from "lucide-react";
import heroImage from "@/assets/hero-printing.jpg";

const stats = [
  { icon: Factory, label: "+25 años",   sublabel: "de experiencia" },
  { icon: Package, label: "+10.000",    sublabel: "proyectos entregados" },
  { icon: Clock,   label: "48h",        sublabel: "entregas express" },
  { icon: Users,   label: "+500",       sublabel: "clientes activos" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Instalaciones de impresión industrial PrintIA"
          className="w-full h-full object-cover scale-[1.02]"
          loading="eager"
        />
        {/* Gradient más sofisticado: oscuro a izquierda, translúcido a derecha */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210_64%_10%)] via-[hsl(210_64%_13%/0.92)] to-[hsl(210_55%_18%/0.75)]" />
        {/* Dot pattern overlay para textura premium */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      {/* ── Decorative orbs ── */}
      <div className="absolute top-1/4 right-[15%] w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[30%] w-48 h-48 rounded-full bg-primary-foreground/5 blur-2xl pointer-events-none" />

      {/* ── Content ── */}
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10 py-24">
        <div className="max-w-[680px]">

          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-6 animate-fade-in">
            <span className="w-8 h-px bg-accent rounded-full" />
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.14em]">
              Partner de producción industrial
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[2.6rem] md:text-5xl lg:text-6xl xl:text-[4rem] font-display font-bold text-primary-foreground leading-[1.05] tracking-tight mb-7 animate-fade-in-up">
            Más que una imprenta:{" "}
            <span className="relative inline-block">
              <span className="text-accent">tu partner</span>
              {/* Subrayado decorativo */}
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent/40 rounded-full" />
            </span>{" "}
            de producción
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-primary-foreground/72 mb-10 max-w-[560px] leading-relaxed animate-fade-in-delayed">
            Impresión industrial, packaging personalizado y proyectos a medida.
            Gestionamos la complejidad para que tú te centres en lo que importa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-delayed">
            <Button
              variant="hero"
              size="xxl"
              asChild
              className="shadow-accent-lg"
            >
              <Link to="/contacto">
                Solicitar presupuesto
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xxl" asChild>
              <Link to="/retos-soluciones">Ver cómo trabajamos</Link>
            </Button>
          </div>

          {/* ── Stats bar ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-primary-foreground/15">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 80 + 300}ms`, opacity: 0 }}
              >
                <stat.icon className="w-5 h-5 text-accent mb-1 opacity-90" />
                <span className="font-display font-bold text-2xl md:text-3xl text-primary-foreground leading-none">
                  {stat.label}
                </span>
                <span className="text-xs text-primary-foreground/50 leading-tight">
                  {stat.sublabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
    </section>
  );
}
