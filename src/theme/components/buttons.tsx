import { defineStyleConfig, defineStyle } from "@chakra-ui/react";

const sharedButtonStyles = {
  height: "46px",
  letterSpacing: "0.8px",
};

const sharedDropdownFocusStyles = {
  _active: {
    bg: "primary.50",

    color: "primary.500",
    _dark: {
      borderColor: "primary.500",
      borderWidth: "1px",
      bg: "primary.50",
      borderStyle: "solid",
      color: "white",
    },
  },
};

const sharedDropdownLightStyles = {
  color: "grey.600",
  fontSize: "xs",
  _dark: {
    borderColor: "_dark1",
    bg: "_dark2",
    color: "grey.100",
  },
};

const buttonWidthAndHeight = {
  width: "330px",
  height: "46px",
};
const primary = {
  bg: "primary.500",
  color: "white",
  _hover: {
    bg: "primary.550",
  },
  _dark: {
    bg: "_dark2",
    color: "white",
    border: "1px solid",
    borderColor: "_dark3",
    _hover: {
      bg: "_dark1",
    },
  },
};
const secondary = {
  bg: "primary.100",
  color: "primary.500",
  _hover: {
    bg: "primary.50",
  },
  _dark: {
    bg: "_dark1",
    color: "white",
    border: "1px solid",
    borderColor: "grey.900",
    _hover: {
      borderColor: "grey.800",
    },
  },
};

const radius = {
  borderRadius: "16px",
};

const simpleDropdownButtonLight = defineStyle({
  ...sharedButtonStyles,
  ...sharedDropdownLightStyles,
  ...sharedDropdownFocusStyles,
});

const buttonPrimary = defineStyle({
  ...radius,
  ...buttonWidthAndHeight,
  ...primary,
});
const buttonSecondary = defineStyle({
  ...radius,

  ...buttonWidthAndHeight,
  ...secondary,
});

export const buttonTheme = defineStyleConfig({
  variants: {
    buttonPrimary,
    buttonSecondary,
    simpleDropdownButtonLight,
  },
});
