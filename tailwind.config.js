/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
