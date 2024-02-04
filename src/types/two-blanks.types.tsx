import { BaseExercise } from "./lesson.types";

export type TwoBlanksExercise = BaseExercise & {
  type: "twoBlanks";
  vocabularyHelper: string[];
  italian: string[];
  english: string[];
};
