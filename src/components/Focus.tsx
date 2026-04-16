"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { skills } from "@/data/projects";

export const Focus = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section-border bg-white overflow-hidden"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        paddingLeft: "clamp(20px, 5vw, 80px)",
        paddingRight: "clamp(20px, 5vw, 80px)",
      }}
    >
      <div className="max-w-[1760px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left label */}
        <motion.div
          className="flex items-center gap-2 flex-shrink-0 lg:w-[280px]"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <span
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(22px, 2.5vw, 40px)",
              color: "#000000",
              letterSpacing: "-0.03em",
            }}
          >
            Focus
          </span>
          <ArrowUpRight
            size={24}
            strokeWidth={1.5}
            style={{ transform: "rotate(90deg)", color: "#000000" }}
          />
        </motion.div>

        {/* Right: skills list */}
        <div className="flex flex-col gap-0 flex-1">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 52px)",
                  color: "#32404f",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.25,
                  display: "block",
                }}
              >
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
