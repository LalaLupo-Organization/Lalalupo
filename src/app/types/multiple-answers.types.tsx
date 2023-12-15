import { BaseExercise } from "./lesson.types";

export type MultipleAnswersExercise = BaseExercise & {
    type: "multipleAnswers";
 
      availableWords: {
        italian: string;
        correct: boolean;
        english: string;
      }[];
      targetNumber: number;
      displayMeaning: boolean;

  };
  

  const data: MultipleAnswersExercise = {
    type: "multipleAnswers",
      _id: '12345',
     
      instructions: "Select all verbs conjugated with 'avere' in the present perfect.",
      availableWords: [
        {
          italian: "portare",
          correct: true,
          english: "(to bring)"
        },
        {
          italian: "dire",
          correct: true,
          english: "(to tell)"
        },
        {
          italian: "comprare",
          correct: true,
          english: "(to buy)"
        },
        {
          italian: "vendere",
          correct: true,
          english: "(to sell)"
        },
        {
          italian: "partire",
          correct: false,
          english: "(to leave)"
        },
        {
          italian: "tornare",
          correct: false,
          english: "(to return)"
        }
      ],
      targetNumber: 4,
      displayMeaning: true,
    

    isComplete: false,
    hasFailed: false,
  }