"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 md:py-20 bg-black overflow-hidden" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
      <div className="max-w-[1800px] mx-auto">
        {/* Projects - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '24px' }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
