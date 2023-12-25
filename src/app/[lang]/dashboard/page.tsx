"use client";
import React, { useState, useEffect } from "react";
import { Heading, Box, Text, Button } from "@chakra-ui/react";
import {
  useGetCourseStructureQuery,
  useGetUserQuery,
  useGetLessonQuery,
} from "@/services/api";
import { v4 as uuid } from "uuid";
import Link from "next/link";
import { LocalParamProps } from "@/types/user-progress.types";
//TODO - THE USER OBJECT ARRAY BELOW IS TEMPORARY - IT REPRESENTS THE USER PROGRESS WHEN COMPLETING LESSONS.
//! CYPRESS TEST - We have to check that the length of userProgress === length of courseStructureUnits
// const user: User = {
//   userId: "user1",
//   userProgress: [
//     {
//       unitTitle: "unit1",
//       lessonId: "1",
//       lessonLock: false,
//       hasAnimated: false,
//       isCompleted: false,
//     },
//     {
//       unitTitle: "unit1",
//       lessonId: "2",
//       lessonLock: false,
//       hasAnimated: false,
//       isCompleted: false,
//     },
//     {
//       unitTitle: "unit2",
//       lessonId: "1",
//       lessonLock: false,
//       hasAnimated: false,
//       isCompleted: false,
//     },
//   ],
// };

export default function Dashboard({ params: { lang } }: LocalParamProps) {
  // Initialize state to track processed units
  const [processedUnits, setProcessedUnits] = useState<string[]>([]);
  const {
    data: sanityData,
    error: sanityDataError,
    isLoading: sanityDataIsLoading,
  } = useGetCourseStructureQuery("");
  const {
    data: firebaseUserData,
    error: firebaseUserError,
    isLoading: firebaseUserIsLoading,
  } = useGetUserQuery(null);

  useEffect(() => {
    // Extract unique unitIds from userProgressArray

    if (sanityData && firebaseUserData) {
      const uniqueUnitIds = firebaseUserData.userProgress.map(
        (lesson: any) => lesson.unitTitle,
      ); // ['unit1', 'unit2']

      const test = sanityData.map((item: any) => item.lessons);

      console.log("🚀 ~ file: page.tsx:68 ~ useEffect ~ test:", test);

      setProcessedUnits(uniqueUnitIds);
    }
  }, [sanityData, firebaseUserData]);

  return (
    <div>
      {sanityData ? (
        processedUnits.map((unitId, i) => {
          // Render the unit title
          const { unitTitle, color } = sanityData[i];
          return (
            <Box key={uuid()} mx={"auto"} textAlign={"center"}>
              <Heading bg={color} py={"4"} my={"4"} fontWeight={"900"}>
                {unitTitle}
              </Heading>
              {/* MAP OVER USER PROGRESS ARRAY  */}
              {firebaseUserData &&
                firebaseUserData.userProgress
                  // .filter((lesson) => lesson.unitTitle === unitId)
                  .map((lesson) => (
                    <Heading key={uuid()}>
                      <Text fontSize={"lg"}></Text>
                      <Link
                        prefetch={true}
                        href={{
                          pathname: `/${lang}/lessons`,
                          query: {
                            documentIndex: i,
                            fieldName: "B",
                          },
                        }}
                      >
                        {lesson.lessonId}{" "}
                      </Link>
                    </Heading>
                  ))}
            </Box>
          );
        })
      ) : (
        <Box mx={"auto"} textAlign={"center"}>
          {" "}
          <Text>Loading</Text>
        </Box>
      )}
    </div>
  );
}
