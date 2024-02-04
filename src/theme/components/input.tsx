// inputTheme.js

import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

//We have some shares styles that relate to all inputs
//We then have individual styles for a default input, _focused input and a filled input.
//We also have to manage these three different styles for light and dark mode.

//We then have three or four main types of inputs.
//When customizing chakra inputs the first thing to recognize is that it's a multipart component.
//We have the opportunity to create some baseStyles for each specific variant and then apply those styles to the variant

//We also have the opportunity to apply some shared styles accross all variants. So this is how it's going to go. We first need to figure out what doesn't change accross all inputs. The styles that relate to all inputs are deemed our shared styles.

//The next thing to do is create a simple input. This will have three different states and because we have light and dark mode we will need to create two variants for each. In total we need six variants for the simple inputs.

const sharedInputStyles = {
  borderRadius: "16px",

  border: "1px",
  height: "56px",
  letterSpacing: "0.8px",
  _placeholderShown: {
    fontWeight: "light",
    color: "grey.500",
  },
};
const sharedSimpleWidth = {
  width: "385px",
};
const sharedIconInputWidth = {
  width: "340px",
};
const sharedInputLightStyles = {
  borderColor: "grey.200",
  background: "grey.50",
  color: "grey.500",
};
const sharedInputDarkStyles = {
  _dark: {
    borderColor: "_dark1",
    bg: "_dark2",
  },
};
const sharedElementStyles = {
  left: "328px",
  cursor: "pointer",
};

const sharedFocusedStyles = {
  _groupFocusWithin: {
    borderColor: "primary.500",
    borderWidth: "1px",
    bg: "primary.50",
    borderStyle: "solid",
    color: "black",
    caretColor: "grey.500",
    _dark: {
      borderColor: "primary.500",
      borderWidth: "1px",
      bg: "primary.50",
      borderStyle: "solid",
      color: "white",
    },
  },
};

const sharedFocusFieldLightStyles = {
  _groupFocusWithin: {
    ...sharedFocusedStyles._groupFocusWithin,
    borderLeftColor: "primary.100",
    _dark: {
      borderLeft: "primary.100",
      color: "white",
    },
  },
};
const sharedFocusFieldDarkStyles = {
  _groupFocusWithin: {
    ...sharedFocusedStyles._groupFocusWithin,
    borderLeftColor: "_dark2",
    borderColor: "primary.500",

    _dark: {
      borderColor: "primary.500",
      borderLeftColor: "_dark2",

      color: "white",
    },
  },
};

const sharedFocusAddonStyles = {
  _groupFocusWithin: {
    ...sharedFocusedStyles._groupFocusWithin,
    borderRightColor: "primary.100",
    color: "primary.500",
    border: "1px",
    borderColor: "primary.100",

    _dark: {
      borderRight: "primary.100",
      bg: "primary.50",
      color: "primary.500",
      border: "1px",
    },
  },
};
const sharedFilledLightStyles = {
  fontWeight: "semibold",
  color: "black",
};
const sharedFilledDarkStyles = {
  fontWeight: "semibold",
  color: "white",
};

const simpleDefaultInputLight = definePartsStyle({
  field: {
    ...sharedInputStyles,
    ...sharedSimpleWidth,
    ...sharedInputLightStyles,
    ...sharedFocusedStyles,
  },
});
const simpleDefaultInputDark = definePartsStyle({
  field: {
    ...sharedInputStyles,
    ...sharedSimpleWidth,
    ...sharedInputDarkStyles,
    ...sharedFocusedStyles,
  },
});

const simpleFilledInputLight = definePartsStyle({
  field: {
    ...sharedInputStyles,
    ...sharedSimpleWidth,
    ...sharedInputLightStyles,
    ...sharedFilledLightStyles,
  },
});
const simpleFilledInputDark = definePartsStyle({
  field: {
    ...sharedInputStyles,
    ...sharedSimpleWidth,
    ...sharedInputDarkStyles,
    ...sharedFilledDarkStyles,
  },
});

const iconDefaultInputLight = definePartsStyle({
  field: {
    ...sharedInputStyles,
    ...sharedIconInputWidth,
    ...sharedFocusedStyles,
    ...sharedFocusFieldLightStyles,
    ...sharedInputLightStyles,
  },
  addon: {
    ...sharedInputStyles,
    ...sharedInputLightStyles,
    ...sharedFocusAddonStyles,
  },
  element: {
    ...sharedElementStyles,
  },
});
const iconDefaultInputDark = definePartsStyle({
  field: {
    ...sharedInputStyles,
    ...sharedIconInputWidth,
    ...sharedInputDarkStyles,
    ...sharedFocusedStyles,
    ...sharedFocusFieldDarkStyles,
  },
  addon: {
    ...sharedInputStyles,
    ...sharedFocusAddonStyles,
    ...sharedInputDarkStyles,
  },

  element: {
    ...sharedElementStyles,
  },
});
const iconFilledInputLight = definePartsStyle({
  field: {
    ...sharedInputStyles,
    ...sharedFocusFieldLightStyles,
    ...sharedIconInputWidth,

    ...sharedInputLightStyles,
    ...sharedFilledLightStyles,
  },
  addon: {
    ...sharedInputStyles,
    ...sharedInputLightStyles,
    ...sharedFocusAddonStyles,
    ...sharedFilledLightStyles,
  },
  element: {
    ...sharedElementStyles,
  },
});
const iconFilledInputDark = definePartsStyle({
  field: {
    ...sharedInputStyles,
    ...sharedFocusFieldDarkStyles,
    ...sharedIconInputWidth,

    ...sharedInputDarkStyles,
    ...sharedFilledDarkStyles,
  },
  addon: {
    ...sharedInputStyles,
    ...sharedFocusAddonStyles,
    ...sharedInputDarkStyles,
    ...sharedFilledDarkStyles,
  },
  element: {
    ...sharedElementStyles,
  },
});

// Variant for input without addon
const simple = definePartsStyle({
  field: {
    pl: "1.5rem",
  },
});

// Variant for input with addon
const withAddonVariant = definePartsStyle({
  field: {
    ...sharedInputStyles,
    ...sharedSimpleWidth,
    ...sharedInputLightStyles,

    maxW: "340px",
  },

  addon: {
    ...sharedInputStyles,
    ...sharedSimpleWidth,
    ...sharedInputLightStyles,
    paddingRight: "1rem",
    color: "grey.500",
  },
  element: {
    left: "328px",
    cursor: "pointer",
    borderLeft: "0",
  },
});

// Additional variants if needed
const telephoneVariant = definePartsStyle({
  field: {
    width: "320px",

    // Add this to make the positioning relative
  },
  addon: {},

  element: {
    left: "328px",
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: {
    simple,
    simpleDefaultInputLight,
    simpleDefaultInputDark,

    simpleFilledInputLight,
    simpleFilledInputDark,
    iconDefaultInputLight,
    iconDefaultInputDark,
    iconFilledInputLight,
    iconFilledInputDark,

    withAddon: withAddonVariant,
    telephone: telephoneVariant,
    // Add more variants as needed
  },
});
