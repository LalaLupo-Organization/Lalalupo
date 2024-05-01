import AccentedLetters from "@/components/AccentedLetters/AccentedLetters"
import Instruction from "@/components/Headings/Instruction"
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout"
import SpeechBubble from "@/components/SpeechBubble/SpeechBubble"
import VocabularyHelper from "@/components/VocabularyHelper/VocabularyHelper"
import { clearUserInput, setSingleInput } from "@/features/userInputSlice"
import { useAppDispatch } from "@/hooks/useRedux"
import { FillInTheBlankExercise } from "@/types/fill-in-the-blanks.types"
import { BaseExercise, LessonState } from "@/types/lesson.types"
import { useEffect, useState } from "react"
import { v4 as uuid } from "uuid"
import { ProgressBar } from "../ProgressBars/ProgressBar"
import Input from "../Inputs/Input"

export default function FillInTheBlanks({ data }: { data: LessonState }) {
  const { activeExercise, totalExercises, lives, numberComplete, interactiveExercises, numberFailed, remainingExercises } = data

  function getType(exercise: BaseExercise): exercise is FillInTheBlankExercise {
    return exercise.type === "fillInTheBlank"
  }
  const [input, setInput] = useState("")
  const insertAccentedVowel = (e: any) => {
    setInput(input + e.target.innerText)
    dispatch(setSingleInput(input + e.target.innerText))
  }

  const dispatch = useAppDispatch()
  // const speak = useSpeechSynthesis();
  const [activeExerciseId, setActiveExerciseId] = useState(() => activeExercise?._id)

  const handleChange = (e: any) => {
    dispatch(setSingleInput(e.target.value))
    setInput(e.target.value)
  }

  useEffect(() => {
    if (activeExercise?.isComplete) {
      // speak(activeExercise.fillInTheBlank.solution.join().replace(/^\*\*\*,/gm, ""))
    }

    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id)
      dispatch(clearUserInput())
      setInput("")
    }
    //eslint-disable-next-line
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

        <SpeechBubble
          color="text-black"
          // displayTextAudioURL={getType(activeExercise) ? activeExercise.displayTextAudioURL : ""}
          imageClassName="!translate-y-7 sm:!translate-y-9 !w-40 sm:!w-48"
          font="medium"
          displayText={getType(activeExercise) ? activeExercise.displayText : ""}
          teacher="teacherTwo"
        />
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
        <AccentedLetters insertAccentedVowel={insertAccentedVowel} activeExercise={activeExercise} />
        {getType(activeExercise) && <VocabularyHelper data={activeExercise?.vocabularyHelper || []} />}
      </InteractiveLayout>
    </div>
  )
}
