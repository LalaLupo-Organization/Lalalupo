import { BaseExercise } from "./lesson.types";

export type WriteInItalianExercise = BaseExercise & {
    type: "writeInItalian";
  
      displayMeaning: boolean;
      display: string;
      doubleSolution: boolean;
      vocabularyHelper: string[];
  
  };
  