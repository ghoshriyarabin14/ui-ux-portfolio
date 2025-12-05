"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/projects";

export const Focus = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-border py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-black overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto">
        {/* Section Label */}
        <motion.p
          className="text-sm font-medium mb-6 md:mb-8 lg:mb-12"
          style={{ color: "#ffffff" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Focus ↘
        </motion.p>

        {/* Skills List */}
        <div className="space-y-0">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <span 
                className="text-heading block leading-tight"
                style={{ 
                  color: "#ffffff",
                  fontSize: "clamp(24px, 6vw, 60px)",
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
