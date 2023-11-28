// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { colors } from "./base-styles/colors";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { fontSizes } from "@/theme/base-styles/fontSizes";
import { fonts } from "@/theme/base-styles/fonts";
import { Heading } from "@/theme/components/heading";
import { Text } from "@/theme/components/text";
import { inputTheme } from "@/theme/components/input";
// 2. Call `extendTheme` and pass your custom values
const customTheme = extendTheme({
  components: {
    Heading,
    Text,
    Input: inputTheme,
  },
  styles: {
    global: {
      body: {
        _dark: {
          background: "_dark1",
          color: "_dark1",
        },
      },
    },
  },

  initialColorMode: "system",
  useSystemColorMode: true,
  fonts,
  colors,
  fontSizes,
});
export default customTheme;
