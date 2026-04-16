"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Facts = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="facts"
      className="section-border bg-white overflow-hidden"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        paddingLeft: "clamp(20px, 5vw, 80px)",
        paddingRight: "clamp(20px, 5vw, 80px)",
      }}
    >
      <div className="max-w-[1760px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-[clamp(60px,18vw,356px)]">
        {/* Left label */}
        <motion.p
          className="flex-shrink-0 lg:w-[200px]"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#757575",
            margin: 0,
          }}
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.7 }}
        >
          About
        </motion.p>

        {/* Right: bio */}
        <motion.div
          className="flex flex-col gap-5 flex-1 min-w-0"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          {[
            `I'm a UI/UX Designer passionate about creating digital experiences that are not only beautiful but also intuitive and accessible. With 4+ years of experience, I've had the privilege of working with some amazing teams and products that have shaped my design philosophy.`,
            `Currently, I'm crafting delightful user experiences focused on products that reach millions of users daily. My focus is on creating design systems that scale and ensuring consistency across complex product ecosystems.`,
            `I believe great design is invisible – it should feel so natural that users don't even notice it. My approach combines data-driven insights with creative intuition, always keeping the end user at the center of every decision.`,
            `When I'm not pushing pixels, you'll find me exploring new design tools, contributing to the design community through workshops and mentorship, or experimenting with 3D and motion design. Currently exploring the intersection of AI and UI.`,
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(15px, 1.4vw, 18px)",
                color: "#32404f",
                letterSpacing: "-0.01em",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {para}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
