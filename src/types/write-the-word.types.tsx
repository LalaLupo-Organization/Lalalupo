import { BaseExercise } from "./lesson.types";

export type WriteTheSentenceExercise = BaseExercise & {
  type: "writeTheSentence";
  regex: string;
  displayMeaning: boolean;
  display: string;
  doubleSolution: boolean;
  vocabularyHelper: string[];
  english: string;
};
