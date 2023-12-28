"use client";
import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { useAppSelector } from "@/hooks/useRedux";
import { selectLesson } from "@/features/lessonSlice";
import { useGetLessonQuery } from "@/services/api";
//Interactive Components
import ChooseTheRightSolution from "@/components/language-challenges/ChooseTheRightSolution";
import MatchPairs from "@/components/language-challenges/MatchPairs";
import { useParams } from "next/navigation";
export default function Lessons() {
  const params = useParams();

  const {
    data: sanityLessonData,
    error: sanityLessonError,
    isLoading: sanityLessonIsLoading,
    //@ts-ignore
  } = useGetLessonQuery({ index: params.lesson });
  console.log(params);
  const [loadingLesson, setLoadingLesson] = useState(false);
  const lesson = useAppSelector((state) => selectLesson(state));

  useEffect(() => {
    if (sanityLessonData) {
      console.log(
        "🚀 ~ file: page.tsx:29 ~ useEffect ~ sanityLessonData:",
        sanityLessonData,
      );
    }
  }, [sanityLessonData]);

  if (sanityLessonIsLoading) {
    return <Heading>Loading</Heading>;
  }

  switch (sanityLessonData && sanityLessonData.exercise[0].selectOption) {
    case "chooseTheRightSolution":
      return <ChooseTheRightSolution data={lesson} />;
    case "matchPairs":
      return <MatchPairs data={lesson} />;
  }

  return <Heading>Error with a redirect link</Heading>;
}
