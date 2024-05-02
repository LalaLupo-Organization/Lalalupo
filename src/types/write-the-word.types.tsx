import { BaseExercise, Helper } from "./lesson.types"

export type WriteTheSentenceExercise = BaseExercise & {
  type: "writeTheSentence"
  regex: string
  displayMeaning: boolean
  displayText: string
  doubleSolution: boolean
  helper?: Helper[]
  originLanguage: string
}
