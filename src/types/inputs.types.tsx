import { FillInTheBlankExercise } from "./fill-in-the-blanks.types"
import { FillInWhatYouHearExercise } from "./fill-in-what-you-hear.types"
import { LessonState } from "./lesson.types"
import { TypeInWhatYouHearExercise } from "./type-in-what-you-hear.types"
import { WriteTheSentenceExercise } from "./write-the-word.types"

export interface BaseInputProps<T> {
  activeExercise: FillInTheBlankExercise | FillInWhatYouHearExercise | TypeInWhatYouHearExercise | WriteTheSentenceExercise
  activeExerciseId: LessonState["activeExercise"]["_id"]
  input: string
  handleChange: (e: React.FormEvent<T>) => void
}

export interface TextAreaProps extends BaseInputProps<HTMLTextAreaElement> {}
export interface InputProps extends BaseInputProps<HTMLInputElement> {
  word: string
}
