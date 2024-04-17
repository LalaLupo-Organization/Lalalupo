import { BaseExercise } from "./lesson.types"

export interface IAvailableWord {
  word: string
  wordAudioURL: string
}

export type ReorderExercise = BaseExercise & {
  type: "reorder"
  displayText: string
  displayTextAudioURL: string
  availableWords: IAvailableWord[]
}
