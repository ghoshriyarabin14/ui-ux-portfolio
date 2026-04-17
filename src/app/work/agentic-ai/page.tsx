"use client";

import Link from "next/link";

// ── Assets (Figma MCP · node 336:6660 · file 8LUMIoWCoDPZZf6pXrGe5F) ──────────
// Hero
const imgHero           = "https://www.figma.com/api/mcp/asset/5c812ae5-9c24-425a-afb1-18b450a92091";
const imgArrowBack      = "https://www.figma.com/api/mcp/asset/77c6f957-135f-41fc-bc88-4e88855cd529";
// Solution screenshots (node 356:50462)
const imgSolutionLeft   = "https://www.figma.com/api/mcp/asset/e65a2198-1e57-4fc4-906c-e972842ced1e";
const imgSolutionRight  = "https://www.figma.com/api/mcp/asset/51ea225c-8b3d-42ed-902f-87396887d325";
// Design-process
const imgAIScreens      = "https://www.figma.com/api/mcp/asset/b501c1b5-5bf9-4ede-b44e-36c9b23d744c";
const imgRapidProto     = "https://www.figma.com/api/mcp/asset/846082c4-6f81-4ce9-a6ad-98713626c574";
// Solution walkthrough
const imgMorningBrief   = "https://www.figma.com/api/mcp/asset/135f0f13-6a2a-4fe1-a842-16f7a26305a6";
const imgMomentum       = "https://www.figma.com/api/mcp/asset/2087f1df-48d9-4db7-9c61-cd01c3cc267d";
// Outcome
// Additional-project cards
const imgAddlBg1        = "https://www.figma.com/api/mcp/asset/aff82ef4-c4e3-4f8e-b9d1-29aa2196b0b1";
const imgAddlGraphic    = "https://www.figma.com/api/mcp/asset/06e61e62-ab9b-46df-b12f-301c2d8c6046";
const imgAddlBg2        = "https://www.figma.com/api/mcp/asset/044d2eeb-60f9-4fbd-840c-5bff5923d531";

// ── Tokens ────────────────────────────────────────────────────────────────────
const INTER = "var(--font-inter), sans-serif";
const WHITE = "#ffffff";
const BODY  = "#e2e2e2";
const DIM   = "#dbdbdb";
const DIVIDER = "rgba(255,255,255,0.12)";
const CARD_BG = "#212121";

// ── Primitive: horizontal rule ─────────────────────────────────────────────────
const HR = () => (
  <div style={{ height: "1px", background: DIVIDER, width: "100%", flexShrink: 0 }} />
);

// ── Two-column content row (label | body) ──────────────────────────────────────
// Matches Figma pattern: flex justify-between, label flex:1 24px white, body 800px 24px #e2e2e2
function TwoCol({
  label,
  children,
  bodyStyle,
}: {
  label: string;
  children: React.ReactNode;
  bodyStyle?: React.CSSProperties;
}) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", width: "100%" }}>
      <p style={{
        fontFamily: INTER, fontWeight: 400, fontSize: "24px", color: WHITE,
        lineHeight: "normal", margin: 0, flex: "1 0 0", minWidth: 0,
      }}>
        {label}
      </p>
      <div style={{ flexShrink: 0, width: "800px", ...bodyStyle }}>
        {children}
      </div>
    </div>
  );
}

function BodyText({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{
      fontFamily: INTER, fontWeight: 400, fontSize: "24px",
      color: BODY, lineHeight: "normal", margin: 0,
      whiteSpace: "pre-wrap", ...style,
    }}>
      {children}
    </p>
  );
}

// ── Section with leading divider ───────────────────────────────────────────────
function Section({ label, children, noHr }: { label: string; children: React.ReactNode; noHr?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
      {!noHr && <HR />}
      <TwoCol label={label}>{children}</TwoCol>
    </div>
  );
}

// ── Pain card ──────────────────────────────────────────────────────────────────
function PainCard({ title, body }: { title: string; body: string }) {
  return (
    <div style={{
      flex: "1 0 0", minWidth: 0, height: "270px", background: CARD_BG,
      padding: "16px", display: "flex", flexDirection: "column", gap: "16px",
      boxSizing: "border-box",
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", flexShrink: 0 }}>
        <p style={{
          fontFamily: INTER, fontWeight: 500, fontSize: "14px", color: DIM,
          letterSpacing: "0.55px", textTransform: "capitalize", margin: 0, lineHeight: "normal",
        }}>
          {title}
        </p>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.15)" }} />
      </div>
      <p style={{
        fontFamily: INTER, fontWeight: 400, fontSize: "14px",
        color: WHITE, lineHeight: "19.2px", margin: 0,
      }}>
        {body}
      </p>
    </div>
  );
}

// ── Image pair (two equal-width cards) ────────────────────────────────────────
function ImagePair({
  leftSrc, rightSrc,
  leftAspect, rightHeight,
  gap = 24,
}: {
  leftSrc?: string; rightSrc?: string;
  leftAspect?: string; rightHeight?: number;
  gap?: number;
}) {
  return (
    <div style={{ display: "flex", gap: `${gap}px`, width: "100%" }}>
      {/* left */}
      <div style={{
        flex: "1 0 0", minWidth: 0, background: CARD_BG,
        padding: "10px 10px 20px", overflow: "hidden",
        display: "flex", flexDirection: "column",
      }}>
        {leftSrc ? (
          <div style={{ position: "relative", width: "100%", aspectRatio: leftAspect ?? "16/9", overflow: "hidden" }}>
            <img src={leftSrc} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", display: "block" }} />
          </div>
        ) : (
          <div style={{ flex: 1, minHeight: rightHeight ? `${rightHeight}px` : "300px" }} />
        )}
      </div>
      {/* right */}
      <div style={{
        flex: "1 0 0", minWidth: 0, background: CARD_BG,
        padding: "10px 10px 20px", overflow: "hidden",
        display: "flex", flexDirection: "column",
        ...(rightHeight ? { height: `${rightHeight}px` } : {}),
      }}>
        {rightSrc ? (
          <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
            <img src={rightSrc} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", display: "block" }} />
          </div>
        ) : (
          <div style={{ flex: 1 }} />
        )}
      </div>
    </div>
  );
}

// ── IRIS Phone Mockup (Figma node 359:108679) ─────────────────────────────────
function IrisPhoneMockup() {
  return (
    <div style={{
      width: "100%", maxWidth: "340px", margin: "0 auto",
      background: "#ffffff", borderRadius: "44px",
      boxShadow: "0 0 0 1px rgba(0,0,0,0.08), 0 24px 64px rgba(0,0,0,0.18)",
      overflow: "hidden", fontFamily: "var(--font-inter), sans-serif",
    }}>
      {/* Status bar */}
      <div style={{ padding: "14px 24px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "13px", fontWeight: 600, color: "#000" }}>9:41</span>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          {/* Signal */}
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none"><rect x="0" y="4" width="3" height="8" rx="1" fill="#000"/><rect x="4.5" y="2.5" width="3" height="9.5" rx="1" fill="#000"/><rect x="9" y="1" width="3" height="11" rx="1" fill="#000"/><rect x="13.5" y="0" width="3" height="12" rx="1" fill="#000"/></svg>
          {/* Wifi */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0-4a6 6 0 0 1 4.24 1.76l-1.42 1.42A4 4 0 0 0 8 7.5a4 4 0 0 0-2.82 1.18L3.76 7.26A6 6 0 0 1 8 5.5zm0-4a10 10 0 0 1 7.07 2.93L13.66 5.84A8 8 0 0 0 8 3.5a8 8 0 0 0-5.66 2.34L.93 4.43A10 10 0 0 1 8 1.5z" fill="#000"/></svg>
          {/* Battery */}
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0" y="1" width="22" height="10" rx="2.5" stroke="#000" strokeWidth="1"/><rect x="1.5" y="2.5" width="18" height="7" rx="1.5" fill="#000"/><path d="M23 4v4a2 2 0 0 0 0-4z" fill="#000"/></svg>
        </div>
      </div>

      {/* App header */}
      <div style={{ padding: "4px 20px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none"><rect y="0" width="20" height="2" rx="1" fill="#333"/><rect y="7" width="20" height="2" rx="1" fill="#333"/><rect y="14" width="20" height="2" rx="1" fill="#333"/></svg>
          {/* I.R.I.S logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "conic-gradient(from 0deg, #f97316, #a855f7, #3b82f6, #f97316)", flexShrink: 0 }} />
            <span style={{ fontWeight: 700, fontSize: "14px", color: "#1e1b4b", letterSpacing: "0.05em" }}>I.R.I.S</span>
          </div>
        </div>
        {/* Toggle */}
        <div style={{
          width: "52px", height: "28px", borderRadius: "14px",
          background: "#6d28d9", display: "flex", alignItems: "center", justifyContent: "flex-end",
          padding: "3px 4px",
        }}>
          <div style={{
            width: "22px", height: "22px", borderRadius: "50%", background: "#ffffff",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="#6d28d9" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
        </div>
      </div>

      {/* Main card */}
      <div style={{ margin: "0 12px 12px", background: "linear-gradient(160deg, #f5f4ff 0%, #fff 60%)", borderRadius: "24px", overflow: "hidden", padding: "28px 20px 16px", minHeight: "460px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "18px", fontWeight: 700, color: "#1e1b4b", lineHeight: 1.3, margin: 0 }}>
            Good Afternoon, Jordan
          </p>
          <p style={{ fontSize: "18px", fontWeight: 700, lineHeight: 1.3, margin: "2px 0 0" }}>
            <span style={{ color: "#1e1b4b" }}>What&apos;s on </span>
            <span style={{ color: "#f97316" }}>your mind?</span>
          </p>
        </div>

        {/* Gradient orb */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, padding: "20px 0" }}>
          <div style={{ width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.35) 0%, rgba(196,181,253,0.15) 60%, transparent 100%)" }} />
        </div>

        {/* Suggestion chips */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
          {[
            { icon: "📋", text: "Generate a sales performance report" },
            { icon: "📊", text: "Show quick analysis for top leads" },
          ].map(({ icon, text }) => (
            <div key={text} style={{
              flex: 1, background: "rgba(200,195,255,0.25)", borderRadius: "12px",
              padding: "8px 10px", display: "flex", flexDirection: "column", gap: "4px",
            }}>
              <span style={{ fontSize: "11px" }}>{icon}</span>
              <span style={{ fontSize: "10px", color: "#4c4a7a", lineHeight: 1.3 }}>{text}</span>
            </div>
          ))}
        </div>

        {/* Input */}
        <div style={{
          background: "#ffffff", borderRadius: "14px", padding: "12px 14px",
          border: "1px solid rgba(0,0,0,0.06)",
        }}>
          <p style={{ fontSize: "13px", color: "#9ca3af", margin: "0 0 12px" }}>Ask Rosa anything..</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {/* Attachment */}
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 6.5L6.5 11a3.18 3.18 0 01-4.5-4.5l5-5A2.12 2.12 0 0110 4.5L5.5 9a1.06 1.06 0 01-1.5-1.5L8.5 3" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {/* Mic */}
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none"><rect x="3" y="0" width="6" height="9" rx="3" stroke="#6b7280" strokeWidth="1.2"/><path d="M1 7a5 5 0 0010 0" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round"/><line x1="6" y1="12" x2="6" y2="14" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round"/></svg>
              </div>
              {/* Waveform */}
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h2M4 2v6M7 0v10M10 2v6M13 5h1" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Browser bottom bar */}
      <div style={{ padding: "8px 16px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {[
          <svg key="back" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 4L6 9l5 5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
          <svg key="win" width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="14" rx="2" stroke="#333" strokeWidth="1.5"/></svg>,
          <span key="url" style={{ fontSize: "11px", color: "#333", fontWeight: 500 }}>iris.com</span>,
          <svg key="ref" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M14 9a5 5 0 11-1.5-3.5M14 5v4h-4" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
          <svg key="more" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="4" cy="9" r="1.5" fill="#333"/><circle cx="9" cy="9" r="1.5" fill="#333"/><circle cx="14" cy="9" r="1.5" fill="#333"/></svg>,
        ].map((el, i) => <div key={i}>{el}</div>)}
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────────
export default function AgenticAiPage() {
  return (
    <div style={{ background: "#000000", minHeight: "100vh", color: WHITE, paddingTop: "83px" }}>
      <div style={{ padding: "0 24px" }}>

        {/* ════════════════════════════════════════════════
            Frame 13 — all content, gap 72px between blocks
        ════════════════════════════════════════════════ */}
        <div style={{ display: "flex", flexDirection: "column", gap: "72px", paddingBottom: "120px" }}>

          {/* ── Back button ── */}
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            justifyContent: "flex-start", paddingTop: "56px",
          }}>
            <img src={imgArrowBack} alt="" style={{ width: "16px", height: "16px", display: "block", flexShrink: 0 }} />
            <Link
              href="/"
              style={{
                fontFamily: INTER, fontWeight: 400, fontSize: "14px",
                color: "#c8c8c8", textDecoration: "none", whiteSpace: "nowrap",
              }}
            >
              Go Back
            </Link>
          </div>

          {/* ══════════════════════════════
              BLOCK 1 · Header row (336:6678)
              gap: 72px from back button
          ══════════════════════════════ */}
          <div style={{ padding: "10px 0" }}>
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              whiteSpace: "nowrap", width: "100%",
            }}>
              <p style={{ fontFamily: INTER, fontWeight: 400, fontSize: "24px", color: WHITE, lineHeight: "normal", margin: 0 }}>
                Case study
              </p>
              <p style={{ fontFamily: INTER, fontWeight: 400, fontSize: "24px", color: WHITE, lineHeight: "normal", margin: 0 }}>
                B2B SaaS
              </p>
              <p style={{ fontFamily: INTER, fontWeight: 400, fontSize: "76px", color: WHITE, lineHeight: 1, margin: 0 }}>
                Agentic Ai X Salesforce
              </p>
            </div>
          </div>

          {/* ══════════════════════════════
              BLOCK 2 · Frame 12 (336:6685)
              Internal gap: 72px
          ══════════════════════════════ */}
          <div style={{ display: "flex", flexDirection: "column", gap: "72px" }}>

            {/* Hero image — 438px */}
            <div style={{ width: "100%", height: "438px", overflow: "hidden", flexShrink: 0 }}>
              <img
                src={imgHero}
                alt="IRIS Visual Design"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Role + Context + Quote — gap 52px */}
            <div style={{ display: "flex", flexDirection: "column", gap: "52px" }}>

              {/* Role / meta table */}
              <div style={{
                display: "flex", flexWrap: "wrap", alignItems: "flex-start",
                justifyContent: "space-between", gap: "20px",
                paddingBottom: "20px", borderBottom: "1px solid rgba(50,64,79,0.1)",
              }}>
                {([
                  { label: "Period",  values: ["3 months"] },
                  { label: "Team",    values: ["Ravikant Joshi", "Pratik Dev", "Riya Ghosh"] },
                  { label: "Role",    values: ["Product Designer"] },
                  { label: "Skills",  values: ["Brand Identity", "Ai Flow Architecture", "Product Strategy"] },
                  { label: "Tools",   values: ["Figma", "Photoshop", "Figma Make, Claude"] },
                ] as const).map(({ label, values }) => (
                  <div key={label} style={{ flex: "1 0 0", minWidth: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                    <p style={{
                      fontFamily: INTER, fontWeight: 600, fontSize: "14px", color: WHITE,
                      letterSpacing: "0.55px", textTransform: "capitalize", lineHeight: "normal", margin: 0,
                    }}>
                      {label}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {values.map((v) => (
                        <p key={v} style={{
                          fontFamily: INTER, fontWeight: 400, fontSize: "16px",
                          color: WHITE, lineHeight: "20.8px", margin: 0, whiteSpace: "nowrap",
                        }}>
                          {v}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Context — gap 48px */}
              <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                <HR />
                <TwoCol label="Context">
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <BodyText>
                      {`The average sales rep is buried in administrative work—updating CRMs, logging calls, finding data—which shatters their focus and kills sales momentum. The problem isn't just the loss of time; it's the loss of flow.`}
                    </BodyText>
                    <BodyText>
                      {`We didn't set out to build another productivity tool. We set out to design Rosa, an AI partner designed not just to manage data, but to anticipate the next best move, highlight the right opportunities, and clear the path for what sales reps do best: build connections and close deals`}
                    </BodyText>
                  </div>
                </TwoCol>
              </div>

              {/* Big quote */}
              <p style={{
                fontFamily: INTER, fontWeight: 400, fontSize: "40px", color: WHITE,
                letterSpacing: "1px", lineHeight: "normal", margin: 0,
                textTransform: "capitalize", width: "100%",
              }}>
                What if a sales rep could spend their entire day selling?
              </p>

            </div>
          </div>

          {/* ══════════════════════════════
              BLOCK 3 · Frame 15 (336:6787)
              Solution + Problem + Pain Points
              Internal gap: 64px
          ══════════════════════════════ */}
          <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>

            {/* Solution — gap 48px */}
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              <HR />
              <TwoCol label="Solution">
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <BodyText>
                    {`An AI agent that provides predictive guidance and automates the entire sales workflow, turning data into conversations.`}
                  </BodyText>
                  <BodyText>
                    {`I led the design of Rosa, a SaaS platform that acts as a strategic partner for sales representatives. Rosa integrates with a rep's core tools to deliver a prioritized daily brief, automate research, and assist in crafting personalized outreach. From surfacing the top 1% of leads to providing a "Deal Memory" for every interaction, Rosa is designed to be the engine for sales success.`}
                  </BodyText>
                </div>
              </TwoCol>

              {/* Solution demo video */}
              <div style={{ width: "100%", height: "534px", borderRadius: "8px", overflow: "hidden", background: "#212121" }}>
                <video
                  src="/iris-demo.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* The Problem — gap 48px */}
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              <HR />
              <TwoCol label="The Problem">
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <BodyText>
                    {`Sales reps are drowning in tasks, but starving for momentum.`}
                  </BodyText>
                  <BodyText>
                    {`My research into the sales workflow revealed a universal frustration. Reps like our persona, "Jordan," start their day facing a noisy pool of 500+ leads and a mountain of administrative tasks. This creates a reactive, inefficient, and demoralizing work environment.`}
                  </BodyText>
                </div>
              </TwoCol>
            </div>

            {/* Pain Points — gap 24px */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ fontFamily: INTER, fontWeight: 400, fontSize: "24px", color: WHITE, lineHeight: "normal", margin: 0 }}>
                Pain Points
              </p>
              <div style={{ display: "flex", gap: "24px", width: "100%" }}>
                <PainCard
                  title="Decision Fatigue"
                  body={`With hundreds of leads, reps don't know where to focus first. They waste the first, most productive hour of their day manually filtering lists instead of engaging high-intent prospects.`}
                />
                <PainCard
                  title={`The "Research Tax"`}
                  body="Preparing for a single outreach call requires toggling across LinkedIn, Google News, industry blogs, and CRM history. This 1-hour, multi-tab research process for every key lead is a massive drain on productivity."
                />
                <PainCard
                  title="The Connection Gap"
                  body="A fragmented workflow across multiple apps makes it impossible to have a single, unified view of a client. Key details from past interactions get lost, and outreach feels generic, not personal."
                />
                <PainCard
                  title="Key Insight"
                  body={`The solution wasn't a better dashboard. It was an intelligent agent that could perform the research and prioritization work for the rep, allowing them to start their day with action, not administration.`}
                />
              </div>
            </div>

          </div>

          {/* ══════════════════════════════
              BLOCK 4 · Design Process (336:6836)
          ══════════════════════════════ */}
          <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>

            {/* The Design Process header + screenshots */}
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              <Section label="The Design Process">
                <BodyText>
                  {`An AI-Augmented Workflow: From Concept to Prototype in Days, Not Weeks. To design a product centered on speed and intelligence, our process had to embody those same principles. Traditional design sprints felt too slow. Instead, I adopted a modern, AI-augmented workflow that leveraged generative AI as a foundational partner to accelerate the journey from a blank canvas to a testable prototype.`}
                </BodyText>
              </Section>

              {/* IRIS screenshots */}
              <div style={{ display: "flex", gap: "24px", width: "100%" }}>
                <div style={{ flex: "1 0 0", minWidth: 0, height: "420px", background: "#212121", overflow: "hidden" }}>
                  <img
                    src={imgSolutionLeft}
                    alt="IRIS Outreach dashboard"
                    style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
                  />
                </div>
                <div style={{ flex: "1 0 0", minWidth: 0, height: "420px", background: "#212121", overflow: "hidden" }}>
                  <img
                    src={imgSolutionRight}
                    alt="IRIS video call UI"
                    style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            {/* AI Starting Block */}
            <Section label="1. AI as the Starting Block">
              <BodyText>
                {`Instead of spending weeks on manual user flow diagrams and wireframes, I began by prompting AI with the core persona and problem. I used generative AI to: Brainstorm initial user flows for "a day in the life of a sales rep named Jordan." Generate multiple layout concepts for a proactive, AI-driven dashboard. Explore different information architectures for presenting complex data like lead scores and intent signals. This AI-first approach provided an incredible "base start," allowing us to bypass the most time-consuming parts of the initial ideation phase. It turned the "blank canvas problem" into a multiple-choice question, providing a rich set of concepts to refine.`}
              </BodyText>
            </Section>

            {/* AI screenshots pair */}
            <div style={{ display: "flex", gap: "20px", width: "100%" }}>
              {[0, 1].map((i) => (
                <div key={i} style={{ flex: "1 0 0", minWidth: 0, overflow: "hidden", borderRadius: "4px" }}>
                  <img src={imgAIScreens} alt="" style={{ width: "100%", display: "block", objectFit: "cover" }} />
                </div>
              ))}
            </div>

            {/* Rapid Prototyping */}
            <Section label="2. Rapid Prototyping in Figma">
              <BodyText>
                {`Instead of spending weeks on manual user flow diagrams and wireframes, I began by prompting AI with the core persona and problem. I used generative AI to: Brainstorm initial user flows for "a day in the life of a sales rep named Jordan." Generate multiple layout concepts for a proactive, AI-driven dashboard. Explore different information architectures for presenting complex data like lead scores and intent signals. This AI-first approach provided an incredible "base start," allowing us to bypass the most time-consuming parts of the initial ideation phase. It turned the "blank canvas problem" into a multiple-choice question, providing a rich set of concepts to refine.`}
              </BodyText>
            </Section>

            {/* Rapid Prototyping Video */}
            <div style={{ width: "100%", height: "534px", borderRadius: "8px", overflow: "hidden", background: "#212121" }}>
              <video
                src="/Videos/rapid proto.mov"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
              />
            </div>

            {/* Ask Rosa */}
            <Section label={`3. Designing the Core Agent: "Ask Rosa"`}>
              <BodyText>
                {`The centerpiece of the platform is "Ask Rosa," the central, conversational AI agent. This isn't a simple chatbot; it's designed to understand intent and execute multi-step tasks across integrated systems (CRM, email, calendar). The design process focused on mapping these agentic commands: Task Decomposition: we started by breaking down complex user requests into their fundamental actions. For example, the command "Get me prepped for my call with Delta Tech" was decomposed into a sequence: Query CRM for contact history → Scan Deal Memory for recent activity → Find related call recordings → Generate Smart Script with key talking points.`}
              </BodyText>
            </Section>

            {/* Ask Rosa — 3 column layout */}
            <div style={{ display: "flex", gap: "24px", width: "100%", alignItems: "center", justifyContent: "center" }}>
              
              {/* Left Screen (Start Context) */}
              <div style={{ flex: "1 0 0", minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 0" }}>
                <div style={{ width: "270px", height: "534px", borderRadius: "24px", overflow: "hidden", background: "#fff", boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 24px 64px rgba(0,0,0,0.15)", flexShrink: 0 }}>
                  <img 
                    src="/rosa_images/chat_start_image.png" 
                    alt="Start context"
                    style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Middle Video */}
              <div style={{ flex: "1 0 0", minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 0" }}>
                <div style={{ width: "270px", height: "534px", borderRadius: "24px", overflow: "hidden", background: "#000", boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 24px 64px rgba(0,0,0,0.4)", flexShrink: 0 }}>
                  <video
                    src="/ott sport/Videos/mobile.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Right Screen (Answer Context) */}
              <div style={{ flex: "1 0 0", minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 0" }}>
                <div style={{ width: "270px", height: "534px", borderRadius: "24px", overflow: "hidden", background: "#fff", boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 24px 64px rgba(0,0,0,0.15)", flexShrink: 0 }}>
                  <img 
                    src="/rosa_images/image.png" 
                    alt="End context"
                    style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            {/* Sub-Agentic */}
            <Section label={`4. Designing the "Sub-Agentic" Assistance`}>
              <BodyText>
                {`While "Ask Rosa" is the powerful command center, we also designed smaller, "sub-agentic" helpers that are embedded directly into the UI. These are proactive, contextual AI features that work silently in the background to automate specific tasks without needing an explicit command. The design involved identifying high-friction points in the workflow and embedding an AI solution: The "Lead Score" Agent constantly analyzes incoming leads, automatically scores them based on predefined criteria, and surfaces the justification for the score. The "Momentum" Agent monitors deal engagement. When it detects a key event (like a proposal being opened multiple times), it triggers the "Nudge" notification. The "CRM Hygiene" Agent scans for deals that haven't been updated and changes the priority status matrix to low priority.`}
              </BodyText>
            </Section>

            {/* Sub-Agentic image */}
            <div style={{ width: "100%", overflow: "hidden", borderRadius: "8px" }}>
              <img src="/rosa-sub-agentic.png" alt="Rosa sub-agentic assistance diagram" style={{ width: "100%", display: "block" }} />
            </div>

            {/* The Solution walkthrough */}
            <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
              <Section label="The Solution">
                <BodyText>
                  {`A strategic partner that guides the entire sales motion. The Rosa platform is designed to be a rep's single source of truth and their primary strategic partner, turning hours of manual work into minutes of high-impact selling.`}
                </BodyText>
              </Section>


{/* 1. Strategic Start */}
              <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                <TwoCol label="1. The Strategic Start">
                  <BodyText>
                    {`A strategic partner that guides the entire sales motion. The Rosa platform is designed to be a rep's single source of truth and their primary strategic partner, turning hours of manual work into minutes of high-impact selling. Jordan begins his day with Rosa's brief, instantly knowing which 7 of his 500 leads are showing the strongest intent signals, and which 3 stalled deals need immediate attention.`}
                  </BodyText>
                </TwoCol>
                <div style={{ display: "flex", gap: "24px", width: "100%" }}>
                  <div style={{ width: "728px", height: "409px", flexShrink: 0, overflow: "hidden" }}>
                    <img src={imgMorningBrief} alt="The Morning Brief" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ flex: "1 0 0", height: "409px", overflow: "hidden", background: "#131929", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src="/ott%20sport/about%20me/dashbboard.png" alt="IRIS dashboard" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                  </div>
                </div>
              </div>

              {/* 2. Intelligent Outreach */}
              <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                <HR />
                <TwoCol label="2. The Intelligent Outreach">
                  <BodyText>
                    {`Jordan clicks on a high-score lead. Rosa provides the full research briefing and suggests a personalized email draft based on the lead's recent activity. Jordan tweaks it and sends. The entire flow, from qualification to outreach, takes under 10 minutes.`}
                  </BodyText>
                </TwoCol>
                <div style={{ width: "100%", height: "528px", overflow: "hidden", borderRadius: "8px" }}>
                  <img src="/rosa-outreach.png" alt="Intelligent Outreach — IRIS" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              </div>

              {/* 3. Momentum Nudge */}
              <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                <HR />
                <TwoCol label="3. The Momentum Nudge">
                  <BodyText>
                    {`Later, Rosa detects the lead has opened the proposal twice and sends a notification: "Proposal opened by Delta's VP twice in the past hour. Loop in AE before the window closes?" A deal acceleration moment is created.`}
                  </BodyText>
                </TwoCol>
                <div style={{ display: "flex", gap: "24px", width: "100%" }}>
                  <div style={{ width: "728px", height: "409px", flexShrink: 0, overflow: "hidden" }}>
                    <img src={imgMomentum} alt="Nudges" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ flex: "1 0 0", height: "409px", overflow: "hidden" }}>
                    <img src="/rosa-momentum.png" alt="IRIS Assistive — Momentum" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
                  </div>
                </div>
              </div>

              {/* 4. Assistive Canvas */}
              <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                <HR />
                <TwoCol label="4. Assistive Canvas">
                  <BodyText>
                    {`Designing a modular, customizable dashboard that would serve as the rep's "mission control." We wanted to keep layout simple needs: Prioritized Tasks, At-Risk Deals, Key Metrics, and an AI Activity Feed. The key innovation was making these blocks both AI-curated and user-configurable, allowing reps to arrange their workspace to match their personal workflow.`}
                  </BodyText>
                </TwoCol>
                <div style={{ width: "100%", height: "409px", overflow: "hidden", borderRadius: "8px" }}>
                  <img src="/rosa-assistive.png" alt="IRIS Ask Rosa — Assistive Canvas" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
                </div>
              </div>

            </div>
          </div>

          {/* ══════════════════════════════
              BLOCK 5 · Outcome (336:6846)
          ══════════════════════════════ */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            <Section label="The Outcome">
              <BodyText>
                By automating admin work and providing predictive guidance, Rosa fundamentally changes the nature of the sales role.
              </BodyText>
            </Section>


          </div>

          {/* ══════════════════════════════
              BLOCK 6 · Reflection + Additional (336:6883)
              Internal gap: 110px
          ══════════════════════════════ */}
          <div style={{ display: "flex", flexDirection: "column", gap: "110px" }}>

            {/* Reflection */}
            <Section label="Reflection" noHr>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <BodyText>
                  {`This project taught me that the future of enterprise AI isn't just automation, but anticipation. Designing Rosa required a shift from creating interfaces that display data to designing systems that provide predictive, actionable guidance. It's about empowering the user to make the best next move, every time.`}
                </BodyText>
                <BodyText>
                  {`The biggest design challenge was building trust in the AI's autonomy. A sales rep's relationships are their most valuable asset; they need to trust that the AI is enhancing, not risking, those relationships. We solved this by designing for a "glass box" AI: for every recommendation, Rosa shows the "why" behind it. For all external communication, we kept a "human-in-the-loop" model, where the rep gives the final approval.`}
                </BodyText>
                <BodyText>
                  {`If I were to continue this project, I would focus on the "AI Coaching" aspect. I'd explore using sentiment analysis on call recordings to provide reps with personalised feedback on their conversations, helping them improve their technique over time. This would evolve Rosa from a strategic partner into a true career coach, fully realising the vision of a system built for Momentum, Connection, and Success.`}
                </BodyText>
              </div>
            </Section>

          </div>
        </div>
      </div>
    </div>
  );
}
