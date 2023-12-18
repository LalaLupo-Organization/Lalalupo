"use client";
import React, { useState, useEffect } from "react";
import {
  Heading,
  Box,
  Text,
  Container,
  Center,
  Button,
} from "@chakra-ui/react";
import type {
  User,
  UserProgressObject,
} from "@/types/user-progress.types";
import { useGetCourseStructureQuery } from "@/services/api";

//TODO - THE USER OBJECT ARRAY BELOW IS TEMPORARY - IT REPRESENTS THE USER PROGRESS WHEN COMPLETING LESSONS.

const user: User = {
  userId: "user1",
  userProgress: [
    {
      unitId: "unit1",
      lessonId: "1",
      lessonLock: false,
      hasAnimated: false,
      isCompleted: false,
    },
    {
      unitId: "unit2",
      lessonId: "2",
      lessonLock: true,
      hasAnimated: true,
      isCompleted: false,
    },
  ],
};

export default function Dashboard() {
  // Initialize state to track processed units
  const [processedUnits, setProcessedUnits] = useState<string[]>([]);

  const { data, error, isLoading } = useGetCourseStructureQuery("");
  useEffect(() => {
    // Extract unique unitIds from userProgressArray
    const uniqueUnitIds = Array.from(
      new Set(user.userProgress.map((lesson) => lesson.unitId))
    );
    // Set the processed units to uniqueUnitIds
    setProcessedUnits(uniqueUnitIds);
  }, [data]);
  console.log("🚀 ~ file: page.tsx:64 ~ Dashboard ~ data:", data);

  return (
    <div>
      {data ? (
        processedUnits.map((unitId) => {
          // Render the unit title
          const { unitTitle, cssClass } = data[0][unitId];
          return (
            <Box key={unitId} mx={"auto"} textAlign={"center"}>
              <Heading
                bg={cssClass}
                py={"4"}
                my={"4"}
                fontWeight={"900"}>
                {unitTitle}
              </Heading>
              {/* MAP OVER USER PROGRESS OBJECT  */}
              {user.userProgress
                .filter((lesson) => lesson.unitId === unitId)
                .map((lesson) => (
                  <Heading key={lesson.lessonId}>
                    <Text fontSize={"lg"}>{lesson.lessonId}</Text>
                    <Text fontSize={"lg"}></Text>
                    <Button> Lesson </Button>
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
