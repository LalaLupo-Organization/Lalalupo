import { BaseExercise } from "./lesson.types"

export type ListenAndSelectExercise = BaseExercise & {
  type: "listenAndSelect"
  english: string
  audio: string
  availableWords: [string][]
}
