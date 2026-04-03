import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Clock, Users, Factory } from "lucide-react";
import heroImage from "@/assets/hero-printing.jpg";
import { useParallax, useScrollProgress } from "@/hooks/useScrollEffects";

const stats = [
  { icon: Factory, label: "+25", unit: "años", sublabel: "de experiencia" },
  { icon: Package, label: "+10k", unit: "", sublabel: "proyectos entregados" },
  { icon: Clock, label: "48h", unit: "", sublabel: "entrega express" },
  { icon: Users, label: "+500", unit: "", sublabel: "clientes activos" },
];

export function HeroSection() {
  const imageRef = useParallax(0.28);
  const { ref: sectionRef, progress } = useScrollProgress();

  const overlayOpacity = 0.55 + progress * 0.38;
  const contentOpacity = 1 - progress * 1.8;
  const contentY = progress * 60;

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative h-screen min-h-[640px] max-h-[1080px] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Parallax image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef as React.RefObject<HTMLImageElement>}
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full object-cover object-center"
          style={{
            height: "130%",
            top: "-15%",
            transform: "translateY(var(--parallax-y, 0px))",
            willChange: "transform",
          }}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Cinematic overlay — deepens on scroll */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(
            108deg,
            hsl(213 62% 7% / ${Math.min(0.97, overlayOpacity + 0.28)}) 0%,
            hsl(213 62% 12% / ${overlayOpacity}) 48%,
            hsl(213 62% 16% / ${Math.max(0, overlayOpacity - 0.2)}) 100%
          )`,
        }}
      />

      {/* Bottom section blend */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-52 bg-gradient-to-t from-[hsl(40_20%_98%)] to-transparent pointer-events-none" />

      {/* Noise grain */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          opacity: 0.028,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          opacity: 0.022,
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Content */}
      <div
        className="relative z-20 container mx-auto px-6 lg:px-12 xl:px-16 pt-20"
        style={{
          opacity: Math.max(0, contentOpacity),
          transform: `translateY(${contentY}px)`,
          willChange: "transform, opacity",
        }}
      >
        <div className="max-w-[700px]">

          {/* Eyebrow */}
          <div className="hero-eyebrow mb-8 animate-fade-in">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-white/65 text-xs font-sans font-medium tracking-[0.1em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))]" style={{ boxShadow: "0 0 6px hsl(20 92% 52% / 0.8)" }} />
              Partner de producción industrial
            </span>
          </div>

          {/* Headline — three lines, staggered */}
          <h1 className="font-display text-white mb-7 animate-fade-in-up" style={{ lineHeight: 1.05 }}>
            <span className="block" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.75rem)" }}>
              Más que una imprenta:
            </span>
            <span
              className="block italic"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.75rem)",
                color: "hsl(var(--accent))",
                textShadow: "0 0 60px hsl(20 92% 52% / 0.3)",
              }}
            >
              tu partner
            </span>
            <span className="block" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.75rem)" }}>
              de producción.
            </span>
          </h1>

          {/* Sub */}
          <p
            className="text-white/55 font-sans font-light leading-relaxed mb-10 animate-fade-in-delayed"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)", maxWidth: "460px" }}
          >
            Impresión industrial y packaging personalizado.
            Gestionamos la complejidad para que tú te centres en lo que importa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-delayed-2">
            <Link
              to="/contacto"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[hsl(var(--accent))] text-white font-sans font-semibold text-sm tracking-wide transition-all duration-200"
              style={{
                boxShadow: "0 8px 32px 0 hsl(20 92% 52% / 0.38)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px 0 hsl(20 92% 52% / 0.55)";
                (e.currentTarget as HTMLElement).style.background = "hsl(20 92% 45%)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px 0 hsl(20 92% 52% / 0.38)";
                (e.currentTarget as HTMLElement).style.background = "hsl(20 92% 52%)";
              }}
            >
              Solicitar presupuesto
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/retos-soluciones"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/18 bg-white/5 backdrop-blur-sm text-white font-sans font-medium text-sm hover:bg-white/10 hover:border-white/32 transition-all duration-200"
            >
              Cómo trabajamos
            </Link>
          </div>

          {/* Stats */}
          <div
            className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-delayed-2"
          >
            {stats.map((s, i) => (
              <div key={i}>
                <s.icon className="w-4 h-4 text-[hsl(var(--accent))] mb-3" style={{ opacity: 0.75 }} />
                <div className="font-display text-white leading-none mb-1.5" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                  {s.label}
                  {s.unit && <span className="text-sm text-white/45 ml-0.5">{s.unit}</span>}
                </div>
                <div className="text-white/38 font-sans text-xs tracking-wide">{s.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        style={{ opacity: Math.max(0, 1 - progress * 6) }}
        aria-hidden="true"
      >
        <span className="text-white/28 font-sans text-[10px] uppercase tracking-[0.22em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/28 to-transparent" />
      </div>
    </section>
  );
}
