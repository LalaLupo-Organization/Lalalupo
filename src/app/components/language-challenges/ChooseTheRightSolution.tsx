"use client";
import { UserIcon } from "../icons/Icons";
import { LessonState } from "@/app/types/lessons.types";
import {
  Heading,
  useColorMode,
  Button,
  InputLeftAddon,
  InputGroup,
  Text,
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

  return (
    <>
      <Button my={4} onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark mode" : "Light mode"}
      </Button>
      <Heading size={"xl"} variant={colorMode}>
        Choose The Right Solution
      </Heading>
      <InputGroup variant={"pill"}>
        {/* <InputLeftAddon>Phone:</InputLeftAddon> */}
        <Input
          placeholder="Placeholder"
          fontSize={"md"}
          variant="pill"
        />
      </InputGroup>
      {/* <UserIcon color={"grey.900"} /> */}
      {/* <Text size={"xl"} color={"grey.900"}>
        Choose The Right Solution
      </Text> */}
    </>
  );
};
export default ChooseTheRightSolution;
