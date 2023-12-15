import { BaseExercise } from "./lesson.types";


  
export type ReorderWhatYouHearExercise = BaseExercise & {
    type: "reorderWhatYouHear";

      solution: string;
      english: string;
      availableWords: string[];

  };
  
  const data: ReorderWhatYouHearExercise = {
    type: "reorderWhatYouHear",
      _id: "123456",
      solution: "Mia figlia sta imparando a camminare.",
      instructions: "Reorder the words to replicate the sentence.",
      english: "My daughter is learning to walk.",
      availableWords: [
        "Mia",
        "figlia",
        "sta",
        "imparando",
        "a",
        "camminare.",
        "impara",
        "stai",
        "Mie",
        "cammina",
        "le."
      ],
   
    isComplete: false,
    hasFailed: false,
  }