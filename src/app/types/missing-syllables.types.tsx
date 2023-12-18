import { BaseExercise } from "./lesson.types";

export type MissingSyllableExercise = BaseExercise & {
  type: "missingSyllable";

  solution: string;
  display: string[];
  italian: string;
  english: string;
  availableWords: string[];
};

const data: MissingSyllableExercise = {
  type: "missingSyllable",
  _id: "1234455",
  solution: "gni",
  instructions: "Select the missing part of the word.",
  display: ["ra", "gni"],
  italian: "ragni",
  english: "spiders",
  availableWords: ["ni", "gni"],

  isComplete: false,
  hasFailed: false,
};
