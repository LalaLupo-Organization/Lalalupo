import { BaseExercise } from "./lesson.types";

export type SpeakingAndPronunciationExercise = BaseExercise & {
  type: "speakingAndPronunciation";

  doubleSolution: boolean;
  vocabularyHelper: string[];
  display: string;
  displayMeaning: boolean;
};

const data: SpeakingAndPronunciationExercise = {
  type: "speakingAndPronunciation",
  _id: "2343423",
  solution: "Vado da Marco.",
  doubleSolution: false,
  instructions: "Say this in Italian. Omit the subject pronoun (if present).",
  vocabularyHelper: ["to go = andare", "Mark = Marco"],
  display: "I am going to Mark's.",
  displayMeaning: false,

  isComplete: false,
  hasFailed: false,
};
