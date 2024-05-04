import { HTMLMotionProps } from "framer-motion"
import { LessonState } from "./lesson.types"
import { ReactNode } from "react"

export interface AccentedLettersProps {
  insertAccentedVowel: (e: any) => void
  activeExercise: LessonState["activeExercise"]
  languageCode: LessonState["languageCode"]
}

export interface AccentedLetterButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode
  onClick: ((e: any) => void) | undefined
  className?: string
}
