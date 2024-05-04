import { BaseExercise, Helper } from "./lesson.types"

export type FillInWhatYouHearExercise = BaseExercise & {
  type: "fillInWhatYouHear"
  solution: string[]
  displayMeaning: boolean
  helper?: Helper[]
  originLanguage: string
  solutionAudioURL: string
  missingWord: string
}
