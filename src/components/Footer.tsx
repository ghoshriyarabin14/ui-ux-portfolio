"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AudioEmoji } from "./AudioEmoji";

const socialLinks = [
  { name: "Email",     href: "mailto:ghoshriyara14030@gmail.com" },
  { name: "LinkedIn",  href: "https://www.linkedin.com/in/riyaghosh14/" },
  { name: "X",         href: "https://x.com/riyaghoshh?s=21" },
  { name: "Instagram", href: "https://www.instagram.com/riyaghoshh?igsh=NWkzdHA2YTA2b3Fw" },
];

export const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      ref={ref}
      id="footer"
      style={{
        background: "#000000",
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        alignItems: "flex-start",
        paddingBottom: "48px",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingTop: "0",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Divider */}
      <motion.div
        style={{
          height: "1px",
          width: "100%",
          backgroundColor: "rgba(214,214,214,0.12)",
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
      />

      {/* Main row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
          flexShrink: 0,
        }}
      >
        {/* Left: domain + location */}
        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: "4px", flexShrink: 0 }}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <span
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 5vw, 64px)",
              color: "#ffffff",
              lineHeight: "normal",
              whiteSpace: "nowrap",
            }}
          >
            riyaghosh.com
          </span>
          <span
            style={{
              fontFamily: "var(--font-frank-ruhl), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(20px, 3.6vw, 52px)",
              color: "#ffffff",
              lineHeight: "normal",
              whiteSpace: "nowrap",
            }}
          >
            located in Mumbai, India
          </span>
        </motion.div>

        {/* Right: social links */}
        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: "4px", flexShrink: 0 }}
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
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(20px, 3.6vw, 52px)",
                color: "#ffffff",
                lineHeight: "normal",
                textDecoration: "none",
                whiteSpace: "nowrap",
                display: "block",
              }}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bottom: copyright + emoji */}
      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          flexShrink: 0,
        }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            color: "#757575",
            lineHeight: "normal",
            whiteSpace: "nowrap",
          }}
        >
          © 2026 Riya Ghosh. All rights reserved.
        </span>
        <AudioEmoji emoji="🍹" />
      </motion.div>
    </footer>
  );
};
