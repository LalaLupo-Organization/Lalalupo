"use client"
import { useEffect } from "react"
import useAssessment from "@/hooks/useAssessment"
import ButtonInteractive from "@/components/Buttons/ButtonInteractive"
import { Loader } from "@/components/Loaders/Loader"
import NavbarLayout from "@/components/Layouts/NavbarLayout"
import InActiveToActiveLayout from "@/components/Layouts/InactiveToActiveLayout"
import SuccessToFailureLayout from "@/components/Layouts/SuccessToFailure"
import classNames from "@/helpers/classNames"
import { IInteractiveNavProps } from "@/types/interactive-bottom-nav.types"

export const InteractiveBottomNav: React.FC<IInteractiveNavProps> = ({ userInput, status, activeExercise, loading }) => {
  const { lessonButtonClick, skipCurrentExercise } = useAssessment()
  const { type } = activeExercise
  const conditionalObject = {
    navBGColor: {
      success: "bg-color_green_lighter",
      failure: "bg-error_lighter",
      disabled: "bg-white",
      active: "bg-white",
      warning: "bg-warning_nav_bg",
    },
  }

  const generateCheckingText = () => {
    if (type === "reorderWhatYouHear" || type === "reorder") {
      return "CONTINUE"
    }

    return "CHECK"
  }

  const generateSkipText = () => {
    if (type === "speakingAndPronunciation") return "CAN'T SPEAK NOW"
    return "SKIP"
  }
  const isMessage = status === "failure" || status === "success" || status === "warning"

  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (status !== "disabled" && userInput.userInput && key === "Enter") {
        lessonButtonClick()
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [userInput, status, lessonButtonClick])

  return (
    <NavbarLayout message={isMessage} color={conditionalObject.navBGColor[status]}>
      {isMessage && (
        <SuccessToFailureLayout
          solution={
            activeExercise?.type === "chooseTheRightSolution" && typeof activeExercise?.solution === "string"
              ? activeExercise.solution
              : undefined
          }
          status={status}
        >
          {loading ? (
            <ButtonInteractive
              background="bg-green-600 cursor-pointer text-white"
              lessonButtonClick={lessonButtonClick}
              buttonDisplayText="LOADING..."
              shadowColor="bg-green-800"
              lottie={<Loader />}
            />
          ) : (
            <div className="text-center w-full mt-4 sm:mt-0">
              <ButtonInteractive
                background={classNames(
                  status === "success" ? "bg-color_green_default success" : status === "warning" ? "bg-warning" : "bg-error failure",
                  "w-full cursor-pointer font-semibold text-lg sm:w-[180px] text-white"
                )}
                lessonButtonClick={lessonButtonClick}
                buttonDisplayText="CONTINUE"
                shadowColor=""
                status={status}
              />
            </div>
          )}
        </SuccessToFailureLayout>
      )}
      {!isMessage && (
        <>
          <InActiveToActiveLayout>
            <ButtonInteractive
              background={classNames(
                "bg-white border border-gray-200/70 text-gray_lighter cursor-pointer",
                type === "speakingAndPronunciation" ? "sm:w-[232px]" : "sm:w-[132px]"
              )}
              lessonButtonClick={skipCurrentExercise}
              buttonDisplayText={generateSkipText()}
              shadowColor="bg-gray-200"
            />
          </InActiveToActiveLayout>
          <InActiveToActiveLayout>
            <ButtonInteractive
              background={classNames(
                status === "active"
                  ? "bg-color_green_default text-white w-full cursor-pointer  font-semibold text-lg success"
                  : "bg-disabled border border-gray-200/70 text-disabled_text cursor-not-allowed",
                "sm:w-[180px]"
              )}
              lessonButtonClick={userInput.userInput ? lessonButtonClick : () => null}
              buttonDisplayText={userInput.userInput ? generateCheckingText() : "CHECK"}
              status={status}
            />
          </InActiveToActiveLayout>
        </>
      )}
    </NavbarLayout>
  )
}
