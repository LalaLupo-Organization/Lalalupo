import { BaseExercise } from "./lesson.types";

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
  displayImage: boolean;
  displayImageSrc: string;
};
