import { baseChallenges } from "./baseChallenges";

export const languageChallenges = ({
  name,
  title,
}: {
  name: string;
  title: string;
}) => ({
  name: `${name}`,
  title: `${title}`,
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
              { title: "Conjunction", value: "conjunction" },
              {
                title: "Fill In The Blanks",
                value: "fillInTheBlanks",
              },
              {
                title: "Fill In What You Hear",
                value: "fillInWhatYouHear",
              },
              {
                title: "Listen And Select",
                value: "listenAndSelect",
              },

              { title: "Match Pairs", value: "matchPairs" },
              {
                title: "Missing Syllables",
                value: "missingSyllable",
              },
              { title: "Multiple Answers", value: "multipleAnswers" },
              { title: "Part Of A Word", value: "partOfAWord" },
              { title: "Reorder", value: "reorder" },
              {
                title: "Reorder What You Hear",
                value: "reorderWhatYouHear",
              },
              {
                title: "Select The Missing Word",
                value: "selectTheMissingWord",
              },
              {
                title: "Speaking And Pronunciation",
                value: "speakingAndPronunciation",
              },
              { title: "Two Blanks", value: "twoBlanks" },
              {
                title: "Type In What You Hear",
                value: "typeInWhatYouHear",
              },
              {
                title: "Write The Sentence",
                value: "writeTheSentence",
              },
              // Add more options as needed
            ],
          },
        },

        {
          name: "chooseTheRightSolution",
          title: "Choose The Right Solution",
          type: "object",
          fields: [
            ...baseChallenges.fields,

            {
              name: "availableWords",
              title: "Available Words",
              type: "array",
              of: [{ type: "string" }],
              description: "",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              description: "Image to display to user to hint at word",
              options: {
                hotspot: true,
              },
            },
          ],
          hidden: ({ parent }: any) => {
            if (parent.selectOption === undefined) {
              return true;
            }
            if (parent.selectOption !== "chooseTheRightSolution") {
              return true;
            }
          },
        },

        {
          name: "conjunction",
          title: "Conjunction",
          type: "object",
          fields: [
            ...baseChallenges.fields,

            {
              name: "displayText",
              title: "Display Text",
              type: "string",
              description:
                "Some exericises need helpers, ex. MANGIARE (TO EAT)",
            },
            {
              name: "pairs",
              title: "Pairs",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "firstString",
                      title: "First String",
                      type: "string",
                    },
                    {
                      name: "secondString",
                      title: "Second String",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
          hidden: ({ parent }: any) => {
            if (parent.selectOption === undefined) {
              return true;
            }
            if (parent.selectOption !== "conjugation") {
              return true;
            }
          },
        },
        {
          name: "fillInTheBlanks",
          title: "Fill In The Blanks",
          type: "object",
          fields: [
            ...baseChallenges.fields,

            {
              name: "display",
              title: "Display", //"MANGIARE (TO EAT)"
              type: "string",
            },
            {
              name: "pairs",
              title: "Pairs",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "firstString",
                      title: "First String",
                      type: "string",
                    },
                    {
                      name: "secondString",
                      title: "Second String",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
          hidden: ({ parent }: any) => {
            if (parent.selectOption === undefined) {
              return true;
            }
            if (parent.selectOption !== "fillInTheBlanks") {
              return true;
            }
          },
        },
        {
          name: "fillInWhatYouHear",
          title: "Fill In What You Hear",
          type: "object",
          fields: [
            ...baseChallenges.fields,

            {
              name: "displayMeaning",
              title: "Display Meaning",
              type: "boolean",
            },
            {
              name: "english",
              title: "English",
              type: "string",
            },
            {
              name: "missingWord",
              title: "Missing Word",
              type: "string",
            },
          ],
          hidden: ({ parent }: any) => {
            if (parent.selectOption === undefined) {
              return true;
            }
            if (parent.selectOption !== "fillInWhatYouHear") {
              return true;
            }
          },
        },
        {
          name: "listenAndSelect",
          title: "Listen And Select",
          type: "object",
          fields: [
            ...baseChallenges.fields,

            {
              name: "audio",
              title: "Audio",
              type: "boolean",
            },
            {
              name: "english",
              title: "English",
              type: "string",
            },
            {
              name: "availableWords",
              title: "Available Words",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "firstString",
                      title: "First String",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
          hidden: ({ parent }: any) => {
            if (parent.selectOption === undefined) {
              return true;
            }
            if (parent.selectOption !== "listenAndSelect") {
              return true;
            }
          },
        },

        {
          name: "matchPairs",
          title: "Match Pairs",
          type: "object",
          fields: [
            ...baseChallenges.fields,

            {
              name: "pairs",
              title: "Pairs",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "firstString",
                      title: "First String",
                      type: "string",
                    },
                    {
                      name: "secondString",
                      title: "Second String",
                      type: "string",
                    },
                  ],
                },
              ],
            },
            {
              name: "column1",
              title: "Column 1",
              type: "object",
              fields: [
                { name: "column", title: "Column", type: "string" },
                { name: "read", title: "Read", type: "boolean" },
              ],
            },
            {
              name: "column2",
              title: "Column 2",
              type: "object",
              fields: [
                { name: "column", title: "Column", type: "string" },
                { name: "read", title: "Read", type: "boolean" },
              ],
            },
          ],
          hidden: ({ parent }: any) => {
            if (parent.selectOption === undefined) {
              return true;
            }
            if (parent.selectOption !== "matchPairs") {
              return true;
            }
          },
        },
        {
          name: "missingSyllable",
          title: "Missing Syllable",
          type: "object",
          fields: [
            ...baseChallenges.fields,

            {
              name: "display",
              title: "Display",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "italian",
              title: "Italian",
              type: "string",
            },
            {
              name: "english",
              title: "English",
              type: "string",
            },
            {
              name: "availableWords",
              title: "Available Words",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
          hidden: ({ parent }: any) => {
            if (parent.selectOption === undefined) {
              return true;
            }
            if (parent.selectOption !== "missingSyllable") {
              return true;
            }
          },
        },
        {
          name: "multipleAnswers",
          title: "Multiple Answers",
          type: "object",
          fields: [
            ...baseChallenges.fields,

            {
              name: "availableWords",
              title: "Available Words",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "italian",
                      title: "Italian",
                      type: "string",
                    },
                    {
                      name: "correct",
                      title: "Correct",
                      type: "boolean",
                    },
                    {
                      name: "english",
                      title: "English",
                      type: "string",
                    },
                  ],
                },
              ],
            },
            {
              name: "targetNumber",
              title: "Target Number",
              type: "number",
            },
            {
              name: "displayMeaning",
              title: "Display Meaning",
              type: "boolean",
            },
          ],
          hidden: ({ parent }: any) => {
            if (parent.selectOption === undefined) {
              return true;
            }
            if (parent.selectOption !== "multipleAnswers") {
              return true;
            }
          },
        },
        {
          name: "partOfAWord",
          title: "Part Of A Word",
          type: "object",
          fields: [
            ...baseChallenges.fields,

            {
              name: "missing",
              title: "Missing",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "word",
              title: "Word",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "english",
              title: "English",
              type: "string",
            },
          ],
          hidden: ({ parent }: any) => {
            if (parent.selectOption === undefined) {
              return true;
            }
            if (parent.selectOption !== "partOfAWord") {
              return true;
            }
          },
        },
        {
          name: "reorderWhatYouHear",
          title: "Reorder What You Hear",
          type: "object",
          fields: [
            ...baseChallenges.fields,

            {
              name: "english",
              title: "English",
              type: "string",
            },
            {
              name: "availableWords",
              title: "Available Words",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
          hidden: ({ parent }: any) => {
            if (parent.selectOption === undefined) {
              return true;
            }
            if (parent.selectOption !== "reorderWhatYouHear") {
              return true;
            }
          },
        },
        {
          name: "reorder",
          title: "Reorder",
          type: "object",
          fields: [
            ...baseChallenges.fields,

            {
              name: "displayText",
              title: "Display Text",
              type: "string",
            },
            {
              name: "availableWords",
              title: "Available Words",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
          hidden: ({ parent }: any) => {
            if (parent.selectOption === undefined) {
              return true;
            }
            if (parent.selectOption !== "reorder") {
              return true;
            }
          },
        },
        {
          name: "selectTheMissingWord",
          title: "Select The Missing Word",
          type: "object",
          fields: [
            ...baseChallenges.fields,

            {
              name: "displayText",
              title: "Display Text",
              type: "array",
              of: [{ type: "string" }],
              validation: (Rule: any) => Rule.length(3),
            },
            {
              name: "availableWords",
              title: "Available Words",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
          hidden: ({ parent }: any) => {
            if (parent.selectOption === undefined) {
              return true;
            }
            if (parent.selectOption !== "selectTheMissingWord") {
              return true;
            }
          },
        },
        {
          name: "speakingAndPronunciation",
          title: "Speaking And Pronunciation",
          type: "object",
          fields: [
            ...baseChallenges.fields,

            {
              name: "doubleSolution",
              title: "Double Solution",
              type: "boolean",
            },
            {
              name: "vocabularyHelper",
              title: "Vocabulary Helper",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "display",
              title: "Display",
              type: "string",
            },
            {
              name: "displayMeaning",
              title: "Display Meaning",
              type: "boolean",
            },
          ],
          hidden: ({ parent }: any) => {
            if (parent.selectOption === undefined) {
              return true;
            }
            if (parent.selectOption !== "speakingAndPronunciation") {
              return true;
            }
          },
        },
        {
          name: "twoBlanks",
          title: "Two Blanks",
          type: "object",
          fields: [
            ...baseChallenges.fields,

            {
              name: "vocabularyHelper",
              title: "Vocabulary Helper",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "italian",
              title: "Italian",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "english",
              title: "English",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
          hidden: ({ parent }: any) => {
            if (parent.selectOption === undefined) {
              return true;
            }
            if (parent.selectOption !== "twoBlanks") {
              return true;
            }
          },
        },
        {
          name: "typeInWhatYouHear",
          title: "Type In What You Hear",
          type: "object",
          fields: [
            ...baseChallenges.fields,

            {
              name: "english",
              title: "English",
              type: "string",
            },
            {
              name: "doubleSolution",
              title: "Double Solution",
              type: "boolean",
            },
            {
              name: "displayMeaning",
              title: "Display Meaning",
              type: "boolean",
            },
            {
              name: "audio",
              title: "Audio",
              type: "string",
            },
          ],
          hidden: ({ parent }: any) => {
            if (parent.selectOption === undefined) {
              return true;
            }
            if (parent.selectOption !== "typeInWhatYouHear") {
              return true;
            }
          },
        },
        {
          name: "writeTheSentence",
          title: "Write The Sentence",
          type: "object",
          fields: [
            ...baseChallenges.fields,

            {
              name: "displayMeaning",
              title: "Display Meaning",
              type: "boolean",
            },
            {
              name: "display",
              title: "Display",
              type: "string",
            },
            {
              name: "doubleSolution",
              title: "Double Solution",
              type: "boolean",
            },
            {
              name: "vocabularyHelper",
              title: "Vocabulary Helper",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
          hidden: ({ parent }: any) => {
            if (parent.selectOption === undefined) {
              return true;
            }
            if (parent.selectOption !== "writeTheSentence") {
              return true;
            }
          },
        },
      ],
    },
  ],
});
