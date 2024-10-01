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
      },
      fontFamily: {
        anjoman: ["var(--Anjoman)"],
      },
    },
  },
  plugins: [],
};
export default config;
