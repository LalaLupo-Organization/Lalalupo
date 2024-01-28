import { languageChallenges } from "../objects/languageChallenges";

const courseStructure = {
  name: "courseStructure",
  title: "Course Structure",
  type: "document",
  fields: [
    {
      name: "unitTitle",
      title: "Unit Title",
      type: "number",
      options: {
        list: [
          { title: 1, value: 1 },
          { title: 2, value: 2 },
          { title: 3, value: 3 },
        ],
      },
      // validation: (Rule: any) => Rule.required(),
    },
    {
      name: "languageCode",
      title: "Language Code",
      type: "string",
      // options: {
      //   list: [
      //     { title: "English to Arabic", value: "en-ar-sa" },
      //     { title: "English to Chinese", value: "en-ch" },
      //     { title: "English to German", value: "en-de" },
      //     { title: "English to Greek", value: "en-el" },
      //     { title: "English to English", value: "en-en" },
      //     { title: "English to Spanish", value: "en-es" },
      //     { title: "English to French", value: "en-fr" },
      //     { title: "English to Irish", value: "en-ga" },
      //     { title: "English to Hindi", value: "en-in" },
      //     { title: "English to Italian", value: "en-it" },
      //     { title: "English to Japanese", value: "en-ja" },
      //     { title: "English to Korean", value: "en-ko" },
      //     { title: "English to Latin", value: "en-la" },
      //     { title: "English to Dutch", value: "en-nl" },
      //     { title: "English to Polish", value: "en-pl" },
      //     { title: "English to Portuguese", value: "en-pt" },
      //     { title: "English to Russian", value: "en-ru" },
      //     { title: "English to Swedish", value: "en-sw" },
      //     { title: "English to Turkish", value: "en-tr" },
      //     { title: "English to Vietnamese", value: "en-vt" },
      //   ],
      // },
      // validation: (Rule: any) => Rule.required(),
    },
    {
      name: "language",
      title: "Language",
      type: "string",
      // options: {
      //   list: [
      //     { title: "Arabic", value: "Arabic" },
      //     { title: "Chinese", value: "Chinese" },
      //     { title: "German", value: "German" },
      //     { title: "Greek", value: "Greek" },
      //     { title: "English", value: "English" },
      //     { title: "Spanish", value: "Spanish" },
      //     { title: "French", value: "French" },
      //     { title: "Irish", value: "Irish" },
      //     { title: "Hindi", value: "Hindi" },
      //     { title: "Italian", value: "Italian" },
      //     { title: "Japanese", value: "Japanese" },
      //     { title: "Korean", value: "Korean" },
      //     { title: "Latin", value: "Latin" },
      //     { title: "Dutch", value: "Dutch" },
      //     { title: "Polish", value: "Polish" },
      //     { title: "Portuguese", value: "Portuguese" },
      //     { title: "Russian", value: "Russian" },
      //     { title: "Swedish", value: "Swedish" },
      //     { title: "Turkish", value: "Turkish" },
      //     { title: "Vietnamese", value: "Vietnamese" },
      //   ],
      // },

      // validation: (Rule: any) => Rule.required(),
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
      // options: {
      //   list: [
      //     { title: "1", value: "1" },
      //     { title: "2", value: "2" },
      //     { title: "3", value: "3" },
      //     { title: "4", value: "4" },
      //     { title: "5", value: "5" },
      //     { title: "6", value: "6" },
      //     { title: "7", value: "7" },
      //     { title: "8", value: "8" },
      //     { title: "9", value: "9" },
      //     { title: "10", value: "10" },
      //   ],
      // },
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
    },
  ],
  orderings: [
    {
      title: "Unit Title Asc, Lesson Number Asc",
      name: "unitTitleAscLessonNumberAsc",
      by: [
        { field: "unitTitle", direction: "asc" },
        { field: "lessonNumber", direction: "asc" },
      ],
    },
  ],

  preview: {
    select: {
      title: "unitTitle",
      subtitle: "lessonNumber",
      media: "icon",
    },
    preview: ({
      unitTitle,
      lessonNumber,
    }: {
      unitTitle: string;
      lessonNumber: string;
    }) => ({
      title: `Unit ${unitTitle || "No Language"}`,
      subtitle: `Lesson ${lessonNumber || "No Language"}`,
    }),
  },
};

export default courseStructure;
