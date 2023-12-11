import { BaseExercise } from "./lesson.types";

export type ReorderExercise = BaseExercise & {
    type: "reorder";
   
      solution: string;
      displayText: string;
      availableWords: string[];
  
  };