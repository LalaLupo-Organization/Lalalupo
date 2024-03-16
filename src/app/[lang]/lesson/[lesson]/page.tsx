"use client";
import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { useAppSelector } from "@/hooks/useRedux";
import { selectLesson } from "@/features/lessonSlice";
import { useGetLessonQuery } from "@/services/api";
//Interactive Components
import ChooseTheRightSolution from "@/components/language-challenges/ChooseTheRightSolution";
import MatchPairs from "@/components/language-challenges/MatchPairs";
import Conjunction from "@/components/language-challenges/Conjunction";
import FillInTheBlank from "@/components/language-challenges/FillInTheBlanks";
import FillInWhatYouHear from "@/components/language-challenges/FillInWhatYouHear";
import ListenAndSelect from "@/components/language-challenges/ListenAndSelect";
import MissingSyllable from "@/components/language-challenges/MissingSyllable";
import MultipleAnswers from "@/components/language-challenges/MultipleAnswers";
import PartOfAWord from "@/components/language-challenges/PartOfAWord";
import Reorder from "@/components/language-challenges/Reorder";
import ReorderWhatYouHear from "@/components/language-challenges/ReorderWhatYouHear";
import SelectTheMissingWord from "@/components/language-challenges/SelectTheMissingWord";
import SpeakingAndPronunciation from "@/components/language-challenges/SpeakingAndPronunciation";
import TwoBlanks from "@/components/language-challenges/TwoBlanks";
import TypeInWhatYouHear from "@/components/language-challenges/TypeInWhatYouHear";
import WriteTheSentence from "@/components/language-challenges/WriteTheSentence";
import { useParams } from "next/navigation";
export default function Lessons() {
  const params = useParams();

  const {
    data: sanityLessonData,
    error: sanityLessonError,
    isLoading: sanityLessonIsLoading,
    //@ts-ignore
  } = useGetLessonQuery({ index: params.lesson });
  const lesson = useAppSelector((state) => selectLesson(state));

  useEffect(() => {
    if (sanityLessonData) {
      console.log("🚀 ~ useEffect ~ sanityLessonData:", sanityLessonData);
      console.log("🚀 ~ useEffect ~ params.lesson:", params);
      console.log("🚀 ~ Lessons ~ lesson:", lesson);
    }
  }, [sanityLessonData]);

  // if (sanityLessonIsLoading) {
  //   return <Heading>Loading</Heading>;
  // }
  switch (lesson.activeExercise.type) {
    // sanityLessonData &&
    // sanityLessonData.exercise[0].selectOption
    case "chooseTheRightSolution":
      return <ChooseTheRightSolution data={lesson} />;
    // case "matchPairs":
    //   return <MatchPairs data={lesson} />;
    case "conjugation":
      return <Conjunction data={lesson} />;

    case "reorder":
      return <Reorder data={lesson} />;
    case "reorderWhatYouHear":
      return <ReorderWhatYouHear data={lesson} />;
    case "fillInTheBlank":
      return <FillInTheBlank data={lesson} />;
    case "fillInWhatYouHear":
      return <FillInWhatYouHear data={lesson} />;
    case "listenAndSelect":
      return <ListenAndSelect data={lesson} />;
    case "missingSyllable":
      return <MissingSyllable data={lesson} />;
    case "multipleAnswers":
      return <MultipleAnswers data={lesson} />;
    case "partOfAWord":
      return <PartOfAWord data={lesson} />;
    case "selectTheMissingWord":
      return <SelectTheMissingWord data={lesson} />;
    case "speakingAndPronunciation":
      return <SpeakingAndPronunciation data={lesson} />;
    case "twoBlanks":
      return <TwoBlanks data={lesson} />;
    case "typeInWhatYouHear":
      return <TypeInWhatYouHear data={lesson} />;
    case "writeTheSentence":
      return <WriteTheSentence data={lesson} />;
  }

  return <Heading>Something went wrong in the switch statement</Heading>;
}
