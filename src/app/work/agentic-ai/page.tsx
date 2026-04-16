"use client";

import Link from "next/link";

// ── Assets (Figma MCP, node 336:6660, fetched 2026-04-16) ─────────────────────
// Hero
const imgHeroBg     = "https://www.figma.com/api/mcp/asset/98f3e1b4-3091-410e-b9d3-db00bcf91e06";
const imgHeroUI     = "https://www.figma.com/api/mcp/asset/fcb68676-4771-4e9c-b5f9-f5c03d9cf570";
// Design process
const imgAiScreenshots    = "https://www.figma.com/api/mcp/asset/b501c1b5-5bf9-4ede-b44e-36c9b23d744c";
const imgRapidPrototyping = "https://www.figma.com/api/mcp/asset/846082c4-6f81-4ce9-a6ad-98713626c574";
// Solution walkthrough
const imgMorningBrief  = "https://www.figma.com/api/mcp/asset/135f0f13-6a2a-4fe1-a842-16f7a26305a6";
const imgMomentumNudge = "https://www.figma.com/api/mcp/asset/2087f1df-48d9-4db7-9c61-cd01c3cc267d";
const imgDashboard     = "https://www.figma.com/api/mcp/asset/5346e27d-c864-41cd-80b1-0e50870c6d85";
// Outcome
const imgOutcomeDiagram  = "https://www.figma.com/api/mcp/asset/00d997bd-5683-4307-9389-816eca2af380";
const imgOutcomeFrame    = "https://www.figma.com/api/mcp/asset/3679a619-d8b5-4929-8edf-dc520931b16f";

// ── Design tokens ──────────────────────────────────────────────────────────────
const BG      = "#141414";
const TEXT_PRI = "#ffffff";
const TEXT_SEC = "#e2e2e2";

// ── Shared typography styles ───────────────────────────────────────────────────
const LABEL: React.CSSProperties = {
  fontFamily: "var(--font-inter), sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  color: TEXT_PRI,
  letterSpacing: "0.55px",
  textTransform: "capitalize",
  lineHeight: "normal",
  margin: 0,
};

const BODY: React.CSSProperties = {
  fontFamily: "var(--font-inter), sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  color: TEXT_SEC,
  lineHeight: "1.6",
  margin: 0,
};

const META_KEY: React.CSSProperties = {
  fontFamily: "var(--font-inter), sans-serif",
  fontWeight: 600,
  fontSize: "14px",
  color: TEXT_PRI,
  letterSpacing: "0.55px",
  textTransform: "capitalize",
  lineHeight: "normal",
  margin: 0,
};

const META_VAL: React.CSSProperties = {
  fontFamily: "var(--font-inter), sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  color: TEXT_PRI,
  lineHeight: "1.3",
  margin: 0,
};

// ── Divider ────────────────────────────────────────────────────────────────────
const HR = () => (
  <div style={{ height: "1px", background: "rgba(255,255,255,0.12)", width: "100%", flexShrink: 0 }} />
);

// ── Two-column section row ─────────────────────────────────────────────────────
function Section({
  label,
  children,
  noHr,
}: {
  label: string;
  children: React.ReactNode;
  noHr?: boolean;
}) {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {!noHr && <HR />}
      <div style={{ display: "flex", width: "100%" }}>
        <p style={{ ...LABEL, flexShrink: 0, width: "42%", paddingTop: "4px" }}>{label}</p>
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </section>
  );
}

// ── Pain point card ────────────────────────────────────────────────────────────
function PainCard({ title, body }: { title: string; body: string }) {
  return (
    <div style={{
      flex: "1 0 0",
      background: "#212121",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      alignSelf: "stretch",
      minWidth: 0,
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p style={{ ...META_KEY, textTransform: "capitalize" }}>{title}</p>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.15)" }} />
      </div>
      <p style={{ ...BODY, fontSize: "14px", lineHeight: "1.37", color: TEXT_PRI }}>{body}</p>
    </div>
  );
}

// ── Design-process step ────────────────────────────────────────────────────────
function ProcessStep({
  number,
  title,
  body,
  image,
  imageAlt = "",
}: {
  number: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <HR />
      <div style={{ display: "flex", width: "100%" }}>
        <p style={{ ...LABEL, flexShrink: 0, width: "42%", paddingTop: "4px" }}>{number}</p>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400, fontSize: "24px", color: TEXT_PRI, lineHeight: "normal", margin: 0 }}>
            {title}
          </p>
          <p style={BODY}>{body}</p>
        </div>
      </div>
      {image && (
        <div style={{ width: "100%", borderRadius: "8px", overflow: "hidden" }}>
          <img src={image} alt={imageAlt} style={{ width: "100%", display: "block", objectFit: "cover" }} />
        </div>
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function AgenticAiPage() {
  return (
    <main style={{ background: BG, minHeight: "100vh", paddingTop: "83px" }}>

      {/* ── CONTENT WRAPPER ── */}
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "72px", paddingTop: "24px", paddingBottom: "120px" }}>

          {/* ═══════════════════════════════════
              SECTION 1 · Header row
          ═══════════════════════════════════ */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px" }}>
            <p style={{ ...LABEL, fontSize: "24px", letterSpacing: "0" }}>Case study</p>
            <p style={{ ...LABEL, fontSize: "24px", letterSpacing: "0" }}>B2B SaaS</p>
            <p style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 5.3vw, 76px)",
              color: TEXT_PRI,
              lineHeight: "normal",
              margin: 0,
              letterSpacing: "-0.02em",
            }}>
              Agentic Ai X Salesforce
            </p>
          </div>

          {/* ═══════════════════════════════════
              SECTION 2 · Hero illustration
          ═══════════════════════════════════ */}
          <div style={{
            width: "100%",
            height: "783px",
            overflow: "hidden",
            position: "relative",
            borderRadius: "4px",
          }}>
            {/* Gradient background */}
            <img
              src={imgHeroBg}
              alt=""
              style={{
                position: "absolute",
                top: "-27%",
                left: "-14%",
                width: "128%",
                height: "154%",
                objectFit: "cover",
                pointerEvents: "none",
                display: "block",
              }}
            />
            {/* UI screenshot overlay */}
            <img
              src={imgHeroUI}
              alt="IRIS Visual Design — Agentic AI interface"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                pointerEvents: "none",
                display: "block",
              }}
            />
          </div>

          {/* ═══════════════════════════════════
              SECTION 3 · Role / meta
          ═══════════════════════════════════ */}
          <div style={{ display: "flex", flexDirection: "column", gap: "52px" }}>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "20px",
              paddingBottom: "32px",
              borderBottom: "1px solid rgba(50,64,79,0.1)",
            }}>
              {/* Period */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={META_KEY}>Period</p>
                <p style={META_VAL}>1 year 3 months</p>
              </div>
              {/* Team */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={META_KEY}>Team</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <p style={META_VAL}>Malvika Nanda</p>
                  <p style={META_VAL}>Yun Easing</p>
                  <p style={META_VAL}>Riya Ghosh</p>
                </div>
              </div>
              {/* Role */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={META_KEY}>Role</p>
                <p style={META_VAL}>Product Designer</p>
              </div>
              {/* Skills */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={META_KEY}>Skills</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <p style={META_VAL}>Design Systems</p>
                  <p style={META_VAL}>Component Architecture</p>
                  <p style={META_VAL}>Product Strategy</p>
                </div>
              </div>
              {/* Tools */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={META_KEY}>Tools</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <p style={META_VAL}>Figma</p>
                  <p style={META_VAL}>Photoshop</p>
                  <p style={META_VAL}>GM3 Design System</p>
                </div>
              </div>
            </div>

            {/* ── Context ── */}
            <Section label="Context" noHr>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={BODY}>
                  The average sales rep is buried in administrative work—updating CRMs, logging calls, finding data—which shatters their focus and kills sales momentum. The problem isn't just the loss of time; it's the loss of flow.
                </p>
                <p style={BODY}>
                  We didn't set out to build another productivity tool. We set out to design Rosa, an AI partner designed not just to manage data, but to anticipate the next best move, highlight the right opportunities, and clear the path for what sales reps do best: build connections and close deals.
                </p>
              </div>
            </Section>

            {/* ── Big quote ── */}
            <div>
              <p style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(24px, 2.8vw, 40px)",
                color: TEXT_PRI,
                letterSpacing: "0.025em",
                textTransform: "capitalize",
                lineHeight: "normal",
                margin: 0,
              }}>
                What if a sales rep could spend their entire day selling?
              </p>
            </div>
          </div>

          {/* ═══════════════════════════════════
              SECTION 4 · Solution
          ═══════════════════════════════════ */}
          <Section label="Solution">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={BODY}>
                An AI agent that provides predictive guidance and automates the entire sales workflow, turning data into conversations.
              </p>
              <p style={BODY}>
                I led the design of Rosa, a SaaS platform that acts as a strategic partner for sales representatives. Rosa integrates with a rep's core tools to deliver a prioritized daily brief, automate research, and assist in crafting personalized outreach. From surfacing the top 1% of leads to providing a "Deal Memory" for every interaction, Rosa is designed to be the engine for sales success.
              </p>
            </div>
          </Section>

          {/* ═══════════════════════════════════
              SECTION 5 · The Problem
          ═══════════════════════════════════ */}
          <Section label="The Problem">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={BODY}>
                Sales reps are drowning in tasks, but starving for momentum.
              </p>
              <p style={BODY}>
                My research into the sales workflow revealed a universal frustration. Reps like our persona, "Jordan," start their day facing a noisy pool of 500+ leads and a mountain of administrative tasks. This creates a reactive, inefficient, and demoralizing work environment.
              </p>
            </div>
          </Section>

          {/* ═══════════════════════════════════
              SECTION 6 · Pain Points
          ═══════════════════════════════════ */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <HR />
            <p style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              color: TEXT_PRI,
              lineHeight: "normal",
              margin: 0,
            }}>
              Pain Points
            </p>
            <div style={{ display: "flex", gap: "24px", alignItems: "stretch" }}>
              <PainCard
                title="Decision Fatigue"
                body="With hundreds of leads, reps don't know where to focus first. They waste the first, most productive hour of their day manually filtering lists instead of engaging high-intent prospects."
              />
              <PainCard
                title='The "Research Tax"'
                body="Preparing for a single outreach call requires toggling across LinkedIn, Google News, industry blogs, and CRM history. This 1-hour, multi-tab research process for every key lead is a massive drain on productivity."
              />
              <PainCard
                title="The Connection Gap"
                body="A fragmented workflow across multiple apps makes it impossible to have a single, unified view of a client. Key details from past interactions get lost, and outreach feels generic, not personal."
              />
              <PainCard
                title="Key Insight"
                body="The solution wasn't a better dashboard. It was an intelligent agent that could perform the research and prioritization work for the rep, allowing them to start their day with action, not administration."
              />
            </div>
          </div>

          {/* ═══════════════════════════════════
              SECTION 7 · Design Process
          ═══════════════════════════════════ */}
          <Section label="The Design Process">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={BODY}>
                An AI-Augmented Workflow: From Concept to Prototype in Days, Not Weeks. To design a product centered on speed and intelligence, our process had to embody those same principles. Traditional design sprints felt too slow. Instead, I adopted a modern, AI-augmented workflow that leveraged generative AI as a foundational partner to accelerate the journey from a blank canvas to a testable prototype.
              </p>
            </div>
          </Section>

          {/* AI screenshots strip */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            width: "100%",
          }}>
            <div style={{ borderRadius: "8px", overflow: "hidden", aspectRatio: "686/247" }}>
              <img src={imgAiScreenshots} alt="AI design process screenshots" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ borderRadius: "8px", overflow: "hidden", aspectRatio: "686/254" }}>
              <img src={imgAiScreenshots} alt="AI design process screenshots" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", objectPosition: "right center" }} />
            </div>
          </div>

          {/* Process steps */}
          <ProcessStep
            number="1. AI as the Starting Block"
            title="AI as the Starting Block"
            body={`Instead of spending weeks on manual user flow diagrams and wireframes, I began by prompting AI with the core persona and problem. I used generative AI to: Brainstorm initial user flows for "a day in the life of a sales rep named Jordan." Generate multiple layout concepts for a proactive, AI-driven dashboard. Explore different information architectures for presenting complex data like lead scores and intent signals. This AI-first approach provided an incredible "base start," allowing us to bypass the most time-consuming parts of the initial ideation phase. It turned the "blank canvas problem" into a multiple-choice question, providing a rich set of concepts to refine.`}
          />

          <ProcessStep
            number="2. Rapid Prototyping in Figma"
            title="Rapid Prototyping in Figma"
            body={`Instead of spending weeks on manual user flow diagrams and wireframes, I began by prompting AI with the core persona and problem. I used generative AI to: Brainstorm initial user flows for "a day in the life of a sales rep named Jordan." Generate multiple layout concepts for a proactive, AI-driven dashboard. Explore different information architectures for presenting complex data like lead scores and intent signals. This AI-first approach provided an incredible "base start," allowing us to bypass the most time-consuming parts of the initial ideation phase. It turned the "blank canvas problem" into a multiple-choice question, providing a rich set of concepts to refine.`}
            image={imgRapidPrototyping}
            imageAlt="Rapid prototyping in Figma"
          />

          <ProcessStep
            number='3. Designing the Core Agent: "Ask Rosa"'
            title='Designing the Core Agent: "Ask Rosa"'
            body={`The centerpiece of the platform is "Ask Rosa," the central, conversational AI agent. This isn't a simple chatbot; it's designed to understand intent and execute multi-step tasks across integrated systems (CRM, email, calendar). The design process focused on mapping these agentic commands: Task Decomposition: we started by breaking down complex user requests into their fundamental actions. For example, the command "Get me prepped for my call with Delta Tech" was decomposed into a sequence: Query CRM for contact history → Scan Deal Memory for recent activity → Find related call recordings → Generate Smart Script with key talking points.`}
          />

          <ProcessStep
            number='4. Designing the "Sub-Agentic" Assistance'
            title='Designing the "Sub-Agentic" Assistance'
            body={`While "Ask Rosa" is the powerful command center, we also designed smaller, "sub-agentic" helpers that are embedded directly into the UI. These are proactive, contextual AI features that work silently in the background to automate specific tasks without needing an explicit command. The design involved identifying high-friction points in the workflow and embedding an AI solution: The "Lead Score" Agent constantly analyzes incoming leads, automatically scores them based on predefined criteria, and surfaces the justification for the score. The "Momentum" Agent monitors deal engagement. When it detects a key event (like a proposal being opened multiple times), it triggers the "Nudge" notification. The "CRM Hygiene" Agent scans for deals that haven't been updated and changes the priority status matrix to low priority.`}
          />

          {/* ═══════════════════════════════════
              SECTION 8 · The Solution walkthrough
          ═══════════════════════════════════ */}
          <Section label="The Solution">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={BODY}>
                A strategic partner that guides the entire sales motion. The Rosa platform is designed to be a rep's single source of truth and their primary strategic partner, turning hours of manual work into minutes of high-impact selling.
              </p>
            </div>
          </Section>

          {/* Solution dashboard image */}
          <div style={{ width: "100%", borderRadius: "8px", overflow: "hidden" }}>
            <img src={imgDashboard} alt="Closing the day Empowered — Rosa dashboard" style={{ width: "100%", display: "block", objectFit: "cover" }} />
          </div>

          {/* 1. Strategic Start */}
          <ProcessStep
            number="1. The Strategic Start"
            title="The Morning Brief"
            body="A strategic partner that guides the entire sales motion. The Rosa platform is designed to be a rep's single source of truth and their primary strategic partner, turning hours of manual work into minutes of high-impact selling. Jordan begins his day with Rosa's brief, instantly knowing which 7 of his 500 leads are showing the strongest intent signals, and which 3 stalled deals need immediate attention."
            image={imgMorningBrief}
            imageAlt="The Morning Brief — Rosa strategic start"
          />

          {/* 2. Intelligent Outreach */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <HR />
            <div style={{ display: "flex", width: "100%" }}>
              <p style={{ ...LABEL, flexShrink: 0, width: "42%", paddingTop: "4px" }}>2. The Intelligent Outreach</p>
              <p style={BODY}>
                Jordan clicks on a high-score lead. Rosa provides the full research briefing and suggests a personalized email draft based on the lead's recent activity. Jordan tweaks it and sends. The entire flow, from qualification to outreach, takes under 10 minutes.
              </p>
            </div>
          </div>

          {/* 3. Momentum Nudge */}
          <ProcessStep
            number="3. The Momentum Nudge"
            title="Nudges That Keep Momentum Alive"
            body={`Later, Rosa detects the lead has opened the proposal twice and sends a notification: "Proposal opened by Delta's VP twice in the past hour. Loop in AE before the window closes?" A deal acceleration moment is created.`}
            image={imgMomentumNudge}
            imageAlt="Nudges That Keep Momentum Alive"
          />

          {/* 4. Assistive Canvas */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <HR />
            <div style={{ display: "flex", width: "100%" }}>
              <p style={{ ...LABEL, flexShrink: 0, width: "42%", paddingTop: "4px" }}>4. Assistive Canvas</p>
              <p style={BODY}>
                Designing a modular, customizable dashboard that would serve as the rep's "mission control." We wanted to keep layout simple needs: Prioritized Tasks, At-Risk Deals, Key Metrics, and an AI Activity Feed. The key innovation was making these blocks both AI-curated and user-configurable, allowing reps to arrange their workspace to match their personal workflow.
              </p>
            </div>
          </div>

          {/* ═══════════════════════════════════
              SECTION 9 · Outcome
          ═══════════════════════════════════ */}
          <Section label="The Outcome">
            <p style={BODY}>
              By automating admin work and providing predictive guidance, Rosa fundamentally changes the nature of the sales role.
            </p>
          </Section>

          {/* Outcome diagram — Before / With Rosa */}
          <div style={{ width: "100%", aspectRatio: "3568/1900", borderRadius: "8px", overflow: "hidden" }}>
            <img
              src={imgOutcomeDiagram}
              alt="Before and With Rosa — workflow comparison"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Outcome illustration */}
          <div style={{ width: "100%", height: "783px", overflow: "hidden", position: "relative", borderRadius: "4px" }}>
            <img
              src={imgOutcomeFrame}
              alt=""
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", display: "block" }}
            />
          </div>

          {/* ═══════════════════════════════════
              SECTION 10 · Reflection
          ═══════════════════════════════════ */}
          <Section label="Reflection">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={BODY}>
                This project taught me that the future of enterprise AI isn't just automation, but anticipation. Designing Rosa required a shift from creating interfaces that display data to designing systems that provide predictive, actionable guidance. It's about empowering the user to make the best next move, every time.
              </p>
              <p style={BODY}>
                The biggest design challenge was building trust in the AI's autonomy. A sales rep's relationships are their most valuable asset; they need to trust that the AI is enhancing, not risking, those relationships. We solved this by designing for a "glass box" AI: for every recommendation, Rosa shows the "why" behind it. For all external communication, we kept a "human-in-the-loop" model, where the rep gives the final approval.
              </p>
              <p style={BODY}>
                If I were to continue this project, I would focus on the "AI Coaching" aspect. I'd explore using sentiment analysis on call recordings to provide reps with personalised feedback on their conversations, helping them improve their technique over time. This would evolve Rosa from a strategic partner into a true career coach, fully realising the vision of a system built for Momentum, Connection, and Success.
              </p>
            </div>
          </Section>

          {/* ═══════════════════════════════════
              Back link
          ═══════════════════════════════════ */}
          <div>
            <HR />
            <div style={{ paddingTop: "32px" }}>
              <Link
                href="/"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "-0.14px",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ffffff")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
              >
                ← Back to portfolio
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
