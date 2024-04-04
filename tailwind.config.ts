/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray_default: "#686868",
        gray_lighter: "#D8D8D8",
        primary: "#6949FF",
        "color-purple_default": "#6949FF",
        "color-purple_darker": "#6949FF",
        "color-green_default": "#12D18E",
        "color-green_lighter": "#D9FFE3",
        warning: "#FACC15",
        failed: "#FFC107",
        error: "#F75555",
        error_lighter: "#FFD9DB",
        hint: "#3EEDF7",
        disabled: "#F8F7F7",
        "disabled-text": "#BAB7B74D",
        "active-card": "#F0EDFF",
        "nav-border-color": "#E0DFDF",
        "light-blue": "rgba(36, 107, 253, 0.08)",
      },
      borderRadius: {
        primary: "7px",
      },
    },
  },
  plugins: [],
};
