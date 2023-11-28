import { defineStyleConfig } from "@chakra-ui/react";
export const Text = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    borderRadius: "base",
    letterSpacing: "0",
    lineHeight: "140%",
    _dark: {
      color: "_dark1",
    },
    // <-- border radius is same for all variants and sizes
  },

  // Two sizes: sm and md
  sizes: {
    xxs: {
      fontSize: "10px",
      lineHeight: "auto",
    },
    xs: {
      fontSize: "12px",
      lineHeight: "auto",
    },
    sm: {
      fontSize: "14px",
    },
    md: {
      fontSize: "16px",
    },
    lg: {
      fontSize: "18px",
    },
    xl: {
      fontSize: "20px",
    },
  },

  // The default size and variant values
  defaultProps: {
    size: "md",
  },
});
