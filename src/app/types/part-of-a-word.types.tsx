import { BaseExercise } from "./lesson.types";

export type PartOfAWordExercise = BaseExercise & {
    type: "partOfAWord";

      missing: string[];
      word: string[];
      english: string;

  };
  