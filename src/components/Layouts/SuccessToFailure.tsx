import React from "react"
import { Icon } from "../Icons/Icon"
import classNames from "@/helpers/classNames"
import { SuccessToFailureProps } from "@/types/success-to-failure.types"

export default function SuccessToFailureLayout({ children, status }: SuccessToFailureProps) {
  // const { lessonButtonClick } = useAssessment()
  const success = status === "success"
  const warning = status === "warning"
  const audios: Record<SuccessToFailureProps["status"], string> = {
    success: "https://ispeakitalian.herokuapp.com/correct.mp3",
    warning: "https://ispeakitalian.herokuapp.com/incorrect.mp3",
    failure: "https://ispeakitalian.herokuapp.com/incorrect.mp3",
  }
  const titles: Record<SuccessToFailureProps["status"], string> = {
    success: "Correct!",
    warning: "Doesn't sound right.",
    failure: "Bad luck",
  }
  const subtitles: Record<SuccessToFailureProps["status"], string> = {
    success: "You are doing awesome!",
    warning: "Try again.",
    failure: "We believe in you!",
  }
  return (
    <>
      <audio autoPlay src={audios[status]}></audio>
      <div className="flex items-center">
        <div>
          {success ? (
            <Icon name="SuccessTickSquare" className="h-10 sm:h-14 fill-color_green_default" />
          ) : (
            <Icon name="FailureSquare" className={classNames("h-10 sm:h-14", warning ? "fill-warning" : "fill-error")} />
          )}
        </div>
        <div className="pb-2 text-white">
          <>
            {/* {meaning ? (
                <div className="mt-2">
                  <h1 className="text-green-700 text-2xl font-bold  ml-2 leading-7">Meaning of answer:</h1>
                  <p className=" font-light px-2 ml-1 sm:mb-0 text-green-700">{meaning}</p>
                </div>
              ) : ( */}
            <div className={classNames("ml-2", success ? "text-color_green_default" : warning ? "text-warning" : "text-error")}>
              <h1 className="sm:text-xl text-2xl font-bold ">{titles[status]}</h1>
              <p className="leading-[0.5rem]">{subtitles[status]}</p>
            </div>
            {/* )} */}
          </>
          <>
            {/* {audioOutput && (
                <div className="mt-2">
                  <h1 className="text-red-700 text-2xl font-bold  ml-2 leading-7">You said:</h1>
                  <p className=" font-light px-2 ml-1 sm:mb-0 text-red-700 truncate"> {audioOutput} </p>
                </div>
              )} */}
          </>
        </div>
      </div>

      <div className="sm:col-span-1 sm:col-start-6 col-span-6 flex items-center flex-col ">
        {children}{" "}
        {/* <div className='hidden sm:flex '>
          <div className='ml-2 mt-1 flex justify-center  items-center'>
            <FlagIcon className={classNames(success ? 'hidden' : 'h-4 text-red-500  hidden mr-1 sm:block')} />

            <p
              className={classNames(
                success ? 'hidden' : 'text-red-500',

                'text-sm font-base'
              )}
            >
              REPORT BUG
            </p>
          </div>
        </div>{' '} */}
      </div>
    </>
  )
}
