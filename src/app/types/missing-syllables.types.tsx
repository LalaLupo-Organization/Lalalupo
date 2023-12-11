import { BaseExercise } from "./lesson.types";

export type MissingSyllableExercise = BaseExercise & {
    type: "missingSyllable";
  
      solution: string;
      display: string[];
      italian: string;
      english: string;
      availableWords: string[];
   
  };
  