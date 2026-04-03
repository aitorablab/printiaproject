import { Link } from "react-router-dom";
import { ArrowRight, Package, Clock, Users, Factory } from "lucide-react";
import heroImage from "@/assets/hero-printing.jpg";
import { useParallax, useScrollProgress } from "@/hooks/useScrollEffects";

const stats = [
  { icon: Factory, label: "+25", unit: " años", sublabel: "de experiencia" },
  { icon: Package, label: "+10k", unit: "", sublabel: "proyectos entregados" },
  { icon: Clock, label: "48h", sublabel: "entrega express" },
  { icon: Users, label: "+500", unit: "", sublabel: "clientes activos" },
];

export function HeroSection() {
  const imageRef = useParallax(0.25);
  const { ref: sectionRef, progress } = useScrollProgress();

  // Overlay darkens as you scroll — starts strong for readability
  const baseOpacity = 0.72;
  const overlayOpacity = Math.min(0.96, baseOpacity + progress * 0.28);

  // Content fades and lifts on scroll
  const contentOpacity = Math.max(0, 1 - progress * 1.9);
  const contentY = progress * 55;

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative h-screen min-h-[640px] max-h-[1080px] flex items-center overflow-hidden"
      aria-label="Hero principal"
    >
      {/* ── Parallax image ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef as React.RefObject<HTMLImageElement>}
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute w-full object-cover object-center"
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

      {/* ── Strong directional overlay — guarantees legibility ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              105deg,
              hsl(213 65% 7% / ${overlayOpacity + 0.08}) 0%,
              hsl(213 62% 10% / ${overlayOpacity}) 40%,
              hsl(213 58% 14% / ${overlayOpacity - 0.22}) 75%,
              hsl(213 55% 16% / ${overlayOpacity - 0.40}) 100%
            )
          `,
        }}
      />

      {/* ── Extra shadow under text area only ── */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{
          inset: 0,
          background: `
            radial-gradient(
              ellipse 75% 80% at 25% 55%,
              hsl(213 65% 6% / 0.55) 0%,
              transparent 70%
            )
          `,
        }}
      />

      {/* ── Bottom blend to page background ── */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
        style={{
          height: "220px",
          background: "linear-gradient(to top, hsl(40 20% 98%), transparent)",
        }}
      />

      {/* ── Subtle noise texture ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── Fine grid ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          opacity: 0.018,
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── Content ── */}
      <div
        className="relative z-20 w-full container mx-auto px-6 lg:px-12 xl:px-16 pt-20"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${contentY}px)`,
          willChange: "transform, opacity",
        }}
      >
        <div className="max-w-[680px]">

          {/* Eyebrow */}
          <div className="hero-eyebrow mb-7">
            <span
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase"
              style={{
                border: "1px solid hsl(0 0% 100% / 0.18)",
                background: "hsl(0 0% 100% / 0.07)",
                backdropFilter: "blur(8px)",
                color: "hsl(0 0% 100% / 0.80)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{
                  background: "hsl(var(--accent))",
                  boxShadow: "0 0 7px hsl(20 92% 52% / 0.85)",
                }}
              />
              Partner de producción industrial
            </span>
          </div>

          {/* ── Headline — Sora ExtraBold, tight tracking ── */}
          <h1
            className="hero-title text-white mb-6 font-extrabold"
            style={{
              fontSize: "clamp(2.5rem, 5.8vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              textShadow: "0 2px 32px hsl(213 65% 6% / 0.7)",
            }}
          >
            Más que una imprenta:{" "}
            <span
              style={{
                color: "hsl(var(--accent))",
                display: "inline-block",
              }}
            >
              tu partner
            </span>{" "}
            de producción.
          </h1>

          {/* Sub */}
          <p
            className="hero-sub font-light leading-relaxed mb-9"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              color: "hsl(0 0% 100% / 0.70)",
              maxWidth: "480px",
              textShadow: "0 1px 12px hsl(213 65% 6% / 0.5)",
            }}
          >
            Impresión industrial y packaging personalizado.
            Gestionamos la complejidad para que tú te centres en lo que importa.
          </p>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row gap-3">
            <Link
              to="/contacto"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm tracking-wide text-white transition-all duration-200"
              style={{
                background: "hsl(var(--accent))",
                boxShadow: "0 8px 32px 0 hsl(20 92% 52% / 0.42)",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "hsl(20 92% 44%)";
                el.style.boxShadow = "0 12px 40px 0 hsl(20 92% 52% / 0.56)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "hsl(var(--accent))";
                el.style.boxShadow = "0 8px 32px 0 hsl(20 92% 52% / 0.42)";
              }}
            >
              Solicitar presupuesto
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              to="/retos-soluciones"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-sm text-white transition-all duration-200"
              style={{
                border: "1px solid hsl(0 0% 100% / 0.22)",
                background: "hsl(0 0% 100% / 0.06)",
                backdropFilter: "blur(8px)",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "hsl(0 0% 100% / 0.13)";
                el.style.borderColor = "hsl(0 0% 100% / 0.36)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "hsl(0 0% 100% / 0.06)";
                el.style.borderColor = "hsl(0 0% 100% / 0.22)";
              }}
            >
              Cómo trabajamos
            </Link>
          </div>

          {/* Stats */}
          <div
            className="hero-stats mt-14 pt-9 grid grid-cols-2 md:grid-cols-4 gap-7"
            style={{ borderTop: "1px solid hsl(0 0% 100% / 0.12)" }}
          >
            {stats.map((s, i) => (
              <div key={i}>
                <s.icon
                  className="mb-2.5"
                  style={{
                    width: 16,
                    height: 16,
                    color: "hsl(var(--accent))",
                    opacity: 0.8,
                  }}
                />
                <div
                  className="font-bold leading-none mb-1.5"
                  style={{
                    fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)",
                    color: "hsl(0 0% 100%)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.label}
                  {s.unit && (
                    <span
                      style={{
                        fontSize: "0.75em",
                        color: "hsl(0 0% 100% / 0.45)",
                        marginLeft: "0.15em",
                        fontWeight: 400,
                      }}
                    >
                      {s.unit}
                    </span>
                  )}
                </div>
                <div
                  className="font-normal text-xs tracking-wide"
                  style={{ color: "hsl(0 0% 100% / 0.40)" }}
                >
                  {s.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        style={{ opacity: Math.max(0, 1 - progress * 6) }}
        aria-hidden="true"
      >
        <span
          className="text-[10px] uppercase tracking-[0.22em] font-medium"
          style={{ color: "hsl(0 0% 100% / 0.30)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-9"
          style={{
            background: "linear-gradient(to bottom, hsl(0 0% 100% / 0.28), transparent)",
          }}
        />
      </div>
    </section>
  );
}
