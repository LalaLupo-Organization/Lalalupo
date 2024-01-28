"use client";
import { Box, Button, Grid, GridItem, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { selectUserInput } from "@/features/userInputSlice";
import { selectMessage } from "@/features/userSlice";
import { selectActiveExercise } from "@/features/lessonSlice";
import useAssessment from "@/hooks/useAssessment";
import { useAppSelector } from "@/hooks/useRedux";
export function InteractiveBottomNav() {
  const { lessonButtonClick } = useAssessment();

  const { userInput } = useAppSelector((state) => selectUserInput(state));
  const messages = useAppSelector((state) => selectMessage(state));
  const { isComplete } = useAppSelector((state) => selectActiveExercise(state));
  useEffect(() => {}, [messages]);

  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" h="20" bg="grey.100"></GridItem>
        <GridItem w="100%" h="20" bg="grey.100">
          <Flex justifyContent="center" alignItems="center" height="100%">
            <Button
              onClick={() => lessonButtonClick()}
              isDisabled={!userInput ? true : false}
            >
              {isComplete ? "CONTINUE" : "CHECK"}
            </Button>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="20" bg="grey.100"></GridItem>
      </Grid>
    </Box>
  );
}
