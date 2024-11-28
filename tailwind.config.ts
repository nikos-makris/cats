/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector", '[data-color-scheme="dark"]'],
  theme: {
    extend: {
      colors: {
        "typography-color-primary": {
          light: "#000000",
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
        "typography-color-secondary": {
          light: "#3c3c4399",
          DEFAULT: "#3c3c4399",
          dark: "#ebebf599",
        },
        "typography-color-tertiary": {
          light: "#3c3c434d",
          DEFAULT: "#3c3c434d",
          dark: "#ebebf54d",
        },
        "background-color-primary": {
          light: "#ffffff",
          DEFAULT: "#ffffff",
          dark: "#000000",
        },
        "background-color-secondary": {
          light: "#f2f2f7",
          DEFAULT: "#f2f2f7",
          dark: "#1c1c1e",
        },
        "background-color-tertiary": {
          light: "#ffffff",
          DEFAULT: "#ffffff",
          dark: "#2c2c2e",
        },
        "background-color-elevated-primary": {
          light: "#f2f2f7",
          DEFAULT: "#f2f2f7",
          dark: "#1c1c1e",
        },
        "background-color-elevated-secondary": {
          light: "#f2f2f7",
          DEFAULT: "#f2f2f7",
          dark: "#2c2c2e",
        },
        "background-color-elevated-tertiary": {
          light: "#ffffff",
          DEFAULT: "#ffffff",
          dark: "#3a3a3c",
        },
        separator: {
          light: "#c6c6c8",
          DEFAULT: "#c6c6c8",
          dark: "#38383a",
        },
      },
    },
  },
  plugins: [],
};
