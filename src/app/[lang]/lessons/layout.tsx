"use client";
import {
  Container,
  Progress,
  ProgressLabel,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useAppSelector } from "@/app/hooks/useRedux";
import { selectLesson } from "@/features/lessonSlice";
import { LessonState } from "@/app/types/lessons.types";
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
    <Container m={0} p={0} h={"100vh"} bg="grey.50">
      <Progress colorScheme="success" value={60} rounded={"lg"}>
        <ProgressLabel>60%</ProgressLabel>
      </Progress>
      {children}
      <Box
        bg="grey.300"
        pos="fixed"
        bottom={"0"}
        w="100%"
        p={4}
        color="white">
        {getNavigationComponent(activeExercise)}
      </Box>
    </Container>
  );
}

const LanguageChallengeNavigationsContainer = ({
  data,
}: {
  data: LessonState;
}) => {};
