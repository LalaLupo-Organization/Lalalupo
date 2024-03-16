"use client";
import {
  Container,
  Progress,
  ProgressLabel,
  Box,
  Heading,
  Center,
} from "@chakra-ui/react";
import { useAppSelector } from "@/hooks/useRedux";
import { selectLesson } from "@/features/lessonSlice";
import { LessonState } from "@/types/lesson.types";
import ChooseTheRightSolutionBottomNav from "@/components/interactive-bottom-navbars/ChooseTheRightSolutionNav";
import ReorderBottomNav from "@/components/interactive-bottom-navbars/ReorderNav";
import FillInTheBlankNav from "@/components/interactive-bottom-navbars/FillnTheBlanksNav";
import ConjugationNav from "@/components/interactive-bottom-navbars/ConjugationNav";
import ReorderWhatYouHearNav from "@/components/interactive-bottom-navbars/ReorderWhatYouHearNav";
import FillInWhatYouHearNav from "@/components/interactive-bottom-navbars/FillInWhatYouHear";
import ListenAndSelectNav from "@/components/interactive-bottom-navbars/ListenAndSelectNav";
import MissingSyllableNav from "@/components/interactive-bottom-navbars/MissingSyllableNav";
import MultipleAnswersNav from "@/components/interactive-bottom-navbars/MultipleAnswersNav";
import PartOfAWordNav from "@/components/interactive-bottom-navbars/PartOfAWordNav";
import SelectTheMissingWordNav from "@/components/interactive-bottom-navbars/SelectTheMissingWordNav";
import SpeakingAndPronunciationNav from "@/components/interactive-bottom-navbars/SpeakingAndPronunciationNav";
import TwoBlanksNav from "@/components/interactive-bottom-navbars/TwoBlanksNav";
import TypeInWhatYouHearNav from "@/components/interactive-bottom-navbars/TypeInWhatYouHearNav";
import WriteTheSentenceNav from "@/components/interactive-bottom-navbars/WriteTheSentenceNav";
export default function LessonLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const lesson = useAppSelector((state) => selectLesson(state));

  const {
    activeExercise,
    totalExercises,
    lives,
    numberComplete,
    interactiveExercises,
    numberFailed,
    remainingExercises,
  } = lesson;
  const getNavigationComponent = (
    activeExercise: LessonState["activeExercise"]
  ) => {
    //This function
    switch (activeExercise.type) {
      case "chooseTheRightSolution":
        return <ChooseTheRightSolutionBottomNav />;
      // case "matchPairs":
      //   return <BottomNavigation />;
      case "conjugation":
        return <ConjugationNav />;
      case "reorder":
        return <ReorderBottomNav />;
      case "reorderWhatYouHear":
        return <ReorderWhatYouHearNav />;
      case "fillInTheBlank":
        return <FillInTheBlankNav />;
      case "fillInWhatYouHear":
        return <FillInWhatYouHearNav />;
      case "listenAndSelect":
        return <ListenAndSelectNav />;
      case "missingSyllable":
        return <MissingSyllableNav />;
      case "multipleAnswers":
        return <MultipleAnswersNav />;
      case "partOfAWord":
        return <PartOfAWordNav />;
      case "selectTheMissingWord":
        return <SelectTheMissingWordNav />;
      case "speakingAndPronunciation":
        return <SpeakingAndPronunciationNav />;
      case "twoBlanks":
        return <TwoBlanksNav />;
      case "typeInWhatYouHear":
        return <TypeInWhatYouHearNav />;
      case "writeTheSentence":
        return <WriteTheSentenceNav />;
      default:
        return null;
    }
  };
  return (
    <div className='flex flex-col h-screen'>
      <Center className='flex-grow'>{children}</Center>
      <footer className='flex-none'>
        {getNavigationComponent(activeExercise)}
      </footer>
    </div>
  );
}
