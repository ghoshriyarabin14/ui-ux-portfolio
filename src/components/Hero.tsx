"use client";

// Figma dot asset URLs — node 219:11074
const imgEllipse  = "https://www.figma.com/api/mcp/asset/2c9d29ee-20b7-436c-a213-713f15c686c9"; // Fintech
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/73afb71f-6472-4734-87a5-76dce16a5e8f"; // AI Design
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/bbc1a8e0-27e7-4a69-a662-3707427684fe"; // DesignSystem
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/21798b6d-4c72-4408-b371-9b1b5ddaa0f4"; // Healthcare
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/6b2580b9-74f2-4d9f-88b4-e156e2b6f8d6"; // Enterprise

const sectorTags = [
  { label: "Fintech",       dot: imgEllipse  },
  { label: "AI Design",     dot: imgEllipse1 },
  { label: "DesignSystem",  dot: imgEllipse2 },
  { label: "Healthcare",    dot: imgEllipse3 },
  { label: "Enterprise",    dot: imgEllipse4 },
];

export const Hero = () => (
  <section
    style={{
      background: "#ffffff",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      alignItems: "flex-start",
      overflow: "hidden",
      paddingBottom: "84px",
      paddingTop: "240px",
      paddingLeft: "24px",
      paddingRight: "24px",
      width: "100%",
    }}
  >
    {/* ── Heading block ── */}
    <div style={{ display: "flex", alignItems: "flex-start", width: "100%", flexShrink: 0 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-start", justifyContent: "center", flexShrink: 0 }}>

        {/* "Hi, i'm Riya" — Inter Medium 64px, text-center */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", flexShrink: 0 }}>
          <p style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            fontSize: "64px",
            color: "#000000",
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
          color: "#000000",
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
      gap: "0 16px",
      overflow: "hidden",
      flexShrink: 0,
      width: "100%",
    }}>
      {/* Subtitle text — Manrope Regular 14px */}
      <p style={{
        fontFamily: "var(--font-manrope), sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        color: "#000000",
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
              background: "#f6f6f6",
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
            {/* Dot — exact Figma image asset, 8×8px */}
            <div style={{ position: "relative", flexShrink: 0, width: "8px", height: "8px" }}>
              <img
                alt=""
                src={tag.dot}
                style={{ position: "absolute", display: "block", maxWidth: "none", width: "100%", height: "100%" }}
              />
            </div>
            {/* Label — Inter Regular 14px */}
            <p style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#000000",
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
