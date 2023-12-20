import { BaseExercise } from "./lesson.types";

export type SpeakingAndPronunciationExercise = BaseExercise & {
  type: "speakingAndPronunciation";

  doubleSolution: boolean;
  vocabularyHelper: string[];
  display: string;
  displayMeaning: boolean;
};
