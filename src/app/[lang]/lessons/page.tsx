"use client";
import { useState } from "react";
import { Heading } from "@chakra-ui/react";
import { useAppSelector } from "@/hooks/useRedux";
import { selectLesson } from "@/features/lessonSlice";

//Interactive Components
import ChooseTheRightSolution from "@/components/language-challenges/ChooseTheRightSolution";
import MatchPairs from "@/components/language-challenges/MatchPairs";

export default function Lessons() {
  const [loadingLesson, setLoadingLesson] = useState(false);
  const lesson = useAppSelector((state) => selectLesson(state));

  if (loadingLesson) {
    return <Heading>Pre loading screen before Lesson</Heading>;
  }

  switch (lesson.activeExercise.type) {
    case "chooseTheRightSolution":
      return <ChooseTheRightSolution data={lesson} />;
    case "matchPairs":
      return <MatchPairs data={lesson} />;
  }

  return <Heading>Error with a redirect link</Heading>;
}
