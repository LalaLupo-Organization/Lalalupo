import { BaseExercise } from "./lesson.types"

export type TwoBlanksExercise = BaseExercise & {
  type: "twoBlanks"
  vocabularyHelper: string[]
  italian: string[] // Adjusted to be an array of objects
  english: string[]
}
