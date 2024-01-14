import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const sharedMenuStyles = {
  borderRadius: "16px",
  border: "1px",
  height: "56px",
  letterSpacing: "0.8px",
  color: "gray.200",
};

export const sharedInputLightStyles = {
  borderColor: "grey.200",
  background: "grey.50",
  color: "grey.900",
};
export const sharedInputDarkStyles = {
  _dark: {
    borderColor: "_dark1",
    bg: "_dark2",
  },
};
const simpleDefaultMenuLight = definePartsStyle({
  list: {
    ...sharedInputLightStyles,
  },
  item: {
    _hover: {
      bg: "primary.50",
      color: "black",
    },
  },
});
const simpleDefaultMenuDark = definePartsStyle({
  list: {
    ...sharedInputDarkStyles,
    py: "4",
    borderRadius: "16px",
  },
  item: {
    _hover: {
      bg: "primary.500",
      color: "white",
    },
  },
});

export const menuTheme = defineMultiStyleConfig({
  variants: {
    simpleDefaultMenuLight,

    simpleDefaultMenuDark,
  },
});
