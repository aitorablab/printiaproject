import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollEffects";

export function CTASection() {
  const revealRef = useScrollReveal(0.15);

  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Deep background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(213 62% 9%) 0%, hsl(213 62% 13%) 50%, hsl(213 55% 10%) 100%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.028,
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Accent glow blob */}
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          width: "700px",
          height: "280px",
          background: "hsl(20 92% 52% / 0.055)",
          filter: "blur(90px)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Decorative rings */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          border: "1px solid hsl(0 0% 100% / 0.04)",
          transform: "translate(35%, -35%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          border: "1px solid hsl(0 0% 100% / 0.035)",
          transform: "translate(-35%, 35%)",
        }}
      />

      {/* Noise grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.022,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div
          ref={revealRef as React.RefObject<HTMLDivElement>}
          className="reveal-container max-w-2xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <div data-reveal-child className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-[hsl(var(--accent))]" style={{ opacity: 0.7 }} />
            <span className="text-[hsl(var(--accent))] font-sans font-semibold text-xs uppercase tracking-[0.14em]">
              ¿Tienes un proyecto en mente?
            </span>
            <span className="w-8 h-px bg-[hsl(var(--accent))]" style={{ opacity: 0.7 }} />
          </div>

          {/* Headline */}
          <h2
            data-reveal-child
            className="font-display text-white mb-5 italic"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.1 }}
          >
            Hablemos de cómo{" "}
            <span style={{ color: "hsl(var(--accent))" }}>podemos ayudarte</span>
          </h2>

          <p
            data-reveal-child
            className="text-white/52 font-sans font-light text-base leading-relaxed mb-10 max-w-md mx-auto"
          >
            Cuéntanos tu proyecto y te preparamos un presupuesto a medida.
            Sin compromiso, con respuesta en menos de 24 horas.
          </p>

          {/* Buttons */}
          <div data-reveal-child className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contacto"
              className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl bg-[hsl(var(--accent))] text-white font-sans font-semibold text-sm tracking-wide transition-all duration-200"
              style={{ boxShadow: "0 8px 32px 0 hsl(20 92% 52% / 0.38)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 44px 0 hsl(20 92% 52% / 0.52)";
                (e.currentTarget as HTMLElement).style.background = "hsl(20 92% 45%)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px 0 hsl(20 92% 52% / 0.38)";
                (e.currentTarget as HTMLElement).style.background = "hsl(20 92% 52%)";
              }}
            >
              Solicitar presupuesto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <a
              href="tel:+34900123456"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl border text-white font-sans font-medium text-sm transition-all duration-200"
              style={{
                borderColor: "hsl(0 0% 100% / 0.18)",
                background: "hsl(0 0% 100% / 0.05)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "hsl(0 0% 100% / 0.1)";
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(0 0% 100% / 0.32)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "hsl(0 0% 100% / 0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(0 0% 100% / 0.18)";
              }}
            >
              <Phone className="w-4 h-4" />
              +34 900 123 456
            </a>
          </div>

          {/* Trust line */}
          <p
            data-reveal-child
            className="mt-8 text-white/28 font-sans text-xs tracking-wide"
          >
            Respuesta garantizada en menos de 24h · Sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
}
