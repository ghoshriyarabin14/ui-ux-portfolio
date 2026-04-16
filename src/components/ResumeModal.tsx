"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RESUME_PATH = "/Riya Ghosh_resume26_pdf.docx";

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [html, setHtml]       = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).lenis;
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      lenis?.stop();

      if (!html) {
        setLoading(true);
        setError(false);
        (async () => {
          try {
            const res = await fetch(RESUME_PATH);
            const buf = await res.arrayBuffer();
            const mammoth = (await import("mammoth")).default;
            const result  = await mammoth.convertToHtml({ arrayBuffer: buf });
            setHtml(result.value);
          } catch {
            setError(true);
          } finally {
            setLoading(false);
          }
        })();
      }
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [isOpen, onClose, html]);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = RESUME_PATH;
    a.download = "Riya Ghosh_resume26_pdf.docx";
    a.click();
  };

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
              aria-label="Riya Ghosh Resume"
              className="relative w-full"
              style={{
                maxWidth: "860px",
                height: "clamp(500px, 85vh, 720px)",
                borderRadius: "20px",
                background: "#212121",
                boxShadow: "0px 24px 80px 0px rgba(0,0,0,0.24)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── HEADER ── */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexShrink: 0,
                  padding: "20px 24px",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#ffffff",
                    letterSpacing: "-0.14px",
                  }}
                >
                  Resume
                </span>

                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <button
                    onClick={handleDownload}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#ffffff",
                      letterSpacing: "-0.14px",
                      background: "#000000",
                      border: "1px solid rgba(0,0,0,0.12)",
                      borderRadius: "60px",
                      padding: "6px 14px",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#000000")}
                  >
                    <Download size={13} strokeWidth={2} />
                    Download
                  </button>

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
              <div
                data-lenis-prevent
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "32px 40px",
                  display: "flex",
                  alignItems: loading || error || !html ? "center" : "flex-start",
                  justifyContent: loading || error || !html ? "center" : "flex-start",
                }}
              >
                {loading && (
                  <span style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "-0.14px",
                  }}>
                    Loading…
                  </span>
                )}

                {error && !loading && (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                    <p style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: "-0.14px",
                      margin: 0,
                      textAlign: "center",
                    }}>
                      Could not load preview.
                    </p>
                    <button
                      onClick={handleDownload}
                      style={{
                        display: "flex", alignItems: "center", gap: "6px",
                        fontFamily: "var(--font-inter), sans-serif", fontWeight: 400,
                        fontSize: "14px", color: "#ffffff", letterSpacing: "-0.14px",
                        background: "transparent", border: "1px solid rgba(214,214,214,0.12)",
                        borderRadius: "60px", padding: "8px 16px", cursor: "pointer",
                      }}
                    >
                      <Download size={14} strokeWidth={2} />
                      Download Resume
                    </button>
                  </div>
                )}

                {!loading && !error && html && (
                  <div
                    style={{ width: "100%", color: "#ffffff" }}
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                )}
              </div>

              {/* ── RESUME CONTENT STYLES ── */}
              <style>{`
                [aria-label="Riya Ghosh Resume"] h1,
                [aria-label="Riya Ghosh Resume"] h2,
                [aria-label="Riya Ghosh Resume"] h3,
                [aria-label="Riya Ghosh Resume"] h4 {
                  font-family: var(--font-frank-ruhl), Georgia, serif;
                  font-weight: 500;
                  color: #ffffff;
                  margin: 0 0 8px;
                  letter-spacing: -0.02em;
                }
                [aria-label="Riya Ghosh Resume"] h1 { font-size: 28px; margin-bottom: 12px; }
                [aria-label="Riya Ghosh Resume"] h2 { font-size: 18px; margin-top: 24px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 6px; }
                [aria-label="Riya Ghosh Resume"] h3 { font-size: 15px; font-weight: 500; }
                [aria-label="Riya Ghosh Resume"] p,
                [aria-label="Riya Ghosh Resume"] li {
                  font-family: var(--font-inter), sans-serif;
                  font-size: 13px;
                  font-weight: 400;
                  color: rgba(255,255,255,0.8);
                  letter-spacing: -0.13px;
                  line-height: 1.6;
                  margin: 0 0 6px;
                }
                [aria-label="Riya Ghosh Resume"] ul {
                  padding-left: 18px;
                  margin: 4px 0 12px;
                }
                [aria-label="Riya Ghosh Resume"] a {
                  color: rgba(255,255,255,0.6);
                  text-decoration: none;
                }
              `}</style>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
