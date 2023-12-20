import { BaseExercise } from "./lesson.types";

export type WriteTheSentenceExercise = BaseExercise & {
  type: "writeTheSentence";

  displayMeaning: boolean;
  display: string;
  doubleSolution: boolean;
  vocabularyHelper: string[];
};
