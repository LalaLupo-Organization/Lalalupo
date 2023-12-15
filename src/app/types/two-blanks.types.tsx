import { BaseExercise } from "./lesson.types";

export type TwoBlanksExercise = BaseExercise & {
  type: "twoBlanks";

  solutions: string[];
  vocabularyHelper: string[];
  italian: string[];
  english: string[];
};

const data: TwoBlanksExercise = {
  type: "twoBlanks",
  _id: "123454",
  solutions: ["sei uscito", "Sono uscito"],
  instructions: "Fill in the blanks with the correct conjugation of the verb.",
  vocabularyHelper: ["to go out = uscire"],
  italian: [
    "Paolo, quando",
    "sei uscito",
    "?",
    "Sono uscito",
    "questo pomeriggio.",
  ],
  english: ["Paul, when did you go out? I went out this afternoon."],

  isComplete: false,
  hasFailed: false,
};
