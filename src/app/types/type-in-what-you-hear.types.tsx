import { BaseExercise } from "./lesson.types";

export type TypeInWhatYouHearExercise = BaseExercise & {
  type: "typeInWhatYouHear";

  solution: string;
  english: string;
  doubleSolution: boolean;
  displayMeaning: boolean;
  audio: string;
};
