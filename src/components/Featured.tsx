"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { featuredItems } from "@/data/projects";
import { FeaturedCard } from "./FeaturedCard";

export const Featured = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="featured"
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
          Featured ↘
        </motion.p>

        {/* Featured Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {featuredItems.map((item, index) => (
            <FeaturedCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
