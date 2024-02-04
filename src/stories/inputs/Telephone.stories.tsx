// Dropdown.stories.js

import React from "react";
import { Telephone } from "../../components/inputs/Telephone"; // Update the import path to match your project

export default {
  title: "Inputs",
  component: Telephone,
  tags: ["autodocs"],
  argTypes: {
    // Add any argTypes or parameters here
  },
};

export const TelephoneInput = () => <Telephone />;
