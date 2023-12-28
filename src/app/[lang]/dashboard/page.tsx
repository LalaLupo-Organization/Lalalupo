"use client";
import React, { useState, useEffect } from "react";
import { Heading, Box, Text, Button } from "@chakra-ui/react";

import {
  useGetCourseStructureQuery,
  useGetUserQuery,
} from "@/services/api";
import { v4 as uuid } from "uuid";
import Link from "next/link";
import {
  LocalParamProps,
  UserProgressItem,
} from "@/types/user-progress.types";
//TODO - THE USER OBJECT ARRAY BELOW IS TEMPORARY - IT REPRESENTS THE USER PROGRESS WHEN COMPLETING LESSONS.
//! CYPRESS TEST - We have to check that the length of userProgress === length of courseStructure

export default function Dashboard({
  params: { lang },
}: LocalParamProps) {
  // Initialize state to track processed units
  // const [uniqueUnitIds, setUniqueUnitIds] = useState<string[]>([]);
  const [uniqueUnitIds, setUniqueUnitIds] = useState<string[]>([]);
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

  return (
    <div>
      {sanityData && (
        <Box
          key={uuid()}
          bg={sanityData[0].color}
          mx={"auto"}
          py={"4"}
          my={"4"}
          textAlign={"center"}>
          <Heading fontWeight={"900"}>
            {sanityData[0].unitTitle}
          </Heading>
          <Text>{sanityData[0].description}</Text>
        </Box>
      )}
      {sanityData ? (
        sanityData.map((unit: any, i: number) => {
          return (
            <Box mx={"auto"} p={4} textAlign={"center"} key={uuid()}>
              <Link href={`/${lang}/lesson/${i}`}>Link</Link>
              <Text fontSize={"sm"}>{unit.unitTitle}</Text>
              <Text fontSize={"xxs"}>
                {firebaseUserData?.userProgress[i]._id}
              </Text>
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
// {sanityData ? (
//   uniqueUnitIds.map((unitId, i) => {
//     // Render the unit title
//     const { unitTitle, color } = sanityData[i];
//     return (
//       <Box key={uuid()} mx={"auto"} textAlign={"center"}>
//         <Heading
//           bg={color}
//           py={"4"}
//           my={"4"}
//           fontWeight={"900"}>
//           {unitTitle}
//         </Heading>
//         {/* MAP OVER USER PROGRESS ARRAY  */}
//         {firebaseUserData &&
//           firebaseUserData.userProgress
//             .filter((lesson) => lesson.unitTitle === unitId)
//             .map((lesson, ref) => (
//               <Heading key={uuid()}>
//                 <Text fontSize={"lg"}></Text>
//                 <Link
//                   prefetch={true}
//                   href={{
//                     pathname: `/${lang}/lessons`,
//                     query: {
//                       documentIndex: i,
//                       fieldName: lesson.lessonId,
//                     },
//                   }}>
//                   {lesson.lessonId}{" "}
//                 </Link>
//               </Heading>
//             ))}
//       </Box>
//     );
//   })
