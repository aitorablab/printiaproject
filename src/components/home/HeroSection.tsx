import { Link } from "react-router-dom";
import { ArrowRight, Package, Clock, Users, Factory } from "lucide-react";
import heroImage from "@/assets/hero-printing.jpg";
import { useParallax, useScrollProgress } from "@/hooks/useScrollEffects";

const stats = [
  { icon: Factory,  label: "+25",   unit: " años", sublabel: "de experiencia" },
  { icon: Package,  label: "+10k",  unit: "",      sublabel: "proyectos entregados" },
  { icon: Clock,    label: "48h",   unit: "",      sublabel: "entrega express" },
  { icon: Users,    label: "+500",  unit: "",      sublabel: "clientes activos" },
];

export function HeroSection() {
  const imageRef    = useParallax(0.22);
  const { ref: sectionRef, progress } = useScrollProgress();

  // Overlay: starts at 0.78 so text is always readable
  const overlayBase = 0.78;
  const overlayMax  = Math.min(0.96, overlayBase + progress * 0.20);

  // Content fades + rises on scroll
  const contentOpacity = Math.max(0, 1 - progress * 1.85);
  const contentY       = progress * 50;

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative h-screen min-h-[640px] max-h-[1080px] flex items-center overflow-hidden"
      aria-label="Hero principal"
    >
      {/* ── Parallax image ─────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef as React.RefObject<HTMLImageElement>}
          src={heroImage}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "100%",
            height: "130%",
            top: "-15%",
            objectFit: "cover",
            objectPosition: "center",
            transform: "translateY(var(--parallax-y, 0px))",
            willChange: "transform",
          }}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* ── Overlay stack ──────────────────────── */}

      {/* 1. Full directional overlay — LEFT strong, RIGHT slightly lighter */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          background: `linear-gradient(
            100deg,
            hsl(213 65% 7% / ${overlayMax})      0%,
            hsl(213 62% 10% / ${overlayMax - 0.06}) 45%,
            hsl(213 58% 14% / ${overlayMax - 0.20}) 75%,
            hsl(213 55% 16% / ${overlayMax - 0.35}) 100%
          )`,
          pointerEvents: "none",
        }}
      />

      {/* 2. Radial shadow focused on text zone (left-center) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 11,
          background: "radial-gradient(ellipse 70% 85% at 22% 52%, hsl(213 65% 5% / 0.60) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* 3. Bottom fade to page background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          zIndex: 12,
          background: "linear-gradient(to top, hsl(40 20% 98%), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* ── Content ────────────────────────────── */}
      <div
        className="container mx-auto px-6 lg:px-12 xl:px-16"
        style={{
          position: "relative",
          zIndex: 20,
          paddingTop: "80px",   /* clear fixed header */
          opacity: contentOpacity,
          transform: `translateY(${contentY}px)`,
          willChange: "transform, opacity",
        }}
      >
        {/*
          max-width: 800px so the title stays on 2 lines max at typical desktop.
          Wider than before (was 680px) so the font doesn't need to be as large
          to fill the space — meaning fewer wraps.
        */}
        <div style={{ maxWidth: "800px" }}>

          {/* Eyebrow pill */}
          <div className="hero-eyebrow" style={{ marginBottom: "1.75rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.375rem 1rem",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(8px)",
                color: "rgba(255,255,255,0.82)",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "'Sora', sans-serif",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "hsl(20 92% 52%)",
                  boxShadow: "0 0 8px hsl(20 92% 52% / 0.9)",
                  flexShrink: 0,
                }}
              />
              Partner de producción industrial
            </span>
          </div>

          {/*
            TITLE FIX:
            - font-family forced inline — no risk of Tailwind override
            - font-weight: 800 (ExtraBold) — needs Sora:wght@800 in import
            - font-size: clamp constrained to stay 2 lines max at 800px width
            - letter-spacing: -0.03em — tight geometric look
            - "tu partner" stays on same line as "de producción." via nowrap span
          */}
          <h1
            className="hero-title"
            style={{
              fontFamily: "'Sora', ui-sans-serif, system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.6rem, 4.5vw, 4.25rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.032em",
              color: "#ffffff",
              marginBottom: "1.5rem",
              textShadow: "0 2px 24px rgba(10,20,40,0.65)",
            }}
          >
            Más que una imprenta:{" "}
            <span style={{ color: "hsl(20 92% 58%)", whiteSpace: "nowrap" }}>
              tu partner
            </span>{" "}
            de producción.
          </h1>

          {/* Subtext — explicit white, not 0.70 opacity (grays out on blue bg) */}
          <p
            className="hero-sub"
            style={{
              fontFamily: "'Sora', ui-sans-serif, system-ui, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
              lineHeight: 1.7,
              color: "rgba(220, 228, 240, 0.85)",  /* warm-tinted white, not grey */
              maxWidth: "460px",
              marginBottom: "2.25rem",
              textShadow: "0 1px 12px rgba(10,20,40,0.5)",
            }}
          >
            Impresión industrial y packaging personalizado.
            Gestionamos la complejidad para que tú te centres en lo que importa.
          </p>

          {/* CTAs */}
          <div
            className="hero-cta"
            style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
          >
            <Link
              to="/contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.9rem 2rem",
                borderRadius: "0.75rem",
                background: "hsl(20 92% 52%)",
                color: "#ffffff",
                fontFamily: "'Sora', sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                letterSpacing: "-0.01em",
                textDecoration: "none",
                boxShadow: "0 8px 30px 0 hsl(20 92% 52% / 0.44)",
                transition: "background 0.18s ease, box-shadow 0.18s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "hsl(20 92% 44%)";
                el.style.boxShadow = "0 12px 38px 0 hsl(20 92% 52% / 0.58)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "hsl(20 92% 52%)";
                el.style.boxShadow = "0 8px 30px 0 hsl(20 92% 52% / 0.44)";
              }}
            >
              Solicitar presupuesto
              <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>

            <Link
              to="/retos-soluciones"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.9rem 2rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(255,255,255,0.22)",
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(8px)",
                color: "#ffffff",
                fontFamily: "'Sora', sans-serif",
                fontWeight: 500,
                fontSize: "0.875rem",
                letterSpacing: "-0.01em",
                textDecoration: "none",
                transition: "background 0.18s ease, border-color 0.18s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.13)";
                el.style.borderColor = "rgba(255,255,255,0.38)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.07)";
                el.style.borderColor = "rgba(255,255,255,0.22)";
              }}
            >
              Cómo trabajamos
            </Link>
          </div>

          {/* Stats row */}
          <div
            className="hero-stats"
            style={{
              marginTop: "3.5rem",
              paddingTop: "2.25rem",
              borderTop: "1px solid rgba(255,255,255,0.12)",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.75rem 2rem",
            }}
          >
            {stats.map((s, i) => (
              <div key={i}>
                <s.icon
                  style={{
                    width: 15,
                    height: 15,
                    color: "hsl(20 92% 60%)",
                    opacity: 0.85,
                    marginBottom: "0.625rem",
                  }}
                />
                <div
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.5rem, 2vw, 2rem)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    color: "#ffffff",
                    marginBottom: "0.3rem",
                  }}
                >
                  {s.label}
                  {s.unit && (
                    <span style={{ fontSize: "0.65em", fontWeight: 400, color: "rgba(255,255,255,0.42)", marginLeft: "0.1em" }}>
                      {s.unit}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 400,
                    fontSize: "0.72rem",
                    letterSpacing: "0.04em",
                    color: "rgba(255,255,255,0.42)",
                  }}
                >
                  {s.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll hint ────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          pointerEvents: "none",
          opacity: Math.max(0, 1 - progress * 6),
        }}
      >
        <span
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "0.62rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.30)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "36px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.28), transparent)",
          }}
        />
      </div>
    </section>
  );
}
