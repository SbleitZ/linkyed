import type { Config } from "tailwindcss";

import info from "./mis-links.json"
const {colors} = info;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors
    },
  },
  plugins: [],
};
export default config;
