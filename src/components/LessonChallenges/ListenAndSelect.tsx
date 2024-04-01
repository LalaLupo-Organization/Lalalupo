"use client";
import { BaseExercise, LessonState } from "@/types/lesson.types";
import { useState, useEffect, useRef } from "react";
import { useAppDispatch } from "@/hooks/useRedux";
import { v4 as uuid } from "uuid";
import { ListenAndSelectExercise } from "@/types/listen-and-select.types";
import { setSingleInput, clearUserInput } from "@/features/userInputSlice";
import { ProgressBar } from "@/components/ProgressBars/ProgressBar";

import classNames from "@/helpers/classNames";
import AudioBubble from "@/components/AudioBubble/AudioBubble";
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout";
import Instruction from "@/components/Headings/Instruction";
export default function ListenAndSelect({ data }: { data: LessonState }) {
  const {
    activeExercise,
    totalExercises,
    lives,
    numberComplete,
    interactiveExercises,
    numberFailed,
    remainingExercises,
  } = data;
  function getType(
    exercise: BaseExercise
  ): exercise is ListenAndSelectExercise {
    return exercise.type === "listenAndSelect";
  }
  const dispatch = useAppDispatch();
  const synthRef = useRef(window.speechSynthesis);

  const [randomizedData, setRandomizedData] = useState(
    () =>
      getType(activeExercise) &&
      activeExercise.availableWords
        .map((item) => {
          return item;
        })
        .sort(() => Math.random() - 0.5)
  );
  const [showSelected, setShowSelected] = useState({
    word: "",
    status: false,
  });
  const [activeExerciseId, setActiveExerciseId] = useState(
    () => activeExercise?._id
  );
  const handleSelectedItem = (e: React.SyntheticEvent, userAnswer: string) => {
    dispatch(setSingleInput(userAnswer));
    setShowSelected({ word: userAnswer, status: true });
  };

  useEffect(() => {
    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id);
      dispatch(clearUserInput());
      setShowSelected({ word: "", status: false });
      setRandomizedData(
        () =>
          getType(activeExercise) &&
          activeExercise.availableWords
            .map((item) => {
              return item;
            })
            .sort(() => Math.random() - 0.5)
      );
    }
    //eslint-disable-next-line
  }, [showSelected, activeExercise]);

  return (
    <div
      className="flex flex-col

   justify-center w-full items-center"
    >
      <ProgressBar
        remainingExercises={remainingExercises}
        totalNumberOfExercises={totalExercises}
        numberOfExercisesComplete={numberComplete}
        interactiveExercises={interactiveExercises}
        numberOfExercisesFailed={numberFailed}
        lives={lives && lives}
      />
      <InteractiveLayout id={activeExercise && activeExercise._id}>
        <Instruction
          instruction={
            getType(activeExercise) ? activeExercise.instructions : null
          }
        />
        <AudioBubble
          solution={getType(activeExercise) && activeExercise.audio}
        />

        <div className="flex-col -mt-2 sm:flex-row flex-wrap flex-1 items-center  mx-auto  w-full">
          {randomizedData &&
            randomizedData.map((word: [string], index) => (
              <div
                key={uuid()}
                className="m-1 flex flex-1  cursor-pointer"
                onClick={
                  activeExercise?.isComplete || activeExercise?.hasFailed
                    ? undefined
                    : (e) => handleSelectedItem(e, word[0])
                }
              >
                <div
                  className={classNames(
                    (activeExercise?.isComplete || activeExercise?.hasFailed) &&
                      showSelected.word === word[0]
                      ? "border-color-purple_default border-2 text-color-purple_darker bg-purple-100 font-semibold cursor-not-allowed"
                      : (activeExercise?.isComplete ||
                            activeExercise?.hasFailed) &&
                          showSelected.word !== word[0]
                        ? "text-gray-800  cursor-not-allowed"
                        : showSelected.word === word[0]
                          ? "border-color-purple_default border-2 text-color-purple_darker bg-purple-100 font-semibold cursor-pointer"
                          : "cursor-pointer",

                    "text-center flex-1 bg-white box-border p-2 sm:p-2 border border-2 rounded-lg font-bold active:duration-300 active:ease-in outline-none"
                  )}
                >
                  <p>
                    {word[0]}{" "}
                    <span className="text-gray-500 font-light italic">
                      {/* {word[1]} */}
                    </span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </InteractiveLayout>
    </div>
  );
}
