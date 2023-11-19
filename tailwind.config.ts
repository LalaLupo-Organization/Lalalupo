import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: ["10px", "14px"],
        sm: ["14px", "19px"],
        md: ["16px", "140%"],
        lg: ["18px", "140%"],
        xl: ["20px", "140%"],
        h1: [
          "48px",
          {
            lineHeight: "160%",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        h2: [
          "40px",
          {
            lineHeight: "160%",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        h3: [
          "32px",
          {
            lineHeight: "160%",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        h4: [
          "24px",
          {
            lineHeight: "160%",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        h5: [
          "20px",
          {
            lineHeight: "160%",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        h6: [
          "18px",
          {
            lineHeight: "160%",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "gradient-green":
          "linear-gradient(to right top, #71E3BB, #12D18E)",
        "gradient-yellow":
          "linear-gradient(to right top, #FFE580, #FACC15)",
        "gradient-blue":
          "linear-gradient(to right top, #5089FD, #246BFD)",
        "gradient-purple":
          "linear-gradient(to right top, #876DFF, #6949FF)",
        "gradient-teal":
          "linear-gradient(to right top, #18C6AB, #019B83)",
        "gradient-red":
          "linear-gradient(to right top, #FF8A9B, #FF5A5F)",
        "gradient-orange":
          "linear-gradient(to right top, #FFAB38, #FB9400)",
      },
      colors: {
        "primary-500": "#6949FF",
        "primary-400": "#876DFF",
        "primary-300": "#A592FF",
        "primary-200": "#C3B6FF",
        "primary-100": "#F0EDFF",
        "secondary-500": "#FFC107",
        "secondary-400": "#FFCD39",
        "secondary-300": "#FFDA6A",
        "secondary-200": "#FFE69C",
        "secondary-100": "#FFF9E6",
        sucess: "#12D18E",
        info: "#6949FF",
        warning: "#FACC15",
        error: "#F75555",
        disabled: "#D8D8D8",
        "disabled-button": "#543acc",
        "grey-900": "#212121",
        "grey-800": "#424242",
        "grey-700": "#616161",
        "grey-600": "#757575",
        "grey-500": "#9E9E9E",
        "grey-400": "#BDBDBD",
        "grey-300": "#E0E0E0",
        "grey-200": "#EEEEEE",
        "grey-100": "#F5F5F5",
        "grey-50": "#FAFAFA",
        "dark-1": "#181A20",
        "dark-2": "#1F222A",
        white: "#FFFFFF",
        black: "#000000",
        red: "#F44336",
        pink: "#E91E63",
        purple: "#9C27B0",
        "deep-purple": "#673AB7",
        indigo: "#3F51B5",
        blue: "#2196F3",
        "light-blue": "#03A9F4",
        cyan: "#00BCD4",
        teal: "#009688",
        green: "#4CAF50",
        "light-green": "#8BC34A",
        lime: "#CDDC39",
        yellow: "#FFEB3B",
        amber: "#FFC107",
        orange: "#FF9800",
        "deep-orange": "#FF5722",
        brown: "#795548",
        "blue-grey": "#607D8B",
        "purple-light": "#F9F8FF",
        "yellow-light": "#FFFCEB",
        "green-light": "#FFFCEB",
        "blue-light": "#F6F9FF",
        "teal-light": "#F2FFFD",
        "red-light": "#FFF7F8",
        "orange-light": "#FFF8ED",
        "purple-opacity": "#6949FF08",
        "yellow-opacity": "#FFD30008",
        "green-opacity": "#1BAC4B08",
        "blue-opacity": "#246BFD08",
        "teal-opacity": "#019B8308",
        "red-opacity": "#FF5A5F08",
        "orange-opacity": "#FF980008",
        "cyan-opacity": "#00BCD408",
      },
    },
  },
  plugins: [],
};
export default config;
