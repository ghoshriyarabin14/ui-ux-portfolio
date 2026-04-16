"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import type { FeaturedItem } from "@/data/projects";

interface FeaturedCardProps {
  item: FeaturedItem;
  index: number;
}

export const FeaturedCard = ({ item, index }: FeaturedCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group cursor-pointer"
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <article>
        {/* Image */}
        <div
          className="relative aspect-square overflow-hidden mb-4"
          style={{ backgroundColor: "#f0f0f0" }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Title with arrow */}
        <div className="flex items-center gap-1 mb-1">
          <h3
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              color: "#000000",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            {item.title}
          </h3>
          <ArrowUpRight
            size={15}
            strokeWidth={1.5}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ color: "#000000" }}
          />
        </div>

        {/* Description */}
        <p
          className="line-clamp-2"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 400,
            fontSize: "13px",
            color: "#757575",
            letterSpacing: "-0.01em",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {item.description}
        </p>
      </article>
    </motion.div>
  );
};
