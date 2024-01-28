import { BaseExercise } from "./lesson.types";

export type FillInTheBlankExercise = BaseExercise & {
  type: "fillInTheBlank";
  displayText: string;
  couldBeEmpty: any;
  doubleSolution: boolean;
  vocabularyHelper: string[];
  missingWord: string;
  regex: string;
};
