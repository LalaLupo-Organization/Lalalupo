import { BaseExercise } from "./lesson.types";

export type SelectTheMissingWordExercise = BaseExercise & {
  type: "selectTheMissingWord";

  solution: string;
  displayText: [string, string, string];
  availableWords: string[];
};
