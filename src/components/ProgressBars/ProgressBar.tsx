import { XMarkIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { v4 as uuid } from "uuid"

import bubbles from "@/public/bubbles.json"

import classNames from "@/helpers/classNames"

import { LessonState } from "@/types/lesson.types"

import Container from "../Container"
export const ProgressBar = ({
  totalNumberOfExercises,
  numberOfExercisesComplete,
  lives,
  numberOfExercisesFailed,
  activeExercise,
  id,
}: {
  remainingExercises: number
  totalNumberOfExercises: number
  numberOfExercisesComplete: number
  numberOfExercisesFailed: number
  lives?: number | null
  interactiveExercises: any
  color?: string
  activeExercise: LessonState["activeExercise"]
  id: string | null
}) => {
  const [hearts] = useState(() => {
    return [1, 2, 3]
  })
  const [play, setPlay] = useState(false)
  useEffect(() => {
    if (numberOfExercisesComplete > 0 || numberOfExercisesFailed > 0) {
      setPlay(true)
      setTimeout(() => {
        setPlay(false)
      }, 1000)
    }
  }, [numberOfExercisesComplete, numberOfExercisesFailed])

  return (
    <>
      <div className="sticky z-30 bg-white top-0  pt-8  w-full">
        <Container className="flex">
          <div className="flex items-center gap-4 w-full sm:w-2/3 mx-auto sm:px-2">
            <div className="h-5 2xl:h-5 p-0.5 rounded-full striped-bg-light flex-1 flex items-center w-full border border-gray-200 ">
              <motion.div
                transition={{ type: "spring" }}
                className={classNames(
                  activeExercise?.hasFailed ? "bg-failed" : "bg-color_purple_default",
                  "h-full rounded-full relative  transition-all flex pt-1  justify-end"
                )}
                style={{
                  width: `${((numberOfExercisesComplete + numberOfExercisesFailed) / totalNumberOfExercises) * 100}%`,
                }}
              >
                <div className={classNames(play ? "flex" : "hidden", "justify-end absolute -bottom-6 -right-6 ")}>
                  <Lottie animationData={bubbles} loop={true} style={{ height: "50px" }} />
                </div>
                <div className="bg-color-purple_lighter rounded-3xl  mx-auto " style={{ height: "4px", width: "92%" }}></div>
              </motion.div>
            </div>
            {lives &&
              hearts.map(item => {
                return lives >= item ? (
                  <Image height={20} width={20} key={uuid()} src="http://ispeakitalian.herokuapp.com/heart.svg" className="mr-1" alt="" />
                ) : (
                  <Image
                    height={20}
                    width={20}
                    key={uuid()}
                    src="https://ispeakitalian.herokuapp.com/heart_placeholder.svg"
                    className="mr-1"
                    alt=""
                  />
                )
              })}
          </div>
          {id && (
            <Link
              href="/"
              // onClick={(e) => dispatch(setExitDisplay(true))}
              className="cursor-pointer sm:absolute ml-2 sm:right-4"
            >
              <XMarkIcon className="h-7 sm:h-7 sm:mr-4 mr-2 text-black" />
            </Link>
          )}
        </Container>
      </div>
    </>
  )
}
