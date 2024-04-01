import { BaseExercise } from "./lesson.types";

export type SelectTheMissingWordExercise = BaseExercise & {
  type: "selectTheMissingWord";
  displayText: [string, string, string];
  availableWords: string[];
  underlined?: string;
};
