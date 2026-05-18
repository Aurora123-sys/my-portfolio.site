import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2.5rem",
        xl: "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1340px",
      },
    },
    extend: {
      colors: {
        // Bright editorial paper
        paper: {
          DEFAULT: "#fbf8f3",   // off-white base
          50: "#fffdf9",
          100: "#fbf8f3",
          200: "#f3eee4",
          300: "#e6dfd0",
        },
        ink: {
          DEFAULT: "#0a0a10",
          900: "#0a0a10",
          700: "#2a2a36",
          600: "#3d3d4d",
          500: "#5a5a6e",
          400: "#7a7a90",
          300: "#a8a8b8",
          200: "#d0d0d8",
        },
        line: {
          DEFAULT: "rgba(10,10,16,0.10)",
          strong: "rgba(10,10,16,0.18)",
          faint: "rgba(10,10,16,0.06)",
        },
        // Brand reds / dark band — direct from Printful palette
        coral: {
          DEFAULT: "#e94542",   // primary CTA red
          deep: "#c4382d",
          soft: "#ff7a6b",
        },
        forest: {
          DEFAULT: "#143936",   // dark band
          800: "#0d2a28",
          900: "#081a18",
        },
        // Glass accents
        rose:    { DEFAULT: "#f5b7c5", soft: "#fdcfd9" },
        lavender:{ DEFAULT: "#c7b8f0", soft: "#dfd2ff" },
        sky2:    { DEFAULT: "#bbd8f0", soft: "#d6e6f5" },
        mint:    { DEFAULT: "#c4ebd2", soft: "#dcf3e3" },
        amber2:  { DEFAULT: "#ffcf80", soft: "#ffe2ad" },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Times New Roman", "serif"],
        body:    ["var(--font-inter)",    "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)",     "Consolas", "monospace"],
        sans:    ["var(--font-inter)",    "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter2: "-0.04em",
        tightest: "-0.055em",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        bento: "0 1px 2px rgba(10,10,16,0.04), 0 14px 40px -8px rgba(10,10,16,0.10)",
        glass: [
          "inset 0 1px 0 rgba(255,255,255,0.95)",
          "inset 0 -1px 0 rgba(255,255,255,0.25)",
          "0 1px 2px rgba(10,10,16,0.04)",
          "0 14px 38px -6px rgba(10,10,16,0.16)",
          "0 36px 70px -12px rgba(10,10,16,0.22)",
        ].join(", "),
        cta: "0 1px 2px rgba(10,10,16,0.06), 0 16px 36px -6px rgba(233,69,66,0.45)",
      },
      animation: {
        "marquee-x": "marquee-x 30s linear infinite",
        breathe: "breathe 2.6s ease-in-out infinite",
        rise: "rise 5s ease-in-out infinite",
      },
      keyframes: {
        "marquee-x": { to: { transform: "translateX(-50%)" } },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(0.86)", opacity: "0.55" },
        },
        rise: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
