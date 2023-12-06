import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: "#5964E0",
        lightViolet: "#939BF4",
        darkBlue: "#19202D",
        midnight: "#121721",
        snowy: "#ffffff",
        lightGrey: "#F4F6F8",
        grey: "#9DAEC2",
        darkGrey: "#6E8098",
      },
    },
  },
  plugins: [],
};
export default config;
