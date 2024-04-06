"use client";
import { useEffect, useRef } from "react";
import { selectMessage } from "@/features/userSlice";
import { useAppSelector } from "@/hooks/useRedux";
import useAssessment from "@/hooks/useAssessment";
import { selectActiveExercise } from "@/features/lessonSlice";
import ButtonInteractive from "@/components/Buttons/ButtonInteractive";
import { selectUserInput } from "@/features/userInputSlice";
import { Loader } from "@/components/Loaders1/Loader";
import NavbarLayout from "@/components/Layouts1/NavbarLayout";
import InActiveToActiveLayout from "@/components/Layouts1/InactiveToActiveLayout";
import SuccessToFailureLayout from "@/components/Layouts1/SuccessToFailure";
import { motion } from "framer-motion";
import { Confetti } from "../Confetti/Confetti";
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
    // if (true) {
    return (
      <motion.div className='bg-white'>
        <NavbarLayout message color={"bg-color_green_lighter"}>
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
              <div className='text-center w-full mt-4 sm:mt-0'>
                <Confetti />
                <ButtonInteractive
                  background={
                    "bg-color_green_default text-white w-full cursor-pointer  font-semibold text-lg sm:w-[180px] success"
                  }
                  lessonButtonClick={lessonButtonClick}
                  buttonDisplayText={"CONTINUE"}
                  shadowColor={""}
                  status='success'
                />
                {/* <span
                  role="button"
                  className="text-white cursor-pointer block text-sm mt-[-2]"
                >
                  Report error
                </span> */}
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
        <NavbarLayout message color={"bg-error_lighter"}>
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
              <div className='text-center w-full mt-4 sm:mt-0'>
                <ButtonInteractive
                  background={
                    "bg-error text-white w-full cursor-pointer text-error font-semibold text-lg sm:w-[180px] failure"
                  }
                  lessonButtonClick={lessonButtonClick}
                  buttonDisplayText={"CONTINUE"}
                  shadowColor={""}
                  status='failure'
                />
                {/* <span
                  role="button"
                  className="text-white cursor-pointer block text-sm mt-[-2]"
                >
                  Report error
                </span> */}
              </div>
            )}
          </SuccessToFailureLayout>
        </NavbarLayout>
      </motion.div>
    );
  }

  return (
    <NavbarLayout color={"bg-white"}>
      <InActiveToActiveLayout>
        <ButtonInteractive
          background={
            "bg-white border border-gray-200/70 text-gray_lighter cursor-pointer sm:w-[132px] "
          }
          lessonButtonClick={skipCurrentExercise}
          buttonDisplayText={"SKIP"}
          shadowColor={"bg-gray-200"}
        />
      </InActiveToActiveLayout>
      {!userInput.userInput ? (
        <InActiveToActiveLayout>
          <ButtonInteractive
            background={
              " bg-disabled border border-gray-200/70 text-disabled_text cursor-not-allowed sm:w-[180px]  "
            }
            lessonButtonClick={null}
            buttonDisplayText={"CHECK"}
            // shadowColor={"bg-gray-200"}
          />
        </InActiveToActiveLayout>
      ) : (
        <InActiveToActiveLayout>
          <ButtonInteractive
            background={
              "bg-white border border-gray-200/70 text-gray_default cursor-pointer sm:w-[180px]"
            }
            lessonButtonClick={lessonButtonClick}
            buttonDisplayText={"CHECK"}
            shadowColor={"bg-color-purple_deep"}
          />
        </InActiveToActiveLayout>
      )}
    </NavbarLayout>
  );
};
