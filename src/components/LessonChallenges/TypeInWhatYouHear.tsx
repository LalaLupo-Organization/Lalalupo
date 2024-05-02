import AccentedLetters from "@/components/AccentedLetters/AccentedLetters"
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout"
import { clearUserInput, setSingleInput } from "@/features/userInputSlice"
import { useAppDispatch } from "@/hooks/useRedux"
import { BaseExercise, LessonState } from "@/types/lesson.types"
import React, { useEffect, useState } from "react"

import AudioBubble from "@/components/AudioBubble/AudioBubble"
import Instruction from "@/components/Headings/Instruction"
import { ProgressBar } from "../ProgressBars/ProgressBar"
import TextArea from "../TextAreas/TextArea"
import VocabularyHelper from "../VocabularyHelper/VocabularyHelper"
import { TypeInWhatYouHearExercise } from "@/types/type-in-what-you-hear.types"
export default function TypeInWhatYouHear({ data }: { data: LessonState }) {
  const { activeExercise, totalExercises, lives, numberComplete, interactiveExercises, numberFailed, remainingExercises, languageCode } =
    data

  const [input, setInput] = useState("")
  const dispatch = useAppDispatch()

  function getType(exercise: BaseExercise): exercise is TypeInWhatYouHearExercise {
    return exercise.type === "typeInWhatYouHear"
  }

  const [activeExerciseId, setActiveExerciseId] = useState(() => activeExercise?._id)

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    dispatch(setSingleInput(e.currentTarget.value))
    setInput(e.currentTarget.value)
  }

  const insertAccentedVowel = (e: any) => {
    setInput(input + e.target.innerText)
    dispatch(setSingleInput(input + e.target.innerText))
  }

  useEffect(() => {
    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id)
      dispatch(clearUserInput())
      setInput("")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {/* @ts-ignore */}
        <AudioBubble imageClassName="!translate-y-7 sm:!translate-y-9 !w-40 sm:!w-48" solution={activeExercise.audio} />

        {getType(activeExercise) && (
          <TextArea activeExercise={activeExercise} activeExerciseId={activeExerciseId} input={input} handleChange={handleChange} />
        )}

        <AccentedLetters languageCode={languageCode} insertAccentedVowel={insertAccentedVowel} activeExercise={activeExercise} />
        {getType(activeExercise) && <VocabularyHelper data={activeExercise?.vocabularyHelper ?? []} />}
      </InteractiveLayout>
    </div>
  )
}
