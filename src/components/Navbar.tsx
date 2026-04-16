"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ArrowUpRight } from "lucide-react";
import { AboutModal } from "./AboutModal";
import { FollowEyes } from "./FollowEyes";

const AUTO_AWESOME_ICON =
  "https://www.figma.com/api/mcp/asset/f44ea3f1-eada-4ec5-83e9-4049e7f084a2";

const leftPills = [
  { name: "Senior UI/UX & AI Designer", href: "", modal: false, action: null, noBorder: true },
  { name: "About",  href: "",            modal: true,  action: null,           noBorder: false },
  { name: "Resume", href: "",            modal: false, action: "resume",       noBorder: false },
];

function InteractivePill({ label, onClick }: { label: string; onClick: () => void }) {
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
        fontSize: "14px",
        color: "#ffffff",
        letterSpacing: "-0.14px",
        background: "transparent",
        border: "1px solid rgba(214,214,214,0.12)",
        borderRadius: "60px",
        padding: "0 14px",
        height: "31px",
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
      {label}
    </motion.button>
  );
}

function AboutPill({ onClick }: { onClick: () => void }) {
  return <InteractivePill label="About" onClick={onClick} />;
}

export const Navbar = () => {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [aboutOpen, setAboutOpen]       = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlePill = (pill: typeof leftPills[0]) => {
    if (pill.modal) {
      setAboutOpen(true);
      setMobileOpen(false);
    } else if (pill.action === "resume") {
      window.open("/Riya Ghosh_resume26_pdf.docx", "_blank");
      setMobileOpen(false);
    } else if (pill.href) {
      document.querySelector(pill.href)?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50${scrolled ? " navbar scrolled" : ""}`}
        style={{ background: "#141414" }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        <nav
          className="flex items-center justify-between"
          style={{ paddingTop: "32px", paddingBottom: "16px", paddingLeft: "24px", paddingRight: "24px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* ── LEFT: pill nav ── */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0 flex-1">
            {leftPills.map((pill) =>
              pill.modal ? (
                /* About — arrow slides in on hover */
                <AboutPill key={pill.name} onClick={() => handlePill(pill)} />
              ) : pill.action === "resume" ? (
                /* Resume — same arrow interaction as About */
                <InteractivePill key={pill.name} label={pill.name} onClick={() => handlePill(pill)} />
              ) : !pill.href && !pill.action ? (
                /* Static label pill — no interaction */
                <span
                  key={pill.name}
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#ffffff",
                    letterSpacing: "-0.14px",
                    background: "transparent",
                    border: pill.noBorder ? "none" : "1px solid rgba(214,214,214,0.12)",
                    borderRadius: "60px",
                    padding: "7px 14px",
                    lineHeight: "normal",
                    whiteSpace: "nowrap",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  {pill.name}
                </span>
              ) : (
                <motion.button
                  key={pill.name}
                  onClick={() => handlePill(pill)}
                  whileHover={{ rotate: -4, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#ffffff",
                    letterSpacing: "-0.14px",
                    background: "transparent",
                    border: "1px solid rgba(214,214,214,0.12)",
                    borderRadius: "60px",
                    padding: "7px 14px",
                    cursor: "pointer",
                    lineHeight: "normal",
                    whiteSpace: "nowrap",
                    transformOrigin: "center center",
                  }}
                >
                  {pill.name}
                </motion.button>
              )
            )}
          </div>

          {/* ── CENTER: name — absolute so it's always exactly centered ── */}
          <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{
                fontFamily: "var(--font-frank-ruhl), Georgia, serif",
                fontWeight: 500,
                fontSize: "20px",
                color: "#ffffff",
                textDecoration: "none",
                lineHeight: "normal",
                display: "block",
                whiteSpace: "nowrap",
                letterSpacing: "-0.2px",
                pointerEvents: "auto",
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
                fontSize: "14px",
                color: "#ffffff",
                letterSpacing: "-0.14px",
                background: "transparent",
                border: "none",
                borderRadius: "60px",
                padding: "9px 18px",
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
            className="fixed inset-0 z-40 flex flex-col items-center justify-center" style={{ background: "#141414" }}
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

      {/* ── Back to Top ── */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            whileHover={{ rotate: -3, scale: 1.04 }}
            style={{
              position: "fixed",
              bottom: "32px",
              right: "24px",
              zIndex: 50,
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#ffffff",
              letterSpacing: "-0.14px",
              background: "transparent",
              border: "1px solid rgba(214,214,214,0.12)",
              borderRadius: "60px",
              padding: "7px 14px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              lineHeight: "normal",
              backdropFilter: "blur(8px)",
            }}
          >
            ↑ Back to Top
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
