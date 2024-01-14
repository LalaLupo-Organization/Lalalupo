// Dropdown.stories.js

import React from "react";
import { Dropdown } from "@/components/inputs/Dropdown"; // Update the import path to match your project

export default {
  title: "Inputs",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    // Add any argTypes or parameters here
  },
};

export const DropdownInput = () => <Dropdown />;
