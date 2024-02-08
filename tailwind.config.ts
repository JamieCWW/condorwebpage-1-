import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "wave-svg": "url('/wave.svg')",
        "sm-logo": "url('/condorsm.png')",
      },
      fontFamily: {
        exo: ["Exo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
