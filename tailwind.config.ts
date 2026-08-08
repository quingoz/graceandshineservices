import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A3B82", // Primary Blue from logo
          dark: "#021B43", // Primary Dark / Naval Blue from logo
          light: "#1557B0", // Lighter variant
        },
        sky: {
          DEFAULT: "#38BDF8", // Accent Sky / Light Blue from logo
          light: "#7DD3FC",
          dark: "#0284C7",
        },
        neutral: {
          DEFAULT: "#4A5568", // Elegant gray
          dark: "#2D3748",
          light: "#718096",
          surface: "#F7FAFC", // Light gray surface
        },
        base: {
          DEFAULT: "#FFFFFF", // White - Cleanliness & Freshness
        },
        accent: {
          DEFAULT: "#D4AF37", // Accent Gold from logo - Stars, subtle borders, highlighted buttons
          light: "#E5C158",
          dark: "#B8960C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      animation: {
        "twinkle": "twinkle 3s ease-in-out infinite",
        "twinkle-delayed": "twinkle 3s ease-in-out 1.5s infinite",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
