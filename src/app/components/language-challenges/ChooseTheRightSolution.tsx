"use client";
import { LessonState } from "@/types/lessons.types";
import {
  useColorMode,
  Button,
  Box,
  InputLeftAddon,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";

const ChooseTheRightSolution = ({ data }: { data: LessonState }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const {
    activeExercise,
    totalExercises,
    lives,
    numberComplete,
    interactiveExercises,
    numberFailed,
    remainingExercises,
  } = data;

  return <Box>{/* //ChooseTheRightSOlution Component goes here..... */}</Box>;
};
export default ChooseTheRightSolution;
