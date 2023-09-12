import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "color-bg": "var(---color-bg)",
        "color-bg-variant": "var(---color-bg-varaint)",
      },
      colors: {
        "color-light": "var(---color-light)",
        "color-bg": "var(---color-bg)",
        "color-priamry": "var(---color-primary)",
      },
      gridTemplateColumns: {
        about: "35% 50%",
        about_sm: "1fr 1fr",
        fr1: "1fr 1fr",
        cantact: "30% 58%",
      },
      backgroundImage: {
        about:
          "linear-gradient(45deg,transparent,var(--color-primary),transparent)",
      },
    },
  },
  plugins: [],
};
export default config;
