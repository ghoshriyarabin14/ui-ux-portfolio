"use client";

const projects = [
  { title: "Aether Brand Identity", category: "Brand & Identity", year: "2024" },
  { title: "Nova Finance App", category: "Digital Product", year: "2024" },
  { title: "Ember Motion System", category: "Motion Design", year: "2023" },
  { title: "Solace UX Overhaul", category: "UX Strategy", year: "2023" },
];

export function WorkSection() {
  return (
    <section
      className="scroll-section flex flex-col px-8 lg:px-16 py-16"
      style={{ background: "#112639" }}
    >
      {/* Top spacer for navbar */}
      <div className="h-16" />

      {/* Section header */}
      <div className="flex items-center justify-between mb-8">
        <span className="label-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
          Selected Work
        </span>
        <span className="label-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          02
        </span>
      </div>

      {/* 2×2 card grid */}
      <div className="flex-1 grid grid-cols-2 gap-4 overflow-hidden">
        {projects.map((project) => (
          <article
            key={project.title}
            className="glass-card flex flex-col justify-between p-5 cursor-pointer"
            style={{ minHeight: 0 }}
          >
            {/* Top: category + year */}
            <div className="flex items-center justify-between">
              <span
                className="label-xs"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {project.category}
              </span>
              <span
                className="label-xs"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {project.year}
              </span>
            </div>

            {/* Bottom: title + link */}
            <div className="flex items-end justify-between mt-4">
              <h3
                className="font-bold leading-tight"
                style={{ fontSize: 18, color: "#ffffff", maxWidth: "70%" }}
              >
                {project.title}
              </h3>
              <a
                href="#"
                className="btn-underline font-medium"
                style={{ fontSize: 14, color: "#ee6813", textDecoration: "none" }}
              >
                View →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
