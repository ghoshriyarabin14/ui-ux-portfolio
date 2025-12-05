"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const typeEmoji = project.type === "case-study" ? "📝" : "📸";
  const typeLabel = project.type === "case-study" ? "CASE STUDY" : "SNAPSHOT";

  return (
    <motion.div
      ref={ref}
      className="project-card group cursor-pointer w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <article>
        {/* Info Section - TOP */}
        <div className="mb-4">
          {/* Type Badge */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">{typeEmoji}</span>
            <span 
              className="text-xs font-medium tracking-wider uppercase"
              style={{ color: "#ffffff" }}
            >
              {typeLabel}
            </span>
          </div>

          {/* Title */}
          <h3 
            className="text-heading text-xl md:text-2xl lg:text-[28px] mb-1"
            style={{ color: "#ffffff" }}
          >
            {project.title}
          </h3>

          {/* Category - Gray */}
          <p 
            className="text-sm md:text-base"
            style={{ color: "#707070" }}
          >
            {project.category}
          </p>
        </div>

        {/* Image Section - BELOW */}
        <motion.div
          className="relative overflow-hidden rounded-lg aspect-[16/9]"
          style={{ backgroundColor: "#1a1a1a" }}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            src={project.image}
            alt={project.description}
            className="project-image w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </article>
    </motion.div>
  );
};
