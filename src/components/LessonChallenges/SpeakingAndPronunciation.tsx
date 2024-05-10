import Instruction from "@/components/Headings/Instruction"
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout"
import { clearUserInput } from "@/features/userInputSlice"
import { useAppDispatch } from "@/hooks/useRedux"
import { BaseExercise, LessonState } from "@/types/lesson.types"
import { SpeakingAndPronunciationExercise } from "@/types/speaking-and-pronunciation.types"
import { useEffect, useState } from "react"
import { ProgressBar } from "../ProgressBars/ProgressBar"
import dynamic from "next/dynamic"
const SpeechBubble = dynamic(() => import("@/components/SpeechBubble/SpeechBubble"), { ssr: false })
import Helper from "@/components/Helper/Helper"

export default function SpeakingAndPronunciation({ data }: { data: LessonState }) {
  const { activeExercise, totalExercises, lives, numberComplete, interactiveExercises, numberFailed, remainingExercises } = data
  function getType(exercise: BaseExercise): exercise is SpeakingAndPronunciationExercise {
    return exercise.type === "speakingAndPronunciation"
  }
  const [userSpeech] = useState("")
  const dispatch = useAppDispatch()
  // const speak = useSpeechSynthesis();
  const [activeExerciseId, setActiveExerciseId] = useState(() => activeExercise?._id)

  useEffect(() => {
    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id)
      dispatch(clearUserInput())
    }

    //eslint-disable-next-line
  }, [activeExercise, userSpeech])
  if (typeof navigator !== "undefined" && !navigator.userAgent.includes("Mozilla")) {
    return (
      <div>
        <h1>Firefox does not support speech recognition</h1>
      </div>
    )
  }

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
        <Instruction instruction={getType(activeExercise) ? activeExercise.instructions : null} />

        <SpeechBubble
          color="text-black"
          audio
          solution={getType(activeExercise) ? activeExercise.solutionAudioURL : ""}
          displayTextAudioURL="s"
          imageClassName="!translate-y-3 sm:!translate-y-4 !w-40 sm:!w-48"
          font="medium"
          displayText={getType(activeExercise) ? activeExercise.displayText : ""}
          teacher="teacherOne"
          hasMic={(getType(activeExercise) && activeExercise.micLang) || undefined}
        />
        {getType(activeExercise) && <Helper data={activeExercise?.helper || []} />}
      </InteractiveLayout>
    </div>
  )
}
