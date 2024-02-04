// Dropdown.stories.js

import React from "react";
import { Email } from "../../components/inputs/Email"; // Update the import path to match your project

export default {
  title: "Inputs",
  component: Email,
  tags: ["autodocs"],
  argTypes: {
    // Add any argTypes or parameters here
  },
};

export const EmailInput = () => <Email />;
