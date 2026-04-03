import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio",            href: "/" },
  { label: "Retos",             href: "/retos-soluciones" },
  { label: "Servicios",         href: "/servicios" },
  { label: "Cómo trabajamos",   href: "/proceso" },
  { label: "Sectores",          href: "/sectores" },
  { label: "Sobre PrintIA",     href: "/sobre-nosotros" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/98 backdrop-blur-md shadow-premium-md border-b border-border"
          : "bg-background/95 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">

          {/* ── Logo ── */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="PrintIA — Inicio"
          >
            <div className="relative w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-primary overflow-hidden">
              {/* Glow accent corner */}
              <span className="absolute top-0 right-0 w-3 h-3 bg-accent rounded-bl-lg opacity-80" />
              <span className="relative text-primary-foreground font-display font-bold text-base leading-none z-10">
                P
              </span>
            </div>
            <span className="font-display font-bold text-xl text-primary tracking-tight group-hover:text-accent transition-colors duration-200">
              Print<span className="text-accent">IA</span>
            </span>
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden lg:flex items-center gap-0.5" role="navigation">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                    isActive
                      ? "text-accent"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.label}
                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3.5 right-3.5 h-px bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contacto"
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                location.pathname === "/contacto"
                  ? "text-accent"
                  : "text-foreground/60 hover:text-foreground"
              )}
            >
              Contacto
            </Link>
            <Button variant="accent" size="default" asChild className="shadow-accent">
              <Link to="/contacto">Solicitar presupuesto</Link>
            </Button>
          </div>

          {/* ── Mobile menu button ── */}
          <button
            className="lg:hidden p-2 -mr-1 text-foreground/70 hover:text-foreground transition-colors rounded-md hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── Mobile Navigation ── */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="py-4 border-t border-border flex flex-col gap-0.5">
            {[...navItems, { label: "Contacto", href: "/contacto" }].map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150",
                    isActive
                      ? "text-accent bg-accent/8 font-semibold"
                      : "text-foreground/75 hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 px-4">
              <Button variant="accent" className="w-full shadow-accent" asChild>
                <Link to="/contacto">Solicitar presupuesto</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
