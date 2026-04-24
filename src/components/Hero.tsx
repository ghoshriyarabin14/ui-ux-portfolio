"use client";

const sectorTags = [
  { label: "Fintech",        color: "#4ade80" },
  { label: "AI Design",      color: "#a78bfa" },
  { label: "SaaS",           color: "#60a5fa" },
  { label: "Health",         color: "#f87171" },
  { label: "Enterprise",     color: "#fbbf24" },
  { label: "Design System",  color: "#fb923c" },
];

export const Hero = () => (
  <section
    style={{
      background: "#000000",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      alignItems: "flex-start",
      overflow: "hidden",
      paddingBottom: "72px",
      paddingTop: "184px",
      paddingLeft: "24px",
      paddingRight: "24px",
      width: "100%",
    }}
  >
    {/* ── Heading block ── */}
    <div style={{ display: "flex", alignItems: "flex-start", width: "100%", flexShrink: 0 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-start", justifyContent: "center", flexShrink: 0 }}>

        {/* "Hi, i'm Riya" — Inter Medium 64px */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", flexShrink: 0 }}>
          <p style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            fontSize: "64px",
            color: "#ece8df",
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "normal",
            margin: 0,
          }}>
            Hi, i&apos;m Riya
          </p>
        </div>

        {/* "Creating Beyond the Product." — Frank Ruhl Libre Regular 52px */}
        <p style={{
          fontFamily: "var(--font-frank-ruhl), Georgia, serif",
          fontWeight: 400,
          fontSize: "52px",
          color: "#ece8df",
          whiteSpace: "nowrap",
          lineHeight: "normal",
          margin: 0,
        }}>
          Creating Beyond the Product.
        </p>
      </div>
    </div>

    {/* ── SubtitleRow ── */}
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      alignContent: "center",
      alignItems: "center",
      gap: "0 20px",
      overflow: "hidden",
      flexShrink: 0,
      width: "100%",
    }}>
      {/* Subtitle text */}
      <p style={{
        fontFamily: "var(--font-manrope), sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        color: "#ffffff",
        letterSpacing: "-0.14px",
        lineHeight: "normal",
        whiteSpace: "nowrap",
        flexShrink: 0,
        margin: 0,
      }}>
        I simplify and craft delight.
      </p>

      {/* Sector tags */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center", overflow: "hidden", flexShrink: 0 }}>
        {sectorTags.map((tag) => (
          <div
            key={tag.label}
            style={{
              background: "#212121",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              overflow: "hidden",
              paddingLeft: "14px",
              paddingRight: "14px",
              paddingTop: "7px",
              paddingBottom: "7px",
              borderRadius: "60px",
              flexShrink: 0,
            }}
          >
            <div style={{ flexShrink: 0, width: "8px", height: "8px", borderRadius: "50%", background: tag.color }} />
            <p style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#ffffff",
              letterSpacing: "-0.14px",
              lineHeight: "normal",
              whiteSpace: "nowrap",
              flexShrink: 0,
              margin: 0,
            }}>
              {tag.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
