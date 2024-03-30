"use client";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/hooks/useRedux";
import { selectLesson } from "@/features/lessonSlice";
import { useGetLessonQuery } from "@/services/api";
//Interactive Components
import { ChooseTheRightSolution } from "@/components/LessonChallenges/ChooseTheRightSolution";
import MatchPairs from "@/components/LessonChallenges/MatchPairs";
import Conjunction from "@/components/LessonChallenges/Conjunction";
import FillInTheBlank from "@/components/LessonChallenges/FillInTheBlanks";
import FillInWhatYouHear from "@/components/LessonChallenges/FillInWhatYouHear";
import ListenAndSelect from "@/components/LessonChallenges/ListenAndSelect";
import MissingSyllable from "@/components/LessonChallenges/MissingSyllable";
import MultipleAnswers from "@/components/LessonChallenges/MultipleAnswers";
import PartOfAWord from "@/components/LessonChallenges/PartOfAWord";
import Reorder from "@/components/LessonChallenges/Reorder";
import ReorderWhatYouHear from "@/components/LessonChallenges/ReorderWhatYouHear";
import SelectTheMissingWord from "@/components/LessonChallenges/SelectTheMissingWord";
import SpeakingAndPronunciation from "@/components/LessonChallenges/SpeakingAndPronunciation";
import TwoBlanks from "@/components/LessonChallenges/TwoBlanks";
import TypeInWhatYouHear from "@/components/LessonChallenges/TypeInWhatYouHear";
import WriteTheSentence from "@/components/LessonChallenges/WriteTheSentence";
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

  return <h1>Something went wrong in the switch statement</h1>;
}
