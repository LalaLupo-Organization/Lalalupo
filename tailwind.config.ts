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
        gray_reorder_bg: "#E7E4E4",
        gray_reorder_border: "#C1BDBD",
        gray_reorder_text: "#877F7F",
        primary: "#6949FF",
        color_purple_default: "#6949FF",
        color_purple_darker: "#6949FF",
        color_green_default: "#12D18E",
        color_green_lighter: "#D9FFE3",
        warning: "#FACC15",
        failed: "#FFC107",
        error: "#F75555",
        error_lighter: "#FFD9DB",
        hint: "#3EEDF7",
        disabled: "#F8F7F7",
        disabled_text: "#BAB7B74D",
        active_card: "#F0EDFF",
        nav_border_color: "#E0DFDF",
        light_blue: "rgba(36, 107, 253, 0.08)",
        vocabulary: "#FEFCEA",
        vocabulary_heading: "#996423",
        vocabulary_text: "#1B1B1B",
        tip: "#F0F6FE",
        tip_heading: "#5086DA",
      },
      borderRadius: {
        primary: "7px",
      },
    },
  },
}
