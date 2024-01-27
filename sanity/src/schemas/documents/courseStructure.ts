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
      name: "languageCode",
      title: "Language Code",
      type: "string",
    },
    {
      name: "language",
      title: "Language",
      type: "string",
    },
    {
      name: "totalUserCount",
      title: "Total User Count",
      type: "number",
    },
    {
      name: "lessonNumber",
      title: "Lesson Number",
      type: "number",
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
    {
      title: "Icon",
      name: "icon",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
      // Set up conditional fields to show either option1Fields or option2Fields based on selectOption
      preview: {
        select: {
          unitTitle: "unitTitle",
        },

        prepare: ({ unitTitle }: { unitTitle: string }) => ({
          title: `${unitTitle || "No Language"}`,
        }),
      },
    },
  ],
  orderings: [
    {
      title: "Lesson Number, Asc",
      name: "lessonNumberAsc",
      by: [{ field: "lessonNumber", direction: "asc" }],
    },
    {
      title: "Lesson Number, Desc",
      name: "lessonNumberAsc",
      by: [{ field: "lessonNumber", direction: "desc" }],
    },
  ],
};

export default courseStructure;
