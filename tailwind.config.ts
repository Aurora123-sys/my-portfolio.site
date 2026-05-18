import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        xl: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0b0b10",
          surface: "#13131b",
          card: "#1a1a24",
          raised: "#21212d",
        },
        ink: {
          DEFAULT: "#f5f5f7",
          muted: "#9d9daf",
          faint: "#5e5e72",
          dim: "#3d3d4d",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.07)",
          strong: "rgba(255,255,255,0.14)",
        },
        lime: {
          DEFAULT: "#c8ff00",
          dim: "#a3d100",
          glow: "rgba(200,255,0,0.4)",
        },
        coral: { DEFAULT: "#ff5d7c", soft: "#ff8aa1" },
        violet2: { DEFAULT: "#9d6cff", soft: "#b893ff" },
        cyan2: { DEFAULT: "#3df0d1", soft: "#7df5dd" },
        amber2: { DEFAULT: "#ffb547", soft: "#ffcb7a" },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Times New Roman", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Consolas", "monospace"],
      },
      letterSpacing: {
        tighter2: "-0.04em",
        tightest: "-0.05em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 0 30px rgba(200,255,0,0.18)",
        ring: "0 0 0 1px rgba(255,255,255,0.08) inset",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 60px rgba(0,0,0,0.4)",
      },
      animation: {
        "marquee-x": "marquee-x 36s linear infinite",
        "marquee-y": "marquee-y 22s linear infinite",
        "spin-slow": "spin 24s linear infinite",
        breathe: "breathe 2.6s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        "story-ring": "story-ring 3s linear infinite",
      },
      keyframes: {
        "marquee-x": { to: { transform: "translateX(-50%)" } },
        "marquee-y": { to: { transform: "translateY(-50%)" } },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(0.94)", opacity: "0.6" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "story-ring": {
          to: { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "grad-lime": "linear-gradient(135deg, #c8ff00 0%, #3df0d1 100%)",
        "grad-coral": "linear-gradient(135deg, #ff5d7c 0%, #9d6cff 100%)",
        "grad-fire": "linear-gradient(135deg, #ffb547 0%, #ff5d7c 100%)",
        "grad-cyber": "linear-gradient(135deg, #9d6cff 0%, #3df0d1 100%)",
        "grad-aurora": "linear-gradient(135deg, #c8ff00 0%, #3df0d1 35%, #9d6cff 70%, #ff5d7c 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
