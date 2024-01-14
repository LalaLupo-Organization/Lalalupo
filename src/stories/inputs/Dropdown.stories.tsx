// Dropdown.stories.js

import React from "react";
import { Dropdown } from "@/components/inputs/Dropdown"; // Update the import path to match your project
import { SiteLanguages } from "@/types/site-languages.types";

let dummyData: SiteLanguages[] = [
  {
    active: true,
    icon: {
      asset: {
        url: "https://cdn.sanity.io/images/zqzeoj70/production/5ab1f349bb5221e2587988f97ae1238a50232a5e-621x466.svg",
        _id: "image-5ab1f349bb5221e2587988f97ae1238a50232a5e-621x466-svg",
        _type: "sanity.imageAsset",
      },
      _type: "image",
    },
    language: "English",
    languageCode: "en",
  },
  {
    active: true,
    icon: {
      asset: {
        url: "https://cdn.sanity.io/images/zqzeoj70/production/3c1c15748e9bcd5d468b6c6f1348f7a75acd2054-622x466.svg",
        _id: "image-3c1c15748e9bcd5d468b6c6f1348f7a75acd2054-622x466-svg",
        _type: "sanity.imageAsset",
      },
      _type: "image",
    },
    language: "Spanish",
    languageCode: "es",
  },
  {
    active: true,
    icon: {
      asset: {
        url: "https://cdn.sanity.io/images/zqzeoj70/production/3b020b83fec7e9c2b29816a224df0090c0ed267f-621x466.svg",
        _id: "image-3b020b83fec7e9c2b29816a224df0090c0ed267f-621x466-svg",
        _type: "sanity.imageAsset",
      },
      _type: "image",
    },
    language: "Italian",
    languageCode: "it",
  },
];

export default {
  title: "Inputs",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    // Add any argTypes or parameters here
  },
};

export const DropdownInput = () => (
  <Dropdown languageCode="en" languages={dummyData} />
);
