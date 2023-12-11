import { BaseExercise } from "./lesson.types";


  
export type ReorderWhatYouHearExercise = BaseExercise & {
    type: "reorderWhatYouHear";

      solution: string;
      english: string;
      availableWords: string[];

  };
  