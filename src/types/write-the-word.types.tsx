import { BaseExercise } from "./lesson.types"

export type WriteTheSentenceExercise = BaseExercise & {
  type: "writeTheSentence"
  regex: string
  displayMeaning: boolean
  displayText: string
  doubleSolution: boolean
  vocabularyHelper: string[]
  originLanguage: string
}
