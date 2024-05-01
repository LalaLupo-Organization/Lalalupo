import "@fontsource/nunito"
import React, { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux"
import { v4 as uuid } from "uuid"
import { setObjectInput, selectUserInput } from "@/features/userInputSlice"
import classNames from "@/helpers/classNames"
import { ProgressBar } from "@/components/ProgressBars/ProgressBar"
import Instruction from "@/components/Headings/Instruction"
import { BaseExercise, LessonState } from "@/types/lesson.types"
import Image from "next/image"
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout"
import { MatchPairsExercise, IReduxUserObjectInput, IRandomizedData, IAvailableAnswerProps } from "@/types/match-pairs.types"
import useAssessment from "@/hooks/useAssessment"
import MatchPairsImage from "../../../public/assets/ExercisesImages/MatchPairsImage.png"

export const MatchPairs = ({ data }: { data: LessonState }) => {
  const { activeExercise, totalExercises, lives, numberComplete, interactiveExercises, numberFailed, remainingExercises } = data
  function getType(exercise: BaseExercise): exercise is MatchPairsExercise {
    return exercise.type === "matchPairs"
  }
  // const speak = useSpeechSynthesis();
  const { userObjectInput: userInput } = useAppSelector(state => selectUserInput(state)) as IReduxUserObjectInput
  const { lessonButtonClick } = useAssessment()

  // Starter audio logic.
  const [audioURL, setAudioURL] = useState<string>("")

  const dispatch = useAppDispatch()

  // EN - IT
  function generateRandomizedData(pairs: [string, string][]): IRandomizedData {
    const firstArrayElments = pairs
      .flat()
      .filter((_, index) => index % 2 === 0)
      .sort(() => Math.random() - 0.5)
    const secondArrayElments = pairs
      .flat()
      .filter((_, index) => index % 2 === 1)
      .sort(() => Math.random() - 0.5)
    return { column1: firstArrayElments, column2: secondArrayElments }
  }

  const [randomizedData, setRandomizedData] = useState<boolean | IRandomizedData>(
    () => getType(activeExercise) && generateRandomizedData(activeExercise.availableWords.pairs)
  )
  const [activeExerciseId, setActiveExerciseId] = useState(() => activeExercise?._id)

  ;[]
  //@ts-ignore
  useEffect(() => {
    if (activeExercise && activeExercise?._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id)
      // dispatch(clearUserInput());
      // setShowSelected({ word: "" });
      setRandomizedData(() => getType(activeExercise) && generateRandomizedData(activeExercise.availableWords.pairs))
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput?.successfulPairs.length, activeExercise?._id])

  useEffect(() => {
    let timeoutId: null | NodeJS.Timeout

    if (userInput?.pair.length === 2) {
      timeoutId = setTimeout(() => {
        checkPairValidity()
      }, 500) // Adjust the timeout duration as needed
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput?.pair?.length])

  useEffect(() => {
    if (userInput?.successfulPairs.length > 2) {
      lessonButtonClick()
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput?.successfulPairs])

  useEffect(() => {
    dispatch(
      setObjectInput({
        pair: [],
        successfulPairs: [],
      })
    )
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // function handleMatchPair(e: React.SyntheticEvent, word: string) {
  //   if (showSelected.pair.length === 2 || checkIfInSuccessful(word)) {
  //     return false;
  //   }
  //   if (!showSelected.pair.length) {
  //     dispatch(setObjectInput({ ...userInput?.userObjectInput, pair: [word] }));
  //     setShowSelected({ ...showSelected, pair: [word] });
  //   } else if (showSelected.pair.length === 1) {
  //     if (showSelected.pair[0] === word) {
  //       setShowSelected({ ...showSelected, pair: [] });
  //     } else {
  //       setShowSelected({
  //         ...showSelected,
  //         pair: [...showSelected.pair, word],
  //       });
  //     }
  //   }
  // }

  function handleMatchPair(e: React.SyntheticEvent, word: string) {
    if (userInput?.pair.length === 2 || checkIfInSuccessful(word)) {
      return false
    }
    if (!userInput?.pair.length) {
      setAudioURL("")
      dispatch(setObjectInput({ ...userInput, pair: [word] }))
      // setShowSelected({ ...showSelected, pair: [word] });
    } else if (userInput?.pair.length === 1) {
      if (userInput?.pair[0] === word) {
        // setShowSelected({ ...showSelected, pair: [] });
        dispatch(setObjectInput({ ...userInput, pair: [] }))
      } else if (checkIfSameColumn(word)) {
        // setShowSelected({
        //   ...showSelected,
        //   pair: [...userInput?.pair, word],
        // });
        dispatch(
          setObjectInput({
            ...userInput,
            //eslint-disable-next-line no-unsafe-optional-chaining
            pair: [...userInput?.pair, word],
          })
        )
      }
    }
  }

  // function checkPairValidity() {
  //   const { pair } = showSelected;
  //   const pairOriginalArray =
  //     getType(activeExercise) &&
  //     activeExercise.availableWords.pairs.find(
  //       (originalPair) =>
  //         originalPair.includes(pair[0]) && originalPair.includes(pair[1])
  //     );
  //   if (pairOriginalArray) {
  //     setShowSelected({
  //       pair: [],
  //       successfulPairs: [
  //         ...showSelected.successfulPairs,
  //         pair as [string, string],
  //       ],
  //     });
  //     return true;
  //   }

  //   setShowSelected({
  //     ...showSelected,
  //     pair: [showSelected.pair[0]],
  //   });
  //   return false;
  // }
  function checkPairValidity() {
    const { pair } = userInput
    const pairOriginalArray =
      getType(activeExercise) &&
      activeExercise.availableWords.pairs.find(originalPair => originalPair.includes(pair[0]) && originalPair.includes(pair[1]))
    if (pairOriginalArray) {
      dispatch(
        setObjectInput({
          pair: [],
          //eslint-disable-next-line no-unsafe-optional-chaining
          successfulPairs: [...userInput?.successfulPairs, pair as [string, string]],
        })
      )
      // play success audio
      if (activeExercise.successPairAudioURL) {
        setAudioURL(activeExercise.successPairAudioURL)
      }
      return true
    }

    dispatch(
      setObjectInput({
        ...userInput,
        pair: [],
      })
    )
    return false
  }

  function checkIfSameColumn(word: string) {
    const allPairs = getType(activeExercise) && activeExercise.availableWords.pairs.flat()
    if (allPairs && allPairs.indexOf(userInput.pair[0]) % 2 === allPairs.indexOf(word) % 2) {
      return false
    }

    return true
  }

  function checkIfInSuccessful(word: string): boolean {
    return userInput?.successfulPairs.flat().includes(word)
  }
  return (
    <>
      {audioURL && <audio autoPlay src={audioURL}></audio>}
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
          <Instruction className="w-full mb-12" instruction={activeExercise && activeExercise?.instructions} />
          {/* Maybe a component?? */}
          <div className="w-full">
            <Image
              height={12}
              width={12}
              src={MatchPairsImage}
              alt=""
              className="w-32 sm:w-40 h-full self-end translate-y-[0.65rem] sm:translate-x-2 sm:translate-y-3 relative z-20 mx-auto sm:mx-0"
            />
          </div>
          <div
            style={{
              fontFamily: "Nunito, sans-serif",
            }}
            className="grid relative grid-cols-2 sm:mt-0 flex-wrap sm:pb-10 justify-center  w-full 2xl:w-full gap-3"
          >
            <div className="flex flex-col gap-3">
              {typeof randomizedData === "object" &&
                activeExercise &&
                randomizedData.column1.map((word, index) => (
                  <PairWord
                    word={word}
                    checkIfInSuccessful={checkIfInSuccessful}
                    handleMatchPair={handleMatchPair}
                    userInput={userInput}
                    activeExercise={activeExercise as MatchPairsExercise}
                    key={index}
                    index={index}
                  />
                ))}
            </div>
            <div className="flex flex-col gap-3">
              {typeof randomizedData === "object" &&
                activeExercise &&
                randomizedData.column2.map((word, index) => (
                  <PairWord
                    checkIfInSuccessful={checkIfInSuccessful}
                    word={word}
                    handleMatchPair={handleMatchPair}
                    userInput={userInput}
                    activeExercise={activeExercise as MatchPairsExercise}
                    key={index}
                    index={index + randomizedData.column1.length}
                  />
                ))}
            </div>
          </div>
        </InteractiveLayout>
      </div>
    </>
  )
}

function PairWord({ word, activeExercise, handleMatchPair, userInput, index, checkIfInSuccessful }: IAvailableAnswerProps) {
  const checkIfActive = () => {
    return userInput?.pair.includes(word)
  }

  return (
    <div
      key={uuid()}
      className={classNames(
        checkIfInSuccessful(word) ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
        `h-full sm:w-[300px] md:w-[335px] relative text-gray_default font-semibold`
      )}
      onClick={activeExercise?.isComplete || activeExercise?.hasFailed ? undefined : e => handleMatchPair(e, word)}
    >
      <div className="inset-0 translate-x-0.5 translate-y-1 absolute rounded-lg striped-bg-darker -z-10 border border-gray_lighter"></div>
      <div
        className={classNames(
          checkIfActive() ? "bg-active_card" : "bg-white",
          "p-3 text-sm sm:text-base sm:p-4 rounded-lg border border-gray_lighter flex items-center justify-center relative"
        )}
      >
        {word}
        <span
          className={classNames(
            "h-5 sm:h-[25px] w-5 sm:w-[25px] flex items-center justify-center text-xs sm:text-sm absolute rounded-sm left-4 border border-gray_lighter sm:pt-0.5 bg-white"
          )}
        >
          {index + 1}
        </span>
      </div>
    </div>
  )
}
