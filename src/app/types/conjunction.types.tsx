import { BaseExercise } from "./lesson.types";

export type ConjugationExercise = BaseExercise & {
    type: "conjugation";
      availableWords: {
        pairs: [string, string][];
      };
      display: string;
  }
  