import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dzinr — Design Studio",
  description: "Award-winning design studio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
