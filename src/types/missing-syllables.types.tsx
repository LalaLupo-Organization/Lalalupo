import { BaseExercise } from "./lesson.types";

export type MissingSyllableExercise = BaseExercise & {
  type: "missingSyllable";
  display: string[];
  italian: string;
  english: string;
  availableWords: string[];
};
