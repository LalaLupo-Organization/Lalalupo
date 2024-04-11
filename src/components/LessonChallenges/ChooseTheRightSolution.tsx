import Instruction from "@/components/Headings/Instruction"
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout"
import { ProgressBar } from "@/components/ProgressBars/ProgressBar"
import { clearUserInput, setSingleInput } from "@/features/userInputSlice"
import classNames from "@/helpers/classNames"
import { useAppDispatch } from "@/hooks/useRedux"
import { ChooseTheRightSolutionExercise, IAvailableWord } from "@/types/choose-the-right-solution.types"
import { BaseExercise, LessonState } from "@/types/lesson.types"
import "@fontsource/nunito"
import Image from "next/image"
import { useEffect, useState } from "react"
import { v4 as uuid } from "uuid"

export const ChooseTheRightSolution = ({ data }: { data: LessonState }) => {
  const { activeExercise, totalExercises, lives, numberComplete, interactiveExercises, numberFailed, remainingExercises } = data
  function getType(exercise: BaseExercise): exercise is ChooseTheRightSolutionExercise {
    return exercise.type === "chooseTheRightSolution"
  }
  const dispatch = useAppDispatch()

  const [randomizedData, setRandomizedData] = useState(
    () => getType(activeExercise) && activeExercise.availableWords.map(item => item).sort(() => Math.random() - 0.5)
  )

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
    if (activeExercise && activeExercise?._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id)
      dispatch(clearUserInput())
      setShowSelected({ word: "", status: false })
      setRandomizedData(
        //@ts-ignore
        () =>
          getType(activeExercise) &&
          activeExercise.availableWords
            .map(item => {
              return item
            })
            .sort(() => Math.random() - 0.5)
      )
    }
    //eslint-disable-next-line
  }, [showSelected, activeExercise?._id])
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
        <Instruction position="center" instruction={activeExercise && activeExercise?.instructions} />

        <div
          style={{
            fontFamily: "Nunito, sans-serif",
          }}
          className="grid sm:grid-cols-3  sm:grid-row-0 grid-cols-6  mt-8 sm:mt-0 flex-wrap sm:p-10 justify-center  w-full sm:w-[90%] 2xl:w-full gap-3"
        >
          {randomizedData &&
            activeExercise &&
            //@ts-ignore

            randomizedData.map((word, index) => (
              <AvailableAnswer
                word={word as IAvailableWord}
                handleSelectedItem={handleSelectedItem}
                showSelected={showSelected}
                activeExercise={activeExercise as ChooseTheRightSolutionExercise}
                key={index}
                index={index}
              />
            ))}
        </div>
      </InteractiveLayout>
    </div>
  )
}

interface IAvailableAnswerProps {
  word: IAvailableWord
  activeExercise: ChooseTheRightSolutionExercise
  handleSelectedItem: (e: React.SyntheticEvent, userAnswer: string) => void
  showSelected: { word: string; status: boolean }
  index: number
}

function AvailableAnswer({ word, activeExercise, handleSelectedItem, showSelected, index }: IAvailableAnswerProps) {
  return (
    <div
      key={uuid()}
      className={`cursor-pointer h-full w-full sm:col-span-1  ${index === 2 ? " col-span-3 col-start-3 -ml-6 sm:-ml-0 " : " col-span-3"}`}
      onClick={activeExercise?.isComplete || activeExercise?.hasFailed ? undefined : e => handleSelectedItem(e, word.label)}
    >
      <div
        className={classNames(
          "bg-white",
          (activeExercise?.isComplete || activeExercise?.hasFailed) && showSelected.word === word.label
            ? "text-color_purple_darker border-color_purple_default !bg-active_card cursor-not-allowed"
            : (activeExercise?.isComplete || activeExercise?.hasFailed) && showSelected.word !== word.label
              ? "text-gray-800  cursor-not-allowed"
              : showSelected.word === word.label
                ? "text-color_purple_darker border-color_purple_default !bg-active_card cursor-pointer"
                : "cursor-pointer text-gray_default",

          `text-left box-border p-2 sm:p-2 border-2 rounded-lg font-bold active:duration-300 active:ease-in outline-none h-full flex flex-col items-center gap-1 capitalize relative z-1`
        )}
      >
        <div className="inset-0 translate-x-1.5 translate-y-1.5 absolute rounded-lg striped-bg -z-10 border"></div>

        <p>{word.label}</p>

        {word.hasImage && word.imageSrc && (
          <div className="flex-1 p-4 sm:p-6 md:p-8 bg-light_blue rounded-lg flex justify-center items-center overflow-hidden">
            <Image src={word.imageSrc} height={150} width={150} className="rounded-2xl mx-auto " alt="" />
          </div>
        )}
      </div>
    </div>
  )
}
