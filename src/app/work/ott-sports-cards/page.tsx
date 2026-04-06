"use client";

import { useState, useEffect, useRef } from "react";

// ── Figma assets ──────────────────────────────────────────────────────────────
const imgIcon    = "https://www.figma.com/api/mcp/asset/31b18d0e-1bfc-44db-b408-70936590c9f5";
const imgIcon1   = "https://www.figma.com/api/mcp/asset/3a97b81b-5557-42dc-84dc-0ffc599b0b91";
const imgIcon2   = "https://www.figma.com/api/mcp/asset/67ea2442-56f3-480b-941c-b57604e1025c";
const imgIcon3   = "https://www.figma.com/api/mcp/asset/024821de-4bc1-40e0-8289-9081757c0537";
const imgIcon4   = "https://www.figma.com/api/mcp/asset/c1b89a52-5526-4039-bc70-98aed3b441e8";
const imgIcon5   = "https://www.figma.com/api/mcp/asset/bdd9b399-1a19-454a-8308-7f65c4475a29";
const imgIcon6   = "https://www.figma.com/api/mcp/asset/df99bcbc-32df-41d8-b801-d63047f6ed40";
const imgIcon7   = "https://www.figma.com/api/mcp/asset/57c664ca-5543-49e0-898c-63506ecbe33f";
const imgIcon8   = "https://www.figma.com/api/mcp/asset/10d0e355-c7da-41ec-a717-3aa374332286";
const imgVector  = "https://www.figma.com/api/mcp/asset/68608a82-8f9d-422b-96fb-766737db3940";
const imgIcon9   = "https://www.figma.com/api/mcp/asset/b13742aa-1294-420f-9c7f-c1f30714f0b1";
const imgIcon10  = "https://www.figma.com/api/mcp/asset/05de9506-7bef-4207-9a6d-7296ed27b03e";
const imgVector1 = "https://www.figma.com/api/mcp/asset/e8d0d14a-3239-4393-9f2a-7a04716a989d";
const imgIcon11  = "https://www.figma.com/api/mcp/asset/98010805-f0ac-4c06-a18d-9a4a9d99fb5d";
const imgIcon12  = "https://www.figma.com/api/mcp/asset/ae352d34-3869-43af-bca9-d4f21c1e4a25";
const imgIcon13  = "https://www.figma.com/api/mcp/asset/d0d5a55b-45b5-4da5-ac74-92b2ce43103b";
const imgIcon14  = "https://www.figma.com/api/mcp/asset/ff304635-5655-4345-9a75-6964908f2fed";

// ── Shared text styles ────────────────────────────────────────────────────────
const T = {
  label: {
    fontFamily: "var(--font-inter), sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    color: "#3b3fe4",
    letterSpacing: "0.55px",
    textTransform: "capitalize" as const,
    lineHeight: "normal",
  },
  h2: {
    fontFamily: "var(--font-frank-ruhl), Georgia, serif",
    fontWeight: 400,
    fontSize: "28px",
    color: "#000",
    letterSpacing: "-0.56px",
    lineHeight: "normal",
    textTransform: "capitalize" as const,
  },
  body: {
    fontFamily: "var(--font-inter), sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    color: "#585858",
    lineHeight: "1.6",
  },
};

// ── Sidebar nav items ─────────────────────────────────────────────────────────
const sidebarLinks = [
  { id: "overview",    label: "Overview",    mono: true  },
  { id: "brief",       label: "The Brief",   mono: false },
  { id: "insights",    label: "Insights",    mono: true  },
  { id: "problem",     label: "The Problem", mono: true  },
  { id: "solution",    label: "Solution",    mono: true  },
  { id: "outcome",     label: "The Outcome", mono: true  },
];

// ── Section label component ───────────────────────────────────────────────────
function SectionLabel({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ ...T.label, ...style }}>{children}</p>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <p style={T.h2}>{children}</p>
  );
}

// ── Insight card ──────────────────────────────────────────────────────────────
function InsightCard({
  label, labelColor, heading, body, children,
}: {
  label: string; labelColor: string; heading: string; body: string; children?: React.ReactNode;
}) {
  return (
    <div style={{
      flex: "1 0 0",
      background: "#eef0ff",
      borderRadius: "10px",
      position: "relative",
      padding: "20px",
      minHeight: "281px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}>
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: labelColor,
        borderRadius: "999px",
        padding: "4px 12px",
        width: "fit-content",
      }}>
        {children}
        <span style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "13px", color: "#32404f" }}>
          {label}
        </span>
      </div>
      <p style={{ fontFamily: "var(--font-lora), Georgia, serif", fontWeight: 400, fontSize: "17.6px", color: "#32404f", letterSpacing: "-0.18px", lineHeight: "1.3", margin: 0 }}>
        {heading}
      </p>
      <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(50,64,79,0.58)", lineHeight: "1.6", margin: 0 }}>
        {body}
      </p>
      <div style={{ marginTop: "auto", background: "rgba(59,63,228,0.15)", borderRadius: "6px", height: "80px" }} />
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function OTTSportsCards() {
  const [activeSection, setActiveSection] = useState("brief");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sidebarLinks.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: "#fff", minHeight: "100vh", paddingTop: "75px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", position: "relative" }}>

        {/* ── SIDEBAR ── */}
        <aside style={{
          width: "160px",
          flexShrink: 0,
          position: "sticky",
          top: "75px",
          height: "calc(100vh - 75px)",
          borderRight: "1px solid rgba(50,64,79,0.1)",
          padding: "24px 0",
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}>
          {/* Home link */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "0 24px 20px",
              textDecoration: "none",
            }}
          >
            <img src={imgIcon} alt="" style={{ width: 12, height: 12, flexShrink: 0 }} />
            <span style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontWeight: 400,
              fontSize: "12px",
              color: "rgba(50,64,79,0.58)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}>
              Home
            </span>
          </a>

          {sidebarLinks.map(({ id, label, mono }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "4px 24px",
                  height: "28px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                <span style={{
                  fontFamily: mono ? "var(--font-jetbrains), monospace" : "var(--font-inter), sans-serif",
                  fontWeight: 400,
                  fontSize: mono ? "12px" : "14px",
                  color: isActive ? "#3b3fe4" : "rgba(50,64,79,0.58)",
                  textTransform: mono ? "uppercase" : "capitalize",
                  letterSpacing: isActive && !mono ? "0.55px" : mono ? "0.04em" : "0",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s",
                }}>
                  {label}
                </span>
              </button>
            );
          })}
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main style={{ flex: 1, minWidth: 0 }}>

          {/* ── HERO: dark banner ── */}
          <section
            ref={(el) => { sectionRefs.current["overview"] = el; }}
            id="overview"
            style={{
              background: "#040b3e",
              height: "420px",
              position: "relative",
              overflow: "hidden",
              width: "100%",
            }}
          >
            {/* Big "Live" */}
            <div style={{
              position: "absolute",
              top: "84px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0,
              width: "max-content",
            }}>
              <p style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(80px, 10vw, 140px)",
                color: "#fff",
                letterSpacing: "-0.03em",
                lineHeight: 0.9,
                margin: 0,
                textAlign: "center",
              }}>
                Live
              </p>
              <p style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(80px, 10vw, 140px)",
                color: "#fff",
                letterSpacing: "-0.03em",
                lineHeight: 0.9,
                margin: 0,
                textAlign: "center",
              }}>
                Comments
              </p>
            </div>

            {/* Orange dot */}
            <div style={{
              position: "absolute",
              top: "50px",
              left: "188px",
              width: "14px",
              height: "14px",
              background: "#e65f2e",
              borderRadius: "7px",
            }} />

            {/* Comment card (top-right, rotated +6°) */}
            <div style={{
              position: "absolute",
              top: "43px",
              right: "120px",
              transform: "rotate(6deg)",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 8px 24px rgba(0,0,0,0.18)",
              width: "220px",
              padding: "12px 16px 14px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                <img src={imgIcon1} alt="" style={{ width: 14, height: 14, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "11px", color: "#3b3fe4" }}>00:13</span>
              </div>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "12px", color: "#444", lineHeight: "1.4", margin: 0 }}>
                Okay, so I was thinking here that we can have a stack of cards. Oh wait...
              </p>
            </div>

            {/* Add comment card (bottom-left, rotated -3°) */}
            <div style={{
              position: "absolute",
              bottom: "60px",
              left: "186px",
              transform: "rotate(-3deg)",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 8px 24px rgba(0,0,0,0.18)",
              width: "200px",
              padding: "10px 14px 12px",
            }}>
              <div style={{ borderBottom: "1px solid #eee", paddingBottom: "8px", marginBottom: "10px" }}>
                <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "12px", color: "#aaa" }}>Add a comment</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: "8px" }}>
                  <img src={imgIcon2} alt="" style={{ width: 14, height: 14 }} />
                  <img src={imgIcon3} alt="" style={{ width: 14, height: 14 }} />
                  <img src={imgIcon4} alt="" style={{ width: 14, height: 14 }} />
                </div>
                <img src={imgIcon5} alt="" style={{ width: 22, height: 22 }} />
              </div>
            </div>

            {/* Avatar bubble */}
            <div style={{
              position: "absolute",
              top: "229px",
              left: "calc(50% + 50px)",
              width: "44px",
              height: "44px",
              borderRadius: "22px",
              border: "3px solid #fff",
              background: "#c4a882",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
              overflow: "hidden",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              padding: "3px 4px",
            }}>
              <img src={imgIcon6} alt="" style={{ width: 36, height: 36 }} />
            </div>

            {/* "Starting live comment" pill (rotated -2°) */}
            <div style={{
              position: "absolute",
              bottom: "70px",
              left: "280px",
              transform: "rotate(-2deg)",
              background: "#3b3fe4",
              borderRadius: "999px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
              height: "31px",
              display: "flex",
              alignItems: "center",
              padding: "0 14px",
              gap: "8px",
            }}>
              <img src={imgIcon7} alt="" style={{ width: 14, height: 14, flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: "12px", color: "#fff", whiteSpace: "nowrap" }}>
                Starting live comment
              </span>
            </div>

            {/* Cancel pill */}
            <div style={{
              position: "absolute",
              bottom: "66px",
              left: "490px",
              transform: "rotate(1deg)",
              background: "#fff",
              borderRadius: "999px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
              height: "27px",
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
            }}>
              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "12px", color: "#333" }}>Cancel</span>
            </div>

            {/* Color tool sidebar */}
            <div style={{
              position: "absolute",
              top: "145px",
              right: "32px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 8px 24px rgba(0,0,0,0.15)",
              width: "26px",
              padding: "8px 6px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
            }}>
              <img src={imgIcon8} alt="" style={{ width: 14, height: 14 }} />
              <div style={{ width: 14, height: 14, background: "#3b3fe4", borderRadius: "7px" }} />
              <div style={{ width: 14, height: 14, background: "#e65f2e", borderRadius: "7px" }} />
              <div style={{ width: 14, height: 14, background: "#f0b800", borderRadius: "7px" }} />
              <div style={{ width: 14, height: 14, background: "#111", borderRadius: "7px" }} />
              <img src={imgVector} alt="" style={{ width: 14, height: 14 }} />
            </div>

            {/* Circle icon left */}
            <div style={{
              position: "absolute",
              top: "263px",
              left: "47px",
              width: "52px",
              height: "52px",
              borderRadius: "26px",
              border: "2px solid #fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <img src={imgIcon9} alt="" style={{ width: 28, height: 28 }} />
            </div>
          </section>

          {/* ── CONTENT WRAPPER ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "52px", padding: "40px 24px 72px" }}>

            {/* ── OVERVIEW / META ── */}
            <div
              id="overview-meta"
              style={{
                borderBottom: "1px solid rgba(50,64,79,0.1)",
                paddingBottom: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <SectionHeading>
                One design system. Every sport. Two platforms. Now live on YouTube
              </SectionHeading>

              {/* Meta grid */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between" }}>
                {[
                  {
                    label: "Timeline",
                    content: <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px", lineHeight: "1.3" }}>1 year 3 months</span>,
                  },
                  {
                    label: "Team",
                    content: (
                      <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px", lineHeight: "1.3" }}>
                        <div>Malvika Nanda</div>
                        <div style={{ textTransform: "capitalize" }}>Yun easing</div>
                        <div>Riya Ghosh</div>
                      </div>
                    ),
                  },
                  {
                    label: "Role",
                    content: <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px", lineHeight: "1.3" }}>Product Designer</span>,
                  },
                  {
                    label: "Skills",
                    content: (
                      <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px", lineHeight: "1.3" }}>
                        <div>Design Systems</div>
                        <div>Component Architecture</div>
                        <div>Product Strategy</div>
                      </div>
                    ),
                  },
                  {
                    label: "Tools",
                    content: (
                      <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px", lineHeight: "1.3" }}>
                        <div>Figma</div>
                        <div>Protopie</div>
                        <div>Lottielab</div>
                      </div>
                    ),
                  },
                ].map(({ label, content }) => (
                  <div key={label} style={{ display: "flex", flexDirection: "column", gap: "8px", flex: "1 0 120px" }}>
                    <SectionLabel>{label}</SectionLabel>
                    {content}
                  </div>
                ))}
              </div>
            </div>

            {/* ── THE BRIEF ── */}
            <section
              ref={(el) => { sectionRefs.current["brief"] = el; }}
              id="brief"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <SectionLabel>The Brief</SectionLabel>
              <SectionHeading>
                What if a single component library could handle NFL scores, Golf leaderboards, and a paid Fantasy league — without rebuilding any card from scratch?
              </SectionHeading>
              <div style={T.body}>
                <p style={{ margin: "0 0 14px" }}>
                  When YouTube Sports expanded its OTT content, the design problem wasn't "what should a sports card look like." It was messier than that: how do you design for sports data when every sport tracks completely different things?
                </p>
                <p style={{ margin: 0 }}>
                  An NFL live score, a Golf leaderboard, a Hockey game tracker, and a Fantasy league matchup share almost no structural DNA. The system had to handle them all — and end up as a single, live product at tv.youtube.com/welcome — without a separate design file for each sport.
                </p>
              </div>
            </section>

            {/* Black placeholder image */}
            <div style={{ background: "#000", height: "320px", width: "100%", borderRadius: "4px" }} />

            {/* ── INSIGHTS ── */}
            <section
              ref={(el) => { sectionRefs.current["insights"] = el; }}
              id="insights"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <SectionLabel>Initial Observation</SectionLabel>
              <SectionHeading>
                Sports data is wildly inconsistent, the design process usually is too
              </SectionHeading>
              <div style={T.body}>
                <p style={{ margin: "0 0 14px" }}>
                  I came into this project expecting a visual design problem and found a taxonomy problem. Every sport has its own vocabulary — NFL has yards and red zone conversions, cricket has run rates and DLS targets, F1 has gap-to-leader and pit stop strategy. Before designing anything, I needed to understand what each sport was actually asking the interface to communicate.
                </p>
                <p style={{ margin: 0 }}>
                  When I audited the existing cards, the pattern was predictable in hindsight: designers had been building sport-by-sport with no shared molecule layer. A live score card for NFL and a live score card for NBA were essentially the same component, built twice by different people at different times.
                </p>
              </div>
            </section>

            {/* Insight callout box */}
            <div style={{
              background: "#eef0ff",
              borderRadius: "4px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}>
              <div style={{ display: "flex", gap: "16px" }}>
                <div style={{ flex: "1 0 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <SectionLabel style={{ fontSize: "12px" }}>No shared structure</SectionLabel>
                  <p style={{ ...T.body, fontSize: "12px", margin: 0, lineHeight: "1.6" }}>
                    Cards were built per sport from scratch. There was no molecule layer, so a layout fix in one card had to be manually replicated in others. Two designers could be working on visually identical components without knowing it.
                  </p>
                </div>
                <div style={{ flex: "1 0 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <SectionLabel style={{ fontSize: "12px" }}>Two platforms, double the work</SectionLabel>
                  <p style={{ ...T.body, fontSize: "12px", margin: 0, lineHeight: "1.6" }}>
                    YouTube TV (YTV) and [PTC] had different display constraints. The approach at the time was separate designs per platform, which meant every card decision got made twice.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <SectionLabel style={{ fontSize: "12px" }}>Key Insight:</SectionLabel>
                <p style={{ ...T.body, fontSize: "12px", fontWeight: 700, margin: 0, lineHeight: "1.6" }}>
                  The repeating elements across sports were always the same handful of things — a score, a team name, a player image, a stat, a timestamp, a status indicator. Everything else was variation on those six.
                </p>
              </div>
            </div>

            {/* ── MARKET RESEARCH ── */}
            <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <SectionLabel>Market Research</SectionLabel>
              <SectionHeading>
                Every competitor either overwhelms you or tells you almost nothing
              </SectionHeading>
              <div style={T.body}>
                <p style={{ margin: "0 0 14px" }}>
                  Most sports UIs default to dense because sports data is inherently dense. The working assumption seems to be: fans want everything. But what a fan wants depends entirely on when they're looking.
                </p>
                <p style={{ margin: 0 }}>
                  Pre-match, they want lineups. Live, they want the score. Post-match, they want deep stats. A single card trying to serve all three states usually fails at all three. That was the strategic gap.
                </p>
              </div>
            </section>

            {/* ── BECOMING THE FAN ── */}
            <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <SectionLabel>Becoming The Fan</SectionLabel>
              <SectionHeading>I watched a lot of sport before designing</SectionHeading>

              {/* Blue banner */}
              <div style={{
                background: "#9dcef6",
                borderRadius: "12px",
                height: "240px",
                position: "relative",
                overflow: "hidden",
              }}>
                <img src={imgIcon10} alt="" style={{ position: "absolute", top: "20px", left: "62px", width: "120px", height: "100px", objectFit: "contain" }} />
                <div style={{ position: "absolute", top: "20px", right: "62px", width: "100px", height: "100px", overflow: "hidden" }}>
                  <img src={imgVector1} alt="" style={{ position: "absolute", inset: "10%", width: "80%", height: "80%" }} />
                  <span style={{ position: "absolute", top: "24%", left: "20%", fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "36px", color: "#32404f" }}>Aa</span>
                </div>
                <img src={imgIcon11} alt="" style={{ position: "absolute", top: "120px", left: "150px", width: "80px", height: "80px", objectFit: "contain" }} />
                <img src={imgIcon12} alt="" style={{ position: "absolute", top: "120px", right: "62px", width: "90px", height: "80px", objectFit: "contain" }} />
                <p style={{
                  position: "absolute",
                  top: "99px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 700,
                  fontSize: "32px",
                  color: "#000",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "1.2",
                  margin: 0,
                }}>
                  Becoming the fan of the sports
                </p>
              </div>

              <div style={T.body}>
                <p style={{ margin: "0 0 14px" }}>
                  I watched a lot of sport before designing. Not as a research exercise — I genuinely wanted to understand what matters moment to moment.{" "}
                  <strong style={{ fontWeight: 700, color: "#585858" }}>
                    The main one: good sports graphics know where you are in the game. Bad ones show you everything regardless.
                  </strong>
                </p>
                <p style={{ margin: 0 }}>
                  I also deliberately watched sports I don't follow — Hockey, Football, Ice hockey — to see which interfaces helped someone with no prior knowledge actually understand what was happening. Most didn't try. That constraint shaped a lot of the hierarchy decisions in the cards.
                </p>
              </div>
            </section>

            {/* ── THE PROBLEM / CARD CONTEXT ── */}
            <section
              ref={(el) => { sectionRefs.current["problem"] = el; }}
              id="problem"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <SectionLabel>Solution</SectionLabel>
              <SectionLabel>Card Context</SectionLabel>

              {/* 4 state cards */}
              <div style={{ display: "flex", gap: "8px" }}>
                <InsightCard
                  label="Pre-match"
                  labelColor="#60a5fa"
                  heading="Anchored to context."
                  body="Upcoming fixtures, lineups, form tables. Browsing behavior. The card needs to be informative but not urgent."
                >
                  <img src={imgIcon13} alt="" style={{ width: 14, height: 14, flexShrink: 0 }} />
                </InsightCard>
                <InsightCard
                  label="Buildable"
                  labelColor="#f3a8d4"
                  heading="Live"
                  body="Score and status only. People check this quickly. Visual hierarchy has to do the work — no one is reading copy during a game."
                >
                  <img src={imgIcon14} alt="" style={{ width: 14, height: 14, flexShrink: 0 }} />
                </InsightCard>
                <InsightCard
                  label="Pre-match"
                  labelColor="#60a5fa"
                  heading="Post-match"
                  body="Stats and performance data. The audience for this wants depth. Scannability matters less than completeness."
                >
                  <img src={imgIcon13} alt="" style={{ width: 14, height: 14, flexShrink: 0 }} />
                </InsightCard>
                <InsightCard
                  label="Pre-match"
                  labelColor="#60a5fa"
                  heading="Fantasy (Paid)"
                  body="Specific player stats, league tracking. Specialized data modules required."
                >
                  <img src={imgIcon13} alt="" style={{ width: 14, height: 14, flexShrink: 0 }} />
                </InsightCard>
              </div>

              <p style={{ ...T.body, fontWeight: 700, fontSize: "12px" }}>
                How might we build a card system that a casual fan scans in two seconds and a Fantasy player analyzes for two minutes — from the same component?
              </p>
            </section>

            {/* ── SOLUTION ── */}
            <section
              ref={(el) => { sectionRefs.current["solution"] = el; }}
              id="solution"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <SectionLabel>The Solution</SectionLabel>
              <SectionHeading>
                A three-tier atomic system where one molecule change updates every sport card at once. Delivered end-to-end: from component architecture to the live landing page.
              </SectionHeading>
              <div style={T.body}>
                <p style={{ margin: "0 0 14px" }}>
                  YouTube Foundations feeds Local Molecules. Local Molecules build Parent Components. Edit a shared molecule — a score element, a player image, a metadata row — and every card that uses it updates automatically. No manual propagation, no sport-specific duplicates.
                </p>
              </div>
              <div style={{ background: "#000", height: "320px", width: "100%", borderRadius: "4px" }} />
            </section>

            {/* ── OUTCOME ── */}
            <section
              ref={(el) => { sectionRefs.current["outcome"] = el; }}
              id="outcome"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <SectionLabel>The Outcome</SectionLabel>
              <SectionHeading>500+ components. A live landing page. One source of truth</SectionHeading>
              <p style={{ ...T.body, margin: 0 }}>
                That was the bar we set: a library designers could pick up without asking questions, and an engineering handoff that didn't require a translator. If someone had to chase me to understand a component, the system wasn't finished.
              </p>
              <div style={{ background: "#000", height: "320px", width: "100%", borderRadius: "4px" }} />
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}
