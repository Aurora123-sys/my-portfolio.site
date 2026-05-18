import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ravi Yoshitomo Tsunenori — Full-Stack & AI Systems Engineer",
    template: "%s — Ravi Yoshitomo Tsunenori",
  },
  description:
    "Independent full-stack, mobile, and AI systems engineer based in Tokyo. Building production SaaS, LLM agents, and high-performance interfaces.",
  metadataBase: new URL("https://ravi.dev"),
  openGraph: {
    title: "Ravi Yoshitomo Tsunenori — Full-Stack & AI Systems Engineer",
    description:
      "Tokyo-based freelance engineer. SaaS, AI agents, mobile, integrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <SmoothScroll />
        <CustomCursor />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
