import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      textAlign: {
        start: "start",
        end: "end",
      },
      margin: {
        start: "margin-inline-start",
        end: "margin-inline-end",
      },
      colors: {
        primary: "#0e7490",
        secondary: "#1e40af",
        tertiary: "#f9fafb",
        bg: "#121212",
        card: "#1E1E1E",
        text: "#FFFFFF",
        textSecondary: "#A0AEC0",
      },
      translate: {
        "rtl-1": "-0.25rem",
        "rtl--1": "0.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
