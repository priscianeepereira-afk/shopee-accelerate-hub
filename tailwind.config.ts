import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./design-system/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tokens principais do Bloom expostos via CSS vars em globals.css
        primary: "hsl(var(--primary) / <alpha-value>)",
        bloom: {
          light: "#F5F0EB",
          dark: "#1A1A2E",
          brand: "#F15A5A",
          accent: "#C8B8D8",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
