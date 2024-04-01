import { useEffect } from "react";
import { selectMessage } from "@/features/userSlice";
import { useAppSelector } from "@/hooks/useRedux";
import useAssessment from "@/hooks/useAssessment";
import { selectActiveExercise } from "@/features/lessonSlice";
import ButtonInteractiveLesson from "@/components/Buttons/ButtonInteractive";
import { selectUserInput } from "@/features/userInputSlice";
import NavbarLayout from "@/components/Layouts/NavbarLayout";
import InActiveToActiveLayout from "@/components/Layouts/InactiveToActiveLayout";
import { Loader } from "@/components/Loaders1/Loader";
import SuccessToFailureLayout from "@/components/Layouts/SuccessToFailure";
import { BaseExercise } from "@/types/lesson.types";
import { WriteTheSentenceExercise } from "@/types/write-the-word.types";
export default function WriteTheSentenceNav() {
  const { lessonButtonClick } = useAssessment();
  const messages = useAppSelector((state) => selectMessage(state));
  const userInput = useAppSelector((state) => selectUserInput(state));
  const activeExercise = useAppSelector((state) => selectActiveExercise(state));
  function getType(
    exercise: BaseExercise
  ): exercise is WriteTheSentenceExercise {
    return exercise.type === "writeTheSentence";
  }
  useEffect(() => {}, [messages]);
  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (
        (messages.activeExerciseComplete ||
          messages.activeExerciseWrongAnswer ||
          userInput.userInput) &&
        key === "Enter"
      ) {
        lessonButtonClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [userInput, messages]);
  if (messages.activeExerciseComplete) {
    return (
      <NavbarLayout color={"bg-green-200"} gridColsNumber={6}>
        <SuccessToFailureLayout success={true}>
          {messages.loading ? (
            <ButtonInteractiveLesson
              background={"bg-green-600 cursor-pointer text-white"}
              lessonButtonClick={lessonButtonClick}
              buttonDisplayText={"LOADING..."}
              shadowColor={"bg-green-800"}
              lottie={<Loader />}
            />
          ) : (
            <ButtonInteractiveLesson
              background={"bg-green-600 cursor-pointer text-white"}
              lessonButtonClick={lessonButtonClick}
              buttonDisplayText={"CONTINUE"}
              shadowColor={"bg-green-800"}
            />
          )}
        </SuccessToFailureLayout>
      </NavbarLayout>
    );
  }

  if (messages.activeExerciseWrongAnswer) {
    return (
      <NavbarLayout color={"bg-red-200"} gridColsNumber={6}>
        <SuccessToFailureLayout
          success={false}
          solution={
            getType(activeExercise)
              ? Array.isArray(activeExercise?.solution)
                ? activeExercise.solution.join(" ")
                : typeof activeExercise?.solution === "string"
                  ? activeExercise.solution
                  : undefined
              : undefined
          }
        >
          {messages.loading ? (
            <ButtonInteractiveLesson
              background={"bg-red-600 cursor-pointer text-white"}
              lessonButtonClick={lessonButtonClick}
              buttonDisplayText={"LOADING..."}
              shadowColor={"bg-red-800"}
              lottie={<Loader />}
            />
          ) : (
            <ButtonInteractiveLesson
              background={"bg-red-600 cursor-pointer text-white"}
              lessonButtonClick={lessonButtonClick}
              buttonDisplayText={"CONTINUE"}
              shadowColor={"bg-red-800"}
            />
          )}
        </SuccessToFailureLayout>
      </NavbarLayout>
    );
  }

  return (
    <NavbarLayout color={"bg-white"} gridColsNumber={6}>
      {!userInput.userInput ? (
        <InActiveToActiveLayout>
          <ButtonInteractiveLesson
            background={"bg-gray-200 text-gray-600 cursor-not-allowed"}
            lessonButtonClick={null}
            buttonDisplayText={"CHECK"}
            shadowColor={"bg-gray-200"}
          />
        </InActiveToActiveLayout>
      ) : (
        <InActiveToActiveLayout>
          <ButtonInteractiveLesson
            background={"bg-color-purple_darker text-white cursor-pointer"}
            lessonButtonClick={lessonButtonClick}
            buttonDisplayText={"CHECK"}
            shadowColor={"bg-color-purple_deep"}
          />
        </InActiveToActiveLayout>
      )}
    </NavbarLayout>
  );
}
