"use client";

// ─── Figma asset URLs · node 219:11020 ───────────────────────────────────────
const imgImage1       = "https://www.figma.com/api/mcp/asset/69050293-b842-4569-9692-20145516bc30";
const imgGraphicEl    = "https://www.figma.com/api/mcp/asset/0e067d8f-f2ae-45fb-8c69-3181dd1f3274";
const imgFrame28      = "https://www.figma.com/api/mcp/asset/648ff194-6b77-4af7-84fa-87285be9d04c";
const imgArrowOutward = "https://www.figma.com/api/mcp/asset/96a65acf-ed8a-486a-869b-3b2b174d0cd1";
const imgIcon         = "https://www.figma.com/api/mcp/asset/e4e7f6ef-2955-4757-a9bd-1cf527a946aa";

// ─── Shared text styles (exact Figma values) ─────────────────────────────────
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
    color: "#000000",
    letterSpacing: "-0.7px",
    lineHeight: "normal",
    margin: 0,
    whiteSpace: "nowrap",
  } as React.CSSProperties,
  category: {
    fontFamily: "var(--font-inter), sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    color: "#757575",
    lineHeight: "normal",
    margin: 0,
    whiteSpace: "nowrap",
  } as React.CSSProperties,
};

// ─── Card header ─────────────────────────────────────────────────────────────
function CardHeader({ label, title, category }: { label: string; title: string; category: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", flexShrink: 0 }}>
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
      background: "#ffffff",
      paddingTop: "0",
      paddingBottom: "80px",
      paddingLeft: "24px",
      paddingRight: "24px",
      overflowX: "hidden",
    }}
  >
    {/* Row — two 696 px columns, 24 px gap */}
    <div style={{ display: "flex", gap: "24px", alignItems: "flex-start", width: "100%" }}>

      {/* ════════════════════════════════════════════════
          LEFT COLUMN  ·  flex-col · gap-24px
      ════════════════════════════════════════════════ */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", flexShrink: 0, width: "calc(50% - 12px)" }}>

        {/* ── Card 1 · Agentic AI × Salesforce · h-785px ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", height: "785px" }}>
          <CardHeader label="Case Study" title="Agentic AI × Salesforce" category="Enterprise UX" />

          {/* Image block: bg-black, flex-1, overflow-clip */}
          <div data-cursor-label="VIEW CASE STUDY" style={{ flex: "1 0 0", background: "#000000", overflow: "hidden", position: "relative", minHeight: 0, cursor: "none" }}>

            {/* Background photo · h-656px · left-[-260px] · w-1312px */}
            <div style={{ position: "absolute", height: "656px", left: "-260px", top: 0, width: "1312px" }}>
              <img
                src={imgImage1}
                alt=""
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
              />
            </div>

            {/* Live Mode white card · h-904px · left-[-208px] · top-[-143px] · w-1285px */}
            <div style={{ position: "absolute", background: "white", height: "904px", left: "-208px", top: "-143px", width: "1285px", overflowX: "clip", overflowY: "auto" }}>

              {/* Graphic element — centered, rotated 180° */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "calc(50% + 68px)",
                  transform: "translateY(-50%)",
                  aspectRatio: "1285 / 1062",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
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

              {/* Menu icon · inset 5.3% 86.69% 92.55% 11.44% */}
              <div style={{ position: "absolute", top: "5.3%", left: "11.44%", right: "86.69%", bottom: "92.55%", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "25%", bottom: "25%", left: "12.5%", right: "12.5%" }}>
                  <img src={imgIcon} alt="" style={{ position: "absolute", width: "100%", height: "100%", maxWidth: "none" }} />
                </div>
              </div>

              {/* Title · Manrope SemiBold 48px · #2e3450 */}
              <p
                style={{
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
                }}
              >
                Agentic Ai X Salesforce
              </p>
            </div>
          </div>
        </div>

        {/* ── Card 2 · Google Material Design System ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <CardHeader label="Case Study" title="Google Material Design System" category="Design System" />
          {/* Image block · bg-[#e8e8f7] · h-961px */}
          <div data-cursor-label="VIEW CASE STUDY" style={{ background: "#e8e8f7", height: "961px", flexShrink: 0, width: "100%", cursor: "none" }} />
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          RIGHT COLUMN  ·  flex-col · gap-16px · h-1859px
      ════════════════════════════════════════════════ */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          height: "1859px",
          flexShrink: 0,
          width: "calc(50% - 12px)",
        }}
      >
        {/* ── Card 3 header · OTT Sports Cards · Youtube TV ── */}
        <CardHeader label="LIVE" title="OTT Sports Cards · Youtube TV" category="Design System" />

        {/* Image block · bg-[#c9caff] · h-967px — links to microsite */}
        <a
          href="/work/ott-sports-cards"
          data-cursor-label="VIEW CASE STUDY"
          style={{ background: "#c9caff", height: "967px", flexShrink: 0, width: "100%", cursor: "none", display: "block", textDecoration: "none" }}
        />

        {/* ── Card 4 · Tetris Console · h-785px ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", height: "785px" }}>
          <CardHeader label="Case Study" title="Tetris Console" category="Product Design" />

          {/* Image block · flex-1 · exact image offsets from Figma */}
          <div data-cursor-label="VIEW CASE STUDY" style={{ flex: "1 0 0", position: "relative", minHeight: 0, overflow: "hidden", cursor: "none" }}>
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
          </div>
        </div>
      </div>
    </div>
  </section>
);
