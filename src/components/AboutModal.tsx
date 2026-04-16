"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Figma asset URLs (node 351:32692, fetched 2026-04-16)
const imgRightPhoto = "https://www.figma.com/api/mcp/asset/a2d323ae-473c-41d8-8a3c-803ed78cc2a1";
const imgFrame35   = "https://www.figma.com/api/mcp/asset/eea8ae85-c19a-413b-bceb-e342a8c0a340";
const imgFrame32   = "https://www.figma.com/api/mcp/asset/c2987cfa-6d8e-404b-942d-825d959c708b";
const imgFrame36   = "https://www.figma.com/api/mcp/asset/1aea685a-b428-4e73-ac53-ad15fd59b63c";
const imgFrame33   = "https://www.figma.com/api/mcp/asset/53ad90db-e2c4-4e37-be3e-e5af2ed65ddc";
const imgFrame34   = "https://www.figma.com/api/mcp/asset/47983598-7536-4bae-9a6d-06c4d776f419";
const imgFrame37   = "https://www.figma.com/api/mcp/asset/467ea4ea-15ce-4a7d-a72e-84f8337975fa";
const imgImage16   = "https://www.figma.com/api/mcp/asset/e6cd3506-8591-4b31-ab45-b3f25faf8399";
const imgEllipse7  = "https://www.figma.com/api/mcp/asset/fd88577a-4ae2-4b06-b067-61995c354054";
const imgEllipseLife = "https://www.figma.com/api/mcp/asset/86fb15c6-99ac-4d72-a61e-78016f420f3b";
const imgEllipseTest = "https://www.figma.com/api/mcp/asset/026ad015-e021-4177-88b5-57ce09a02f2a";

const socialLinks = [
  { label: "X",         href: "https://twitter.com/riyaghosh" },
  { label: "Instagram", href: "https://instagram.com/riyaghosh" },
  { label: "Linkedin",  href: "https://www.linkedin.com/in/riyaghosh14/" },
];

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).lenis;
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      lenis?.stop();
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── OVERLAY ── */}
          <motion.div
            className="fixed inset-0 z-[60]"
            style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(2px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* ── MODAL WRAPPER ── */}
          <div
            className="fixed inset-0 z-[61] flex items-center justify-center"
            style={{ padding: "clamp(16px, 4vw, 48px)" }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="About Riya Ghosh"
              className="relative w-full"
              style={{
                maxWidth: "800px",
                height: "594px",
                borderRadius: "20px",
                background: "#212121",
                boxShadow: "0px 24px 80px 0px rgba(0,0,0,0.18)",
                overflow: "hidden",
              }}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── EVERYTHING SCROLLS ── */}
              <div
                className="about-modal-scroll"
                data-lenis-prevent
                style={{ height: "100%", overflowY: "auto", padding: "36px 40px 40px", display: "flex", flexDirection: "column", gap: "32px" }}
              >

              {/* ── HEADER ROW ── */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
                <span style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#ffffff",
                  letterSpacing: "-0.14px",
                }}>
                  About Me
                </span>

                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#ffffff",
                        letterSpacing: "-0.14px",
                        textDecoration: "none",
                        border: "1px solid rgba(0,0,0,0.12)",
                        borderRadius: "60px",
                        padding: "6px 14px",
                        transition: "background 0.15s",
                        whiteSpace: "nowrap",
                        background: "#000000",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#000000")}
                    >
                      {s.label}
                    </a>
                  ))}

                  {/* Black circle close button */}
                  <button
                    onClick={onClose}
                    aria-label="Close"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                      borderRadius: "100%",
                      background: "transparent",
                      border: "1px solid rgba(214,214,214,0.12)",
                      cursor: "pointer",
                      flexShrink: 0,
                      transition: "opacity 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    <X size={16} color="#ffffff" strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              {/* ── BODY ── */}
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

                {/* Body row: left text + right photo */}
                <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>

                  {/* Left: heading + paragraphs */}
                  <div style={{ flex: "0 0 376px", display: "flex", flexDirection: "column", gap: "24px", color: "#ffffff", minWidth: 0 }}>
                    <p style={{
                      fontFamily: "var(--font-frank-ruhl), Georgia, serif",
                      fontWeight: 300,
                      fontSize: "34px",
                      letterSpacing: "-1.02px",
                      lineHeight: "normal",
                      margin: 0,
                      color: "#ffffff",
                      fontStyle: "normal",
                    }}>
                      I&apos;m a designer, builder, &amp; Foodie — Currently rabbit-holing into the world of human-AI interaction..
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <p style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#ffffff",
                        letterSpacing: "-0.14px",
                        lineHeight: "normal",
                        margin: 0,
                      }}>
                        For 4+ years working in Deloitte I&apos;ve moved between brand, product, and systems design — from enterprise platforms to early-stage AI POCs. I&apos;ve led design at scale, shaped identity for{" "}
                        <em style={{ fontStyle: "italic", fontWeight: 500 }}>Youtube Sport TV </em>
                        landing page, and evolved design systems across{" "}
                        <em style={{ fontStyle: "italic", fontWeight: 500 }}>GM3, YTV Sport</em>
                        {" "}&amp; many more ecosystems.
                      </p>
                      <p style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#ffffff",
                        letterSpacing: "-0.14px",
                        lineHeight: "normal",
                        margin: 0,
                      }}>
                        This puts me in a rare spot: senior enough to set direction, close enough to the work to deliver it fast and well.
                      </p>
                      <p style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#ffffff",
                        letterSpacing: "-0.14px",
                        lineHeight: "normal",
                        margin: 0,
                      }}>
                        My strength is staying close to the craft — scrappy, fast, and flexible when it matters most. I explore multiple directions early to find what fits, then shape everything into one clear story that connects brand, interface, and product.
                      </p>
                    </div>
                  </div>

                  {/* Right: real photo */}
                  <div style={{
                    flex: "0 0 312px",
                    alignSelf: "stretch",
                    overflow: "hidden",
                    position: "relative",
                    minHeight: "320px",
                  }}>
                    <img
                      src={imgRightPhoto}
                      alt="Riya Ghosh"
                      style={{ position: "absolute", width: "100%", height: "154.28%", left: 0, top: "-27.14%", maxWidth: "none", pointerEvents: "none", display: "block" }}
                    />
                  </div>
                </div>

                {/* ── LIFE LATELY ── */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    border: "1px solid rgba(0,0,0,0.13)", borderRadius: "60px",
                    padding: "7px 14px", background: "#000000", width: "fit-content",
                  }}>
                    <img src={imgEllipseLife} alt="" style={{ width: "7px", height: "7px", flexShrink: 0, display: "block" }} />
                    <span style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400, fontSize: "13px", color: "#ffffff", letterSpacing: "-0.13px", whiteSpace: "nowrap" }}>
                      Life Lately
                    </span>
                  </div>

                  {/* Photo grid: 2 rows × 3 */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <div style={{ flex: "1 0 0", aspectRatio: "208/210", overflow: "hidden", position: "relative" }}>
                        <img src={imgFrame35} alt="" style={{ position: "absolute", width: "111.66%", height: "196.62%", left: "-5.81%", top: "-42.9%", maxWidth: "none", pointerEvents: "none" }} />
                      </div>
                      <div style={{ flex: "1 0 0", aspectRatio: "1/1", overflow: "hidden", position: "relative" }}>
                        <img src={imgFrame32} alt="" style={{ position: "absolute", width: "133.33%", height: "100%", left: "-33.12%", top: "0.15%", maxWidth: "none", pointerEvents: "none" }} />
                      </div>
                      <div style={{ flex: "1 0 0", aspectRatio: "1/1", overflow: "hidden", position: "relative" }}>
                        <img src={imgFrame36} alt="" style={{ position: "absolute", width: "100.11%", height: "177.97%", left: "0", top: "-0.04%", maxWidth: "none", pointerEvents: "none" }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      {[imgFrame33, imgFrame34, imgFrame37].map((src, i) => (
                        <div key={i} style={{ flex: "1 0 0", aspectRatio: "1/1", overflow: "hidden", position: "relative" }}>
                          <img src={src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", maxWidth: "none", pointerEvents: "none" }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── TESTIMONIAL ── */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    border: "1px solid rgba(0,0,0,0.13)", borderRadius: "60px",
                    padding: "7px 14px", background: "#000000", width: "fit-content",
                  }}>
                    <img src={imgEllipseTest} alt="" style={{ width: "7px", height: "7px", flexShrink: 0, display: "block" }} />
                    <span style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400, fontSize: "13px", color: "#ffffff", letterSpacing: "-0.13px", whiteSpace: "nowrap" }}>
                      Testimonial
                    </span>
                  </div>

                  <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                    {/* Testimonial 1 */}
                    <div style={{ flex: "1 0 0", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400, fontSize: "14px", color: "#ffffff", letterSpacing: "-0.14px", lineHeight: "normal", margin: 0 }}>
                        Riya is one of the most creative and thoughtful experience designers I have worked with. She brings strong product thinking and moves quickly without compromising quality. She is also a great team player, open to feedback, and always curious to explore new ideas that add real value and bring delight to the work. I had the chance to work with her on a couple of projects during my engagement at Deloitte, and she consistently showed professionalism, ownership, and strong design craft. I highly recommend Riya and I am confident she will be a great asset to any team.
                      </p>
                      <div style={{ position: "relative", width: "100%", aspectRatio: "1038/160", marginTop: "4px" }}>
                        <img src={imgImage16} alt="Vishal N S — Senior Consultant" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
                      </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div style={{ flex: "1 0 0", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400, fontSize: "14px", color: "#ffffff", letterSpacing: "-0.14px", lineHeight: "normal", margin: 0 }}>
                        Riya, thanks for all your hard work on Google! Your contributions have helped us demonstrate our value to Google, which has led to their decision of extending and expanding our team.
                      </p>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "4px" }}>
                        <img src={imgEllipse7} alt="Dlyan Krapf" width={32} height={32} style={{ borderRadius: "100%", flexShrink: 0 }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, fontSize: "10px", color: "#ffffff", letterSpacing: "-0.1px", lineHeight: "normal" }}>
                            Dlyan Krapf
                          </span>
                          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400, fontSize: "10px", color: "#ffffff", letterSpacing: "-0.1px", lineHeight: "normal" }}>
                            Studio Senior Manager
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>{/* end body */}
              </div>{/* end scroll wrapper */}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
