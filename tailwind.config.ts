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
        xl: "1320px",
        "2xl": "1380px",
      },
    },
    extend: {
      colors: {
        paper: {
          DEFAULT: "#f6f3ec",   // warm cream
          50: "#fdfbf7",
          100: "#f6f3ec",
          200: "#ece7da",
          300: "#dfd9c5",
        },
        ink: {
          DEFAULT: "#0a0a10",
          900: "#0a0a10",
          800: "#1a1a22",
          700: "#2a2a36",
          600: "#3d3d4d",
          500: "#5a5a6e",
          400: "#7a7a90",
          300: "#a8a8b8",
          200: "#cccdd6",
          100: "#e8e8ec",
        },
        line: {
          DEFAULT: "rgba(10,10,16,0.10)",
          strong: "rgba(10,10,16,0.18)",
          faint: "rgba(10,10,16,0.06)",
        },
        // Vibrant, "bright" accents
        lime: { DEFAULT: "#c8ff00", dim: "#a3d100" },
        cobalt: { DEFAULT: "#2347ff", soft: "#5570ff" },
        coral: { DEFAULT: "#ff5d5f", soft: "#ff8e90" },
        violet2: { DEFAULT: "#7c3aed", soft: "#a78bfa" },
        cyan2: { DEFAULT: "#06d6c8", soft: "#5eede2" },
        amber2: { DEFAULT: "#ffb547", soft: "#ffcb7a" },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Times New Roman", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Consolas", "monospace"],
      },
      letterSpacing: {
        tighter2: "-0.04em",
        tightest: "-0.055em",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      boxShadow: {
        bento: "0 1px 2px rgba(10,10,16,0.04), 0 14px 40px -8px rgba(10,10,16,0.10)",
        rim: "inset 0 1px 0 rgba(255,255,255,0.7), 0 1px 2px rgba(10,10,16,0.05)",
        glow: "0 0 0 0.5px rgba(35,71,255,0.4), 0 0 32px rgba(35,71,255,0.15)",
        focus: "0 0 0 4px rgba(35,71,255,0.15)",
      },
      animation: {
        "marquee-x": "marquee-x 30s linear infinite",
        "marquee-y": "marquee-y 20s linear infinite",
        "spin-slow": "spin 26s linear infinite",
        "spin-slower": "spin 60s linear infinite",
        breathe: "breathe 2.6s ease-in-out infinite",
        "border-spin": "border-spin 4s linear infinite",
        "blink": "blink 1.2s steps(2) infinite",
        "shimmer": "shimmer 2.4s linear infinite",
        "rise": "rise 4s ease-in-out infinite",
      },
      keyframes: {
        "marquee-x": { to: { transform: "translateX(-50%)" } },
        "marquee-y": { to: { transform: "translateY(-50%)" } },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(0.86)", opacity: "0.55" },
        },
        "border-spin": {
          to: { "--angle": "360deg" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        rise: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      backgroundImage: {
        "grad-pop": "linear-gradient(135deg, #c8ff00 0%, #06d6c8 50%, #7c3aed 100%)",
        "grad-warm": "linear-gradient(135deg, #ffb547 0%, #ff5d5f 60%, #7c3aed 100%)",
        "grad-cobalt": "linear-gradient(135deg, #2347ff 0%, #7c3aed 100%)",
        "grad-citrus": "linear-gradient(135deg, #c8ff00 0%, #ffb547 100%)",
        "grad-mint": "linear-gradient(135deg, #06d6c8 0%, #c8ff00 100%)",
        "grad-paper":
          "linear-gradient(180deg, #fdfbf7 0%, #f6f3ec 60%, #ece7da 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
