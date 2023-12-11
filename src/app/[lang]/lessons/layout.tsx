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
    switch (activeExercise.type) {
      case "chooseTheRightSolution":
        return <Heading> ChooseTheRightSolution Nav</Heading>;
      case "matchPairs":
        return <Heading> MatchPairs Nav</Heading>;

      default:
        return null;
    }
  };
  return (
    <Box m={0} p={0} h={"100vh"}>
      <Box mt={20}>
        <Center>
          <Progress w={"50%"} value={60} rounded={"lg"}>
            <ProgressLabel>60%</ProgressLabel>
          </Progress>
        </Center>
      </Box>
      <Center w={"100%"}>{children}</Center>

      <Box
        bg="grey.300"
        pos="absolute"
        bottom={"70"}
        w="100%"
        p={4}
        color="white">
        {getNavigationComponent(activeExercise)}
      </Box>
    </Box>
  );
}
