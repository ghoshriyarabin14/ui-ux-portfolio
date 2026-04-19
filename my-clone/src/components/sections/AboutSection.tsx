"use client";

export function AboutSection() {
  return (
    <section
      className="scroll-section flex flex-col px-8 lg:px-16 py-16"
      style={{ background: "#570b20" }}
    >
      {/* Top spacer for navbar */}
      <div className="h-16" />

      {/* Section label */}
      <div className="flex items-center justify-between mb-8">
        <span className="label-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
          About Us
        </span>
        <span className="label-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          03
        </span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left column — headline */}
        <div className="lg:w-[60%] flex flex-col justify-between">
          <h2 className="headline-lg text-white">
            We are a design studio obsessed with craft.
          </h2>

          {/* Body paragraph */}
          <p
            className="mt-8 lg:mt-0"
            style={{
              fontSize: 13,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 440,
            }}
          >
            Founded on the belief that great design is both art and science, we partner with ambitious brands to create work that earns attention and drives results. Every pixel is intentional. Every interaction is considered. Every project is an opportunity to do something remarkable.
          </p>
        </div>

        {/* Right column — stats */}
        <div className="lg:w-[40%] flex flex-col justify-start gap-10">
          <div>
            <span
              className="block font-bold"
              style={{ fontSize: "clamp(48px, 7vw, 80px)", lineHeight: 1, letterSpacing: "-0.03em", color: "#ffffff" }}
            >
              8+
            </span>
            <span
              className="label-xs mt-2 block"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Years of experience
            </span>
          </div>

          <div>
            <span
              className="block font-bold"
              style={{ fontSize: "clamp(48px, 7vw, 80px)", lineHeight: 1, letterSpacing: "-0.03em", color: "#ffffff" }}
            >
              120+
            </span>
            <span
              className="label-xs mt-2 block"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Projects delivered
            </span>
          </div>

          <div>
            <span
              className="block font-bold"
              style={{ fontSize: "clamp(48px, 7vw, 80px)", lineHeight: 1, letterSpacing: "-0.03em", color: "#ffffff" }}
            >
              40+
            </span>
            <span
              className="label-xs mt-2 block"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Global clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
