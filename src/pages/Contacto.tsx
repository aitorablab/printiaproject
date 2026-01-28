import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactoPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo en menos de 24 horas.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <Section variant="primary" size="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border-2 border-accent rounded-full" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Contacto
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Hablemos de tu proyecto
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Cuéntanos qué necesitas y te preparamos una propuesta a medida. 
            Respuesta en menos de 24 horas.
          </p>
        </div>
      </Section>

      {/* Contact Form + Info */}
      <Section variant="default" size="lg">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h2 className="font-display font-bold text-2xl mb-2">
                Solicita tu presupuesto
              </h2>
              <p className="text-muted-foreground mb-8">
                Rellena el formulario y nos pondremos en contacto contigo para entender tu proyecto.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Hemos recibido tu solicitud. Nos pondremos en contacto contigo en menos de 24 horas.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa *</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Nombre de tu empresa"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+34 600 000 000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project">Tipo de proyecto</Label>
                    <Input
                      id="project"
                      name="project"
                      placeholder="Ej: Packaging, catálogos, PLV..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Cuéntanos tu proyecto *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe tu proyecto, plazos, cantidades estimadas..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar solicitud
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario aceptas nuestra política de privacidad.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Direct Contact */}
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="font-display font-semibold text-lg mb-6">
                Contacto directo
              </h3>
              <div className="space-y-5">
                <a
                  href="tel:+34900123456"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Teléfono</span>
                    <p className="font-semibold group-hover:text-accent transition-colors">
                      +34 900 123 456
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@printia.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Email</span>
                    <p className="font-semibold group-hover:text-accent transition-colors">
                      info@printia.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Dirección</span>
                    <p className="font-semibold">
                      Polígono Industrial Sur<br />
                      Calle de la Industria, 42<br />
                      28001 Madrid, España
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Horario</span>
                    <p className="font-semibold">
                      Lunes a Viernes<br />
                      8:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-display font-semibold text-lg mb-3">
                Respuesta rápida
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Nos comprometemos a responder a todas las solicitudes en menos de 24 horas laborables.
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold">
                <Clock className="w-4 h-4" />
                <span>Respuesta en &lt;24h</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ContactoPage;
