import { inputAnatomy } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const xl = defineStyle({
  fontSize: "lg",
  px: "4",
  h: "56px",
});

const sizes = {
  xl: definePartsStyle({ field: xl, addon: xl }),
};

const pill = definePartsStyle({
  field: {
    borderColor: "gray.200",
    background: "gray.50",
    color: "grey.500",
    borderRadius: "16px",
    width: "376px",
    height: "56px",

    // Let's also provide dark mode alternatives
    _dark: {
      borderColor: "gray.600",
      background: "gray.800",
    },
  },
  addon: {
    borderRadius: "16px",
    height: "56px",

    background: "gray.50",
    color: "grey.500",

    _dark: {
      borderColor: "gray.600",
      background: "gray.600",
      color: "gray.400",
    },
  },
});

export const inputTheme = defineMultiStyleConfig({
  sizes,
  variants: { pill },
});
