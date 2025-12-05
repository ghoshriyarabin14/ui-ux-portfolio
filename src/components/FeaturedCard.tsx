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
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <article>
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg mb-4" style={{ backgroundColor: "#1a1a1a" }}>
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div>
          {/* Title with Arrow */}
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-base font-medium" style={{ color: "#ffffff" }}>
              {item.title}
            </h3>
            <ArrowUpRight 
              className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
              style={{ color: "#ffffff" }}
            />
          </div>

          {/* Description */}
          <p className="text-sm line-clamp-2" style={{ color: "#707070" }}>
            {item.description}
          </p>
        </div>
      </article>
    </motion.div>
  );
};
