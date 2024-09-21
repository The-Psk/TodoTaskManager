import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        banana: {
          extend: "dark",
          // dark: {
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "2px",
              medium: "4px",
              large: "6px",
            },
            borderWidth: {
              small: "1px",
              medium: "1px",
              large: "2px",
            },
          },
          colors: {
            background: "#000000",
            // foreground: "#000000",
            focus: "#F3CA20",
            primary: {
              foreground: "#000000",
              DEFAULT: "#F3CA20",
            },
            secondary: {
              foreground: "#000000",
              DEFAULT: "#F3CA20",
            },
            success: {
              foreground: "#000000",
              DEFAULT: "#CDDE33",
            },
            content4: {
              DEFAULT: "#A7A7A6",
            },
            content3: {
              DEFAULT: "8c8d89",
            },
            // grey: "#71717A",
            // lightGray: "#343330",
          },
        },
        // },
      },
    }),
  ],
};
export default config;
