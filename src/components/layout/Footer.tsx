import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  servicios: [
    { label: "Impresión comercial", href: "/servicios#comercial" },
    { label: "Packaging personalizado", href: "/servicios#packaging" },
    { label: "Tiradas cortas", href: "/servicios#tiradas-cortas" },
    { label: "Proyectos especiales", href: "/servicios#especiales" },
  ],
  empresa: [
    { label: "Sobre PrintIA", href: "/sobre-nosotros" },
    { label: "Cómo trabajamos", href: "/proceso" },
    { label: "Sectores", href: "/sectores" },
    { label: "Contacto", href: "/contacto" },
  ],
  recursos: [
    { label: "Retos y soluciones", href: "/retos-soluciones" },
    { label: "Solicitar presupuesto", href: "/contacto" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-lg">P</span>
              </div>
              <span className="font-display font-bold text-xl">PrintIA</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6 leading-relaxed">
              Tu partner de producción para impresión industrial, packaging y proyectos personalizados.
            </p>
            <div className="space-y-3">
              <a href="tel:+34900123456" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone size={16} />
                +34 900 123 456
              </a>
              <a href="mailto:info@printia.com" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail size={16} />
                info@printia.com
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Polígono Industrial Sur,<br />Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} PrintIA. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacidad" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                Política de privacidad
              </Link>
              <Link to="/legal" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                Aviso legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
