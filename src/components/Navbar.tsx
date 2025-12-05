"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EyesCursor } from "./EyesCursor";

const navLinks = [
  { name: "Work", href: "#portfolio" },
  { name: "Profile", href: "#facts" },
  { name: "News", href: "#featured" },
  { name: "Contact", href: "#footer" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-4 md:py-5">
          {/* Left: RG Logo Box */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center justify-center w-7 h-7 border border-white/80 hover:border-white transition-colors flex-shrink-0"
            aria-label="Riya Ghosh Home"
          >
            <span 
              className="font-medium tracking-tight"
              style={{ color: "#ffffff", fontSize: "10px" }}
            >
              RG
            </span>
          </a>

          {/* Center: Name - Hidden on mobile, visible on md+ */}
          <div 
            className="hidden md:block absolute left-1/2 -translate-x-1/2 font-normal whitespace-nowrap"
            style={{ 
              color: "rgb(179, 179, 179)",
              fontSize: "clamp(14px, 2vw, 20px)",
            }}
          >
            Riya Ghosh
          </div>

          {/* Right: Navigation Links + Eyes */}
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
            {/* Nav Links - Hidden on mobile, visible on lg+ */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="font-normal transition-colors hover:opacity-70 whitespace-nowrap"
                  style={{ 
                    color: "#ffffff",
                    fontSize: "clamp(14px, 1.5vw, 20px)",
                  }}
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            {/* Eyes - Hidden on very small screens */}
            <div className="hidden sm:block">
              <EyesCursor />
            </div>

            {/* Mobile Menu Button - visible on smaller than lg */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md lg:hidden flex flex-col items-center justify-center"
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          pointerEvents: mobileMenuOpen ? "auto" : "none" 
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-3xl font-medium text-white hover:opacity-70 transition-opacity"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: mobileMenuOpen ? 1 : 0, 
                y: mobileMenuOpen ? 0 : 20 
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {link.name}
            </motion.button>
          ))}
        </nav>
      </motion.div>
    </>
  );
};
