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

export interface IAvailableAnswerProps {
  word: IAvailableWord
  activeExercise: ChooseTheRightSolutionExercise
  handleSelectedItem: (e: React.SyntheticEvent, userAnswer: string) => void
  showSelected: { word: string; status: boolean }
  index: number
}
