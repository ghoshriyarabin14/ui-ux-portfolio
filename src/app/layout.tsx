import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import ClickSpark from "@/components/ClickSpark";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Riya Ghosh → UI/UX Design Portfolio",
  description: "Riya Ghosh is a UI/UX Designer with 3 years of experience crafting digital experiences at Google and YouTube.",
  openGraph: {
    title: "Riya Ghosh → UI/UX Design Portfolio",
    description: "Riya Ghosh is a UI/UX Designer with 3 years of experience crafting digital experiences at Google and YouTube.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riya Ghosh → UI/UX Design Portfolio",
    description: "Riya Ghosh is a UI/UX Designer with 3 years of experience crafting digital experiences at Google and YouTube.",
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
        className={`${manrope.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-manrope), sans-serif", margin: 0, padding: 0, width: '100%', minHeight: '100vh' }}
      >
        <ClickSpark>
          <div style={{ width: '100%', minHeight: '100vh' }}>
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
