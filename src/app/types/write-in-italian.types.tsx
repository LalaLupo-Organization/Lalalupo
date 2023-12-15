import { BaseExercise } from "./lesson.types";

export type WriteInItalianExercise = BaseExercise & {
    type: "writeInItalian";
  
      displayMeaning: boolean;
      display: string;
      doubleSolution: boolean;
      vocabularyHelper: string[];
  
  };
  

  const data: WriteInItalianExercise = {
    type: "writeInItalian",
      _id: "1223423",
      solution: "L'esercizio è semplice.",
      instructions: "Translate this into Italian. Include the subject pronoun (if present).",
      displayMeaning: false,
      display: "The exercise is simple.",
      doubleSolution: false,
      vocabularyHelper: [
        "exercise = esercizio",
        "simple = semplice"
      ],
  
    isComplete: false,
    hasFailed: false,
  }