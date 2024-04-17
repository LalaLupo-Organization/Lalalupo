import { BaseExercise } from "./lesson.types"

export interface IAvailableWord {
  word: string
  wordAudioURL: string
}

export type ReorderWhatYouHearExercise = BaseExercise & {
  type: "reorderWhatYouHear"
  displayText: string
  solutionAudioURL: string
  availableWords: IAvailableWord[]
}
