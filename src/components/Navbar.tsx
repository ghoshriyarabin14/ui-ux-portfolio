"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Sparkles } from "lucide-react";
import { AboutModal } from "./AboutModal";

const leftPills = [
  { name: "Senior UI/UX & AI Designer", href: "", modal: false, action: null },
  { name: "About Me",                     href: "", modal: true,  action: null },
  { name: "Fun Stuff",                   href: "#featured", modal: false, action: null },
  { name: "Resume",                      href: "", modal: false, action: "resume" },
];

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
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            {leftPills.map((pill) => (
              <button
                key={pill.name}
                onClick={() => handlePill(pill)}
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#000000",
                  letterSpacing: "-0.14px",
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.12)",
                  borderRadius: "60px",
                  padding: "7px 14px",
                  cursor: pill.href || pill.modal ? "pointer" : "default",
                  transition: "background 0.15s",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (pill.href || pill.modal)
                    e.currentTarget.style.background = "rgba(0,0,0,0.04)";
                }}
                onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
              >
                {pill.name}
              </button>
            ))}
          </div>

          {/* ── CENTER: name ── */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center select-none">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{
                fontFamily: "var(--font-frank-ruhl), Georgia, serif",
                fontWeight: 500,
                fontSize: "20px",
                color: "#000000",
                letterSpacing: "-0.2px",
                textDecoration: "none",
                pointerEvents: "auto",
              }}
            >
              Riya Ghosh
            </a>
          </div>

          {/* ── RIGHT: Rii LLM CTA ── */}
          <div className="flex items-center gap-2">
            <button
              className="hidden sm:flex items-center gap-2"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                color: "#ffffff",
                letterSpacing: "-0.14px",
                background: "#000000",
                border: "none",
                borderRadius: "60px",
                padding: "9px 18px",
                cursor: "pointer",
                transition: "opacity 0.15s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <Sparkles size={15} strokeWidth={1.8} />
              Rii LLM
            </button>

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
                    fontFamily: "var(--font-frank-ruhl), Georgia, serif",
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
                  fontSize: "14px",
                  color: "#fff",
                  background: "#000",
                  border: "none",
                  borderRadius: "60px",
                  padding: "10px 20px",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
              >
                <Sparkles size={15} strokeWidth={1.8} />
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
