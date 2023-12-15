import { BaseExercise } from "./lesson.types";

export type ReorderExercise = BaseExercise & {
    type: "reorder";
   
      solution: string;
      displayText: string;
      availableWords: string[];
  
  };

  const data: ReorderExercise = {
    type: "reorder",
      _id: "12345",
      solution: "Non giocare con il fuoco!",
      instructions: "Reorder the words to translate the sentence.",
      displayText: "Do not play with fire!",
      availableWords: [
        "Non",
        "giocare",
        "con",
        "il",
        "fuoco!",
        "gioco",
        "lo",
        "fuochi!",
        "suonare"
      ],
  
    isComplete: false,
    hasFailed: false,
  }