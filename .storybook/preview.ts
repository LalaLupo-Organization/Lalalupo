import type { Preview } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks";
const theme = require("../src/theme/theme");
console.log(theme.default);
const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "twitwhiteter",
      values: [
        {
          name: "light",
          value: "white",
        },
        {
          name: "dark",
          value: "#181A20",
        },
      ],
    },
    chakra: {
      theme: theme.default,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
