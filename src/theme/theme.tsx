// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { colors } from "@/theme/base-styles/colors";
import { fontSizes } from "@/theme/base-styles/fontSizes";
import { fonts } from "@/theme/base-styles/fonts";
import { Heading } from "@/theme/components/heading";
import { Text } from "@/theme/components/text";
import { inputTheme } from "@/theme/components/input";
import { menuTheme } from "@/theme/components/menu";
import { buttonTheme } from "@/theme/components/buttons";
// 2. Call `extendTheme` and pass your custom values
const customTheme = extendTheme({
  components: {
    Heading,
    Text,
    Input: inputTheme,
    Menu: menuTheme,
    Button: buttonTheme,
    baseStyle: {
      color: "grey.500",
    },
  },
  styles: {
    global: {
      body: {
        _dark: {
          background: "_dark1",
          color: "grey.500",
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
