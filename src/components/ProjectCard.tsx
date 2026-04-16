"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const typeLabel = project.type === "case-study" ? "Case Study" : "Snapshot";

  return (
    <motion.div
      ref={ref}
      className="project-card group cursor-pointer w-full"
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <article className="flex flex-col gap-3">
        {/* Label */}
        <span
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#000000",
            letterSpacing: "0",
          }}
        >
          {typeLabel}
        </span>

        {/* Title row with arrow */}
        <div className="flex items-center gap-2">
          <h3
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(22px, 2.5vw, 40px)",
              color: "#000000",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {project.title}
          </h3>
          <span className="project-title-arrow flex-shrink-0" style={{ color: "#000000" }}>
            <ArrowUpRight size={24} strokeWidth={1.5} />
          </span>
        </div>

        {/* Category */}
        <p
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
            fontSize: "clamp(14px, 1.5vw, 20px)",
            color: "#757575",
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          {project.category}
        </p>

        {/* Image */}
        <motion.div
          className="relative overflow-hidden w-full"
          style={{
            backgroundColor: project.cardBg || "#f0f0f0",
            aspectRatio: "16/10",
            borderRadius: 0,
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.15 }}
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.description}
              className="project-image w-full h-full object-cover"
              loading="lazy"
            />
          )}
        </motion.div>
      </article>
    </motion.div>
  );
};
