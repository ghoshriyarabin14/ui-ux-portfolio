"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LiveClock } from "./LiveClock";
import { AudioEmoji } from "./AudioEmoji";

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/riyaghosh" },
  { name: "LinkedIn", href: "https://linkedin.com/in/riyaghosh" },
  { name: "Twitter", href: "https://twitter.com/riyaghosh" },
  { name: "TikTok", href: "https://tiktok.com/@riyaghosh" },
  { name: "VSCO", href: "https://vsco.co/riyaghosh" },
];

export const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer
      ref={ref}
      id="footer"
      className="section-border py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-black overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto">
        {/* Row 1: Contact & Social Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 mb-8 md:mb-12">
          {/* Left: Email & Location */}
          <motion.div
            className="flex-1 min-w-0"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <a
              href="mailto:hello@riyaghosh.com"
              className="text-heading link-hover inline-block mb-3 md:mb-4 break-all sm:break-normal"
              style={{ 
                color: "#ffffff",
                fontSize: "clamp(20px, 4vw, 48px)",
              }}
            >
              hello@riyaghosh.com
            </a>
            <p 
              className="text-heading"
              style={{ 
                color: "#707070",
                fontSize: "clamp(20px, 4vw, 48px)",
              }}
            >
              Permanently located in
            </p>
            <p 
              className="text-heading"
              style={{ 
                color: "#707070",
                fontSize: "clamp(20px, 4vw, 48px)",
              }}
            >
              Mumbai, India
            </p>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            className="flex flex-col items-start lg:items-end gap-1 md:gap-2"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-heading link-hover"
                style={{ 
                  color: "#ffffff",
                  fontSize: "clamp(20px, 4vw, 48px)",
                }}
                aria-label={link.name}
                tabIndex={0}
              >
                {link.name}
              </a>
            ))}
            {/* Interactive emoji with sound */}
            <div className="mt-2">
              <AudioEmoji emoji="🍹" />
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="mb-6 md:mb-8"
          style={{ 
            height: "0.5px", 
            backgroundColor: "rgba(79, 79, 79, 0.25)",
            transformOrigin: "left"
          }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Row 2: Handle & Clock */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 md:gap-8">
          {/* Large Handle */}
          <motion.div
            className="w-full lg:w-auto overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span 
              className="text-display block leading-none"
              style={{ 
                color: "#ffffff",
                fontSize: "clamp(32px, 10vw, 180px)",
              }}
            >
              @riyaghosh
            </span>
          </motion.div>

          {/* Right: Clock & Info */}
          <motion.div
            className="flex flex-col items-start lg:items-end gap-3 md:gap-4 flex-shrink-0"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Clock Section */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3 text-white">
              <span className="text-xs font-medium uppercase tracking-wider whitespace-nowrap">🕔 It&apos;s Five O&apos;Clock Somewhere →</span>
              <LiveClock />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
