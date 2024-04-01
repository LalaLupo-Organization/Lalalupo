import { BaseExercise } from "./lesson.types";

<<<<<<< HEAD
export interface IAvailableWord {
  label: string;
  hasImage: boolean;
  imageSrc: string;
}

export interface IHint {
  label: string;
  hasImage: boolean;
  imageSrc?: string;
  type: string;
}

export type ChooseTheRightSolutionExercise = BaseExercise & {
  type: "chooseTheRightSolution";
  availableWords: IAvailableWord[];
  hint?: IHint;
=======
export type ChooseTheRightSolutionExercise = BaseExercise & {
  type: "chooseTheRightSolution";
  availableWords: string[];
>>>>>>> 2ce02c791e0ae117a649d719e08f86bf37509bab
  displayImage: boolean;
  displayImageSrc: string;
};
