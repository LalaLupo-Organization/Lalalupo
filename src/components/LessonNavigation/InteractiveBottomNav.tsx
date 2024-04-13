// "use client";
// import { useEffect } from "react";
// import useAssessment from "@/hooks/useAssessment";
// import ButtonInteractive from "@/components/Buttons/ButtonInteractive";
// import { Loader } from "@/components/Loaders1/Loader";
// import NavbarLayout from "@/components/Layouts/NavbarLayout";
// import InActiveToActiveLayout from "@/components/Layouts/InactiveToActiveLayout";
// import SuccessToFailureLayout from "@/components/Layouts/SuccessToFailure";
// import { motion } from "framer-motion";
// import { Confetti } from "../Confetti/Confetti";
// import { RootState } from "@/redux/store";
// import { LessonState } from "@/types/lesson.types";

// export interface IInteractiveNavProps {
//   status: "success" | "failure" | "disabled";
//   loading: boolean;
//   userInput: RootState["userInputReduxState"];
//   activeExercise: LessonState["activeExercise"];
// }

// export const ChooseTheRightSolutionBottomNav: React.FC<
//   IInteractiveNavProps
// > = ({ userInput, status, activeExercise, loading }) => {
//   const { lessonButtonClick, skipCurrentExercise } = useAssessment();
//   const conditionalObject = {
//     navBGColor: {
//       success: "bg-color_green_lighter",
//       failure: "bg-error_lighter",
//     },
//   };

//   useEffect(() => {
//     const handleKeyDown = ({ key }: KeyboardEvent) => {
//       if (status !== "disabled" && userInput.userInput && key === "Enter") {
//         lessonButtonClick();
//       }
//     };
//     window.addEventListener("keydown", handleKeyDown);

//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [userInput, status, lessonButtonClick]);

//   if (status === "success") {
//     // if (true) {
//     return (
//       <motion.div className="bg-white">
//         <NavbarLayout message color={"bg-color_green_lighter"}>
//           <SuccessToFailureLayout success={status === "success"}>
//             {loading ? (
//               <ButtonInteractive
//                 background={"bg-green-600 cursor-pointer text-white"}
//                 lessonButtonClick={lessonButtonClick}
//                 buttonDisplayText={"LOADING..."}
//                 shadowColor={"bg-green-800"}
//                 lottie={<Loader />}
//               />
//             ) : (
//               <div className="text-center w-full mt-4 sm:mt-0">
//                 <Confetti />
//                 <ButtonInteractive
//                   background={
//                     "bg-color_green_default text-white w-full cursor-pointer  font-semibold text-lg sm:w-[180px] success"
//                   }
//                   lessonButtonClick={lessonButtonClick}
//                   buttonDisplayText={"CONTINUE"}
//                   shadowColor={""}
//                   status="success"
//                 />
//                 {/* <span
//                   role="button"
//                   className="text-white cursor-pointer block text-sm mt-[-2]"
//                 >
//                   Report error
//                 </span> */}
//               </div>
//             )}
//           </SuccessToFailureLayout>
//         </NavbarLayout>
//       </motion.div>
//     );
//   }

//   if (status === "failure") {
//     return (
//       <motion.div>
//         <NavbarLayout message color={"bg-error_lighter"}>
//           <SuccessToFailureLayout
//             success={false}
//             solution={
//               activeExercise?.type === "chooseTheRightSolution" &&
//               activeExercise?.solution === typeof "string"
//                 ? activeExercise.solution
//                 : undefined
//             }
//           >
//             {loading ? (
//               <ButtonInteractive
//                 background={"bg-red-600 cursor-pointer text-white"}
//                 lessonButtonClick={lessonButtonClick}
//                 buttonDisplayText={"LOADING..."}
//                 shadowColor={"bg-red-800"}
//                 lottie={<Loader />}
//               />
//             ) : (
//               <div className="text-center w-full mt-4 sm:mt-0">
//                 <ButtonInteractive
//                   background={
//                     "bg-error text-white w-full cursor-pointer text-error font-semibold text-lg sm:w-[180px] failure"
//                   }
//                   lessonButtonClick={lessonButtonClick}
//                   buttonDisplayText={"CONTINUE"}
//                   shadowColor={""}
//                   status="failure"
//                 />
//                 {/* <span
//                   role="button"
//                   className="text-white cursor-pointer block text-sm mt-[-2]"
//                 >
//                   Report error
//                 </span> */}
//               </div>
//             )}
//           </SuccessToFailureLayout>
//         </NavbarLayout>
//       </motion.div>
//     );
//   }

//   return (
//     <NavbarLayout color={"bg-white"}>
//       <InActiveToActiveLayout>
//         <ButtonInteractive
//           background={
//             "bg-white border border-gray-200/70 text-gray_lighter cursor-pointer sm:w-[132px] "
//           }
//           lessonButtonClick={skipCurrentExercise}
//           buttonDisplayText={"SKIP"}
//           shadowColor={"bg-gray-200"}
//         />
//       </InActiveToActiveLayout>
//       {!userInput.userInput ? (
//         <InActiveToActiveLayout>
//           <ButtonInteractive
//             background={
//               " bg-disabled border border-gray-200/70 text-disabled_text cursor-not-allowed sm:w-[180px]  "
//             }
//             lessonButtonClick={null}
//             buttonDisplayText={"CHECK"}
//             // shadowColor={"bg-gray-200"}
//           />
//         </InActiveToActiveLayout>
//       ) : (
//         <InActiveToActiveLayout>
//           <ButtonInteractive
//             background={
//               "bg-color_green_default text-white w-full cursor-pointer  font-semibold text-lg sm:w-[180px] success"
//             }
//             lessonButtonClick={lessonButtonClick}
//             buttonDisplayText={"CHECK"}
//             status="active"
//           />
//         </InActiveToActiveLayout>
//       )}
//     </NavbarLayout>
//   );
// };

"use client"
import { useEffect } from "react"
import useAssessment from "@/hooks/useAssessment"
import ButtonInteractive from "@/components/Buttons/ButtonInteractive"
import { Loader } from "@/components/Loaders1/Loader"
import NavbarLayout from "@/components/Layouts/NavbarLayout"
import InActiveToActiveLayout from "@/components/Layouts/InactiveToActiveLayout"
import SuccessToFailureLayout from "@/components/Layouts/SuccessToFailure"
import { RootState } from "@/redux/store"
import { LessonState } from "@/types/lesson.types"
import classNames from "@/helpers/classNames"

export interface IInteractiveNavProps {
  status: "success" | "failure" | "disabled" | "active"
  loading: boolean
  userInput: RootState["userInputReduxState"]
  activeExercise: LessonState["activeExercise"]
}

export const InteractiveBottomNav: React.FC<IInteractiveNavProps> = ({ userInput, status, activeExercise, loading }) => {
  const { lessonButtonClick, skipCurrentExercise } = useAssessment()
  const conditionalObject = {
    navBGColor: {
      success: "bg-color_green_lighter",
      failure: "bg-error_lighter",
      disabled: "bg-white",
      active: "bg-white",
    },
  }
  const isMessage = status === "failure" || status === "success"

  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (status !== "disabled" && userInput.userInput && key === "Enter") {
        lessonButtonClick()
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [userInput, status, lessonButtonClick])

  return (
    <NavbarLayout message={isMessage} color={conditionalObject.navBGColor[status]}>
      {isMessage && (
        <SuccessToFailureLayout
          solution={
            activeExercise?.type === "chooseTheRightSolution" && typeof activeExercise?.solution === "string"
              ? activeExercise.solution
              : undefined
          }
          success={status === "success"}
        >
          {loading ? (
            <ButtonInteractive
              background="bg-green-600 cursor-pointer text-white"
              lessonButtonClick={lessonButtonClick}
              buttonDisplayText="LOADING..."
              shadowColor="bg-green-800"
              lottie={<Loader />}
            />
          ) : (
            <div className="text-center w-full mt-4 sm:mt-0">
              <ButtonInteractive
                background={classNames(
                  status === "success" ? "bg-color_green_default success" : "bg-error failure",
                  "w-full cursor-pointer font-semibold text-lg sm:w-[180px] text-white"
                )}
                lessonButtonClick={lessonButtonClick}
                buttonDisplayText="CONTINUE"
                shadowColor=""
                status={status}
              />
            </div>
          )}
        </SuccessToFailureLayout>
      )}
      {!isMessage && (
        <>
          <InActiveToActiveLayout>
            <ButtonInteractive
              background="bg-white border border-gray-200/70 text-gray_lighter cursor-pointer sm:w-[132px]"
              lessonButtonClick={skipCurrentExercise}
              buttonDisplayText="SKIP"
              shadowColor="bg-gray-200"
            />
          </InActiveToActiveLayout>
          <InActiveToActiveLayout>
            <ButtonInteractive
              background={classNames(
                status === "active"
                  ? "bg-color_green_default text-white w-full cursor-pointer  font-semibold text-lg success"
                  : "bg-disabled border border-gray-200/70 text-disabled_text cursor-not-allowed",
                "sm:w-[180px]"
              )}
              lessonButtonClick={userInput.userInput ? lessonButtonClick : null}
              buttonDisplayText={
                "CHECK"
                // activeExercise.type === "matchPairs" ? "CONTINUE" : "CHECK"
              }
              status={status}
            />
          </InActiveToActiveLayout>
        </>
      )}
    </NavbarLayout>
  )
}
