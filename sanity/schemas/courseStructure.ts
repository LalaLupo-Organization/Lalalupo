// schemas/courseStructure.js

// schemas/courseStructure.js

const courseStructure = {
  name: "courseStructure",
  title: "Course Structure",
  type: "object",
  fields: [
    {
      name: "language",
      title: "Language",
      type: "string",
      readOnly: true,
    },
    {
      name: "unit1",
      title: "Unit 1",
      type: "object",
      fields: [
        {
          name: "unitTitle",
          title: "Unit Title",
          type: "string",
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
          name: "interactiveExerciseIds",
          title: "Interactive Exercise ID's",
          type: "array",
          of: [{ type: "string" }],
          description: "An array of strings representing tags",
        },
      ],
    },
    {
      name: "unit2",
      title: "Unit 2",
      type: "object",
      fields: [
        {
          name: "unitTitle",
          title: "Unit Title",
          type: "string",
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
      ],
    },
  ],
};

export default courseStructure;
