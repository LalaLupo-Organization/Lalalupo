// schemas/exercise.js

export const exercise = {
  name: "exercise",
  title: "Exercise",
  type: "document",
  fields: [
    {
      name: "exerciseType",
      title: "Exercise Type",
      type: "string",
      options: {
        list: [
          {
            title: "Choose the Right Solution",
            value: "chooseTheRightSolution",
          },
          { title: "Match Pairs", value: "matchPairs" },
          { title: "Fill in the Blank", value: "fillInTheBlank" },
          // Add other exercise types here
        ],
      },
      description: "Select the type of interactive exercise",
    },
    {
      name: "exerciseData",
      title: "Exercise Data",
      type: "object",
      fields: [
        {
          title: "Solution",
          name: "solution",
          type: "string",
          // Conditionally show this field for 'chooseTheRightSolution' exercise type
          hidden: ({ parent }: any) =>
            parent?.exerciseType !== "chooseTheRightSolution",
        },
        {
          title: "Instructions",
          name: "instructions",
          type: "string",
          // Conditionally show this field for 'chooseTheRightSolution' and other applicable exercise types
          hidden: ({ parent }: any) =>
            !["chooseTheRightSolution", "otherExerciseType"].includes(
              parent?.exerciseType,
            ),
        },
        {
          name: "matchPairsData",
          title: "Match Pairs Data",
          type: "object",
          fields: [
            {
              title: "Instructions",
              name: "instructions",
              type: "string",
              // Conditionally show this field for 'matchPairs' exercise type
              hidden: ({ parent }: any) =>
                parent?.exerciseType !== "matchPairs",
            },
            {
              title: "Pairs",
              name: "pairs",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "word1",
                      title: "Word 1",
                      type: "string",
                    },
                    {
                      name: "word2",
                      title: "Word 2",
                      type: "string",
                    },
                  ],
                },
              ],
              // Conditionally show this field for 'matchPairs' exercise type
              hidden: ({ parent }: any) =>
                parent?.exerciseType !== "matchPairs",
            },
          ],
        },
        {
          name: "fillInTheBlankData",
          title: "Fill in the Blank Data",
          type: "object",
          fields: [
            {
              title: "Instructions",
              name: "instructions",
              type: "string",
              // Conditionally show this field for 'fillInTheBlank' exercise type
              hidden: ({ parent }: any) =>
                parent?.exerciseType !== "fillInTheBlank",
            },
            {
              title: "Solution",
              name: "solution",
              type: "array",
              of: [{ type: "string" }],
              // Conditionally show this field for 'fillInTheBlank' exercise type
              hidden: ({ parent }: any) =>
                parent?.exerciseType !== "fillInTheBlank",
            },
            {
              title: "Display Text",
              name: "displayText",
              type: "string",
              // Conditionally show this field for 'fillInTheBlank' exercise type
              hidden: ({ parent }: any) =>
                parent?.exerciseType !== "fillInTheBlank",
            },
            {
              title: "Missing Word",
              name: "missingWord",
              type: "string",
              // Conditionally show this field for 'fillInTheBlank' exercise type
              hidden: ({ parent }: any) =>
                parent?.exerciseType !== "fillInTheBlank",
            },
          ],
        },
        // Add schema definitions for other exercise types as needed.
      ],
    },
  ],
};
