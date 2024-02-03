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
import { setSingleInput, clearUserInput } from "@/features/userInputSlice";

export default function ChooseTheRightSolution({
  data,
}: {
  data: LessonState;
}) {
  const dispatch = useAppDispatch();
  const {
    activeExercise,
    totalExercises,
    lives,
    numberComplete,
    interactiveExercises,
    numberFailed,
    remainingExercises,
  } = data;
  const [activeExerciseId, setActiveExerciseId] = useState(
    () => activeExercise?._id,
  );

  const [showSelected, setShowSelected] = useState({
    word: "",
    status: false,
  });
  const [randomizedData, setRandomizedData] = useState(
    () =>
      activeExercise?.type === "chooseTheRightSolution" &&
      activeExercise?.availableWords
        .map((item) => {
          return item;
        })
        .sort(() => Math.random() - 0.5),
  );

  useEffect(() => {
    if (activeExercise && activeExercise?._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id);
      dispatch(clearUserInput());
      setShowSelected({ word: "", status: false });
      setRandomizedData(
        () =>
          activeExercise?.type === "chooseTheRightSolution" &&
          activeExercise.availableWords
            //@ts-ignore
            .map((item) => {
              return item;
            })
            .sort(() => Math.random() - 0.5),
      );
    }
    //eslint-disable-next-line
  }, [showSelected, activeExercise?._id]);

  function handleUserInput({ input }: { input: string }) {
    dispatch(setSingleInput(input));
  }

  return (
    <Box>
      <Container>
        <Heading mt={10} mx={"auto"} textAlign={"center"} fontSize={"sm"}>
          Choose the Right Solution
        </Heading>
        <Flex gap={8} mt="20" justifyContent={"center"}>
          {data.activeExercise.type === "chooseTheRightSolution" &&
            data.activeExercise.availableWords.map((word) => (
              <Box key={uuid()}>
                <Button onClick={() => handleUserInput({ input: word })}>
                  {word}
                </Button>
              </Box>
            ))}
        </Flex>
        ``
      </Container>
      <Box m="40">{JSON.stringify(data.activeExercise)}</Box>
    </Box>
  );
}
