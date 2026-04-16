"use client";

// Figma dot asset URLs — node 367:32776
const imgEllipse  = "https://www.figma.com/api/mcp/asset/ec659f80-6b1d-4ea5-ad18-1a5c626248f3"; // Fintech
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/8c70f163-aaea-4006-8521-ddc1c1936a14"; // AI Design
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/5053108c-1c2d-494b-b26a-5d1238850f33"; // SaaS
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/4c20c9c2-893c-4c4e-b0f6-9d808ade6cee"; // Health
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/35912846-cbee-4621-9d0a-ce660752d077"; // Enterprise / Design System

const sectorTags = [
  { label: "Fintech",        dot: imgEllipse  },
  { label: "AI Design",      dot: imgEllipse1 },
  { label: "SaaS",           dot: imgEllipse2 },
  { label: "Health",         dot: imgEllipse3 },
  { label: "Enterprise",     dot: imgEllipse4 },
  { label: "Design System",  dot: imgEllipse4 },
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
            <div style={{ position: "relative", flexShrink: 0, width: "8px", height: "8px" }}>
              <img
                alt=""
                src={tag.dot}
                style={{ position: "absolute", display: "block", maxWidth: "none", width: "100%", height: "100%" }}
              />
            </div>
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
