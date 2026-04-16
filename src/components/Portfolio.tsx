"use client";

// ─── Figma asset URLs · node 286:8898 ────────────────────────────────────────
const imgImage1       = "https://www.figma.com/api/mcp/asset/37b41632-13c0-4e3c-b3cd-a8a0ac5493a7"; // Agentic bg
const imgGraphicEl    = "https://www.figma.com/api/mcp/asset/496202be-b237-426b-ac0c-7221ce025b97"; // Graphic element
const imgPayConsole   = "https://www.figma.com/api/mcp/asset/b679cf51-d296-4eac-843e-ae6b83c883e8"; // Pay Console screenshot
const imgOTT          = "https://www.figma.com/api/mcp/asset/d753075b-368a-442c-878e-ed257169ff66"; // OTT Josh Allen
const imgYTV          = "https://www.figma.com/api/mcp/asset/4beaac4a-e55e-4688-8ae0-607163e446d0"; // YTV Landing Page
const imgArrowOutward = "https://www.figma.com/api/mcp/asset/194fd10a-e7dd-477d-9b66-e0680185ef00"; // Arrow icon

// ─── Shared styles ────────────────────────────────────────────────────────────
const INTER = "var(--font-inter), sans-serif";

function CardHeader({
  label, title, category, labelSize = "13px",
}: {
  label: string; title: string; category: string; labelSize?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", flexShrink: 0 }}>
      <p style={{
        fontFamily: INTER, fontWeight: 400, fontSize: labelSize,
        color: "#757575", lineHeight: "normal", margin: 0, whiteSpace: "nowrap",
      }}>
        {label}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", overflow: "hidden" }}>
        <p style={{
          fontFamily: INTER, fontWeight: 600, fontSize: "28px",
          color: "#ffffff", letterSpacing: "-0.7px", lineHeight: "normal",
          margin: 0, whiteSpace: "nowrap",
        }}>
          {title}
        </p>
        <img src={imgArrowOutward} alt="" style={{ width: "40px", height: "40px", flexShrink: 0, display: "block" }} />
      </div>
      <p style={{
        fontFamily: INTER, fontWeight: 400, fontSize: "16px",
        color: "#ffffff", lineHeight: "normal", margin: 0, whiteSpace: "nowrap",
      }}>
        {category}
      </p>
    </div>
  );
}

export const Portfolio = () => (
  <section
    id="portfolio"
    style={{
      background: "#141414",
      paddingTop: "120px",
      paddingBottom: "80px",
      paddingLeft: "24px",
      paddingRight: "24px",
      overflowX: "hidden",
    }}
  >
    <div style={{ display: "flex", gap: "24px", alignItems: "flex-start", width: "100%" }}>

      {/* ════════════════════════════════════════
          LEFT COLUMN — 2 cards × 785px
      ════════════════════════════════════════ */}
      <div style={{
        display: "flex", flexDirection: "column", gap: "24px",
        flexShrink: 0, width: "calc(50% - 12px)",
      }}>

        {/* ── Card 1 · Agentic AI × Salesforce ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", height: "785px" }}>
          <CardHeader label="Case Study" title="Agentic AI × Salesforce" category="Enterprise UX" labelSize="14px" />

          <a
            href="/work/agentic-ai"
            data-cursor-label="VIEW CASE STUDY"
            style={{ flex: "1 0 0", background: "#ffffff", overflow: "hidden", position: "relative", minHeight: 0, cursor: "none", display: "block", textDecoration: "none" }}
          >
            {/* Background photo */}
            <div style={{ position: "absolute", height: "656px", left: "-260px", top: 0, width: "1312px" }}>
              <img src={imgImage1} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
            </div>
            {/* Live Mode white card */}
            <div style={{ position: "absolute", background: "white", height: "904px", left: "-208px", top: "-143px", width: "1285px", overflowX: "clip", overflowY: "hidden" }}>
              <div style={{
                position: "absolute", left: 0, right: 0,
                top: "calc(50% + 68px)", transform: "translateY(-50%)",
                aspectRatio: "1285 / 1062",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{ flexShrink: 0, height: "1062px", width: "1285px", transform: "rotate(180deg)", position: "relative" }}>
                  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
                    <img src={imgGraphicEl} alt="" style={{ position: "absolute", height: "129.31%", left: "-28.28%", top: "-6.3%", width: "160.25%", maxWidth: "none" }} />
                  </div>
                </div>
              </div>
              <p style={{
                position: "absolute", left: "calc(43.75% - 1.19px)", top: "calc(50% - 43px)",
                transform: "translateX(-50%)",
                fontFamily: "var(--font-manrope), sans-serif", fontWeight: 600, fontSize: "48px",
                color: "#2e3450", textAlign: "center", whiteSpace: "nowrap", lineHeight: "normal", margin: 0,
              }}>
                Agentic Ai X Salesforce
              </p>
            </div>
          </a>
        </div>

        {/* ── Card 2 · Pay Console X Eco System ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", height: "785px" }}>
          <CardHeader label="Case Study" title="Pay Console X Eco System" category="Case study" />

          <div
            data-cursor-label="VIEW CASE STUDY"
            style={{ flex: "1 0 0", background: "#000000", overflow: "hidden", position: "relative", minHeight: 0, cursor: "none" }}
          >
            <div style={{ position: "absolute", height: "518px", left: "31px", top: "80px", width: "635px", overflow: "hidden" }}>
              <img
                src={imgPayConsole}
                alt="Pay Console"
                style={{ position: "absolute", height: "105.93%", left: "-25.62%", top: "-11.71%", width: "166.95%", maxWidth: "none", pointerEvents: "none" }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* ════════════════════════════════════════
          RIGHT COLUMN — 2 cards × 785px
      ════════════════════════════════════════ */}
      <div style={{
        display: "flex", flexDirection: "column", gap: "24px",
        flexShrink: 0, width: "calc(50% - 12px)",
      }}>

        {/* ── Card 3 · OTT Sports Cards · Youtube TV ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", height: "785px" }}>
          <CardHeader label="LIVE" title="OTT Sports Cards · Youtube TV" category="Design System" />

          <a
            href="/work/ott-sports-cards"
            data-cursor-label="VIEW CASE STUDY"
            style={{ flex: "1 0 0", overflow: "hidden", position: "relative", minHeight: 0, cursor: "none", display: "block", textDecoration: "none", background: "linear-gradient(90deg, #1957be 0%, #0f3886 50.791%, #114099 97.414%)" }}
          >
            <div style={{ position: "absolute", height: "491px", left: 0, top: "93px", width: "873px" }}>
              <img src={imgOTT} alt="OTT Sports Cards" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
            </div>
          </a>
        </div>

        {/* ── Card 4 · YTV Landing Page ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", height: "785px" }}>
          <CardHeader label="Revamp" title="YTV Landing Page" category="Product Design" />

          <div
            data-cursor-label="VIEW CASE STUDY"
            style={{ height: "700px", flexShrink: 0, width: "100%", position: "relative", overflow: "hidden", cursor: "none" }}
          >
            <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
              <img
                src={imgYTV}
                alt="YTV Landing Page"
                style={{ position: "absolute", height: "113.84%", left: "-72.09%", top: "-13.91%", width: "163.21%", maxWidth: "none" }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);
