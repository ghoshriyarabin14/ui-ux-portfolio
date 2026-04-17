"use client";

import { useEffect, useRef, useState } from "react";

export const CursorPill = () => {
  const pillRef  = useRef<HTMLDivElement>(null);
  const pos      = useRef({ x: -200, y: -200 });
  const current  = useRef({ x: -200, y: -200 });
  const rafRef   = useRef<number>(0);
  const [visible, setVisible] = useState(false);
  const [label,   setLabel]   = useState("VIEW CASE STUDY");

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    // Lerp loop so the pill lags slightly behind the cursor
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const loop = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.18);
      current.current.y = lerp(current.current.y, pos.current.y, 0.18);
      if (pillRef.current) {
        pillRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    document.addEventListener("mousemove", onMove);

    // Attach enter/leave to elements with data-cursor-label
    const attach = () => {
      const targets = document.querySelectorAll<HTMLElement>("[data-cursor-label]");
      targets.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setLabel(el.dataset.cursorLabel ?? "VIEW CASE STUDY");
          setVisible(true);
        });
        el.addEventListener("mouseleave", () => {
          setVisible(false);
        });
      });
    };

    attach();
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={pillRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99999,
        pointerEvents: "none",
        willChange: "transform",
        // offset so pill sits just below-left of the cursor tip
        marginTop: "16px",
        marginLeft: "-120px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(80,80,80,0.85)",
          backdropFilter: "blur(8px)",
          borderRadius: "60px",
          padding: "10px 18px",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.85)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          whiteSpace: "nowrap",
        }}
      >
        {/* Dot icon */}
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#fff",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            fontSize: "12px",
            letterSpacing: "0.08em",
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};
