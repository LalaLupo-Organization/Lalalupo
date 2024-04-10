import "@fontsource/nunito"
import localFont from "next/font/local"
import { useRef, useState, useEffect } from "react"
import { useAppDispatch } from "@/hooks/useRedux"
import { v4 as uuid } from "uuid"
import { setSingleInput, clearUserInput } from "@/features/userInputSlice"
import classNames from "@/helpers/classNames"
import { ProgressBar } from "@/components/ProgressBars/ProgressBar"
import Instruction from "@/components/Headings/Instruction"
import { BaseExercise, LessonState } from "@/types/lesson.types"
import HintArrow from "../../../public/HintArrow.svg"
// import useSpeechSynthesis from "../hooks/useSpeechSynthesis";
import mockimage from "@/public/sandwich.png"
import Image from "next/image"
import { ChooseTheRightSolutionExercise, IAvailableWord } from "@/types/choose-the-right-solution.types"
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout"
import useWindowSize from "@/hooks/useWindowSize"

const MoreSugarRegular = localFont({
  src: "../../../public/MoreSugarRegular.ttf",
  display: "swap",
})
export const ChooseTheRightSolution = ({ data }: { data: LessonState }) => {
  const { activeExercise, totalExercises, lives, numberComplete, interactiveExercises, numberFailed, remainingExercises } = data
  function getType(exercise: BaseExercise): exercise is ChooseTheRightSolutionExercise {
    return exercise.type === "chooseTheRightSolution"
  }
  // const speak = useSpeechSynthesis();
  const dispatch = useAppDispatch()

  const [randomizedData, setRandomizedData] = useState(
    () =>
      getType(activeExercise) &&
      activeExercise.availableWords.map(item => item).sort(() => Math.random() - 0.5)
  )
  const windowSize = useWindowSize()
  const [showSelected, setShowSelected] = useState({
    word: "",
    status: false,
  })
  const [activeExerciseId, setActiveExerciseId] = useState(() => activeExercise?._id)
  const handleSelectedItem = (e: React.SyntheticEvent, userAnswer: string) => {
    if (getType(activeExercise) && activeExercise.displayImage) {
      // speak(userAnswer);
    }

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

// function Hint({ hint, index }: { hint: IHint; index: number }) {
//   const windowSize = useWindowSize();
//   return (
//     <div className="group bg-white relative rounded-lg p-4 flex flex-col items-center justify-center z-1 text-hint border-2 border-hint">
//       <div className="h-full w-full absolute  rounded-lg striped-bg hint -z-10 border-hint border"></div>
//       <span
//         className={classNames(
//           index % 2 === 0
//             ? "md:-left-[103%] md:flex-row-reverse"
//             : "md:-right-[103%]",
//           "absolute top-1 flex gap-2"
//         )}
//       >
//         {windowSize.width > 768 && (
//           <Image
//             className={index % 2 === 0 ? "rotate-180" : ``}
//             src={HintArrow}
//             width={60}
//             height={10}
//             alt="Arrow"
//           />
//         )}
//         <p
//           className={classNames(
//             index % 2 === 0 ? "mt-[12px]" : "mb-[12px]",
//             "text-hint font-medium text-lg",
//             MoreSugarRegular.className
//           )}
//         >
//           Memory helper
//         </p>
//       </span>
//       <p className="text-hint text-center font-semibold flex">{hint.label}</p>
//     </div>
//   );
// }
