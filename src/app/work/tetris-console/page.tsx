"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import Image from "next/image";

// ── Figma assets ──────────────────────────────────────────────────────────────
const imgSanFrancisco49ers = "https://www.figma.com/api/mcp/asset/8f0225eb-3436-4244-b4a9-e474ead53627";
const imgSharksDeck        = "https://www.figma.com/api/mcp/asset/9a0af34d-7bc0-4a94-87db-67fbedc5ac31";
const imgGsDeck            = "https://www.figma.com/api/mcp/asset/c02fba10-0043-4575-8e1b-f7b0237a994c";
const imgHotspurDeck       = "https://www.figma.com/api/mcp/asset/0b0da258-1c66-42ab-8493-720889625d09";
const imgAutoAwesome       = "https://www.figma.com/api/mcp/asset/9c422a37-4174-4825-9ebb-bedf381026e4";

// ── Team cards data ───────────────────────────────────────────────────────────
const teamCards = [
  { bg: "#c50000", img: imgSanFrancisco49ers, label: "NFL · San Francisco 49ers", blend: false },
  { bg: "#006d75", img: imgSharksDeck,        label: "NHL · San Jose Sharks",     blend: true  },
  { bg: "#1d428a", img: imgGsDeck,            label: "NBA · Golden State Warriors",blend: true  },
  { bg: "#132257", img: imgHotspurDeck,       label: "EPL · Tottenham Hotspur",   blend: true  },
];

// ── Divider line ──────────────────────────────────────────────────────────────
function Divider() {
  return <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.12)", flexShrink: 0 }} />;
}

// ── Section row: label left · body right ─────────────────────────────────────
function SectionRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "48px", alignItems: "flex-start" }}>
      <p style={{
        fontFamily: "var(--font-inter), sans-serif",
        fontWeight: 400,
        fontSize: "24px",
        color: "#fff",
        whiteSpace: "nowrap",
        flexShrink: 0,
        margin: 0,
        lineHeight: 1.3,
      }}>
        {label}
      </p>
      <div style={{ flex: 1, maxWidth: "66%" }}>
        {children}
      </div>
    </div>
  );
}

// ── White image placeholder ───────────────────────────────────────────────────
function Placeholder({ height = 612 }: { height?: number }) {
  return <div style={{ background: "rgba(255,255,255,0.06)", width: "100%", height, borderRadius: "4px", flexShrink: 0 }} />;
}

// ── Dark navbar ───────────────────────────────────────────────────────────────
function DarkNavbar() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 50,
      background: "#000",
      borderBottom: "1px solid rgba(214,214,214,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 24px",
    }}>
      {/* Left pills */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center", flex: 1 }}>
        {[
          { label: "Senior UI/UX & AI Designer", href: "/" },
          { label: "About", href: "/" },
          { label: "Fun Stuff", href: "/#featured" },
          { label: "Resume", href: "/" },
        ].map((pill) => (
          <a
            key={pill.label}
            href={pill.label === "About" ? undefined : pill.href}
            onClick={pill.label === "About" ? () => setAboutOpen(true) : undefined}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#fff",
              letterSpacing: "-0.14px",
              border: "1px solid rgba(214,214,214,0.12)",
              borderRadius: "60px",
              padding: "7px 14px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              cursor: "pointer",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            {pill.label === "About" && <ArrowUpRight size={13} strokeWidth={2} />}
            {pill.label}
          </a>
        ))}
      </div>

      {/* Center */}
      <a
        href="/"
        style={{
          fontFamily: "var(--font-frank-ruhl), Georgia, serif",
          fontWeight: 500,
          fontSize: "20px",
          color: "#fff",
          letterSpacing: "-0.2px",
          textDecoration: "none",
          textAlign: "center",
          flex: 1,
        }}
      >
        Riya Ghosh
      </a>

      {/* Right: Rii LLM */}
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <button style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 500,
          fontSize: "14px",
          color: "#fff",
          letterSpacing: "-0.14px",
          background: "transparent",
          border: "none",
          borderRadius: "60px",
          padding: "9px 18px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}>
          <img src={imgAutoAwesome} alt="" style={{ width: 16, height: 17, display: "block" }} />
          Rii LLM
        </button>
      </div>
    </header>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function TetrisConsole() {
  const bodyStyle: React.CSSProperties = {
    fontFamily: "var(--font-inter), sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    color: "rgba(255,255,255,0.72)",
    lineHeight: 1.6,
    margin: 0,
  };

  return (
    <>
      <DarkNavbar />

      <div style={{ background: "#000", minHeight: "100vh", paddingTop: "65px", color: "#fff" }}>
        <div style={{ padding: "0 48px 120px" }}>

          {/* ── HERO ── */}
          <section style={{ display: "flex", flexDirection: "column", gap: "72px", paddingTop: "40px" }}>
            <Divider />

            {/* Title row */}
            <div style={{ display: "flex", alignItems: "center", gap: "167px" }}>
              <span style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                color: "#fff",
                whiteSpace: "nowrap",
              }}>
                Case study
              </span>
              <span style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                color: "#fff",
                whiteSpace: "nowrap",
              }}>
                Product design
              </span>
              <h1 style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(48px, 5vw, 76px)",
                color: "#fff",
                letterSpacing: "-0.03em",
                margin: 0,
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}>
                Tetris Console
              </h1>
            </div>
          </section>

          {/* ── HORIZONTAL CARD STRIP ── */}
          <section style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{
              display: "flex",
              gap: "14px",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              marginLeft: "-48px",
              marginRight: "-48px",
              paddingLeft: "48px",
              paddingRight: "48px",
            }}>
              {teamCards.map((card) => (
                <div
                  key={card.label}
                  style={{
                    background: card.bg,
                    width: "calc(25vw - 20px)",
                    minWidth: "280px",
                    height: "400px",
                    borderRadius: "8px",
                    flexShrink: 0,
                    position: "relative",
                    overflow: "hidden",
                    scrollSnapAlign: "start",
                  }}
                >
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6))",
                  }} />
                  <img
                    src={card.img}
                    alt={card.label}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      mixBlendMode: card.blend ? "soft-light" : "normal",
                      opacity: card.blend ? 0.53 : 1,
                      pointerEvents: "none",
                    }}
                  />
                  <p style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.8)",
                    margin: 0,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}>
                    {card.label}
                  </p>
                </div>
              ))}
            </div>

            {/* ── META GRID ── */}
            <div style={{
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              paddingBottom: "32px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "20px",
            }}>
              {[
                { label: "Timeline", lines: ["1 year 3 months"] },
                { label: "Team", lines: ["Malvika Nanda", "Yun Easing", "Riya Ghosh"] },
                { label: "Role", lines: ["Product Designer"] },
                { label: "Skills", lines: ["Design Systems", "Component Architecture", "Product Strategy"] },
                { label: "Tools", lines: ["Figma", "Protopie", "Lottielab"] },
              ].map(({ label, lines }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", gap: "8px", flex: "1 0 120px" }}>
                  <p style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#c9caff",
                    letterSpacing: "0.55px",
                    textTransform: "capitalize",
                    margin: 0,
                    lineHeight: "normal",
                  }}>
                    {label}
                  </p>
                  <div>
                    {lines.map((line) => (
                      <p key={line} style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "#fff",
                        lineHeight: "1.3",
                        margin: 0,
                      }}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* ── CONTEXT ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <Divider />
              <SectionRow label="Context">
                <p style={bodyStyle}>
                  The Tetris Console started as a question: what happens when you strip a classic game down to its physical form? Not an emulator, not an app — a dedicated piece of hardware designed around one experience.
                </p>
                <br />
                <p style={bodyStyle}>
                  The brief was deceptively simple: design the hardware and software experience for a single-purpose Tetris device. But behind it was a taxonomy problem. Every decision — button placement, screen size, feedback mechanisms, UI hierarchy — had to serve a player whose hands were already committed, whose eyes were already tracking falling pieces.
                </p>
                <br />
                <p style={bodyStyle}>
                  The console had to handle casual players and competitive runners without a separate design file for each mode. One form factor. Every state.
                </p>
              </SectionRow>
            </div>
          </section>

          {/* ── PLACEHOLDER 2-COL ── */}
          <section style={{ marginTop: "80px", display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <Placeholder />
              <Placeholder />
            </div>
            <Divider />
          </section>

          {/* ── FULL-WIDTH PLACEHOLDER ── */}
          <section style={{ marginTop: "0" }}>
            <Placeholder height={612} />
          </section>

          {/* ── DISPLAY QUOTE ── */}
          <section style={{ marginTop: "80px" }}>
            <p style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(40px, 5vw, 76px)",
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: 0,
              maxWidth: "900px",
            }}>
              Imagine being handed a list of strangers and told to make magic happen
            </p>
          </section>

          {/* ── EXPLORATION 1 ── */}
          <section style={{ marginTop: "80px", display: "flex", flexDirection: "column", gap: "32px" }}>
            <Placeholder height={702} />
            <Divider />
            <SectionRow label="Exploration">
              <p style={bodyStyle}>
                The first round of exploration was about understanding what "holding a game" actually means. We prototyped six form factors — from landscape to portrait, from shoulder-button-led to thumb-led. The winning insight wasn't ergonomic, it was attentional: the player's eyes never leave the playfield, so every control had to be operable by muscle memory alone.
              </p>
              <br />
              <p style={bodyStyle}>
                That single constraint eliminated three of the six directions immediately. The remaining three were about how much real estate the score UI could claim before it started pulling focus from the game.
              </p>
            </SectionRow>
          </section>

          {/* ── EXPLORATION 2 ── */}
          <section style={{ marginTop: "80px", display: "flex", flexDirection: "column", gap: "32px" }}>
            <Placeholder height={702} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <Placeholder />
              <Placeholder />
            </div>
            <Divider />
            <SectionRow label="Exploration">
              <p style={bodyStyle}>
                The UI system had to work across three distinct states: idle/menu, active play, and game-over/score. Each state has radically different information density requirements. The menu state is the most forgiving — it can carry branding, onboarding hints, profile data. Active play needs near-zero UI. Game-over is the only moment the player is fully available to read.
              </p>
              <br />
              <p style={bodyStyle}>
                We built a component system around state transitions rather than screen layouts. The same score component behaves as a tiny ambient number during play and an animated centrepiece at game-over. One molecule, three expressions.
              </p>
            </SectionRow>
          </section>

          {/* ── EXPLORATION 3 ── */}
          <section style={{ marginTop: "80px", display: "flex", flexDirection: "column", gap: "32px" }}>
            <Placeholder height={702} />
            <Divider />
            <SectionRow label="Exploration">
              <p style={bodyStyle}>
                Hardware and software had to co-design the feedback layer. Button presses needed haptic confirmation but the device had no rumble motor — so the screen and audio had to carry the entire tactile language. Every line clear, every level-up, every T-spin had its own visual signature. Not decoration — functional feedback the player learns to read without looking.
              </p>
              <br />
              <p style={bodyStyle}>
                We ran two rounds of playtesting with eight players each. The biggest finding: experienced players wanted the UI to disappear faster. Casual players wanted it to stay slightly longer. The solution was a sensitivity setting tied to the current level — as the game gets harder, the UI gets quieter automatically.
              </p>
            </SectionRow>
          </section>

          {/* ── EXPLORATION 4 ── */}
          <section style={{ marginTop: "80px", display: "flex", flexDirection: "column", gap: "32px" }}>
            <Placeholder height={702} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <Placeholder />
              <Placeholder />
            </div>
            <Divider />
            <SectionRow label="Exploration">
              <p style={bodyStyle}>
                The final system shipped with 500+ component states covering every game mode, every feedback event, and both platform targets. The design handoff was built as a playable Protopie prototype — every transition, every micro-animation, every edge case documented as interactive behaviour rather than a static spec sheet.
              </p>
              <br />
              <p style={bodyStyle}>
                The console is now live. If someone picks it up for the first time and clears their first line within 30 seconds without reading instructions, the system is doing its job.
              </p>
            </SectionRow>
          </section>

        </div>
      </div>
    </>
  );
}
