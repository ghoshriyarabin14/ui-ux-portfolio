import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Focus } from "@/components/Focus";
import { Featured } from "@/components/Featured";
import { Facts } from "@/components/Facts";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Portfolio />
      <Focus />
      <Featured />
      <Facts />
      <Footer />
    </main>
  );
}
