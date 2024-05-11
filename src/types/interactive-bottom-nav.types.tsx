import { RootState } from "@/redux/store"
import { LessonState, Status } from "./lesson.types"

export interface IInteractiveNavProps {
  status: Status
  loading: boolean
  userInput: RootState["userInputReduxState"]
  activeExercise: LessonState["activeExercise"]
}
