import { BaseExercise } from "./lesson.types";

export type FillInTheBlankExercise = BaseExercise & {
  type: "fillInTheBlank";
    displayText: string;
    doubleSolution: boolean;
    vocabularyHelper: string[];
    missingWord: string;

};

  
