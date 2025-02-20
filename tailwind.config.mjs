/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#4c5d9b",
        title: "#4c5e8d",
        timeitem: "#d7e1fb",
        timeline: "#657cb8",
        git: "#899ad4",
        githov: "#7a8bc5",
        background: "#E2EAFC",
        special: "#E6AF2E",
        special2: "#d9a52c",
        footer: "#31363F",
        white: "#FFFFFF",
      },
      fontFamily: {
        Unbuntu : ["Unbuntu"],
        ChaeRegular: ["Chae-regular"],
        ChaeOutline: ["Chae-outline"],
      },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
  },
  plugins: [
    require('tailwindcss-motion'),
    require('daisyui'),
  ],
};
