export const baseChallenges = {
  name: "baseChallenge",
  title: "Base Challenge",
  type: "object",
  fields: [
    {
      name: "id",
      title: "id",
      type: "string",
      hidden: true,
      readOnly: true,
    },
    {
      name: "instructions",
      title: "Instructions",
      type: "string",
    },
    {
      name: "isComplete",
      title: "isComplete",
      type: "boolean",
    },
    {
      name: "hasFailed",
      title: "hasFailed",
      type: "boolean",
    },
    {
      name: "solution",
      title: "Solution",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
}
