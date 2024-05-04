import { BaseExercise, Helper } from "./lesson.types"

export type FillInTheBlankExercise = BaseExercise & {
  type: "fillInTheBlank"
  displayText: string
  couldBeEmpty: any
  doubleSolution: boolean
  helper?: Helper[]
  missingWord: string
  availableWords: string[]
  regex: string
}
