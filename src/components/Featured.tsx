"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { featuredItems } from "@/data/projects";
import { FeaturedCard } from "./FeaturedCard";

export const Featured = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="featured"
      className="section-border bg-white overflow-hidden"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        paddingLeft: "clamp(20px, 5vw, 80px)",
        paddingRight: "clamp(20px, 5vw, 80px)",
      }}
    >
      <div className="max-w-[1760px] mx-auto flex flex-col gap-10">
        {/* Section label */}
        <motion.p
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#757575",
            letterSpacing: "0",
            margin: 0,
          }}
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.7 }}
        >
          News &amp; Recognition
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredItems.map((item, index) => (
            <FeaturedCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
