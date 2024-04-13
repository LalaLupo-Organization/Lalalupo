import React from "react"
import { Icon } from "../Icons/Icon"

export default function SuccessToFailureLayout({
  children,
  success,
  meaning,
  audioOutput,
}: {
  children: React.ReactNode
  success: boolean
  solution?: string
  meaning?: any
  audioOutput?: any
}) {
  // const { lessonButtonClick } = useAssessment()

  return (
    <>
      {success ? (
        <audio autoPlay src="https://ispeakitalian.herokuapp.com/correct.mp3"></audio>
      ) : (
        <audio autoPlay src="https://ispeakitalian.herokuapp.com/incorrect.mp3"></audio>
      )}
      <div className="flex items-center">
        <div>
          {success ? (
            <Icon name="SuccessTickSquare" className="h-10 sm:h-14 fill-color_green_default" />
          ) : (
            <Icon name="FailureSquare" className="h-10 sm:h-14 text-xs fill-error" />
          )}
        </div>
        <div className="pb-2 text-white">
          {success ? (
            <>
              {meaning ? (
                <div className="mt-2">
                  <h1 className="text-green-700 text-2xl font-bold  ml-2 leading-7">Meaning of answer:</h1>
                  <p className=" font-light px-2 ml-1 sm:mb-0 text-green-700">{meaning}</p>
                </div>
              ) : (
                <div className="ml-2 text-color_green_default">
                  <h1 className="sm:text-xl text-2xl font-bold ">Correct!</h1>
                  <p className="leading-[0.5rem]">You are doing awesome!</p>
                </div>
              )}
            </>
          ) : (
            <>
              {audioOutput && (
                <div className="mt-2">
                  <h1 className="text-red-700 text-2xl font-bold  ml-2 leading-7">You said:</h1>
                  <p className=" font-light px-2 ml-1 sm:mb-0 text-red-700 truncate"> {audioOutput} </p>
                </div>
              )}
              <div className="ml-2 text-error">
                {/* <h1 className="text-red-700 text-2xl font-bold  ml-2 leading-7">
                  Correct answer:
                </h1>
                <p className=" font-light px-2 ml-1 sm:mb-0 text-red-700">
                  {" "}
                  {solution}{" "}
                </p> */}
                <h1 className="sm:text-xl text-2xl font-bold ">Bad Luck!</h1>
                <p className="leading-[0.5rem]">We believe in you!</p>
              </div>
              {meaning && (
                <div className="mt-2">
                  <h1 className="text-red-700 text-2xl font-bold  ml-2 leading-7">Meaning of answer:</h1>
                  <p className=" font-light px-2 ml-1 sm:mb-0 text-red-700"> {meaning} </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {/* <div className='sm:col-span-3 col-span-2 flex justify-end items-center sm:hidden '>
        <FlagIcon className={classNames(success ? 'hidden' : 'h-5 text-red-500 sm:hidden  mr-1')} />
      </div> */}

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
