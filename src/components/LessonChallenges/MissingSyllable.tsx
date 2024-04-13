"use client"
import Instruction from "@/components/Headings/Instruction"
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout"
import { clearUserInput, setSingleInput } from "@/features/userInputSlice"
import classNames from "@/helpers/classNames"
import { useAppDispatch } from "@/hooks/useRedux"
import { BaseExercise, LessonState } from "@/types/lesson.types"
import { MissingSyllableExercise } from "@/types/missing-syllables.types"
import { useEffect, useState } from "react"
import { v4 as uuid } from "uuid"
export default function MissingSyllable({ data }: { data: LessonState }) {
  const { activeExercise } = data
  function getType(exercise: BaseExercise): exercise is MissingSyllableExercise {
    return exercise.type === "missingSyllable"
  }
  const dispatch = useAppDispatch()

  const [showSelected, setShowSelected] = useState({
    word: "",
    status: false,
  })
  const [activeExerciseId, setActiveExerciseId] = useState(() => activeExercise?._id)

  const handleSelectedItem = (e: React.SyntheticEvent, userAnswer: string) => {
    dispatch(setSingleInput(userAnswer))
    setShowSelected({ word: userAnswer, status: true })
  }

  useEffect(() => {
    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id)
      setShowSelected({ word: "", status: false })
      dispatch(clearUserInput())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSelected, activeExercise?._id])

  return (
    <div
      className="flex flex-col

   justify-center w-full items-center"
    >
      {/* <ProgressBar
        remainingExercises={remainingExercises}
        totalNumberOfExercises={totalExercises}
        numberOfExercisesComplete={numberComplete}
        interactiveExercises={interactiveExercises}
        numberOfExercisesFailed={numberFailed}
        lives={lives && lives}
      /> */}
      <InteractiveLayout id={activeExercise && activeExercise._id}>
        <Instruction instruction={getType(activeExercise) ? activeExercise.instructions : null} />
        <div className="flex">
          {getType(activeExercise) &&
            activeExercise.display.map(item =>
              item === activeExercise?.solution ? (
                <div key={uuid()}>
                  <span
                    className=" inline-block  ml-1 border-b-2 relative   text-xl font-fredoka tracking-wider border-color_purple_default  border-dashed  text-color_purple_darker text-center font-semibold"
                    style={{
                      width: `${showSelected.word !== "" ? showSelected.word.length * 13 + "px" : item.length * 13 + "px"}`,
                    }}
                  >
                    {showSelected.word}{" "}
                  </span>{" "}
                  <span className="ml-2"></span>
                </div>
              ) : (
                <p key={uuid()} className=" inline-block   border-black  text-xl">
                  {item}{" "}
                </p>
              )
            )}
          &nbsp; &nbsp; <p className="text-gray-700">({getType(activeExercise) && activeExercise?.english})</p>
        </div>

        {/* <AudioBubble solution={getType(activeExercise) && activeExercise.italian} /> */}

        <div className="grid grid-cols-2 -mt-2 gap-y-1 mb-40 flex-wrap  md:w-2/3  sm:w-full">
          {getType(activeExercise) &&
            activeExercise?.availableWords.map(word => (
              <div
                key={uuid()}
                className="m-1 cursor-pointer"
                onClick={activeExercise?.isComplete || activeExercise?.hasFailed ? undefined : e => handleSelectedItem(e, word)}
              >
                <div
                  className={classNames(
                    (activeExercise?.isComplete || activeExercise?.hasFailed) && showSelected.word === word
                      ? "text-blue_border_darker border-blue_border cursor-not-allowed"
                      : (activeExercise?.isComplete || activeExercise?.hasFailed) && showSelected.word !== word
                        ? "text-gray-800  cursor-not-allowed"
                        : showSelected.word === word
                          ? "text-blue_border_darker border-blue_border cursor-pointer"
                          : "cursor-pointer",

                    "text-center bg-white box-border p-2 sm:p-2 border border-2 rounded-lg font-bold active:duration-300 active:ease-in outline-none"
                  )}
                >
                  {word}
                </div>
              </div>
            ))}
        </div>
      </InteractiveLayout>
    </div>
  )
}
