// inputTheme.js

import { inputAnatomy } from "@chakra-ui/anatomy";
import {
  PartsStyleInterpolation,
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const sharedStyles = {
  borderRadius: "16px",
  height: "56px",
  borderColor: "grey.200",
  background: "grey.50",
  color: "grey.500",

  _dark: {
    color: "grey.500",
    bg: "_dark2",
  },
  _placeholder: {
    color: "grey.500",
  },
};

const baseStyle: PartsStyleInterpolation<{
  keys: ("group" | "addon" | "field" | "element")[];
}> = {
  group: {},
  addon: {
    ...sharedStyles,
    marginLeft: "-1px", // To avoid double border with the field
    pl: "1rem",
    pr: "0",
  },
  element: {
    ...sharedStyles,
    marginRight: "-1px", // To avoid double border with the field
    pl: "1rem",
  },
  field: {
    ...sharedStyles,
    width: "385px",
    fontWeight: "200",
    fontSize: "sm",
    pl: "1rem",
    letterSpacing: "1px",
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
    maxW: "357px",
  },

  addon: {
    ...baseStyle.addon,
  },
  element: {
    left: "328px",
    cursor: "pointer",
  },
});

// Additional variants if needed
const telephoneVariant = definePartsStyle({
  field: {
    ...baseStyle,
    width: "335px",

    // Add this to make the positioning relative
  },
  addon: {
    ...baseStyle.addon,
  },
});

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    simple: simpleVariant,
    withAddon: withAddonVariant,
    telephone: telephoneVariant,
    // Add more variants as needed
  },
});
