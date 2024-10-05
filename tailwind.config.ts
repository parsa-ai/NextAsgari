import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "black": "#000",
        "white": "#fff",
        "information": {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172E54",
        },
        "light": {
          50: "#F5F5F6",
          100: "#E5E6E8",
          200: "#CDCFD4",
          300: "#ABAFB5",
          400: "#81858F",
          500: "#6D727D",
          600: "#575A63",
          700: "#4A4D54",
          800: "#424448",
          900: "#3A3B3F",
          950: "#242528",
        },
          "success": {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
          950: "#052E14",
        },
        "error": {
        50: "#FEF2F2",
        100: "#FEE2E2",
        200: "#FECACA",
        300: "#FCA5A5",
        400: "#F87171",
        500: "#EF4444",
        600: "#DC2626",
        700: "#B91C1C",
        800: "#991B1B",
        900: "#7F1D1D",
        950: "#450A0A",
      },
      },
      fontFamily: {
        anjoman: ["var(--Anjoman)"],
      },
      fontWeight: {
        "light": "300",   
        "reqular": "500",   
        "bold": "800",   
      },
      backgroundImage: {
        'hero-pattern': "url('/image/header/Ellipse 1246.svg')",
      },
      borderRadius : {
        "4xl" :"7.5rem"
      },
      padding : {
        "7.5rem":"7.5rem",
      }
    },
  },
  plugins: [],
};
export default config;
