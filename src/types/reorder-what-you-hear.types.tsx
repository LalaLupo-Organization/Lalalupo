import { BaseExercise } from "./lesson.types"

export type ReorderWhatYouHearExercise = BaseExercise & {
  type: "reorderWhatYouHear"
  english: string
  availableWords: string[]
}
