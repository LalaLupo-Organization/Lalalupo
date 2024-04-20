import { RootState } from "@/redux/store"
import { LessonState } from "./lesson.types"

export interface IInteractiveNavProps {
  status: "success" | "failure" | "disabled" | "active"
  loading: boolean
  userInput: RootState["userInputReduxState"]
  activeExercise: LessonState["activeExercise"]
}
