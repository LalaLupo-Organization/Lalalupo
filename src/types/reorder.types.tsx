import { BaseExercise } from "./lesson.types";

export type ReorderExercise = BaseExercise & {
  type: "reorder";
  displayText: string;
  availableWords: string[];
};
