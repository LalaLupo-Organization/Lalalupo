// // schemas/courseStructure.js

// // schemas/courseStructure.js

// schemas/myDocument.js

// schemas/myDocument.js

const courseStructure = {
  name: "courseStructure",
  title: "Course Structure",
  type: "document",
  fields: [
    {
      name: "unitTitle",
      title: "Unit One",
      type: "string",
      initialValue: "Unit One",
      readOnly: true,
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
      name: "cssClass",
      title: "CSS Class",
      type: "string",
    },
    {
      name: "readingUrl",
      title: "Reading URL",
      type: "url",
    },
    {
      name: "videoUrl",
      title: "Video URL",
      type: "url",
    },

    {
      name: "languageChallenges",
      title: "Langugage Challenges",
      type: "array",
      of: [
        {
          type: "object",
          name: "exercises",
          fields: [
            {
              name: "selectOption",
              title: "Select Option",
              type: "string",
              options: {
                list: [
                  {
                    title: "Choose The Right Solution",
                    value: "chooseTheRightSolution",
                  },
                  { title: "Match Pairs", value: "matchPairs" },
                  // Add more options as needed
                ],
              },
            },

            {
              name: "chooseTheRightSolution",
              title: "Choose The Right Solution",
              type: "object",
              fields: [
                {
                  name: "fieldA",
                  title: "Field A",
                  type: "string",
                },
                {
                  name: "fieldB",
                  title: "Field B",
                  type: "string",
                },
                {
                  name: "fieldC",
                  title: "Field C",
                  type: "string",
                },
              ],
              hidden: ({ parent }: any) => {
                console.log(
                  "🚀 ~ file: courseStructure.ts:78 ~ parent:",
                  parent,
                );

                if (parent.selectOption === undefined) {
                  return true;
                }
                if (parent.selectOption !== "chooseTheRightSolution") {
                  return true;
                }
              },
            },
            {
              name: "matchPairs",
              title: "Match Pairs",
              type: "object",
              fields: [
                {
                  name: "fieldD",
                  title: "Field D",
                  type: "string",
                },
                {
                  name: "fieldE",
                  title: "Field E",
                  type: "string",
                },
                {
                  name: "fieldF",
                  title: "Field F",
                  type: "string",
                },
              ],
              hidden: ({ parent }: any) => {
                console.log(
                  "🚀 ~ file: courseStructure.ts:78 ~ parent:",
                  parent,
                );

                if (parent.selectOption === undefined) {
                  return true;
                }
                if (parent.selectOption !== "matchPairs") {
                  return true;
                }
              },
            },
          ],
        },
      ],
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
