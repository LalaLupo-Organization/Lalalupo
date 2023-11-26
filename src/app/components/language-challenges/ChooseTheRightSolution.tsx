"use client";

import { LessonState } from "@/app/types/lessons.types";
import {
  Heading,
  useColorMode,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

const ChooseTheRightSolution = ({ data }: { data: LessonState }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("text.light", "text.dark");
  const {
    activeExercise,
    totalExercises,
    lives,
    numberComplete,
    interactiveExercises,
    numberFailed,
    remainingExercises,
  } = data;
  console.log(data);
  return (
    <>
      <Button my={4} onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark mode" : "Light mode"}
      </Button>
      <Heading bg={bg} color={"green"}>
        Choose The Right Solution
      </Heading>
    </>
  );
};
export default ChooseTheRightSolution;
