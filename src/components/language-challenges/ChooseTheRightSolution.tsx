import { useRef, useState, useEffect } from "react";
import { useAppDispatch } from "@/hooks/useRedux";
import { v4 as uuid } from "uuid";
import { setSingleInput, clearUserInput } from "@/features/userInputSlice";
import classNames from "@/helpers/classNames";
import ProgressBar from "@/components/progress-bar/ProgressBar";
import Instruction from "@/components/instruction/Instruction";
import InteractiveLayout from "@/components/layouts/InteractiveLayout";
import { BaseExercise, LessonState } from "@/types/lesson.types";
// import useSpeechSynthesis from "../hooks/useSpeechSynthesis";
import mockimage from "@/public/sandwich.png";
import Image from "next/image";
import { ChooseTheRightSolutionExercise } from "@/types/choose-the-right-solution.types";
const ChooseTheRightSolution = ({ data }: { data: LessonState }) => {
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
  ): exercise is ChooseTheRightSolutionExercise {
    return exercise.type === "chooseTheRightSolution";
  }
  // const speak = useSpeechSynthesis();
  const dispatch = useAppDispatch();

  const [randomizedData, setRandomizedData] = useState(
    () =>
      getType(activeExercise) &&
      activeExercise.availableWords

        .map((item: any) => {
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
    if (getType(activeExercise) && activeExercise.displayImage) {
      // speak(userAnswer);
    }

    dispatch(setSingleInput(userAnswer));
    setShowSelected({ word: userAnswer, status: true });
  };

  useEffect(() => {
    if (activeExercise && activeExercise?._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id);
      dispatch(clearUserInput());
      setShowSelected({ word: "", status: false });
      setRandomizedData(
        () =>
          getType(activeExercise) &&
          activeExercise.availableWords //@ts-ignore
            .map((item) => {
              return item;
            })
            .sort(() => Math.random() - 0.5)
      );
    }
    //eslint-disable-next-line
  }, [showSelected, activeExercise?._id]);
  return (
    <div
      className='flex flex-col

     justify-center w-full items-center'
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
          instruction={activeExercise && activeExercise?.instructions}
        />

        {getType(activeExercise) && activeExercise.displayImage && (
          <div className=' rounded-2xl pt-8  sm:w-2/4 md:w-1/3  mx-auto'>
            <Image
              src={mockimage}
              height={600}
              width={600}
              className='rounded-2xl mx-auto '
              alt=''
            />
          </div>
        )}
        <div
          className={classNames(
            getType(activeExercise) && activeExercise.displayImage
              ? "mt-10"
              : "mt-18",
            "grid-cols-1 mx-auto mt-12   flex-wrap justify-center  w-full  sm:w-2/3"
          )}
        >
          {randomizedData &&
            activeExercise &&
            //@ts-ignore

            randomizedData.map((word, index) => (
              <div
                key={uuid()}
                className='m-1 flex-1 cursor-pointer'
                onClick={
                  activeExercise?.isComplete || activeExercise?.hasFailed
                    ? undefined
                    : (e) => handleSelectedItem(e, word)
                }
              >
                <div
                  className={classNames(
                    (activeExercise?.isComplete || activeExercise?.hasFailed) &&
                      showSelected.word === word
                      ? "text-blue_border_darker border-blue_border cursor-not-allowed"
                      : (activeExercise?.isComplete ||
                            activeExercise?.hasFailed) &&
                          showSelected.word !== word
                        ? "text-gray-800  cursor-not-allowed"
                        : showSelected.word === word
                          ? "text-color-purple_darker border-color-purple_default cursor-pointer"
                          : "cursor-pointer",

                    "text-center bg-white box-border p-2 sm:p-2 border rounded-lg font-bold active:duration-300 active:ease-in outline-none"
                  )}
                >
                  {word}
                </div>
              </div>
            ))}
        </div>
      </InteractiveLayout>
    </div>
  );
};
export default ChooseTheRightSolution;
