"use client";
import { LessonState } from "@/types/lesson.types";
import {
  useColorMode,
  Button,
  Box,
  InputLeftAddon,
  InputGroup,
  Input,
  Heading,
  Container,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useAppDispatch } from "@/hooks/useRedux";
import { v4 as uuid } from "uuid";
// import {
//   setUserInput,
//   clearUserInput,
// } from "../features/userInputSlice";
// import classNames from "../functions/classNames";
// import ProgressBar from "../components/ProgressBar";
// import Instruction from "../interactive_exercise_layouts/Instruction";
// import InteractiveLayout from "../interactive_exercise_layouts/InteractiveLayout";
// import useSpeechSynthesis from "../hooks/useSpeechSynthesis";

const ChooseTheRightSolution = ({ data }: { data: LessonState }) => {
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
      <Container>
        <Heading mt={10} mx={"auto"} textAlign={"center"} fontSize={"sm"}>
          Choose the Right Solution
        </Heading>
        <Flex gap={8} mt="20" justifyContent={"center"}>
          {data.activeExercise.type === "chooseTheRightSolution" &&
            data.activeExercise.availableWords.map((words) => (
              <Box key={uuid()}>
                <Button>{words}</Button>
              </Box>
            ))}
        </Flex>
      </Container>
      <Box m="40">{JSON.stringify(data.activeExercise)}</Box>
    </Box>
  );
};
export default ChooseTheRightSolution;
