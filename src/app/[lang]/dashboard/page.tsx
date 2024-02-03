"use client";
import React, { useState, useEffect } from "react";
import {
  Heading,
  Box,
  Text,
  Button,
  Container,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { BiBook } from "react-icons/bi";
import {
  useGetCourseStructureQuery,
  useGetUserQuery,
} from "@/services/api";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import { LocalParamProps } from "@/types/languageCodeParams.types";
import LevelStepLocked from "@/public/LeveStepLocked.svg";

export default function Dashboard({
  params: { lang },
}: LocalParamProps) {
  const {
    data: sanityData,
    error: sanityDataError,
    isLoading: sanityDataIsLoading,
  } = useGetCourseStructureQuery({ languageCode: "en-it" });
  const {
    data: firebaseUserData,
    error: firebaseUserError,
    isLoading: firebaseUserIsLoading,
  } = useGetUserQuery(null);

  useEffect(() => {
    if (firebaseUserData && sanityData) {
      console.log("Firebase user data:", firebaseUserData);
      console.log("Sanity data:", sanityData);
    }
  }, [firebaseUserData, sanityData]);

  return (
    <div>
      {sanityData && firebaseUserData ? (
        firebaseUserData &&
        sanityData.map((unit: any, i: number) => {
          const isFirstLessonOfUnit = unit.lessonNumber === 1;
          const isFirstLesson =
            i === 0 ||
            (i > 0 &&
              sanityData[i - 1]?.unitTitle !== unit.unitTitle);
          const isFirstUnit =
            i === 0 ||
            (i > 0 &&
              sanityData[i - 1]?.unitTitle !== unit.unitTitle);

          return (
            <Box
              key={uuid()}
              mx={"auto"}
              p={4}
              textAlign={"center"}
              transform={`translateX(${
                i % 2 === 0
                  ? "0"
                  : i % 4 === 1 || i % 4 === 2
                    ? "40px"
                    : "-40px"
              })`}>
              {isFirstLessonOfUnit && (
                <Box
                  h="100"
                  p="4"
                  shadow="sm"
                  color="white"
                  w="500px"
                  bg="primary.400"
                  rounded="2xl"
                  mx={"auto"}>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center">
                    <Box textAlign="left">
                      <Heading size="sm">
                        Unit {unit.unitTitle}
                      </Heading>
                      <Text>Lorem ipsum dolor sit amet.</Text>
                    </Box>
                    <Box>
                      <Button>
                        <BiBook size={"24"} /> GuideBook
                      </Button>
                    </Box>
                  </Flex>
                </Box>
              )}

              <Flex
                h="11px"
                alignItems="center"
                justifyContent="center"
                mx={"auto"}
                mt={isFirstLessonOfUnit ? "20px" : undefined}
                p={8}
                rowGap={100}
                textAlign={"center"}>
                <Box>
                  <Image
                    alt="levelStep"
                    width={85}
                    height={85}
                    src={LevelStepLocked}
                  />
                  {/* {firebaseUserData?.userProgress[i].lessonNumber} */}
                </Box>
              </Flex>
            </Box>
          );
        })
      ) : (
        <Box mx={"auto"} textAlign={"center"}>
          <Text>Loading</Text>
        </Box>
      )}
      <Container></Container>
    </div>
  );
}
