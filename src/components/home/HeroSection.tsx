import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Clock, Users, Factory } from "lucide-react";
import heroImage from "@/assets/hero-printing.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Instalaciones de impresión industrial PrintIA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
            Partner de producción industrial
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
            Más que una imprenta: <span className="text-accent">tu partner</span> de producción
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-delayed leading-relaxed">
            Impresión industrial, packaging personalizado y proyectos a medida. 
            Gestionamos la complejidad para que tú te centres en lo que importa.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed">
            <Button variant="hero" size="xxl" asChild>
              <Link to="/contacto">
                Solicitar presupuesto
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xxl" asChild>
              <Link to="/retos-soluciones">
                Ver cómo trabajamos
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-primary-foreground/20">
            {[
              { icon: Factory, label: "+25 años", sublabel: "de experiencia" },
              { icon: Package, label: "+10.000", sublabel: "proyectos entregados" },
              { icon: Clock, label: "48h", sublabel: "entregas express" },
              { icon: Users, label: "+500", sublabel: "clientes activos" },
            ].map((stat, index) => (
              <div key={index} className="text-primary-foreground/90">
                <stat.icon className="w-6 h-6 text-accent mb-2" />
                <div className="font-display font-bold text-2xl">{stat.label}</div>
                <div className="text-sm text-primary-foreground/60">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
