"use client";

import { useEffect, useRef } from "react";

interface EyeProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function Eye({ containerRef }: EyeProps) {
  const pupilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const pupil = pupilRef.current;
      const container = containerRef.current;
      if (!pupil || !container) return;

      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const angle = Math.atan2(dy, dx);
      const dist = Math.min(Math.hypot(dx, dy), 5);

      const x = Math.cos(angle) * dist;
      const y = Math.sin(angle) * dist;

      pupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef]);

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      style={{
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: "#fff",
        border: "1.5px solid rgba(0,0,0,0.18)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <div
        ref={pupilRef}
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#000",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.08s ease-out",
        }}
      />
    </div>
  );
}

export function FollowEyes() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        pointerEvents: "none",
      }}
    >
      <Eye containerRef={leftRef} />
      <Eye containerRef={rightRef} />
    </div>
  );
}
