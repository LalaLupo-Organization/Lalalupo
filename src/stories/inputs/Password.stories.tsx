// Dropdown.stories.js

import React from "react";
import { Password } from "../../components/inputs/Password"; // Update the import path to match your project

export default {
  title: "Inputs",
  component: Password,
  tags: ["autodocs"],
  argTypes: {
    // Add any argTypes or parameters here
  },
};

export const PasswordInput = () => <Password />;
