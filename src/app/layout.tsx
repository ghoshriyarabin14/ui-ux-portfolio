import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond, Frank_Ruhl_Libre, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import ClickSpark from "@/components/ClickSpark";
import { CursorPill } from "@/components/CursorPill";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Closest Google Font match to "Rhymes Text Light"
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-rhymes",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Exact font used in Figma for the About modal heading
const frankRuhlLibre = Frank_Ruhl_Libre({
  variable: "--font-frank-ruhl",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Riya Ghosh → UI/UX Design Portfolio",
  description:
    "A multidisciplinary Designer with 4+ years of experience translating business goals into user-centric products.",
  openGraph: {
    title: "Riya Ghosh → UI/UX Design Portfolio",
    description:
      "A multidisciplinary Designer with 4+ years of experience translating business goals into user-centric products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riya Ghosh → UI/UX Design Portfolio",
    description:
      "A multidisciplinary Designer with 4+ years of experience translating business goals into user-centric products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis">
      <body
        className={`${manrope.variable} ${cormorantGaramond.variable} ${frankRuhlLibre.variable} ${inter.variable} antialiased`}
        style={{
          fontFamily: "var(--font-manrope), sans-serif",
          margin: 0,
          padding: 0,
          width: "100%",
          minHeight: "100vh",
          background: "#ffffff",
          color: "#000000",
        }}
      >
        <CursorPill />
        <ClickSpark sparkColor="#000000">
          <div style={{ width: "100%", minHeight: "100vh" }}>
            <SmoothScroll>
              <Navbar />
              {children}
            </SmoothScroll>
          </div>
        </ClickSpark>
      </body>
    </html>
  );
}
