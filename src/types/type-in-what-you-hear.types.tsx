import { BaseExercise, Helper } from "./lesson.types"

export type TypeInWhatYouHearExercise = BaseExercise & {
  type: "typeInWhatYouHear"
  originLanguage: string
  doubleSolution: boolean
  displayMeaning: boolean
  helper?: Helper[]
  solutionAudioURL: string
}
