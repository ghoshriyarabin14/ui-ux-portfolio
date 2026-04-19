"use client";

const services = [
  "Brand Identity",
  "Digital Design",
  "Motion & Animation",
  "Web Development",
  "UX Strategy",
];

export function ServicesSection() {
  return (
    <section
      className="scroll-section flex flex-col px-8 lg:px-16 py-16"
      style={{ background: "#121212" }}
    >
      {/* Top spacer for navbar */}
      <div className="h-16" />

      {/* Section label */}
      <div className="flex items-center justify-between mb-8">
        <span className="label-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
          Our Services
        </span>
        <span className="label-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          04
        </span>
      </div>

      {/* Main content: two columns */}
      <div className="flex-1 flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left: headline */}
        <div className="lg:w-[40%] flex flex-col justify-start">
          <span className="label-xs mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
            What we do
          </span>
          <h2 className="headline-lg text-white">
            What we<br />do best.
          </h2>
        </div>

        {/* Right: services list */}
        <div className="lg:w-[60%] flex flex-col justify-center">
          {services.map((service, i) => (
            <div
              key={service}
              className="flex items-center justify-between group cursor-pointer"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.15)",
                paddingTop: i === 0 ? 0 : 20,
                paddingBottom: 20,
                transition: "transform 200ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <span
                className="font-medium"
                style={{ fontSize: 20, color: "#ffffff", letterSpacing: "-0.01em" }}
              >
                {service}
              </span>
              <span
                style={{ fontSize: 20, color: "#ee6813" }}
                aria-hidden
              >
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
