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
        brand: {
          deepGreen: "#075B3A",
          darkGreen: "#06452D",
          freshGreen: "#188A4A",
          yellow: "#FFC928",
          warmYellow: "#F5B91E",
          cream: "#FFF9E9",
          softCream: "#F8F4E8",
          darkText: "#123B2A",
          mutedText: "#68736C",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        handwriting: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        soft: "0 10px 30px -5px rgba(7, 91, 58, 0.08)",
        card: "0 14px 34px rgba(7, 91, 58, 0.06)",
        cardHover: "0 20px 40px rgba(7, 91, 58, 0.12)",
        gold: "0 8px 24px rgba(255, 201, 40, 0.35)",
      },
      borderRadius: {
        card: "18px",
        pill: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
