"use client"

import { useAppSelector } from "@/hooks/useRedux"
import { selectLesson } from "@/features/lessonSlice"
import { LessonState } from "@/types/lesson.types"
import { InteractiveBottomNav } from "@/components/LessonNavigation/InteractiveBottomNav"
// import ReorderBottomNav from "@/components/LessonNavigation/ReorderNav"
import FillInTheBlankNav from "@/components/LessonNavigation/FillnTheBlanksNav"
import ConjugationNav from "@/components/LessonNavigation/ConjugationNav"
// import ReorderWhatYouHearNav from "@/components/LessonNavigation/ReorderWhatYouHearNav"
import FillInWhatYouHearNav from "@/components/LessonNavigation/FillInWhatYouHear"
import ListenAndSelectNav from "@/components/LessonNavigation/ListenAndSelectNav"
import MissingSyllableNav from "@/components/LessonNavigation/MissingSyllableNav"
import MultipleAnswersNav from "@/components/LessonNavigation/MultipleAnswersNav"
import PartOfAWordNav from "@/components/LessonNavigation/PartOfAWordNav"
import SelectTheMissingWordNav from "@/components/LessonNavigation/SelectTheMissingWordNav"
import SpeakingAndPronunciationNav from "@/components/LessonNavigation/SpeakingAndPronunciationNav"
import TwoBlanksNav from "@/components/LessonNavigation/TwoBlanksNav"
import TypeInWhatYouHearNav from "@/components/LessonNavigation/TypeInWhatYouHearNav"
import WriteTheSentenceNav from "@/components/LessonNavigation/WriteTheSentenceNav"
import { selectMessage } from "@/features/userSlice"
import { selectUserInput } from "@/features/userInputSlice"
import { Confetti } from "@/components/Confetti/Confetti"
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
        : userInput.userInput
          ? "active"
          : "disabled"
    //This function
    switch (activeExercise.type) {
      case "chooseTheRightSolution":
        return (
          <>
            {status === "success" && <Confetti />}
            <InteractiveBottomNav status={status} loading={messages.loading} userInput={userInput} activeExercise={activeExercise} />
          </>
        )
      case "matchPairs":
        return (
          <>
            {status === "success" && <Confetti />}
            <InteractiveBottomNav status={status} loading={messages.loading} userInput={userInput} activeExercise={activeExercise} />
          </>
        )
      case "conjugation":
        return <ConjugationNav />
      // case "reorder":
      //   return <ReorderBottomNav />
      // case "reorderWhatYouHear":
      //   return <ReorderWhatYouHearNav />
      case "fillInTheBlank":
        return <FillInTheBlankNav />
      case "fillInWhatYouHear":
        return <FillInWhatYouHearNav />
      case "listenAndSelect":
        return <ListenAndSelectNav />
      case "missingSyllable":
        return <MissingSyllableNav />
      case "multipleAnswers":
        return <MultipleAnswersNav />
      case "partOfAWord":
        return <PartOfAWordNav />
      case "selectTheMissingWord":
        return <SelectTheMissingWordNav />
      case "speakingAndPronunciation":
        return <SpeakingAndPronunciationNav />
      case "twoBlanks":
        return <TwoBlanksNav />
      case "typeInWhatYouHear":
        return <TypeInWhatYouHearNav />
      case "writeTheSentence":
        return <WriteTheSentenceNav />
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
    <div className="flex flex-col min-h-screen relative">
      <div className="flex-grow px-4">{children}</div>
      <footer className="flex-none">{getNavigationComponent(activeExercise)}</footer>
    </div>
  )
}
