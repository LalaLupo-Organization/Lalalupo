import { BaseExercise } from "./lesson.types";

export type ChooseTheRightSolutionExercise = BaseExercise & {
  type: "chooseTheRightSolution";
  availableWords: string[];
  displayImage: boolean;
  displayImageSrc: string;
};
