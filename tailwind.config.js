/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          800: "#481210",
          700: "#4f1311",
          600: "#5b1513",
          500: "#681716",
          400: "#9a3d32",
          300: "#B75145",
          200: "#e2a69a",
          100: "#f0c4bd",
          50: "#f8e0db",
        },
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.6rem" }],
        xs: ["0.70rem", { lineHeight: "0.7rem" }],
        sm: ["0.8rem", { lineHeight: ".8rem" }],
        base: [".9rem", { lineHeight: "0.9rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.45rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.65rem", { lineHeight: "2rem" }],
        "3xl": ["1.975rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
