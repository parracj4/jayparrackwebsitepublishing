import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap", // Ensures text remains visible during font load
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "Jay Parrack | Custom Website Development",
  description:
    "Custom website development using Next.js. Fast, modern, and reliable websites built for your business. Deployed on Cloudflare for maximum performance.",
  keywords: [
    "web development",
    "Next.js",
    "React",
    "website design",
    "Cloudflare",
    "custom websites",
  ],
  authors: [{ name: "Jay Parrack" }],
  creator: "Jay Parrack",
  robots: "index, follow",
  openGraph: {
    title: "Jay Parrack | Custom Website Development",
    description:
      "Professional custom websites built with Next.js and deployed on Cloudflare.",
    type: "website",
    locale: "en_US",
    siteName: "Jay Parrack Website Publishing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Parrack | Custom Website Development",
    description:
      "Professional custom websites built with Next.js and deployed on Cloudflare.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider>
          <main className="relative">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}




