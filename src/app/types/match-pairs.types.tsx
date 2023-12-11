import { BaseExercise } from "./lesson.types";

export type MatchPairsExercise = BaseExercise & {
    type: "matchPairs";
    availableWords: {
      pairs: [string, string][]  //just make sure this is and array of arrays
      column1: { column: string; read: boolean };
      column2: { column: string; read: boolean };
    };
    englishAnswers?: string[];
  };