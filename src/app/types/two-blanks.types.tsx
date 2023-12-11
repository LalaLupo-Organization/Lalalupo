import { BaseExercise } from "./lesson.types";

export type TwoBlanksExercise = BaseExercise & {
    type: "twoBlanks";

      solutions: string[];
      vocabularyHelper: string[];
      italian: string[];
      english: string[];
   
  };
  