import AccentedLetters from "@/components/AccentedLetters/AccentedLetters"
// import AudioBubble from "@/components/AudioBubble/AudioBubble"
import Instruction from "@/components/Headings/Instruction"
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout"
import { clearUserInput, setSingleInput } from "@/features/userInputSlice"
import { useAppDispatch } from "@/hooks/useRedux"
import { BaseExercise, LessonState } from "@/types/lesson.types"
import React, { useEffect, useState } from "react"
import { v4 as uuid } from "uuid"
import Helper from "../Helper/Helper"
import { FillInWhatYouHearExercise } from "@/types/fill-in-what-you-hear.types"
import { ProgressBar } from "../ProgressBars/ProgressBar"
import AudioBubble from "../AudioBubble/AudioBubble"
import Input from "../Inputs/Input"

export default function FillInWhatYouHear({ data }: { data: LessonState }) {
  const { activeExercise, totalExercises, lives, numberComplete, interactiveExercises, numberFailed, remainingExercises, languageCode } =
    data

  function getType(exercise: BaseExercise): exercise is FillInWhatYouHearExercise {
    return exercise.type === "fillInWhatYouHear"
  }

  const [input, setInput] = useState("")
  const dispatch = useAppDispatch()

  const [activeExerciseId, setActiveExerciseId] = useState(activeExercise?._id)

  const insertAccentedVowel = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInput(input + e.currentTarget.innerText)
    dispatch(setSingleInput(input + e.currentTarget.innerText))
  }

  const handleChange = (e: any) => {
    dispatch(setSingleInput(e.target.value))
    setInput(e.target.value)
  }

  useEffect(() => {
    if (activeExercise?.isComplete) {
      // speak(activeExercise?.fillInWhatYouHear.solution.join())
    }

    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setActiveExerciseId(activeExercise?._id)
      dispatch(clearUserInput())
      setInput("")
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeExercise])

  return (
    <div
      className="flex flex-col

     justify-center w-full items-center"
    >
      <ProgressBar
        activeExercise={activeExercise}
        remainingExercises={remainingExercises}
        totalNumberOfExercises={totalExercises}
        numberOfExercisesComplete={numberComplete}
        interactiveExercises={interactiveExercises}
        numberOfExercisesFailed={numberFailed}
        lives={lives && lives}
        id={activeExercise && activeExercise._id}
      />
      <InteractiveLayout id={activeExercise && activeExercise._id}>
        <Instruction className="w-full" instruction={activeExercise && activeExercise.instructions} />
        <AudioBubble imageClassName="!translate-y-7 sm:!translate-y-9 !w-40 sm:!w-48" />

        <div className="flex outline-none p-5 py-4 text-base w-full font-bold text-black  tracking-wider border-2 bg-gray-100 rounded-lg h-32 relative z-1">
          {getType(activeExercise) &&
            Array.isArray(activeExercise.solution) &&
            activeExercise.solution.map(word => (
              <Input
                key={uuid()}
                activeExercise={activeExercise}
                activeExerciseId={activeExerciseId}
                word={word}
                handleChange={handleChange}
                input={input}
              />
            ))}
        </div>
        <AccentedLetters languageCode={languageCode} insertAccentedVowel={insertAccentedVowel} activeExercise={activeExercise} />
        {getType(activeExercise) && <Helper data={activeExercise?.helper ?? []} />}
      </InteractiveLayout>
    </div>
  )
}
