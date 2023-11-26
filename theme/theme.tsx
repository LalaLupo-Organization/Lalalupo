// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { colors } from "./base-styles/colors";
import { fontSizes } from "./base-styles/fontSizes";
import { fonts } from "./base-styles/fonts";
import { Heading } from "./components/heading";
import { Text } from "./components/text";
import { inputTheme } from "./components/input";
// 2. Call `extendTheme` and pass your custom values
const customTheme = extendTheme({
  components: {
    Heading,
    Text,
    Input: inputTheme,
  },
  initialColorMode: "system",
  useSystemColorMode: true,
  fonts,
  colors,
  fontSizes,
});
export default customTheme;
