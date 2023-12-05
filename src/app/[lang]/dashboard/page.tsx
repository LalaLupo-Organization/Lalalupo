"use client";
import React, { useState, useEffect } from "react";
import { Heading, Box, Text } from "@chakra-ui/react";
import type {
  User,
  UserProgressObject,
} from "@/types/user-progress.types";
import { useGetCourseStructureQuery } from "@/services/api";

// Define the user progress array with the specified type
//This Object is specific to each user
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

// Convert userProgressArray to an object with TypeScript type
const objectData: UserProgressObject = user.userProgress.reduce(
  (acc, item) => {
    acc[item.lessonId] = item;
    return acc;
  },
  {} as UserProgressObject
); // Use type assertion here

const courseStructure = {
  courseUnits: {
    unit1: {
      title: "Unit 1: Introduction to Language",
      description: "Learn the basics of the language.",
      cssClass: "bg-green-600",
      readingUrl: "https://example.com/unit1-reading",
      videoUrl: "https://example.com/unit1-video",
    },
    unit2: {
      title: "Unit 2: Vocabulary Building",
      description:
        "Expand your vocabulary with new words and phrases.",
      cssClass: "bg-blue-600",
      readingUrl: "https://example.com/unit2-reading",
      videoUrl: "https://example.com/unit2-video",
    },
  } as Record<string, any>,
  // Add more units as needed
};

export default function Dashboard() {
  // Initialize state to track processed units
  const [processedUnits, setProcessedUnits] = useState<string[]>([]);

  const {
    data: userProgress,
    error,
    isLoading,
  } = useGetCourseStructureQuery("");
  useEffect(() => {
    // Extract unique unitIds from userProgressArray
    const uniqueUnitIds = Array.from(
      new Set(user.userProgress.map((lesson) => lesson.unitId))
    );
    // Set the processed units to uniqueUnitIds
    setProcessedUnits(uniqueUnitIds);
  }, [userProgress]);

  return (
    <Box>
      <Heading>Dashboard</Heading>
      <Text>
        {" "}
        The idea here is to have the userProgress data come in from
        sanity.io and render in the UI - the data structure in
        sanity.io will be the same for all languages.
      </Text>
    </Box>
    // <div>
    //   {userProgress &&
    //     processedUnits.map((unitId) => {
    //       // Render the unit title
    //       const { unitTitle, cssClass } = userProgress[1][unitId];
    //       return (
    //         <div
    //           key={unitId}
    //           className="container mx-auto text-center">
    //           <h2
    //             className={`${cssClass} text-2xl  py-4 my-4 font-bold text-white`}>
    //             {unitTitle}
    //           </h2>
    //           {/* Render the array elements for this unit */}
    //           {user.userProgress
    //             .filter((lesson) => lesson.unitId === unitId)
    //             .map((lesson) => (
    //               <div key={lesson.lessonId}>
    //                 <p className="text-white text-lg">
    //                   {lesson.lessonId}
    //                 </p>
    //                 <p className="text-white text-lg">
    //                   {lesson.lessonLock}
    //                 </p>
    //                 {/* Rest of your code */}
    //               </div>
    //             ))}
    //         </div>
    //       );
    //     })}
    // </div>
  );
}
