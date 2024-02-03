"use client";
import { LessonState } from "@/types/lesson.types";
import { Box, Heading, Container } from "@chakra-ui/react";

export default function MatchPairs({ data }: { data: LessonState }) {
  const {
    activeExercise,
    totalExercises,
    lives,
    numberComplete,
    interactiveExercises,
    numberFailed,
    remainingExercises,
  } = data;

  return (
    <Box>
      <Container w={"60%"}>
        <Heading mt={10} mx={"auto"} textAlign={"center"} fontSize={"sm"}>
          MatchPairs
        </Heading>
        {JSON.stringify(data.activeExercise)}
      </Container>
    </Box>
  );
}
