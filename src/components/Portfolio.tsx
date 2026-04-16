"use client";

// ─── Figma asset URLs · node 286:8259 ────────────────────────────────────────
const imgImage1       = "https://www.figma.com/api/mcp/asset/b2dcbd48-0734-4bee-96c2-b4ddb3d2910b"; // Agentic hero bg
const imgGraphicEl    = "https://www.figma.com/api/mcp/asset/137b2ebc-96b7-48cd-9a67-d6590ae0043f"; // Graphic element
const imgImageBlock   = "https://www.figma.com/api/mcp/asset/2931e346-240a-4ff8-b270-a04d1e8971a8"; // OTT Sports Cards (NFL player)
const imgFrame28      = "https://www.figma.com/api/mcp/asset/146965fb-ef0c-4b9f-b3cf-4eacb169ff57"; // Tetris Console
const imgArrowOutward = "https://www.figma.com/api/mcp/asset/055669d9-bfc6-48a8-afa9-1c8661e2791c"; // Arrow icon

// ─── Shared text styles ───────────────────────────────────────────────────────
const S = {
  label: {
    fontFamily: "var(--font-inter), sans-serif",
    fontWeight: 400,
    fontSize: "13px",
    color: "#757575",
    lineHeight: "normal",
    margin: 0,
    whiteSpace: "nowrap",
  } as React.CSSProperties,
  title: {
    fontFamily: "var(--font-inter), sans-serif",
    fontWeight: 600,
    fontSize: "28px",
    color: "#ffffff",
    letterSpacing: "-0.7px",
    lineHeight: "normal",
    margin: 0,
    whiteSpace: "nowrap",
  } as React.CSSProperties,
  category: {
    fontFamily: "var(--font-inter), sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    color: "#ffffff",
    lineHeight: "normal",
    margin: 0,
    whiteSpace: "nowrap",
  } as React.CSSProperties,
};

// ─── Card header ─────────────────────────────────────────────────────────────
function CardHeader({ label, title, category }: { label: string; title: string; category: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", flexShrink: 0 }}>
      <p style={S.label}>{label}</p>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", overflow: "hidden" }}>
        <p style={S.title}>{title}</p>
        <img src={imgArrowOutward} alt="" style={{ width: "40px", height: "40px", flexShrink: 0, display: "block" }} />
      </div>
      <p style={S.category}>{category}</p>
    </div>
  );
}

// ─── Portfolio section ────────────────────────────────────────────────────────
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
          LEFT COLUMN
      ════════════════════════════════════════ */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", flexShrink: 0, width: "calc(50% - 12px)" }}>

        {/* ── Card 1 · Agentic AI × Salesforce · h-785px ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", height: "785px" }}>
          <CardHeader label="Case Study" title="Agentic AI × Salesforce" category="Enterprise UX" />

          <a href="/work/agentic-ai" data-cursor-label="VIEW CASE STUDY" style={{ flex: "1 0 0", background: "#ffffff", overflow: "hidden", position: "relative", minHeight: 0, cursor: "none", display: "block", textDecoration: "none" }}>
            {/* Background photo */}
            <div style={{ position: "absolute", height: "656px", left: "-260px", top: 0, width: "1312px" }}>
              <img
                src={imgImage1}
                alt=""
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
              />
            </div>

            {/* Live Mode white card */}
            <div style={{ position: "absolute", background: "white", height: "904px", left: "-208px", top: "-143px", width: "1285px", overflowX: "clip", overflowY: "auto" }}>
              {/* Graphic element — rotated 180° */}
              <div style={{
                position: "absolute", left: 0, right: 0,
                top: "calc(50% + 68px)", transform: "translateY(-50%)",
                aspectRatio: "1285 / 1062",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{ flexShrink: 0, height: "1062px", width: "1285px", transform: "rotate(180deg)", position: "relative" }}>
                  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
                    <img
                      src={imgGraphicEl}
                      alt=""
                      style={{ position: "absolute", height: "129.31%", left: "-28.28%", top: "-6.3%", width: "160.25%", maxWidth: "none" }}
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <p style={{
                position: "absolute",
                left: "calc(43.75% - 1.19px)",
                top: "calc(50% - 43px)",
                transform: "translateX(-50%)",
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "48px",
                color: "#2e3450",
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "normal",
                margin: 0,
              }}>
                Agentic Ai X Salesforce
              </p>
            </div>
          </a>
        </div>

        {/* ── Card 2 · Google Material Design System ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <CardHeader label="Case Study" title="Google Material Design System" category="Design System" />
          <div
            data-cursor-label="VIEW CASE STUDY"
            style={{ background: "#e8e8f7", height: "961px", flexShrink: 0, width: "100%", cursor: "none" }}
          />
        </div>
      </div>

      {/* ════════════════════════════════════════
          RIGHT COLUMN · h-1859px
      ════════════════════════════════════════ */}
      <div style={{
        display: "flex", flexDirection: "column", gap: "16px",
        height: "1859px", flexShrink: 0, width: "calc(50% - 12px)",
      }}>

        {/* ── Card 3 header · OTT Sports Cards ── */}
        <CardHeader label="LIVE" title="OTT Sports Cards · Youtube TV" category="Design System" />

        {/* OTT image · h-967px */}
        <a
          href="/work/ott-sports-cards"
          data-cursor-label="VIEW CASE STUDY"
          style={{ height: "967px", flexShrink: 0, width: "100%", cursor: "none", display: "block", textDecoration: "none", position: "relative", overflow: "hidden" }}
        >
          <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
            <img
              src={imgImageBlock}
              alt="OTT Sports Cards"
              style={{
                position: "absolute",
                height: "101.21%",
                left: "-97.99%",
                top: "-1.21%",
                width: "249.99%",
                maxWidth: "none",
              }}
            />
          </div>
        </a>

        {/* ── Card 4 · Tetris Console · h-785px ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", height: "785px" }}>
          <CardHeader label="Case Study" title="Tetris Console" category="Product Design" />

          <a href="/work/tetris-console" data-cursor-label="VIEW CASE STUDY" style={{ flex: "1 0 0", position: "relative", minHeight: 0, overflow: "hidden", cursor: "none", display: "block", textDecoration: "none" }}>
            <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
              <img
                src={imgFrame28}
                alt="Tetris Console"
                style={{
                  position: "absolute",
                  height: "127.77%",
                  left: "-83.19%",
                  top: "-13.88%",
                  width: "183.19%",
                  maxWidth: "none",
                }}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);
