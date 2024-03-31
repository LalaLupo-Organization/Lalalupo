import React, { useEffect } from "react";
import {
  FlagIcon,
  XCircleIcon,
  BookOpenIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import classNames from "@/helpers/classNames";
import useAssessment from "@/hooks/useAssessment";

export default function SuccessToFailureLayout({
  children,
  success,
  solution,
  meaning,
  audioOutput,
}: {
  children: React.ReactNode;
  success: boolean;
  solution?: string;
  meaning?: any;
  audioOutput?: any;
}) {
  const { lessonButtonClick } = useAssessment();

  return (
    <>
      {success ? (
        <audio
          autoPlay
          src="https://ispeakitalian.herokuapp.com/correct.mp3"></audio>
      ) : (
        <audio
          autoPlay
          src="https://ispeakitalian.herokuapp.com/incorrect.mp3"></audio>
      )}
      <div className="sm:col-span-5 col-span-4 flex items-center col-start-1">
        <div>
          {success ? (
            <CheckCircleIcon className="h-16 text-green-500 bg-white rounded-full hidden sm:block" />
          ) : (
            <XCircleIcon className="h-16 text-red-500 bg-white rounded-full hidden sm:block" />
          )}
        </div>
        <div className="pb-4 sm:pb-0">
          {success ? (
            <>
              {meaning ? (
                <div className="mt-2">
                  <h1 className="text-green-700 text-2xl font-bold  ml-2 leading-7">
                    Meaning of answer:
                  </h1>
                  <p className=" font-light px-2 ml-1 sm:mb-0 text-green-700">
                    {meaning}
                  </p>
                </div>
              ) : (
                <h1 className="text-green-700 sm:text-xl text-2xl font-bold  ml-2 leading-7">
                  Bravo
                </h1>
              )}
            </>
          ) : (
            <>
              {audioOutput && (
                <div className="mt-2">
                  <h1 className="text-red-700 text-2xl font-bold  ml-2 leading-7">
                    You said:
                  </h1>
                  <p className=" font-light px-2 ml-1 sm:mb-0 text-red-700 truncate">
                    {" "}
                    {audioOutput}{" "}
                  </p>
                </div>
              )}
              <div className="mt-2">
                <h1 className="text-red-700 text-2xl font-bold  ml-2 leading-7">
                  Correct answer:
                </h1>
                <p className=" font-light px-2 ml-1 sm:mb-0 text-red-700">
                  {" "}
                  {solution}{" "}
                </p>
              </div>
              {meaning && (
                <div className="mt-2">
                  <h1 className="text-red-700 text-2xl font-bold  ml-2 leading-7">
                    Meaning of answer:
                  </h1>
                  <p className=" font-light px-2 ml-1 sm:mb-0 text-red-700">
                    {" "}
                    {meaning}{" "}
                  </p>
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
  );
}
