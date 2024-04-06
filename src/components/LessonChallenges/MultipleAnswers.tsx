"use client";
import { BaseExercise, LessonState } from "@/types/lesson.types";
import { useState, useEffect } from "react";
import { useAppDispatch } from "@/hooks/useRedux";
import { v4 as uuid } from "uuid";
import { MultipleAnswersExercise } from "@/types/multiple-answers.types";
import { setObjectInput, clearUserInput } from "@/features/userInputSlice";
import { ProgressBar } from "@/components/ProgressBars/ProgressBar";
import ImageOfProfessor from "@/components/Layouts/ImageOfProfessor";
import classNames from "@/helpers/classNames";
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout";
import Instruction from "@/components/Headings/Instruction";
import Image from "next/image";
// import useSpeechSynthesis from "@/hooks/useSpeechSynthesis";
export default function MultipleAnswers({ data }: { data: LessonState }) {
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
  ): exercise is MultipleAnswersExercise {
    return exercise.type === "multipleAnswers";
  }
  const [activeExerciseId, setActiveExerciseId] = useState(
    () => activeExercise?._id
  );
  // const speak = useSpeechSynthesis();
  const dispatch = useAppDispatch();

  const [showSelected, setShowSelected] = useState<any>({});
  const [randomized, setRandomized] = useState<
    { italian: string; english: string; correct: boolean }[] | undefined
  >([]);

  const removeItems = (word: string) => {
    const filtered = Object.entries(showSelected).filter(
      (item) => item[0] !== word && item
    );
    setShowSelected(Object.fromEntries(filtered));
  };

  const handleSelectedItem = (e: React.SyntheticEvent, word: string) => {
    if (showSelected.hasOwnProperty(word)) {
      removeItems(word);
      return;
    }

    // speak(word);

    setShowSelected({ ...showSelected, [word]: word });
  };

  useEffect(() => {
    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id);
      dispatch(clearUserInput());
      setRandomized([]);
      setShowSelected({});
    }
    if (
      getType(activeExercise) &&
      activeExercise?.targetNumber &&
      Object.keys(showSelected).length > 0
    ) {
      dispatch(setObjectInput(showSelected));
    } else {
      dispatch(clearUserInput());
    }
    //eslint-disable-next-line
  }, [showSelected, activeExercise]);

  useEffect(() => {
    setRandomized(
      getType(activeExercise)
        ? activeExercise.availableWords
            .map((item) => item)
            .sort(() => Math.random() - 0.5)
        : undefined // or [] if you prefer an empty array over undefined
    );
  }, [activeExercise?._id]);

  return (
    <div
      className='flex flex-col

   justify-center w-full items-center'
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
        <Instruction
          instruction={activeExercise && activeExercise.instructions}
        />
        <Image
          src='https://imagedelivery.net/_Fh-Z9aj1rlSxXMDl1yqsg/519018b0-2574-467e-bbab-9084f1fa5e00/character'
          alt=''
          width={32}
          height={32}
          className='w-32 sm:w-44 relative top-2 sm:top-4'
        />

        <div className='grid-cols-3   gap-1 border-2 text-sm rounded-xl bg-blue-50 p-1  grid  mb-40 sm:text-base sm:w-full'>
          {randomized &&
            randomized.map((item, index) => (
              <div
                key={uuid()}
                className='row-span-2 cursor-pointer'
                onClick={
                  activeExercise?.isComplete || activeExercise?.hasFailed
                    ? undefined
                    : (e) => handleSelectedItem(e, item.italian)
                }
              >
                <div
                  className={classNames(
                    (activeExercise?.isComplete || activeExercise?.hasFailed) &&
                      showSelected[item.italian] === item.italian
                      ? "border-color_purple_default border-2 text-color_purple_darker bg-purple-100 font-semibold cursor-not-allowed"
                      : (activeExercise?.isComplete ||
                            activeExercise?.hasFailed) &&
                          showSelected[item.italian] !== item.italian
                        ? "text-gray-800  cursor-not-allowed"
                        : activeExercise?.hasFailed &&
                            item.italian &&
                            item.correct
                          ? "text-yellow-500 border-yellow-500 cursor-not-allowed border-2"
                          : showSelected[item.italian] === item.italian
                            ? "border-color_purple_default border-2 text-color_purple_darker bg-purple-100 font-semibold cursor-pointer"
                            : "cursor-pointer",

                    "text-center bg-white box-border p-2 sm:p-2 border border-2 rounded-lg font-bold active:duration-300 active:ease-in outline-none"
                  )}
                >
                  {item.italian}
                  <p
                    className={classNames(
                      showSelected[item.italian] === item.italian
                        ? "text-blue_border_darker border-blue_border"
                        : "text-gray-400",
                      "text-sm  font-light"
                    )}
                  >
                    {activeExercise.type === "multipleAnswers" &&
                      activeExercise?.displayMeaning &&
                      item.english}
                  </p>
                  <p
                    className={classNames(
                      activeExercise?.isComplete &&
                        showSelected[item.italian] === item.italian
                        ? "text-green-500"
                        : activeExercise?.hasFailed &&
                            showSelected[item.italian] === item.italian &&
                            item.correct
                          ? "text-green-500"
                          : activeExercise?.hasFailed &&
                              item.italian &&
                              item.correct
                            ? "text-yellow-500"
                            : activeExercise?.hasFailed &&
                                showSelected[item.italian] === item.italian &&
                                !item.correct
                              ? "text-red-500"
                              : "text-gray-800",
                      "text-xs  font-light"
                    )}
                  >
                    {activeExercise?.isComplete &&
                    showSelected[item.italian] === item.italian &&
                    item.correct
                      ? "CORRECT"
                      : activeExercise?.hasFailed &&
                          showSelected[item.italian] === item.italian &&
                          item.correct
                        ? "CORRECT"
                        : activeExercise?.hasFailed &&
                            item.italian &&
                            item.correct
                          ? "MISSED"
                          : activeExercise?.hasFailed &&
                              showSelected[item.italian] === item.italian &&
                              !item.correct
                            ? "INCORRECT"
                            : "-"}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </InteractiveLayout>
    </div>
  );
}
