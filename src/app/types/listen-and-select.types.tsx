import { BaseExercise } from "./lesson.types";

export type ListenAndSelectExercise = BaseExercise & {
    type: "listenAndSelect";
 
      solution: string;
      audio: string;
      availableWords: [string, string][];

  };
  