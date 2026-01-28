import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(210,50%,12%)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-accent rounded-full" />
        <div className="absolute bottom-20 right-40 w-40 h-40 border border-primary-foreground/30 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            ¿Tienes un proyecto en mente?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Hablemos de cómo podemos ayudarte
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Cuéntanos tu proyecto y te preparamos un presupuesto a medida. Sin compromiso, con respuesta en menos de 24 horas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xxl" asChild>
              <Link to="/contacto">
                Solicitar presupuesto
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xxl" asChild>
              <a href="tel:+34900123456">
                <Phone className="mr-2" />
                +34 900 123 456
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
