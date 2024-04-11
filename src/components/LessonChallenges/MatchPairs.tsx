"use client"
import { LessonState } from "@/types/lesson.types"

export default function MatchPairs({ data }: { data: LessonState }) {
  const { activeExercise } = data

  return <div>{activeExercise._id}</div>
}
