import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  variants: {
    backgroundColor: ["active", "focus"],
    borderRadius: ["first", "last"],
    borderWidth: ["first", "last", "responsive"],
    extend: {},
  },
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Nuninto"],
      display: ["Nuninto"],
      body: ["Nuninto"],
    },
    screens: {
      sm: "700px",
      md: "900px",
    },

    borderWidth: {
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      12: "12px",
    },

    extend: {
      colors: {
        outline_gray: "#4F4F4F",
        violet: "#5e17eb",
        orange: "#fa9712",
        getting_started: {
          default: "#3EA5FF",
          lighter: "#78BFFD",
          darker: "#0088FF",
        },

        nouns: {
          default: "#925FFF",
          lighter: "#B492FF",
          darker: "#6B31EA",
        },
        basic_numbers: {
          default: "#6A85FF",
          lighter: "#98ABFF",
          darker: "#4364F9",
        },
        prick_up_your_ears: {
          default: "#F3722C",
          lighter: "#FF945A",
          darker: "#953E0F",
        },
        getting_started_assessment: {
          default: "#000814",
          lighter: "#113975",
          darker: "#000000",
        },

        color: {
          purple_default: "#666FFB",
          purple_lighter: "#7F86E8",
          purple_darker: "#2F39C6",
          purple_deep: "#070A3E",
        },
        assessment: {
          default: "#F96262",
        },
      },

      fontFamily: {
        fredoka: "FredokaOne",
        WillyntaScript: "WillyntaScript",
        poppins: "Poppins",
        poppinsLight: "Poppins-light",
        moreSugar: "MoreSugar-Regular",
        inter: "Inter-SemiBold",
      },
      margin: {
        xs: "0px 2px",
      },

      fontSize: {
        xxs: "0.75rem",
        xxxs: "0.6rem",
      },
      strokeWidth: {
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
      },

      lineHeight: {
        loose: "1.5",
      },
      rotate: {
        10: "10deg",
        15: "15deg",
      },
    },
  },
  plugins: [],
};
export default config;
