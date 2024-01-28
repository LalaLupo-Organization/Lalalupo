"use client";
import React, { useState, useEffect } from "react";
import {
  Heading,
  Box,
  Text,
  Button,
  Container,
} from "@chakra-ui/react";

import {
  useGetCourseStructureQuery,
  useGetUserQuery,
} from "@/services/api";
import { v4 as uuid } from "uuid";
import Link from "next/link";
import { UserProgressItem } from "@/types/user-progress.types";
import { LocalParamProps } from "@/types/languageCodeParams.types";
//TODO - THE USER OBJECT ARRAY BELOW IS TEMPORARY - IT REPRESENTS THE USER PROGRESS WHEN COMPLETING LESSONS.
//! CYPRESS TEST - We have to check that the length of userProgress === length of courseStructure

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
      console.log("🚀 ~ useEffect ~ sanityData:", sanityData);
      console.log(firebaseUserData);
    }
  }, [firebaseUserData, sanityData]);

  return (
    <div>
      {sanityData && firebaseUserData ? (
        firebaseUserData &&
        sanityData.map((unit: any, i: number) => {
          return (
            <Box key={uuid()} mx={"auto"} p={4} textAlign={"center"}>
              {unit.unitTitle ===
                firebaseUserData.userProgress[i].unitTitle &&
                unit.lessonNumber === 1 && (
                  <Heading>Unit {unit.unitTitle}</Heading>
                )}
              <Box mx={"auto"} p={4} textAlign={"center"}>
                <Text fontSize={"xxs"}>
                  {firebaseUserData?.userProgress[i].lessonNumber}
                </Text>
              </Box>
            </Box>
          );
        })
      ) : (
        <Box mx={"auto"} textAlign={"center"}>
          {" "}
          <Text>Loading</Text>
        </Box>
      )}
      <Container>
        <Text align="center" bg="grey.100" p="6">
          Note to self - to render the dashboard I am using 2 data
          sets. One from firebase and the other from sanity. The
          unitTitle field in each dataset needs to match up
          accordingly or this dashboard wont render correctly. Also
          the both datasets needs to be exactly the same length for
          this dashboard to render correctly.
        </Text>
      </Container>
    </div>
  );
}
