"use client";

import Link from "next/link";

// ── Hero assets (node 340:15622, fetched 2026-04-16) ──────────────────────────
const imgMcCaffreyAvatar   = "https://www.figma.com/api/mcp/asset/563dcd28-f890-47cd-8b4f-cebb0d3a344b";
const imgSF49ersLogo       = "https://www.figma.com/api/mcp/asset/f7a36ee9-b46e-497c-8d10-0719a8f94da0";
const imgPHIEaglesLogo     = "https://www.figma.com/api/mcp/asset/86ee25c9-79b8-4820-9775-4a1cbdd375dc";
const imgVideoMask         = "https://www.figma.com/api/mcp/asset/a2ad187c-af5d-46ca-9c4f-15d51909c866";
const imgVideoFrame        = "https://www.figma.com/api/mcp/asset/1a8112fe-1184-4f40-9c58-5e0e1993af0e";
const img201567            = "https://www.figma.com/api/mcp/asset/35a07cf2-a37f-416f-bcfb-04988febecda";
const imgTeamLogoSmall     = "https://www.figma.com/api/mcp/asset/79edc4d0-678d-4897-bdef-ed655da03129";
const imgJoshAllenMask     = "https://www.figma.com/api/mcp/asset/3b795b14-560f-4782-87c5-ac26e8be0d6a";
const imgJoshAllenPhoto    = "https://www.figma.com/api/mcp/asset/a49c539b-1d32-49b3-aac6-c87c11d4da24";
const imgBillsLogo         = "https://www.figma.com/api/mcp/asset/ba642269-c63a-4d78-a9f6-9b4dc5fb56a5";
const imgPulse             = "https://www.figma.com/api/mcp/asset/e953cfd4-23ba-403a-8900-971b8d4d276c";
const imgShape             = "https://www.figma.com/api/mcp/asset/e3937ac1-a7d5-4e84-944b-95c13ebe60a8";

// ── Case-study section assets (fetched 2026-04-16) ────────────────────────────
const imgHockeyPlayer  = "https://www.figma.com/api/mcp/asset/3eb94611-62be-40e2-ab74-99db05a8c0fc";
const imgComponents1   = "https://www.figma.com/api/mcp/asset/d0025bfc-2db5-4169-b7e6-63e018a90d6b";
const imgComponents2   = "https://www.figma.com/api/mcp/asset/ee8556dc-5948-4cb9-b74f-98950ed2c660";
const imgSpecsTable    = "https://www.figma.com/api/mcp/asset/9c6c9236-e143-45d6-ba8a-0900d9bffde6";
const imgCardsGrid     = "https://www.figma.com/api/mcp/asset/700ec937-8851-4dde-af9f-099ab5193a5e";
const imgCardsDark     = "https://www.figma.com/api/mcp/asset/069b83b9-ebd0-4d99-9fb5-2f8dbfbdfd36";
const imgAdditional1   = "https://www.figma.com/api/mcp/asset/ac43f491-e93a-4a6d-994a-c0fe0cf05a91";
const imgAdditional2   = "https://www.figma.com/api/mcp/asset/e3f4427c-5589-4de6-ab87-41ca061a47d3";

// ── Design tokens ─────────────────────────────────────────────────────────────
const CARD_BG    = "#0f0f0f";
const TEXT_PRI   = "#f1f1f1";
const TEXT_SEC   = "#aaa";
const DIVIDER    = "rgba(255,255,255,0.2)";

// ── Shared typography ──────────────────────────────────────────────────────────
const LABEL: React.CSSProperties = {
  fontFamily: "var(--font-inter), sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  color: "#ffffff",
  letterSpacing: "0.55px",
  textTransform: "capitalize",
  lineHeight: "normal",
  margin: 0,
};

const BODY: React.CSSProperties = {
  fontFamily: "var(--font-inter), sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  color: "#e2e2e2",
  lineHeight: "1.6",
  margin: 0,
};

const HR = () => (
  <div style={{ height: "1px", background: "rgba(255,255,255,0.12)", width: "100%", flexShrink: 0 }} />
);

function Section({
  label, children, noHr,
}: {
  label: string; children: React.ReactNode; noHr?: boolean;
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

function PainCard({ title, body }: { title: string; body: string }) {
  return (
    <div style={{
      flex: "1 0 0", background: "#212121", borderRadius: "12px",
      padding: "16px", display: "flex", flexDirection: "column", gap: "16px",
      alignSelf: "stretch", minWidth: 0,
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, fontSize: "14px",
          color: "#dbdbdb", letterSpacing: "0.55px", textTransform: "capitalize", margin: 0 }}>
          {title}
        </p>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.15)" }} />
      </div>
      <p style={{ ...BODY, fontSize: "14px", lineHeight: "1.37", color: "#ffffff" }}>{body}</p>
    </div>
  );
}

// ── Latest Highlights card (248.2 × 120.6 px) ─────────────────────────────────
function LatestHighlightsCard() {
  return (
    <div style={{
      background: CARD_BG, borderRadius: "16px",
      padding: "9.733px", width: "248.2px",
      boxShadow: "0.406px 1.622px 6.489px 0px rgba(80,80,80,0.2)",
      display: "flex", flexDirection: "column", gap: 0,
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "9.733px",
        alignItems: "center", width: "219px", margin: "0 auto" }}>
        {/* Avatar + player info */}
        <div style={{ display: "flex", gap: "9.733px", alignItems: "center", width: "100%" }}>
          <div style={{ width: "29.2px", height: "29.2px", borderRadius: "36px", overflow: "hidden",
            flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, background: "#aa0000" }} />
            <img src={imgMcCaffreyAvatar} alt="" style={{ position: "absolute", inset: 0,
              width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", gap: "1.217px", alignItems: "center", marginBottom: "1.217px" }}>
              <div style={{ width: "9.733px", height: "9.733px", position: "relative" }}>
                <img src={imgPulse} alt="" style={{ position: "absolute", inset: "8.33%",
                  width: "83.34%", height: "83.34%" }} />
              </div>
              <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "7.3px",
                color: TEXT_SEC, lineHeight: "10.544px" }}>Now</span>
            </div>
            <p style={{ fontFamily: "Roboto, sans-serif", fontWeight: 700, fontSize: "12.17px",
              color: TEXT_PRI, lineHeight: "17.033px", margin: 0 }}>
              C. McCaffrey breaks off a run for 20 yards.
            </p>
          </div>
        </div>
        {/* Divider */}
        <div style={{ height: "0.406px", background: DIVIDER, width: "100%" }} />
        {/* Stats row */}
        <div style={{ display: "flex", gap: "19.467px", justifyContent: "center", width: "100%" }}>
          {[["Car","10"],["Yds","50"],["TD","1"],["Avg","5.0"]].map(([lbl, val]) => (
            <div key={lbl} style={{ display: "flex", flexDirection: "column", gap: "2.433px",
              alignItems: "center", width: "42.583px" }}>
              <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "10.95px",
                color: TEXT_SEC, lineHeight: "15.817px", textAlign: "center" }}>{lbl}</span>
              <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "10.95px",
                color: TEXT_PRI, lineHeight: "15.817px", textAlign: "center" }}>{val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Scores by Period card (248.2 × 139.9 px) ──────────────────────────────────
function ScoresByPeriodCard() {
  return (
    <div style={{
      background: CARD_BG, borderRadius: "16px", padding: "9.733px", width: "248.2px",
      boxShadow: "0.406px 1.622px 6.489px 0px rgba(80,80,80,0.2)",
      display: "flex", flexDirection: "column", gap: "9.733px",
    }}>
      {/* Header row: SF 20 · 2nd 12:17 · PHI 7 */}
      <div style={{ display: "flex", gap: "7.3px", alignItems: "center", width: "219px", margin: "0 auto" }}>
        {/* SF */}
        <div style={{ display: "flex", gap: "9.733px", alignItems: "center", width: "82.733px" }}>
          <div style={{ width: "29.2px", height: "29.2px", borderRadius: "36px", overflow: "hidden", flexShrink: 0 }}>
            <img src={imgSF49ersLogo} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "10.95px", color: TEXT_PRI, lineHeight: "15.817px" }}>SF</span>
            <span style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: "19.47px", color: TEXT_PRI, lineHeight: "21.9px" }}>20</span>
          </div>
        </div>
        {/* Game clock */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center",
          width: "41.367px", fontFamily: "Roboto, sans-serif", fontSize: "10.95px", color: TEXT_SEC, lineHeight: "15.817px" }}>
          <span>2nd</span>
          <span>12:17</span>
        </div>
        {/* PHI */}
        <div style={{ display: "flex", gap: "9.733px", alignItems: "center", justifyContent: "flex-end", flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "10.95px", color: TEXT_PRI, lineHeight: "15.817px" }}>PHI</span>
            <span style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: "19.47px", color: TEXT_PRI, lineHeight: "21.9px" }}>7</span>
          </div>
          <div style={{ width: "29.2px", height: "29.2px", borderRadius: "36px", overflow: "hidden", flexShrink: 0 }}>
            <img src={imgPHIEaglesLogo} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
        </div>
      </div>
      {/* Divider */}
      <div style={{ height: "0.406px", background: DIVIDER }} />
      {/* Quarter table */}
      <div style={{ display: "flex", flexDirection: "column", gap: "9.733px", width: "228.733px", margin: "0 auto" }}>
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", gap: "2.433px", width: "163.033px" }}>
            {["1st","0th","0th","4th"].map((q, i) => (
              <div key={i} style={{ width: "38.933px", textAlign: "center", position: "relative" }}>
                <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "9.73px",
                  color: i === 2 ? TEXT_PRI : TEXT_SEC, lineHeight: "14.6px" }}>{q}</span>
                {i === 2 && (
                  <div style={{ position: "absolute", bottom: "-1px", left: "3.24px",
                    width: "16.222px", height: "0.811px", background: "red" }} />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Row 1: SF */}
        <div style={{ display: "flex", alignItems: "center", width: "228.733px" }}>
          <div style={{ width: "65.7px", display: "flex" }}>
            <div style={{ width: "14.6px", height: "14.6px", borderRadius: "18px", overflow: "hidden" }}>
              <img src={imgSF49ersLogo} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </div>
          <div style={{ display: "flex", gap: "2.433px", width: "163.033px" }}>
            {["17","Label","Label","—"].map((v, i) => (
              <div key={i} style={{ width: "38.933px", textAlign: "center" }}>
                <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "9.73px",
                  color: i === 2 ? TEXT_PRI : TEXT_SEC, lineHeight: "14.6px" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Row 2: PHI */}
        <div style={{ display: "flex", alignItems: "center", width: "228.733px" }}>
          <div style={{ width: "65.7px", display: "flex" }}>
            <div style={{ width: "14.6px", height: "14.6px", borderRadius: "18px", overflow: "hidden" }}>
              <img src={imgPHIEaglesLogo} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </div>
          <div style={{ display: "flex", gap: "2.433px", width: "163.033px" }}>
            {["0","Label","Label","—"].map((v, i) => (
              <div key={i} style={{ width: "38.933px", textAlign: "center" }}>
                <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "9.73px",
                  color: i === 2 ? TEXT_PRI : TEXT_SEC, lineHeight: "14.6px" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Key Plays card (248.2 × 70.2 px) ──────────────────────────────────────────
function KeyPlaysCard() {
  return (
    <div style={{
      background: CARD_BG, borderRadius: "16px", padding: "9.733px", width: "248.2px",
      boxShadow: "0.406px 1.622px 6.489px 0px rgba(80,80,80,0.2)",
      display: "flex", gap: "9.733px", alignItems: "center", overflow: "hidden",
    }}>
      {/* Video thumbnail */}
      <div style={{ width: "90.033px", height: "50.694px", borderRadius: "8px",
        overflow: "hidden", flexShrink: 0, position: "relative" }}>
        <div style={{
          position: "absolute", inset: 0,
          maskImage: `url('${imgVideoMask}')`,
          WebkitMaskImage: `url('${imgVideoMask}')`,
          maskSize: "222.222px 125px",
          WebkitMaskSize: "222.222px 125px",
          maskPosition: "0px 0px",
          WebkitMaskPosition: "0px 0px",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}>
          <img src={imgVideoFrame} alt="" style={{ width: "90.123px", height: "50.694px",
            display: "block", objectFit: "cover" }} />
        </div>
        {/* Player overlay */}
        <div style={{
          position: "absolute", left: "19.06px", top: 0,
          width: "70.972px", height: "50.694px",
          maskImage: `url('${imgVideoMask}')`,
          WebkitMaskImage: `url('${imgVideoMask}')`,
          maskSize: "222.222px 125px",
          WebkitMaskSize: "222.222px 125px",
          maskPosition: "-47px 0px",
          WebkitMaskPosition: "-47px 0px",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}>
          <img src={img201567} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        {/* Team logo */}
        <div style={{
          position: "absolute", left: "3.24px", top: "3.24px",
          width: "19.467px", height: "19.467px",
          maskImage: `url('${imgVideoMask}')`,
          WebkitMaskImage: `url('${imgVideoMask}')`,
          maskSize: "222.222px 125px",
          WebkitMaskSize: "222.222px 125px",
          maskPosition: "-8px -8px",
          WebkitMaskPosition: "-8px -8px",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}>
          <img src={imgTeamLogoSmall} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        {/* Shape */}
        <div style={{
          position: "absolute", left: 0, top: "-20.28px",
          width: "40.556px", height: "40.556px",
          maskImage: `url('${imgVideoMask}')`,
          WebkitMaskImage: `url('${imgVideoMask}')`,
          maskSize: "222.222px 125px",
          WebkitMaskSize: "222.222px 125px",
          maskPosition: "0px 50px",
          WebkitMaskPosition: "0px 50px",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}>
          <img src={imgShape} alt="" style={{ width: "100%", height: "100%", display: "block" }} />
        </div>
      </div>
      {/* Text */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.433px" }}>
        <p style={{ fontFamily: "Roboto, sans-serif", fontWeight: 700, fontSize: "12.17px",
          color: TEXT_PRI, lineHeight: "17.033px", margin: 0 }}>
          J. Hurts 1-yard rush for TD
        </p>
        <div style={{ display: "flex", gap: "4.867px", alignItems: "center" }}>
          <span style={{
            background: "rgba(0,0,0,0.05)", borderRadius: "4px", padding: "0 1.622px",
            fontFamily: "Roboto, sans-serif", fontWeight: 500, fontSize: "5.68px",
            color: "#606060", lineHeight: "8.922px",
          }}>🔥 TD</span>
          <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "8.52px",
            color: TEXT_SEC, lineHeight: "12.167px", whiteSpace: "nowrap" }}>3rd · 4:48</span>
        </div>
      </div>
    </div>
  );
}

// ── Hero banner (node 340:15138 — Buffalo-Bills-1920x1080, 438px) ──────────────
function HeroBanner() {
  return (
    <div style={{
      background: "#00338d",
      height: "438px",
      overflow: "hidden",
      position: "relative",
      width: "100%",
      flexShrink: 0,
    }}>
      {/* Team colour gradient — #024 base */}
      <div style={{
        position: "absolute", inset: 0,
        background: "#002244",
      }} />
      {/* Radial light on right side (simulates the mask-group soft-light ellipses) */}
      <div style={{
        position: "absolute",
        right: "-10%", top: "-40%",
        width: "80%", height: "160%",
        background: "radial-gradient(ellipse at 70% 50%, rgba(11,45,130,0.9) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        left: "-10%", bottom: "-20%",
        width: "60%", height: "120%",
        background: "radial-gradient(ellipse at 30% 80%, rgba(11,45,130,0.6) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      {/* Buffalo Bills watermark — mix-blend-mode: soft-light */}
      <div style={{
        position: "absolute",
        left: "50%", top: "50%",
        transform: "translate(-50%, -50%) translateX(-90px)",
        width: "536.295px", height: "358.187px",
        mixBlendMode: "soft-light",
        opacity: 0.5,
        pointerEvents: "none",
      }}>
        <img src={imgBillsLogo} alt="" style={{ width: "100%", height: "100%", display: "block" }} />
      </div>

      {/* ── Card column 1 — x=24.74, y=48.67, w=248.2 ── */}
      <div style={{
        position: "absolute",
        left: "24.74px", top: "48.67px",
        width: "248.2px",
        display: "flex", flexDirection: "column", gap: "6.489px",
        zIndex: 2,
      }}>
        <LatestHighlightsCard />
        <ScoresByPeriodCard />
        <KeyPlaysCard />
      </div>

      {/* ── Card column 2 — x=283, y=48.67, w=248.2 ── */}
      <div style={{
        position: "absolute",
        left: "283px", top: "48.67px",
        width: "248.2px",
        display: "flex", flexDirection: "column", gap: "6.489px",
        zIndex: 2,
      }}>
        <LatestHighlightsCard />
        <ScoresByPeriodCard />
        <KeyPlaysCard />
      </div>

      {/* ── Josh Allen player photo — masked, x=571, y=-5 ── */}
      <div style={{
        position: "absolute",
        left: "571px", top: "-5px",
        width: "1064.578px", height: "592.246px",
        maskImage: `url('${imgJoshAllenMask}')`,
        WebkitMaskImage: `url('${imgJoshAllenMask}')`,
        maskSize: "1064.578px 592.246px",
        WebkitMaskSize: "1064.578px 592.246px",
        maskPosition: "0px -0.003px",
        WebkitMaskPosition: "0px -0.003px",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        zIndex: 3,
      }}>
        <img
          src={imgJoshAllenPhoto}
          alt="Buffalo Bills player"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Multiply overlay on player */}
      <div style={{
        position: "absolute",
        left: "542.54px", top: "-35.32px",
        width: "1016.738px", height: "626.609px",
        background: "#07214a",
        maskImage: `url('${imgJoshAllenMask}')`,
        WebkitMaskImage: `url('${imgJoshAllenMask}')`,
        maskSize: "1064.578px 592.246px",
        WebkitMaskSize: "1064.578px 592.246px",
        maskPosition: "28.463px 30.318px",
        WebkitMaskPosition: "28.463px 30.318px",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        mixBlendMode: "multiply",
        opacity: 0.12,
        zIndex: 4,
      }} />
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function OTTSportsCards() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff", paddingTop: "83px" }}>

      {/* ── Go Back ── */}
      <div style={{ padding: "0 24px", paddingTop: "56px", display: "flex", justifyContent: "flex-start" }}>
        <Link href="/" style={{
          display: "flex", alignItems: "center", gap: "8px",
          color: "#c8c8c8", textDecoration: "none",
          fontFamily: "var(--font-inter), sans-serif", fontSize: "14px",
        }}>
          ← Go Back
        </Link>
      </div>

      {/* ── Title bar — System Design · Consumer · OTT Sports Cards ── */}
      <div style={{ padding: "72px 24px 0" }}>
        <div style={{
          display: "flex", alignItems: "center",
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 400, color: "#fff", whiteSpace: "nowrap",
          justifyContent: "space-between",
        }}>
          <span style={{ fontSize: "24px", flexShrink: 0 }}>System Design</span>
          <span style={{ fontSize: "24px", flexShrink: 0 }}>Consumer</span>
          <p style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "clamp(36px, 5.4vw, 76px)",
            color: "#fff", lineHeight: 1, margin: 0,
          }}>
            OTT Sports Cards
          </p>
        </div>
      </div>

      {/* ── Hero banner — 72px gap from title, 24px side padding (matches other case studies) ── */}
      <div style={{ padding: "72px 24px 0" }}>
        <HeroBanner />
      </div>

      {/* ── Meta row — Timeline / Team / Role / Skills / Tools ── */}
      <div style={{
        padding: "20px 24px",
        borderBottom: "1px solid rgba(50,64,79,0.1)",
        display: "flex", justifyContent: "space-between",
        flexWrap: "wrap", gap: "20px",
      }}>
        {[
          { label: "Timeline", lines: ["1 year 3 months"] },
          { label: "Team",     lines: ["Malvika Nanda", "Yun Easing", "Riya Ghosh"] },
          { label: "Role",     lines: ["Product Designer"] },
          { label: "Skills",   lines: ["Design Systems", "Component Architecture", "Product Strategy"] },
          { label: "Tools",    lines: ["Figma", "Photoshop", "GM3 Design System"] },
        ].map(({ label, lines }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={LABEL}>{label}</p>
            {lines.map((l) => (
              <p key={l} style={{ ...BODY, fontSize: "16px", color: "#fff", lineHeight: "1.3", margin: 0 }}>{l}</p>
            ))}
          </div>
        ))}
      </div>

      {/* ── Content sections ── */}
      <div style={{ padding: "64px 24px 100px", display: "flex", flexDirection: "column", gap: "64px" }}>

        <Section label="Context">
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={BODY}>
              {`When YouTube Sports expanded its OTT content, the design problem wasn't "what should a sports card look like." It was messier than that: how do you design for sports data when every sport tracks completely different things?`}
            </p>
            <p style={BODY}>
              An NFL live score, a Golf leaderboard, a Hockey game tracker, and a Fantasy league matchup share almost no structural DNA. The system had to handle them all — and end up as a single, live product at tv.youtube.com/welcome — without a separate design file for each sport.
            </p>
          </div>
        </Section>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <HR />
          <p style={{
            fontFamily: "var(--font-inter), sans-serif", fontWeight: 400,
            fontSize: "clamp(22px, 2.8vw, 40px)", color: "#fff",
            letterSpacing: "1px", textTransform: "capitalize", lineHeight: 1.35, margin: 0,
          }}>
            What If A Single Component Library Could Handle NFL Scores, Golf Leaderboards, And A Paid Fantasy League — Without Rebuilding Any Card From Scratch?
          </p>
        </div>

        <Section label="Initial Observation">
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={BODY}>
              I came into this project expecting a visual design problem and found a taxonomy problem. Every sport has its own vocabulary — NFL has yards and red zone conversions, cricket has run rates and DLS targets, F1 has gap-to-leader and pit stop strategy. Before designing anything, I needed to understand what each sport was actually asking the interface to communicate.
            </p>
            <p style={BODY}>
              When I audited the existing cards, the pattern was predictable in hindsight: designers had been building sport-by-sport with no shared molecule layer. A live score card for NFL and a live score card for NBA were essentially the same component, built twice by different people at different times. A layout change in one had never carried over to the other.
            </p>
          </div>
        </Section>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <p style={{ ...BODY, fontSize: "24px", color: "#fff" }}>Pain Points</p>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <PainCard title="No shared structure"
              body="Cards were built per sport from scratch. There was no molecule layer, so a layout fix in one card had to be manually replicated in others. Two designers could be working on visually identical components without knowing it." />
            <PainCard title="Two platforms, double the work"
              body="YouTube TV (YTV) and [PTC] had different display constraints. The approach at the time was separate designs per platform, which meant every card decision got made twice." />
            <PainCard title="Brand and UX Inconsistency"
              body="The lack of a system meant there was no single source of truth for the user experience. A score card for the NFL might behave slightly differently than one for Baseball, creating a fragmented and unpredictable user journey." />
            <PainCard title="Key Insight"
              body="The repeating elements across sports were always the same handful of things — a score, a team name, a player image, a stat, a timestamp, a status indicator. Everything else was variation on those six." />
          </div>
        </div>

        <Section label="Becoming The Fan">
          <p style={BODY}>
            I watched a lot of sport before designing. Not as a research exercise — I genuinely wanted to understand what matters moment to moment. Watching Soccer games while paying attention to how I was using score graphics on a second screen taught me things I wouldn&apos;t have found in a brief. The main one:{" "}
            <strong style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, color: "#fff" }}>
              good sports graphics know where you are in the game. Bad ones show you everything regardless.
            </strong>
          </p>
        </Section>

        {/* Hockey player — full bleed 403px */}
        <div style={{ position: "relative", height: "403px", overflow: "hidden",
          margin: "0 -24px", background: "#000" }}>
          <img src={imgHockeyPlayer} alt="Mikael Granlund — Becoming The Fan"
            style={{ position: "absolute", left: 0, top: "-19px",
              width: "100%", height: "783px", objectFit: "cover", objectPosition: "center 25%" }} />
        </div>

        <Section label="Exploration">
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={BODY}>
              We spent the first two weeks auditing the existing cards across all sports: mapping every element, identifying which variations were meaningful (different sports, different data) versus accidental (two designers solving the same problem independently).
            </p>
            <p style={BODY}>
              That audit produced the molecule candidate list. Any element that could be abstracted without losing its meaning became a molecule. Each molecule was then built as a robust, variant-driven component in Figma.
            </p>
          </div>
        </Section>

        {/* Frame 72 — exploration clip */}
        <div style={{ height: "403px", background: "#0a0a0a", overflow: "hidden" }}>
          <video
            src="/ott-exploration.mov"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "403px", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Component screenshots */}
        <div style={{ display: "flex", gap: "24px" }}>
          <div style={{ flex: 1, background: "#212121", padding: "10px", overflow: "hidden", minWidth: 0 }}>
            <img src={imgComponents1} alt="Component library" style={{ width: "100%", display: "block" }} />
          </div>
          <div style={{ flex: 1, background: "#212121", padding: "10px", overflow: "hidden",
            height: "409px", minWidth: 0 }}>
            <img src={imgComponents2} alt="Component detail"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>

        <Section label="Outcome">
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={BODY}>
                From Architecture to Production: A Live Design System Powering YouTube Sports.
              </p>
              <p style={BODY}>
                The result is not a theoretical library, but a living, breathing design system currently in production on YouTube TV Sports. I delivered an ecosystem of 500+ production-ready components, architected to handle the unique data structures of Golf, Hockey, Baseball, Basketball, and the NFL, including the specialized data modules for the paid Fantasy platform.
              </p>
              <p style={BODY}>
                This system was built from the ground up to be fully responsive and theme-aware, providing a consistent and polished user experience across all supported viewports and modes.
              </p>
            </div>
            <div style={{ background: "#131314", borderRadius: "12px", padding: "4px", overflow: "hidden" }}>
              <img src="https://www.figma.com/api/mcp/asset/50975c88-81c2-4689-885e-f9e642ac096b" alt="Specifications"
                style={{ width: "100%", display: "block", borderRadius: "8px" }} />
            </div>
          </div>
        </Section>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <HR />
          <p style={{
            fontFamily: "var(--font-inter), sans-serif", fontWeight: 400,
            fontSize: "clamp(22px, 2.8vw, 40px)", color: "#fff",
            letterSpacing: "1px", textTransform: "capitalize", lineHeight: 1.35, margin: 0,
          }}>
            500+ Components, From Architecture To Production: A Live Design System Powering YouTube Sports.
          </p>
        </div>

        {/* Components gif */}
        <div style={{ margin: "0 -24px", height: "534px", overflow: "hidden" }}>
          <video
            src="/ott-components.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "534px", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Full-bleed product image 1 — 534px */}
        <div style={{ margin: "0 -24px", height: "534px", overflow: "hidden", position: "relative" }}>
          <img src="https://www.figma.com/api/mcp/asset/e2264cdf-4d2f-4efe-b735-cb04b56aec09" alt="OTT Sports Cards — light mode"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
              objectPosition: "center top" }} />
        </div>

        {/* Full-bleed product image 2 — aspect 4096/1564 */}
        <div style={{ margin: "0 -24px", position: "relative", aspectRatio: "4096 / 1564" }}>
          <img src="https://www.figma.com/api/mcp/asset/552d440c-aa6f-4801-a7af-334abb9437a1" alt="OTT Sports Cards — dark mode"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        <Section label="Reflection">
          <p style={BODY}>
            Design systems work is mostly invisible. The 500+ components, the handoff matrix, the usage guidelines — none of that is what a viewer on YouTube ever sees. What they see is the landing page, the score cards, the live game ticker. The system exists entirely to make those things consistent and maintainable.
          </p>
        </Section>

        {/* Additional Project */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <HR />
          <div style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
            <p style={{ ...BODY, fontSize: "24px", color: "#fff", flexShrink: 0, width: "42%", margin: 0 }}>
              Additional Project
            </p>
            <div style={{ flex: 1, display: "flex", gap: "24px" }}>
              <a href="/" style={{ flex: 1, height: "349px", display: "block", position: "relative",
                overflow: "hidden", borderRadius: "4px", textDecoration: "none", background: "#000" }}>
                <img src={imgAdditional1} alt="" style={{ position: "absolute", left: "-194px",
                  top: 0, width: "979px", height: "490px", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(252,220,200,0.85) 0%, rgba(201,202,255,0.85) 100%)" }} />
                <p style={{ position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontFamily: "var(--font-manrope), sans-serif", fontWeight: 600,
                  fontSize: "clamp(18px, 2.4vw, 35px)", color: "#2e3450",
                  textAlign: "center", whiteSpace: "nowrap", margin: 0 }}>
                  Agentic Ai X Salesforce
                </p>
              </a>
              <a href="/work/tetris-console" style={{ flex: 1, height: "349px", display: "block",
                position: "relative", overflow: "hidden", borderRadius: "4px",
                textDecoration: "none", background: "#000" }}>
                <img src={imgAdditional2} alt="" style={{ position: "absolute",
                  left: "-83%", top: "-14%", width: "183%", height: "128%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(252,220,200,0.85) 0%, rgba(201,202,255,0.85) 100%)" }} />
                <p style={{ position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontFamily: "var(--font-manrope), sans-serif", fontWeight: 600,
                  fontSize: "clamp(18px, 2.4vw, 35px)", color: "#2e3450",
                  textAlign: "center", whiteSpace: "nowrap", margin: 0 }}>
                  Agentic Ai X Salesforce
                </p>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
