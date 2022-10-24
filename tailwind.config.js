/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      screens: {
        lg: "1000px",
      },
    },
    fontFamily: {
      jet: ["JetBrains Mono"],
      inter: ["Inter"],
    },
    colors: {
      yellow: "#FEF08A",
      purple: "#A855F7",
      dark: {
        emerald: {
          100: "#34D399",
          20: "#34D399",
        },
        slate: {
          100: "rgba(255, 255, 255, 1)",
          80: "#e2e8f0",
          50: "#94a3b8",
        },
        gray: {
          100: "#111827",
          accent: {
            100: "#1f2937",
          },
        },
      },
      light: {
        emerald: {
          100: "#10b981",
          20: "#10b981",
        },
        slate: {
          100: "#f8fafc",
          90: "#f1f5f9",
        },
        gray: {
          //grey
          100: "#111827",
          80: "#1f2937",
          50: "#6b7280",
        },
      },
    },
    extend: {},
  },
  plugins: [],
};
