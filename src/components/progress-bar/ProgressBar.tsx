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
export default function ProgressBar({
  remainingExercises,
  totalNumberOfExercises,
  numberOfExercisesComplete,
  interactiveExercises,
  lives,
  numberOfExercisesFailed,
  color = "bg-default_progress_bar",
}: {
  remainingExercises: number;
  totalNumberOfExercises: number;
  numberOfExercisesComplete: number;
  numberOfExercisesFailed: number;
  lives?: number | null;
  interactiveExercises: any;
  color?: string;
}) {
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
    <div className='container  mx-auto px-7 sm:px-0  mt-6 sm:mb-18 mb-10 w-full'>
      <div className='flex items-center'>
        {/* {interactiveExercises && (
          <div
            onClick={(e) => dispatch(setExitDisplay(true))}
            className="cursor-pointer">
            <XMarkIcon className="h-7 sm:h-7 sm:mr-4 mr-2 text-gray-400" />
          </div>
        )} */}

        <div className='h-5 rounded-lg bg-gray-200 md:w-full  sm:w-3/4   mr-4 border-2 flex items-center w-full '>
          <motion.div
            transition={{ type: "spring" }}
            className='bg-color-purple_default h-4 rounded-lg relative  transition-all flex pt-1  justify-end'
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
    </div>
  );
}
