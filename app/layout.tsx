import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { Navbar } from "./components/Navbar";
import "./globals.css";
import { BlobBackground } from "./components/BlobBackground";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trey Madison",
  description: "Next.js app deployed on Cloudflare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${sourceSans.variable}`}>
      <body className="antialiased font-sans">
        <div className="fixed inset-0 -z-10">
          <BlobBackground />
        </div>
        <div className="relative z-0 min-h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
