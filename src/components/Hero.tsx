"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const handleScrollDown = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* Video Container */}
      <div 
        className="absolute left-0 right-0 flex items-center justify-center pointer-events-none"
        style={{
          top: "80px",
          bottom: "100px",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full h-full flex items-center justify-center"
          style={{ maxWidth: "500px", maxHeight: "100%" }}
        >
          <video
            src="/hero-animation.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "scale-down",
              objectPosition: "50% 50%",
              display: "block",
            }}
          />
        </motion.div>
      </div>

      {/* Bottom Content - Responsive flex row */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-4 sm:pb-6 md:pb-8" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
        <div className="w-full flex items-end justify-between gap-4">
          {/* Feed - Left */}
          <motion.button
            onClick={handleScrollDown}
            className="flex items-center gap-1 sm:gap-2 font-normal transition-colors cursor-pointer hover:opacity-70 flex-shrink-0"
            style={{ 
              color: "#ffffff",
              fontSize: "clamp(14px, 2vw, 20px)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            aria-label="Scroll to portfolio"
            tabIndex={0}
          >
            <span>Feed</span>
            <ArrowDown style={{ width: "clamp(14px, 2vw, 20px)", height: "clamp(14px, 2vw, 20px)" }} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
