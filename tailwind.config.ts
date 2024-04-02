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
        primary: "#6949FF",
        "color-purple_default": "#6949FF",
        "color-purple_darker": "#6949FF",
        "color-green_default": "#12D18E",
        warning: "#FACC15",
        failed: "#FFC107",
        error: "#F75555",
        hint: "#3EEDF7",
        disabled: "#D8D8D8",
        "active-card": "#F0EDFF",
        "nav-border-color": "#E0DFDF",
      },
      borderRadius: {
        primary: "50px",
      },
    },
  },
  plugins: [],
};
