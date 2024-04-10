"use client"
import { LessonState } from "@/types/lesson.types"

export default function MatchPairs({ data }: { data: LessonState }) {
  const { activeExercise, totalExercises, lives, numberComplete, interactiveExercises, numberFailed, remainingExercises } = data

  return <div>Mathcpairs</div>
}
