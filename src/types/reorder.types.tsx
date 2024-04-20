import { BaseExercise, LessonState } from "./lesson.types"

export interface IAvailableWord {
  word: string
  wordAudioURL: string
}

export type ReorderExercise = BaseExercise & {
  type: "reorder"
  displayText: string
  displayTextAudioURL: string
  availableWords: IAvailableWord[]
}

// For component ReorderWord

export interface ReorderProps {
  activeExercise: LessonState["activeExercise"]
  word: string
  handleMove: (e: React.MouseEvent<HTMLButtonElement>, userAnswer: any) => void
  picked: boolean
}
