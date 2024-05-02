import { BaseExercise, LessonState } from "@/types/lesson.types"
import React, { useEffect, useState } from "react"
// import '../style.css';
import { clearUserInput, setSingleInput } from "@/features/userInputSlice"
import { WriteTheSentenceExercise } from "@/types/write-the-word.types"
// import useSpeechSynthesis from "@/hooks/useSpeechSynthesis";
import VocabularyHelper from "@/components/VocabularyHelper/VocabularyHelper"
import { useAppDispatch } from "@/hooks/useRedux"

import AccentedLetters from "@/components/AccentedLetters/AccentedLetters"
import Instruction from "@/components/Headings/Instruction"
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout"
import SpeechBubble from "@/components/SpeechBubble/SpeechBubble"
import { ProgressBar } from "../ProgressBars/ProgressBar"
import TextArea from "../TextAreas/TextArea"
export default function WriteTheSentence({ data }: { data: LessonState }) {
  const { activeExercise, totalExercises, lives, numberComplete, interactiveExercises, numberFailed, remainingExercises, languageCode } =
    data
  function getType(exercise: BaseExercise): exercise is WriteTheSentenceExercise {
    return exercise.type === "writeTheSentence"
  }
  const [input, setInput] = useState("")

  const dispatch = useAppDispatch()
  // const speak = useSpeechSynthesis();

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
    if (activeExercise?.isComplete) {
      // speak(activeExercise?.writeInItalian.solution);
    }

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
        <Instruction instruction={activeExercise && activeExercise?.instructions} />
        <SpeechBubble
          color="text-black"
          font="medium"
          // displayTextAudioURL={getType(activeExercise) ? activeExercise.displayTextAudioURL : ""}
          imageClassName="!translate-y-7 sm:!translate-y-9 !w-40 sm:!w-48"
          displayText={getType(activeExercise) ? activeExercise.displayText : ""}
          teacher="teacherTwo"
        />

        {getType(activeExercise) && (
          <TextArea activeExercise={activeExercise} activeExerciseId={activeExerciseId} input={input} handleChange={handleChange} />
        )}

        <AccentedLetters languageCode={languageCode} insertAccentedVowel={insertAccentedVowel} activeExercise={activeExercise} />
        {getType(activeExercise) && <VocabularyHelper data={activeExercise?.vocabularyHelper ?? []} />}
      </InteractiveLayout>
    </div>
  )
}
