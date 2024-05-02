import { BaseExercise } from "./lesson.types"

export type TypeInWhatYouHearExercise = BaseExercise & {
  type: "typeInWhatYouHear"
  originLanguage: string
  doubleSolution: boolean
  displayMeaning: boolean
  vocabularyHelper?: string[]
  solutionAudioURL: string
}
