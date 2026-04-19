"use client";

import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";

const TOTAL = 5;

export default function Home() {
  const [current, setCurrent] = useState(0);
  const isScrolling = useRef(false);

  const goTo = (index: number) => {
    setCurrent(Math.max(0, Math.min(TOTAL - 1, index)));
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // Wheel handler
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      isScrolling.current = true;
      setTimeout(() => {
        isScrolling.current = false;
      }, 800);

      if (e.deltaY > 0) {
        setCurrent((c) => Math.min(TOTAL - 1, c + 1));
      } else if (e.deltaY < 0) {
        setCurrent((c) => Math.max(0, c - 1));
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: true });
    return () => document.removeEventListener("wheel", handleWheel);
  }, []);

  // Keyboard handler
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  // Touch handler
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const dx = touchStartX - e.changedTouches[0].clientX;
      const dy = touchStartY - e.changedTouches[0].clientY;

      if (Math.abs(dx) > Math.abs(dy)) {
        // Horizontal swipe
        if (dx > 50) setCurrent((c) => Math.min(TOTAL - 1, c + 1));
        else if (dx < -50) setCurrent((c) => Math.max(0, c - 1));
      } else {
        // Vertical swipe
        if (dy > 50) setCurrent((c) => Math.min(TOTAL - 1, c + 1));
        else if (dy < -50) setCurrent((c) => Math.max(0, c - 1));
      }
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <Navbar activeSection={current} />

      <div
        className="scroll-track"
        style={{
          transform: `translateX(-${current * 100}vw)`,
          transition: "transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </div>

      <ScrollProgress current={current} />
    </div>
  );
}
