"use client"

import { ChooseTheRightSolutionBottomNav } from "@/components/LessonNavigation/ChooseTheRightSolutionNav"
import ConjugationNav from "@/components/LessonNavigation/ConjugationNav"
import FillInWhatYouHearNav from "@/components/LessonNavigation/FillInWhatYouHear"
import FillInTheBlankNav from "@/components/LessonNavigation/FillnTheBlanksNav"
import ListenAndSelectNav from "@/components/LessonNavigation/ListenAndSelectNav"
import MissingSyllableNav from "@/components/LessonNavigation/MissingSyllableNav"
import MultipleAnswersNav from "@/components/LessonNavigation/MultipleAnswersNav"
import PartOfAWordNav from "@/components/LessonNavigation/PartOfAWordNav"
import ReorderBottomNav from "@/components/LessonNavigation/ReorderNav"
import ReorderWhatYouHearNav from "@/components/LessonNavigation/ReorderWhatYouHearNav"
import SelectTheMissingWordNav from "@/components/LessonNavigation/SelectTheMissingWordNav"
import SpeakingAndPronunciationNav from "@/components/LessonNavigation/SpeakingAndPronunciationNav"
import TwoBlanksNav from "@/components/LessonNavigation/TwoBlanksNav"
import TypeInWhatYouHearNav from "@/components/LessonNavigation/TypeInWhatYouHearNav"
import WriteTheSentenceNav from "@/components/LessonNavigation/WriteTheSentenceNav"
import { selectLesson } from "@/features/lessonSlice"
import { useAppSelector } from "@/hooks/useRedux"
import { LessonState } from "@/types/lesson.types"
export default function LessonLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const lesson = useAppSelector(state => selectLesson(state))

  const { activeExercise } = lesson
  const getNavigationComponent = (activeExercise: LessonState["activeExercise"]) => {
    //This function
    switch (activeExercise.type) {
      case "chooseTheRightSolution":
        return <ChooseTheRightSolutionBottomNav />
      // case "matchPairs":
      //   return <BottomNavigation />;
      case "conjugation":
        return <ConjugationNav />
      case "reorder":
        return <ReorderBottomNav />
      case "reorderWhatYouHear":
        return <ReorderWhatYouHearNav />
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
        return null
    }
  }
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="flex-grow px-4">{children}</div>
      <footer className="flex-none">{getNavigationComponent(activeExercise)}</footer>
    </div>
  )
}
