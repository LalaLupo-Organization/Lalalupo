import { BaseExercise } from "./lesson.types"

export type FillInWhatYouHearExercise = BaseExercise & {
  type: "fillInWhatYouHear"
  solution: string[]
  displayMeaning: boolean
  english: string
  missingWord: string
}
