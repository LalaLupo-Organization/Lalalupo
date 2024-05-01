import { BaseExercise } from "./lesson.types"

export type TypeInWhatYouHearExercise = BaseExercise & {
  type: "typeInWhatYouHear"
  english: string
  doubleSolution: boolean
  displayMeaning: boolean
  vocabularyHelper?: string[]
  audio: string
}
