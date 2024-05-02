import { BaseExercise } from "./lesson.types"

export type FillInWhatYouHearExercise = BaseExercise & {
  type: "fillInWhatYouHear"
  solution: string[]
  displayMeaning: boolean
  vocabularyHelper?: string[]
  originLanguage: string
  solutionAudioURL: string
  missingWord: string
}
