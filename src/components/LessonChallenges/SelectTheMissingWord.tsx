import { BaseExercise, LessonState } from "@/types/lesson.types";
import { useRef, useState, useEffect } from "react";
import { useAppDispatch } from "@/hooks/useRedux";
import { v4 as uuid } from "uuid";
import { SelectTheMissingWordExercise } from "@/types/select-the-missing-word.types";
import { setSingleInput, clearUserInput } from "@/features/userInputSlice";
import { ProgressBar } from "@/components/ProgressBars/ProgressBar";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import Instruction from "@/components/Headings/Instruction";
import { InteractiveLayout } from "@/components/Layouts/InteractiveLayout";
import classNames from "@/helpers/classNames";
export default function SelectTheMissingWord({ data }: { data: LessonState }) {
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
  ): exercise is SelectTheMissingWordExercise {
    return exercise.type === "selectTheMissingWord";
  }
  const [activeExerciseId, setActiveExerciseId] = useState(
    () => activeExercise?._id
  );
  const synthRef = useRef(window.speechSynthesis);
  const dispatch = useAppDispatch();

  const [showSelected, setShowSelected] = useState({
    word: "",
    status: false,
  });

  const handleSelectedItem = (e: React.SyntheticEvent, userAnswer: string) => {
    const utter = new SpeechSynthesisUtterance(userAnswer);
    utter.lang = "it-IT";
    synthRef.current.speak(utter);
    dispatch(setSingleInput(userAnswer));
    setShowSelected({ word: userAnswer, status: true });
  };

  useEffect(() => {
    if (activeExercise && activeExercise._id !== activeExerciseId) {
      setActiveExerciseId(() => activeExercise?._id);
      dispatch(clearUserInput());
      setShowSelected({ word: "", status: false });
    }
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
        <div>
          {getType(activeExercise) &&
            activeExercise?.displayText.map((item) =>
              item === activeExercise?.solution ? (
                <motion.span
                  initial={{ y: "10px" }}
                  animate={{ y: "0px" }}
                  key={uuid()}
                  className=" inline-block sm:text-base ml-1 border-b-2 relative  font-fredoka tracking-wide border-color_purple_default  border-dashed  text-color_purple_darker text-center font-semibold"
                  style={{
                    width: `${showSelected.word !== "" ? showSelected.word.length * 13 + "px" : item.length * 13 + "px"}`,
                  }}
                >
                  {showSelected.word}
                </motion.span>
              ) : getType(activeExercise) &&
                item === activeExercise?.underlined ? (
                <span key={uuid()} className="underline">
                  {" "}
                  {item}{" "}
                </span>
              ) : (
                <span key={uuid()}> {parse(item)} </span>
              )
            )}
        </div>

        <div className="grid grid-cols-3 mt-12 sm:mt-20    flex-wrap justify-center mx-auto w-full ">
          {getType(activeExercise) &&
            activeExercise?.availableWords.map((word, index) => (
              <div
                key={uuid()}
                className="m-1 cursor-pointer"
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
                      ? "border-color_purple_default  border-2  text-color_purple_darker font-semibold  bg-purple-100  cursor-not-allowed"
                      : (activeExercise?.isComplete ||
                            activeExercise?.hasFailed) &&
                          showSelected.word !== word
                        ? "text-gray-800 opacity-40 bg-gray-50   cursor-not-allowed"
                        : showSelected.word === word
                          ? "border-color_purple_default border-2 text-color_purple_darker bg-purple-100 font-semibold cursor-pointer"
                          : "cursor-pointer",

                    "text-center bg-white box-border p-2 sm:p-2 border border-2 rounded-lg font-bold active:duration-300 active:ease-in outline-none"
                  )}
                >
                  {parse(word)}
                </div>
              </div>
            ))}
        </div>
      </InteractiveLayout>
    </div>
  );
}
