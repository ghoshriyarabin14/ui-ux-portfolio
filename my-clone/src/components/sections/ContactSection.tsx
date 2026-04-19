"use client";

export function ContactSection() {
  return (
    <section
      className="scroll-section flex flex-col px-8 lg:px-16 py-16"
      style={{ background: "#fdf6e3" }}
    >
      {/* Top spacer for navbar */}
      <div className="h-16" />

      {/* Section label */}
      <div className="flex items-center justify-between mb-8">
        <span className="label-xs" style={{ color: "rgba(18,18,18,0.45)" }}>
          Get in touch
        </span>
        <span className="label-xs" style={{ color: "rgba(18,18,18,0.3)" }}>
          05
        </span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="headline-xl" style={{ color: "#121212" }}>
            Let&apos;s build<br />something<br />great.
          </h2>

          <div className="mt-10">
            <a
              href="mailto:hello@dzinr.in"
              className="btn-underline font-bold"
              style={{
                fontSize: "clamp(20px, 3.5vw, 40px)",
                color: "#ee6813",
                textDecoration: "none",
                letterSpacing: "-0.02em",
              }}
            >
              hello@dzinr.in
            </a>
          </div>
        </div>

        {/* Bottom row — social links */}
        <div className="flex flex-row items-center gap-8">
          {["Instagram", "LinkedIn", "Dribbble"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="btn-underline label-xs"
              style={{
                color: "rgba(18,18,18,0.5)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#121212";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(18,18,18,0.5)";
              }}
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
