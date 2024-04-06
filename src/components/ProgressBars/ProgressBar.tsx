import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import bubbles from "@/public/bubbles.json";
import classNames from "@/helpers/classNames";
import { useAppDispatch } from "@/hooks/useRedux";
// import { setExitDisplay } from "../features/userSlice";
import { v4 as uuid } from "uuid";
import Image from "next/image";
import { LessonState } from "@/types/lesson.types";
import Container from "../Container";
export const ProgressBar = ({
  remainingExercises,
  totalNumberOfExercises,
  numberOfExercisesComplete,
  interactiveExercises,
  lives,
  numberOfExercisesFailed,
  color = "bg-default_progress_bar",
  activeExercise,
}: {
  remainingExercises: number;
  totalNumberOfExercises: number;
  numberOfExercisesComplete: number;
  numberOfExercisesFailed: number;
  lives?: number | null;
  interactiveExercises: any;
  color?: string;
  activeExercise: LessonState["activeExercise"];
}) => {
  const dispatch = useAppDispatch();
  const [hearts, setHeart] = useState(() => {
    return [1, 2, 3];
  });
  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (numberOfExercisesComplete > 0 || numberOfExercisesFailed > 0) {
      setPlay(true);
      setTimeout(() => {
        setPlay(false);
      }, 1000);
    }
  }, [numberOfExercisesComplete, numberOfExercisesFailed]);

  return (
    // <div className="container sticky z-30 mx-auto bg-white top-24 mt-16 sm:mb-18 mb-10 w-full sm:px-12 md:px-18 lg:px-44">
    <div className='sticky z-30 bg-white top-0 pt-20 pb-10 sm:mb-18 mb-10 w-full'>
      <Container className=''>
        <div className='flex items-center gap-4 sm:w-2/3 mx-auto sm:px-2'>
          <div className='h-5 2xl:h-5 p-0.5 rounded-full striped-bg-light flex-1 flex items-center w-full border border-gray-200 '>
            <motion.div
              transition={{ type: "spring" }}
              className={classNames(
                activeExercise?.hasFailed
                  ? "bg-failed"
                  : "bg-color_purple_default",
                "h-full rounded-full relative  transition-all flex pt-1  justify-end"
              )}
              style={{
                width: `${((numberOfExercisesComplete + numberOfExercisesFailed) / totalNumberOfExercises) * 100}%`,
              }}
            >
              <div
                className={classNames(
                  play ? "flex" : "hidden",
                  "justify-end absolute -bottom-6 -right-6 "
                )}
              >
                <Lottie
                  animationData={bubbles}
                  loop={true}
                  style={{ height: "50px" }}
                />
              </div>
              <div
                className='bg-color-purple_lighter rounded-3xl  mx-auto '
                style={{ height: "4px", width: "92%" }}
              ></div>
            </motion.div>
          </div>
          {lives &&
            hearts.map((item) => {
              return lives >= item ? (
                <Image
                  height={20}
                  width={20}
                  key={uuid()}
                  src='http://ispeakitalian.herokuapp.com/heart.svg'
                  className='mr-1'
                  alt=''
                />
              ) : (
                <Image
                  height={20}
                  width={20}
                  key={uuid()}
                  src='https://ispeakitalian.herokuapp.com/heart_placeholder.svg'
                  className='mr-1'
                  alt=''
                />
              );
            })}
        </div>
      </Container>
    </div>
  );
};
