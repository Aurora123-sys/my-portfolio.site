import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
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
  title: { default: "Ravi Tsunenori — Senior Engineer", template: "%s · Ravi Tsunenori" },
  description: "Independent senior full-stack, AI systems, and mobile engineer. Decade of freelance practice.",
  metadataBase: new URL("https://ravi.dev"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <LanguageProvider>
          <SmoothScroll />
          <CustomCursor />
          <Nav />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
