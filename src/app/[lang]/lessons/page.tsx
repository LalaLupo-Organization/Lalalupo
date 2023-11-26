"use client";
import { useState } from "react";
import { Heading } from "@chakra-ui/react";
import { useAppSelector } from "@/app/hooks/useRedux";
import { selectLesson } from "@/features/lessonSlice";

//Interactive Components
import ChooseTheRightSolution from "@/app/components/language-challenges/ChooseTheRightSolution";

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
      return <Heading>MatchPairs</Heading>;
  }

  return <Heading>Error with a redirect link</Heading>;
}
