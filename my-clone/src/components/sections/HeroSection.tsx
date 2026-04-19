"use client";

export function HeroSection() {
  return (
    <section
      className="scroll-section flex flex-col justify-between px-8 lg:px-16 py-16"
      style={{ background: "#fffbf2" }}
    >
      {/* Top spacer for navbar */}
      <div className="h-16" />

      {/* Main headline area */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="headline-xl" style={{ color: "#121212" }}>
          <span className="block fade-up" style={{ animationDelay: "0ms" }}>
            We craft
          </span>
          <span
            className="block fade-up"
            style={{
              animationDelay: "80ms",
              WebkitTextStroke: "2px #121212",
              color: "transparent",
            }}
          >
            digital
          </span>
          <span className="block fade-up" style={{ animationDelay: "160ms" }}>
            experiences.
          </span>
        </h1>

        <p
          className="mt-8 fade-up"
          style={{
            fontSize: 16,
            lineHeight: 1.5,
            color: "rgba(18,18,18,0.6)",
            maxWidth: 360,
            animationDelay: "240ms",
          }}
        >
          Strategy-led, craft-obsessed design studio building brands and digital products that move people.
        </p>
      </div>

      {/* Bottom row */}
      <div className="flex flex-row items-end justify-between">
        {/* CTA button */}
        <a
          href="#"
          className="btn-underline inline-flex items-center justify-center font-semibold rounded-full text-white fade-up"
          style={{
            background: "#ee6813",
            height: 56,
            paddingLeft: 32,
            paddingRight: 32,
            fontSize: 15,
            letterSpacing: "0.01em",
            animationDelay: "320ms",
            textDecoration: "none",
          }}
        >
          Start a project →
        </a>

        {/* Right descriptor */}
        <p
          className="label-xs text-right fade-up"
          style={{
            color: "rgba(18,18,18,0.45)",
            maxWidth: 180,
            lineHeight: 1.6,
            animationDelay: "400ms",
          }}
        >
          Based in Mumbai
          <br />
          Working worldwide
        </p>
      </div>
    </section>
  );
}
