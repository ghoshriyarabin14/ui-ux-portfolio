import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Portfolio />
      <Footer />
    </main>
  );
}
