import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";

// Wide image below portfolio — Figma node 286:8359 (aspect 3444/1306)
const imgImage11 = "https://www.figma.com/api/mcp/asset/f4f7e957-1ef2-440a-87e4-fb9d4c41275c";

export default function Home() {
  return (
    <main style={{ background: "#141414", minHeight: "100vh" }}>
      <Hero />
      <Portfolio />
      <div style={{ position: "relative", aspectRatio: "3444 / 1306", width: "100%" }}>
        <img
          src={imgImage11}
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", display: "block" }}
        />
      </div>
      <Footer />
    </main>
  );
}
