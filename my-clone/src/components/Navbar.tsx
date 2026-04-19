"use client";

import { useState } from "react";

interface NavbarProps {
  activeSection: number;
}

const isDark = (section: number) => section === 1 || section === 2 || section === 3;

export function Navbar({ activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const dark = isDark(activeSection);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 h-16"
        style={{ transition: "color 0.4s ease" }}
      >
        {/* Wordmark */}
        <span
          className="text-base font-bold tracking-tight select-none"
          style={{ color: dark ? "#ffffff" : "#121212" }}
        >
          dzinr.
        </span>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {["Work", "About", "Services", "Contact"].map((label) => (
            <li key={label}>
              <span
                className="btn-underline label-xs cursor-pointer"
                style={{
                  color: dark ? "rgba(255,255,255,0.8)" : "rgba(18,18,18,0.7)",
                  transition: "color 0.4s ease",
                }}
              >
                {label}
              </span>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer p-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-[1.5px]"
              style={{ background: dark ? "#ffffff" : "#121212" }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col px-8 py-16"
          style={{ background: "#121212" }}
        >
          <button
            className="absolute top-5 right-8 text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          <ul className="flex flex-col gap-8 mt-16 list-none">
            {["Work", "About", "Services", "Contact"].map((label) => (
              <li key={label}>
                <span
                  className="text-white font-bold cursor-pointer"
                  style={{ fontSize: "clamp(36px, 8vw, 64px)", letterSpacing: "-0.02em" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
