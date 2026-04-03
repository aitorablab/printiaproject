import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">

      {/* ── Fondo ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210_64%_13%)] via-[hsl(210_58%_16%)] to-[hsl(210_50%_11%)]" />
      {/* Dot pattern sutil */}
      <div className="absolute inset-0 dot-pattern opacity-25" />

      {/* ── Orbs decorativos ── */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-accent/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-[320px] h-[320px] rounded-full bg-primary-foreground/4 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      {/* ── Líneas decorativas ── */}
      <div className="absolute top-12 right-24 w-32 h-32 border border-accent/15 rounded-full" />
      <div className="absolute top-16 right-28 w-20 h-20 border border-accent/10 rounded-full" />
      <div className="absolute bottom-16 left-16 w-16 h-16 border border-primary-foreground/10 rounded-full" />

      {/* ── Content ── */}
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <span className="w-6 h-px bg-accent rounded-full" />
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.14em]">
              ¿Tienes un proyecto en mente?
            </span>
            <span className="w-6 h-px bg-accent rounded-full" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-5 leading-tight tracking-tight">
            Hablemos de cómo{" "}
            <span className="text-accent">podemos ayudarte</span>
          </h2>

          <p className="text-base md:text-lg text-primary-foreground/65 mb-10 max-w-2xl mx-auto leading-relaxed">
            Cuéntanos tu proyecto y te preparamos un presupuesto a medida.
            Sin compromiso, con respuesta en menos de 24 horas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="xxl" asChild className="shadow-accent-lg">
              <Link to="/contacto">
                Solicitar presupuesto
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xxl" asChild>
              <a href="tel:+34900123456">
                <Phone className="mr-2 w-4 h-4" />
                +34 900 123 456
              </a>
            </Button>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-xs text-primary-foreground/35 tracking-wide">
            Respuesta garantizada en menos de 24h · Sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
}
