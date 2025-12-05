"use client";

import { useEffect } from "react";
import useFluidCursor from "@/hooks/useFluidCursor";

export const FluidCursor = () => {
  useEffect(() => {
    useFluidCursor();
  }, []);

  return (
    <canvas
      id="fluid"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
      }}
    />
  );
};

