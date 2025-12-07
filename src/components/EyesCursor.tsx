"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export const EyesCursor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [leftPupil, setLeftPupil] = useState({ x: 0, y: 0 });
  const [rightPupil, setRightPupil] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  // Handle mouse move - pupils follow cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Center of each eye (16px wide, 2px gap, so centers are at 8px and 26px from left)
      const leftEyeCenter = {
        x: rect.left + 8,
        y: rect.top + 8,
      };
      const rightEyeCenter = {
        x: rect.left + 26, // 8 + 16 + 2
        y: rect.top + 8,
      };

      // Max pupil movement (eye radius - pupil radius = 8 - 3.5 = 4.5px)
      const maxMove = 3;

      // Calculate pupil position for left eye
      const leftAngle = Math.atan2(e.clientY - leftEyeCenter.y, e.clientX - leftEyeCenter.x);
      const leftDistance = Math.min(
        Math.hypot(e.clientX - leftEyeCenter.x, e.clientY - leftEyeCenter.y) / 30,
        maxMove
      );
      
      // Calculate pupil position for right eye
      const rightAngle = Math.atan2(e.clientY - rightEyeCenter.y, e.clientX - rightEyeCenter.x);
      const rightDistance = Math.min(
        Math.hypot(e.clientX - rightEyeCenter.x, e.clientY - rightEyeCenter.y) / 30,
        maxMove
      );

      setLeftPupil({
        x: Math.cos(leftAngle) * leftDistance,
        y: Math.sin(leftAngle) * leftDistance,
      });
      
      setRightPupil({
        x: Math.cos(rightAngle) * rightDistance,
        y: Math.sin(rightAngle) * rightDistance,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Blink animation on click
  const handleClick = useCallback(() => {
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 150);
  }, []);

  return (
    <div 
      ref={containerRef}
      onClick={handleClick}
      className="cursor-pointer select-none"
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2px",
      }}
      aria-label="Eyes following cursor - click to blink"
      role="button"
      tabIndex={0}
    >
      {/* Left Eye */}
      <div 
        style={{
          width: "12px",
          height: isBlinking ? "2px" : "20px",
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: "50%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          transition: "height 0.1s ease-in-out",
          border: "0.1px solid #000000",
        }}
      >
        <div
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            position: "absolute",
            transform: `translate(${leftPupil.x}px, ${leftPupil.y}px)`,
            backgroundColor: "rgb(0, 0, 0)",
            opacity: isBlinking ? 0 : 1,
            transition: "opacity 0.05s ease-in-out",
          }}
        />
      </div>
      
      {/* Right Eye */}
      <div 
        style={{
          width: "12px",
          height: isBlinking ? "2px" : "20px",
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: "50%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          transition: "height 0.1s ease-in-out",
          border: "0.1px solid #000000",
        }}
      >
        <div
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            position: "absolute",
            transform: `translate(${rightPupil.x}px, ${rightPupil.y}px)`,
            backgroundColor: "rgb(0, 0, 0)",
            opacity: isBlinking ? 0 : 1,
            transition: "opacity 0.05s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};
