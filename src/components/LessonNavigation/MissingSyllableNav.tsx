import ButtonInteractiveLesson from "@/components/Buttons/ButtonInteractive"
import InActiveToActiveLayout from "@/components/Layouts/InactiveToActiveLayout"
import NavbarLayout from "@/components/Layouts/NavbarLayout"
import SuccessToFailureLayout from "@/components/Layouts/SuccessToFailure"
import { Loader } from "@/components/Loaders1/Loader"
import { selectActiveExercise } from "@/features/lessonSlice"
import { selectUserInput } from "@/features/userInputSlice"
import { selectMessage } from "@/features/userSlice"
import useAssessment from "@/hooks/useAssessment"
import { useAppSelector } from "@/hooks/useRedux"
import { BaseExercise } from "@/types/lesson.types"
import { MissingSyllableExercise } from "@/types/missing-syllables.types"
import { useEffect } from "react"
export default function MissingSyllableNav() {
  const { lessonButtonClick } = useAssessment()
  function getType(exercise: BaseExercise): exercise is MissingSyllableExercise {
    return exercise.type === "missingSyllable"
  }
  const messages = useAppSelector(state => selectMessage(state))
  const userInput = useAppSelector(state => selectUserInput(state))
  const activeExercise = useAppSelector(state => selectActiveExercise(state))
  useEffect(
    () => {},
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [messages]
  )
  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if ((messages.activeExerciseComplete || messages.activeExerciseWrongAnswer || userInput.userInput) && key === "Enter") {
        lessonButtonClick()
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput, messages])
  if (messages.activeExerciseComplete) {
    return (
      <NavbarLayout color="bg-green-200" gridColsNumber={6}>
        <SuccessToFailureLayout success={true}>
          {messages.loading ? (
            <ButtonInteractiveLesson
              background="bg-green-600 cursor-pointer text-white"
              lessonButtonClick={lessonButtonClick}
              buttonDisplayText="LOADING..."
              shadowColor="bg-green-800"
              lottie={<Loader />}
            />
          ) : (
            <ButtonInteractiveLesson
              background="bg-green-600 cursor-pointer text-white"
              lessonButtonClick={lessonButtonClick}
              buttonDisplayText="CONTINUE"
              shadowColor="bg-green-800"
            />
          )}
        </SuccessToFailureLayout>
      </NavbarLayout>
    )
  }

  if (messages.activeExerciseWrongAnswer) {
    return (
      <NavbarLayout color="bg-red-200" gridColsNumber={6}>
        <SuccessToFailureLayout
          success={false}
          solution={
            getType(activeExercise)
              ? Array.isArray(activeExercise?.solution)
                ? activeExercise.solution.join(" ") // Convert array to string if it's an array
                : typeof activeExercise?.solution === "string"
                  ? activeExercise.solution // Use directly if it's a string
                  : undefined // Use undefined if solution is neither an array nor a string
              : undefined // Use undefined if getType(activeExercise) is false
          }
        >
          {messages.loading ? (
            <ButtonInteractiveLesson
              background="bg-red-600 cursor-pointer text-white"
              lessonButtonClick={lessonButtonClick}
              buttonDisplayText="LOADING..."
              shadowColor="bg-red-800"
              lottie={<Loader />}
            />
          ) : (
            <ButtonInteractiveLesson
              background="bg-red-600 cursor-pointer text-white"
              lessonButtonClick={lessonButtonClick}
              buttonDisplayText="CONTINUE"
              shadowColor="bg-red-800"
            />
          )}
        </SuccessToFailureLayout>
      </NavbarLayout>
    )
  }

  return (
    <NavbarLayout color="bg-white" gridColsNumber={6}>
      {!userInput.userInput ? (
        <InActiveToActiveLayout>
          <ButtonInteractiveLesson
            background="bg-gray-200 text-gray-400 cursor-not-allowed"
            lessonButtonClick={() => null}
            buttonDisplayText="CHECK"
            shadowColor="bg-gray-200"
          />
        </InActiveToActiveLayout>
      ) : (
        <InActiveToActiveLayout>
          <ButtonInteractiveLesson
            background="bg-color_purple_darker text-white cursor-pointer"
            lessonButtonClick={lessonButtonClick}
            buttonDisplayText="CHECK"
            shadowColor="bg-color-purple_deep"
          />
        </InActiveToActiveLayout>
      )}
    </NavbarLayout>
  )
}
