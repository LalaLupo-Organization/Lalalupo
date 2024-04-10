import { BaseExercise } from "./lesson.types"

export type ConjugationExercise = BaseExercise & {
  type: "conjugation"
  display: string
  availableWords: {
    pairs: [string, string][]
  }
}
