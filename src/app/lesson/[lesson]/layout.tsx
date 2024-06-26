"use client"

import { useAppSelector } from "@/hooks/useRedux"
import { selectLesson } from "@/features/lessonSlice"
import { LessonState } from "@/types/lesson.types"
import { InteractiveBottomNav } from "@/components/LessonNavigation/InteractiveBottomNav"
import ListenAndSelectNav from "@/components/LessonNavigation/ListenAndSelectNav"
import MultipleAnswersNav from "@/components/LessonNavigation/MultipleAnswersNav"
// import SpeakingAndPronunciationNav from "@/components/LessonNavigation/SpeakingAndPronunciationNav"
import { selectMessage } from "@/features/userSlice"
import { selectUserInput } from "@/features/userInputSlice"
import { Confetti } from "@/components/Confetti/Confetti"
import { Montserrat } from "next/font/google"
import classNames from "@/helpers/classNames"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
export default function LessonLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const lesson = useAppSelector(state => selectLesson(state))
  const messages = useAppSelector(state => selectMessage(state))
  const userInput = useAppSelector(state => selectUserInput(state))

  const { activeExercise } = lesson
  const getNavigationComponent = (activeExercise: LessonState["activeExercise"]) => {
    // Maybe make it object in next update??
    const status = messages?.activeExerciseComplete
      ? "success"
      : messages?.activeExerciseWrongAnswer
        ? "failure"
        : messages.warning
          ? "warning"
          : userInput.userInput
            ? "active"
            : "disabled"
    //This function
    switch (activeExercise.type) {
      case "listenAndSelect":
        return <ListenAndSelectNav />
      case "multipleAnswers":
        return <MultipleAnswersNav />
      // case "speakingAndPronunciation":
      //   return <SpeakingAndPronunciationNav />
      default:
        return (
          <>
            {status === "success" && <Confetti />}
            <InteractiveBottomNav status={status} loading={messages.loading} userInput={userInput} activeExercise={activeExercise} />
          </>
        )
    }
  }
  return (
    <div className={classNames("flex flex-col min-h-screen relative", montserrat.className)}>
      <div className="flex-grow px-4">{children}</div>
      <footer className="flex-none">{getNavigationComponent(activeExercise)}</footer>
    </div>
  )
}
