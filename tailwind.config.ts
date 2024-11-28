import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Main colors
        background: "#202020",  // Dark background
        card: "#0988f0",       // Blue for cards
        // Text colors
        "text-dark": "#202020",
        "text-gray": "#9a9a9a",
        "text-light": "#e9e9e9",
        "text-white": "#ffffff",
        // Accent colors
        accent1: "#ff573b",    // Orange-red
        accent2: "#ffb800",    // Yellow
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        rocket: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-20px)" },
        },
        blob: {
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
        pentagon: {
          "0%": { clipPath: 'polygon(50% 0%, 80% 40%, 65% 90%, 35% 90%, 20% 40%)' },
          "50%": { clipPath: 'polygon(50% 0%, 85% 35%, 70% 95%, 30% 95%, 15% 35%)' },
          "100%": { clipPath: 'polygon(50% 0%, 80% 40%, 65% 90%, 35% 90%, 20% 40%)' },
        },
      },
      animation: {
        "slide-up": "slide-up 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
        rocket: "rocket 1s ease-in-out infinite alternate",
        blob: "blob 8s ease-in-out infinite",
        pentagon: "pentagon 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
