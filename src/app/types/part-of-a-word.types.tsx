import { BaseExercise } from "./lesson.types";

export type PartOfAWordExercise = BaseExercise & {
    type: "partOfAWord";

      missing: string[];
      word: string[];
      english: string;

  };
  

  const data: PartOfAWordExercise = {
    type: "partOfAWord",
      _id: "12345",
      instructions: "Type the missing part of the word.",
      missing: [
        "chi"
      ],
      word: [
        "fuo",
        "chi"
      ],
      english: "fires",

  
    isComplete: false,
    hasFailed: false,
  }