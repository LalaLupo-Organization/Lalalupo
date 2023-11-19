import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button/Button",
  component: Button,
  // ...
};

export default meta;

export const Warning: StoryObj = {
  args: {
    primary: true,
    label: "Delete now!",
    backgroundColor: "red",
  },
};
export const Success: StoryObj = {
  args: {
    primary: true,
    label: "Delete now!",
    backgroundColor: "bg-green-300",
  },
};
