"use client";
import { useEffect, useRef } from "react";
import { selectMessage } from "@/features/userSlice";
import { useAppSelector } from "@/hooks/useRedux";
import useAssessment from "@/hooks/useAssessment";
import { selectActiveExercise } from "@/features/lessonSlice";
import ButtonInteractive from "@/components/Buttons/ButtonInteractive";
import { selectUserInput } from "@/features/userInputSlice";
import { Loader } from "@/components/Loaders/Loader";
import NavbarLayout from "@/components/Layouts/NavbarLayout";
import InActiveToActiveLayout from "@/components/Layouts/InactiveToActiveLayout";
import SuccessToFailureLayout from "@/components/Layouts/SuccessToFailure";
import { motion } from "framer-motion";
export const ChooseTheRightSolutionBottomNav: React.FC = () => {
  const { lessonButtonClick, skipCurrentExercise } = useAssessment();

  const messages = useAppSelector((state) => selectMessage(state));
  const userInput = useAppSelector((state) => selectUserInput(state));
  const activeExercise = useAppSelector((state) => selectActiveExercise(state));
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
  }, [userInput, messages, lessonButtonClick]);
  if (messages.activeExerciseComplete) {
    return (
      <motion.div className="bg-white p-4">
        <NavbarLayout
          message
          color={"bg-color-green_default sm:px-10 md:px-14 lg:px-24"}
          gridColsNumber={1}
        >
          <SuccessToFailureLayout success={true}>
            {messages.loading ? (
              <ButtonInteractive
                background={"bg-green-600 cursor-pointer text-white"}
                lessonButtonClick={lessonButtonClick}
                buttonDisplayText={"LOADING..."}
                shadowColor={"bg-green-800"}
                lottie={<Loader />}
              />
            ) : (
              <div className="text-center w-full mt-4 sm:mt-0">
                <ButtonInteractive
                  background={
                    "bg-white w-full cursor-pointer text-color-green_default font-semibold text-lg px-16"
                  }
                  lessonButtonClick={lessonButtonClick}
                  buttonDisplayText={"Continue"}
                  shadowColor={""}
                />
                <span
                  role="button"
                  className="text-white cursor-pointer block text-sm mt-[-2]"
                >
                  Report error
                </span>
              </div>
            )}
          </SuccessToFailureLayout>
        </NavbarLayout>
      </motion.div>
    );
  }

  if (messages.activeExerciseWrongAnswer) {
    return (
      <motion.div>
        <NavbarLayout
          message
          color={"bg-error sm:px-10 md:px-14 lg:px-24"}
          gridColsNumber={6}
        >
          <SuccessToFailureLayout
            success={false}
            solution={
              activeExercise?.type === "chooseTheRightSolution" &&
              activeExercise?.solution === typeof "string"
                ? activeExercise.solution
                : undefined
            }
          >
            {messages.loading ? (
              <ButtonInteractive
                background={"bg-red-600 cursor-pointer text-white"}
                lessonButtonClick={lessonButtonClick}
                buttonDisplayText={"LOADING..."}
                shadowColor={"bg-red-800"}
                lottie={<Loader />}
              />
            ) : (
              <div className="text-center w-full mt-4 sm:mt-0">
                <ButtonInteractive
                  background={
                    "bg-white w-full cursor-pointer text-error font-semibold text-lg px-16"
                  }
                  lessonButtonClick={lessonButtonClick}
                  buttonDisplayText={"Continue"}
                  shadowColor={""}
                />
                <span
                  role="button"
                  className="text-white cursor-pointer block text-sm mt-[-2]"
                >
                  Report error
                </span>
              </div>
            )}
          </SuccessToFailureLayout>
        </NavbarLayout>
      </motion.div>
    );
  }

  return (
    <NavbarLayout dashed color={"bg-white"} gridColsNumber={1}>
      <InActiveToActiveLayout>
        <ButtonInteractive
          background={"bg-warning text-white cursor-pointer "}
          lessonButtonClick={skipCurrentExercise}
          buttonDisplayText={"Skip"}
          shadowColor={"bg-gray-200"}
        />
      </InActiveToActiveLayout>
      {!userInput.userInput ? (
        <InActiveToActiveLayout>
          <ButtonInteractive
            background={"bg-disabled text-white cursor-not-allowed "}
            lessonButtonClick={null}
            buttonDisplayText={"Check Answer"}
            shadowColor={"bg-gray-200"}
          />
        </InActiveToActiveLayout>
      ) : (
        <InActiveToActiveLayout>
          <ButtonInteractive
            background={"bg-color-purple_darker text-white cursor-pointer"}
            lessonButtonClick={lessonButtonClick}
            buttonDisplayText={"Check Answer"}
            shadowColor={"bg-color-purple_deep"}
          />
        </InActiveToActiveLayout>
      )}
    </NavbarLayout>
  );
};
