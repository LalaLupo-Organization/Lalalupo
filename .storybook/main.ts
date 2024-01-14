const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);
module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",

    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: { emotionAlias: false },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    return {
      ...config,

      plugins: [...config.plugins],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@/theme": path.resolve(__dirname, "../src/theme"),
          "@/components": path.resolve(__dirname, "../src/app/components"),
        },
      },
    };
  },
};
