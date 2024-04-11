import { BaseExercise } from "./lesson.types"

export interface IAvailableWord {
  label: string
  hasImage: boolean
  imageSrc: string
}

export type ChooseTheRightSolutionExercise = BaseExercise & {
  type: "chooseTheRightSolution"
  availableWords: IAvailableWord[]
  displayImage: boolean
  displayImageSrc: string
}
