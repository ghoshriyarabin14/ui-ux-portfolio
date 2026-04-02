"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ArrowUpRight } from "lucide-react";
import { AboutModal } from "./AboutModal";
import { FollowEyes } from "./FollowEyes";

const AUTO_AWESOME_ICON =
  "https://www.figma.com/api/mcp/asset/ffae57bf-ecd5-4f46-a420-ede64328dde1";

const leftPills = [
  { name: "About Me",    href: "",          modal: true,  action: null },
  { name: "Playground",  href: "#featured",  modal: false, action: null },
  { name: "Resume",      href: "",           modal: false, action: "resume" },
];

function AboutPill({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ rotate: -4, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      style={{
        fontFamily: "var(--font-inter), sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        color: "#000000",
        letterSpacing: "-0.16px",
        background: "white",
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: "60px",
        padding: "0 14px",
        height: "40px",
        cursor: "pointer",
        lineHeight: 1,
        whiteSpace: "nowrap",
        transformOrigin: "center center",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        overflow: "hidden",
      }}
    >
      <motion.span
        initial={{ width: 0, opacity: 0, marginRight: 0 }}
        animate={hovered
          ? { width: 14, opacity: 1, marginRight: 2 }
          : { width: 0, opacity: 0, marginRight: 0 }
        }
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        style={{ display: "flex", alignItems: "center", overflow: "hidden", flexShrink: 0 }}
      >
        <ArrowUpRight size={14} strokeWidth={2} />
      </motion.span>
      About
    </motion.button>
  );
}

export const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlePill = (pill: typeof leftPills[0]) => {
    if (pill.modal) {
      setAboutOpen(true);
      setMobileOpen(false);
    } else if (pill.href) {
      document.querySelector(pill.href)?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 bg-white${scrolled ? " navbar scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        <nav
          className="flex items-center justify-between"
          style={{ padding: "12px 24px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}
        >
          {/* ── LEFT: pill nav ── */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0 flex-1">
            {leftPills.map((pill) =>
              pill.modal ? (
                /* About Me — arrow slides in on hover */
                <AboutPill key={pill.name} onClick={() => handlePill(pill)} />
              ) : (
                <motion.button
                  key={pill.name}
                  onClick={() => handlePill(pill)}
                  whileHover={{ rotate: -4, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#000000",
                    letterSpacing: "-0.16px",
                    background: "white",
                    border: "1px solid rgba(0,0,0,0.12)",
                    borderRadius: "60px",
                    padding: "0 14px",
                    height: "40px",
                    cursor: pill.href ? "pointer" : "default",
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                    transformOrigin: "center center",
                  }}
                >
                  {pill.name}
                </motion.button>
              )
            )}
          </div>

          {/* ── CENTER: name ── */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center select-none">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{
                fontFamily: "var(--font-crimson), Georgia, serif",
                fontWeight: 400,
                fontSize: "42px",
                color: "#000000",
                textDecoration: "none",
                lineHeight: 1,
                display: "block",
                whiteSpace: "nowrap",
              }}
            >
              Riya Ghosh
            </a>
          </div>

          {/* ── RIGHT: Rii LLM CTA + eyes ── */}
          <div className="flex items-center flex-1 justify-end" style={{ gap: 8 }}>
            <motion.button
              className="hidden sm:flex items-center gap-2"
              whileHover={{ rotate: 3, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                color: "#000000",
                letterSpacing: "-0.16px",
                background: "#c9caff",
                border: "none",
                borderRadius: "60px",
                padding: "0 18px",
                height: "40px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transformOrigin: "center center",
              }}
            >
              <img
                src={AUTO_AWESOME_ICON}
                alt=""
                style={{ width: 16, height: 17, display: "block", flexShrink: 0 }}
              />
              Rii LLM
            </motion.button>
            <div className="hidden sm:flex">
              <FollowEyes />
            </div>

            <button
              className="md:hidden p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col items-center gap-7">
              {leftPills.map((pill, i) => (
                <motion.button
                  key={pill.name}
                  onClick={() => handlePill(pill)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 300,
                    fontSize: "clamp(28px, 7vw, 48px)",
                    color: "#000000",
                    letterSpacing: "-0.03em",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {pill.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="flex items-center gap-2"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#000",
                  background: "#c9caff",
                  border: "none",
                  borderRadius: "60px",
                  padding: "10px 20px",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
              >
                <img
                  src={AUTO_AWESOME_ICON}
                  alt=""
                  style={{ width: 16, height: 17, display: "block", flexShrink: 0 }}
                />
                Rii LLM
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
    </>
  );
};
