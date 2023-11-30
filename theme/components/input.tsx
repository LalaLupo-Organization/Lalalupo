// inputTheme.js

import { inputAnatomy } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

// Common styles for all variants
const baseStyle = {
  borderRadius: "16px",
  height: "56px",
  borderColor: "grey.200",
  background: "grey.50",
  color: "grey.500",
  width: "382px",
  fontWeight: "200",
  fontSize: "sm",
  pl: "1rem",
  letterSpacing: "1px",
  _dark: {
    color: "grey.500",
    bg: "_dark2",
  },
  _placeholder: {
    color: "grey.500",
  },
};

// Variant for input without addon
const simpleVariant = definePartsStyle({
  field: {
    ...baseStyle,
    pl: "1.5rem",
  },
});

// Variant for input with addon
const withAddonVariant = definePartsStyle({
  field: {
    ...baseStyle,
    width: "357px",
  },

  addon: {
    ...baseStyle,
    marginLeft: "-1px", // To avoid double border with the field
    background: "grey.50",
    pl: "1rem",

    pr: "0",
  },
});

// Additional variants if needed
const otherVariant = definePartsStyle({
  // Define styles for other variants
});

export const inputTheme = defineMultiStyleConfig({
  variants: {
    simple: simpleVariant,
    withAddon: withAddonVariant,
    other: otherVariant,
    // Add more variants as needed
  },
});
