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
        md: "2rem",
        xl: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        // base
        cream: {
          50: "#fcf9f5",
          100: "#faf6f1",
          200: "#f3ece3",
          300: "#e9dccd",
        },
        ink: {
          DEFAULT: "#14141c",
          900: "#0b0d1a",
          800: "#14162a",
          700: "#1f2138",
          600: "#2b2e4a",
          500: "#4a4a5e",
          400: "#8a8a9c",
          300: "#b6b6c8",
          200: "#dcdce4",
        },
        // accent
        rose: { 400: "#f4b8c6", 500: "#f48fb1", 600: "#ff6b8a" },
        lav: { 400: "#dcc8ff", 500: "#c9b6e8", 600: "#a892d8" },
        sky2: { 400: "#bfe1ec", 500: "#a8d2e0", 600: "#78b8cd" },
        mint: { 400: "#cdedd6", 500: "#b9e3c7" },
        amber2: { 400: "#fae3bd", 500: "#f5c992" },
        electric: { 500: "#7c5cff", 600: "#6347e0" },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Times New Roman", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Consolas", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.035em",
        tight2: "-0.025em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,20,28,0.04), 0 2px 8px rgba(20,20,28,0.04)",
        glow: "0 20px 60px rgba(20,20,28,0.12)",
        spotlight: "0 0 60px rgba(124, 92, 255, 0.25)",
      },
      animation: {
        "marquee-x": "marquee-x 50s linear infinite",
        "spin-slow": "spin 18s linear infinite",
        float: "float 8s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "trickle": "trickle 1.6s ease-in-out infinite",
      },
      keyframes: {
        "marquee-x": {
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(1.5deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(0.8)" },
        },
        trickle: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(300%)" },
        },
      },
      backgroundImage: {
        "grad-aurora":
          "linear-gradient(135deg, #f4b8c6 0%, #c9b6e8 45%, #a8d2e0 100%)",
        "grad-warm":
          "linear-gradient(135deg, #ffd9c2 0%, #f4b8c6 50%, #c9b6e8 100%)",
        "grad-cool":
          "linear-gradient(135deg, #a8d2e0 0%, #c9b6e8 60%, #f4b8c6 100%)",
        "grad-electric":
          "linear-gradient(135deg, #7c5cff 0%, #ff6b8a 100%)",
        "grad-mint":
          "linear-gradient(135deg, #b9e3c7 0%, #a8d2e0 100%)",
        "grad-dark":
          "linear-gradient(180deg, #0b0d1a 0%, #14162a 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
