// schemas/myDocument.js

import { languageChallenges } from "./languageChallenges";

const courseStructure = {
  name: "courseStructure",
  title: "Course Structure",
  type: "document",
  fields: [
    {
      name: "unitTitle",
      title: "Unit Title",
      type: "string",
      initialValue: "Bacic Greetings",
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
      name: "Colors",
      title: "Colors",
      type: "string",
      options: {
        list: [
          {
            title: "Blue",
            value: "blue.600",
          },
          {
            title: "Red",
            value: "red.600",
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

    languageChallenges({ name: "LessonOne", title: "Lesson one" }),
    languageChallenges({ name: "LessonTwo", title: "Lesson two" }),
    languageChallenges({
      name: "LessonThree",
      title: "Lesson three",
    }),
    languageChallenges({ name: "LessonFour", title: "Lesson four" }),
    languageChallenges({ name: "LessonFive", title: "Lesson five" }),
    languageChallenges({ name: "LessonSix", title: "Lesson six" }),
    languageChallenges({
      name: "LessonSeven",
      title: "Lesson seven",
    }),
    languageChallenges({
      name: "LessonEight",
      title: "Lesson eight",
    }),
    languageChallenges({ name: "LessonNine", title: "Lesson nine" }),
    languageChallenges({ name: "LessonTen", title: "Lesson ten" }),

    // {
    //   name: "languageChallenges",
    //   title: "Langugage Challenges",
    //   type: "array",
    //   of: [
    //     {
    //       type: "object",
    //       name: "exercises",
    //       fields: [
    //         {
    //           name: "selectOption",
    //           title: "Select Option",
    //           type: "string",
    //           options: {
    //             list: [
    //               {
    //                 title: "Choose The Right Solution",
    //                 value: "chooseTheRightSolution",
    //               },
    //               { title: "Match Pairs", value: "matchPairs" },
    //               // Add more options as needed
    //             ],
    //           },
    //         },

    //         {
    //           name: "chooseTheRightSolution",
    //           title: "Choose The Right Solution",
    //           type: "object",
    //           fields: [
    //             {
    //               name: "fieldA",
    //               title: "Field A",
    //               type: "string",
    //             },
    //             {
    //               name: "fieldB",
    //               title: "Field B",
    //               type: "string",
    //             },
    //             {
    //               name: "fieldC",
    //               title: "Field C",
    //               type: "string",
    //             },
    //           ],
    //           hidden: ({ parent }: any) => {
    //             console.log(
    //               "🚀 ~ file: courseStructure.ts:78 ~ parent:",
    //               parent
    //             );

    //             if (parent.selectOption === undefined) {
    //               return true;
    //             }
    //             if (
    //               parent.selectOption !== "chooseTheRightSolution"
    //             ) {
    //               return true;
    //             }
    //           },
    //         },
    //         {
    //           name: "matchPairs",
    //           title: "Match Pairs",
    //           type: "object",
    //           fields: [
    //             {
    //               name: "fieldD",
    //               title: "Field D",
    //               type: "string",
    //             },
    //             {
    //               name: "fieldE",
    //               title: "Field E",
    //               type: "string",
    //             },
    //             {
    //               name: "fieldF",
    //               title: "Field F",
    //               type: "string",
    //             },
    //           ],
    //           hidden: ({ parent }: any) => {
    //             console.log(
    //               "🚀 ~ file: courseStructure.ts:78 ~ parent:",
    //               parent
    //             );

    //             if (parent.selectOption === undefined) {
    //               return true;
    //             }
    //             if (parent.selectOption !== "matchPairs") {
    //               return true;
    //             }
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // },
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
