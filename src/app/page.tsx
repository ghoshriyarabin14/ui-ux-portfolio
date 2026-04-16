import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <main style={{ background: "#000000", minHeight: "100vh" }}>
      <Hero />
      <Portfolio />
      <Footer />
    </main>
  );
}
