"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AudioEmoji } from "./AudioEmoji";

const socialLinks = [
  { name: "Email", href: "mailto:hello@riyaghosh.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/riyaghosh14/" },
  { name: "Twitter", href: "https://twitter.com/riyaghosh" },
  { name: "Instagram", href: "https://instagram.com/riyaghosh" },
];

export const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      ref={ref}
      id="footer"
      className="section-border bg-white overflow-hidden"
      style={{
        paddingTop: "80px",
        paddingBottom: "60px",
        paddingLeft: "clamp(20px, 5vw, 80px)",
        paddingRight: "clamp(20px, 5vw, 80px)",
      }}
    >
      <div className="max-w-[1760px] mx-auto flex flex-col gap-12">
        {/* Main row: domain + social links */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left: domain + location */}
          <motion.div
            className="flex flex-col gap-1"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <span
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "clamp(32px, 5vw, 64px)",
                color: "#000000",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
              }}
            >
              riyaghosh.com
            </span>
            <span
              style={{
                fontFamily: "var(--font-rhymes), Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(20px, 3vw, 52px)",
                color: "#32404f",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              located in Mumbai, India
            </span>
          </motion.div>

          {/* Right: social links */}
          <motion.div
            className="flex flex-col items-start lg:items-end gap-1"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="link-hover"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(20px, 3vw, 52px)",
                  color: "#32404f",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.25,
                  textDecoration: "none",
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          style={{
            height: "0.5px",
            backgroundColor: "rgba(2, 2, 2, 0.1)",
            transformOrigin: "left",
          }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Bottom: copyright + emoji */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "13px",
              color: "#757575",
              letterSpacing: "0",
            }}
          >
            © 2026 Riya Ghosh. All rights reserved.
          </span>
          <AudioEmoji emoji="🍹" />
        </motion.div>
      </div>
    </footer>
  );
};
