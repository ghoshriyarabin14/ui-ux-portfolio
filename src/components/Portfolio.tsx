"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-black overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        {/* Projects - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
