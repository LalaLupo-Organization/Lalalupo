// schemas/myDocument.js

import { languageChallenges } from "../objects/languageChallenges";

const courseStructure = {
  name: "courseStructure",
  title: "Course Structure",
  type: "document",
  fields: [
    {
      name: "unitTitle",
      title: "Unit Title",
      type: "string",
    },
    {
      name: "language",
      title: "Language",
      type: "string",
      initialValue: "it",
      readOnly: true,
    },

    {
      name: "description",
      title: "Unit Description",
      type: "text",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      options: {
        list: [
          {
            title: "Blue",
            value: "blue",
          },
          {
            title: "Red",
            value: "red",
          },
        ],
      },
    },
    {
      title: "Reading",
      name: "reading",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "videoUrl",
      title: "Video URL",
      type: "url",
    },
    {
      name: "exercise",
      title: "Exercise",
      type: "array",
      of: [languageChallenges],
    },
  ],

  // Set up conditional fields to show either option1Fields or option2Fields based on selectOption
  // preview: {
  //   select: {
  //     selectOption: "selectOption",
  //   },
  //   prepare: ({ selectOption }: any) => ({
  //     title: `Selected Option: ${selectOption}`,
  //     subtitle: "Preview",
  //   }),
  // },
};

export default courseStructure;
