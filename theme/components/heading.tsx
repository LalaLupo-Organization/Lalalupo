import { defineStyleConfig } from "@chakra-ui/react";
export const Heading = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: "700",
    borderRadius: "base",
    letterSpacing: "0",
    lineHeight: "160%",
    _dark: {
      color: "_dark1",
    },
    // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    xxs: {
      fontSize: "18px",
    },
    xs: {
      fontSize: "20px",
    },
    sm: {
      fontSize: "24px",
    },
    md: {
      fontSize: "32px",
    },
    lg: {
      fontSize: "40px",
    },
    xl: {
      fontSize: "48px",
    },
  },

  // The default size and variant values
  defaultProps: {
    size: "md",
  },
});
