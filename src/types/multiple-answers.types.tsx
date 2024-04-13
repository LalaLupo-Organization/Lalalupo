import { BaseExercise } from "./lesson.types"

export type MultipleAnswersExercise = BaseExercise & {
  type: "multipleAnswers"

  availableWords: {
    italian: string
    correct: boolean
    english: string
  }[]
  targetNumber: number
  displayMeaning: boolean
}
