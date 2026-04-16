"use client";

import Link from "next/link";

// ── Assets (Figma MCP · node 349:31077 · file 8LUMIoWCoDPZZf6pXrGe5F) ─────────
const imgHero                   = "https://www.figma.com/api/mcp/asset/127d1c02-bec3-4c78-a8ba-c321ba5aca87";
const imgDesignProcess          = "https://www.figma.com/api/mcp/asset/5b1c4be4-b9a1-4c7f-8b31-5c07a1a21c22";
const imgPlayPoints             = "https://www.figma.com/api/mcp/asset/78d4930a-b5cf-450c-bab6-33b0088251e5";
const imgTooltip                = "https://www.figma.com/api/mcp/asset/bc2058e5-9621-4292-91f1-0dea362240da";
const imgEmptyState             = "https://www.figma.com/api/mcp/asset/ba3ee0c2-20e8-4e87-9251-75e4e6b9709f";
const imgCreationFlow           = "https://www.figma.com/api/mcp/asset/688cd8e5-4d88-46a2-8bac-1f75c40240ea";
const imgCoupons                = "https://www.figma.com/api/mcp/asset/98de28d3-91f7-42dd-93d8-f2d4659aa6ce";
const imgRejectedPromotion      = "https://www.figma.com/api/mcp/asset/02b69b5a-0c30-4ed5-b331-ad3f57e10e7f";
const imgAddlBg1                = "https://www.figma.com/api/mcp/asset/317c14d6-b1e5-4672-95ad-8a7b9db1b66c";
const imgAddlGraphic            = "https://www.figma.com/api/mcp/asset/15e65318-9807-4712-a8a0-292a1a613f81";
const imgAddlBg2                = "https://www.figma.com/api/mcp/asset/20222ce0-8d31-41ad-8e59-3e1c00ce0264";

// ── Tokens ────────────────────────────────────────────────────────────────────
const INTER   = "var(--font-inter), sans-serif";
const WHITE   = "#ffffff";
const BODY    = "#e2e2e2";
const DIM     = "#dbdbdb";
const DIVIDER = "rgba(255,255,255,0.12)";
const CARD_BG = "#212121";

// ── Primitive: horizontal rule ─────────────────────────────────────────────────
const HR = () => (
  <div style={{ height: "1px", background: DIVIDER, width: "100%", flexShrink: 0 }} />
);

// ── Two-column content row (label | body) ──────────────────────────────────────
function TwoCol({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", width: "100%" }}>
      <p style={{
        fontFamily: INTER, fontWeight: 400, fontSize: "24px", color: WHITE,
        lineHeight: "normal", margin: 0, flex: "1 0 0", minWidth: 0,
      }}>
        {label}
      </p>
      <div style={{ flexShrink: 0, width: "800px" }}>
        {children}
      </div>
    </div>
  );
}

// ── Body text ─────────────────────────────────────────────────────────────────
function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: INTER, fontWeight: 400, fontSize: "24px",
      color: BODY, lineHeight: "normal", margin: 0,
      whiteSpace: "pre-wrap",
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

// ── Solution sub-section ───────────────────────────────────────────────────────
function SolutionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
      <p style={{
        fontFamily: INTER, fontWeight: 400, fontSize: "24px", color: WHITE,
        lineHeight: "normal", margin: 0,
      }}>
        {title}
      </p>
      {children}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function PayConsolePage() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", color: WHITE, paddingTop: "83px" }}>

      {/* ── Go Back ── */}
      <div style={{ padding: "0 24px", paddingTop: "56px", display: "flex", justifyContent: "flex-start" }}>
        <Link href="/" style={{
          display: "flex", alignItems: "center", gap: "8px",
          color: "#c8c8c8", textDecoration: "none",
          fontFamily: INTER, fontSize: "14px",
        }}>
          ← Go Back
        </Link>
      </div>

      {/* ── Title bar — Case study · SaaS · Play Console X Eco System ── */}
      <div style={{ padding: "72px 24px 0" }}>
        <div style={{
          display: "flex", alignItems: "center",
          fontFamily: INTER, fontWeight: 400, color: WHITE,
          whiteSpace: "nowrap", justifyContent: "space-between",
        }}>
          <span style={{ fontSize: "24px", flexShrink: 0 }}>Case study</span>
          <span style={{ fontSize: "24px", flexShrink: 0 }}>SaaS</span>
          <h1 style={{
            fontFamily: INTER, fontWeight: 400,
            fontSize: "clamp(36px, 5.4vw, 76px)",
            color: WHITE, margin: 0, lineHeight: 1,
          }}>
            Play Console X Eco System
          </h1>
        </div>
      </div>

      {/* ── Hero image ── */}
      <div style={{ padding: "72px 24px 0" }}>
        <div style={{ width: "100%", height: "534px", position: "relative", overflow: "hidden" }}>
          <img
            src={imgHero}
            alt="Play Console X Eco System hero screenshot"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", display: "block" }}
          />
        </div>
      </div>

      {/* ── Meta row — Period / Team / Role / Skills / Tools ── */}
      <div style={{
        padding: "20px 24px",
        borderBottom: "1px solid rgba(50,64,79,0.1)",
        display: "flex", justifyContent: "space-between",
        flexWrap: "wrap", gap: "20px",
      }}>
        {[
          { label: "Period",  lines: ["1 year 3 months"] },
          { label: "Team",    lines: ["Malvika Nanda", "Yun Easing", "Riya Ghosh"] },
          { label: "Role",    lines: ["Product Designer"] },
          { label: "Skills",  lines: ["Design Systems", "Component Architecture", "Product Strategy"] },
          { label: "Tools",   lines: ["Figma", "Photoshop", "GM3 Design System"] },
        ].map(({ label, lines }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{
              fontFamily: INTER, fontWeight: 400, fontSize: "14px", color: WHITE,
              letterSpacing: "0.55px", textTransform: "capitalize",
              margin: 0, lineHeight: "normal",
            }}>
              {label}
            </p>
            {lines.map((l) => (
              <p key={l} style={{ fontFamily: INTER, fontWeight: 400, fontSize: "16px", color: WHITE, lineHeight: "1.3", margin: 0 }}>{l}</p>
            ))}
          </div>
        ))}
      </div>

      {/* ── Content sections ── */}
      <div style={{ padding: "64px 24px 120px", display: "flex", flexDirection: "column", gap: "72px" }}>

        {/* ── CONTEXT ── */}
        <Section label="Context">
          <BodyText>
            {`The platform's "Loyalty Points" program is a powerful tool that drives significant user engagement. Historically, however, getting an app featured was a manual, opaque process brokered by Business Development (BD) managers, accessible only to the top 1% of managed partners. This left 99% of developers without access to a critical growth lever.\n\nThe challenge was to dismantle this manual, inequitable process and re-architect it as a scalable, self-service product.`}
          </BodyText>
        </Section>

        {/* ── DISPLAY QUOTE ── */}
        <p style={{
          fontFamily: INTER, fontWeight: 400,
          fontSize: "clamp(28px, 3vw, 40px)",
          color: WHITE, letterSpacing: "1px",
          textTransform: "capitalize",
          lineHeight: 1.2, margin: 0,
        }}>
          What if any developer could launch a global promotion on the App Store?
        </p>

        {/* ── THE PROBLEM ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          <Section label="The Problem">
            <BodyText>
              {`The brief provided by the client is to make the promotion feature simpler for devs as currently the growth engine was throttled by a manual process.\n\nIt became immediately clear that the system was fundamentally broken and unscalable, creating friction for everyone involved.`}
            </BodyText>
          </Section>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={{ fontFamily: INTER, fontWeight: 400, fontSize: "24px", color: WHITE, margin: 0, lineHeight: "normal" }}>
              Pain Points
            </p>
            <div style={{ display: "flex", gap: "24px", width: "100%" }}>
              <PainCard
                title="Systemic Inequity"
                body={`The manual process was a bottleneck by design. It was impossible to scale the human-led negotiations beyond the largest partners, creating a "rich get richer" dynamic on the platform that left the long-tail of developers behind.`}
              />
              <PainCard
                title="Internal Operational Drain"
                body="The BD team was spending the majority of their time on low-value operational tasks—endless email chains, contract negotiations, and manual campaign setup. This prevented them from focusing on high-impact strategic partnerships."
              />
              <PainCard
                title="Black Box Process"
                body="For the few developers who could get a deal, the process was entirely opaque. They had no direct control over the campaign, no visibility into setup, and no immediate access to performance data, leading to frustration and a feeling of powerlessness."
              />
              <PainCard
                title="Key Insight"
                body="The core problem was not the promotions, but the manual gatekeeping. The only way to unlock growth for the entire ecosystem was to remove the human bottleneck and productise the entire workflow."
              />
            </div>
          </div>
        </div>

        {/* ── THE DESIGN PROCESS ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          <Section label="The Design Process">
            <BodyText>
              {`Designing for confidence in a high-stakes environment\n\nThe design process was focused on a single, critical question: "How do we make a developer feel confident making important, irreversible decisions in a self-service tool?" Every design decision was made to build trust and provide clarity.`}
            </BodyText>
          </Section>

          <div style={{ width: "100%", height: "434px", position: "relative", overflow: "hidden", mixBlendMode: "hard-light" }}>
            <img
              src={imgDesignProcess}
              alt="Design process screenshot"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", display: "block" }}
            />
          </div>

          <TwoCol label="1. Mapping End-to-End Journey">
            <BodyText>
              Creating a detailed service blueprint that mapped every action and dependency for both the external developer and the internal teams. This artifact was crucial; it visually articulated the immense cost of the manual process and became the central justification for investing in a self-service product.
            </BodyText>
          </TwoCol>
          <TwoCol label={`2. Architecting the "Guided Wizard"`}>
            <BodyText>
              {`A complex B2B process demands a simple, guided interface. I designed the campaign creation flow as a step-by-step wizard (Goal → Type → Budget & Schedule → Review). This linear approach prevents users from feeling overwhelmed.`}
            </BodyText>
          </TwoCol>
          <TwoCol label="3. Unhappy Path: Edge Cases & Empty States">
            <BodyText>
              {`A robust system is defined by how gracefully it handles failure and empty states. I dedicated a significant part of the design process to mapping and solving for these "unhappy paths" to prevent user confusion and errors.`}
            </BodyText>
          </TwoCol>
        </div>

        {/* ── THE SOLUTION ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          <HR />
          <TwoCol label="The Solution">
            <BodyText>
              {`The "Promote with Loyalty Points" feature transforms a manual service into a fully integrated, self-service product, designed with safety and clarity at its core.`}
            </BodyText>
          </TwoCol>

          <SolutionBlock title={`1. Introduction of "PlayPoints" in Dashboard`}>
            <img
              src={imgPlayPoints}
              alt="Introduction of PlayPoints in Dashboard"
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            />
          </SolutionBlock>

          <SolutionBlock title={`"Total revenue" tooltip on hover`}>
            <div style={{ width: "100%", aspectRatio: "4096/520", position: "relative", overflow: "hidden" }}>
              <img
                src={imgTooltip}
                alt="Total revenue tooltip on hover"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", display: "block" }}
              />
            </div>
          </SolutionBlock>

          <SolutionBlock title="2. Empty State">
            <img src={imgEmptyState} alt="Empty state" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
          </SolutionBlock>

          <SolutionBlock title="3. Creation Flow">
            <img src={imgCreationFlow} alt="Creation flow" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
          </SolutionBlock>

          <SolutionBlock title="4. Coupons">
            <img src={imgCoupons} alt="Coupons" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
          </SolutionBlock>

          <SolutionBlock title="4. Rejected Promotion › Edit Mode">
            <div style={{ width: "50%" }}>
              <img src={imgRejectedPromotion} alt="Rejected promotion edit mode" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
            </div>
          </SolutionBlock>
        </div>

        {/* ── REFLECTION ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "110px" }}>
          <HR />
          <TwoCol label="Reflection">
            <BodyText>
              {`If I were to continue this project, I would focus on building an AI-powered "Recommendation Engine." The system has all the data on what makes a promotion successful. The next logical step is to use that data to proactively suggest campaigns to developers: "Apps in your category see a 30% user uplift with a 'Points Booster' in Japan. Estimated cost: $5,000. Would you like to set one up?" This would evolve the feature from a powerful self-service tool into a true strategic growth partner.`}
            </BodyText>
          </TwoCol>

          {/* ── ADDITIONAL PROJECTS ── */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", width: "100%" }}>
            <p style={{
              fontFamily: INTER, fontWeight: 400, fontSize: "24px", color: WHITE,
              lineHeight: "normal", margin: 0, flex: "1 0 0", minWidth: 0,
            }}>
              Additional Project
            </p>
            <div style={{ display: "flex", gap: "24px", flexShrink: 0 }}>
              <Link href="/work/agentic-ai" style={{ textDecoration: "none" }}>
                <div style={{ width: "440px", height: "349px", background: "#000", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                  <img
                    src={imgAddlBg1}
                    alt="Agentic AI X Salesforce"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))" }} />
                  <p style={{
                    position: "absolute", bottom: "20px", left: "20px",
                    fontFamily: INTER, fontWeight: 600, fontSize: "18px", color: WHITE,
                    margin: 0, whiteSpace: "nowrap",
                  }}>
                    Agentic AI X Salesforce
                  </p>
                </div>
              </Link>
              <div style={{ width: "440px", height: "349px", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                <img
                  src={imgAddlBg2}
                  alt="Additional project"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))" }} />
                <img
                  src={imgAddlGraphic}
                  alt=""
                  style={{
                    position: "absolute", inset: 0, width: "160%", height: "130%",
                    objectFit: "cover", pointerEvents: "none",
                    left: "-28%", top: "-6%", transform: "rotate(180deg)",
                  }}
                />
                <p style={{
                  position: "absolute", bottom: "20px", left: "20px",
                  fontFamily: INTER, fontWeight: 600, fontSize: "18px", color: WHITE,
                  margin: 0, whiteSpace: "nowrap",
                }}>
                  Agentic AI X Salesforce
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
