// Dropdown.stories.js

import React from "react";
import { Username } from "@/components/inputs/Username"; // Update the import path to match your project

export default {
  title: "Inputs",
  component: Username,
  tags: ["autodocs"],
  argTypes: {
    // Add any argTypes or parameters here
  },
};

export const UsernameInput = () => <Username />;
