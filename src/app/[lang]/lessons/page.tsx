"use client";
import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { useAppSelector } from "@/hooks/useRedux";
import { selectLesson } from "@/features/lessonSlice";
import { useGetLessonQuery } from "@/services/api";
import { useSearchParams } from "next/navigation";
//Interactive Components
import ChooseTheRightSolution from "@/components/language-challenges/ChooseTheRightSolution";
import MatchPairs from "@/components/language-challenges/MatchPairs";

export default function Lessons() {
  const searchParams = useSearchParams();
  const documentIndex = searchParams.get("documentIndex");
  const fieldName = searchParams.get("fieldName");

  const {
    data: sanityLessonData,
    error: sanityLessonError,
    isLoading: sanityLessonIsLoading,
    //@ts-ignore
  } = useGetLessonQuery({ documentIndex, fieldName });

  const [loadingLesson, setLoadingLesson] = useState(false);
  const lesson = useAppSelector((state) => selectLesson(state));

  useEffect(() => {
    if (sanityLessonData) {
      console.log(
        "🚀 ~ file: page.tsx:29 ~ useEffect ~ sanityLessonData:",
        sanityLessonData
      );
    }
  }, [sanityLessonData]);

  if (sanityLessonIsLoading) {
    return <Heading>Loading</Heading>;
  }

  switch (lesson.activeExercise.type) {
    case "chooseTheRightSolution":
      return <ChooseTheRightSolution data={lesson} />;
    case "matchPairs":
      return <MatchPairs data={lesson} />;
  }

  return <Heading>Error with a redirect link</Heading>;
}
