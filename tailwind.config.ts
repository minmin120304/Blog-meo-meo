import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8efe6",
          100: "#f1dcc7",
          200: "#e8c29a",
          300: "#dc9f68",
          400: "#d68543",
          500: "#c86420",
          600: "#ac4b1c",
          700: "#8e381b",
          800: "#742f1c",
          900: "#5f281b"
        },
        ink: "#1e1c1a",
        mist: "#f6f1eb",
        pine: "#28463e",
        gold: "#f0bf62"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(31, 25, 18, 0.12)",
        card: "0 16px 40px rgba(31, 25, 18, 0.08)"
      },
      fontFamily: {
        display: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "serif"],
        sans: ["Avenir Next", "Segoe UI", "Helvetica Neue", "sans-serif"]
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top left, rgba(240,191,98,0.24), transparent 36%), radial-gradient(circle at bottom right, rgba(40,70,62,0.18), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
