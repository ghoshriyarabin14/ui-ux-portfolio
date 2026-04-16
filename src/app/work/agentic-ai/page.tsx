"use client";

import Link from "next/link";

// ── Assets (Figma MCP, node 336:6660, file 8LUMIoWCoDPZZf6pXrGe5F) ────────────
const imgHeroBg      = "https://www.figma.com/api/mcp/asset/98f3e1b4-3091-410e-b9d3-db00bcf91e06";
const imgHeroUI      = "https://www.figma.com/api/mcp/asset/fcb68676-4771-4e9c-b5f9-f5c03d9cf570";
const imgAIScreens   = "https://www.figma.com/api/mcp/asset/b501c1b5-5bf9-4ede-b44e-36c9b23d744c";
const imgRapidProto  = "https://www.figma.com/api/mcp/asset/846082c4-6f81-4ce9-a6ad-98713626c574";
const imgSolution    = "https://www.figma.com/api/mcp/asset/5346e27d-c864-41cd-80b1-0e50870c6d85";
const imgStrategic   = "https://www.figma.com/api/mcp/asset/135f0f13-6a2a-4fe1-a842-16f7a26305a6";
const imgMomentum    = "https://www.figma.com/api/mcp/asset/2087f1df-48d9-4db7-9c61-cd01c3cc267d";
const imgOutcome     = "https://www.figma.com/api/mcp/asset/00d997bd-5683-4307-9389-816eca2af380";
const imgOutcomeIll  = "https://www.figma.com/api/mcp/asset/3679a619-d8b5-4929-8edf-dc520931b16f";

// ── Design tokens ─────────────────────────────────────────────────────────────
const BG             = "#141414";
const TEXT_WHITE     = "#ffffff";
const TEXT_BODY      = "#e2e2e2";
const DIVIDER_COLOR  = "rgba(255,255,255,0.12)";
const PLACEHOLDER_BG = "#212121";

// ── Shared styles ─────────────────────────────────────────────────────────────
const interBase: React.CSSProperties = {
  fontFamily: "var(--font-inter), sans-serif",
  margin: 0,
};

const SECTION_LABEL: React.CSSProperties = {
  ...interBase,
  fontWeight: 400,
  fontSize: "24px",
  color: TEXT_WHITE,
  flexShrink: 0,
  width: "42%",
  paddingTop: "4px",
};

const SECTION_BODY: React.CSSProperties = {
  ...interBase,
  fontWeight: 400,
  fontSize: "24px",
  color: TEXT_BODY,
  lineHeight: 1.5,
};

const STEP_BODY: React.CSSProperties = {
  ...interBase,
  fontWeight: 400,
  fontSize: "16px",
  color: TEXT_BODY,
  lineHeight: 1.6,
};

const META_LABEL: React.CSSProperties = {
  ...interBase,
  fontWeight: 600,
  fontSize: "14px",
  color: TEXT_WHITE,
  letterSpacing: "0.55px",
  textTransform: "capitalize" as const,
  lineHeight: "normal",
};

const META_VALUE: React.CSSProperties = {
  ...interBase,
  fontWeight: 400,
  fontSize: "16px",
  color: TEXT_WHITE,
  lineHeight: 1.3,
};

// ── Primitives ────────────────────────────────────────────────────────────────
const HR = () => (
  <div style={{ height: "1px", background: DIVIDER_COLOR, width: "100%", flexShrink: 0 }} />
);

// ── Section wrapper ────────────────────────────────────────────────────────────
function Section({
  label,
  children,
  noHr,
  labelStyle,
}: {
  label: string;
  children: React.ReactNode;
  noHr?: boolean;
  labelStyle?: React.CSSProperties;
}) {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {!noHr && <HR />}
      <div style={{ display: "flex", width: "100%" }}>
        <p style={{ ...SECTION_LABEL, ...labelStyle }}>{label}</p>
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </section>
  );
}

// ── Pain card ─────────────────────────────────────────────────────────────────
function PainCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      style={{
        flex: "1 0 0",
        background: PLACEHOLDER_BG,
        borderRadius: "12px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignSelf: "stretch",
        minWidth: 0,
        height: "270px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p
          style={{
            ...interBase,
            fontWeight: 500,
            fontSize: "14px",
            color: "#dbdbdb",
            letterSpacing: "0.55px",
            textTransform: "capitalize",
          }}
        >
          {title}
        </p>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.15)" }} />
      </div>
      <p
        style={{
          ...interBase,
          fontWeight: 400,
          fontSize: "14px",
          color: TEXT_WHITE,
          lineHeight: "19.2px",
        }}
      >
        {body}
      </p>
    </div>
  );
}

// ── Image pair row ─────────────────────────────────────────────────────────────
function ImagePair({
  leftSrc,
  rightSrc,
  height = 409,
  gap = 24,
}: {
  leftSrc?: string;
  rightSrc?: string;
  height?: number;
  gap?: number;
}) {
  return (
    <div style={{ display: "flex", gap: `${gap}px` }}>
      {leftSrc ? (
        <img
          src={leftSrc}
          alt=""
          style={{
            flex: "1 0 0",
            height: `${height}px`,
            objectFit: "cover",
            borderRadius: "8px",
            minWidth: 0,
          }}
        />
      ) : (
        <div
          style={{
            flex: "1 0 0",
            height: `${height}px`,
            background: PLACEHOLDER_BG,
            borderRadius: "8px",
            minWidth: 0,
          }}
        />
      )}
      {rightSrc ? (
        <img
          src={rightSrc}
          alt=""
          style={{
            flex: "1 0 0",
            height: `${height}px`,
            objectFit: "cover",
            borderRadius: "8px",
            minWidth: 0,
          }}
        />
      ) : (
        <div
          style={{
            flex: "1 0 0",
            height: `${height}px`,
            background: PLACEHOLDER_BG,
            borderRadius: "8px",
            minWidth: 0,
          }}
        />
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function AgenticAiPage() {
  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT_WHITE, paddingTop: "83px" }}>

      {/* ── Header row (336:6678) ── */}
      <div
        style={{
          padding: "10px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ ...interBase, fontWeight: 400, fontSize: "24px", color: TEXT_WHITE }}>
          Case study
        </span>
        <span style={{ ...interBase, fontWeight: 400, fontSize: "24px", color: TEXT_WHITE }}>
          B2B SaaS
        </span>
        <p style={{ ...interBase, fontWeight: 400, fontSize: "76px", color: TEXT_WHITE, lineHeight: 1 }}>
          Agentic Ai X Salesforce
        </p>
      </div>

      {/* ── Hero (344:18819) ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "783px",
          overflow: "hidden",
          borderRadius: "4px",
          flexShrink: 0,
        }}
      >
        <img
          src={imgHeroBg}
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <img
          src={imgHeroUI}
          alt="IRIS Visual Design"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* ── Role / meta row (347:18962) ── */}
      <div
        style={{
          padding: "20px 24px",
          borderBottom: "1px solid rgba(50,64,79,0.1)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {[
          { label: "Period",  lines: ["1 year 3 months"] },
          { label: "Team",    lines: ["Malvika Nanda", "Yun Easing", "Riya Ghosh"] },
          { label: "Role",    lines: ["Product Designer"] },
          { label: "Skills",  lines: ["Design Systems", "Component Architecture", "Product Strategy"] },
          { label: "Tools",   lines: ["Figma", "Photoshop", "GM3 Design System"] },
        ].map(({ label, lines }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={META_LABEL}>{label}</p>
            {lines.map((l) => (
              <p key={l} style={{ ...META_VALUE, margin: 0 }}>{l}</p>
            ))}
          </div>
        ))}
      </div>

      {/* ── Content sections ── */}
      <div
        style={{
          padding: "64px 24px 100px",
          display: "flex",
          flexDirection: "column",
          gap: "72px",
        }}
      >

        {/* ── Context (336:6774) ── */}
        <Section label="Context" noHr>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={SECTION_BODY}>
              The average sales rep is buried in administrative work—updating CRMs, logging calls,
              finding data—which shatters their focus and kills sales momentum. The problem isn&apos;t
              just the loss of time; it&apos;s the loss of flow.
            </p>
            <p style={SECTION_BODY}>
              We didn&apos;t set out to build another productivity tool. We set out to design Rosa, an
              AI partner designed not just to manage data, but to anticipate the next best move, highlight
              the right opportunities, and clear the path for what sales reps do best: build connections
              and close deals
            </p>
          </div>
        </Section>

        {/* ── Big quote (336:6782) ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <HR />
          <p
            style={{
              ...interBase,
              fontWeight: 400,
              fontSize: "40px",
              color: TEXT_WHITE,
              letterSpacing: "1px",
              lineHeight: 1.3,
              width: "100%",
            }}
          >
            What If A Sales Rep Could Spend Their Entire Day Selling?
          </p>
        </div>

        {/* ── Solution (336:6806) ── */}
        <Section label="Solution">
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={SECTION_BODY}>
              An AI agent that provides predictive guidance and automates the entire sales workflow,
              turning data into conversations.
            </p>
            <p style={SECTION_BODY}>
              I led the design of Rosa, a SaaS platform built natively within Salesforce. Rosa
              doesn&apos;t just automate tasks—it acts as a strategic partner, surfacing the right
              information at the right moment to guide a sales rep from morning brief to closed deal.
            </p>
          </div>
        </Section>

        {/* ── The Problem (338:14935) ── */}
        <Section label="The Problem">
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={SECTION_BODY}>
              Sales reps are drowning in tasks, but starving for momentum.
            </p>
            <p style={SECTION_BODY}>
              My research into the sales workflow revealed a fundamental mismatch: the tools built to
              help reps were actually the biggest drain on their time. Every CRM update, every call log,
              every data lookup pulled them out of the flow state that separates good salespeople from
              great ones.
            </p>
          </div>
        </Section>

        {/* ── Pain Points (336:6813) ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <HR />
          <p style={{ ...interBase, fontWeight: 400, fontSize: "24px", color: TEXT_WHITE }}>
            Pain Points
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <PainCard
              title="Decision Fatigue"
              body="Sales reps face hundreds of micro-decisions daily — which lead to call, what to say, when to follow up. Without guidance, cognitive load compounds throughout the day, leading to worse decisions by afternoon."
            />
            <PainCard
              title={'The "Research Tax"'}
              body="Before every call, reps spend 15-30 minutes pulling data from multiple systems. This research tax isn't just a time drain — it fragments attention and kills the momentum needed to perform in high-stakes conversations."
            />
            <PainCard
              title="The Connection Gap"
              body="CRMs capture what happened, not what to do next. Reps are left to synthesize raw data into strategy on their own, a skill gap that separates top performers from the rest of the team."
            />
            <PainCard
              title="Key Insight"
              body="The solution wasn't to automate tasks in isolation. It was to design an AI that understood the sales motion as a whole — one that could anticipate needs, not just respond to them."
            />
          </div>
        </div>

        {/* ── Design Process header (336:6836) ── */}
        <Section label="The Design Process">
          <p style={SECTION_BODY}>
            An AI-Augmented Workflow: From Concept to Prototype in Days, Not Weeks. The design process
            for Rosa was itself a proof of concept for the product&apos;s core premise — that AI can
            compress the gap between insight and execution.
          </p>
        </Section>

        {/* AI screenshots (347:30894) */}
        <div style={{ display: "flex", gap: "24px" }}>
          <img
            src={imgAIScreens}
            alt="AI workflow screenshot"
            style={{
              flex: "1 0 0",
              height: "409px",
              objectFit: "cover",
              borderRadius: "8px",
              minWidth: 0,
            }}
          />
          <img
            src={imgAIScreens}
            alt="AI workflow screenshot"
            style={{
              flex: "1 0 0",
              height: "409px",
              objectFit: "cover",
              borderRadius: "8px",
              minWidth: 0,
            }}
          />
        </div>

        {/* Step 1 (338:15004) */}
        <Section label="1. AI as the Starting Block">
          <p style={STEP_BODY}>
            Instead of starting with blank wireframes, I used AI to rapidly generate user flow diagrams
            and interaction models based on the research findings. I prompted the AI with the core user
            jobs-to-be-done — &quot;surface the next best action,&quot; &quot;automate post-call
            logging,&quot; &quot;predict which leads to prioritize&quot; — and used its output as a
            structured starting point for exploration. This compressed the initial divergent phase from
            weeks to days, letting the team react to concrete structures rather than abstract briefs.
          </p>
        </Section>

        {/* Rapid Prototyping images (338:15027) */}
        <div style={{ display: "flex", gap: "24px" }}>
          <img
            src={imgRapidProto}
            alt="Rapid prototyping"
            style={{
              flex: "1 0 0",
              height: "409px",
              objectFit: "cover",
              borderRadius: "8px",
              minWidth: 0,
            }}
          />
          <img
            src={imgRapidProto}
            alt="Rapid prototyping"
            style={{
              flex: "1 0 0",
              height: "409px",
              objectFit: "cover",
              borderRadius: "8px",
              minWidth: 0,
            }}
          />
        </div>

        {/* Step 2 (338:15018) */}
        <Section label="2. Rapid Prototyping in Figma">
          <p style={STEP_BODY}>
            With validated flows, I moved directly into high-fidelity prototyping in Figma, bypassing
            low-fidelity wireframing entirely. The GM3 design system provided a robust component library
            that allowed me to assemble production-quality screens at the speed of sketching. Each
            prototype was immediately testable, shortening the feedback loop between design decisions
            and user validation. The speed of this phase was only possible because of the design system
            investment — every component already had accessibility, theming, and interaction states
            built in.
          </p>
        </Section>

        {/* Step 3 (338:15033) */}
        <Section label={'3. Designing the Core Agent: "Ask Rosa"'}>
          <p style={STEP_BODY}>
            The central design challenge was making a complex AI agent feel effortless. Ask Rosa — the
            natural language interface at the heart of the product — needed to handle open-ended queries
            (&quot;What should I focus on today?&quot;) and decompose them into multi-step tasks, while
            making that task decomposition visible and editable. I designed a task breakdown UI that
            showed the rep exactly what Rosa was doing and why, building trust in the AI&apos;s
            recommendations through transparency rather than opacity.
          </p>
        </Section>
        <ImagePair height={409} />

        {/* Step 4 (338:15048) */}
        <Section label={'4. Designing the "Sub-Agentic" Assistance'}>
          <p style={STEP_BODY}>
            Rosa isn&apos;t a single AI — it&apos;s an orchestrator of specialized sub-agents, each
            optimized for a different part of the sales motion: lead scoring, email drafting, call prep,
            pipeline analysis. I designed each sub-agent as a distinct modal context with its own
            information architecture, while maintaining a consistent interaction language across all of
            them. The challenge was making the system feel unified and predictable even as each agent
            operated on different data and produced different outputs.
          </p>
        </Section>
        <ImagePair height={409} />

        {/* The Solution header (338:15058) */}
        <Section label="The Solution">
          <p style={SECTION_BODY}>
            A strategic partner that guides the entire sales motion — from the first call of the day to
            the final deal close.
          </p>
        </Section>

        {/* Main solution image (340:17795) */}
        <div
          style={{
            width: "100%",
            aspectRatio: "1389 / 781",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <img
            src={imgSolution}
            alt="Rosa — solution overview"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* 1. Strategic Start (338:15069) */}
        <Section label="1. The Strategic Start">
          <p style={STEP_BODY}>
            Every morning, Rosa generates a personalized brief for each rep: the highest-priority leads,
            deals at risk of going cold, and a suggested sequence for the day. The design challenge was
            presenting this intelligence without overwhelming — a dashboard that felt like a trusted
            colleague giving a morning brief, not a data dump. The morning brief became the
            product&apos;s signature moment: the first thing reps see, and the clearest demonstration
            of Rosa&apos;s value.
          </p>
        </Section>
        <div style={{ display: "flex", gap: "24px" }}>
          <img
            src={imgStrategic}
            alt="Strategic start"
            style={{
              width: "728px",
              height: "409px",
              objectFit: "cover",
              borderRadius: "8px",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              flex: "1 0 0",
              height: "409px",
              background: PLACEHOLDER_BG,
              borderRadius: "8px",
              minWidth: 0,
            }}
          />
        </div>

        {/* 2. Intelligent Outreach (338:15080) */}
        <Section label="2. The Intelligent Outreach">
          <p style={STEP_BODY}>
            Jordan clicks on a high-score lead. Rosa surfaces a complete context panel: the lead&apos;s
            recent activity, the last three touchpoints, the decision-maker&apos;s LinkedIn activity, and
            a suggested talking point built from the company&apos;s latest earnings call. One click drafts
            a personalized outreach email in Jordan&apos;s voice, trained on their past successful messages.
            The design goal was to make the right action feel like the obvious action — no hunting through
            tabs, no copy-pasting between tools.
          </p>
        </Section>
        <ImagePair height={418} />

        {/* 3. Momentum Nudge (338:15091) */}
        <Section label="3. The Momentum Nudge">
          <p style={STEP_BODY}>
            Later, Rosa detects the lead has opened the proposal twice in the last hour. A momentum nudge
            appears — not an alert, but a contextual suggestion: &quot;High engagement signal. This might
            be a good time to reach out.&quot; The nudge includes a suggested message and a one-click send.
            I designed this as a non-intrusive overlay that respects the rep&apos;s current context while
            making the optimal action frictionless. The timing and delivery of these nudges was one of the
            most iterated parts of the design.
          </p>
        </Section>
        <div style={{ display: "flex", gap: "24px" }}>
          <img
            src={imgMomentum}
            alt="Momentum nudge"
            style={{
              width: "728px",
              height: "409px",
              objectFit: "cover",
              borderRadius: "8px",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              flex: "1 0 0",
              height: "409px",
              background: PLACEHOLDER_BG,
              borderRadius: "8px",
              minWidth: 0,
            }}
          />
        </div>

        {/* 4. Assistive Canvas (338:15102) */}
        <Section label="4. Assistive Canvas">
          <p style={STEP_BODY}>
            Designing a modular, customizable dashboard that adapts to each rep&apos;s workflow. The
            Assistive Canvas is the strategic layer of Rosa — a persistent workspace where reps can pin
            active deals, track pipeline health, and access their most-used sub-agents. The challenge was
            designing for both structure and flexibility: enough defaults to be immediately useful, enough
            customization to fit every rep&apos;s mental model.
          </p>
        </Section>
        <ImagePair height={409} />

        {/* ── Outcome (336:6846) ── */}
        <Section label="The Outcome">
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={SECTION_BODY}>
              By automating admin work and providing predictive guidance, Rosa fundamentally changes the
              nature of the sales role.
            </p>
            <p style={SECTION_BODY}>
              Rather than spending hours on CRM updates and research, sales reps using Rosa spend the
              majority of their time on high-value activities: building relationships, crafting strategy,
              and closing deals. The product transforms the CRM from a system of record into a system
              of action.
            </p>
          </div>
        </Section>

        {/* Outcome image (340:15641) */}
        <div
          style={{
            width: "100%",
            aspectRatio: "3568 / 1900",
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          <img
            src={imgOutcome}
            alt="Rosa — outcome"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Outcome illustration (340:16652) */}
        <div
          style={{
            width: "100%",
            height: "783px",
            overflow: "hidden",
            borderRadius: "4px",
          }}
        >
          <img
            src={imgOutcomeIll}
            alt="Rosa — outcome illustration"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* ── Reflection (336:6883) ── */}
        <Section label="Reflection">
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={SECTION_BODY}>
              The most important design insight from this project: AI that anticipates is fundamentally
              different from AI that responds. Every major interaction in Rosa was designed around the
              question &quot;what does the rep need next?&quot; rather than &quot;what did the rep ask
              for?&quot; That shift in framing changed almost every design decision.
            </p>
            <p style={SECTION_BODY}>
              Building trust in an AI system requires what I think of as &quot;glass box&quot; design —
              making the AI&apos;s reasoning visible without exposing its complexity. Rosa shows its work:
              why it surfaced a particular lead, what signals triggered a nudge, how it ranked the
              day&apos;s priorities. Transparency isn&apos;t just an ethical requirement; it&apos;s the
              mechanism by which users develop accurate mental models of what the AI can and can&apos;t do.
            </p>
            <p style={SECTION_BODY}>
              The design process itself validated the product concept. Using AI to accelerate the design
              of an AI product created a productive feedback loop: we were our own first users,
              experiencing firsthand the cognitive benefits of AI-assisted work. That lived experience
              shaped the product&apos;s interaction model in ways that pure research couldn&apos;t have.
            </p>
          </div>
        </Section>

        {/* ── Additional Projects ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <HR />
          <div style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
            <p
              style={{
                ...interBase,
                fontWeight: 400,
                fontSize: "24px",
                color: TEXT_WHITE,
                flexShrink: 0,
                width: "42%",
              }}
            >
              Additional Projects
            </p>
            <div style={{ flex: 1, display: "flex", gap: "24px" }}>
              <Link
                href="/work/ott-sports-cards"
                style={{
                  flex: 1,
                  height: "349px",
                  display: "block",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "4px",
                  textDecoration: "none",
                  background: "#000",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(0,50,100,0.85) 0%, rgba(0,20,60,0.85) 100%)",
                  }}
                />
                <p
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontFamily: "var(--font-manrope), var(--font-inter), sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(18px, 2.4vw, 35px)",
                    color: "#fff",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    margin: 0,
                  }}
                >
                  OTT Sports Cards
                </p>
              </Link>
              <Link
                href="/work/tetris-console"
                style={{
                  flex: 1,
                  height: "349px",
                  display: "block",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "4px",
                  textDecoration: "none",
                  background: "#000",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(80,0,120,0.85) 0%, rgba(40,0,80,0.85) 100%)",
                  }}
                />
                <p
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontFamily: "var(--font-manrope), var(--font-inter), sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(18px, 2.4vw, 35px)",
                    color: "#fff",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    margin: 0,
                  }}
                >
                  Tetris Console
                </p>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
