// Dropdown.stories.js

import React from "react";
import { Simple } from "../../components/inputs/Simple"; // Update the import path to match your project

export default {
  title: "Inputs",
  component: Simple,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["simple", "alternate"],
    },
  },
};

export const SimpleInput = (args: any) => <Simple {...args} />;
